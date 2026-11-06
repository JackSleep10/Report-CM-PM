import os
from docx import Document
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT, WD_ALIGN_VERTICAL
from docx.oxml import OxmlElement, parse_xml
from docx.oxml.ns import nsdecls, qn

def set_cell_border(cell, **kwargs):
    """
    kwargs: top, bottom, left, right
    values: {"sz": 4, "val": "single", "color": "000000"}
    """
    tcPr = cell._tc.get_or_add_tcPr()
    tcBorders = parse_xml(r'''
        <w:tcBorders {} >
            <w:top w:val="{}" w:sz="{}" w:space="0" w:color="{}"/>
            <w:left w:val="{}" w:sz="{}" w:space="0" w:color="{}"/>
            <w:bottom w:val="{}" w:sz="{}" w:space="0" w:color="{}"/>
            <w:right w:val="{}" w:sz="{}" w:space="0" w:color="{}"/>
        </w:tcBorders>
    '''.format(
        nsdecls('w'),
        kwargs.get('top', {}).get('val', 'single'), kwargs.get('top', {}).get('sz', '4'), kwargs.get('top', {}).get('color', '000000'),
        kwargs.get('left', {}).get('val', 'single'), kwargs.get('left', {}).get('sz', '4'), kwargs.get('left', {}).get('color', '000000'),
        kwargs.get('bottom', {}).get('val', 'single'), kwargs.get('bottom', {}).get('sz', '4'), kwargs.get('bottom', {}).get('color', '000000'),
        kwargs.get('right', {}).get('val', 'single'), kwargs.get('right', {}).get('sz', '4'), kwargs.get('right', {}).get('color', '000000')
    ))
    tcPr.append(tcBorders)

def set_cell_shading(cell, color_hex):
    shd = parse_xml(f'<w:shd {nsdecls("w")} w:fill="{color_hex}"/>')
    cell._tc.get_or_add_tcPr().append(shd)

