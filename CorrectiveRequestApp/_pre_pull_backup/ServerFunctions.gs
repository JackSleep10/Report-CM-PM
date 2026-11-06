// รายชื่อและข้อมูลแอดมิน (Admin Profiles)
const ADMIN_PROFILES = {
  'TL186205': 'Mr.Kawee Khiewnon',
  'TL206992': 'Mr.Nuttasit Tippayanggoon',
  'TL248005': 'Mr.Anol Polnok',
  'TL248006': 'Mr.Bannathat Tata',
  'TL248007': 'Mr.Kanisorn Lappanachokdee',
  'TL260005': 'Mr.Attaphol Suwansichon',
  'TL260006': 'Mr.Tanaton Moungjaroen'
};
const ADMIN_IDS = Object.keys(ADMIN_PROFILES);

// รายชื่อและข้อมูลผู้จัดการ (Manager Profile)
const MANAGER_PROFILES = {
  'TL130056': 'Mr. Non Vismitananda'
};
const MANAGER_IDS = Object.keys(MANAGER_PROFILES);

// รายชื่อและข้อมูลหัวหน้างาน (Supervisor Profiles)
const SUPERVISOR_PROFILES = {
  'TL130201': 'Mr. Chaiwat Panseethong',
  'TL140729': 'Mr. Cherdchu Chaimuan',
  'TL237209': 'Mr. Paitoon Mongkolsutaporn'
};
const SUPERVISOR_IDS = Object.keys(SUPERVISOR_PROFILES);

// รายชื่อและข้อมูลช่าง (Technician Profiles - 25 ท่าน)
const TECHNICIAN_PROFILES = {
  'TL140728': 'Mr. Ramin Sanmuk',
  'TL152060': 'Mr. Saknarin Mookontha',
  'TL152546': 'Mr. Pichet Whaiphanta',
  'TL152548': 'Mr. Thawatchai Mingmueang',
  'TL162939': 'Mr. Boonkerd Hemkong',
  'TL163434': 'Mr. Kiattisak Kaenngam',
  'TL174295': 'Mr. Noppadon Inpuak',
  'TL174296': 'Mr. Sao-thong Raibroy',
  'TL163560': 'Mr. Chanasak Kumchana',
  'TL163561': 'Mr. Narong Awela',
  'TL185743': 'Mr. Nattapong Kongphimp',
  'TL247976': 'Mr. Natthanon Mungkhala',
  'TL247977': 'Mr. Wuttipon Prathumwan',
  'TL258186': 'Mr. Surachat Thimthuad',
  'TL258187': 'Mr. Thanakorn Yossranoi',
  'TL258188': 'Mr. Nopporn Rattanaprateep',
  'TL258189': 'Mr. Jeeraphat Phothong',
  'TL258190': 'Mr. Wuttichai Chaiyarat',
  'TL258468': 'Mr. Tanachat Phunangam',
  'TL258728': 'Mr. Khanthon Chanthakhot',
  'TL259073': 'Mr. Narathorn Laprab',
  'TL269378': 'Mr. Nattakit Moungmanee',
  'TL269379': 'Mr. Natthanan Panichakul',
  'TL269689': 'Mr. Arthit Thongpiw',
  'TL269690': 'Mr. Parit Suwannasri'
};
const TECHNICIAN_IDS = Object.keys(TECHNICIAN_PROFILES);

const WO_SPREADSHEET_ID = '1luje0x1QXrhhucSvmO6h_k5Es91X8rCcJeP2Fet7uYs';

/**
 * getTechniciansList - ดึงรายชื่อช่างทั้งหมดสำหรับ Dropdown หน้าบ้าน
 */
function getTechniciansList() {
  return TECHNICIAN_IDS.map(function(id) {
    return {
      employeeId: id,
      fullName: TECHNICIAN_PROFILES[id]
    };
  });
}

/**
 * login - ตรวจสอบรหัสพนักงาน
 * @param {string} employeeId - รหัสพนักงาน
 * @returns {Object} { success: boolean, user?: Object, message?: string }
 */
function login(employeeId) {
  try {
    if (!employeeId) {
      return { success: false, message: 'กรุณากรอกรหัสพนักงาน' };
    }

    const empId = employeeId.toString().trim().toUpperCase().replace(/\s+/g, '');

    // ตรวจสอบว่าขึ้นต้นด้วย TL หรือไม่ (ไม่อนุญาตให้อยู่ท้าย เช่น 123456TL)
    if (!empId.startsWith('TL')) {
      return { success: false, message: 'รหัสพนักงานต้องขึ้นต้นด้วย TL นำหน้าเท่านั้น (เช่น TL123456) ไม่อนุญาตให้ใส่ไว้ด้านหลัง' };
    }

    // จำกัดความยาว 8 ตัวอักษร
    if (empId.length !== 8) {
      return { success: false, message: 'รหัสพนักงานต้องมีความยาว 8 ตัวอักษรพอดี (เช่น TL123456)' };
    }

    // ตรวจสอบว่าตามด้วยตัวเลข 6 หลัก
    if (!/^TL\d{6}$/.test(empId)) {
      return { success: false, message: 'รหัสพนักงานต้องขึ้นต้นด้วย TL และตามด้วยตัวเลข 6 หลัก (เช่น TL123456)' };
    }

    const isManager = MANAGER_IDS.includes(empId);
    const isSupervisor = SUPERVISOR_IDS.includes(empId);
    const isAdmin = ADMIN_IDS.includes(empId);
    const isTech = TECHNICIAN_IDS.includes(empId);
    const managerFullName = MANAGER_PROFILES[empId] || '';
    const supervisorFullName = SUPERVISOR_PROFILES[empId] || '';
    const adminFullName = ADMIN_PROFILES[empId] || '';
    const techFullName = TECHNICIAN_PROFILES[empId] || '';

    let expectedRole = 'user';
    let expectedName = empId;
    let expectedDept = '';

    if (isManager) {
      expectedRole = 'manager';
      expectedName = managerFullName;
      expectedDept = 'GSE Maintenance Manager';
    } else if (isSupervisor) {
      expectedRole = 'supervisor';
      expectedName = supervisorFullName;
      expectedDept = (empId === 'TL237209') ? 'GSE Supervisor DMK' : 'GSE Maintenance Technician Supervisor';
    } else if (isAdmin) {
      expectedRole = 'admin';
      expectedName = adminFullName;
      expectedDept = 'GSE Admin';
    } else if (isTech) {
      expectedRole = 'technician';
      expectedName = techFullName;
      expectedDept = 'Technician';
    }

    const sheet = getUsersSheet();
    const data = sheet ? sheet.getDataRange().getValues() : [];

    // ค้นหาใน sheet Users
    let existingUser = null;
    let userRowIndex = -1;
    for (let i = 1; i < data.length; i++) {
      if (data[i][0] && data[i][0].toString().trim().toUpperCase() === empId) {
        let fullName = data[i][1];
        if ((isAdmin || isTech || isManager || isSupervisor) && expectedName) {
          fullName = expectedName;
          if (sheet) {
            sheet.getRange(i + 1, 2).setValue(expectedName);
            sheet.getRange(i + 1, 3).setValue(expectedRole);
            if (expectedDept) sheet.getRange(i + 1, 4).setValue(expectedDept);
          }
        }
        existingUser = {
          employeeId: empId,
          fullName: fullName || expectedName,
          role: expectedRole !== 'user' ? expectedRole : (data[i][2] || 'user').toString().toLowerCase(),
          department: data[i][3] || expectedDept,
          tel: data[i][4] || ''
        };
        userRowIndex = i + 1;
        break;
      }
    }

    if (existingUser) {
      // ซิงค์ role ให้ตรงกับระบบ
      if (expectedRole !== 'user' && existingUser.role !== expectedRole && sheet && userRowIndex > 0) {
        sheet.getRange(userRowIndex, 3).setValue(expectedRole);
        existingUser.role = expectedRole;
      }
      return {
        success: true,
        user: existingUser
      };
    }

    // หากยังไม่มีใน Users sheet ให้สร้างบัญชีให้อัตโนมัติ (role ตามที่กำหนด)
    const newUser = {
      employeeId: empId,
      fullName: expectedName,
      role: expectedRole,
      department: expectedDept,
      tel: ''
    };

    if (sheet) {
      sheet.appendRow([newUser.employeeId, newUser.fullName, newUser.role, newUser.department, '']);
    }

    return {
      success: true,
      user: newUser
    };
  } catch (error) {
    return { success: false, message: 'เกิดข้อผิดพลาด: ' + error.message };
  }
}

/**
 * getRequests - ดึงรายการใบแจ้งซ่อมทั้งหมด
 * @param {string} employeeId - รหัสพนักงานผู้เรียก
 * @param {string} role - role ของผู้เรียก (user/admin)
 * @returns {Array} รายการใบแจ้งซ่อม
 */
function getRequests(employeeId, role) {
  try {
    const sheet = getRequestsSheet();
    const data = sheet.getDataRange().getValues();

    if (data.length <= 1) return []; // ไม่มีข้อมูล (มีแค่ header)

    const headers = data[0];
    const requests = [];
    const normalizedEmpId = (employeeId || '').toString().trim().toUpperCase();

    const a1Idx = headers.indexOf('ActionBy1');
    const a2Idx = headers.indexOf('ActionBy2');
    const a3Idx = headers.indexOf('ActionBy3');
    const techNameIdx = headers.indexOf('TechnicianName');

    for (let i = 1; i < data.length; i++) {
      const row = data[i];
      // ถ้าแถวว่าง ให้ข้าม
      if (!row[0] && !row[1]) continue;

      // ตรวจสอบ UUID ถ้ายังไม่มีให้สร้างให้อัตโนมัติและบันทึกลง Sheet
      let rowUuid = (row[0] != null) ? row[0].toString().trim() : '';
      if (!rowUuid) {
        rowUuid = Utilities.getUuid();
        sheet.getRange(i + 1, 1).setValue(rowUuid);
        row[0] = rowUuid;
      }

      // ตรวจสอบและซ่อมแซมข้อมูลช่างซ้ำซ้อนอัตโนมัติ (เช่น Request #41)
      if (a1Idx !== -1 && a2Idx !== -1 && a3Idx !== -1) {
        let a1Val = (row[a1Idx] || '').toString().trim();
        let a2Val = (row[a2Idx] || '').toString().trim();
        let a3Val = (row[a3Idx] || '').toString().trim();
        let techNameVal = techNameIdx !== -1 ? (row[techNameIdx] || '').toString().trim() : '';

        // 1. เคลียร์ a3 หากซ้ำกับ a1 หรือ a2
        if (a3Val && (a3Val === a1Val || a3Val === a2Val)) {
          sheet.getRange(i + 1, a3Idx + 1).setValue('');
          row[a3Idx] = '';
          a3Val = '';
        }

        // 2. เคลียร์ a2 หากซ้ำกับ a1
        if (a2Val && a2Val === a1Val) {
          sheet.getRange(i + 1, a2Idx + 1).setValue('');
          row[a2Idx] = '';
          a2Val = '';
        }

        // 3. หากช่างคนที่ 1 กับผู้ลงชื่อซ่อมไม่ตรงกันในเคสที่มีการเลือกสลับกัน
        if (a1Val === 'TL247976' && a2Val === 'TL152548' && techNameVal.indexOf('Thawatchai') !== -1) {
          sheet.getRange(i + 1, a1Idx + 1).setValue('TL152548');
          sheet.getRange(i + 1, a2Idx + 1).setValue('TL247976');
          sheet.getRange(i + 1, a3Idx + 1).setValue('');
          row[a1Idx] = 'TL152548';
          row[a2Idx] = 'TL247976';
          row[a3Idx] = '';
          if (techNameIdx !== -1) {
            sheet.getRange(i + 1, techNameIdx + 1).setValue(TECHNICIAN_PROFILES['TL152548'] || 'Mr. Thawatchai Mingmueang');
            row[techNameIdx] = TECHNICIAN_PROFILES['TL152548'] || 'Mr. Thawatchai Mingmueang';
          }
        }
      }

      // 4. ตรวจสอบและแก้ไข WorkOrderNo ที่ไม่ใช่ตัวเลขล้วน (เช่น มีคนใส่รหัสพนักงาน TL185943 หรือข้อความ)
      const woColIdx = headers.indexOf('WorkOrderNo');
      if (woColIdx !== -1) {
        const currentWo = (row[woColIdx] || '').toString().trim();
        if (currentWo && !/^\d+$/.test(currentWo)) {
          sheet.getRange(i + 1, woColIdx + 1).setValue('');
          row[woColIdx] = '';
        }
      }

      // ให้ผู้ใช้ทุกคนสามารถเห็นรายการแจ้งซ่อมทั้งหมดได้
      const request = {};
      for (let j = 0; j < headers.length; j++) {
        let value = row[j];
        const headerName = headers[j];
        if (headerName === 'InformTime' || headerName === 'ReceivedTime' || headerName === 'CompleteTime' || headerName === 'TechnicianTime' || headerName === 'EstimateTime' || headerName === 'SupervisorTime' || headerName === 'ManagerTime' || headerName === 'AcceptedTime') {
          value = formatTime24(value);
        } else if (headerName === 'EstimateDate' || headerName === 'SupervisorDate' || headerName === 'ManagerDate' || headerName === 'AcceptedDate') {
          value = formatDateDMY(value);
        } else if (value instanceof Date) {
          value = formatDate(value);
        }
        request[headerName] = value;
      }
      request.UUID = rowUuid;
      request._rowIndex = i + 1; // เก็บ row number (1-based) สำหรับ update/delete
      requests.push(request);
    }

    return requests.reverse(); // ใหม่สุดก่อน
  } catch (error) {
    Logger.log('Error in getRequests: ' + error.message);
    return [];
  }
}

/**
 * getRequestByUUID - ดึงใบแจ้งซ่อมตาม UUID หรือ RequestID
 * @param {string} identifier - UUID หรือ RequestID ของใบแจ้งซ่อม
 * @returns {Object|null} ข้อมูลใบแจ้งซ่อม
 */
function getRequestByUUID(identifier) {
  try {
    if (!identifier) return null;
    const targetId = identifier.toString().trim();
    const sheet = getRequestsSheet();
    const data = sheet.getDataRange().getValues();
    const headers = data[0];

    for (let i = 1; i < data.length; i++) {
      const rowUuid = (data[i][0] != null) ? data[i][0].toString().trim() : '';
      const rowReqId = (data[i][1] != null) ? data[i][1].toString().trim() : '';
      if ((rowUuid && rowUuid === targetId) || (rowReqId && rowReqId === targetId)) {
        const request = {};
        for (let j = 0; j < headers.length; j++) {
          let value = data[i][j];
          const headerName = headers[j];
          if (headerName === 'InformTime' || headerName === 'ReceivedTime' || headerName === 'CompleteTime' || headerName === 'TechnicianTime' || headerName === 'EstimateTime' || headerName === 'SupervisorTime' || headerName === 'ManagerTime' || headerName === 'AcceptedTime') {
            value = formatTime24(value);
          } else if (headerName === 'EstimateDate' || headerName === 'SupervisorDate' || headerName === 'ManagerDate' || headerName === 'AcceptedDate') {
            value = formatDateDMY(value);
          } else if (value instanceof Date) {
            value = formatDate(value);
          }
          request[headerName] = value;
        }
        request.UUID = rowUuid || targetId;
        request._rowIndex = i + 1;
        request.spareParts = getSparePartsByUUID(request.UUID);
        return request;
      }
    }

    return null;
  } catch (error) {
    Logger.log('Error in getRequestByUUID: ' + error.message);
    return null;
  }
}

/**
 * generateNextRequestId - สร้างเลขที่ใบแจ้งซ่อมอัตโนมัติ (เช่น 1, 2, 3...)
 */
function generateNextRequestId(sheet) {
  const data = sheet.getDataRange().getValues();
  let maxNum = 0;
  for (let i = 1; i < data.length; i++) {
    const val = (data[i][1] || '').toString().trim();
    if (val.startsWith('PM-') || val.startsWith('PM')) continue; // ข้ามใบงาน PM
    const match = val.match(/\d+/g);
    if (match) {
      const num = parseInt(match[match.length - 1], 10);
      if (!isNaN(num) && num > maxNum) {
        maxNum = num;
      }
    }
  }
  return (maxNum + 1).toString();
}

/**
 * createRequest - สร้างใบแจ้งซ่อมใหม่
 * @param {Object} data - ข้อมูลใบแจ้งซ่อม
 * @returns {Object} { success: boolean, message?: string }
 */
function createRequest(data) {
  const lock = LockService.getScriptLock();
  try {
    // รอคิว lock สูงสุด 20 วินาที ป้องกันคนกดส่งพร้อมกันในเสี้ยววินาทีเดียวกัน
    lock.waitLock(20000);
  } catch (e) {
    return { success: false, message: 'ระบบกำลังมีผู้ใช้งานพร้อมกันจำนวนมาก กรุณากดบันทึกใหม่อีกครั้ง' };
  }

  try {
    const eqCode = (data.equipmentCode || '').toString().trim();
    if (!eqCode || !isEquipmentInMaster(eqCode)) {
      try { lock.releaseLock(); } catch(e){}
      return {
        success: false,
        message: 'รหัสอุปกรณ์ ' + (eqCode || '-') + ' ไม่มีในระบบ ไม่สามารถแจ้งซ่อมอุปกรณ์ดังกล่าวได้'
      };
    }

    if (isEquipmentInactive(eqCode)) {
      try { lock.releaseLock(); } catch(e){}
      return {
        success: false,
        message: 'อุปกรณ์รหัส ' + eqCode + ' มีสถานะ Inactive ไม่สามารถแจ้งซ่อมได้'
      };
    }

    // ซิงค์รหัสและชื่อทางการจาก GSE MASTER
    const matchedEq = getEquipmentItemFromMaster(eqCode);
    if (matchedEq) {
      data.equipmentCode = matchedEq.gseNo;
      if (!data.equipmentName || data.equipmentName === eqCode) {
        data.equipmentName = matchedEq.description || eqCode;
      }
    }

    const sheet = getRequestsSheet();
    const uuid = Utilities.getUuid();
    const now = new Date();
    const timestamp = Utilities.formatDate(now, 'Asia/Bangkok', 'dd/MM/yyyy HH:mm:ss');

    // เลขที่ใบแจ้งซ่อมรันอัตโนมัติ (auto-run) ปลอดภัย 100% จาก lock
    const requestId = (data.requestId && data.requestId.toString().trim())
      ? data.requestId.toString().trim()
      : generateNextRequestId(sheet);

    // วันที่และเวลาแจ้งซ่อม - ถ้าไม่ได้กรอกมาให้ใช้วันที่และเวลาปัจจุบันอัตโนมัติ
    const informDate = (data.informDate && data.informDate.toString().trim())
      ? data.informDate.toString().trim()
      : Utilities.formatDate(now, 'Asia/Bangkok', 'dd/MM/yyyy');

    const informTime = formatTime24(
      (data.informTime && data.informTime.toString().trim())
        ? data.informTime.toString().trim()
        : Utilities.formatDate(now, 'Asia/Bangkok', 'HH:mm')
    );

    const rowData = [
      uuid,                          // A - UUID
      requestId,                     // B - เลขที่ใบแจ้งซ่อม (auto)
      informDate,                    // C - วันที่แจ้งซ่อม
      informTime,                    // D - เวลา
      data.equipmentName || '',      // E - ชื่ออุปกรณ์
      data.equipmentCode || '',      // F - รหัสอุปกรณ์
      data.hrKm || '',               // G - ชม./กม.
      data.dueDate || '',            // H - วันที่ต้องการใช้
      data.damageAppearance || '',   // I - อาการเสีย
      data.requesterName || '',      // J - ผู้แจ้ง
      data.requesterId || '',        // K - รหัสพนักงานผู้แจ้ง
      data.approverName || '',       // L - ผู้อนุมัติ
      data.approverTel || '',        // M - Tel. ผู้อนุมัติ
      'รอดำเนินการ',                  // N - สถานะ (default)
      '',                            // O - วันที่รับแจ้ง
      '',                            // P - เวลารับแจ้ง
      '',                            // Q - ผู้รับแจ้ง
      '',                            // R - เลขที่ใบสั่งงาน
      timestamp,                     // S - Timestamp
      timestamp                      // T - LastModified
    ];

    sheet.appendRow(rowData);

    // บังคับให้ column D (InformTime) และ column M (Tel.) เก็บเป็น Text เพื่อคง format ไว้ตรงเป๊ะ
    const newRow = sheet.getLastRow();
    sheet.getRange(newRow, 4).setNumberFormat('@STRING@').setValue(informTime);
    sheet.getRange(newRow, 13).setNumberFormat('@STRING@').setValue(data.approverTel || '');

    // ซิงค์ข้อมูลไปยัง Sheet "บันทึกการเปิด W/O"
    syncToWoSheetOnCreate(uuid, data);

    // ส่งแจ้งเตือนผ่าน LINE Messaging API (Flex Message)
    try {
      sendLineFlexNotification({
        requestId: requestId,
        equipmentCode: data.equipmentCode || '',
        equipmentName: data.equipmentName || '',
        damageAppearance: data.damageAppearance || '',
        requesterName: data.requesterName || '',
        requesterId: data.requesterId || '',
        approverTel: data.approverTel || '',
        informDate: informDate,
        informTime: informTime,
        uuid: uuid
      });
    } catch (lineErr) {
      Logger.log('Line notification warning: ' + lineErr.message);
    }

    clearDashboardCache();
    return { success: true, message: 'บันทึกใบแจ้งซ่อมเลขที่ ' + requestId + ' เรียบร้อยแล้ว', uuid: uuid, requestId: requestId };


  } catch (error) {
    return { success: false, message: 'เกิดข้อผิดพลาด: ' + error.message };
  } finally {
    try {
      lock.releaseLock();
    } catch (e) {}
  }
}

/**
 * updateRequest - แก้ไขใบแจ้งซ่อม
 * @param {string} uuid - UUID ของใบแจ้งซ่อม
 * @param {Object} data - ข้อมูลที่ต้องการแก้ไข
 * @param {string} role - role ของผู้แก้ไข
 * @param {string} currentAdminId - รหัสพนักงานของ Admin ผู้แก้ไข (ถ้ามี)
 * @returns {Object} { success: boolean, message?: string }
 */
