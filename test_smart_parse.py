import os
import re
import fitz

def parse_pdf_smart(pdf_path):
    doc = fitz.open(pdf_path)
    all_lines = []
    for page in doc:
        txt = page.get_text()
        lines = [l.strip() for l in txt.split("\n") if l.strip()]
        all_lines.extend(lines)

    items = []
    
    # 1. Try numbered lines first
    numbered = [l for l in all_lines if re.match(r"^\d+[\.\)]\s*", l)]
    if len(numbered) >= 3:
        for l in numbered:
            m = re.match(r"^\d+[\.\)]\s*(.+)$", l)
            desc = m.group(1).strip() if m else l
            if len(desc) > 3:
                items.append(desc)
        return items

    # 2. If no numbered lines, find checklist section
    in_checklist = False
    stop_headers = ["GENERAL", "DEFECT FOUND", "COMPONENT / MATERIAL", "PAGE :", "PERFORMED BY", "VERIFIED BY", "A. REFERENCES", "B. FIXTURES", "C. CONSUMABLES"]
    
    for l in all_lines:
        up = l.upper()
        if "DESCRIPTION" in up and ("ITEM" in up or "PERFORMED" in up):
            in_checklist = True
            continue
        if in_checklist:
            if any(sh in up for sh in stop_headers):
                if up not in ["ITEM", "DESCRIPTION", "PERFORMED BY"]:
                    in_checklist = False
                    continue
            # Filter noise
            if len(l) > 4 and not up.startswith("GRS-") and not up.startswith("PREVENTIVE") and not up.startswith("PAGE "):
                if not any(k in up for k in ["SAM-SAM", "ISSUE SL", "EFF. DATE", "TASK CARD NO", "GSE NUMBER", "W.O. NO"]):
                    items.append(l)

    return items

samples = [
    r"Z:\5.CM & PM form\TASK CARD SHED\PS-SAM-SAM-TLM\PS-SAM-SAM-A-TLM.pdf",
    r"Z:\5.CM & PM form\TASK CARD SHED\VA-TYT-COM-TLM\VA-TYT-COM-A-TLM.pdf",
    r"Z:\5.CM & PM form\TASK CARD SHED\BC-SAM-SAM-TLM\BC-SAM-SAM-A-TLM.pdf",
    r"Z:\5.CM & PM form\TASK CARD SHED\ES-SAM-SAM-TLM\PS-SAM-SAM-A-TLM.pdf"
]

for s in samples:
    if os.path.exists(s):
        res = parse_pdf_smart(s)
        print(os.path.basename(s), "-> Found items:", len(res))
        print("  Items:", res[:3])
