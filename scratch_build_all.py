import os
import re
import json
import zipfile
import xml.etree.ElementTree as ET
try:
    import fitz
except ImportError:
    fitz = None

SHED_DIR = r"Z:\5.CM & PM form\TASK CARD SHED"

def extract_docx_table_items(path):
    if not os.path.exists(path):
        return []
    items = []
    try:
        with zipfile.ZipFile(path) as z:
            tree = ET.fromstring(z.read("word/document.xml"))
            ns = "{http://schemas.openxmlformats.org/wordprocessingml/2006/main}"
            for tbl in tree.iter(f"{ns}tbl"):
                rows = list(tbl.iter(f"{ns}tr"))
                in_item_section = False
                for r in rows:
                    cells = ["".join(n.text for n in tc.iter() if n.text).strip() for tc in r.iter(f"{ns}tc")]
                    row_str = " ".join(cells).upper()
                    if "ITEM" in row_str and "DESCRIPTION" in row_str:
                        in_item_section = True
                        continue
                    if in_item_section:
                        if any(k in row_str for k in ["DEFECT FOUND", "RECTIFICATION", "COMPONENT / MATERIAL", "GENERAL", "PAGE :"]):
                            in_item_section = False
                            continue
                        desc = ""
                        for c in cells:
                            if len(c) > 3 and not c.upper().endswith("CHECK") and not c.isdigit() and not c.upper().startswith("GSE NUMBER"):
                                desc = c
                                break
                        if desc and desc not in items:
                            items.append(desc)
    except Exception as e:
        pass
    return items

def extract_from_pdf(pdf_path):
    if not fitz or not os.path.exists(pdf_path):
        return []
    try:
        doc = fitz.open(pdf_path)
        all_lines = []
        for page in doc:
            txt = page.get_text()
            all_lines.extend([l.strip() for l in txt.split("\n") if l.strip()])
        
        numbered = []
        for l in all_lines:
            m = re.match(r"^(\d+)[\.\)]\s*(.+)$", l)
            if m:
                desc = m.group(2).strip()
                if len(desc) > 3 and not desc.upper().startswith("GSE NUMBER") and not desc.upper().startswith("TASK CARD"):
                    numbered.append(desc)
        
        if len(numbered) >= 3:
            return numbered
        
        items = []
        for p in range(1, len(doc)):
            txt = doc[p].get_text()
            lines = [l.strip() for l in txt.split("\n") if l.strip()]
            capture = False
            for l in lines:
                if l in ["DESCRIPTION", "PERFORMED BY"]:
                    capture = True
                    continue
                if capture:
                    if any(k in l.upper() for k in ["DEFECT FOUND", "RECTIFICATION", "COMPONENT / MATERIAL", "GENERAL", "PART NO.", "S/N NO"]):
                        capture = False
                        continue
                    up = l.upper()
                    if len(l) > 5 and not up.startswith("PAGE") and not up.startswith("GRS-") and not up.startswith("PREVENTIVE") and not up.startswith("ISSUE SL"):
                        if not any(k in up for k in ["TASK CARD NO", "GSE NUMBER", "W.O. NO", "SER NO", "EFF. DATE"]):
                            if l not in items:
                                items.append(l)
        return items
    except Exception as e:
        return []

def extract_from_docx(docx_path):
    # Try table extraction first
    tbl_items = extract_docx_table_items(docx_path)
    if len(tbl_items) >= 3:
        return tbl_items
    
    try:
        with zipfile.ZipFile(docx_path) as z:
            tree = ET.fromstring(z.read("word/document.xml"))
            texts = [n.text.strip() for n in tree.iter() if n.text and n.text.strip()]
            
            combined = []
            for i in range(len(texts)):
                t = texts[i].strip()
                m = re.match(r"^(\d+)[\.\)]$", t)
                if m and i + 1 < len(texts):
                    nxt = texts[i+1].strip()
                    if len(nxt) > 3 and nxt not in combined:
                        combined.append(nxt)
                else:
                    m2 = re.match(r"^(\d+)[\.\)]\s*(.+)$", t)
                    if m2:
                        d = m2.group(2).strip()
                        if d not in combined:
                            combined.append(d)
            if len(combined) >= 3:
                return combined
    except Exception as e:
        pass
    return []

def build_all():
    folders = [f for f in os.listdir(SHED_DIR) if os.path.isdir(os.path.join(SHED_DIR, f))]
    catalog = {}

    for folder in sorted(folders):
        folder_path = os.path.join(SHED_DIR, folder)
        files = os.listdir(folder_path)
        parts = folder.split("-")
        gse_type = parts[0] if parts else ""
        brand = parts[1] if len(parts) > 1 else ""
        model = parts[2] if len(parts) > 2 else ""

        catalog[folder] = {
            "folder": folder,
            "gseType": gse_type,
            "brand": brand,
            "model": model,
            "checks": {}
        }

        for lvl in ["A", "B", "C"]:
            matched_pdf = None
            matched_docx = None
            for f in files:
                up = f.upper()
                if up.startswith("~$"): continue
                if f"-{lvl}-" in up or f" {lvl}.PDF" in up or f"CHECK {lvl}" in up or f"-{lvl}." in up:
                    if f.endswith(".docx") and not matched_docx:
                        matched_docx = os.path.join(folder_path, f)
                    elif f.endswith(".pdf") and not matched_pdf:
                        matched_pdf = os.path.join(folder_path, f)

            items = []
            file_used = ""
            if matched_docx:
                items = extract_from_docx(matched_docx)
                file_used = os.path.basename(matched_docx)
            if not items and matched_pdf:
                items = extract_from_pdf(matched_pdf)
                file_used = os.path.basename(matched_pdf)

            if items:
                clean = []
                seen = set()
                for it in items:
                    c = re.sub(r"\s+", " ", it).strip()
                    if c and c not in seen and len(c) > 3:
                        seen.add(c)
                        clean.append({"no": len(clean) + 1, "desc": c})
                
                catalog[folder]["checks"][lvl] = {
                    "checkLevel": lvl,
                    "file": file_used,
                    "itemCount": len(clean),
                    "items": clean
                }

        # Fallback for single main files or non-standard naming
        if not catalog[folder]["checks"]:
            for f in files:
                if f.startswith("~$"): continue
                fp = os.path.join(folder_path, f)
                items = []
                if f.endswith(".docx"):
                    items = extract_from_docx(fp)
                elif f.endswith(".pdf"):
                    items = extract_from_pdf(fp)
                if items:
                    clean = [{"no": i+1, "desc": it} for i, it in enumerate(items)]
                    catalog[folder]["checks"]["A"] = {
                        "checkLevel": "A",
                        "file": f,
                        "itemCount": len(clean),
                        "items": clean
                    }
                    break

    # If any model still has 0 checks (e.g. PS-TLD-404), copy from same gseType
    for folder, data in catalog.items():
        if not data["checks"]:
            gt = data["gseType"]
            # find another folder with same gseType that has checks
            for other_f, other_d in catalog.items():
                if other_f != folder and other_d["gseType"] == gt and other_d["checks"]:
                    data["checks"] = other_d["checks"]
                    print(f"Fallback: {folder} populated from {other_f}")
                    break

    print(f"\nFinal catalog built for {len(catalog)} folders.")
    for k, v in catalog.items():
        chks = {l: len(c["items"]) for l, c in v["checks"].items()}
        print(f"  {k}: {chks}")

    with open(r"CorrectiveRequestApp\PmTaskCardTemplates.json", "w", encoding="utf-8") as out:
        json.dump(catalog, out, ensure_ascii=False, indent=2)

if __name__ == "__main__":
    build_all()
