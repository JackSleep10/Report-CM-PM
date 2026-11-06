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

def parse_docx_items(docx_path):
    items = []
    header_info = {"interval": "", "taskCardNo": "", "subject": ""}
    try:
        with zipfile.ZipFile(docx_path) as z:
            tree = ET.fromstring(z.read("word/document.xml"))
            paragraphs = []
            for p in tree.iter("{http://schemas.openxmlformats.org/wordprocessingml/2006/main}p"):
                t = "".join(node.text for node in p.iter() if node.text).strip()
                if t:
                    paragraphs.append(t)
            
            # Extract header info
            full_text = " ".join(paragraphs)
            m_interval = re.search(r"INTERVAL\s*[:\s]+([^\n\r]+?)(?:EFFECTIVITY|PAGE|\d+\s+of)", full_text, re.IGNORECASE)
            if m_interval:
                header_info["interval"] = m_interval.group(1).strip()
            
            # Find checklist items
            # In tables or paragraphs, lines starting with number like "1.", "1 )", "2. "
            cur_item = None
            for p in paragraphs:
                m = re.match(r"^(\d+)[\.\)]\s*(.+)$", p)
                if m:
                    if cur_item:
                        items.append(cur_item)
                    cur_item = {"no": int(m.group(1)), "desc": m.group(2).strip()}
                elif cur_item and not any(k in p.upper() for k in ["PAGE", "DATE", "PERFORMED", "VERIFIED", "GSE NUMBER", "SIGNATURE"]):
                    # Continuation of previous description
                    if len(p) > 2 and not p.startswith("---"):
                        cur_item["desc"] += " " + p.strip()
            if cur_item:
                items.append(cur_item)
    except Exception as e:
        pass
    return header_info, items

def parse_pdf_items(pdf_path):
    items = []
    header_info = {"interval": "", "taskCardNo": "", "subject": ""}
    if not fitz:
        return header_info, items
    try:
        doc = fitz.open(pdf_path)
        all_lines = []
        for page in doc:
            txt = page.get_text()
            lines = [l.strip() for l in txt.split("\n") if l.strip()]
            all_lines.extend(lines)
        
        full_text = " ".join(all_lines)
        m_interval = re.search(r"INTERVAL\s*[:\s]+([^\n\r]+?)(?:EFFECTIVITY|PAGE|\d+\s+of)", full_text, re.IGNORECASE)
        if m_interval:
            header_info["interval"] = m_interval.group(1).strip()
        
        cur_item = None
        for l in all_lines:
            m = re.match(r"^(\d+)[\.\)]\s*(.+)$", l)
            if m:
                if cur_item:
                    items.append(cur_item)
                cur_item = {"no": int(m.group(1)), "desc": m.group(2).strip()}
            elif cur_item and not any(k in l.upper() for k in ["PAGE", "DATE", "PERFORMED", "VERIFIED", "GSE NUMBER", "SIGNATURE", "TASK CARD NO"]):
                if len(l) > 2 and not l.startswith("---") and not l.startswith("GRS-"):
                    cur_item["desc"] += " " + l.strip()
        if cur_item:
            items.append(cur_item)
    except Exception as e:
        pass
    return header_info, items

def build_catalog():
    folders = [f for f in os.listdir(SHED_DIR) if os.path.isdir(os.path.join(SHED_DIR, f))]
    catalog = {}

    for folder in sorted(folders):
        folder_path = os.path.join(SHED_DIR, folder)
        files = os.listdir(folder_path)
        
        # Determine prefix and equipment type
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
        
        # Look for check levels: A, B, C or Monthly
        # Prefer docx, fallback to pdf
        checks_found = {}
        for f in files:
            up = f.upper()
            if up.startswith("~$"): continue
            
            check_level = None
            if "-A-" in up or " CHECK A" in up or " A.PDF" in up or " A.DOC" in up:
                check_level = "A"
            elif "-B-" in up or " CHECK B" in up or " B.PDF" in up or " B.DOC" in up:
                check_level = "B"
            elif "-C-" in up or " CHECK C" in up or " C.PDF" in up or " C.DOC" in up:
                check_level = "C"
            elif "MONTHLY" in up or "CHECK" in up:
                check_level = "A" # Default monthly check
            
            if check_level and check_level not in checks_found:
                if f.endswith(".docx"):
                    checks_found[check_level] = ("docx", os.path.join(folder_path, f))
                elif f.endswith(".pdf") and check_level not in checks_found:
                    checks_found[check_level] = ("pdf", os.path.join(folder_path, f))

        # Also check for any pdf if checks_found is missing some
        for f in files:
            up = f.upper()
            if not f.endswith(".pdf"): continue
            check_level = None
            if "-A-" in up or " A.PDF" in up or "CHECK A" in up: check_level = "A"
            elif "-B-" in up or " B.PDF" in up or "CHECK B" in up: check_level = "B"
            elif "-C-" in up or " C.PDF" in up or "CHECK C" in up: check_level = "C"
            if check_level and check_level not in checks_found:
                checks_found[check_level] = ("pdf", os.path.join(folder_path, f))

        # If still empty, check if there's a single main pdf
        if not checks_found:
            for f in files:
                if f.endswith(".pdf") or f.endswith(".docx"):
                    checks_found["A"] = ("docx" if f.endswith(".docx") else "pdf", os.path.join(folder_path, f))
                    break

        for lvl, (ftype, fpath) in checks_found.items():
            if ftype == "docx":
                h_info, items = parse_docx_items(fpath)
                if not items and fpath.replace(".docx", ".pdf") in [os.path.join(folder_path, x) for x in files]:
                    h_info, items = parse_pdf_items(fpath.replace(".docx", ".pdf"))
            else:
                h_info, items = parse_pdf_items(fpath)
            
            # Clean up items
            clean_items = []
            for item in items:
                desc = re.sub(r"\s+", " ", item["desc"]).strip()
                # filter out non-checklist noise
                if len(desc) > 3 and not desc.upper().startswith("GSE NUMBER"):
                    clean_items.append({"no": len(clean_items) + 1, "desc": desc})
            
            catalog[folder]["checks"][lvl] = {
                "checkLevel": lvl,
                "file": os.path.basename(fpath),
                "interval": h_info.get("interval", ""),
                "itemCount": len(clean_items),
                "items": clean_items
            }

    print(f"Catalog built for {len(catalog)} folders.")
    total_checks = sum(len(c["checks"]) for c in catalog.values())
    total_items = sum(sum(chk["itemCount"] for chk in c["checks"].values()) for c in catalog.values())
    print(f"Total Check levels found: {total_checks}")
    print(f"Total Checklist items extracted: {total_items}")

    with open(r"CorrectiveRequestApp\PmTaskCardTemplates.json", "w", encoding="utf-8") as out:
        json.dump(catalog, out, ensure_ascii=False, indent=2)
    print("Saved to CorrectiveRequestApp/PmTaskCardTemplates.json")

if __name__ == "__main__":
    build_catalog()