function updateRequest(uuid, data, role, currentAdminId) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(15000);
  } catch (e) {
    return { success: false, message: 'ระบบกำลังมีการบันทึกข้อมูล กรุณาลองใหม่อีกครั้ง' };
  }

  try {
    const targetId = (uuid && uuid !== 'undefined') ? uuid.toString().trim() : (data && data.requestId ? data.requestId.toString().trim() : '');
    if (!targetId) {
      return { success: false, message: 'ไม่พบรหัสใบแจ้งซ่อม' };
    }
    const sheet = getRequestsSheet();
    const allData = sheet.getDataRange().getValues();
    let rowIndex = -1;

    // หาแถวที่ต้องการแก้ไขจาก UUID หรือ RequestID
    for (let i = 1; i < allData.length; i++) {
      const rowUuid = (allData[i][0] != null) ? allData[i][0].toString().trim() : '';
      const rowReqId = (allData[i][1] != null) ? allData[i][1].toString().trim() : '';
      if ((rowUuid && rowUuid === targetId) || (rowReqId && rowReqId === targetId)) {
        rowIndex = i + 1; // 1-based
        break;
      }
    }

    if (rowIndex === -1) {
      return { success: false, message: 'ไม่พบใบแจ้งซ่อมที่ต้องการแก้ไข' };
    }

    // ตรวจสอบสิทธิ์: ถ้าไม่ใช่ admin จะแก้ไขได้เฉพาะใบแจ้งซ่อมของตัวเองเท่านั้น
    const existingRequesterId = (allData[rowIndex - 1][10] || '').toString().trim().toUpperCase();
    const editorId = (data.requesterId || '').toString().trim().toUpperCase();
    if (role !== 'admin' && existingRequesterId !== editorId) {
      return { success: false, message: 'คุณไม่มีสิทธิ์แก้ไขใบแจ้งซ่อมของผู้อื่น (สามารถดูและพิมพ์ได้เท่านั้น)' };
    }

    const updatedEqCode = (data.equipmentCode || '').toString().trim();
    if (updatedEqCode) {
      if (!isEquipmentInMaster(updatedEqCode)) {
        try { lock.releaseLock(); } catch(e){}
        return {
          success: false,
          message: 'รหัสอุปกรณ์ ' + updatedEqCode + ' ไม่มีในระบบ ไม่สามารถแจ้งซ่อมอุปกรณ์ดังกล่าวได้'
        };
      }
      if (role !== 'admin' && isEquipmentInactive(updatedEqCode)) {
        try { lock.releaseLock(); } catch(e){}
        return {
          success: false,
          message: 'อุปกรณ์รหัส ' + updatedEqCode + ' มีสถานะ Inactive ไม่สามารถแจ้งซ่อมได้'
        };
      }
      const matchedEq = getEquipmentItemFromMaster(updatedEqCode);
      if (matchedEq) {
        data.equipmentCode = matchedEq.gseNo;
        if (!data.equipmentName || data.equipmentName === updatedEqCode) {
          data.equipmentName = matchedEq.description || updatedEqCode;
        }
      }
    }

    const now = new Date();
    const timestamp = Utilities.formatDate(now, 'Asia/Bangkok', 'dd/MM/yyyy HH:mm:ss');

    // อัพเดตส่วนที่ 1 (user fields)
    if (data.informDate && data.informDate.toString().trim()) {
      sheet.getRange(rowIndex, 3).setValue(data.informDate.toString().trim());      // C - วันที่แจ้งซ่อม
    }
    if (data.informTime && data.informTime.toString().trim()) {
      const normInformTime = formatTime24(data.informTime);
      sheet.getRange(rowIndex, 4).setNumberFormat('@STRING@').setValue(normInformTime); // D - เวลา (24 ชม.)
    }
    sheet.getRange(rowIndex, 5).setValue(data.equipmentName || '');   // E - ชื่ออุปกรณ์
    sheet.getRange(rowIndex, 6).setValue(data.equipmentCode || '');   // F - รหัสอุปกรณ์
    sheet.getRange(rowIndex, 7).setValue(data.hrKm || '');            // G - ชม./กม.
    sheet.getRange(rowIndex, 8).setValue(data.dueDate || '');         // H - วันที่ต้องการใช้
    sheet.getRange(rowIndex, 9).setValue(data.damageAppearance || '');// I - อาการเสีย
    sheet.getRange(rowIndex, 12).setValue(data.approverName || '');   // L - ผู้อนุมัติ
    sheet.getRange(rowIndex, 13).setNumberFormat('@STRING@').setValue(data.approverTel || ''); // M - Tel. (text เพื่อรักษาเลข 0 นำหน้า)

    // อัพเดตส่วนที่ 2 (admin fields) - เฉพาะ admin
    if (role === 'admin') {
      if (data.requestId && data.requestId.toString().trim()) {
        sheet.getRange(rowIndex, 2).setValue(data.requestId.toString().trim());     // B - เลขที่ใบแจ้งซ่อม
      }

      const woVal = (data.workOrderNo != null) ? data.workOrderNo.toString().trim().replace(/\D/g, '') : '';
      data.workOrderNo = woVal;
      let statusToSet = data.status || 'รอดำเนินการ';
      // ถ้าใส่เลขที่ W/O แล้วสถานะยังเป็น "รอดำเนินการ" ให้ปรับเป็น "กำลังซ่อม" ทันที
      if (woVal !== '' && statusToSet === 'รอดำเนินการ') {
        statusToSet = 'กำลังซ่อม';
        data.status = 'กำลังซ่อม';
      }

      sheet.getRange(rowIndex, 14).setValue(statusToSet);                     // N - สถานะ
      sheet.getRange(rowIndex, 15).setValue(data.receivedDate || '');         // O - วันที่รับแจ้ง
      const normReceivedTime = formatTime24(data.receivedTime || '');
      sheet.getRange(rowIndex, 16).setNumberFormat('@STRING@').setValue(normReceivedTime); // P - เวลารับแจ้ง (24 ชม.)
      sheet.getRange(rowIndex, 17).setValue(data.receivedBy || '');           // Q - ผู้รับแจ้ง
      sheet.getRange(rowIndex, 18).setValue(woVal);                           // R - เลขที่ใบสั่งงาน
      if (data.estimateDate !== undefined) {
        sheet.getRange(rowIndex, 31).setValue(formatDateDMY(data.estimateDate));       // AE - กำหนดวันเสร็จ
      }
      if (data.estimateTime !== undefined) {
        const normEstTime = formatTime24(data.estimateTime || '');
        sheet.getRange(rowIndex, 32).setNumberFormat('@STRING@').setValue(normEstTime); // AF - เวลากำหนดเสร็จ
      }
    }

    // อัพเดต LastModified
    sheet.getRange(rowIndex, 20).setValue(timestamp); // T - LastModified

    // ซิงค์ข้อมูลไปยัง Sheet "บันทึกการเปิด W/O"
    const actualUuid = (allData[rowIndex - 1][0] != null) ? allData[rowIndex - 1][0].toString().trim() : targetId;
    syncToWoSheetOnUpdate(actualUuid, data, currentAdminId, role);

    clearDashboardCache();
    return { success: true, message: 'แก้ไขใบแจ้งซ่อมเรียบร้อยแล้ว' };
  } catch (error) {
    return { success: false, message: 'เกิดข้อผิดพลาด: ' + error.message };
  } finally {
    try {
      lock.releaseLock();
    } catch (e) {}
  }
}

/**
 * deleteRequest - ลบใบแจ้งซ่อม (admin only)
 * @param {string} uuid - UUID ของใบแจ้งซ่อม
 * @param {string} requestId - เลขที่ใบแจ้งซ่อม (fallback)
 * @returns {Object} { success: boolean, message?: string }
 */
function deleteRequest(uuid, requestId) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(15000);
  } catch (e) {
    return { success: false, message: 'ระบบกำลังทำงาน กรุณาลองใหม่อีกครั้ง' };
  }

  try {
    const targetUuid = (uuid && uuid !== 'undefined') ? uuid.toString().trim() : '';
    const targetReqId = (requestId && requestId !== 'undefined') ? requestId.toString().trim() : '';

    if (!targetUuid && !targetReqId) {
      return { success: false, message: 'ไม่พบรหัสใบแจ้งซ่อม' };
    }

    const sheet = getRequestsSheet();
    const data = sheet.getDataRange().getValues();
    if (data.length <= 1) {
      return { success: false, message: 'ไม่มีข้อมูลในระบบ' };
    }

    const headers = data[0];
    const uuidCol = headers.indexOf('UUID');
    const reqIdCol = headers.indexOf('RequestID');
    const informDateCol = headers.indexOf('InformDate');
    const eqCodeCol = headers.indexOf('EquipmentCode');
    const woCol = headers.indexOf('WorkOrderNo');

    const colU = uuidCol >= 0 ? uuidCol : 0;
    const colR = reqIdCol >= 0 ? reqIdCol : 1;
    const colD = informDateCol >= 0 ? informDateCol : 2;
    const colE = eqCodeCol >= 0 ? eqCodeCol : 5;
    const colW = woCol >= 0 ? woCol : 17;

    const u1 = targetUuid.toLowerCase();
    const u2 = targetReqId.toLowerCase();

    for (let i = 1; i < data.length; i++) {
      const row = data[i];
      const rowUuid = (row[colU] != null) ? row[colU].toString().trim() : '';
      const rowReqId = (row[colR] != null) ? row[colR].toString().trim() : '';
      const rowWo = (row[colW] != null) ? row[colW].toString().trim() : '';

      const r0 = rowUuid.toLowerCase();
      const r1 = rowReqId.toLowerCase();
      const rWo = rowWo.toLowerCase();

      let isMatch = (u1 && (r0 === u1 || r1 === u1 || (rWo && rWo === u1))) ||
                    (u2 && (r0 === u2 || r1 === u2 || (rWo && rWo === u2)));

      // Fallback matching: ตรวจสอบทุกคอลัมน์ในแถว หากมีเซลล์ใดตรงกับ u1 หรือ u2
      if (!isMatch) {
        for (let c = 0; c < row.length; c++) {
          const cellVal = (row[c] != null) ? row[c].toString().trim().toLowerCase() : '';
          if (cellVal && (cellVal === u1 || cellVal === u2)) {
            isMatch = true;
            break;
          }
        }
      }

      if (isMatch) {
        // ดึงข้อมูลแถวนี้ไว้ก่อนลบ เพื่อไปลบใน Sheet W/O ด้วย
        const informDate = row[colD];
        const eqCode = row[colE];
        const woNo = row[colW];
        const matchUuid = rowUuid || targetUuid;

        sheet.deleteRow(i + 1);
        SpreadsheetApp.flush();

        // ลบออกจาก Sheet "บันทึกการเปิด W/O" ด้วย
        try {
          deleteFromWoSheet(matchUuid, informDate, woNo, eqCode);
          SpreadsheetApp.flush();
        } catch (woErr) {
          Logger.log('Error in deleteFromWoSheet: ' + woErr.message);
        }

        clearDashboardCache();
        return { success: true, message: 'ลบใบงาน ' + (targetReqId || targetUuid) + ' เรียบร้อยแล้ว' };
      }
    }

    return { success: false, message: 'ไม่พบใบแจ้งซ่อมที่ต้องการลบ (' + (targetReqId || targetUuid) + ')' };
  } catch (error) {
    return { success: false, message: 'เกิดข้อผิดพลาด: ' + error.message };
  } finally {
    try {
      lock.releaseLock();
    } catch (e) {}
  }
}

/**
 * deleteFromWoSheet - ลบแถวใน Sheet "บันทึกการเปิด W/O" เมื่อมีการลบใบแจ้งซ่อม
 */
function deleteFromWoSheet(uuid, informDate, woNo, eqCode) {
  try {
    const dateObj = parseDateString(informDate);
    const sheet = getOrCreateWoMonthSheet(dateObj);
    if (!sheet) return;

    const headerRow = findWoHeaderRow(sheet);
    const targetRow = findWoRowByUUID(sheet, headerRow, uuid, woNo, eqCode);
    if (targetRow) {
      sheet.deleteRow(targetRow);
    }
  } catch (e) {
    Logger.log('Error in deleteFromWoSheet: ' + e.message);
  }
}

/**
 * getStatusCounts - นับจำนวนใบแจ้งซ่อมตามสถานะ
 * @param {string} employeeId - รหัสพนักงาน
 * @param {string} role - role ของผู้เรียก
 * @returns {Object} { total, pending, inProgress, completed }
 */
function getStatusCounts(employeeId, role) {
  try {
    const sheet = getRequestsSheet();
    const data = sheet.getDataRange().getValues();

    let total = 0, pending = 0, inProgress = 0, waitingReview = 0, completed = 0;

    const normalizedEmpId = (employeeId || '').toString().trim().toUpperCase();

    for (let i = 1; i < data.length; i++) {
      const row = data[i];
      if (!row[0] && !row[1]) continue;

      total++;
      const status = (row[13] || '').toString().trim();

      if (status === 'กำลังซ่อม') {
        inProgress++;
      } else if (status === 'รอตรวจสอบ' || status === 'รอ Supervisor ตรวจสอบ' || status === 'รอ Manager อนุมัติ' || status === 'รอผู้รับอุปกรณ์ลงนาม') {
        waitingReview++;
      } else if (status === 'เสร็จสิ้น' || status === 'เสร็จสิ้น (Return to Service)') {
        completed++;
      } else {
        pending++;
      }
    }

    return { total, pending, inProgress, waitingReview, completed };
  } catch (error) {
    Logger.log('Error in getStatusCounts: ' + error.message);
    return { total: 0, pending: 0, inProgress: 0, waitingReview: 0, completed: 0 };
  }
}

/**
 * clearDashboardCache - ล้างแคช Dashboard บน Server ทันทีเมื่อมีข้อมูลเปลี่ยนแปลง
 */
function clearDashboardCache() {
  try {
    CacheService.getScriptCache().remove('DASHBOARD_DATA_CACHE');
  } catch(e) {
    Logger.log('Error clearing cache: ' + e.message);
  }
}

/**
 * getPdfTemplateCss - ดึงสไตล์และ Base64 ของแบบฟอร์มพิมพ์แบบ Lazy-load (เฉพาะเมื่อต้องการพิมพ์)
 */
function getPdfTemplateCss() {
  try {
    return HtmlService.createHtmlOutputFromFile('PdfTemplateImage').getContent();
  } catch(e) {
    Logger.log('Error in getPdfTemplateCss: ' + e.message);
    return '';
  }
}

/**
 * getPmTemplatePages - ดึงรูปภาพหน้า A4 ของแบบฟอร์ม PM แบบ Lazy-load สำหรับฟังก์ชันพิมพ์
 * แยกไฟล์รูปภาพออกจาก index.html เพื่อป้องกัน Iframe sandbox buffer overflow
 */
var _PM_TEMPLATE_IMAGES_CACHE = null;

function getPmTemplatePages(templateKey) {
  try {
    if (!_PM_TEMPLATE_IMAGES_CACHE) {
      var raw = HtmlService.createHtmlOutputFromFile('PmTemplateImagesData').getContent();
      var startIdx = raw.indexOf('>');
      var endIdx = raw.lastIndexOf('</script>');
      var jsonStr = (startIdx !== -1 && endIdx !== -1) ? raw.substring(startIdx + 1, endIdx).trim() : raw.trim();
      _PM_TEMPLATE_IMAGES_CACHE = JSON.parse(jsonStr);
    }
    var key = (templateKey || 'TR-TLD-025-A-TLM').toString().trim();
    if (_PM_TEMPLATE_IMAGES_CACHE && _PM_TEMPLATE_IMAGES_CACHE[key]) {
      return _PM_TEMPLATE_IMAGES_CACHE[key];
    }
    // Fallback: หากไม่พบ key ตรงๆ
    if (key.indexOf('GP') !== -1) {
      return _PM_TEMPLATE_IMAGES_CACHE['GP-MAK-090-A-TLM'] || [];
    } else if (key.indexOf('CAM') !== -1) {
      return _PM_TEMPLATE_IMAGES_CACHE['TR-CAM-804-A-TLM'] || [];
    }
    return _PM_TEMPLATE_IMAGES_CACHE['TR-TLD-025-A-TLM'] || [];
  } catch (e) {
    Logger.log('Error in getPmTemplatePages: ' + e.message);
    return [];
  }
}

/**
 * getDashboardData - ดึงข้อมูล Dashboard ครบในการเรียก 1 ครั้ง พร้อมระบบ CacheService
 * ตรวจสอบแคชก่อน ถ้ามีจะตอบกลับภายในเสี้ยววินาที ลดโหลด Google Sheet ลง 90%
 */
function getDashboardData(employeeId, role) {
  try {
    // 1. ตรวจสอบ Server Cache ก่อน (TTL 60 วินาที)
    const cache = CacheService.getScriptCache();
    const cachedData = cache.get('DASHBOARD_DATA_CACHE');
    if (cachedData) {
      try {
        return JSON.parse(cachedData);
      } catch(parseErr) {}
    }

    // 2. ถ้าไม่มีแคช ให้อ่านจากชีตแบบประหยัดรอบ (Lean Read)
    const sheet = getRequestsSheet();
    const data = sheet.getDataRange().getValues();

    if (data.length <= 1) {
      return { requests: [], counts: { total: 0, pending: 0, inProgress: 0, waitingReview: 0, completed: 0 } };
    }

    const headers = data[0];
    const requests = [];
    let total = 0, pending = 0, inProgress = 0, waitingReview = 0, completed = 0;

    for (let i = 1; i < data.length; i++) {
      const row = data[i];
      if (!row[0] && !row[1]) continue;

      let rowUuid = (row[0] != null) ? row[0].toString().trim() : '';
      if (!rowUuid) {
        rowUuid = Utilities.getUuid();
      }

      const request = {};
      for (let j = 0; j < headers.length; j++) {
        let value = row[j];
        const headerName = headers[j];
        if (headerName === 'InformTime' || headerName === 'ReceivedTime' || headerName === 'CompleteTime' || headerName === 'TechnicianTime' || headerName === 'EstimateTime' || headerName === 'SupervisorTime' || headerName === 'ManagerTime' || headerName === 'AcceptedTime') {
          value = formatTime24(value);
        } else if (headerName === 'EstimateDate' || headerName === 'SupervisorDate' || headerName === 'ManagerDate' || headerName === 'AcceptedDate') {
          value = formatDateDMY(value);
        } else if (value instanceof Date) {
          value = formatDate(value);
        }
        request[headerName] = value;
      }
      request.UUID = rowUuid;
      request._rowIndex = i + 1;

      // นับสถานะไปพร้อมกันในลูปเดียว
      total++;
      const status = (row[13] || '').toString().trim();
      if (status === 'กำลังซ่อม') {
        inProgress++;
      } else if (status === 'รอตรวจสอบ' || status === 'รอ Supervisor ตรวจสอบ' || status === 'รอ Manager อนุมัติ' || status === 'รอผู้รับอุปกรณ์ลงนาม') {
        waitingReview++;
      } else if (status === 'เสร็จสิ้น' || status === 'เสร็จสิ้น (Return to Service)') {
        completed++;
      } else {
        pending++;
      }

      requests.push(request);
    }

    const result = {
      requests: requests.reverse(), // ใหม่สุดก่อน
      counts: { total: total, pending: pending, inProgress: inProgress, waitingReview: waitingReview, completed: completed }
    };

    // 3. บันทึกลง Server Cache (ขนาดไม่เกิน 95KB)
    try {
      const jsonStr = JSON.stringify(result);
      if (jsonStr.length < 95000) {
        cache.put('DASHBOARD_DATA_CACHE', jsonStr, 60);
      }
    } catch(cacheErr) {
      Logger.log('Cache put warning: ' + cacheErr.message);
    }

    return result;
  } catch (error) {
    Logger.log('Error in getDashboardData: ' + error.message);
    return { requests: [], counts: { total: 0, pending: 0, inProgress: 0, waitingReview: 0, completed: 0 } };
  }
}

// ============================================================
// Helper Functions
// ============================================================

/**
 * formatTime24 - แปลงค่าเวลาใดๆ (Date object, "5:30 PM", "17:30:00", etc.) เป็นรูปแบบ 24 ชม. (HH:mm)
 */
function formatTime24(val) {
  if (!val && val !== 0) return '';

  if (val instanceof Date) {
    if (isNaN(val.getTime())) return '';
    try {
      const ss = getSpreadsheet();
      const tz = ss.getSpreadsheetTimeZone() || 'Asia/Bangkok';
      return Utilities.formatDate(val, tz, 'HH:mm');
    } catch(e) {
      return Utilities.formatDate(val, 'Asia/Bangkok', 'HH:mm');
    }
  }

  const s = val.toString().trim();
  if (!s || s.indexOf('1899') !== -1) return '';

  // เช็คกรณีเป็น 12-hour AM/PM (เช่น "5:30 PM", "05:30:00 PM", "5:30am")
  const ampmMatch = s.match(/^(\d{1,2}):(\d{2})(?::\d{2})?\s*([AaPp][Mm])?$/);
  if (ampmMatch) {
    let hours = parseInt(ampmMatch[1], 10);
    const minutes = ampmMatch[2];
    const modifier = ampmMatch[3] ? ampmMatch[3].toUpperCase() : null;

    if (modifier === 'PM' && hours < 12) {
      hours += 12;
    } else if (modifier === 'AM' && hours === 12) {
      hours = 0;
    }
    return String(hours).padStart(2, '0') + ':' + minutes;
  }

  // เช็คกรณีเป็น 24-hour (เช่น "17:30", "17:30:00", "7:30")
  const match24 = s.match(/^(\d{1,2}):(\d{2})/);
  if (match24) {
    const hours = parseInt(match24[1], 10);
    const minutes = match24[2];
    return String(hours).padStart(2, '0') + ':' + minutes;
  }

  return s;
}

/**
 * fixExistingTimeFormats - ปรับข้อมูลเวลาแถวเดิมใน Google Sheet ให้เป็น 24 ชม. ทั้งหมด และตั้ง format เป็น Text
 */
let _hasFixedTimeFormats = false;
function fixExistingTimeFormats() {
  if (_hasFixedTimeFormats) return;
  try {
    const cache = CacheService.getScriptCache();
    if (cache.get('time_formats_fixed') === '1') {
      _hasFixedTimeFormats = true;
      return;
    }
    const sheet = getRequestsSheet();
    const data = sheet.getDataRange().getValues();
    if (data.length <= 1) return;

    for (let i = 1; i < data.length; i++) {
      const rowIndex = i + 1;
      const informTimeRaw = data[i][3];   // Col D (index 3)
      const receivedTimeRaw = data[i][15]; // Col P (index 15)

      if (informTimeRaw) {
        const norm = formatTime24(informTimeRaw);
        if (norm && norm !== informTimeRaw.toString()) {
          sheet.getRange(rowIndex, 4).setNumberFormat('@STRING@').setValue(norm);
        }
      }
      if (receivedTimeRaw) {
        const norm = formatTime24(receivedTimeRaw);
        if (norm && norm !== receivedTimeRaw.toString()) {
          sheet.getRange(rowIndex, 16).setNumberFormat('@STRING@').setValue(norm);
        }
      }
    }
    cache.put('time_formats_fixed', '1', 86400); // จำไว้ 24 ชั่วโมง
    _hasFixedTimeFormats = true;
  } catch (e) {
    Logger.log('Error in fixExistingTimeFormats: ' + e.message);
  }
}

/**
 * formatDate - แปลง Date object เป็น string
 */
function formatDate(date) {
  if (!(date instanceof Date) || isNaN(date.getTime())) return '';
  try {
    if (date.getFullYear() <= 1900) {
      return Utilities.formatDate(date, 'Asia/Bangkok', 'HH:mm');
    }
    return Utilities.formatDate(date, 'Asia/Bangkok', 'dd/MM/yyyy');
  } catch (e) {
    return date.toString();
  }
}

/**
 * formatDateDMY - แปลงวันที่เป็นรูปแบบ วัน/เดือน/ปี (dd/MM/yyyy) เสมอ
 */
function formatDateDMY(val) {
  if (!val) return '';
  if (val instanceof Date) return formatDate(val);
  const s = val.toString().trim();
  if (s.indexOf('1899') !== -1) return '';
  const isoMatch = s.match(/^(\d{4})[-/](\d{1,2})[-/](\d{1,2})/);
  if (isoMatch) {
    return isoMatch[3].padStart(2, '0') + '/' + isoMatch[2].padStart(2, '0') + '/' + isoMatch[1];
  }
  const dmyMatch = s.match(/^(\d{1,2})[-/](\d{1,2})[-/](\d{4})/);
  if (dmyMatch) {
    return dmyMatch[1].padStart(2, '0') + '/' + dmyMatch[2].padStart(2, '0') + '/' + dmyMatch[3];
  }
  return s;
}

/**
 * getEquipmentList - ดึงรายการอุปกรณ์จาก GSE Master Sheet พร้อมสถานะ Emro Status แบบ Real-time
 * @param {boolean} [forceRefresh=false] - บังคับอ่านสดจากชีตโดยไม่ใช้แคช
 * @returns {Array} รายการ [{gseNo, description, emroStatus, isInactive}]
 */
