import json

with open("CorrectiveRequestApp/PmTaskCardTemplates.json", encoding="utf-8") as f:
    templates = json.load(f)

js_content = f"""/**
 * PmTaskCardTemplates.gs
 * ฐานข้อมูลแม่แบบ Digital Task Card ทั้ง 36 รุ่น (Check A, B, C และแบบประจำเดือน)
 * สกัดจาก Z:\\5.CM & PM form\\TASK CARD SHED
 */

const PM_TASK_CARD_TEMPLATES = {json.dumps(templates, ensure_ascii=False, indent=2)};

/**
 * getPmTemplateList - ดึงรายการรุ่นรถและระดับการตรวจเช็คทั้งหมดที่มีในระบบ
 */
function getPmTemplateList() {{
  const list = [];
  for (const key in PM_TASK_CARD_TEMPLATES) {{
    const item = PM_TASK_CARD_TEMPLATES[key];
    const checks = Object.keys(item.checks || {{}});
    list.push({{
      key: key,
      folder: item.folder,
      gseType: item.gseType,
      brand: item.brand,
      model: item.model,
      checks: checks
    }});
  }}
  return list;
}}

/**
 * getPmTaskCardTemplate - ดึงข้อมูลแม่แบบ Task Card ตามชื่อรุ่นและระดับ Check
 * @param {{string}} modelKey - เช่น "VA-TYT-COM-TLM", "PU-TYT-REV-TLM"
 * @param {{string}} checkLevel - "A", "B", "C" หรือ "MONTHLY"
 * @returns {{Object|null}}
 */
function getPmTaskCardTemplate(modelKey, checkLevel) {{
  if (!modelKey) return null;
  const key = modelKey.toString().trim();
  const tpl = PM_TASK_CARD_TEMPLATES[key];
  if (!tpl) return null;
  
  const lvl = (checkLevel || 'A').toString().trim().toUpperCase();
  const chk = tpl.checks[lvl] || tpl.checks['A'] || Object.values(tpl.checks)[0];
  if (!chk) return null;
  
  return {{
    modelKey: key,
    folder: tpl.folder,
    gseType: tpl.gseType,
    brand: tpl.brand,
    model: tpl.model,
    checkLevel: lvl,
    interval: chk.interval,
    itemCount: chk.itemCount,
    items: chk.items || []
  }};
}}

/**
 * resolvePmTaskCard - ค้นหาแม่แบบ Task Card อัตโนมัติจากรหัสอุปกรณ์ (Equipment Code)
 * เช่น "TLM-VA-023", "TLM-PU-010", "TLM-TB-001"
 * @param {{string}} equipmentCode
 * @param {{string}} checkLevel - 'A', 'B', 'C', 'MONTHLY' ฯลฯ
 * @param {{string}} [equipmentDesc] - รายละเอียดอุปกรณ์เพื่อช่วยแยก Revo vs Vigo ฯลฯ
 * @returns {{Object|null}}
 */
function resolvePmTaskCard(equipmentCode, checkLevel, equipmentDesc) {{
  if (!equipmentCode) return null;
  const norm = equipmentCode.toString().trim().toUpperCase();
  const desc = (equipmentDesc || '').toString().toUpperCase();
  const lvl = (checkLevel || 'A').toString().trim().toUpperCase();

  // 1. ดึง GSE Type จากรหัส เช่น "TLM-VA-023" -> "VA"
  let gseType = '';
  const parts = norm.split('-');
  if (parts.length >= 2) {{
    gseType = parts[1]; // เช่น "VA", "PU", "TR", "TB", "PS", "BC"
  }}

  if (!gseType) return null;

  // 2. จับคู่รุ่นที่เหมาะสม
  let matchedKey = null;

  if (gseType === 'PU') {{
    if (desc.indexOf('VIGO') !== -1) matchedKey = 'PU-TYT-VIG-TLM';
    else if (desc.indexOf('CARRY') !== -1 || desc.indexOf('SUZUKI') !== -1) matchedKey = 'PU-SZK-CAR-TLM';
    else matchedKey = 'PU-TYT-REV-TLM'; // default Revo
  }} else if (gseType === 'VA') {{
    matchedKey = 'VA-TYT-COM-TLM';
  }} else if (gseType === 'VP') {{
    if (desc.indexOf('INNOVA') !== -1) matchedKey = 'VP-TYT-INN-TLM';
    else matchedKey = 'VP-TYT-AVA-TLM';
  }} else if (gseType === 'TR') {{
    if (desc.indexOf('TLD') !== -1) matchedKey = 'TR-TLD-025-TLM';
    else matchedKey = 'TR-CAM-804-TLM';
  }} else if (gseType === 'TT') {{
    matchedKey = 'TT-ISZ-4JJ-TLM';
  }} else if (gseType === 'TB') {{
    matchedKey = 'TB-VNS-VNS-TLM';
  }} else if (gseType === 'PS') {{
    if (desc.indexOf('TLD') !== -1 || norm.indexOf('404') !== -1) matchedKey = 'PS-TLD-404-TLM';
    else matchedKey = 'PS-SAM-SAM-TLM';
  }} else if (gseType === 'BC') {{
    matchedKey = 'BC-SAM-SAM-TLM';
  }} else if (gseType === 'PW') {{
    if (desc.indexOf('CAM') !== -1) matchedKey = 'PW-CAM-4KH-TLM';
    else matchedKey = 'PW-ISZ-4KH-TLM';
  }} else if (gseType === 'WT') {{
    matchedKey = 'WT-ISZ-4KH-TLM';
  }} else if (gseType === 'LV') {{
    if (desc.indexOf('CAM') !== -1) matchedKey = 'LV-CAM-4KH-TLM';
    else matchedKey = 'LV-ISZ-4KH-TLM';
  }} else if (gseType === 'AC') {{
    if (desc.indexOf('140') !== -1 || desc.indexOf('MAK') !== -1) matchedKey = 'AC-MAK-140-TLM';
    else matchedKey = 'AC-TLD-804-TLM';
  }} else if (gseType === 'AS') {{
    if (desc.indexOf('600') !== -1 || desc.indexOf('TLD') !== -1) matchedKey = 'AS-TLD-600-TLM';
    else if (desc.indexOf('300') !== -1) matchedKey = 'AS-MAK-300-TLM';
    else matchedKey = 'AS-MAK-180-TLM';
  }} else if (gseType === 'GP') {{
    if (desc.indexOf('090') !== -1) matchedKey = 'GP-MAK-090-TLM';
    else if (desc.indexOf('140') !== -1) matchedKey = 'GP-MAK-140-TLM';
    else if (desc.indexOf('409') !== -1) matchedKey = 'GP-409-E-CUP-TLM';
    else matchedKey = 'GP-TLD-MAX-15-25-KPH';
  }} else if (gseType === 'CB') {{
    matchedKey = 'CB-TLD-NBL-TLM';
  }} else if (gseType === 'BU') {{
    matchedKey = 'BU-SCA-SCA-TLM';
  }} else if (gseType === 'PB') {{
    matchedKey = 'PB-TLD-150-TLM';
  }} else if (gseType === 'FL') {{
    matchedKey = 'FL-TYT-TYT-TLM';
  }} else if (gseType === 'MP') {{
    if (desc.indexOf('REN') !== -1) matchedKey = 'MP-REN-PER-TLM';
    else matchedKey = 'MP-ISZ-PER-TLM';
  }} else if (gseType === 'N2') {{
    matchedKey = 'N2-SAM-SAM-TLM';
  }} else if (gseType === 'ES') {{
    matchedKey = 'ES-SAM-SAM-TLM';
  }} else if (gseType === 'GE') {{
    matchedKey = 'GE-HYD-HYD-TLM';
  }}

  // Fallback: ถ้ายังไม่เจอ หาโฟลเดอร์ใดๆ ที่ขึ้นต้นด้วย gseType
  if (!matchedKey) {{
    for (const key in PM_TASK_CARD_TEMPLATES) {{
      if (PM_TASK_CARD_TEMPLATES[key].gseType === gseType) {{
        matchedKey = key;
        break;
      }}
    }}
  }}

  if (!matchedKey) return null;

  return getPmTaskCardTemplate(matchedKey, lvl);
}}
"""

with open("CorrectiveRequestApp/PmTaskCardTemplates.gs", "w", encoding="utf-8") as out:
    out.write(js_content)

print("Generated CorrectiveRequestApp/PmTaskCardTemplates.gs successfully.")
