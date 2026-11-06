// ============================================================
// ระบบใบแจ้งซ่อมออนไลน์ (Corrective Request Web App)
// Thai Lion Air
// ============================================================
// ⚠️ สำคัญ: ต้องเปลี่ยน SPREADSHEET_ID ด้านล่างให้เป็น ID ของ Google Sheet ที่สร้างไว้
// วิธีหา ID: เปิด Google Sheet แล้วดูใน URL
// https://docs.google.com/spreadsheets/d/XXXXXXXXX/edit
//                                       ^^^^^^^^^ ตรงนี้คือ ID
// ============================================================

const SPREADSHEET_ID = '1DEv99fXElxQDAOM0j_WvcTdFiNBXKBGwQ2bwWlQTcNY';

/**
 * doGet - จุดเริ่มต้นของ Web App
 * เมื่อเปิด URL ของ Web App จะแสดงหน้า index.html
 */
function doGet(e) {
  if (e && e.parameter && e.parameter.action === 'debug_line_logs') {
    const ss = getSpreadsheet();
    const sheet = ss.getSheetByName('LineLogs');
    const logs = sheet ? sheet.getDataRange().getValues() : [];
    const props = PropertiesService.getScriptProperties().getProperties();
    return ContentService.createTextOutput(JSON.stringify({ props: props, logs: logs }, null, 2))
      .setMimeType(ContentService.MimeType.JSON);
  }


  if (e && e.parameter && e.parameter.action === 'debug_wo_headers') {
    try {
      const ss = SpreadsheetApp.openById(WO_SPREADSHEET_ID);
      const sheets = ss.getSheets().map(s => s.getName());
      const firstSheet = ss.getSheets()[0];
      const headerRow = findWoHeaderRow(firstSheet);
      const headers = firstSheet.getRange(headerRow, 1, 1, 30).getValues()[0];
      return ContentService.createTextOutput(JSON.stringify({ sheets: sheets, headerRow: headerRow, headers: headers }, null, 2))
        .setMimeType(ContentService.MimeType.JSON);
    } catch (err) {
      return ContentService.createTextOutput(JSON.stringify({ error: err.message }, null, 2))
        .setMimeType(ContentService.MimeType.JSON);
    }
  }

  if (e && e.parameter && e.parameter.action === 'test_send_line') {
    try {
      const testRes = sendLineFlexNotification({
        requestId: '7',
        equipmentCode: 'TLM-TR-058',
        equipmentName: 'BAGGAGE TOWING TRACTOR',
        damageAppearance: 'ยางหลังซ้ายเสื่อมสภาพ',
        requesterName: 'Cherdchu C.',
        requesterId: 'TL140729',
        approverTel: '',
        informDate: '26/09/2026',
        informTime: '08:13'
      });
      return ContentService.createTextOutput(JSON.stringify({ success: true, result: testRes }, null, 2))
        .setMimeType(ContentService.MimeType.JSON);
    } catch (err) {
      return ContentService.createTextOutput(JSON.stringify({ success: false, error: err.message, stack: err.stack }, null, 2))
        .setMimeType(ContentService.MimeType.JSON);
    }
  }

  const template = HtmlService.createTemplateFromFile('index');
  const props = PropertiesService.getScriptProperties();
  template.GA_MEASUREMENT_ID = props.getProperty('GA_MEASUREMENT_ID') || '';

  return template.evaluate()
    .setTitle('ระบบใบแจ้งซ่อม - Thai Lion Air')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/**
 * doPost - รองรับ HTTP POST (เช่น LINE Webhook)
 */
function doPost(e) {
  return handleLineWebhook(e);
}


/**
 * include - สำหรับ include ไฟล์ HTML อื่นๆ (CSS, JS)
 */
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

/**
 * getSpreadsheet - เปิด Google Sheet
 */
function getSpreadsheet() {
  return SpreadsheetApp.openById(SPREADSHEET_ID);
}

/**
 * getUsersSheet - เปิด sheet "Users" (ถ้ายังไม่มีจะสร้างให้อัตโนมัติทันที)
 */
function getUsersSheet() {
  const ss = getSpreadsheet();
  let sheet = ss.getSheetByName('Users');
  if (!sheet) {
    sheet = ss.insertSheet('Users');
    const userHeaders = ['EmployeeID', 'FullName', 'Role', 'Department', 'Tel'];
    sheet.getRange(1, 1, 1, userHeaders.length).setValues([userHeaders]);
    sheet.getRange(1, 1, 1, userHeaders.length)
      .setFontWeight('bold')
      .setBackground('#E31837')
      .setFontColor('#FFFFFF');

    const sampleUsers = [
      ['TL186205', 'Mr.Kawee Khiewnon', 'admin', 'MNT', ''],
      ['TL206992', 'Mr.Nuttasit Tippayanggoon', 'admin', 'MNT', ''],
      ['TL248005', 'Mr.Anol Polnok', 'admin', 'MNT', ''],
      ['TL248006', 'Mr.Bannathat Tata', 'admin', 'MNT', ''],
      ['TL248007', 'Mr.Kanisorn Lappanachokdee', 'admin', 'MNT', ''],
      ['TL260005', 'Mr.Attaphol Suwansichon', 'admin', 'MNT', ''],
      ['TL260006', 'Mr.Tanaton Moungjaroen', 'admin', 'MNT', '']
    ];
    sheet.getRange(2, 1, sampleUsers.length, sampleUsers[0].length).setValues(sampleUsers);
  }
  return sheet;
}

/**
 * getRequestsSheet - เปิด sheet "Requests" (ถ้ายังไม่มีจะสร้างให้อัตโนมัติทันที)
 */
function getRequestsSheet() {
  const ss = getSpreadsheet();
  let sheet = ss.getSheetByName('Requests');
  if (!sheet) {
    sheet = ss.insertSheet('Requests');
    const requestHeaders = [
      'UUID',            // A - รหัสเฉพาะ (auto)
      'RequestID',       // B - เลขที่ใบแจ้งซ่อม
      'InformDate',      // C - วันที่แจ้งซ่อม
      'InformTime',      // D - เวลา
      'EquipmentName',   // E - ชื่ออุปกรณ์
      'EquipmentCode',   // F - รหัสอุปกรณ์
      'HrKm',            // G - ชม./กม.
      'DueDate',         // H - วันที่ต้องการใช้
      'DamageAppearance',// I - อาการเสีย
      'RequesterName',   // J - ผู้แจ้ง (ชื่อเต็ม)
      'RequesterID',     // K - รหัสพนักงานผู้แจ้ง
      'ApproverName',    // L - ผู้อนุมัติ
      'ApproverTel',     // M - Tel. ผู้อนุมัติ
      'Status',          // N - สถานะ
      'ReceivedDate',    // O - วันที่รับแจ้ง (admin)
      'ReceivedTime',    // P - เวลารับแจ้ง (admin)
      'ReceivedBy',      // Q - ผู้รับแจ้ง (admin)
      'WorkOrderNo',     // R - เลขที่ใบสั่งงาน (admin)
      'Timestamp',       // S - เวลาที่บันทึก (auto)
      'LastModified'     // T - เวลาแก้ไขล่าสุด (auto)
    ];
    sheet.getRange(1, 1, 1, requestHeaders.length).setValues([requestHeaders]);
    sheet.getRange(1, 1, 1, requestHeaders.length)
      .setFontWeight('bold')
      .setBackground('#E31837')
      .setFontColor('#FFFFFF');
    sheet.autoResizeColumns(1, requestHeaders.length);
  }
  return sheet;
}

/**
 * setupSpreadsheet - สร้าง Headers ให้ Google Sheet (รันครั้งเดียว)
 * ⚠️ รันฟังก์ชันนี้ครั้งเดียวเพื่อสร้างโครงสร้าง Sheet
 */
function setupSpreadsheet() {
  const ss = getSpreadsheet();

  // สร้าง/ตั้งค่า sheet "Users"
  let usersSheet = ss.getSheetByName('Users');
  if (!usersSheet) {
    usersSheet = ss.insertSheet('Users');
  }
  const userHeaders = ['EmployeeID', 'FullName', 'Role', 'Department', 'Tel'];
  usersSheet.getRange(1, 1, 1, userHeaders.length).setValues([userHeaders]);
  usersSheet.getRange(1, 1, 1, userHeaders.length)
    .setFontWeight('bold')
    .setBackground('#E31837')
    .setFontColor('#FFFFFF');

  // กำหนดข้อมูลเริ่มต้นสำหรับ แอดมิน 7 ท่าน
  const sampleUsers = [
    ['TL186205', 'Mr.Kawee Khiewnon', 'admin', 'MNT', ''],
    ['TL206992', 'Mr.Nuttasit Tippayanggoon', 'admin', 'MNT', ''],
    ['TL248005', 'Mr.Anol Polnok', 'admin', 'MNT', ''],
    ['TL248006', 'Mr.Bannathat Tata', 'admin', 'MNT', ''],
    ['TL248007', 'Mr.Kanisorn Lappanachokdee', 'admin', 'MNT', ''],
    ['TL260005', 'Mr.Attaphol Suwansichon', 'admin', 'MNT', ''],
    ['TL260006', 'Mr.Tanaton Moungjaroen', 'admin', 'MNT', '']
  ];
  usersSheet.getRange(2, 1, sampleUsers.length, sampleUsers[0].length).setValues(sampleUsers);

  // สร้าง/ตั้งค่า sheet "Requests"
  let requestsSheet = ss.getSheetByName('Requests');
  if (!requestsSheet) {
    requestsSheet = ss.insertSheet('Requests');
  }
  const requestHeaders = [
    'UUID',            // A - รหัสเฉพาะ (auto)
    'RequestID',       // B - เลขที่ใบแจ้งซ่อม
    'InformDate',      // C - วันที่แจ้งซ่อม
    'InformTime',      // D - เวลา
    'EquipmentName',   // E - ชื่ออุปกรณ์
    'EquipmentCode',   // F - รหัสอุปกรณ์
    'HrKm',            // G - ชม./กม.
    'DueDate',         // H - วันที่ต้องการใช้
    'DamageAppearance',// I - อาการเสีย
    'RequesterName',   // J - ผู้แจ้ง (ชื่อเต็ม)
    'RequesterID',     // K - รหัสพนักงานผู้แจ้ง
    'ApproverName',    // L - ผู้อนุมัติ
    'ApproverTel',     // M - Tel. ผู้อนุมัติ
    'Status',          // N - สถานะ
    'ReceivedDate',    // O - วันที่รับแจ้ง (admin)
    'ReceivedTime',    // P - เวลารับแจ้ง (admin)
    'ReceivedBy',      // Q - ผู้รับแจ้ง (admin)
    'WorkOrderNo',     // R - เลขที่ใบสั่งงาน (admin)
    'Timestamp',       // S - เวลาที่บันทึก (auto)
    'LastModified'     // T - เวลาแก้ไขล่าสุด (auto)
  ];
  requestsSheet.getRange(1, 1, 1, requestHeaders.length).setValues([requestHeaders]);
  requestsSheet.getRange(1, 1, 1, requestHeaders.length)
    .setFontWeight('bold')
    .setBackground('#E31837')
    .setFontColor('#FFFFFF');

  // ปรับขนาดคอลัมน์
  requestsSheet.autoResizeColumns(1, requestHeaders.length);

  // ลบ sheet เริ่มต้น (Sheet1) ถ้ามี
  const defaultSheet = ss.getSheetByName('Sheet1');
  if (defaultSheet && ss.getSheets().length > 2) {
    ss.deleteSheet(defaultSheet);
  }

  Logger.log('✅ Setup completed successfully!');
}