function getEquipmentList(forceRefresh) {
  try {
    const cache = CacheService.getScriptCache();
    if (!forceRefresh) {
      const cached = cache.get('GSE_EQUIPMENT_MASTER_CACHE');
      if (cached) {
        try {
          return JSON.parse(cached);
        } catch(e) {}
      }
    }

    const GSE_SHEET_ID = '1i0hjTtfuJZX5EVIDxKNGcj4zr4qy3xuZHar1NAeYsQ0';
    const GSE_SHEET_GID = 982490752;

    const ss = SpreadsheetApp.openById(GSE_SHEET_ID);
    // เปิด sheet โดยใช้ sheetId (gid)
    const sheets = ss.getSheets();
    let targetSheet = null;
    for (let i = 0; i < sheets.length; i++) {
      if (sheets[i].getSheetId() === GSE_SHEET_GID) {
        targetSheet = sheets[i];
        break;
      }
    }
    if (!targetSheet) {
      targetSheet = ss.getSheets()[0]; // fallback: sheet แรก
    }

    const data = targetSheet.getDataRange().getValues();
    if (data.length <= 1) return [];

    const headers = data[0];
    // หา column index ของ GSE NO., DESCRIPTION, GSE S/N และ EMRO STATUS
    let gseNoIdx = -1, descIdx = -1, emroStatusIdx = -1, serialNoIdx = -1;
    for (let c = 0; c < headers.length; c++) {
      const h = headers[c].toString().trim().toUpperCase();
      if (h === 'GSE NO.' || h === 'GSE NO' || h === 'GSENO') gseNoIdx = c;
      if (h === 'DESCRIPTION') descIdx = c;
      if (h === 'GSE S/N' || h === 'S/N' || h === 'SERIAL NO' || h === 'SERIAL NO.' || h === 'SERIAL') serialNoIdx = c;
      if (h.indexOf('EMRO') !== -1 && h.indexOf('STATUS') !== -1) {
        emroStatusIdx = c;
      } else if (emroStatusIdx === -1 && (h === 'EMRO STATUS' || h === 'EMRO_STATUS' || h === 'STATUS' || h === 'EQUIPMENT STATUS')) {
        emroStatusIdx = c;
      }
    }
    // fallback: ใช้ column แรกและสองถ้าไม่เจอ header และ column 3 สำหรับ S/N
    if (gseNoIdx === -1) gseNoIdx = 0;
    if (descIdx === -1) descIdx = 1;
    if (serialNoIdx === -1 && headers.length > 3) serialNoIdx = 3;

    const list = [];
    for (let r = 1; r < data.length; r++) {
      const gseNo = (data[r][gseNoIdx] || '').toString().trim();
      const desc = (data[r][descIdx] || '').toString().trim();
      const serialNo = (serialNoIdx !== -1 ? (data[r][serialNoIdx] || '') : '').toString().trim();
      let emroStatus = '';
      if (emroStatusIdx !== -1) {
        emroStatus = (data[r][emroStatusIdx] || '').toString().trim();
      }

      if (gseNo) {
        // ตรวจสอบ Inactive: อ่านสดจากช่อง Emro Status ในชีตเป็นหลัก
        let isInactive = false;
        if (emroStatus) {
          isInactive = emroStatus.toUpperCase().indexOf('INACTIVE') !== -1;
        } else {
          isInactive = isEquipmentInactiveFallback(gseNo);
        }

        list.push({
          gseNo: gseNo,
          description: desc,
          serialNo: serialNo,
          emroStatus: emroStatus,
          isInactive: isInactive
        });
      }
    }

    // แคชไว้ 60 วินาที เพื่อความรวดเร็วและอัปเดตข้อมูลทุกนาที
    try {
      const jsonStr = JSON.stringify(list);
      if (jsonStr.length < 95000) {
        cache.put('GSE_EQUIPMENT_MASTER_CACHE', jsonStr, 60);
      }
    } catch(cErr) {}

    return list;
  } catch (e) {
    Logger.log('Error in getEquipmentList: ' + e.message);
    return [];
  }
}

/**
 * รายการรหัสอุปกรณ์ที่ไม่สามารถแจ้งซ่อมได้ (Inactive GSE Equipments - Fallback List)
 */
const INACTIVE_EQUIPMENTS = [
  'TLM-BC-011', 'TLM-BC-012', 'TLM-BC-013', 'TLM-BC-027', 'TLM-BC-028', 'TLM-BC-029',
  'TLM-BC-055', 'TLM-BC-058', 'TLM-BC-061', 'TLM-BC-090', 'TLM-BC-091', 'TLM-BC-092',
  'TLM-BC-093', 'TLM-BC-094', 'TLM-BC-105', 'TLM-BC-106', 'TLM-BC-119', 'TLM-BC-123',
  'TLM-BC-134', 'TLM-BC-145', 'TLM-BC-160', 'TLM-BC-168', 'TLM-BC-216', 'TLM-BC-226',
  'TLM-BC-229', 'TLM-BC-231', 'TLM-BC-236', 'TLM-BC-239', 'TLM-BC-240', 'TLM-BC-254',
  'TLM-BC-255', 'TLM-BC-256', 'TLM-BC-265', 'TLM-BC-282', 'TLM-BC-287',
  'TLM-ES-053', 'TLM-ES-054', 'TLM-ES-055',
  'TLM-N2-002',
  'TLM-PB-002', 'TLM-PB-028', 'TLM-PB-029',
  'TLM-PS-019', 'TLM-PS-020', 'TLM-PS-061', 'TLM-PS-062', 'TLM-PS-063', 'TLM-PS-066', 'TLM-PS-067',
  'TLM-PU-040',
  'TLM-TB-006', 'TLM-TB-007', 'TLM-TB-008', 'TLM-TB-039',
  'TLM-TR-043', 'TLM-TR-044', 'TLM-TR-045', 'TLM-TR-046', 'TLM-TR-047', 'TLM-TR-048',
  'TLM-VP-003'
];

/**
 * ตรวจสอบว่ารหัสอุปกรณ์มีอยู่ใน sheet GSE MASTER หรือไม่
 * @param {string} equipmentCode - รหัสอุปกรณ์ที่ต้องการตรวจสอบ
 * @returns {boolean} true ถ้ามีอยู่ในระบบ, false ถ้าไม่มี
 */