def create_master_docx():
    out_dir = r"c:\Users\THAILIONAIR\Desktop\Project report\GP-409-E-CUP-TLM"
    doc_path = os.path.join(out_dir, "GP-409-E-CUP-TLM.docx")
    logo_path = os.path.join(out_dir, "image1.jpeg")

    doc = Document()

    # Set page margins (A4, narrow margins to fit matrix)
    sections = doc.sections
    for s in sections:
        s.page_width = Inches(8.27)
        s.page_height = Inches(11.69)
        s.top_margin = Inches(0.4)
        s.bottom_margin = Inches(0.4)
        s.left_margin = Inches(0.4)
        s.right_margin = Inches(0.4)

    # PAGE 1
    # Header: Logo & Title
    hdr_tbl = doc.add_table(rows=1, cols=2)
    hdr_tbl.alignment = WD_TABLE_ALIGNMENT.CENTER
    c0, c1 = hdr_tbl.rows[0].cells
    c0.width = Inches(1.8)
    c1.width = Inches(5.6)
    if os.path.exists(logo_path):
        p_logo = c0.paragraphs[0]
        p_logo.add_run().add_picture(logo_path, width=Inches(1.5))
    p_title = c1.paragraphs[0]
    p_title.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r_title = p_title.add_run("PREVENTIVE MAINTENANCE FOR GROUND POWER UNIT (GP)\nPREVENTIVE MAINTENANCE SCHEDULE")
    r_title.bold = True
    r_title.font.size = Pt(11)

    # Info table
    info_tbl = doc.add_table(rows=3, cols=4)
    info_tbl.alignment = WD_TABLE_ALIGNMENT.CENTER
    info_data = [
        [("GSE Name: GROUND POWER UNIT (GP) GPU-409-E-CUP", 2), ("", 0), ("Date: ____/____/____", 2), ("", 0)],
        [("GSE No.: ________________________", 1), ("Operated By: ________________", 1), ("HR Meter: ____________________", 1), ("Serial No.: __________________", 1)],
        [("Engine Model: CUMMINS QSB4.5", 2), ("", 0), ("Station: ____________________", 2), ("", 0)]
    ]
    for r_idx, row in enumerate(info_data):
        for c_idx, (text, span) in enumerate(row):
            if span > 0:
                cell = info_tbl.rows[r_idx].cells[c_idx]
                cell.text = text
                cell.paragraphs[0].runs[0].font.size = Pt(8)
                set_cell_border(cell)

    doc.add_paragraph().paragraph_format.space_after = Pt(4)

    # Checklist Table (Page 1: Items 1 - 17)
    items_p1 = [
        ("1", "เปลี่ยนน้ำมันเครื่อง\nChange engine oil", ["", "X", "X", "", "X", "X", "X"]),
        ("2", "เปลี่ยนไส้กรองน้ำมันเครื่อง\nChange oil filter", ["", "X", "X", "", "X", "X", "X"]),
        ("3", "ตรวจเช็คระบบหล่อเย็นหม้อน้ำ\nCheck cooling system", ["", "X", "X", "", "X", "X", "X"]),
        ("4", "เปลี่ยนกรองดักน้ำเชื้อเพลิง\nChange fuel filter insert (Pre- filter element)", ["", "", "X", "", "X", "X", "X"]),
        ("5", "เปลี่ยนกรองน้ำเชื้อเพลิง\nChange fuel filter insert (Micro- filter element)", ["", "", "X", "", "X", "X", "X"]),
        ("6", "ทำความสะอาดกรองดักน้ำมันเชื้อเพลิง\nClean fuel strainer", ["", "X", "X", "", "X", "X", "X"]),
        ("7", "ตรวจเช็คและทำความสะอาดการระบายอากาศ\nCheck/clean ventilation", ["", "", "X", "", "X", "X", "X"]),
        ("8", "ตรวจเช็คและทำความสะอาดหน้าสัมผัสต่างๆ\nCheck/clean contactors", ["", "", "X", "", "X", "X", "X"]),
        ("9", "ตรวจเช็คและทำความสะอาดลูกปืน\nCheck/clean bearing", ["", "", "X", "", "X", "X", "X"]),
        ("10", "ทำความสะอาดหม้อพักท่อไอเสีย\nClean exhaust silencer", ["", "X", "X", "", "X", "X", "X"]),
        ("11", "ตรวจเช็คแบตเตอรี่และขั้วต่อ\nCheck battery and lead connections", ["", "X", "X", "", "X", "X", "X"]),
        ("12", "ตรวจเช็คสายพานเครื่อง\nCheck V-belt tension", ["", "X", "X", "", "X", "X", "X"]),
        ("13", "เปลี่ยนน้ำยาหล่อเย็น\nChange coolant", ["", "", "", "", "X", "X", "X"]),
        ("14", "ตรวจเช็คแท่นยึดเครื่องการยึด\nCheck fastenings", ["", "", "", "", "X", "X", "X"]),
        ("15", "ตรวจเช็คมอเตอร์สตาร์ท ไดชาร์จ เรกกูเรเตอร์\nCheck starter, alternator, regurator", ["", "", "", "", "X", "X", "X"]),
        ("16", "เช็คและปรับตั้งวาล์วถ้าจำเป็น\nCheck valve clearance and adjust if necessary", ["", "", "", "", "X", "X", "X"]),
        ("17", "ตรวจเช็คหัวฉีด\nCheck injector", ["", "", "", "", "", "", "X"]),
    ]

    headers_p1 = ["No.", "CHECK LIST / PREVENTIVE MAINTENANCE SCHEDULE", "Every\n125 H", "Every\n250 H", "Every\n500 H", "Every\n750 H", "Every\n1000 H", "Every\n2000 H", "Every\n3000 H", "REMARK"]
    widths_p1 = [Inches(0.4), Inches(3.2), Inches(0.45), Inches(0.45), Inches(0.45), Inches(0.45), Inches(0.5), Inches(0.5), Inches(0.5), Inches(0.7)]

    chk_tbl = doc.add_table(rows=len(items_p1)+1, cols=len(headers_p1))
    chk_tbl.alignment = WD_TABLE_ALIGNMENT.CENTER

    # Format header row
    hdr_row = chk_tbl.rows[0]
    for i, h in enumerate(headers_p1):
        c = hdr_row.cells[i]
        c.width = widths_p1[i]
        c.text = h
        c.paragraphs[0].alignment = WD_ALIGN_PARAGRAPH.CENTER
        for r in c.paragraphs[0].runs:
            r.font.size = Pt(7.5)
            r.bold = True
        set_cell_border(c)
        set_cell_shading(c, "E0E0E0")

    for r_idx, (num, desc, intervals) in enumerate(items_p1):
        row = chk_tbl.rows[r_idx+1]
        row.cells[0].text = num
        row.cells[0].paragraphs[0].alignment = WD_ALIGN_PARAGRAPH.CENTER
        row.cells[1].text = desc
        for ci, val in enumerate(intervals):
            c_val = row.cells[ci+2]
            c_val.text = val
            c_val.paragraphs[0].alignment = WD_ALIGN_PARAGRAPH.CENTER
            if val == "X":
                c_val.paragraphs[0].runs[0].bold = True
        row.cells[9].text = ""

        for ci in range(10):
            cell = row.cells[ci]
            cell.width = widths_p1[ci]
            for r in cell.paragraphs[0].runs:
                r.font.size = Pt(7.0)
            set_cell_border(cell)

    # Signatures
    doc.add_paragraph().paragraph_format.space_after = Pt(4)
    sig_tbl = doc.add_table(rows=1, cols=2)
    sig_tbl.alignment = WD_TABLE_ALIGNMENT.CENTER
    c_sig0, c_sig1 = sig_tbl.rows[0].cells
    c_sig0.text = "Reported by: ___________________________\n                     GSE Maintenance\nDate: ________/_________/_________"
    c_sig1.text = "Verified by: ___________________________\n                   GSE Maintenance supervisor\nDate: ________/_________/_________"
    for c in [c_sig0, c_sig1]:
        for r in c.paragraphs[0].runs:
            r.font.size = Pt(7.5)
        set_cell_border(c)

    p_foot1 = doc.add_paragraph()
    p_foot1.paragraph_format.space_before = Pt(4)
    r_foot1 = p_foot1.add_run("GRS-RM-CK-070  l  Preventive Maintenance for Ground Power Unit (GP) GPU-409-E-CUP  l  Issue SL001 - Rev. 00 - Eff. Date: 26 OCT 26        Page 1 of 2")
    r_foot1.font.size = Pt(6.5)

    # ==========================================
    # PAGE 2
    # ==========================================
    doc.add_page_break()

    # Page 2 header
    hdr_tbl2 = doc.add_table(rows=1, cols=2)
    hdr_tbl2.alignment = WD_TABLE_ALIGNMENT.CENTER
    c0, c1 = hdr_tbl2.rows[0].cells
    c0.width = Inches(1.8)
    c1.width = Inches(5.6)
    if os.path.exists(logo_path):
        c0.paragraphs[0].add_run().add_picture(logo_path, width=Inches(1.5))
    p_title2 = c1.paragraphs[0]
    p_title2.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r_title2 = p_title2.add_run("PREVENTIVE MAINTENANCE FOR GROUND POWER UNIT (GP)\nELECTRICAL & GENERATOR SYSTEM")
    r_title2.bold = True
    r_title2.font.size = Pt(11)

    doc.add_paragraph().paragraph_format.space_after = Pt(4)

    items_p2 = [
        ("18", "ตรวจเช็คสภาพสายไฟตัวจ่ายไฟ\nCheck out put power cable condition", ["X", "X", "X", "X", "X", "X"]),
        ("19", "ทำความสะอาดช่องเสียบไฟ\nClean head cable socket", ["X", "X", "X", "X", "X", "X"]),
        ("20", "ตรวจเช็คการเชื่อมของแผงควบคุม\nCheck out put power cable connector", ["X", "X", "X", "X", "X", "X"]),
        ("21", "ตรวจเช็คตัวเชื่อมต่อของสายไฟตัวจ่ายไฟ\nCheck connector of control board", ["X", "X", "X", "X", "X", "X"]),
        ("22", "ตรวจเช็คไฟเตือนภัย\nCheck beacon light", ["X", "X", "X", "X", "X", "X"]),
        ("23", "ตรวจเช็คไฟสัญญาณแจ้งเตือน\nCheck warning lamp", ["X", "X", "X", "X", "X", "X"]),
        ("24", "ตรวจเช็คไฟบอกสัญญาณ\nCheck indicating light", ["X", "X", "X", "X", "X", "X"]),
        ("25", "ทำความสะอาดที่เก็บแหล่งกำเนิดไฟ\nClean generator housing", ["X", "X", "X", "X", "X", "X"]),
        ("26", "ตรวจเช็คขั้วต่อสายไฟต่างๆ\nCheck connection", ["X", "X", "X", "X", "X", "X"]),
        ("27", "ตรวจเช็คลูกปืน\nCheck bearing", ["X", "X", "X", "X", "X", "X"]),
        ("28", "ตรวจเช็คแรงเคลื่อนไฟฟ้าและความถี่สัญญาณในขณะที่รอบเครื่องยนต์ทำงานปกติ\nCheck the voltage and frequency while engine is runing full speed", ["X", "X", "X", "X", "X", "X"]),
    ]

    headers_p2 = ["No.", "CHECK LIST / PREVENTIVE MAINTENANCE SCHEDULE", "Every\n500 H", "Every\n1000 H", "Every\n1500 H", "Every\n2000 H", "Every\n3000 H", "Every\n12000 H\n1 Year", "REMARK"]
    widths_p2 = [Inches(0.4), Inches(3.4), Inches(0.55), Inches(0.55), Inches(0.55), Inches(0.55), Inches(0.55), Inches(0.65), Inches(0.6)]

    chk_tbl2 = doc.add_table(rows=len(items_p2)+1, cols=len(headers_p2))
    chk_tbl2.alignment = WD_TABLE_ALIGNMENT.CENTER

    hdr_row2 = chk_tbl2.rows[0]
    for i, h in enumerate(headers_p2):
        c = hdr_row2.cells[i]
        c.width = widths_p2[i]
        c.text = h
        c.paragraphs[0].alignment = WD_ALIGN_PARAGRAPH.CENTER
        for r in c.paragraphs[0].runs:
            r.font.size = Pt(7.5)
            r.bold = True
        set_cell_border(c)
        set_cell_shading(c, "E0E0E0")

    for r_idx, (num, desc, intervals) in enumerate(items_p2):
        row = chk_tbl2.rows[r_idx+1]
        row.cells[0].text = num
        row.cells[0].paragraphs[0].alignment = WD_ALIGN_PARAGRAPH.CENTER
        row.cells[1].text = desc
        for ci, val in enumerate(intervals):
            c_val = row.cells[ci+2]
            c_val.text = val
            c_val.paragraphs[0].alignment = WD_ALIGN_PARAGRAPH.CENTER
            if val == "X":
                c_val.paragraphs[0].runs[0].bold = True
        row.cells[8].text = ""

        for ci in range(9):
            cell = row.cells[ci]
            cell.width = widths_p2[ci]
            for r in cell.paragraphs[0].runs:
                r.font.size = Pt(7.0)
            set_cell_border(cell)

    doc.add_paragraph().paragraph_format.space_after = Pt(4)

    # Electrical measurements table
    elec_tbl = doc.add_table(rows=2, cols=5)
    elec_tbl.alignment = WD_TABLE_ALIGNMENT.CENTER
    elec_data = [
        ["AN : ________ VOLT", "BN : ________ VOLT", "CN : ________ VOLT", "LL : ________ VOLT", "HZ : ________"],
        ["RPM : ________", "Battery voltage : ____", "Coolant temp : ____", "Oil pressure : ____", "Fuel level : ____ %"]
    ]
    for ri, r in enumerate(elec_data):
        for ci, val in enumerate(r):
            c = elec_tbl.rows[ri].cells[ci]
            c.text = val
            for run in c.paragraphs[0].runs:
                run.font.size = Pt(7.5)
            set_cell_border(c)

    # References
    doc.add_paragraph().paragraph_format.space_after = Pt(2)
    p_ref = doc.add_paragraph()
    r_ref = p_ref.add_run("Ref : TLD CONTROL & SYSTEMS MANUAL\n* Operation and Maintenance Manual For GPU-409-E-CUP, Maintenance Schedule for engine, Maintenance Schedule for Alternator\n* Cummins QSB Series Maintenance Manual, Cummins QSB4.5")
    r_ref.font.size = Pt(7.0)

    # Signatures
    sig_tbl2 = doc.add_table(rows=1, cols=2)
    sig_tbl2.alignment = WD_TABLE_ALIGNMENT.CENTER
    c_sig0, c_sig1 = sig_tbl2.rows[0].cells
    c_sig0.text = "Reported by: ___________________________\n                     GSE Maintenance\nDate: ________/_________/_________"
    c_sig1.text = "Verified by: ___________________________\n                   GSE Maintenance supervisor\nDate: ________/_________/_________"
    for c in [c_sig0, c_sig1]:
        for r in c.paragraphs[0].runs:
            r.font.size = Pt(7.5)
        set_cell_border(c)

    p_foot2 = doc.add_paragraph()
    p_foot2.paragraph_format.space_before = Pt(4)
    r_foot2 = p_foot2.add_run("GRS-RM-CK-070  l  Preventive Maintenance for Ground Power Unit (GP) GPU-409-E-CUP  l  Issue SL001 - Rev. 00 - Eff. Date: 26 OCT 26        Page 2 of 2")
    r_foot2.font.size = Pt(6.5)

    doc.save(doc_path)
    print(f"Master DOCX created successfully at: {doc_path}")

if __name__ == "__main__":
    create_master_docx()