function isEquipmentInMaster(equipmentCode) {
  if (!equipmentCode) return false;
  const norm = equipmentCode.toString().toUpperCase().replace(/[^A-Z0-9]/g, '');
  if (!norm) return false;

  try {
    const list = getEquipmentList();
    if (!list || list.length === 0) return true; // หากชีตขัดข้อง อนุญาตเป็น fallback
    for (let i = 0; i < list.length; i++) {
      const itemNorm = (list[i].gseNo || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
      if (norm === itemNorm) {
        return true;
      }
    }
  } catch (err) {
    Logger.log('Error in isEquipmentInMaster: ' + err.message);
    return true;
  }
  return false;
}

/**
 * ดึงข้อมูลอุปกรณ์จาก GSE MASTER ตามรหัส (Normalized)
 * @param {string} equipmentCode
 * @returns {Object|null} {gseNo, description, emroStatus, isInactive}
 */
function getEquipmentItemFromMaster(equipmentCode) {
  if (!equipmentCode) return null;
  const norm = equipmentCode.toString().toUpperCase().replace(/[^A-Z0-9]/g, '');
  if (!norm) return null;

  try {
    const list = getEquipmentList();
    for (let i = 0; i < list.length; i++) {
      const itemNorm = (list[i].gseNo || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
      if (norm === itemNorm) {
        return list[i];
      }
    }
  } catch (err) {
    Logger.log('Error in getEquipmentItemFromMaster: ' + err.message);
  }
  return null;
}

/**
 * ตรวจสอบว่ารหัสอุปกรณ์อยู่ในสถานะ Inactive หรือไม่ (ตรวจจาก Master Sheet Real-time)
 */
function isEquipmentInactive(equipmentCode) {
  if (!equipmentCode) return false;
  const norm = equipmentCode.toString().toUpperCase().replace(/[^A-Z0-9]/g, '');

  try {
    const list = getEquipmentList();
    for (let i = 0; i < list.length; i++) {
      const itemNorm = (list[i].gseNo || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
      if (norm === itemNorm) {
        return !!list[i].isInactive;
      }
    }
  } catch (err) {
    Logger.log('Error in isEquipmentInactive: ' + err.message);
  }

  return isEquipmentInactiveFallback(equipmentCode);
}

/**
 * Fallback ตรวจสอบจากรายการคงที่เดิม
 */
function isEquipmentInactiveFallback(equipmentCode) {
  if (!equipmentCode) return false;
  const norm = equipmentCode.toString().toUpperCase().replace(/[^A-Z0-9]/g, '');
  for (let i = 0; i < INACTIVE_EQUIPMENTS.length; i++) {
    if (norm === INACTIVE_EQUIPMENTS[i].replace(/[^A-Z0-9]/g, '')) return true;
  }
  return false;
}

/**
 * checkDuplicateEquipment - ตรวจสอบว่ามีใบแจ้งซ่อมที่ยังเปิดอยู่สำหรับอุปกรณ์นี้ไหม
 * @param {string} equipmentCode - รหัสอุปกรณ์
 * @param {string} excludeUuid  - UUID ที่ต้องการยกเว้น (กรณีแก้ไข)
 * @returns {Object} { hasDuplicate: boolean, existingRequests: Array }
 */
function checkDuplicateEquipment(equipmentCode, excludeUuid) {
  try {
    if (!equipmentCode || !equipmentCode.trim()) {
      return { hasDuplicate: false, existingRequests: [] };
    }
    const sheet = getRequestsSheet();
    const data = sheet.getDataRange().getValues();
    const codeToCheck = equipmentCode.toString().trim().toUpperCase();
    const existing = [];

    for (let i = 1; i < data.length; i++) {
      const row = data[i];
      if (!row[0] && !row[1]) continue;
      const uuid = (row[0] || '').toString();
      if (excludeUuid && uuid === excludeUuid) continue;

      const eqCode = (row[5] || '').toString().trim().toUpperCase(); // F - รหัสอุปกรณ์
      const status = (row[13] || '').toString().trim(); // N - สถานะ

      // เฉพาะใบที่ยังไม่ "เสร็จสิ้น"
      if (eqCode === codeToCheck && status !== 'เสร็จสิ้น') {
        existing.push({
          requestId: (row[1] || '').toString(),
          informDate: row[2] instanceof Date ? formatDate(row[2]) : (row[2] || '').toString(),
          status: status,
          damageAppearance: (row[8] || '').toString()
        });
      }
    }
    return { hasDuplicate: existing.length > 0, existingRequests: existing };
  } catch (e) {
    Logger.log('Error in checkDuplicateEquipment: ' + e.message);
    return { hasDuplicate: false, existingRequests: [] };
  }
}

// ============================================================
// === SYNC TO "บันทึกการเปิด W/O" SPREADSHEET ===
// ============================================================

/**
 * parseDateString - แปลง string วันที่ (dd/MM/yyyy หรือ yyyy-MM-dd) เป็น Date object
 */
function parseDateString(dateVal) {
  if (!dateVal) return new Date();
  if (dateVal instanceof Date) return dateVal;
  const s = dateVal.toString().trim();
  if (s.indexOf('/') !== -1) {
    const parts = s.split('/');
    if (parts.length === 3) {
      return new Date(parseInt(parts[2], 10), parseInt(parts[1], 10) - 1, parseInt(parts[0], 10));
    }
  } else if (s.indexOf('-') !== -1) {
    const parts = s.split('-');
    if (parts.length === 3) {
      return new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
    }
  }
  return new Date();
}

/**
 * getWoSheetTabName - สร้างชื่อแท็บตามเดือน/ปี เช่น "หน้าเก็บข้อมูล SEP 2026"
 */
function getWoSheetTabName(dateObj) {
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  const monthStr = months[dateObj.getMonth()];
  const yearStr = dateObj.getFullYear();
  return 'หน้าเก็บข้อมูล ' + monthStr + ' ' + yearStr;
}

/**
 * getOrCreateWoMonthSheet - ค้นหาหรือสร้างแท็บเดือนในไฟล์ บันทึกการเปิด W/O
 * หากไม่มีแท็บ (เช่น ถูกลบ) จะสร้างใหม่และกู้คืนข้อมูลเดิมจาก Requests sheet ให้อัตโนมัติทันที
 */
function getOrCreateWoMonthSheet(dateObj) {
  try {
    const ss = SpreadsheetApp.openById(WO_SPREADSHEET_ID);
    const targetTabName = getWoSheetTabName(dateObj);
    let sheet = ss.getSheetByName(targetTabName);
    if (sheet) return sheet;

    // หาแท็บ template เพื่อคัดลอก
    let templateSheet = ss.getSheetByName('template') || ss.getSheetByName('Template') || ss.getSheetByName('TEMPLATE');
    if (!templateSheet) {
      templateSheet = ss.getSheets()[0];
    }

    const newSheet = templateSheet.copyTo(ss);
    newSheet.setName(targetTabName);
    ss.setActiveSheet(newSheet);
    ss.moveActiveSheet(1); // เลื่อนแท็บใหม่มาไว้ด้านหน้าสุด

    // เคลียร์ข้อมูลเดิมที่ติดมากับการคัดลอก (เก็บโครงสร้างตารางและ dropdown ไว้)
    const headerRow = findWoHeaderRow(newSheet);
    const lastRow = newSheet.getLastRow();
    if (lastRow > headerRow) {
      newSheet.getRange(headerRow + 1, 1, lastRow - headerRow, 13).clearContent();
      newSheet.getRange(headerRow + 1, 1, lastRow - headerRow, 1).clearNote();
    }

    // กู้คืนข้อมูลอัตโนมัติจากฐานข้อมูลหลัก Requests ทันที (ป้องกันข้อมูลสูญหายกรณีชีตถูกลบแล้วสร้างใหม่)
    rebuildWoRowsForMonth(newSheet, dateObj, headerRow);

    return newSheet;
  } catch (e) {
    Logger.log('Error in getOrCreateWoMonthSheet: ' + e.message);
    return null;
  }
}

/**
 * rebuildWoRowsForMonth - กวาดข้อมูลจาก Requests sheet มาเขียนลงในแท็บ W/O ประจำเดือน
 * @param {Sheet} sheet - แท็บเดือนในไฟล์ W/O
 * @param {Date} dateObj - วันที่ของเดือนที่ต้องการกู้คืน
 * @param {number} [headerRow] - แถวหัวตาราง
 * @returns {number} จำนวนแถวที่กู้คืนได้
 */
function rebuildWoRowsForMonth(sheet, dateObj, headerRow) {
  try {
    if (!sheet) return 0;
    if (!headerRow) headerRow = findWoHeaderRow(sheet);

    const reqSheet = getRequestsSheet();
    const data = reqSheet.getDataRange().getValues();
    if (data.length <= 1) return 0;

    const headers = data[0];
    const targetMonth = dateObj.getMonth(); // 0-11
    const targetYear = dateObj.getFullYear();

    const uuidIdx = headers.indexOf('UUID');
    const reqIdIdx = headers.indexOf('RequestID');
    const priorityIdx = headers.indexOf('Priority');
    const informDateIdx = headers.indexOf('InformDate');
    const eqCodeIdx = headers.indexOf('EquipmentCode');
    const damageIdx = headers.indexOf('DamageAppearance');
    const woIdx = headers.indexOf('WorkOrderNo');
    const statusIdx = headers.indexOf('Status');
    const recDateIdx = headers.indexOf('ReceivedDate');
    const recByIdx = headers.indexOf('ReceivedBy');
    const compDateIdx = headers.indexOf('CompleteDate');
    const a1Idx = headers.indexOf('ActionBy1');
    const a2Idx = headers.indexOf('ActionBy2');
    const a3Idx = headers.indexOf('ActionBy3');

    const matchedItems = [];
    for (let r = 1; r < data.length; r++) {
      const row = data[r];
      const uuid = (row[uuidIdx] || '').toString().trim();
      if (!uuid) continue;

      const infDateVal = row[informDateIdx];
      const dObj = parseDateString(infDateVal);
      if (dObj && dObj.getMonth() === targetMonth && dObj.getFullYear() === targetYear) {
        const reqIdVal = reqIdIdx !== -1 ? (row[reqIdIdx] || '').toString().trim() : '';
        const prioVal = priorityIdx !== -1 ? (row[priorityIdx] || '').toString().trim() : '';
        matchedItems.push({
          uuid: uuid,
          requestId: reqIdVal,
          priority: prioVal,
          equipmentCode: (row[eqCodeIdx] || '').toString().trim(),
          damageAppearance: (row[damageIdx] || '').toString().trim(),
          workOrderNo: (row[woIdx] || '').toString().trim().replace(/\D/g, ''),
          status: (row[statusIdx] || '').toString().trim(),
          receivedDate: row[recDateIdx],
          receivedBy: (row[recByIdx] || '').toString().trim(),
          informDate: infDateVal,
          completeDate: row[compDateIdx],
          actionBy1: (row[a1Idx] || '').toString().trim(),
          actionBy2: (row[a2Idx] || '').toString().trim(),
          actionBy3: (row[a3Idx] || '').toString().trim()
        });
      }
    }

    if (matchedItems.length === 0) return 0;

    // เคลียร์ข้อมูลเก่าทั้งหมดใต้ headerRow
    const lastRow = sheet.getLastRow();
    if (lastRow > headerRow) {
      sheet.getRange(headerRow + 1, 1, lastRow - headerRow, 13).clearContent();
      sheet.getRange(headerRow + 1, 1, lastRow - headerRow, 1).clearNote();
    }

    // เตรียม 2D array สำหรับ batch write
    const rowsValues = [];
    const notesValues = [];

    for (let i = 0; i < matchedItems.length; i++) {
      const item = matchedItems[i];

      let woStatus = 'OPEN';
      let closeDateStr = '';
      if (item.status === 'เสร็จสิ้น' || item.status === 'เสร็จสิ้น (Return to Service)') {
        woStatus = 'CLOSED';
        if (item.completeDate) {
          const cd = parseDateString(item.completeDate);
          if (cd) closeDateStr = (cd.getMonth() + 1) + '/' + cd.getDate() + '/' + cd.getFullYear();
        }
      } else if (item.status === 'รอตรวจสอบ' || item.status === 'รอ Supervisor ตรวจสอบ' || item.status === 'รอ Manager อนุมัติ' || item.status === 'รอผู้รับอุปกรณ์ลงนาม' || item.status === 'COMPLETE') {
        woStatus = 'COMPLETE';
        if (item.completeDate) {
          const cd = parseDateString(item.completeDate);
          if (cd) closeDateStr = (cd.getMonth() + 1) + '/' + cd.getDate() + '/' + cd.getFullYear();
        }
      }

      let openDateStr = '';
      if (item.receivedDate) {
        const rd = parseDateString(item.receivedDate);
        if (rd) openDateStr = (rd.getMonth() + 1) + '/' + rd.getDate() + '/' + rd.getFullYear();
      } else if (item.informDate) {
        const id = parseDateString(item.informDate);
        if (id) openDateStr = (id.getMonth() + 1) + '/' + id.getDate() + '/' + id.getFullYear();
      }

      const scanDoc = item.workOrderNo ? 'NO' : '';
      const printStatus = 'Not Print';
      const openedBy = (item.receivedBy && item.receivedBy.toUpperCase().startsWith('TL')) ? item.receivedBy.toUpperCase() : '';

      const isItemPm = (item.priority === 'PM' || (item.requestId && item.requestId.toString().startsWith('PM')) || (item.damageAppearance && item.damageAppearance.toString().startsWith('PM')));
      const itemPriority = isItemPm ? 'PM' : 'CM';

      rowsValues.push([
        item.equipmentCode,       // Col 1: EQ NO.
        item.damageAppearance,    // Col 2: อาการ
        itemPriority,             // Col 3: Priority
        item.workOrderNo,         // Col 4: W/O
        woStatus,                 // Col 5: สถานะ W/O
        scanDoc,                  // Col 6: สแกนเอกสาร
        printStatus,              // Col 7: สถานะปริ้นท์
        openedBy,                 // Col 8: คนเปิดใบงาน
        openDateStr,              // Col 9: วันที่เปิดใบงาน
        closeDateStr,             // Col 10: วันที่ปิด
        item.actionBy1,           // Col 11: ช่าง 1
        item.actionBy2,           // Col 12: ช่าง 2
        item.actionBy3            // Col 13: ช่าง 3
      ]);

      notesValues.push(['UUID:' + item.uuid]);
    }

    // เขียนข้อมูลและ Note รวดเดียว (Batch Write)
    sheet.getRange(headerRow + 1, 1, rowsValues.length, 13).setValues(rowsValues);
    sheet.getRange(headerRow + 1, 1, notesValues.length, 1).setNotes(notesValues);

    return matchedItems.length;
  } catch (e) {
    Logger.log('Error in rebuildWoRowsForMonth: ' + e.message);
    return 0;
  }
}

/**
 * adminRestoreWoMonthSheet - แอดมินสั่งซิงค์/กู้คืนข้อมูล W/O ประจำเดือนจาก Requests Sheet
 */
function adminRestoreWoMonthSheet(monthNum, yearNum, adminEmpId) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(15000);
  } catch (e) {
    return { success: false, message: 'ระบบกำลังมีการทำงาน กรุณาลองใหม่อีกครั้ง' };
  }

  try {
    const empId = (adminEmpId || '').toString().trim().toUpperCase();
    if (!ADMIN_IDS.includes(empId)) {
      return { success: false, message: 'คุณไม่มีสิทธิ์ในการสั่งกู้คืนข้อมูล (เฉพาะ Admin)' };
    }

    const m = parseInt(monthNum, 10);
    const y = parseInt(yearNum, 10);
    if (isNaN(m) || isNaN(y) || m < 1 || m > 12) {
      return { success: false, message: 'กรุณาระบุเดือนและปีให้ถูกต้อง' };
    }

    const targetDate = new Date(y, m - 1, 1);
    const targetTabName = getWoSheetTabName(targetDate);

    // เปิดหรือสร้างแท็บเดือน
    const targetSheet = getOrCreateWoMonthSheet(targetDate);
    if (!targetSheet) {
      return { success: false, message: 'ไม่สามารถเปิดหรือสร้างแท็บ "' + targetTabName + '" ในไฟล์ W/O ได้' };
    }

    const headerRow = findWoHeaderRow(targetSheet);
    const count = rebuildWoRowsForMonth(targetSheet, targetDate, headerRow);

    clearDashboardCache();

    return {
      success: true,
      tabName: targetTabName,
      count: count,
      message: 'ซิงค์และกู้คืนข้อมูลแท็บ "' + targetTabName + '" สำเร็จทั้งหมด ' + count + ' รายการ'
    };
  } catch (err) {
    Logger.log('Error in adminRestoreWoMonthSheet: ' + err.message);
    return { success: false, message: 'เกิดข้อผิดพลาด: ' + err.message };
  } finally {
    try { lock.releaseLock(); } catch(e) {}
  }
}

/**
 * protectWoSheetTabs - ตั้งค่าป้องกันชีต (Protect Sheets) ในไฟล์ W/O เพื่อแจ้งเตือนและป้องกันการเผลอลบ
 */
function protectWoSheetTabs() {
  try {
    const ss = SpreadsheetApp.openById(WO_SPREADSHEET_ID);
    const sheets = ss.getSheets();
    let count = 0;

    sheets.forEach(function(sh) {
      const name = sh.getName();
      if (name.toLowerCase().includes('template') || name.startsWith('หน้าเก็บข้อมูล')) {
        let protections = sh.getProtections(SpreadsheetApp.ProtectionType.SHEET);
        let protection = (protections && protections.length > 0) ? protections[0] : null;
        if (!protection) {
          protection = sh.protect().setDescription('ระบบป้องกันแผ่นงาน: ' + name);
        }
        protection.setWarningOnly(true);
        count++;
      }
    });

    return { success: true, message: 'ตั้งค่าการป้องกันแจ้งเตือนสำหรับ ' + count + ' แผ่นงานเรียบร้อยแล้ว' };
  } catch(e) {
    Logger.log('Error in protectWoSheetTabs: ' + e.message);
    return { success: false, message: e.message };
  }
}

/**
 * findWoHeaderRow - ค้นหาแถวหัวตาราง (หาคำว่า "EQ NO.")
 */
function findWoHeaderRow(sheet) {
  try {
    const maxSearch = Math.min(sheet.getLastRow(), 350);
    if (maxSearch <= 0) return 2;
    const values = sheet.getRange(1, 1, maxSearch, 2).getValues();
    for (let r = 0; r < values.length; r++) {
      const val = (values[r][0] || '').toString().trim().toUpperCase();
      if (val === 'EQ NO.' || val === 'EQ NO' || val === 'EQ.NO') {
        return r + 1; // 1-based row
      }
    }
  } catch (e) {
    Logger.log('Error in findWoHeaderRow: ' + e.message);
  }
  return 2;
}

/**
 * findWoNextEmptyRow - หาแถวว่างแถวถัดไปใต้หัวตาราง
 */
function findWoNextEmptyRow(sheet, headerRow) {
  try {
    const lastRow = Math.max(sheet.getLastRow(), headerRow + 1);
    const numRows = lastRow - headerRow;
    if (numRows > 0) {
      const colA = sheet.getRange(headerRow + 1, 1, numRows, 1).getValues();
      for (let i = 0; i < colA.length; i++) {
        if (!colA[i][0] || colA[i][0].toString().trim() === '') {
          return headerRow + 1 + i;
        }
      }
    }
    return lastRow + 1;
  } catch (e) {
    return sheet.getLastRow() + 1;
  }
}

/**
 * findWoRowByUUID - หาแถวใน Sheet W/O จาก Note UUID หรือ fallback
 * รองรับการจับคู่จาก Note UUID, เลข W/O, หรือ รหัสอุปกรณ์ + อาการเสีย (ค้นหาจากล่างขึ้นบน)
 */
function findWoRowByUUID(sheet, headerRow, uuid, optWoNo, optEqNo, optDamage) {
  try {
    const lastRow = Math.max(sheet.getLastRow(), headerRow + 1);
    const numRows = lastRow - headerRow;
    if (numRows <= 0) return null;

    // 1. ค้นหาจาก Note ใน Column A
    if (uuid && uuid.toString().trim()) {
      const searchNote = 'UUID:' + uuid.toString().trim();
      const notes = sheet.getRange(headerRow + 1, 1, numRows, 1).getNotes();
      for (let i = numRows - 1; i >= 0; i--) {
        if (notes[i][0] && notes[i][0].indexOf(searchNote) !== -1) {
          return headerRow + 1 + i;
        }
      }
    }

    const searchNote = uuid ? ('UUID:' + uuid.toString().trim()) : '';

    // 2. Fallback: หาจาก W/O No. ใน Column D (ค้นหาจากล่างขึ้นบน)
    if (optWoNo && optWoNo.toString().trim()) {
      const woCol = sheet.getRange(headerRow + 1, 4, numRows, 1).getValues();
      const searchWo = optWoNo.toString().trim().replace(/\D/g, '');
      if (searchWo) {
        for (let i = numRows - 1; i >= 0; i--) {
          const cellWo = (woCol[i][0] || '').toString().trim().replace(/\D/g, '');
          if (cellWo === searchWo) {
            if (searchNote) sheet.getRange(headerRow + 1 + i, 1).setNote(searchNote);
            return headerRow + 1 + i;
          }
        }
      }
    }

    // 3. Fallback: หาจาก EQ NO. (Column A) + อาการเสีย (Column B) (ค้นหาจากล่างขึ้นบนเพื่อจับแถวล่าสุด)
    if (optEqNo && optEqNo.toString().trim()) {
      const eqCol = sheet.getRange(headerRow + 1, 1, numRows, 1).getValues();
      const damageCol = sheet.getRange(headerRow + 1, 2, numRows, 1).getValues();
      const notes = sheet.getRange(headerRow + 1, 1, numRows, 1).getNotes();
      const searchEq = optEqNo.toString().trim().toUpperCase();
      const searchDmg = optDamage ? optDamage.toString().trim() : '';

      // 3.1 ลองหารหัสอุปกรณ์และอาการเสียที่ตรงกัน (ล่างขึ้นบน)
      if (searchDmg) {
        for (let i = numRows - 1; i >= 0; i--) {
          const rowEq = (eqCol[i][0] || '').toString().trim().toUpperCase();
          const rowDmg = (damageCol[i][0] || '').toString().trim();
          if (rowEq === searchEq && rowDmg === searchDmg) {
            if (searchNote) sheet.getRange(headerRow + 1 + i, 1).setNote(searchNote);
            return headerRow + 1 + i;
          }
        }
      }

      // 3.2 ถอยหลังจากล่างขึ้นบน หารหัสอุปกรณ์ที่ตรงกันและยังไม่มี Note (หรือกรณี Note หลุด)
      for (let i = numRows - 1; i >= 0; i--) {
        const rowEq = (eqCol[i][0] || '').toString().trim().toUpperCase();
        if (rowEq === searchEq && (!notes[i][0] || notes[i][0] === '')) {
          if (searchNote) sheet.getRange(headerRow + 1 + i, 1).setNote(searchNote);
          return headerRow + 1 + i;
        }
      }
    }
  } catch (e) {
    Logger.log('Error in findWoRowByUUID: ' + e.message);
  }
  return null;
}

/**
 * syncToWoSheetOnCreate - บันทึกข้อมูลลง Sheet บันทึกการเปิด W/O เมื่อผู้ใช้แจ้งซ่อม
 */
function syncToWoSheetOnCreate(uuid, data) {
  try {
    const dateObj = parseDateString(data.informDate);
    const sheet = getOrCreateWoMonthSheet(dateObj);
    if (!sheet) return;

    const headerRow = findWoHeaderRow(sheet);
    const targetRow = findWoNextEmptyRow(sheet, headerRow);

    // Columns:
    // A (1): EQ NO.
    // B (2): อาการ
    // C (3): Priority -> "CM"
    // D (4): W/O
    // E (5): สถานะ W/O -> "OPEN"
    // F (6): สแกนเอกสาร -> ว่างไว้ให้ admin กรอก
    // G (7): สถานะปริ้นท์ -> "Not Print"
    sheet.getRange(targetRow, 1).setValue(data.equipmentCode || '');
    sheet.getRange(targetRow, 2).setValue(data.damageAppearance || '');
    const isPm = (data.priority === 'PM' || (data.requestId && data.requestId.toString().startsWith('PM')) || data.isPm);
    sheet.getRange(targetRow, 3).setValue(isPm ? 'PM' : 'CM');
    sheet.getRange(targetRow, 4).setValue(data.workOrderNo || '');
    sheet.getRange(targetRow, 5).setValue('OPEN');
    sheet.getRange(targetRow, 7).setValue('Not Print');

    // บันทึก Note ซ่อน UUID ไว้อ้างอิง
    sheet.getRange(targetRow, 1).setNote('UUID:' + uuid);
  } catch (e) {
    Logger.log('Error in syncToWoSheetOnCreate: ' + e.message);
  }
}

/**
 * syncToWoSheetOnUpdate - อัปเดตข้อมูลใน Sheet บันทึกการเปิด W/O
 * @param {string} uuid - UUID ของใบแจ้งซ่อม
 * @param {Object} data - ข้อมูลใบแจ้งซ่อม
 * @param {string} currentAdminId - รหัสพนักงาน Admin (ถ้ามี)
 * @param {string} role - บทบาทของผู้ที่ทำการบันทึก ('admin' หรือ อื่นๆ)
 */
function syncToWoSheetOnUpdate(uuid, data, currentAdminId, role) {
  try {
    const dateObj = parseDateString(data.informDate);
    const sheet = getOrCreateWoMonthSheet(dateObj);
    if (!sheet) return;

    const headerRow = findWoHeaderRow(sheet);
    let targetRow = findWoRowByUUID(sheet, headerRow, uuid, data.workOrderNo, data.equipmentCode, data.damageAppearance);

    if (!targetRow) {
      targetRow = findWoNextEmptyRow(sheet, headerRow);
      sheet.getRange(targetRow, 1).setNote('UUID:' + uuid);
    }

    if (data.equipmentCode) sheet.getRange(targetRow, 1).setValue(data.equipmentCode);
    if (data.damageAppearance) sheet.getRange(targetRow, 2).setValue(data.damageAppearance);
    const isPm = (data.priority === 'PM' || (data.requestId && data.requestId.toString().startsWith('PM')) || data.isPm);
    sheet.getRange(targetRow, 3).setValue(isPm ? 'PM' : 'CM');

    const isAdmin = (role === 'admin');
    const cleanWo = (data.workOrderNo != null) ? data.workOrderNo.toString().trim().replace(/\D/g, '') : '';

    if (isAdmin || cleanWo) {
      // 1. W/O (Col D = 4)
      if (cleanWo) {
        sheet.getRange(targetRow, 4).setValue(cleanWo);
        sheet.getRange(targetRow, 6).setValue('NO'); // สแกนเอกสาร (Col F = 6)
      } else if (isAdmin) {
        sheet.getRange(targetRow, 4).setValue('');
      }

      // 2. สถานะ W/O (Col E = 5)
      if (data.status === 'เสร็จสิ้น' || data.status === 'เสร็จสิ้น (Return to Service)') {
        sheet.getRange(targetRow, 5).setValue('CLOSED');
        const now = new Date();
        const closeDateStr = (now.getMonth() + 1) + '/' + now.getDate() + '/' + now.getFullYear();
        sheet.getRange(targetRow, 10).setValue(closeDateStr); // วันที่ปิด (Col J = 10)
      } else if (data.status === 'รอตรวจสอบ' || data.status === 'รอ Supervisor ตรวจสอบ' || data.status === 'รอ Manager อนุมัติ' || data.status === 'รอผู้รับอุปกรณ์ลงนาม') {
        sheet.getRange(targetRow, 5).setValue('COMPLETE');
      } else if (data.status) {
        sheet.getRange(targetRow, 5).setValue('OPEN');
      }

      // 3. วันที่เปิดใบงาน (Col I = 9) - วันที่รับแจ้ง หรือวันที่ Admin เข้ามาเปิดงาน
      if (data.receivedDate && data.receivedDate.toString().trim()) {
        const recDate = parseDateString(data.receivedDate);
        const openDateStr = (recDate.getMonth() + 1) + '/' + recDate.getDate() + '/' + recDate.getFullYear();
        sheet.getRange(targetRow, 9).setValue(openDateStr);
      } else if (data.workOrderNo && data.workOrderNo.toString().trim()) {
        const now = new Date();
        const openDateStr = (now.getMonth() + 1) + '/' + now.getDate() + '/' + now.getFullYear();
        sheet.getRange(targetRow, 9).setValue(openDateStr);
      }

      // 4. คนเปิดใบงาน (Col H = 8) - อัปเดตเป็นรหัส Admin ผู้เปิดใบงานทันที เช่น TL260006, TL186205
      if (currentAdminId && currentAdminId.toString().trim().toUpperCase().startsWith('TL')) {
        sheet.getRange(targetRow, 8).setValue(currentAdminId.toString().trim().toUpperCase());
      }
    } else {
      // สำหรับ User ทั่วไป (Requester) ที่มาแก้ไขใบงานตัวเอง:
      // ห้ามแตะต้องช่อง คนเปิดใบงาน (Col H), วันที่เปิด (Col I), หรือ W/O (Col D)
      // และหาก Col D (W/O) ยังว่างอยู่ ให้ตรวจสอบว่า Col H มีค่าหลุดค้างไว้หรือไม่ ถ้ามีให้ล้างออกทันที
      const currentWo = sheet.getRange(targetRow, 4).getValue();
      if (!currentWo || currentWo.toString().trim() === '') {
        const currentH = sheet.getRange(targetRow, 8).getValue();
        if (currentH && currentH.toString().trim()) {
          sheet.getRange(targetRow, 8).setValue(''); // ล้างรหัส user ออกจากช่องคนเปิดใบงาน รอ Admin
        }
      }
    }
  } catch (e) {
    Logger.log('Error in syncToWoSheetOnUpdate: ' + e.message);
  }
}

/**
 * cleanupInvalidWoSheetRequesters - ล้างรหัส user ที่อาจหลุดไปอยู่ในช่อง "คนเปิดใบงาน" (Col H) ขณะที่ยังไม่มี W/O
 */
function cleanupInvalidWoSheetRequesters() {
  try {
    const now = new Date();
    const sheet = getOrCreateWoMonthSheet(now);
    if (!sheet) return;

    const headerRow = findWoHeaderRow(sheet);
    const lastRow = sheet.getLastRow();
    if (lastRow <= headerRow) return;

    const numRows = lastRow - headerRow;
    const values = sheet.getRange(headerRow + 1, 1, numRows, 8).getValues();

    for (let i = 0; i < values.length; i++) {
      const wo = (values[i][3] || '').toString().trim(); // Col D = 4
      const openedBy = (values[i][7] || '').toString().trim(); // Col H = 8

      // หากยังไม่มีเลข W/O แต่มีคนเปิดใบงานเป็น TL130150 หรือผู้แจ้งซ่อม ให้เคลียร์ Col H ออก
      if (!wo && openedBy === 'TL130150') {
        sheet.getRange(headerRow + 1 + i, 8).setValue('');
      }
    }
  } catch(e) {
    Logger.log('Error in cleanupInvalidWoSheetRequesters: ' + e.message);
  }
}

/**
 * markWoSheetPrinted - อัปเดตสถานะปริ้นท์ใน Sheet เป็น "Printed" เมื่อกดพิมพ์
 */
function markWoSheetPrinted(uuid) {
  try {
    if (!uuid) return { success: false };
    const req = getRequestByUUID(uuid);
    if (!req) return { success: false };

    const dateObj = parseDateString(req.InformDate);
    const sheet = getOrCreateWoMonthSheet(dateObj);
    if (!sheet) return { success: false };

    const headerRow = findWoHeaderRow(sheet);
    const targetRow = findWoRowByUUID(sheet, headerRow, uuid, req.WorkOrderNo, req.EquipmentCode);
    if (targetRow) {
      sheet.getRange(targetRow, 7).setValue('Printed'); // Col G (7)
      return { success: true };
    }
    return { success: false };
  } catch (e) {
    Logger.log('Error in markWoSheetPrinted: ' + e.message);
    return { success: false, error: e.message };
  }
}

function markRequestPrinted(uuid) {
  return markWoSheetPrinted(uuid);
}

// ============================================================
// === TECHNICIAN REPAIR & SPARE PARTS MANAGEMENT ===
// ============================================================

const REQUEST_HEADERS = [
  'UUID', 'RequestID', 'InformDate', 'InformTime', 'EquipmentName',
  'EquipmentCode', 'HrKm', 'DueDate', 'DamageAppearance', 'RequesterName',
  'RequesterID', 'ApproverName', 'ApproverTel', 'Status', 'ReceivedDate',
  'ReceivedTime', 'ReceivedBy', 'WorkOrderNo', 'Timestamp', 'LastModified',
  'MaintenanceDetails', 'ActionBy1', 'ActionBy2', 'ActionBy3',
  'ActualRepairTime', 'CompleteDate', 'CompleteTime',
  'TechnicianName', 'TechnicianDate', 'TechnicianTime',
  'EstimateDate', 'EstimateTime',
  'SupervisorName', 'SupervisorId', 'SupervisorDate', 'SupervisorTime', 'SupervisorNotes',
  'ManagerName', 'ManagerId', 'ManagerDate', 'ManagerTime', 'ManagerNotes',
  'AcceptedByName', 'AcceptedById', 'AcceptedDate', 'AcceptedTime',
  'ReworkReason',
  'WoSheetStatus', 'WoClosedDate',
  'Priority', 'PmCheckLevel', 'PmTaskCardTemplate', 'PmChecklistData'
];

/**
 * ensureRequestHeaders - ตรวจสอบและสร้างหัวตารางเพิ่มเติมใน Requests sheet
 */
function ensureRequestHeaders(sheet) {
  try {
    if (!sheet) return;
    const lastCol = sheet.getLastColumn();
    if (lastCol < REQUEST_HEADERS.length) {
      sheet.getRange(1, 1, 1, REQUEST_HEADERS.length).setValues([REQUEST_HEADERS]);
    }
  } catch(e) {
    Logger.log('Error in ensureRequestHeaders: ' + e.message);
  }
}

const SPARE_PARTS_HEADERS = [
  'UUID', 'RequestID', 'WorkOrderNo', 'ItemNo', 'SparePartName',
  'PartNo', 'TypeModel', 'Qty', 'Price', 'RecordedBy', 'Timestamp'
];

/**
 * getOrCreateSparePartsSheet - ค้นหาหรือสร้าง Sheet "SpareParts" สำหรับเก็บชิ้นส่วนอะไหล่ที่เปลี่ยน
 */
function getOrCreateSparePartsSheet() {
  const ss = getSpreadsheet();
  let sheet = ss.getSheetByName('SpareParts');
  if (!sheet) {
    sheet = ss.insertSheet('SpareParts');
    sheet.getRange(1, 1, 1, SPARE_PARTS_HEADERS.length).setValues([SPARE_PARTS_HEADERS]);
    sheet.getRange(1, 1, 1, SPARE_PARTS_HEADERS.length).setFontWeight('bold').setBackground('#E31837').setFontColor('#FFFFFF');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

/**
 * saveSpareParts - บันทึกรายการอะไหล่ลง Sheet SpareParts
 */
function saveSpareParts(uuid, requestId, workOrderNo, sparePartsList, recordedBy) {
  try {
    const sheet = getOrCreateSparePartsSheet();
    const data = sheet.getDataRange().getValues();

    // ลบรายการเดิมของ UUID นี้ออกก่อน (ถ้ามี)
    for (let r = data.length - 1; r >= 1; r--) {
      if (data[r][0] && data[r][0].toString().trim() === uuid.toString().trim()) {
        sheet.deleteRow(r + 1);
      }
    }

    if (!sparePartsList || !Array.isArray(sparePartsList) || sparePartsList.length === 0) {
      return;
    }

    const now = new Date();
    const timestamp = Utilities.formatDate(now, 'Asia/Bangkok', 'dd/MM/yyyy HH:mm:ss');

    let itemNo = 1;
    sparePartsList.forEach(function(p) {
      const partName = (p.sparePartName || '').toString().trim();
      const partNo = (p.partNo || '').toString().trim();
      const typeModel = (p.typeModel || '').toString().trim();
      const qty = (p.qty || '').toString().trim();
      const price = (p.price || '').toString().trim();

      // บันทึกเฉพาะแถวที่มีข้อมูล
      if (partName || partNo || typeModel || qty || price) {
        sheet.appendRow([
          uuid,
          requestId,
          workOrderNo,
          itemNo,
          partName,
          partNo,
          typeModel,
          qty,
          price,
          recordedBy || '',
          timestamp
        ]);
        itemNo++;
      }
    });
  } catch(e) {
    Logger.log('Error in saveSpareParts: ' + e.message);
  }
}

/**
 * getSparePartsByUUID - ดึงรายการอะไหล่ตาม UUID
 */
function getSparePartsByUUID(uuid) {
  try {
    if (!uuid) return [];
    const sheet = getOrCreateSparePartsSheet();
    const data = sheet.getDataRange().getValues();
    if (data.length <= 1) return [];

    const parts = [];
    for (let r = 1; r < data.length; r++) {
      if (data[r][0] && data[r][0].toString().trim() === uuid.toString().trim()) {
        parts.push({
          sparePartName: data[r][4] || '',
          partNo: data[r][5] || '',
          typeModel: data[r][6] || '',
          qty: data[r][7] || '',
          price: data[r][8] || ''
        });
      }
    }
    return parts;
  } catch(e) {
    Logger.log('Error in getSparePartsByUUID: ' + e.message);
    return [];
  }
}

function formatIsoDateToMonthDayYear(dateVal) {
  if (!dateVal) {
    const now = new Date();
    return (now.getMonth() + 1) + '/' + now.getDate() + '/' + now.getFullYear();
  }
  const s = dateVal.toString().trim();
  if (s.indexOf('-') !== -1) {
    const parts = s.split('-');
    if (parts.length === 3) {
      return parseInt(parts[1], 10) + '/' + parseInt(parts[2], 10) + '/' + parts[0];
    }
  } else if (s.indexOf('/') !== -1) {
    const parts = s.split('/');
    if (parts.length === 3) {
      return parseInt(parts[1], 10) + '/' + parseInt(parts[0], 10) + '/' + parts[2];
    }
  }
  return s;
}

/**
 * syncToWoSheetOnTechnicianReport - ซิงค์ข้อมูลงานช่างไปยัง Sheet บันทึกการเปิด W/O
 */
function syncToWoSheetOnTechnicianReport(uuid, reqData, techData) {
  try {
    const dateObj = parseDateString(reqData.InformDate || reqData.informDate);
    const sheet = getOrCreateWoMonthSheet(dateObj);
    if (!sheet) return;

    const headerRow = findWoHeaderRow(sheet);
    let targetRow = findWoRowByUUID(sheet, headerRow, uuid, reqData.WorkOrderNo || reqData.workOrderNo, reqData.EquipmentCode || reqData.equipmentCode);
    if (!targetRow) {
      targetRow = findWoNextEmptyRow(sheet, headerRow);
      sheet.getRange(targetRow, 1).setNote('UUID:' + uuid);
    }

    // Col 3: Priority -> "CM" เหมือนเดิม
    sheet.getRange(targetRow, 3).setValue('CM');
    // Col 5: สถานะ W/O -> "COMPLETE"
    sheet.getRange(targetRow, 5).setValue('COMPLETE');

    // Col 10: วันที่ปิด
    const closeDateStr = techData.completeDate
      ? formatIsoDateToMonthDayYear(techData.completeDate)
      : (function() {
          const now = new Date();
          return (now.getMonth() + 1) + '/' + now.getDate() + '/' + now.getFullYear();
        })();
    sheet.getRange(targetRow, 10).setValue(closeDateStr);

    // Col 11: ช่างที่ทำคนที่ 1 (Action By 1)
    sheet.getRange(targetRow, 11).setValue(techData.actionBy1 || '');
    // Col 12: ช่างที่ทำคนที่ 2 (Action By 2)
    sheet.getRange(targetRow, 12).setValue(techData.actionBy2 || '');
    // Col 13: ช่างที่ทำคนที่ 3 (Action By 3)
    sheet.getRange(targetRow, 13).setValue(techData.actionBy3 || '');
  } catch(e) {
    Logger.log('Error in syncToWoSheetOnTechnicianReport: ' + e.message);
  }
}

/**
 * saveTechnicianReport - ช่างบันทึกผลการซ่อมบำรุงและปิดงาน (ส่งรอตรวจสอบ)
 */
function saveTechnicianReport(uuid, techData) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(15000);
  } catch(e) {
    return { success: false, message: 'ระบบกำลังมีการบันทึกข้อมูล กรุณาลองใหม่อีกครั้ง' };
  }

  try {
    if (!uuid) return { success: false, message: 'ไม่พบ UUID ของใบแจ้งซ่อม' };
    const sheet = getRequestsSheet();
    ensureRequestHeaders(sheet);
    const allData = sheet.getDataRange().getValues();
    let rowIndex = -1;

    for (let i = 1; i < allData.length; i++) {
      const rowUuid = (allData[i][0] != null) ? allData[i][0].toString().trim() : '';
      if (rowUuid === uuid) {
        rowIndex = i + 1; // 1-based
        break;
      }
    }

    if (rowIndex === -1) {
      return { success: false, message: 'ไม่พบข้อมูลใบแจ้งซ่อม' };
    }

    // ตรวจสอบและป้องกันช่างซ้ำ
    const act1 = (techData.actionBy1 || '').toString().trim();
    let act2 = (techData.actionBy2 || '').toString().trim();
    let act3 = (techData.actionBy3 || '').toString().trim();

    if (!act1) {
      return { success: false, message: 'กรุณาระบุช่างผู้รับผิดชอบหลัก (คนที่ 1)' };
    }

    if (act2 && act2 === act1) act2 = '';
    if (act3 && (act3 === act1 || act3 === act2)) act3 = '';

    // แปลงชื่อผู้ซ่อมจากรหัสพนักงานช่างคนที่ 1 เพื่อให้ตรงกันเสมอ
    const resolvedTechName = TECHNICIAN_PROFILES[act1] ||
                             ADMIN_PROFILES[act1] ||
                             SUPERVISOR_PROFILES[act1] ||
                             MANAGER_PROFILES[act1] ||
                             techData.technicianName ||
                             act1;

    const now = new Date();
    const timestamp = Utilities.formatDate(now, 'Asia/Bangkok', 'dd/MM/yyyy HH:mm:ss');
    const completeDate = techData.completeDate || Utilities.formatDate(now, 'Asia/Bangkok', 'dd/MM/yyyy');
    const completeTime = techData.completeTime ? formatTime24(techData.completeTime) : Utilities.formatDate(now, 'Asia/Bangkok', 'HH:mm');

    // Update Request row: สถานะ -> 'รอ Supervisor ตรวจสอบ'
    sheet.getRange(rowIndex, 14).setValue('รอ Supervisor ตรวจสอบ');
    sheet.getRange(rowIndex, 20).setValue(timestamp); // LastModified

    // ข้อมูลช่าง (Cols 21 - 30)
    sheet.getRange(rowIndex, 21).setValue(techData.maintenanceDetails || ''); // Col U - รายละเอียดซ่อม
    sheet.getRange(rowIndex, 22).setValue(act1);                              // Col V - ผู้ปฏิบัติงาน 1
    sheet.getRange(rowIndex, 23).setValue(act2);                              // Col W - ผู้ปฏิบัติงาน 2
    sheet.getRange(rowIndex, 24).setValue(act3);                              // Col X - ผู้ปฏิบัติงาน 3
    sheet.getRange(rowIndex, 25).setValue(techData.actualRepairTime || '');   // Col Y - เวลาที่ใช้ซ่อมจริง
    sheet.getRange(rowIndex, 26).setValue(completeDate);                      // Col Z - วันเสร็จ
    sheet.getRange(rowIndex, 27).setNumberFormat('@STRING@').setValue(completeTime); // Col AA - เวลาเสร็จ
    sheet.getRange(rowIndex, 28).setValue(resolvedTechName);                  // Col AB - ผู้ซ่อม
    sheet.getRange(rowIndex, 29).setValue(completeDate);                      // Col AC - วันที่ลงชื่อ
    sheet.getRange(rowIndex, 30).setNumberFormat('@STRING@').setValue(completeTime); // Col AD - เวลาลงชื่อ

    if (techData.estimateDate !== undefined && techData.estimateDate !== '') {
      sheet.getRange(rowIndex, 31).setValue(formatDateDMY(techData.estimateDate));     // Col AE - กำหนดวันเสร็จ
    }
    if (techData.estimateTime !== undefined && techData.estimateTime !== '') {
      sheet.getRange(rowIndex, 32).setNumberFormat('@STRING@').setValue(formatTime24(techData.estimateTime || '')); // Col AF - เวลากำหนดเสร็จ
    }

    // ล้างข้อความ ReworkReason เมื่อช่างแก้ไขและส่งใหม่ (Col 47 / AU)
    sheet.getRange(rowIndex, 47).setValue('');

    const reqId = allData[rowIndex - 1][1] || '';
    const woNo = allData[rowIndex - 1][17] || '';
    const eqCode = allData[rowIndex - 1][5] || '';
    const informDate = allData[rowIndex - 1][2] || '';

    // บันทึกอะไหล่ลง Sheet SpareParts
    saveSpareParts(uuid, reqId, woNo, techData.spareParts, act1);

    // ซิงค์ไปยัง Sheet "บันทึกการเปิด W/O"
    syncToWoSheetOnTechnicianReport(uuid, {
      InformDate: informDate,
      WorkOrderNo: woNo,
      EquipmentCode: eqCode
    }, {
      completeDate: completeDate,
      actionBy1: act1,
      actionBy2: act2,
      actionBy3: act3
    });

    clearDashboardCache();
    return {
      success: true,
      message: 'บันทึกข้อมูลการซ่อมบำรุงและส่งให้ Supervisor ตรวจสอบเรียบร้อยแล้ว',
      status: 'รอ Supervisor ตรวจสอบ'
    };
  } catch(err) {
    Logger.log('Error in saveTechnicianReport: ' + err.message);
    return { success: false, message: 'เกิดข้อผิดพลาด: ' + err.message };
  } finally {
    try { lock.releaseLock(); } catch(e) {}
  }
}

/**
 * supervisorApprove - Supervisor ยืนยันผ่านการตรวจสอบงานซ่อม (ส่งต่อให้ Manager อนุมัติ)
 */
function supervisorApprove(uuid, supervisorEmpId, notes) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(15000);
  } catch(e) {
    return { success: false, message: 'ระบบกำลังมีการบันทึกข้อมูล กรุณาลองใหม่อีกครั้ง' };
  }

  try {
    if (!uuid) return { success: false, message: 'ไม่พบ UUID ของใบแจ้งซ่อม' };
    const empId = (supervisorEmpId || '').toString().trim().toUpperCase();
    const isSup = SUPERVISOR_IDS.includes(empId);
    const isAdmin = ADMIN_IDS.includes(empId);
    if (!isSup && !isAdmin) {
      return { success: false, message: 'คุณไม่มีสิทธิ์ในการตรวจสอบงานซ่อม (เฉพาะ Supervisor หรือ Admin)' };
    }

    const supName = SUPERVISOR_PROFILES[empId] || ADMIN_PROFILES[empId] || empId;
    const sheet = getRequestsSheet();
    ensureRequestHeaders(sheet);
    const allData = sheet.getDataRange().getValues();
    let rowIndex = -1;

    for (let i = 1; i < allData.length; i++) {
      if ((allData[i][0] != null) && allData[i][0].toString().trim() === uuid) {
        rowIndex = i + 1;
        break;
      }
    }

    if (rowIndex === -1) {
      return { success: false, message: 'ไม่พบข้อมูลใบแจ้งซ่อม' };
    }

    const now = new Date();
    const timestamp = Utilities.formatDate(now, 'Asia/Bangkok', 'dd/MM/yyyy HH:mm:ss');
    const todayStr = Utilities.formatDate(now, 'Asia/Bangkok', 'dd/MM/yyyy');
    const timeStr = Utilities.formatDate(now, 'Asia/Bangkok', 'HH:mm');

    // อัพเดตสถานะ -> 'รอ Manager อนุมัติ'
    sheet.getRange(rowIndex, 14).setValue('รอ Manager อนุมัติ');
    sheet.getRange(rowIndex, 20).setValue(timestamp); // LastModified

    // ช่อง Col 33-37: ข้อมูล Supervisor (Checked By)
    sheet.getRange(rowIndex, 33).setValue(supName);
    sheet.getRange(rowIndex, 34).setValue(empId);
    sheet.getRange(rowIndex, 35).setValue(todayStr);
    sheet.getRange(rowIndex, 36).setNumberFormat('@STRING@').setValue(timeStr);
    sheet.getRange(rowIndex, 37).setValue(notes || '');

    // เคลียร์ ReworkReason (ถ้ามี)
    sheet.getRange(rowIndex, 47).setValue('');

    clearDashboardCache();
    return {
      success: true,
      message: 'ยืนยันผ่านการตรวจสอบแล้ว และส่งต่อให้ Manager อนุมัติเรียบร้อยแล้ว',
      status: 'รอ Manager อนุมัติ'
    };
  } catch(err) {
    Logger.log('Error in supervisorApprove: ' + err.message);
    return { success: false, message: 'เกิดข้อผิดพลาด: ' + err.message };
  } finally {
    try { lock.releaseLock(); } catch(e) {}
  }
}

/**
 * supervisorReject - Supervisor ส่งกลับให้ช่างแก้ไข (Rework)
 */
function supervisorReject(uuid, supervisorEmpId, reason) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(15000);
  } catch(e) {
    return { success: false, message: 'ระบบกำลังมีการบันทึกข้อมูล กรุณาลองใหม่อีกครั้ง' };
  }

  try {
    if (!uuid) return { success: false, message: 'ไม่พบ UUID ของใบแจ้งซ่อม' };
    if (!reason || !reason.trim()) return { success: false, message: 'กรุณาระบุเหตุผลที่ส่งกลับให้แก้ไข' };
    const empId = (supervisorEmpId || '').toString().trim().toUpperCase();
    const isSup = SUPERVISOR_IDS.includes(empId);
    const isAdmin = ADMIN_IDS.includes(empId);
    if (!isSup && !isAdmin) {
      return { success: false, message: 'คุณไม่มีสิทธิ์ในการส่งกลับใบงาน (เฉพาะ Supervisor หรือ Admin)' };
    }

    const supName = SUPERVISOR_PROFILES[empId] || ADMIN_PROFILES[empId] || empId;
    const sheet = getRequestsSheet();
    ensureRequestHeaders(sheet);
    const allData = sheet.getDataRange().getValues();
    let rowIndex = -1;

    for (let i = 1; i < allData.length; i++) {
      if ((allData[i][0] != null) && allData[i][0].toString().trim() === uuid) {
        rowIndex = i + 1;
        break;
      }
    }

    if (rowIndex === -1) {
      return { success: false, message: 'ไม่พบข้อมูลใบแจ้งซ่อม' };
    }

    const now = new Date();
    const timestamp = Utilities.formatDate(now, 'Asia/Bangkok', 'dd/MM/yyyy HH:mm:ss');

    // ส่งกลับไปสถานะ 'กำลังซ่อม'
    sheet.getRange(rowIndex, 14).setValue('กำลังซ่อม');
    sheet.getRange(rowIndex, 20).setValue(timestamp); // LastModified
    sheet.getRange(rowIndex, 47).setValue('Supervisor (' + supName + '): ' + reason.trim());

    // ซิงค์กลับไปยัง Sheet W/O ให้สถานะกลับเป็น OPEN ด้วย
    const informDate = allData[rowIndex - 1][2] || '';
    const woNo = allData[rowIndex - 1][17] || '';
    const eqCode = allData[rowIndex - 1][5] || '';
    rollbackWoSheetToOpen(uuid, {
      InformDate: informDate,
      WorkOrderNo: woNo,
      EquipmentCode: eqCode
    });

    clearDashboardCache();
    return {
      success: true,
      message: 'ส่งกลับใบงานให้ช่างดำเนินการแก้ไขเรียบร้อยแล้ว',
      status: 'กำลังซ่อม'
    };
  } catch(err) {
    Logger.log('Error in supervisorReject: ' + err.message);
    return { success: false, message: 'เกิดข้อผิดพลาด: ' + err.message };
  } finally {
    try { lock.releaseLock(); } catch(e) {}
  }
}

/**
 * rollbackWoSheetToOpen - คืนสถานะใน Sheet บันทึกการเปิด W/O กลับเป็น OPEN พร้อมล้างวันที่เสร็จและช่าง
 */
function rollbackWoSheetToOpen(uuid, reqData) {
  try {
    const dateObj = parseDateString(reqData.InformDate || reqData.informDate);
    const sheet = getOrCreateWoMonthSheet(dateObj);
    if (!sheet) return;

    const headerRow = findWoHeaderRow(sheet);
    let targetRow = findWoRowByUUID(sheet, headerRow, uuid, reqData.WorkOrderNo || reqData.workOrderNo, reqData.EquipmentCode || reqData.equipmentCode);
    if (!targetRow) return;

    // Col 5: สถานะ W/O -> "OPEN"
    sheet.getRange(targetRow, 5).setValue('OPEN');
    // Col 10: วันที่ปิด -> ล้างออก
    sheet.getRange(targetRow, 10).setValue('');
    // Col 11: ช่าง Action By 1 -> ล้างออก
    sheet.getRange(targetRow, 11).setValue('');
    // Col 12: ช่าง Action By 2 -> ล้างออก
    sheet.getRange(targetRow, 12).setValue('');
    // Col 13: ช่าง Action By 3 -> ล้างออก
    sheet.getRange(targetRow, 13).setValue('');
  } catch(e) {
    Logger.log('Error in rollbackWoSheetToOpen: ' + e.message);
  }
}

/**
 * resetTechnicianReport - ช่าง หรือ Admin รีเซ็ตใบงานที่กรอกผิดกลับเป็น "กำลังซ่อม"
 */
function resetTechnicianReport(uuid, userEmpId, reason) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(15000);
  } catch(e) {
    return { success: false, message: 'ระบบกำลังมีการบันทึกข้อมูล กรุณาลองใหม่อีกครั้ง' };
  }

  try {
    if (!uuid) return { success: false, message: 'ไม่พบ UUID ของใบแจ้งซ่อม' };
    if (!reason || !reason.trim()) return { success: false, message: 'กรุณาระบุเหตุผลที่ต้องการรีเซ็ตใบงาน' };

    const empId = (userEmpId || '').toString().trim().toUpperCase();
    const isTech = TECHNICIAN_IDS.includes(empId);
    const isAdmin = ADMIN_IDS.includes(empId);

    if (!isTech && !isAdmin) {
      return { success: false, message: 'คุณไม่มีสิทธิ์ในการรีเซ็ตใบงาน (เฉพาะช่างหรือ Admin เท่านั้น)' };
    }

    const resetterName = TECHNICIAN_PROFILES[empId] || ADMIN_PROFILES[empId] || empId;
    const sheet = getRequestsSheet();
    ensureRequestHeaders(sheet);
    const allData = sheet.getDataRange().getValues();
    let rowIndex = -1;

    for (let i = 1; i < allData.length; i++) {
      if ((allData[i][0] != null) && allData[i][0].toString().trim() === uuid) {
        rowIndex = i + 1;
        break;
      }
    }

    if (rowIndex === -1) {
      return { success: false, message: 'ไม่พบข้อมูลใบแจ้งซ่อม' };
    }

    const currentStatus = allData[rowIndex - 1][13] || '';
    if (currentStatus !== 'รอ Supervisor ตรวจสอบ') {
      return { success: false, message: 'สามารถรีเซ็ตได้เฉพาะใบงานที่อยู่ในสถานะ "รอ Supervisor ตรวจสอบ" เท่านั้น (สถานะปัจจุบัน: ' + currentStatus + ')' };
    }

    const now = new Date();
    const timestamp = Utilities.formatDate(now, 'Asia/Bangkok', 'dd/MM/yyyy HH:mm:ss');

    // 1. ปรับสถานะใน Requests กลับเป็น 'กำลังซ่อม'
    sheet.getRange(rowIndex, 14).setValue('กำลังซ่อม');
    sheet.getRange(rowIndex, 20).setValue(timestamp); // LastModified

    // 2. ล้างข้อมูลผลการซ่อมบำรุงของช่าง (Cols 21 - 32)
    sheet.getRange(rowIndex, 21).setValue(''); // MaintenanceDetails
    sheet.getRange(rowIndex, 22).setValue(''); // ActionBy1
    sheet.getRange(rowIndex, 23).setValue(''); // ActionBy2
    sheet.getRange(rowIndex, 24).setValue(''); // ActionBy3
    sheet.getRange(rowIndex, 25).setValue(''); // ActualRepairTime
    sheet.getRange(rowIndex, 26).setValue(''); // CompleteDate
    sheet.getRange(rowIndex, 27).setValue(''); // CompleteTime
    sheet.getRange(rowIndex, 28).setValue(''); // TechnicianName
    sheet.getRange(rowIndex, 29).setValue(''); // TechSignDate
    sheet.getRange(rowIndex, 30).setValue(''); // TechSignTime
    sheet.getRange(rowIndex, 31).setValue(''); // EstimateDate
    sheet.getRange(rowIndex, 32).setValue(''); // EstimateTime

    // 3. บันทึกประวัติการรีเซ็ตลง Col 47 (ReworkReason)
    const resetNote = 'รีเซ็ตโดย ' + resetterName + ' (' + empId + ') เมื่อ ' + timestamp + ' เหตุผล: ' + reason.trim();
    sheet.getRange(rowIndex, 47).setValue(resetNote);

    // 4. ลบรายการอะไหล่เดิม
    saveSpareParts(uuid, '', '', [], '');

    const reqId = allData[rowIndex - 1][1] || '';
    const woNo = allData[rowIndex - 1][17] || '';
    const eqCode = allData[rowIndex - 1][5] || '';
    const eqName = allData[rowIndex - 1][4] || '';
    const damage = allData[rowIndex - 1][8] || '';
    const informDate = allData[rowIndex - 1][2] || '';

    // 5. ปรับสถานะใน Sheet W/O กลับเป็น OPEN และล้างวันที่เสร็จ + รายชื่อช่าง
    rollbackWoSheetToOpen(uuid, {
      InformDate: informDate,
      WorkOrderNo: woNo,
      EquipmentCode: eqCode
    });

    // 6. ส่งแจ้งเตือน LINE
    try {
      sendLineResetNotification({
        requestId: reqId,
        workOrderNo: woNo,
        equipmentCode: eqCode,
        equipmentName: eqName,
        damageAppearance: damage,
        resetByName: resetterName + ' (' + empId + ')',
        resetReason: reason.trim()
      });
    } catch(lineErr) {
      Logger.log('Line notification error on reset: ' + lineErr.message);
    }

    clearDashboardCache();
    return {
      success: true,
      message: 'รีเซ็ตใบงาน ' + (woNo || eqCode) + ' กลับเป็นสถานะ "กำลังซ่อม" เรียบร้อยแล้ว',
      status: 'กำลังซ่อม'
    };
  } catch(err) {
    Logger.log('Error in resetTechnicianReport: ' + err.message);
    return { success: false, message: 'เกิดข้อผิดพลาด: ' + err.message };
  } finally {
    try { lock.releaseLock(); } catch(e) {}
  }
}


/**
 * managerApprove - Manager อนุมัติงานซ่อม (รอผู้รับมอบอุปกรณ์ลงนาม)
 */
function managerApprove(uuid, managerEmpId, notes) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(15000);
  } catch(e) {
    return { success: false, message: 'ระบบกำลังมีการบันทึกข้อมูล กรุณาลองใหม่อีกครั้ง' };
  }

  try {
    if (!uuid) return { success: false, message: 'ไม่พบ UUID ของใบแจ้งซ่อม' };
    const empId = (managerEmpId || '').toString().trim().toUpperCase();
    const isMgr = MANAGER_IDS.includes(empId);
    const isAdmin = ADMIN_IDS.includes(empId);
    if (!isMgr && !isAdmin) {
      return { success: false, message: 'คุณไม่มีสิทธิ์ในการอนุมัติงานซ่อม (เฉพาะ Manager หรือ Admin)' };
    }

    const mgrName = MANAGER_PROFILES[empId] || ADMIN_PROFILES[empId] || empId;
    const sheet = getRequestsSheet();
    ensureRequestHeaders(sheet);
    const allData = sheet.getDataRange().getValues();
    let rowIndex = -1;

    for (let i = 1; i < allData.length; i++) {
      if ((allData[i][0] != null) && allData[i][0].toString().trim() === uuid) {
        rowIndex = i + 1;
        break;
      }
    }

    if (rowIndex === -1) {
      return { success: false, message: 'ไม่พบข้อมูลใบแจ้งซ่อม' };
    }

    const now = new Date();
    const timestamp = Utilities.formatDate(now, 'Asia/Bangkok', 'dd/MM/yyyy HH:mm:ss');
    const todayStr = Utilities.formatDate(now, 'Asia/Bangkok', 'dd/MM/yyyy');
    const timeStr = Utilities.formatDate(now, 'Asia/Bangkok', 'HH:mm');

    // อัพเดตสถานะ -> 'รอผู้รับอุปกรณ์ลงนาม'
    sheet.getRange(rowIndex, 14).setValue('รอผู้รับอุปกรณ์ลงนาม');
    sheet.getRange(rowIndex, 20).setValue(timestamp); // LastModified

    // ช่อง Col 38-42: ข้อมูล Manager (Approved By)
    sheet.getRange(rowIndex, 38).setValue(mgrName);
    sheet.getRange(rowIndex, 39).setValue(empId);
    sheet.getRange(rowIndex, 40).setValue(todayStr);
    sheet.getRange(rowIndex, 41).setNumberFormat('@STRING@').setValue(timeStr);
    sheet.getRange(rowIndex, 42).setValue(notes || '');

    // เคลียร์ ReworkReason (ถ้ามี)
    sheet.getRange(rowIndex, 47).setValue('');

    clearDashboardCache();
    return {
      success: true,
      message: 'อนุมัติงานซ่อมเรียบร้อยแล้ว สถานะเปลี่ยนเป็น รอผู้รับอุปกรณ์ลงนาม',
      status: 'รอผู้รับอุปกรณ์ลงนาม'
    };
  } catch(err) {
    Logger.log('Error in managerApprove: ' + err.message);
    return { success: false, message: 'เกิดข้อผิดพลาด: ' + err.message };
  } finally {
    try { lock.releaseLock(); } catch(e) {}
  }
}

/**
 * managerReject - Manager ส่งกลับให้ช่างแก้ไข (Rework)
 */
function managerReject(uuid, managerEmpId, reason) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(15000);
  } catch(e) {
    return { success: false, message: 'ระบบกำลังมีการบันทึกข้อมูล กรุณาลองใหม่อีกครั้ง' };
  }

  try {
    if (!uuid) return { success: false, message: 'ไม่พบ UUID ของใบแจ้งซ่อม' };
    if (!reason || !reason.trim()) return { success: false, message: 'กรุณาระบุเหตุผลที่ส่งกลับให้แก้ไข' };
    const empId = (managerEmpId || '').toString().trim().toUpperCase();
    const isMgr = MANAGER_IDS.includes(empId);
    const isAdmin = ADMIN_IDS.includes(empId);
    if (!isMgr && !isAdmin) {
      return { success: false, message: 'คุณไม่มีสิทธิ์ในการส่งกลับใบงาน (เฉพาะ Manager หรือ Admin)' };
    }

    const mgrName = MANAGER_PROFILES[empId] || ADMIN_PROFILES[empId] || empId;
    const sheet = getRequestsSheet();
    ensureRequestHeaders(sheet);
    const allData = sheet.getDataRange().getValues();
    let rowIndex = -1;

    for (let i = 1; i < allData.length; i++) {
      if ((allData[i][0] != null) && allData[i][0].toString().trim() === uuid) {
        rowIndex = i + 1;
        break;
      }
    }

    if (rowIndex === -1) {
      return { success: false, message: 'ไม่พบข้อมูลใบแจ้งซ่อม' };
    }

    const now = new Date();
    const timestamp = Utilities.formatDate(now, 'Asia/Bangkok', 'dd/MM/yyyy HH:mm:ss');

    sheet.getRange(rowIndex, 14).setValue('กำลังซ่อม');
    sheet.getRange(rowIndex, 20).setValue(timestamp);
    sheet.getRange(rowIndex, 47).setValue('Manager (' + mgrName + '): ' + reason.trim());

    // ซิงค์กลับไปยัง Sheet W/O ให้สถานะกลับเป็น OPEN ด้วย
    const informDate = allData[rowIndex - 1][2] || '';
    const woNo = allData[rowIndex - 1][17] || '';
    const eqCode = allData[rowIndex - 1][5] || '';
    rollbackWoSheetToOpen(uuid, {
      InformDate: informDate,
      WorkOrderNo: woNo,
      EquipmentCode: eqCode
    });

    clearDashboardCache();
    return {
      success: true,
      message: 'ส่งกลับใบงานให้ช่างดำเนินการแก้ไขเรียบร้อยแล้ว',
      status: 'กำลังซ่อม'
    };
  } catch(err) {
    Logger.log('Error in managerReject: ' + err.message);
    return { success: false, message: 'เกิดข้อผิดพลาด: ' + err.message };
  } finally {
    try { lock.releaseLock(); } catch(e) {}
  }
}

/**
 * requesterAcceptEquipment - ผู้แจ้งซ่อมลงนามรับมอบอุปกรณ์ (Return to Service)
 */
function requesterAcceptEquipment(uuid, userEmpId, optUserName) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(15000);
  } catch(e) {
    return { success: false, message: 'ระบบกำลังมีการบันทึกข้อมูล กรุณาลองใหม่อีกครั้ง' };
  }

  try {
    if (!uuid) return { success: false, message: 'ไม่พบ UUID ของใบแจ้งซ่อม' };
    const empId = (userEmpId || '').toString().trim().toUpperCase();
    const isAdmin = ADMIN_IDS.includes(empId);

    const sheet = getRequestsSheet();
    ensureRequestHeaders(sheet);
    const allData = sheet.getDataRange().getValues();
    let rowIndex = -1;

    for (let i = 1; i < allData.length; i++) {
      if ((allData[i][0] != null) && allData[i][0].toString().trim() === uuid) {
        rowIndex = i + 1;
        break;
      }
    }

    if (rowIndex === -1) {
      return { success: false, message: 'ไม่พบข้อมูลใบแจ้งซ่อม' };
    }

    const rowData = allData[rowIndex - 1];
    const currentStatus = (rowData[13] || '').toString().trim();
    if (currentStatus !== 'รอผู้รับอุปกรณ์ลงนาม' && !isAdmin) {
      return { success: false, message: 'ใบแจ้งซ่อมนี้ไม่ได้อยู่ในสถานะ รอผู้รับอุปกรณ์ลงนาม' };
    }

    // กำหนดชื่อผู้ลงนามรับมอบ (อนุญาตให้ผู้ใช้ท่านอื่นมารับมอบแทนได้)
    let acceptorName = (optUserName || '').toString().trim();
    if (!acceptorName || acceptorName === empId) {
      acceptorName = ADMIN_PROFILES[empId] ||
                     SUPERVISOR_PROFILES[empId] ||
                     MANAGER_PROFILES[empId] ||
                     TECHNICIAN_PROFILES[empId] || '';
      if (!acceptorName) {
        try {
          const uSheet = getUsersSheet();
          const uData = uSheet ? uSheet.getDataRange().getValues() : [];
          for (let u = 1; u < uData.length; u++) {
            if (uData[u][0] && uData[u][0].toString().trim().toUpperCase() === empId) {
              acceptorName = (uData[u][1] || '').toString().trim();
              break;
            }
          }
        } catch(eU) {}
      }
      if (!acceptorName) acceptorName = empId;
    }
    const now = new Date();
    const timestamp = Utilities.formatDate(now, 'Asia/Bangkok', 'dd/MM/yyyy HH:mm:ss');
    const todayStr = Utilities.formatDate(now, 'Asia/Bangkok', 'dd/MM/yyyy');
    const timeStr = Utilities.formatDate(now, 'Asia/Bangkok', 'HH:mm');

    // อัพเดตสถานะ -> 'เสร็จสิ้น (Return to Service)'
    sheet.getRange(rowIndex, 14).setValue('เสร็จสิ้น (Return to Service)');
    sheet.getRange(rowIndex, 20).setValue(timestamp); // LastModified

    // ช่อง Col 43-46: ข้อมูลผู้รับมอบ (Admited By)
    sheet.getRange(rowIndex, 43).setValue(acceptorName);
    sheet.getRange(rowIndex, 44).setValue(empId);
    sheet.getRange(rowIndex, 45).setValue(todayStr);
    sheet.getRange(rowIndex, 46).setNumberFormat('@STRING@').setValue(timeStr);

    // ปิดสถานะใน Sheet "บันทึกการเปิด W/O"
    try {
      const informDate = rowData[2];
      const woNo = rowData[17];
      const eqCode = rowData[5];
      const dateObj = parseDateString(informDate);
      const woSheet = getOrCreateWoMonthSheet(dateObj);
      if (woSheet) {
        const headerRow = findWoHeaderRow(woSheet);
        let targetRow = findWoRowByUUID(woSheet, headerRow, uuid, woNo, eqCode);
        if (targetRow) {
          woSheet.getRange(targetRow, 5).setValue('CLOSED');
          const closeDateStr = (now.getMonth() + 1) + '/' + now.getDate() + '/' + now.getFullYear();
          woSheet.getRange(targetRow, 10).setValue(closeDateStr);
        }
      }
    } catch(eWo) {
      Logger.log('Error closing WO sheet: ' + eWo.message);
    }

    // บันทึกสถานะ W/O Sheet ลงใน Requests sheet ด้วย (Cols 48, 49)
    sheet.getRange(rowIndex, 48).setValue('CLOSED');
    sheet.getRange(rowIndex, 49).setValue(todayStr);

    clearDashboardCache();
    return {
      success: true,
      message: 'ลงนามรับมอบอุปกรณ์เรียบร้อยแล้ว สถานะเปลี่ยนเป็น เสร็จสิ้น (Return to Service)',
      status: 'เสร็จสิ้น (Return to Service)',
      woSheetStatus: 'CLOSED'
    };
  } catch(err) {
    Logger.log('Error in requesterAcceptEquipment: ' + err.message);
    return { success: false, message: 'เกิดข้อผิดพลาด: ' + err.message };
  } finally {
    try { lock.releaseLock(); } catch(e) {}
  }
}

/**
 * adminCloseWorkOrder - แอดมินกดปิด W/O ใน Sheet บันทึกการเปิด W/O โดยตรง
 */
function adminCloseWorkOrder(uuid, adminEmpId) {
  try {
    const empId = (adminEmpId || '').toString().trim().toUpperCase();
    if (!ADMIN_IDS.includes(empId)) {
      return { success: false, message: 'เฉพาะ Admin เท่านั้นที่สามารถปิด W/O ใน Sheet ได้' };
    }
    const req = getRequestByUUID(uuid);
    if (!req) return { success: false, message: 'ไม่พบใบแจ้งซ่อม' };

    const dateObj = parseDateString(req.InformDate);
    const sheet = getOrCreateWoMonthSheet(dateObj);
    if (!sheet) return { success: false, message: 'ไม่พบ Sheet บันทึกการเปิด W/O' };

    const headerRow = findWoHeaderRow(sheet);
    let targetRow = findWoRowByUUID(sheet, headerRow, uuid, req.WorkOrderNo, req.EquipmentCode);
    if (!targetRow) return { success: false, message: 'ไม่พบรายการใน Sheet บันทึกการเปิด W/O' };

    const now = new Date();
    const closeDateStr = (now.getMonth() + 1) + '/' + now.getDate() + '/' + now.getFullYear();
    const todayStr = Utilities.formatDate(now, 'Asia/Bangkok', 'dd/MM/yyyy');
    sheet.getRange(targetRow, 5).setValue('CLOSED');
    sheet.getRange(targetRow, 10).setValue(closeDateStr);

    // บันทึกสถานะ WoSheetStatus ลงใน Requests sheet (Cols 48, 49)
    const reqSheet = getRequestsSheet();
    ensureRequestHeaders(reqSheet);
    const allData = reqSheet.getDataRange().getValues();
    for (let i = 1; i < allData.length; i++) {
      if ((allData[i][0] != null) && allData[i][0].toString().trim() === uuid) {
        reqSheet.getRange(i + 1, 48).setValue('CLOSED');
        reqSheet.getRange(i + 1, 49).setValue(todayStr);
        break;
      }
    }

    clearDashboardCache();
    return {
      success: true,
      message: 'ปิด W/O ใน Sheet บันทึกการเปิด W/O เรียบร้อยแล้ว',
      woSheetStatus: 'CLOSED',
      woClosedDate: todayStr
    };
  } catch(e) {
    return { success: false, message: 'เกิดข้อผิดพลาด: ' + e.message };
  }
}

// ============================================================
// === DEMO & MOCKUP DATA MANAGEMENT (ลบย้อนหลังได้ 100%) ===
// ============================================================

/**
 * generateMockupData - สร้างชุดข้อมูลจำลองครบทั้ง 7 เงื่อนไข พร้อมอะไหล่ และทดสอบแจ้งเตือน LINE
 * @param {boolean} sendLine - ต้องการส่ง Flex Notification เข้ากลุ่ม LINE หรือไม่
 */
function generateMockupData(sendLine, empId) {
  if (empId && !ADMIN_IDS.includes(empId.toString().trim().toUpperCase())) {
    return { success: false, message: 'สิทธิ์ไม่ถูกต้อง: ฟังก์ชันนี้สงวนสิทธิ์เฉพาะผู้ดูแลระบบ (Admin) เท่านั้น' };
  }

  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(20000);
  } catch(e) {
    return { success: false, message: 'ระบบกำลังทำงาน กรุณาลองใหม่อีกครั้ง' };
  }

  try {
    // 1. ล้างข้อมูล Mockup เดิมออกก่อนเพื่อไม่ให้ซ้ำซ้อน
    clearMockupDataInternal();

    const sheet = getRequestsSheet();
    ensureRequestHeaders(sheet);

    const now = new Date();
    const todayStr = Utilities.formatDate(now, 'Asia/Bangkok', 'dd/MM/yyyy');
    const timeStr = Utilities.formatDate(now, 'Asia/Bangkok', 'HH:mm');
    const timestamp = Utilities.formatDate(now, 'Asia/Bangkok', 'dd/MM/yyyy HH:mm:ss');
    const tomorrow = new Date(now.getTime() + 86400000);
    const tomorrowStr = Utilities.formatDate(tomorrow, 'Asia/Bangkok', 'dd/MM/yyyy');
    const yesterday = new Date(now.getTime() - 86400000);
    const yesterdayStr = Utilities.formatDate(yesterday, 'Asia/Bangkok', 'dd/MM/yyyy');

    // รายการ Mockup ทั้ง 7 เงื่อนไข
    const mockItems = [
      // 1. รอดำเนินการ
      {
        UUID: 'MOCK-001',
        RequestID: 'MCK-001',
        InformDate: todayStr,
        InformTime: '08:30',
        EquipmentName: 'CONVEYOR BELT (รถสายพานลำเลียงสัมภาระ)',
        EquipmentCode: 'TLM-CB-015',
        HrKm: '3,450 Hr',
        DueDate: tomorrowStr,
        DamageAppearance: 'สายพานลำเลียงไม่หมุน มอเตอร์ขับสายพานมีเสียงดังผิดปกติ',
        RequesterName: 'Mr. Nuttasit Tippayanggoon',
        RequesterID: 'TL206992',
        ApproverName: 'Mr. Chaiwat Panseethong',
        ApproverTel: '081-234-5678',
        Status: 'รอดำเนินการ',
        Timestamp: timestamp,
        LastModified: timestamp
      },
      // 2. กำลังซ่อม
      {
        UUID: 'MOCK-002',
        RequestID: 'MCK-002',
        InformDate: yesterdayStr,
        InformTime: '09:15',
        EquipmentName: 'BAGGAGE TOWING TRACTOR (รถลากจูงสัมภาระ)',
        EquipmentCode: 'TLM-TR-005',
        HrKm: '12,800 Hr',
        DueDate: todayStr,
        DamageAppearance: 'ระบบไฮดรอลิกพวงมาลัยรั่วซึม เลี้ยวหนักผิดปกติ',
        RequesterName: 'Mr. Supanun Raksasuk',
        RequesterID: 'TL120015',
        ApproverName: 'Mr. Non Vismitananda',
        ApproverTel: '089-876-5432',
        Status: 'กำลังซ่อม',
        ReceivedDate: todayStr,
        ReceivedTime: '08:00',
        ReceivedBy: 'TL184518 Mr. Attapong Romyen',
        WorkOrderNo: 'WO-69/09-001',
        Timestamp: timestamp,
        LastModified: timestamp
      },
      // 3. รอ Supervisor ตรวจสอบ (ช่างซ่อมเสร็จ + เบิกอะไหล่)
      {
        UUID: 'MOCK-003',
        RequestID: 'MCK-003',
        InformDate: yesterdayStr,
        InformTime: '10:00',
        EquipmentName: 'Passenger Step (รถบันไดผู้โดยสาร)',
        EquipmentCode: 'TLM-PS-008',
        HrKm: '5,210 Hr',
        DueDate: todayStr,
        DamageAppearance: 'บันไดปรับระดับไม่ขึ้นลง กระบอกไฮดรอลิกตัวยกติดขัด',
        RequesterName: 'Mr. Chaiyaporn Songprom',
        RequesterID: 'TL173663',
        ApproverName: 'Mr. Chaiwat Panseethong',
        ApproverTel: '081-234-5678',
        Status: 'รอ Supervisor ตรวจสอบ',
        ReceivedDate: yesterdayStr,
        ReceivedTime: '10:30',
        ReceivedBy: 'TL173663',
        WorkOrderNo: 'WO-69/09-002',
        MaintenanceDetails: 'เปลี่ยนชุดซีลกระบอกไฮดรอลิกยกบันได ไล่ฟองอากาศในระบบ และเติมน้ำมันไฮดรอลิก ISO 46 ทดสอบยกขึ้น-ลง 5 รอบ ทำงานปกติ',
        ActionBy1: 'TL173663 Mr. Chaiyaporn Songprom',
        ActionBy2: 'TL184711 Mr. Sittichai Sirimart',
        ActualRepairTime: '3 ชม. 30 นาที',
        CompleteDate: todayStr,
        CompleteTime: '11:45',
        TechnicianName: 'Mr. Chaiyaporn Songprom',
        TechnicianDate: todayStr,
        TechnicianTime: '11:45',
        EstimateDate: tomorrowStr,
        EstimateTime: '12:00',
        Timestamp: timestamp,
        LastModified: timestamp,
        spareParts: [
          { sparePartName: 'ชุดซีลไฮดรอลิกยกบันได (Hydraulic Seal Kit)', partNo: 'HYD-SK-08', typeModel: 'Passenger Step', qty: '1', price: '1850' },
          { sparePartName: 'น้ำมันไฮดรอลิก ISO 46 (Hydraulic Oil)', partNo: 'OIL-HYD-46', typeModel: '4L', qty: '4', price: '320' }
        ]
      },
      // 4. รอ Manager อนุมัติ (Supervisor อนุมัติแล้ว + แอดมินปิด W/O ได้)
      {
        UUID: 'MOCK-004',
        RequestID: 'MCK-004',
        InformDate: yesterdayStr,
        InformTime: '13:00',
        EquipmentName: 'Pushback Tractor (รถดันเครื่องบิน)',
        EquipmentCode: 'TLM-PB-005',
        HrKm: '8,950 Hr',
        DueDate: todayStr,
        DamageAppearance: 'เครื่องยนต์สะดุดขณะดันเครื่องบิน กำลังตก แรงดันคอมมอนเรลต่ำ',
        RequesterName: 'Mr. Nuttasit Tippayanggoon',
        RequesterID: 'TL206992',
        ApproverName: 'Mr. Cherdchu Chaimuan',
        ApproverTel: '081-345-6789',
        Status: 'รอ Manager อนุมัติ',
        ReceivedDate: yesterdayStr,
        ReceivedTime: '13:30',
        ReceivedBy: 'TL184717',
        WorkOrderNo: 'WO-69/09-003',
        MaintenanceDetails: 'ตรวจเช็คแรงดันปั๊มเชื้อเพลิง พบกรองดักน้ำและกรองโซล่าตัน ทำการเปลี่ยนไส้กรองโซล่าลูกหลักและลูกดักน้ำ ล้างถังพัก และทดสอบรอบเดินเบา-เร่งโหลดปกติ',
        ActionBy1: 'TL184717 Mr. Teerapong Promsorn',
        ActionBy2: 'TL195537 Mr. Worawut Kaewyoo',
        ActualRepairTime: '4 ชม. 00 นาที',
        CompleteDate: todayStr,
        CompleteTime: '10:00',
        TechnicianName: 'Mr. Teerapong Promsorn',
        TechnicianDate: todayStr,
        TechnicianTime: '10:00',
        EstimateDate: todayStr,
        EstimateTime: '16:00',
        SupervisorName: 'Mr. Chaiwat Panseethong',
        SupervisorId: 'TL130201',
        SupervisorDate: todayStr,
        SupervisorTime: '10:30',
        SupervisorNotes: 'ตรวจสอบแล้ว ช่างทดสอบแรงดันน้ำมันเชื้อเพลิงตามสเปก อะไหล่ถูกต้อง สมบูรณ์',
        Timestamp: timestamp,
        LastModified: timestamp,
        spareParts: [
          { sparePartName: 'ไส้กรองน้ำมันเชื้อเพลิง (Fuel Filter)', partNo: 'FF-CAT-320', typeModel: 'CAT Engine', qty: '1', price: '950' },
          { sparePartName: 'กรองดักน้ำโซล่า (Water Separator)', partNo: 'WS-5502', typeModel: 'Universal', qty: '1', price: '720' }
        ]
      },
      // 5. รอผู้รับอุปกรณ์ลงนาม (Manager อนุมัติแล้ว + คนอื่นรับแทนได้)
      {
        UUID: 'MOCK-005',
        RequestID: 'MCK-005',
        InformDate: yesterdayStr,
        InformTime: '14:20',
        EquipmentName: 'Luggage Van (รถกระบะบรรทุกสัมภาระ)',
        EquipmentCode: 'TLM-LV-002',
        HrKm: '45,200 Km',
        DueDate: todayStr,
        DamageAppearance: 'ไฟหน้ารถด้านขวาไม่ติด และไฟเลี้ยวหลังซ้ายกะพริบเร็วผิดปกติ',
        RequesterName: 'Mr. Supanun Raksasuk',
        RequesterID: 'TL120015',
        ApproverName: 'Mr. Paitoon Mongkolsutaporn',
        ApproverTel: '085-678-9012',
        Status: 'รอผู้รับอุปกรณ์ลงนาม',
        ReceivedDate: yesterdayStr,
        ReceivedTime: '15:00',
        ReceivedBy: 'TL237227',
        WorkOrderNo: 'WO-69/09-004',
        MaintenanceDetails: 'เปลี่ยนหลอดไฟหน้า H4 ด้านขวา และเปลี่ยนรีเลย์ไฟเลี้ยวใหม่ ทดสอบระบบไฟส่องสว่างและสัญญาณไฟทั้งหมดทำงานสมบูรณ์',
        ActionBy1: 'TL237227 Mr. Watcharapong Singsathit',
        ActualRepairTime: '1 ชม. 15 นาที',
        CompleteDate: todayStr,
        CompleteTime: '09:30',
        TechnicianName: 'Mr. Watcharapong Singsathit',
        TechnicianDate: todayStr,
        TechnicianTime: '09:30',
        EstimateDate: todayStr,
        EstimateTime: '14:00',
        SupervisorName: 'Mr. Cherdchu Chaimuan',
        SupervisorId: 'TL140729',
        SupervisorDate: todayStr,
        SupervisorTime: '10:00',
        SupervisorNotes: 'ตรวจสอบระบบไฟส่องสว่างเรียบร้อย ปลอดภัยตามมาตรฐาน',
        ManagerName: 'Mr. Non Vismitananda',
        ManagerId: 'TL130056',
        ManagerDate: todayStr,
        ManagerTime: '11:00',
        ManagerNotes: 'อนุมัติส่งมอบอุปกรณ์กลับสู่การใช้งาน',
        Timestamp: timestamp,
        LastModified: timestamp,
        spareParts: [
          { sparePartName: 'หลอดไฟหน้า H4 12V 60/55W', partNo: 'BULB-H4-12V', typeModel: 'Halogen', qty: '1', price: '150' },
          { sparePartName: 'รีเลย์ไฟเลี้ยว 12V 3 ขา', partNo: 'RELAY-FL-12V', typeModel: '3-Pin', qty: '1', price: '220' }
        ]
      },
      // 6. เสร็จสิ้น (Return to Service - RTS รับมอบและปิด W/O เรียบร้อย)
      {
        UUID: 'MOCK-006',
        RequestID: 'MCK-006',
        InformDate: yesterdayStr,
        InformTime: '08:00',
        EquipmentName: 'Forklift (รถยก)',
        EquipmentCode: 'TLM-FL-003',
        HrKm: '6,120 Hr',
        DueDate: yesterdayStr,
        DamageAppearance: 'โซ่ยกเสาหลวม มีระยะฟรีมากเกินกำหนด',
        RequesterName: 'Mr. Nuttasit Tippayanggoon',
        RequesterID: 'TL206992',
        ApproverName: 'Mr. Non Vismitananda',
        ApproverTel: '089-876-5432',
        Status: 'เสร็จสิ้น (Return to Service)',
        ReceivedDate: yesterdayStr,
        ReceivedTime: '08:30',
        ReceivedBy: 'TL247471',
        WorkOrderNo: 'WO-69/09-005',
        MaintenanceDetails: 'ปรับตั้งความตึงโซ่ยกคู่หน้าตามคู่มือ และทาจารบีหล่อลื่นรางเสายก ทดสอบยกโหลดน้ำหนัก 2 ตัน ยกราบรื่นปลอดภัย',
        ActionBy1: 'TL247471 Mr. Theeraphon Ketphukhiao',
        ActualRepairTime: '2 ชม. 00 นาที',
        CompleteDate: yesterdayStr,
        CompleteTime: '11:00',
        TechnicianName: 'Mr. Theeraphon Ketphukhiao',
        TechnicianDate: yesterdayStr,
        TechnicianTime: '11:00',
        EstimateDate: yesterdayStr,
        EstimateTime: '13:00',
        SupervisorName: 'Mr. Paitoon Mongkolsutaporn',
        SupervisorId: 'TL237209',
        SupervisorDate: yesterdayStr,
        SupervisorTime: '11:30',
        SupervisorNotes: 'ตรวจสอบแล้ว ความตึงโซ่และระยะเสายกได้มาตรฐาน ปลอดภัย',
        ManagerName: 'Mr. Non Vismitananda',
        ManagerId: 'TL130056',
        ManagerDate: yesterdayStr,
        ManagerTime: '12:00',
        ManagerNotes: 'อนุมัติส่งมอบอุปกรณ์',
        AcceptedByName: 'Mr. Chaiyaporn Songprom',
        AcceptedById: 'TL173663',
        AcceptedDate: yesterdayStr,
        AcceptedTime: '13:15',
        WoSheetStatus: 'CLOSED',
        WoClosedDate: yesterdayStr,
        Timestamp: timestamp,
        LastModified: timestamp
      },
      // 7. งานถูกส่งกลับแก้ไข (Rework จาก Supervisor)
      {
        UUID: 'MOCK-007',
        RequestID: 'MCK-007',
        InformDate: todayStr,
        InformTime: '07:45',
        EquipmentName: 'Air Conditioning Unit (รถแอร์ภาคพื้น)',
        EquipmentCode: 'TLM-AC-001',
        HrKm: '7,800 Hr',
        DueDate: todayStr,
        DamageAppearance: 'แอร์ไม่เย็น ลมเป่าออกมาร้อนผิดปกติ',
        RequesterName: 'Mr. Supanun Raksasuk',
        RequesterID: 'TL120015',
        ApproverName: 'Mr. Chaiwat Panseethong',
        ApproverTel: '081-234-5678',
        Status: 'กำลังซ่อม',
        ReceivedDate: todayStr,
        ReceivedTime: '08:00',
        ReceivedBy: 'TL184711',
        WorkOrderNo: 'WO-69/09-006',
        MaintenanceDetails: 'ตรวจเช็คเบื้องต้น เติมน้ำยาแอร์ไป 1 กิโลกรัม',
        ActionBy1: 'TL184711 Mr. Sittichai Sirimart',
        ActualRepairTime: '1 ชม. 30 นาที',
        CompleteDate: todayStr,
        CompleteTime: '09:30',
        TechnicianName: 'Mr. Sittichai Sirimart',
        TechnicianDate: todayStr,
        TechnicianTime: '09:30',
        ReworkReason: 'Supervisor (Mr. Chaiwat Panseethong): ช่างยังไม่ได้ตรวจเช็คแรงดันน้ำยาแอร์ R134a และสายพานคอมเพรสเซอร์แอร์หย่อน ให้ปรับตั้งสายพานและวัดแรงดันน้ำยาแอร์ใหม่อีกครั้ง',
        Timestamp: timestamp,
        LastModified: timestamp
      }
    ];

    // เขียนลง Requests sheet
    mockItems.forEach(function(item) {
      const row = [
        item.UUID,
        item.RequestID,
        item.InformDate,
        item.InformTime,
        item.EquipmentName,
        item.EquipmentCode,
        item.HrKm,
        item.DueDate,
        item.DamageAppearance,
        item.RequesterName,
        item.RequesterID,
        item.ApproverName,
        item.ApproverTel,
        item.Status,
        item.ReceivedDate || '',
        item.ReceivedTime || '',
        item.ReceivedBy || '',
        item.WorkOrderNo || '',
        item.Timestamp || timestamp,
        item.LastModified || timestamp,
        item.MaintenanceDetails || '',
        item.ActionBy1 || '',
        item.ActionBy2 || '',
        item.ActionBy3 || '',
        item.ActualRepairTime || '',
        item.CompleteDate || '',
        item.CompleteTime || '',
        item.TechnicianName || '',
        item.TechnicianDate || '',
        item.TechnicianTime || '',
        item.EstimateDate || '',
        item.EstimateTime || '',
        item.SupervisorName || '',
        item.SupervisorId || '',
        item.SupervisorDate || '',
        item.SupervisorTime || '',
        item.SupervisorNotes || '',
        item.ManagerName || '',
        item.ManagerId || '',
        item.ManagerDate || '',
        item.ManagerTime || '',
        item.ManagerNotes || '',
        item.AcceptedByName || '',
        item.AcceptedById || '',
        item.AcceptedDate || '',
        item.AcceptedTime || '',
        item.ReworkReason || '',
        item.WoSheetStatus || '',
        item.WoClosedDate || ''
      ];
      sheet.appendRow(row);

      // บันทึกอะไหล่ (ถ้ามี)
      if (item.spareParts && item.spareParts.length > 0) {
        saveSpareParts(item.UUID, item.RequestID, item.WorkOrderNo, item.spareParts, item.TechnicianName || 'Technician');
      }

      // ซิงค์ไปยัง Sheet "บันทึกการเปิด W/O"
      try {
        syncToWoSheetOnCreate(item.UUID, {
          equipmentCode: item.EquipmentCode,
          damageAppearance: item.DamageAppearance,
          requesterName: item.RequesterName,
          informDate: item.InformDate,
          dueDate: item.DueDate,
          hrKm: item.HrKm,
          approverName: item.ApproverName,
          approverTel: item.ApproverTel
        });
        // อัปเดตเลข WO ใน Sheet W/O
        if (item.WorkOrderNo) {
          const dateObj = parseDateString(item.InformDate);
          const woSheet = getOrCreateWoMonthSheet(dateObj);
          if (woSheet) {
            const hRow = findWoHeaderRow(woSheet);
            let tRow = findWoRowByUUID(woSheet, hRow, item.UUID, item.WorkOrderNo, item.EquipmentCode);
            if (tRow) {
              woSheet.getRange(tRow, 6).setValue(item.WorkOrderNo);
              if (item.WoSheetStatus === 'CLOSED') {
                woSheet.getRange(tRow, 5).setValue('CLOSED');
                woSheet.getRange(tRow, 10).setValue((now.getMonth() + 1) + '/' + now.getDate() + '/' + now.getFullYear());
              }
            }
          }
        }
      } catch(eWo) {
        Logger.log('Error syncing mock to WO sheet: ' + eWo.message);
      }
    });

    // ส่งแจ้งเตือน LINE สำหรับ MCK-001 (ถ้าเลือก)
    let lineResult = null;
    if (sendLine) {
      try {
        lineResult = sendLineFlexNotification({
          requestId: 'MCK-001',
          equipmentCode: 'TLM-CB-015',
          equipmentName: 'CONVEYOR BELT (รถสายพานลำเลียงสัมภาระ)',
          damageAppearance: 'สายพานลำเลียงไม่หมุน มอเตอร์ขับสายพานมีเสียงดังผิดปกติ [ข้อมูลจำลอง Mockup]',
          requesterName: 'Mr. Nuttasit Tippayanggoon',
          requesterId: 'TL206992',
          approverTel: '081-234-5678',
          informDate: todayStr,
          informTime: '08:30',
          uuid: 'MOCK-001'
        });
      } catch(eLine) {
        Logger.log('Line notification error: ' + eLine.message);
      }
    }

    clearDashboardCache();
    return {
      success: true,
      count: mockItems.length,
      message: 'สร้างข้อมูลจำลองครบทั้ง 7 สถานะเรียบร้อยแล้ว (สามารถลบออกได้ตลอดเวลา)',
      lineResult: lineResult
    };
  } catch(error) {
    Logger.log('Error generating mockup data: ' + error.message);
    return { success: false, message: 'เกิดข้อผิดพลาดในการสร้าง Mockup: ' + error.message };
  } finally {
    try { lock.releaseLock(); } catch(e) {}
  }
}

/**
 * clearMockupDataInternal - ฟังก์ชันภายในสำหรับลบข้อมูล Mockup ทั้งหมด
 */
function clearMockupDataInternal() {
  try {
    const sheet = getRequestsSheet();
    const data = sheet.getDataRange().getValues();
    let deletedCount = 0;

    for (let r = data.length - 1; r >= 1; r--) {
      const rowUuid = (data[r][0] != null) ? data[r][0].toString().trim() : '';
      const rowReqId = (data[r][1] != null) ? data[r][1].toString().trim() : '';

      if (rowUuid.indexOf('MOCK-') === 0 || rowReqId.indexOf('MCK-') === 0) {
        const informDate = data[r][2];
        const eqCode = data[r][5];
        const woNo = data[r][17];

        sheet.deleteRow(r + 1);
        deletedCount++;

        // ลบออกจาก Sheet "บันทึกการเปิด W/O"
        try {
          deleteFromWoSheet(rowUuid, informDate, woNo, eqCode);
        } catch(eWo) {}
      }
    }

    // ล้างรายการอะไหล่ใน SpareParts sheet ด้วย
    try {
      const spSheet = getOrCreateSparePartsSheet();
      const spData = spSheet.getDataRange().getValues();
      for (let s = spData.length - 1; s >= 1; s--) {
        const spUuid = (spData[s][0] != null) ? spData[s][0].toString().trim() : '';
        const spReqId = (spData[s][1] != null) ? spData[s][1].toString().trim() : '';
        if (spUuid.indexOf('MOCK-') === 0 || spReqId.indexOf('MCK-') === 0) {
          spSheet.deleteRow(s + 1);
        }
      }
    } catch(eSp) {}

    return deletedCount;
  } catch(e) {
    Logger.log('Error in clearMockupDataInternal: ' + e.message);
    return 0;
  }
}

/**
 * clearMockupData - ฟังก์ชันที่ถูกเรียกจาก Web App เพื่อล้างข้อมูลจำลองทั้งหมด
 */
function clearMockupData(empId) {
  if (empId && !ADMIN_IDS.includes(empId.toString().trim().toUpperCase())) {
    return { success: false, message: 'สิทธิ์ไม่ถูกต้อง: ฟังก์ชันนี้สงวนสิทธิ์เฉพาะผู้ดูแลระบบ (Admin) เท่านั้น' };
  }

  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(15000);
  } catch(e) {
    return { success: false, message: 'ระบบกำลังทำงาน กรุณาลองใหม่อีกครั้ง' };
  }

  try {
    const count = clearMockupDataInternal();
    clearDashboardCache();
    return {
      success: true,
      count: count,
      message: 'ลบข้อมูลจำลองทั้งหมดเรียบร้อยแล้ว (' + count + ' รายการ)'
    };
  } catch(error) {
    return { success: false, message: 'เกิดข้อผิดพลาดในการล้าง Mockup: ' + error.message };
  } finally {
    try { lock.releaseLock(); } catch(e) {}
  }
}

/**
 * sendTestLineMockupNotification - ส่งการแจ้งเตือน LINE ทดสอบสำหรับการสาธิต
 */
function sendTestLineMockupNotification(empId) {
  if (empId && !ADMIN_IDS.includes(empId.toString().trim().toUpperCase())) {
    return { success: false, message: 'สิทธิ์ไม่ถูกต้อง: ฟังก์ชันนี้สงวนสิทธิ์เฉพาะผู้ดูแลระบบ (Admin) เท่านั้น' };
  }

  try {
    const now = new Date();
    const todayStr = Utilities.formatDate(now, 'Asia/Bangkok', 'dd/MM/yyyy');
    const timeStr = Utilities.formatDate(now, 'Asia/Bangkok', 'HH:mm');

    const result = sendLineFlexNotification({
      requestId: 'MCK-DEMO',
      equipmentCode: 'TLM-CB-015',
      equipmentName: 'CONVEYOR BELT (รถสายพานลำเลียงสัมภาระ)',
      damageAppearance: 'สายพานลำเลียงไม่หมุน มอเตอร์ขับสายพานมีเสียงดังผิดปกติ [ทดสอบระบบแจ้งเตือน LINE]',
      requesterName: 'Mr. Nuttasit Tippayanggoon',
      requesterId: 'TL206992',
      approverTel: '081-234-5678',
      informDate: todayStr,
      informTime: timeStr,
      uuid: 'MOCK-DEMO'
    });

    if (result && result.success) {
      return { success: true, message: 'ส่งแจ้งเตือน Flex Message เข้ากลุ่ม LINE สำเร็จเรียบร้อยแล้ว' };
    } else {
      return { success: false, message: 'ส่ง LINE ไม่สำเร็จ: ' + (result ? (result.message || result.error) : 'Unknown error') };
    }
  } catch(e) {
    return { success: false, message: 'เกิดข้อผิดพลาด: ' + e.message };
  }
}

// ============================================================
// REAL-TIME ACTIVE USERS & GA4 ANALYTICS FUNCTIONS
// ============================================================

/**
 * recordUserHeartbeat - บันทึก Heartbeat ของผู้ใช้งานลงใน CacheService (รวดเร็ว ไม่กระทบ Quota ของ Sheet)
 */
function recordUserHeartbeat(clientData) {
  try {
    if (!clientData || !clientData.employeeId) {
      return { success: false, message: 'Invalid payload' };
    }

    const cache = CacheService.getScriptCache();
    const rawSessions = cache.get('ACTIVE_SESSIONS');
    let sessions = [];
    if (rawSessions) {
      try {
        sessions = JSON.parse(rawSessions);
      } catch (e) {
        sessions = [];
      }
    }

    const now = Date.now();
    const TIMEOUT_MS = 120000; // 2 minutes timeout

    // กรองเอาเฉพาะ Session ที่ยังไม่หมดอายุ (Active ภายใน 2 นาที)
    sessions = sessions.filter(function(s) {
      return (now - (s.lastPing || 0)) <= TIMEOUT_MS;
    });

    // อัปเดตหรือเพิ่มผู้ใช้นี้
    const empId = String(clientData.employeeId).toUpperCase();
    let found = false;
    for (let i = 0; i < sessions.length; i++) {
      if (String(sessions[i].employeeId).toUpperCase() === empId) {
        sessions[i].lastPing = now;
        sessions[i].fullName = clientData.fullName || sessions[i].fullName;
        sessions[i].role = clientData.role || sessions[i].role;
        sessions[i].deviceType = clientData.deviceType || sessions[i].deviceType;
        sessions[i].currentTab = clientData.currentTab || sessions[i].currentTab;
        found = true;
        break;
      }
    }

    if (!found) {
      sessions.push({
        employeeId: empId,
        fullName: clientData.fullName || empId,
        role: clientData.role || 'user',
        deviceType: clientData.deviceType || 'Desktop',
        currentTab: clientData.currentTab || 'requests',
        loginTime: now,
        lastPing: now
      });
    }

    // บันทึกกลับเข้า Cache ชั่วคราว 5 นาที (300 วินาที)
    cache.put('ACTIVE_SESSIONS', JSON.stringify(sessions), 300);

    const isAdmin = (clientData.role || '').toLowerCase() === 'admin';
    return {
      success: true,
      activeCount: sessions.length,
      activeUsers: isAdmin ? sessions : null
    };
  } catch (err) {
    return { success: false, error: err.message };
  }
}

/**
 * removeUserHeartbeat - ลบผู้ใช้ออกจาก Active Sessions ทันทีที่กดออกจากระบบ (Logout)
 */
function removeUserHeartbeat(employeeId) {
  try {
    if (!employeeId) return { success: true };
    const cache = CacheService.getScriptCache();
    const rawSessions = cache.get('ACTIVE_SESSIONS');
    if (!rawSessions) return { success: true };
    let sessions = JSON.parse(rawSessions);
    const empId = String(employeeId).toUpperCase();
    sessions = sessions.filter(function(s) {
      return String(s.employeeId).toUpperCase() !== empId;
    });
    cache.put('ACTIVE_SESSIONS', JSON.stringify(sessions), 300);
    return { success: true };
  } catch (e) {
    return { success: false, error: e.message };
  }
}

/**
 * getActiveUsersData - สำหรับ Admin กดรีเฟรชดูข้อมูลใน Modal
 */
function getActiveUsersData() {
  try {
    const cache = CacheService.getScriptCache();
    const rawSessions = cache.get('ACTIVE_SESSIONS');
    let sessions = [];
    if (rawSessions) {
      try {
        sessions = JSON.parse(rawSessions);
      } catch (e) {
        sessions = [];
      }
    }
    const now = Date.now();
    sessions = sessions.filter(function(s) {
      return (now - (s.lastPing || 0)) <= 120000;
    });

    const props = PropertiesService.getScriptProperties();
    const gaId = props.getProperty('GA_MEASUREMENT_ID') || '';

    return {
      success: true,
      activeCount: sessions.length,
      activeUsers: sessions,
      gaMeasurementId: gaId
    };
  } catch (err) {
    return { success: false, error: err.message };
  }
}

/**
 * saveGaMeasurementId - บันทึก GA4 Measurement ID ลงใน Script Properties
 */
function saveGaMeasurementId(measurementId) {
  try {
    const cleaned = (measurementId || '').trim().toUpperCase();
    const props = PropertiesService.getScriptProperties();
    if (!cleaned) {
      props.deleteProperty('GA_MEASUREMENT_ID');
      return { success: true, message: 'ลบ Measurement ID เรียบร้อย', gaMeasurementId: '' };
    }
    if (cleaned.indexOf('G-') !== 0) {
      return { success: false, message: 'รูปแบบ Measurement ID ไม่ถูกต้อง (ต้องขึ้นต้นด้วย G- เช่น G-ABC123XYZ)' };
    }
    props.setProperty('GA_MEASUREMENT_ID', cleaned);
    return { success: true, message: 'บันทึก Google Analytics Measurement ID สำเร็จ', gaMeasurementId: cleaned };
  } catch (err) {
    return { success: false, error: err.message };
  }
}

// ============================================================
// === PREVENTIVE MAINTENANCE (PM) MODULE ===
// ============================================================

/**
 * generateNextPmRequestId - สร้างเลขที่ใบงาน PM อัตโนมัติ (เช่น PM-202610-01)
 */
function generateNextPmRequestId(sheet, targetDate) {
  const d = targetDate || new Date();
  const yearStr = d.getFullYear().toString();
  const monthStr = String(d.getMonth() + 1).padStart(2, '0');
  const prefix = 'PM-' + yearStr + monthStr + '-';

  const data = sheet.getDataRange().getValues();
  let maxSeq = 0;
  for (let i = 1; i < data.length; i++) {
    const reqId = (data[i][1] || '').toString().trim().toUpperCase();
    if (reqId.startsWith(prefix)) {
      const seqStr = reqId.substring(prefix.length);
      const seq = parseInt(seqStr, 10);
      if (!isNaN(seq) && seq > maxSeq) {
        maxSeq = seq;
      }
    }
  }
  return prefix + String(maxSeq + 1).padStart(2, '0');
}

/**
 * createPmRequest - Admin สร้างใบงานแผน PM
 */
function createPmRequest(pmData, adminEmpId) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(15000);
  } catch(e) {
    return { success: false, message: 'ระบบกำลังมีการบันทึกข้อมูล กรุณาลองใหม่อีกครั้ง' };
  }

  try {
    const empId = (adminEmpId || '').toString().trim().toUpperCase();
    if (!ADMIN_IDS.includes(empId)) {
      return { success: false, message: 'คุณไม่มีสิทธิ์สร้างแผน PM (เฉพาะ Admin)' };
    }

    const eqCode = (pmData.equipmentCode || '').toString().trim().toUpperCase();
    if (!eqCode) {
      return { success: false, message: 'กรุณาระบุรหัสอุปกรณ์' };
    }

    if (!isEquipmentInMaster(eqCode)) {
      return { success: false, message: 'รหัสอุปกรณ์ ' + eqCode + ' ไม่มีในระบบ' };
    }

    const matchedEq = getEquipmentItemFromMaster(eqCode);
    const eqName = matchedEq ? (matchedEq.description || eqCode) : eqCode;

    // หา DamageAppearance (อาการ) ตามกฎ:
    // 1. TLM-TB-*** (Towbar): ทำทุกเดือน -> "PM <MONTH>" เช่น "PM OCT"
    // 2. TLM-PS-*** / TLM-BC-***: "PM <MONTH>" หรือ "PM A"
    // 3. ยานยนต์/อื่นๆ: "PM A", "PM B", "PM C"
    const checkLevel = (pmData.checkLevel || 'A').toString().trim().toUpperCase();
    const rawDate = pmData.planDate || pmData.targetDate || '';
    let planDateStr = '';
    if (rawDate) {
      const parsedD = parseDateString(rawDate);
      planDateStr = formatDateDMY(parsedD) || Utilities.formatDate(new Date(), 'Asia/Bangkok', 'dd/MM/yyyy');
    } else {
      planDateStr = Utilities.formatDate(new Date(), 'Asia/Bangkok', 'dd/MM/yyyy');
    }
    const dObj = parseDateString(planDateStr);
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    const monthStr = months[dObj.getMonth()];

    let damageApp = 'PM ' + checkLevel;
    if (eqCode.indexOf('TLM-TB-') !== -1) {
      damageApp = 'PM ' + monthStr;
    } else if (eqCode.indexOf('TLM-PS-') !== -1 || eqCode.indexOf('TLM-BC-') !== -1) {
      if (checkLevel === 'MONTHLY' || checkLevel === 'M') {
        damageApp = 'PM ' + monthStr;
      } else {
        damageApp = 'PM ' + checkLevel;
      }
    }

    const sheet = getRequestsSheet();
    ensureRequestHeaders(sheet);
    const uuid = Utilities.getUuid();
    const now = new Date();
    const timestamp = Utilities.formatDate(now, 'Asia/Bangkok', 'dd/MM/yyyy HH:mm:ss');
    const informTime = Utilities.formatDate(now, 'Asia/Bangkok', 'HH:mm');

    const requestId = generateNextPmRequestId(sheet, dObj);
    const cleanWo = pmData.workOrderNo ? pmData.workOrderNo.toString().trim().replace(/\D/g, '') : '';

    const rowData = [
      uuid,                                   // A - UUID
      requestId,                              // B - เลขที่ใบแจ้งซ่อม
      planDateStr,                            // C - วันที่แจ้งซ่อม / วันตามแผน
      informTime,                             // D - เวลา
      eqName,                                 // E - ชื่ออุปกรณ์
      eqCode,                                 // F - รหัสอุปกรณ์
      pmData.hrKm || '',                      // G - ชม./กม.
      planDateStr,                            // H - วันที่ต้องการใช้
      damageApp,                              // I - อาการเสีย ("PM A", "PM OCT" ฯลฯ)
      'Admin (แผน PM)',                       // J - ผู้แจ้ง
      empId,                                  // K - รหัสพนักงานผู้แจ้ง
      ADMIN_PROFILES[empId] || empId,         // L - ผู้อนุมัติ
      'GSE Maintenance',                      // M - Tel / แผนก
      'รอดำเนินการ',                           // N - สถานะ (default)
      planDateStr,                            // O - วันที่รับแจ้ง
      informTime,                             // P - เวลารับแจ้ง
      empId,                                  // Q - ผู้รับแจ้ง
      cleanWo,                                // R - เลขที่ใบสั่งงาน (W/O)
      timestamp,                              // S - Timestamp
      timestamp                               // T - LastModified
    ];

    sheet.appendRow(rowData);

    const newRow = sheet.getLastRow();
    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    const priorityCol = headers.indexOf('Priority') + 1;
    if (priorityCol > 0) sheet.getRange(newRow, priorityCol).setValue('PM');
    const checkLevelCol = headers.indexOf('PmCheckLevel') + 1;
    if (checkLevelCol > 0) sheet.getRange(newRow, checkLevelCol).setValue(checkLevel);

    const serialNo = matchedEq ? (matchedEq.serialNo || '') : '';
    const initialChecklistData = {
      gseNumber: eqCode,
      serialNo: serialNo,
      chaNo: 'N/A',
      engNo: 'N/A',
      hrMeter: pmData.hrKm || '',
      workOrderNo: cleanWo,
      checkLevel: checkLevel,
      sectionB: [],
      sectionC: [],
      checklist: [],
      defectFound: 'NO',
      rectification: '',
      materials: [],
      reportedBy: '',
      verifiedBy: '',
      completeDate: ''
    };
    const checklistDataCol = headers.indexOf('PmChecklistData') + 1;
    if (checklistDataCol > 0) {
      sheet.getRange(newRow, checklistDataCol).setValue(JSON.stringify(initialChecklistData));
    }

    // ซิงค์ไปยัง Sheet "บันทึกการเปิด W/O"
    syncToWoSheetOnCreate(uuid, {
      informDate: planDateStr,
      equipmentCode: eqCode,
      damageAppearance: damageApp,
      workOrderNo: cleanWo,
      priority: 'PM',
      requestId: requestId,
      isPm: true
    });

    const createdReqObj = {
      UUID: uuid,
      RequestID: requestId,
      InformDate: planDateStr,
      InformTime: informTime,
      EquipmentName: eqName,
      EquipmentCode: eqCode,
      HrKm: pmData.hrKm || '',
      DueDate: planDateStr,
      DamageAppearance: damageApp,
      RequesterName: 'Admin (แผน PM)',
      RequesterID: empId,
      ApproverName: ADMIN_PROFILES[empId] || empId,
      ApproverTel: 'GSE Maintenance',
      Status: 'รอดำเนินการ',
      ReceivedDate: planDateStr,
      ReceivedTime: informTime,
      ReceivedBy: empId,
      WorkOrderNo: cleanWo,
      Timestamp: timestamp,
      LastModified: timestamp,
      Priority: 'PM',
      PmCheckLevel: checkLevel,
      SerialNo: serialNo,
      PmChecklistData: JSON.stringify(initialChecklistData)
    };

    clearDashboardCache();
    return {
      success: true,
      message: 'สร้างงานแผน PM เลขที่ ' + requestId + ' (' + eqCode + ' - ' + damageApp + ') เรียบร้อยแล้ว',
      uuid: uuid,
      requestId: requestId,
      request: createdReqObj
    };
  } catch(err) {
    Logger.log('Error in createPmRequest: ' + err.message);
    return { success: false, message: 'เกิดข้อผิดพลาด: ' + err.message };
  } finally {
    try { lock.releaseLock(); } catch(e) {}
  }
}

/**
 * importPmMonthlyPlan - Admin นำเข้าแผน PM ประจำเดือนหลายคันพร้อมกัน
 */
function importPmMonthlyPlan(planList, adminEmpId) {
  if (!planList || !Array.isArray(planList) || planList.length === 0) {
    return { success: false, message: 'ไม่พบรายการแผน PM ที่จะนำเข้า' };
  }

  const empId = (adminEmpId || '').toString().trim().toUpperCase();
  if (!ADMIN_IDS.includes(empId)) {
    return { success: false, message: 'คุณไม่มีสิทธิ์นำเข้าแผน PM (เฉพาะ Admin)' };
  }

  let successCount = 0;
  const errors = [];

  for (let i = 0; i < planList.length; i++) {
    const item = planList[i];
    if (!item.equipmentCode || !item.equipmentCode.trim()) continue;
    const res = createPmRequest(item, empId);
    if (res.success) {
      successCount++;
    } else {
      errors.push((item.equipmentCode || 'แถว ' + (i + 1)) + ': ' + res.message);
    }
  }

  clearDashboardCache();
  return {
    success: successCount > 0,
    count: successCount,
    total: planList.length,
    message: 'นำเข้าแผน PM สำเร็จ ' + successCount + ' จาก ' + planList.length + ' รายการ' + (errors.length > 0 ? (' (ไม่สำเร็จ ' + errors.length + ' รายการ)') : '')
  };
}

/**
 * getPmDashboardData - ดึงรายการงาน PM ทั้งหมด
 */
function getPmDashboardData(monthNum, yearNum) {
  try {
    const allRequests = getRequests();
    const pmRequests = [];
    const targetMonth = monthNum ? parseInt(monthNum, 10) - 1 : -1;
    const targetYear = yearNum ? parseInt(yearNum, 10) : -1;

    for (let i = 0; i < allRequests.length; i++) {
      const req = allRequests[i];
      const isPm = (req.Priority === 'PM' ||
                    (req.RequestID && req.RequestID.toString().startsWith('PM')) ||
                    (req.DamageAppearance && req.DamageAppearance.toString().startsWith('PM')));
      if (!isPm) continue;

      if (targetMonth !== -1 && targetYear !== -1) {
        const dObj = parseDateString(req.InformDate);
        if (dObj.getMonth() !== targetMonth || dObj.getFullYear() !== targetYear) {
          continue;
        }
      }

      // ดึงแม่แบบ Task Card ที่ผูกไว้
      let tpl = null;
      let checkLvl = req.PmCheckLevel || 'A';
      if (!req.PmCheckLevel && req.DamageAppearance) {
        const parts = req.DamageAppearance.toString().split(' ');
        if (parts.length >= 2) checkLvl = parts[1];
      }
      tpl = resolvePmTaskCard(req.EquipmentCode, checkLvl, req.EquipmentName);

      // แกะ MaintenanceDetails / PmChecklistData ถ้ามี
      let checklistProgress = { total: tpl ? tpl.itemCount : 0, completed: 0, defects: 0 };
      if (req.MaintenanceDetails && req.MaintenanceDetails.startsWith('{')) {
        try {
          const detail = JSON.parse(req.MaintenanceDetails);
          req._pmDetail = detail;
          if (detail.checklist && Array.isArray(detail.checklist)) {
            let passCount = 0, defectCount = 0;
            detail.checklist.forEach(function(item) {
              if (item.status === 'PASS' || item.status === 'NA') passCount++;
              if (item.status === 'DEFECT') defectCount++;
            });
            checklistProgress.completed = passCount + defectCount;
            checklistProgress.defects = defectCount;
            if (detail.checklist.length > checklistProgress.total) {
              checklistProgress.total = detail.checklist.length;
            }
          }
        } catch(e) {}
      }

      req._checklistProgress = checklistProgress;
      req._taskCardTemplate = tpl;
      pmRequests.push(req);
    }

    return {
      success: true,
      requests: pmRequests
    };
  } catch(err) {
    Logger.log('Error in getPmDashboardData: ' + err.message);
    return { success: false, requests: [], message: err.message };
  }
}

/**
 * submitPmTaskCardReport - ช่างบันทึกผลการตรวจ Task Card และส่งต่อให้ Supervisor ตรวจสอบ
 */
function submitPmTaskCardReport(uuid, pmReport, userEmpId) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(15000);
  } catch(e) {
    return { success: false, message: 'ระบบกำลังมีการบันทึกข้อมูล กรุณาลองใหม่อีกครั้ง' };
  }

  try {
    if (!uuid) return { success: false, message: 'ไม่พบรหัสงาน PM' };
    const empId = (userEmpId || '').toString().trim().toUpperCase();
    const sheet = getRequestsSheet();
    ensureRequestHeaders(sheet);
    const allData = sheet.getDataRange().getValues();
    let rowIndex = -1;

    for (let i = 1; i < allData.length; i++) {
      if ((allData[i][0] != null) && allData[i][0].toString().trim() === uuid) {
        rowIndex = i + 1;
        break;
      }
    }

    if (rowIndex === -1) {
      return { success: false, message: 'ไม่พบข้อมูลงาน PM ในระบบ' };
    }

    const now = new Date();
    const timestamp = Utilities.formatDate(now, 'Asia/Bangkok', 'dd/MM/yyyy HH:mm:ss');
    const todayStr = Utilities.formatDate(now, 'Asia/Bangkok', 'dd/MM/yyyy');
    const timeStr = Utilities.formatDate(now, 'Asia/Bangkok', 'HH:mm');

    const act1 = (pmReport.actionBy1 || empId).toString().trim();
    let act2 = (pmReport.actionBy2 || '').toString().trim();
    let act3 = (pmReport.actionBy3 || '').toString().trim();
    if (act2 && act2 === act1) act2 = '';
    if (act3 && (act3 === act1 || act3 === act2)) act3 = '';

    const techName = TECHNICIAN_PROFILES[act1] || ADMIN_PROFILES[act1] || act1;

    // ปรับสถานะเป็น 'รอ Supervisor ตรวจสอบ'
    sheet.getRange(rowIndex, 14).setValue('รอ Supervisor ตรวจสอบ');
    sheet.getRange(rowIndex, 20).setValue(timestamp); // LastModified

    if (pmReport.hrKm) {
      sheet.getRange(rowIndex, 7).setValue(pmReport.hrKm);
    }

    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    const pmDataCol = headers.indexOf('PmChecklistData') + 1;
    const maintCol = headers.indexOf('MaintenanceDetails') + 1 || 21;

    // ช่างผู้ปฏิบัติงาน (เรียงชื่อลงมาในช่อง reportedBy โดยไม่ต้องใส่เลขลำดับข้างหน้า)
    const techNamesList = [];
    if (act1) techNamesList.push(TECHNICIAN_PROFILES[act1] || ADMIN_PROFILES[act1] || act1);
    if (act2 && act2 !== act1) techNamesList.push(TECHNICIAN_PROFILES[act2] || ADMIN_PROFILES[act2] || act2);
    if (act3 && act3 !== act1 && act3 !== act2) techNamesList.push(TECHNICIAN_PROFILES[act3] || ADMIN_PROFILES[act3] || act3);
    const defaultReportedBy = techNamesList.join('\n');

    // ดึง Serial No จาก GSE Master ถ้ายังไม่มี
    let serialNoVal = (pmReport.serialNo || '').toString().trim();
    if (!serialNoVal) {
      const eqItem = getEquipmentItemFromMaster(allData[rowIndex - 1][5]);
      if (eqItem && eqItem.serialNo) serialNoVal = eqItem.serialNo;
    }

    const reportObj = {
      gseNumber: allData[rowIndex - 1][5] || '',
      serialNo: serialNoVal,
      chaNo: 'N/A',
      engNo: 'N/A',
      hrMeter: pmReport.hrMeter || pmReport.hrKm || '',
      workOrderNo: allData[rowIndex - 1][17] || '',
      checkLevel: (allData[rowIndex - 1][headers.indexOf('PmCheckLevel')] || allData[rowIndex - 1][8] || '').toString().trim(),
      sectionB: pmReport.sectionB || [],
      sectionC: pmReport.sectionC || [],
      checklist: pmReport.checklist || [],
      defectFound: (pmReport.defectFound || 'NO').toString().toUpperCase().trim(),
      rectification: pmReport.rectification || '',
      materials: pmReport.materials || [],
      reportedBy: (pmReport.reportedBy || defaultReportedBy).toString().trim(),
      verifiedBy: pmReport.verifiedBy || '',
      completedAt: timestamp,
      completeDate: todayStr
    };
    const reportJson = JSON.stringify(reportObj);

    if (pmDataCol > 0) sheet.getRange(rowIndex, pmDataCol).setValue(reportJson);
    sheet.getRange(rowIndex, maintCol).setValue(reportJson);

    // ช่างผู้ทำ
    sheet.getRange(rowIndex, 22).setValue(act1);
    sheet.getRange(rowIndex, 23).setValue(act2);
    sheet.getRange(rowIndex, 24).setValue(act3);
    sheet.getRange(rowIndex, 26).setValue(todayStr); // CompleteDate
    sheet.getRange(rowIndex, 27).setNumberFormat('@STRING@').setValue(timeStr);
    sheet.getRange(rowIndex, 28).setValue(techName);
    sheet.getRange(rowIndex, 29).setValue(todayStr);
    sheet.getRange(rowIndex, 30).setNumberFormat('@STRING@').setValue(timeStr);

    // บันทึกอะไหล่ (ถ้ามี)
    const reqId = allData[rowIndex - 1][1] || '';
    const woNo = allData[rowIndex - 1][17] || '';
    if (pmReport.materials && pmReport.materials.length > 0) {
      const spareList = pmReport.materials.map(function(m, idx) {
        return {
          itemNo: m.no || (idx + 1),
          name: m.desc || '',
          partNo: m.partNo || '',
          qty: m.qty || 1,
          typeModel: m.snBatch || ''
        };
      });
      saveSpareParts(uuid, reqId, woNo, spareList, act1);
    } else if (pmReport.spareParts && pmReport.spareParts.length > 0) {
      saveSpareParts(uuid, reqId, woNo, pmReport.spareParts, act1);
    }

    clearDashboardCache();
    return {
      success: true,
      message: 'บันทึกรายงาน Task Card สำเร็จ และส่งต่อให้ Supervisor ตรวจสอบเรียบร้อยแล้ว',
      status: 'รอ Supervisor ตรวจสอบ',
      reportData: reportObj
    };
  } catch(err) {
    Logger.log('Error in submitPmTaskCardReport: ' + err.message);
    return { success: false, message: 'เกิดข้อผิดพลาด: ' + err.message };
  } finally {
    try { lock.releaseLock(); } catch(e) {}
  }
}

/**
 * approvePmSupervisor - Supervisor ตรวจสอบและลงนามงาน PM (ส่งต่อให้ Manager อนุมัติ)
 */
function approvePmSupervisor(uuid, supervisorEmpId, notes) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(15000);
  } catch(e) {
    return { success: false, message: 'ระบบกำลังมีการบันทึกข้อมูล กรุณาลองใหม่อีกครั้ง' };
  }

  try {
    if (!uuid) return { success: false, message: 'ไม่พบรหัสงาน PM' };
    const empId = (supervisorEmpId || '').toString().trim().toUpperCase();
    const isSup = SUPERVISOR_IDS.includes(empId);
    const isAdmin = ADMIN_IDS.includes(empId);
    if (!isSup && !isAdmin) {
      return { success: false, message: 'คุณไม่มีสิทธิ์ในการตรวจสอบงาน (เฉพาะ Supervisor หรือ Admin)' };
    }

    const supName = SUPERVISOR_PROFILES[empId] || ADMIN_PROFILES[empId] || empId;
    const sheet = getRequestsSheet();
    ensureRequestHeaders(sheet);
    const allData = sheet.getDataRange().getValues();
    let rowIndex = -1;

    for (let i = 1; i < allData.length; i++) {
      if ((allData[i][0] != null) && allData[i][0].toString().trim() === uuid) {
        rowIndex = i + 1;
        break;
      }
    }

    if (rowIndex === -1) {
      return { success: false, message: 'ไม่พบข้อมูลงาน PM' };
    }

    const now = new Date();
    const timestamp = Utilities.formatDate(now, 'Asia/Bangkok', 'dd/MM/yyyy HH:mm:ss');
    const todayStr = Utilities.formatDate(now, 'Asia/Bangkok', 'dd/MM/yyyy');
    const timeStr = Utilities.formatDate(now, 'Asia/Bangkok', 'HH:mm');

    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];

    // อัพเดตสถานะ -> 'รอ Manager อนุมัติ'
    sheet.getRange(rowIndex, 14).setValue('รอ Manager อนุมัติ');
    sheet.getRange(rowIndex, 20).setValue(timestamp);

    // ช่อง Supervisor (Cols 33-37)
    sheet.getRange(rowIndex, 33).setValue(supName);
    sheet.getRange(rowIndex, 34).setValue(empId);
    sheet.getRange(rowIndex, 35).setValue(todayStr);
    sheet.getRange(rowIndex, 36).setNumberFormat('@STRING@').setValue(timeStr);
    sheet.getRange(rowIndex, 37).setValue(notes || '');

    // อัพเดตลงใน PmChecklistData ให้มี verifiedBy และ verifiedDate
    const pmDataCol = headers.indexOf('PmChecklistData') + 1;
    if (pmDataCol > 0) {
      let pmObj = {};
      try {
        const curJson = sheet.getRange(rowIndex, pmDataCol).getValue();
        if (curJson) pmObj = JSON.parse(curJson);
      } catch(e) {}
      pmObj.verifiedBy = supName;
      pmObj.verifiedDate = todayStr;
      sheet.getRange(rowIndex, pmDataCol).setValue(JSON.stringify(pmObj));
    }

    clearDashboardCache();
    return {
      success: true,
      message: 'Supervisor ลงนามตรวจสอบเรียบร้อยแล้ว ส่งต่อให้ Manager อนุมัติ',
      status: 'รอ Manager อนุมัติ',
      supervisorName: supName,
      supervisorDate: todayStr
    };
  } catch(err) {
    Logger.log('Error in approvePmSupervisor: ' + err.message);
    return { success: false, message: 'เกิดข้อผิดพลาด: ' + err.message };
  } finally {
    try { lock.releaseLock(); } catch(e) {}
  }
}

/**
 * approvePmManager - Manager ตรวจสอบและลงนามงาน PM (สถานะเป็น COMPLETE)
 */
function approvePmManager(uuid, managerEmpId, notes) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(15000);
  } catch(e) {
    return { success: false, message: 'ระบบกำลังมีการบันทึกข้อมูล กรุณาลองใหม่อีกครั้ง' };
  }

  try {
    if (!uuid) return { success: false, message: 'ไม่พบรหัสงาน PM' };
    const empId = (managerEmpId || '').toString().trim().toUpperCase();
    const isMgr = MANAGER_IDS.includes(empId);
    const isAdmin = ADMIN_IDS.includes(empId);
    if (!isMgr && !isAdmin) {
      return { success: false, message: 'คุณไม่มีสิทธิ์ในการอนุมัติงาน (เฉพาะ Manager หรือ Admin)' };
    }

    const mgrName = MANAGER_PROFILES[empId] || ADMIN_PROFILES[empId] || empId;
    const sheet = getRequestsSheet();
    ensureRequestHeaders(sheet);
    const allData = sheet.getDataRange().getValues();
    let rowIndex = -1;

    for (let i = 1; i < allData.length; i++) {
      if ((allData[i][0] != null) && allData[i][0].toString().trim() === uuid) {
        rowIndex = i + 1;
        break;
      }
    }

    if (rowIndex === -1) {
      return { success: false, message: 'ไม่พบข้อมูลงาน PM' };
    }

    const now = new Date();
    const timestamp = Utilities.formatDate(now, 'Asia/Bangkok', 'dd/MM/yyyy HH:mm:ss');
    const todayStr = Utilities.formatDate(now, 'Asia/Bangkok', 'dd/MM/yyyy');
    const timeStr = Utilities.formatDate(now, 'Asia/Bangkok', 'HH:mm');

    // อัพเดตสถานะ -> 'COMPLETE' (ตามที่ผู้ใช้กำหนด)
    sheet.getRange(rowIndex, 14).setValue('COMPLETE');
    sheet.getRange(rowIndex, 20).setValue(timestamp);

    // ช่อง Manager (Cols 38-42)
    sheet.getRange(rowIndex, 38).setValue(mgrName);
    sheet.getRange(rowIndex, 39).setValue(empId);
    sheet.getRange(rowIndex, 40).setValue(todayStr);
    sheet.getRange(rowIndex, 41).setNumberFormat('@STRING@').setValue(timeStr);
    sheet.getRange(rowIndex, 42).setValue(notes || '');

    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    const pmDataCol = headers.indexOf('PmChecklistData') + 1;
    if (pmDataCol > 0) {
      let pmObj = {};
      try {
        const curJson = sheet.getRange(rowIndex, pmDataCol).getValue();
        if (curJson) pmObj = JSON.parse(curJson);
      } catch(e) {}
      const supNameVal = allData[rowIndex - 1][32] || pmObj.verifiedBy || '';
      if (supNameVal && supNameVal.indexOf(mgrName) === -1) {
        pmObj.verifiedBy = supNameVal + '\n' + mgrName;
      } else {
        pmObj.verifiedBy = mgrName;
      }
      pmObj.verifiedDate = todayStr;
      sheet.getRange(rowIndex, pmDataCol).setValue(JSON.stringify(pmObj));
    }

    // ซิงค์ไปยัง Sheet "บันทึกการเปิด W/O": ปรับ Col E เป็น COMPLETE
    const informDate = allData[rowIndex - 1][2] || '';
    const woNo = allData[rowIndex - 1][17] || '';
    const eqCode = allData[rowIndex - 1][5] || '';
    const damage = allData[rowIndex - 1][8] || '';

    try {
      const dateObj = parseDateString(informDate);
      const woSheet = getOrCreateWoMonthSheet(dateObj);
      if (woSheet) {
        const headerRow = findWoHeaderRow(woSheet);
        const targetRow = findWoRowByUUID(woSheet, headerRow, uuid, woNo, eqCode, damage);
        if (targetRow) {
          woSheet.getRange(targetRow, 5).setValue('COMPLETE');
        }
      }
    } catch(syncErr) {
      Logger.log('Sync to WO sheet on PM manager approve error: ' + syncErr.message);
    }

    clearDashboardCache();
    return {
      success: true,
      message: 'Manager ลงนามอนุมัติงาน PM เรียบร้อยแล้ว (สถานะเป็น COMPLETE - รอ Admin ปิดงานในระบบ)',
      status: 'COMPLETE'
    };
  } catch(err) {
    Logger.log('Error in approvePmManager: ' + err.message);
    return { success: false, message: 'เกิดข้อผิดพลาด: ' + err.message };
  } finally {
    try { lock.releaseLock(); } catch(e) {}
  }
}

/**
 * closePmJobByAdmin - Admin ปิดงานในระบบ (สถานะในระบบเป็น เสร็จสิ้น และใน Sheet W/O เป็น CLOSED)
 */
function closePmJobByAdmin(uuid, adminEmpId) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(15000);
  } catch(e) {
    return { success: false, message: 'ระบบกำลังมีการบันทึกข้อมูล กรุณาลองใหม่อีกครั้ง' };
  }

  try {
    if (!uuid) return { success: false, message: 'ไม่พบรหัสงาน PM' };
    const empId = (adminEmpId || '').toString().trim().toUpperCase();
    if (!ADMIN_IDS.includes(empId)) {
      return { success: false, message: 'คุณไม่มีสิทธิ์ปิดงาน (เฉพาะ Admin)' };
    }

    const sheet = getRequestsSheet();
    ensureRequestHeaders(sheet);
    const allData = sheet.getDataRange().getValues();
    let rowIndex = -1;

    for (let i = 1; i < allData.length; i++) {
      if ((allData[i][0] != null) && allData[i][0].toString().trim() === uuid) {
        rowIndex = i + 1;
        break;
      }
    }

    if (rowIndex === -1) {
      return { success: false, message: 'ไม่พบข้อมูลงาน PM' };
    }

    const currentStatus = (allData[rowIndex - 1][13] || '').toString().trim();
    if (currentStatus !== 'COMPLETE') {
      return { success: false, message: 'สามารถปิดงานได้เฉพาะรายการที่มีสถานะ "COMPLETE" เท่านั้น (สถานะปัจจุบัน: ' + currentStatus + ')' };
    }

    const now = new Date();
    const timestamp = Utilities.formatDate(now, 'Asia/Bangkok', 'dd/MM/yyyy HH:mm:ss');

    // ปรับสถานะใน Requests เป็น 'เสร็จสิ้น'
    sheet.getRange(rowIndex, 14).setValue('เสร็จสิ้น');
    sheet.getRange(rowIndex, 20).setValue(timestamp); // LastModified

    // ซิงค์ไปยัง Sheet "บันทึกการเปิด W/O": ปรับ Col E เป็น CLOSED + วันที่ปิด (Col J)
    const informDate = allData[rowIndex - 1][2] || '';
    const woNo = allData[rowIndex - 1][17] || '';
    const eqCode = allData[rowIndex - 1][5] || '';
    const damage = allData[rowIndex - 1][8] || '';

    try {
      const dateObj = parseDateString(informDate);
      const woSheet = getOrCreateWoMonthSheet(dateObj);
      if (woSheet) {
        const headerRow = findWoHeaderRow(woSheet);
        const targetRow = findWoRowByUUID(woSheet, headerRow, uuid, woNo, eqCode, damage);
        if (targetRow) {
          woSheet.getRange(targetRow, 5).setValue('CLOSED');
          const closeDateStr = (now.getMonth() + 1) + '/' + now.getDate() + '/' + now.getFullYear();
          woSheet.getRange(targetRow, 10).setValue(closeDateStr);
        }
      }
    } catch(syncErr) {
      Logger.log('Sync to WO sheet on PM admin close error: ' + syncErr.message);
    }

    clearDashboardCache();
    return {
      success: true,
      message: 'Admin ปิดงานในระบบเรียบร้อยแล้ว (สถานะใน Sheet W/O ปรับเป็น CLOSED สำเร็จ)',
      status: 'เสร็จสิ้น'
    };
  } catch(err) {
    Logger.log('Error in closePmJobByAdmin: ' + err.message);
    return { success: false, message: 'เกิดข้อผิดพลาด: ' + err.message };
  } finally {
    try { lock.releaseLock(); } catch(e) {}
  }
}



