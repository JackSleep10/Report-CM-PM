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

// รายชื่อและข้อมูลผู้ใช้งานทั่วไป (General User Profiles - 41 ท่าน)
const USER_PROFILES = {
  'TL130059': 'Mr. Samart Seenintin',
  'TL140412': 'Mr. Jatuporn Langcoolsane',
  'TL130106': 'Mr. Nithirot Thongrod',
  'TL130108': 'Mr. Wanchalerm Kiewgeaw',
  'TL130117': 'Mr. Sarawut Boonyarit',
  'TL130119': 'Mr. Jaturong Chotchuang',
  'TL130105': 'Mr. Manu Khongkhiao',
  'TL130115': 'Mr. Songsit Sukjam',
  'TL130120': 'Mr. Nattawut Songthong',
  'TL130150': 'Mr. Tanay Buthngam',
  'TL140414': 'Mr. Chaiwat Manthong',
  'TL141155': 'Mr. Komsak Saeueng',
  'TL151729': 'Mr. Taksa Nilsangratana',
  'TL151994': 'Mr. Pasuthorn Saejia',
  'TL130112': 'Mr. Wichit Thabian',
  'TL130113': 'Mr. Bamrung Khathirun',
  'TL130148': 'Mr. Apinun Choviwatana',
  'TL141152': 'Mr. Somsak Charernrum',
  'TL151716': 'Mr. Chatchaval Buengkai',
  'TL151992': 'Mr. Pongpak Maneeprasert',
  'TL152422': 'Mr. Chokchai Suwanawong',
  'TL130111': 'Mr. Aumnaj Yarangse',
  'TL130159': 'Mr. Amnuay Chuejit',
  'TL151721': 'Mr. Kriangkrai Nameiam',
  'TL152182': 'Mr. Saran Khwanjit',
  'TL152377': 'Mr. Sakda Aunchanghan',
  'TL152381': 'Mr. Yuttana Nakyim',
  'TL152428': 'Mr. Panyapong Meesukho',
  'TL152431': 'Mr. Prakit Nuchseingparo',
  'TL152436': 'Mr. Yuthapong Gosa',
  'TL162945': 'Mr. Jiraphong Sangthong',
  'TL163562': 'Mr. Sutad Deevong',
  'TL174001': 'Mr. Noppadol Prasarttikorn',
  'TL174062': 'Mr. Siriwat Pokkrong',
  'TL174253': 'Mr. Chondan Phromprasit',
  'TL174258': 'Mr. Watchrapol Chalampan',
  'TL174298': 'Mr. Aekkachai Klinkajorn',
  'TL184946': 'Mr. Kittipong Chunchoowong',
  'TL185088': 'Mr. Preeda Puangpee',
  'TL185089': 'Mr. Titawee Thongrod',
  'TL141285': 'Mr. Eakkawit Thipchot'
};
const USER_DEPARTMENTS = {
  'TL130059': 'GSE Supervisor',
  'TL140412': 'GSE Supervisor',
  'TL130106': 'GSE Supervisor',
  'TL130108': 'GSE Supervisor',
  'TL130117': 'GSE Maintenance & Operations Supervisor',
  'TL130119': 'GSE Supervisor',
  'TL130105': 'GSE Lead',
  'TL130115': 'GSE Lead',
  'TL130120': 'GSE Lead',
  'TL130150': 'GSE Lead',
  'TL140414': 'GSE Lead',
  'TL141155': 'GSE Lead',
  'TL151729': 'GSE Lead',
  'TL151994': 'GSE Lead',
  'TL130112': 'Senior GSE Officer',
  'TL130113': 'Senior GSE Officer',
  'TL130148': 'Senior GSE Officer',
  'TL141152': 'Senior GSE Officer',
  'TL151716': 'Senior GSE Officer',
  'TL151992': 'Senior GSE Officer',
  'TL152422': 'Senior GSE Officer',
  'TL130111': 'Senior GSE Officer',
  'TL130159': 'Senior GSE Officer',
  'TL151721': 'Senior GSE Officer',
  'TL152182': 'Senior GSE Officer',
  'TL152377': 'Senior GSE Officer',
  'TL152381': 'Senior GSE Officer',
  'TL152428': 'Senior GSE Officer',
  'TL152431': 'Senior GSE Officer',
  'TL152436': 'Senior GSE Officer',
  'TL162945': 'Senior GSE Officer',
  'TL163562': 'Senior GSE Officer',
  'TL174001': 'Senior GSE Officer',
  'TL174062': 'Senior GSE Officer',
  'TL174253': 'Senior GSE Officer',
  'TL174258': 'Senior GSE Officer',
  'TL174298': 'Senior GSE Officer',
  'TL184946': 'Senior GSE Officer',
  'TL185088': 'Senior GSE Officer',
  'TL185089': 'Senior GSE Officer',
  'TL141285': 'Senior GSE Officer'
};
const USER_IDS = Object.keys(USER_PROFILES);

// รายชื่อรหัสพนักงานมาตรฐานของระบบ (Built-in Known IDs)
const BUILTIN_KNOWN_IDS = new Set([
  ...Object.keys(ADMIN_PROFILES),
  ...Object.keys(MANAGER_PROFILES),
  ...Object.keys(SUPERVISOR_PROFILES),
  ...Object.keys(TECHNICIAN_PROFILES),
  ...Object.keys(USER_PROFILES)
]);
const DELETED_USERS_PROP_KEY = 'DELETED_USER_IDS_JSON_V1';

function getDeletedUserIdsSet() {
  try {
    const raw = PropertiesService.getScriptProperties().getProperty(DELETED_USERS_PROP_KEY);
    if (raw) {
      const arr = JSON.parse(raw);
      if (Array.isArray(arr)) {
        return new Set(arr.map(function(x) { return (x || '').toString().trim().toUpperCase(); }).filter(Boolean));
      }
    }
  } catch (e) {}
  return new Set();
}

function saveDeletedUserIdsSet(deletedSet) {
  try {
    const arr = Array.from(deletedSet || []);
    PropertiesService.getScriptProperties().setProperty(DELETED_USERS_PROP_KEY, JSON.stringify(arr));
  } catch (e) {}
}

/**
 * ตรวจสอบว่าเป็นแถวที่ระบบเก่าเคยสร้างอัตโนมัติตอนคนนอกสุ่มพิมพ์รหัส TLxxxxxx เข้ามาหรือไม่
 * (แถวที่สร้างอัตโนมัติเดิมจะมี fullName ว่าง หรือ fullName เท่ากับรหัส TLxxxxxx พอดี และไม่ได้อยู่ใน BUILTIN_KNOWN_IDS)
 */
function isAutoCreatedGuestRow(empId, fullName) {
  const id = (empId || '').toString().trim().toUpperCase();
  const name = (fullName || '').toString().trim();
  if (!id) return true;
  if (BUILTIN_KNOWN_IDS.has(id)) return false;
  if (!name || name.toUpperCase() === id) return true;
  return false;
}

function removeUserIdFromAllRoleLists(id) {
  delete ADMIN_PROFILES[id];
  const aIdx = ADMIN_IDS.indexOf(id);
  if (aIdx !== -1) ADMIN_IDS.splice(aIdx, 1);

  delete MANAGER_PROFILES[id];
  const mIdx = MANAGER_IDS.indexOf(id);
  if (mIdx !== -1) MANAGER_IDS.splice(mIdx, 1);

  delete SUPERVISOR_PROFILES[id];
  const sIdx = SUPERVISOR_IDS.indexOf(id);
  if (sIdx !== -1) SUPERVISOR_IDS.splice(sIdx, 1);

  delete TECHNICIAN_PROFILES[id];
  const tIdx = TECHNICIAN_IDS.indexOf(id);
  if (tIdx !== -1) TECHNICIAN_IDS.splice(tIdx, 1);

  delete USER_PROFILES[id];
  delete USER_DEPARTMENTS[id];
  const uIdx = USER_IDS.indexOf(id);
  if (uIdx !== -1) USER_IDS.splice(uIdx, 1);
}

const WO_SPREADSHEET_ID = '1luje0x1QXrhhucSvmO6h_k5Es91X8rCcJeP2Fet7uYs';

/**
 * getTechniciansList - ดึงรายชื่อช่างทั้งหมดสำหรับ Dropdown หน้าบ้าน
 */
const DYNAMIC_USERS_CACHE_KEY = 'DYNAMIC_USERS_SHEET_CACHE_V2';
let _dynamicUsersLoadedInRequest = false;

/**
 * ซิงค์รายชื่อผู้ใช้งานและสิทธิ์ (Admin / Manager / Supervisor / Technician / User) จากชีต Users
 * เพื่อให้รหัสพนักงานที่ Admin สร้างเพิ่มใหม่สามารถใช้งานสิทธิ์และแสดงใน Dropdown ช่างได้ทันที
 */
function ensureDynamicUserProfilesLoaded(forceRefresh) {
  if (_dynamicUsersLoadedInRequest && !forceRefresh) return;
  try {
    const deletedSet = getDeletedUserIdsSet();
    deletedSet.forEach(function(delId) {
      removeUserIdFromAllRoleLists(delId);
    });

    let rows = null;
    const cache = CacheService.getScriptCache();
    if (!forceRefresh) {
      const cached = cache.get(DYNAMIC_USERS_CACHE_KEY);
      if (cached) {
        try { rows = JSON.parse(cached); } catch(e) {}
      }
    }
    if (!rows) {
      const sheet = getUsersSheet();
      if (!sheet) return;
      const data = sheet.getDataRange().getValues();
      rows = [];
      for (let i = 1; i < data.length; i++) {
        const empId = (data[i][0] || '').toString().trim().toUpperCase();
        if (!empId) continue;
        const fullName = (data[i][1] || '').toString().trim();
        if (isAutoCreatedGuestRow(empId, fullName)) continue;
        rows.push({
          employeeId: empId,
          fullName: fullName,
          role: (data[i][2] || 'user').toString().trim().toLowerCase(),
          department: (data[i][3] || '').toString().trim(),
          tel: (data[i][4] || '').toString().trim()
        });
      }
      try {
        cache.put(DYNAMIC_USERS_CACHE_KEY, JSON.stringify(rows), 180);
      } catch(e) {}
    }

    rows.forEach(function(u) {
      const id = u.employeeId;
      if (deletedSet.has(id)) return;
      if (isAutoCreatedGuestRow(id, u.fullName)) return;
      const name = u.fullName || id;
      const role = u.role || 'user';
      // ลบออกจากกลุ่มสิทธิ์เดิมก่อน เพื่อรองรับกรณี Admin เปลี่ยน Role
      removeUserIdFromAllRoleLists(id);
      if (role === 'admin') {
        ADMIN_PROFILES[id] = name;
        if (!ADMIN_IDS.includes(id)) ADMIN_IDS.push(id);
      } else if (role === 'manager') {
        MANAGER_PROFILES[id] = name;
        if (!MANAGER_IDS.includes(id)) MANAGER_IDS.push(id);
      } else if (role === 'supervisor') {
        SUPERVISOR_PROFILES[id] = name;
        if (!SUPERVISOR_IDS.includes(id)) SUPERVISOR_IDS.push(id);
      } else if (role === 'technician') {
        TECHNICIAN_PROFILES[id] = name;
        if (!TECHNICIAN_IDS.includes(id)) TECHNICIAN_IDS.push(id);
      } else {
        USER_PROFILES[id] = name;
        if (u.department) USER_DEPARTMENTS[id] = u.department;
        if (!USER_IDS.includes(id)) USER_IDS.push(id);
      }
    });
    _dynamicUsersLoadedInRequest = true;
  } catch (err) {
    Logger.log('ensureDynamicUserProfilesLoaded warning: ' + err.message);
  }
}

function getTechniciansList() {
  ensureDynamicUserProfilesLoaded();
  const list = [];
  const seen = {};
  TECHNICIAN_IDS.forEach(function(id) {
    if (!id || seen[id]) return;
    seen[id] = true;
    list.push({
      employeeId: id,
      fullName: TECHNICIAN_PROFILES[id]
    });
  });
  SUPERVISOR_IDS.forEach(function(id) {
    if (!id || seen[id]) return;
    seen[id] = true;
    list.push({
      employeeId: id,
      fullName: SUPERVISOR_PROFILES[id]
    });
  });
  return list;
}

/**
 * login - ตรวจสอบรหัสพนักงาน (อนุญาตเฉพาะผู้ที่มีรายชื่อในระบบที่ User Admin ลงทะเบียนไว้เท่านั้น)
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

    const deletedSet = getDeletedUserIdsSet();
    if (deletedSet.has(empId)) {
      return {
        success: false,
        message: 'รหัสพนักงาน ' + empId + ' ไม่มีสิทธิ์เข้าใช้งานในระบบ กรุณาติดต่อ User Admin เพื่อเพิ่มรายชื่อผู้ใช้งาน'
      };
    }

    ensureDynamicUserProfilesLoaded();
    const isManager = MANAGER_IDS.includes(empId);
    const isSupervisor = SUPERVISOR_IDS.includes(empId);
    const isAdmin = ADMIN_IDS.includes(empId);
    const isTech = TECHNICIAN_IDS.includes(empId);
    const isGeneralUser = USER_IDS.includes(empId);
    const isRegisteredInMemory = isManager || isSupervisor || isAdmin || isTech || isGeneralUser;

    const managerFullName = MANAGER_PROFILES[empId] || '';
    const supervisorFullName = SUPERVISOR_PROFILES[empId] || '';
    const adminFullName = ADMIN_PROFILES[empId] || '';
    const techFullName = TECHNICIAN_PROFILES[empId] || '';
    const generalUserFullName = USER_PROFILES[empId] || '';
    const generalUserDept = USER_DEPARTMENTS[empId] || '';

    let expectedRole = 'user';
    let expectedName = '';
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
    } else if (isGeneralUser) {
      expectedRole = 'user';
      expectedName = generalUserFullName;
      expectedDept = generalUserDept || 'GSE';
    }

    const sheet = getUsersSheet();
    const data = sheet ? sheet.getDataRange().getValues() : [];

    // ค้นหาใน sheet Users
    let existingUser = null;
    let userRowIndex = -1;
    for (let i = 1; i < data.length; i++) {
      if (data[i][0] && data[i][0].toString().trim().toUpperCase() === empId) {
        const sheetName = (data[i][1] || '').toString().trim();
        const sheetRole = (data[i][2] || '').toString().trim().toLowerCase();
        const sheetDept = (data[i][3] || '').toString().trim();
        const sheetTel = (data[i][4] || '').toString().trim();

        // หากพบแถวที่เคยถูกสร้างอัตโนมัติในอดีตโดยไม่มีชื่อจริง (และไม่ได้อยู่ในรายชื่อมาตรฐาน) ให้ข้ามและไม่อนุญาตให้เข้า
        if (isAutoCreatedGuestRow(empId, sheetName)) {
          continue;
        }

        const finalName = (sheetName && sheetName !== empId) ? sheetName : (expectedName || sheetName || empId);
        const finalRole = sheetRole || expectedRole || 'user';
        const finalDept = sheetDept || expectedDept || '';

        existingUser = {
          employeeId: empId,
          fullName: finalName,
          role: finalRole,
          department: finalDept,
          tel: sheetTel
        };
        userRowIndex = i + 1;
        break;
      }
    }

    // บล็อกผู้ใช้งานที่ไม่มีรายชื่อในระบบ (ห้ามสร้าง User อัตโนมัติเด็ดขาด)
    if (!existingUser && !isRegisteredInMemory) {
      return {
        success: false,
        message: 'รหัสพนักงาน ' + empId + ' ยังไม่มีรายชื่อในระบบ กรุณาติดต่อ User Admin เพื่อเพิ่มรหัสผู้ใช้งานก่อนเข้าสู่ระบบ'
      };
    }

    if (existingUser) {
      if (sheet && userRowIndex > 0) {
        if (expectedRole !== 'user' && existingUser.role !== expectedRole && BUILTIN_KNOWN_IDS.has(empId)) {
          // ซิงค์เฉพาะกรณีที่แถวในชีตเคยถูกสร้างด้วยค่าว่าง
          if (!(data[userRowIndex - 1][2] || '').toString().trim()) {
            sheet.getRange(userRowIndex, 3).setValue(expectedRole);
            existingUser.role = expectedRole;
          }
        }
        if (expectedName && expectedName !== empId && (data[userRowIndex - 1][1] || '').toString().trim() === empId) {
          sheet.getRange(userRowIndex, 2).setValue(expectedName);
        }
        if (expectedDept && !(data[userRowIndex - 1][3] || '').toString().trim()) {
          sheet.getRange(userRowIndex, 4).setValue(expectedDept);
        }
      }
      return {
        success: true,
        user: existingUser
      };
    }

    // กรณีเป็นพนักงานที่มีรายชื่อในระบบมาตรฐาน (Built-in) แต่ยังไม่มีแถวในชีต Users
    const registeredBuiltInUser = {
      employeeId: empId,
      fullName: expectedName || empId,
      role: expectedRole,
      department: expectedDept,
      tel: ''
    };

    if (sheet) {
      sheet.appendRow([registeredBuiltInUser.employeeId, registeredBuiltInUser.fullName, registeredBuiltInUser.role, registeredBuiltInUser.department, '']);
    }

    return {
      success: true,
      user: registeredBuiltInUser
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
        } else if (headerName === 'EstimateDate' || headerName === 'CompleteDate' || headerName === 'TechnicianDate' || headerName === 'SupervisorDate' || headerName === 'ManagerDate' || headerName === 'AcceptedDate') {
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
          } else if (headerName === 'EstimateDate' || headerName === 'CompleteDate' || headerName === 'TechnicianDate' || headerName === 'SupervisorDate' || headerName === 'ManagerDate' || headerName === 'AcceptedDate') {
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

    // วันที่และเวลาแจ้งซ่อม - ถ้าไม่ได้กรอกมาให้ใช้วันที่และเวลาปัจจุบันอัตโนมัติ (ใช้ yyyy-MM-dd เพื่อไม่ให้ชีตตีความวัน/เดือนสลับ)
    const informDate = (data.informDate && data.informDate.toString().trim())
      ? data.informDate.toString().trim()
      : Utilities.formatDate(now, 'Asia/Bangkok', 'yyyy-MM-dd');

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
      'กำลังซ่อม',                    // N - สถานะ (default)
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

    // ปิดการส่งข้อความอัตโนมัติผ่าน LINE Messaging API Bot (เนื่องจากโควต้าข้อความฟรีรายเดือนของบอทหมด)
    // เปลี่ยนเป็นให้ผู้แจ้งกดปุ่ม "แชร์เข้ากลุ่ม LINE / คัดลอกข้อความ" ในหน้าเว็บแอปแทน
    /*
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
    */

    SpreadsheetApp.flush();
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
    const oldInformDate = allData[rowIndex - 1][2];
    const oldEquipmentCode = (allData[rowIndex - 1][5] || '').toString().trim();

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
      let statusToSet = data.status || 'กำลังซ่อม';
      if (statusToSet === 'รอดำเนินการ') {
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

    // ซิงค์ข้อมูลไปยัง Sheet "บันทึกการเปิด W/O" (ส่งค่าเดิมไปด้วยเพื่อไม่ให้สร้างแถวซ้ำเมื่อเปลี่ยนรหัสอุปกรณ์หรือวันที่)
    const actualUuid = (allData[rowIndex - 1][0] != null) ? allData[rowIndex - 1][0].toString().trim() : targetId;
    syncToWoSheetOnUpdate(actualUuid, data, currentAdminId, role, {
      oldEquipmentCode: oldEquipmentCode,
      oldInformDate: oldInformDate
    });

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

        // ลบออกจาก Sheet "บันทึกการเปิด W/O" ด้วย และตรวจสอบผลลัพธ์ไม่ให้กลืน error เงียบๆ
        let woRes = { success: false, error: 'ไม่สามารถเรียก deleteFromWoSheet' };
        try {
          woRes = deleteFromWoSheet(matchUuid, informDate, woNo, eqCode) || { success: true, deletedCount: 0 };
          SpreadsheetApp.flush();
        } catch (woErr) {
          Logger.log('Error in deleteFromWoSheet: ' + woErr.message);
          woRes = { success: false, error: woErr.message };
        }

        clearDashboardCache();
        const label = targetReqId || targetUuid;
        if (!woRes.success) {
          return {
            success: true,
            woWarning: true,
            message: 'ลบใบงาน ' + label + ' ออกจากระบบแล้ว แต่ลบในชีต W/O ไม่สำเร็จ (' + (woRes.error || 'unknown') + ') กรุณากดซิงค์/กู้คืนชีต W/O'
          };
        }
        return { success: true, message: 'ลบใบงาน ' + label + ' เรียบร้อยแล้ว' };
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
 * deleteMultipleRequests - ลบใบงานหลายรายการพร้อมกัน (Admin only)
 * @param {Array<Object>} items - รายการ [{ uuid, requestId }, ...]
 * @param {string} adminEmpId - รหัสพนักงาน Admin
 * @returns {Object} { success: boolean, deletedCount: number, message?: string }
 */
function deleteMultipleRequests(items, adminEmpId) {
  ensureDynamicUserProfilesLoaded();
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(25000);
  } catch (e) {
    return { success: false, message: 'ระบบกำลังทำงาน กรุณาลองใหม่อีกครั้ง' };
  }

  try {
    const empId = (adminEmpId || '').toString().trim().toUpperCase();
    if (!ADMIN_IDS.includes(empId)) {
      return { success: false, message: 'คุณไม่มีสิทธิ์ในการลบข้อมูลหลายรายการ (เฉพาะ Admin เท่านั้น)' };
    }

    if (!items || !Array.isArray(items) || items.length === 0) {
      return { success: false, message: 'ไม่มีรายการที่เลือกสำหรับลบ' };
    }

    const sheet = getRequestsSheet();
    const data = sheet.getDataRange().getValues();
    if (data.length <= 1) {
      return { success: false, message: 'ไม่มีข้อมูลในระบบ' };
    }

    const headers = data[0];
    const colU = headers.indexOf('UUID') >= 0 ? headers.indexOf('UUID') : 0;
    const colR = headers.indexOf('RequestID') >= 0 ? headers.indexOf('RequestID') : 1;
    const colD = headers.indexOf('InformDate') >= 0 ? headers.indexOf('InformDate') : 2;
    const colE = headers.indexOf('EquipmentCode') >= 0 ? headers.indexOf('EquipmentCode') : 5;
    const colW = headers.indexOf('WorkOrderNo') >= 0 ? headers.indexOf('WorkOrderNo') : 17;

    // เตรียม Set ของ UUID และ RequestID ที่ต้องการลบ
    const targetSet = new Set();
    items.forEach(function(it) {
      if (!it) return;
      if (typeof it === 'string') {
        const s = it.trim().toLowerCase();
        if (s) targetSet.add(s);
      } else {
        const u = (it.uuid || it.UUID || '').toString().trim().toLowerCase();
        const r = (it.requestId || it.RequestID || '').toString().trim().toLowerCase();
        if (u) targetSet.add(u);
        if (r) targetSet.add(r);
      }
    });

    if (targetSet.size === 0) {
      return { success: false, message: 'ไม่พบรหัสใบงานที่ต้องการลบ' };
    }

    const rowsToDelete = []; // 1-based row numbers in Requests sheet
    const deletedItemsInfo = [];

    for (let i = 1; i < data.length; i++) {
      const row = data[i];
      const rowUuid = (row[colU] != null) ? row[colU].toString().trim() : '';
      const rowReqId = (row[colR] != null) ? row[colR].toString().trim() : '';
      const r0 = rowUuid.toLowerCase();
      const r1 = rowReqId.toLowerCase();

      if ((r0 && targetSet.has(r0)) || (r1 && targetSet.has(r1))) {
        rowsToDelete.push(i + 1);
        deletedItemsInfo.push({
          uuid: rowUuid,
          requestId: rowReqId,
          informDate: row[colD],
          eqCode: row[colE],
          woNo: row[colW]
        });
      }
    }

    if (rowsToDelete.length === 0) {
      return { success: false, message: 'ไม่พบรายการที่ต้องการลบในระบบ' };
    }

    // ลบจากล่างขึ้นบน (descending) เพื่อไม่ให้ row index เลื่อน
    rowsToDelete.sort(function(a, b) { return b - a; });
    for (let d = 0; d < rowsToDelete.length; d++) {
      sheet.deleteRow(rowsToDelete[d]);
    }
    SpreadsheetApp.flush();

    // ลบออกจากชีต "บันทึกการเปิด W/O" ด้วย พร้อมเก็บ error หากมีรายการที่ลบในชีต W/O ไม่สำเร็จ
    const woErrors = [];
    deletedItemsInfo.forEach(function(info) {
      try {
        const woRes = deleteFromWoSheet(info.uuid, info.informDate, info.woNo, info.eqCode);
        if (woRes && !woRes.success && woRes.error) {
          woErrors.push((info.requestId || info.uuid || info.eqCode || '') + ': ' + woRes.error);
        }
      } catch (woErr) {
        Logger.log('Error deleting from WO sheet in bulk: ' + woErr.message);
        woErrors.push((info.requestId || info.uuid || info.eqCode || '') + ': ' + woErr.message);
      }
    });
    SpreadsheetApp.flush();

    clearDashboardCache();
    if (woErrors.length > 0) {
      return {
        success: true,
        woWarning: true,
        deletedCount: rowsToDelete.length,
        message: 'ลบรายการในระบบจำนวน ' + rowsToDelete.length + ' ใบงานแล้ว แต่มีปัญหาลบในชีต W/O (' + woErrors[0] + ') กรุณากดซิงค์/กู้คืนชีต W/O'
      };
    }
    return {
      success: true,
      deletedCount: rowsToDelete.length,
      message: 'ลบรายการที่เลือกจำนวน ' + rowsToDelete.length + ' ใบงานเรียบร้อยแล้ว'
    };
  } catch (error) {
    return { success: false, message: 'เกิดข้อผิดพลาด: ' + error.message };
  } finally {
    try {
      lock.releaseLock();
    } catch (e) {}
  }
}

/**
 * deleteWoMatchesInSheet_ - ลบแถวที่ตรงกับ UUID/W/O/รหัสอุปกรณ์ ในแท็บ W/O ที่ระบุ (ลบทุกแถวซ้ำถ้ามี)
 */
function deleteWoMatchesInSheet_(sheet, uuid, woNo, eqCode) {
  let deleted = 0;
  const headerRow = findWoHeaderRow(sheet);
  for (let pass = 0; pass < 10; pass++) {
    const targetRow = findWoRowByUUID(sheet, headerRow, uuid, woNo, eqCode);
    if (!targetRow) break;
    sheet.deleteRow(targetRow);
    deleted++;
    // รอบถัดไปหาเฉพาะ UUID + รหัสอุปกรณ์ ไม่ใช้ woNo/eqCode fallback ซ้ำซ้อน
    woNo = null;
    if (!uuid) break;
  }
  return deleted;
}

/**
 * deleteFromWoSheet - ลบแถวใน Sheet "บันทึกการเปิด W/O" เมื่อมีการลบใบแจ้งซ่อม
 * ค้นหาจากแท็บเดือนของ informDate ก่อน ถ้าไม่พบจะค้นข้ามไปยังแท็บเดือนปัจจุบันและแท็บเดือนอื่นๆ ด้วย UUID (ไม่สร้างแท็บใหม่เปล่า)
 * @returns {Object} { success: boolean, deletedCount: number, error?: string }
 */
function deleteFromWoSheet(uuid, informDate, woNo, eqCode) {
  let lastError = null;
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const ss = SpreadsheetApp.openById(WO_SPREADSHEET_ID);
      const primaryTabName = getWoSheetTabName(parseDateString(informDate));
      const currentTabName = getWoSheetTabName(new Date());

      const candidateSheets = [];
      const seenNames = {};
      const addCandidate = function(sh) {
        if (sh && !seenNames[sh.getName()]) {
          seenNames[sh.getName()] = true;
          candidateSheets.push(sh);
        }
      };

      addCandidate(ss.getSheetByName(primaryTabName));
      addCandidate(ss.getSheetByName(currentTabName));

      let deletedCount = 0;
      for (let i = 0; i < candidateSheets.length; i++) {
        deletedCount += deleteWoMatchesInSheet_(candidateSheets[i], uuid, woNo, eqCode);
      }

      // หากยังไม่พบและมี UUID ให้ค้นหาข้ามแท็บ "หน้าเก็บข้อมูล ..." อื่นๆ เฉพาะด้วย UUID เพื่อกันกรณี InformDate ผิดเดือน
      const cleanUuid = (uuid != null) ? uuid.toString().trim() : '';
      if (deletedCount === 0 && cleanUuid) {
        const allSheets = ss.getSheets();
        for (let s = 0; s < allSheets.length; s++) {
          const sh = allSheets[s];
          const name = sh.getName();
          if (seenNames[name] || !name.startsWith('หน้าเก็บข้อมูล')) continue;
          seenNames[name] = true;
          deletedCount += deleteWoMatchesInSheet_(sh, cleanUuid, null, eqCode);
          if (deletedCount > 0) break;
        }
      }

      return { success: true, deletedCount: deletedCount };
    } catch (e) {
      lastError = e;
      Logger.log('Error in deleteFromWoSheet (attempt ' + (attempt + 1) + '): ' + e.message);
      if (attempt === 0) {
        try { Utilities.sleep(300); } catch (sleepErr) {}
      }
    }
  }
  return { success: false, deletedCount: 0, error: lastError ? lastError.message : 'Unknown error' };
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

      if (status === 'กำลังซ่อม' || status === 'รอดำเนินการ' || !status) {
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
 * getPmOriginalPdfBytes - ดึงข้อมูล Binary Bytes (Byte[] / Uint8Array) ของไฟล์ PDF Task Card ต้นฉบับจาก Google Drive
 * โดยไม่ใช้ Base64 แม้แต่ไบต์เดียว เพื่อให้ Mozilla PDF.js นำไปวาดแบบ Vector 300 DPI บน <canvas>
 */
function getPmOriginalPdfBytes(equipmentCode, checkLevel, equipmentName, templateKey) {
  try {
    let cleanLvl = (checkLevel || 'A').toString().trim().toUpperCase();
    cleanLvl = cleanLvl.replace(/\bPM\b/g, '').replace(/\bCHECK\b/g, '').replace(/\bSCHEDULE\b/g, '').trim();
    const monthsList = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    if (cleanLvl === 'MONTHLY' || cleanLvl === 'M' || monthsList.indexOf(cleanLvl) !== -1) cleanLvl = 'A';
    else if (cleanLvl === 'C' || /\bC\b/.test(cleanLvl)) cleanLvl = 'C';
    else if (cleanLvl === 'B' || /\bB\b/.test(cleanLvl)) cleanLvl = 'B';
    else cleanLvl = 'A';

    let modelKey = '';
    if (typeof resolvePmTaskCard === 'function' && equipmentCode) {
      try {
        const tplObj = resolvePmTaskCard(equipmentCode, cleanLvl, equipmentName);
        if (tplObj && tplObj.folder) modelKey = tplObj.folder;
      } catch (eTpl) {}
    }

    let pdfInfo = null;
    try {
      const customCfg = getCustomPmTemplatesConfig();
      if (customCfg && Array.isArray(customCfg.upserts)) {
        const normEq = (equipmentCode || '').toString().trim().toUpperCase();
        const reqModelKey = (templateKey || '').toString().replace(/-[ABC]-TLM$/i, '-TLM');
        const matchedCustom = customCfg.upserts.find(function(u) {
          if (u.checkLevel !== cleanLvl) return false;
          if (u.mappedGseCodes && u.mappedGseCodes.split(/[\s,;]+/).map(function(s){return s.trim().toUpperCase();}).indexOf(normEq) !== -1) return true;
          return u.modelKey === modelKey || u.modelKey === reqModelKey;
        });
        if (matchedCustom && matchedCustom.pdfFileId) {
          const fid = matchedCustom.pdfFileId.trim();
          pdfInfo = {
            modelKey: matchedCustom.modelKey,
            checkLevel: cleanLvl,
            fileId: fid,
            fileName: matchedCustom.modelKey.replace(/-TLM$/, '') + '-' + cleanLvl + '-TLM.pdf',
            viewUrl: 'https://drive.google.com/file/d/' + fid + '/view?usp=drivesdk',
            previewUrl: 'https://drive.google.com/file/d/' + fid + '/preview',
            downloadUrl: 'https://drive.google.com/uc?export=download&id=' + fid
          };
        }
      }
    } catch (eCustomPdf) {}

    if (!pdfInfo && typeof resolvePmPdfTemplate === 'function') {
      pdfInfo = resolvePmPdfTemplate(equipmentCode, cleanLvl, equipmentName, modelKey);
    }

    if (!pdfInfo || !pdfInfo.downloadUrl) {
      return {
        success: false,
        mode: 'VECTOR_HTML',
        modelKey: modelKey,
        checkLevel: cleanLvl,
        message: 'ใช้การเรนเดอร์ Vector HTML A4 Official Task Card สำหรับรุ่นนี้'
      };
    }

    const resp = UrlFetchApp.fetch(pdfInfo.downloadUrl, {
      followRedirects: true,
      muteHttpExceptions: true
    });

    if (resp.getResponseCode() !== 200) {
      return {
        success: false,
        mode: 'VECTOR_HTML',
        modelKey: pdfInfo.modelKey,
        checkLevel: pdfInfo.checkLevel,
        viewUrl: pdfInfo.viewUrl,
        message: 'HTTP ' + resp.getResponseCode()
      };
    }

    const bytes = resp.getContent();
    // ตรวจสอบ Header 4 ไบต์แรกว่าเป็น %PDF (37, 80, 68, 70)
    if (!bytes || bytes.length < 500 || bytes[0] !== 37 || bytes[1] !== 80 || bytes[2] !== 68 || bytes[3] !== 70) {
      return {
        success: false,
        mode: 'VECTOR_HTML',
        modelKey: pdfInfo.modelKey,
        checkLevel: pdfInfo.checkLevel,
        viewUrl: pdfInfo.viewUrl,
        message: 'เนื้อหาไฟล์ไม่ใช่ PDF Binary'
      };
    }

    return {
      success: true,
      mode: 'PDFJS_BINARY',
      bytes: bytes,
      fileName: pdfInfo.fileName,
      fileId: pdfInfo.fileId,
      viewUrl: pdfInfo.viewUrl,
      previewUrl: pdfInfo.previewUrl,
      modelKey: pdfInfo.modelKey,
      checkLevel: pdfInfo.checkLevel
    };
  } catch (e) {
    Logger.log('Error in getPmOriginalPdfBytes: ' + e.message);
    return {
      success: false,
      mode: 'VECTOR_HTML',
      message: e.message
    };
  }
}

/**
 * getPmTemplatePages - ยกเลิกการใช้ Base64 ถาวร (คืนค่า [] เพื่อให้ระบบใช้ PDF.js Binary / Vector A4 แทน)
 */
function getPmTemplatePages(templateKey) {
  return [];
}

/**
 * getDashboardData - ดึงข้อมูล Dashboard ครบในการเรียก 1 ครั้ง พร้อมระบบ CacheService
 * ตรวจสอบแคชก่อน ถ้ามีจะตอบกลับภายในเสี้ยววินาที ลดโหลด Google Sheet ลง 90%
 * รองรับ forceRefresh (เมื่อผู้ใช้กดปุ่มซิงค์ข้อมูลบน Navbar เพื่อดึงข้อมูลจริงจาก Google Sheet เสมอ)
 */
function getDashboardData(employeeId, role, forceRefresh) {
  try {
    // 1. ตรวจสอบ Server Cache ก่อน (TTL 60 วินาที) - ข้ามแคชหากสั่ง forceRefresh (เช่น กดปุ่มรีเฟรช/ซิงค์)
    const cache = CacheService.getScriptCache();
    const needBackfillWoDates = !cache.get('WO_REPAIR_ORPHAN_V171');
    if (!forceRefresh && !needBackfillWoDates) {
      const cachedData = cache.get('DASHBOARD_DATA_CACHE');
      if (cachedData) {
        try {
          return JSON.parse(cachedData);
        } catch(parseErr) {}
      }
    } else {
      try {
        cache.remove('DASHBOARD_DATA_CACHE');
      } catch(rmErr) {}
      // เมื่อสั่ง forceRefresh หรือรันซิงค์อัตโนมัติ ให้ตรวจสอบ Note UUID, เติม "วันที่ปิด" ของช่างที่ตกหล่น และเก็บกวาดแถวกำพร้าใน Sheet W/O
      try {
        repairWoMonthSheetNotes(new Date());
        cache.put('WO_REPAIR_ORPHAN_V171', '1', 21600);
      } catch(repErr) {
        Logger.log('repairWoMonthSheetNotes warning: ' + repErr.message);
      }
    }

    // 2. ถ้าไม่มีแคช ให้อ่านจากชีตแบบประหยัดรอบ (Lean Read)
    const sheet = getRequestsSheet();
    ensureRequestHeaders(sheet);
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
      if (status === 'กำลังซ่อม' || status === 'รอดำเนินการ' || !status) {
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
      counts: { total: total, pending: pending, inProgress: inProgress, waitingReview: waitingReview, completed: completed },
      customPmConfig: getCustomPmTemplatesConfig()
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
  if (dateVal instanceof Date) return isNaN(dateVal.getTime()) ? new Date() : dateVal;
  const s = dateVal.toString().trim();
  if (s.indexOf('/') !== -1) {
    const parts = s.split('/');
    if (parts.length === 3) {
      const p0 = parseInt(parts[0], 10);
      const p1 = parseInt(parts[1], 10);
      let year = parseInt(parts[2], 10);
      if (year > 2400) year -= 543;
      if (p0 >= 1 && p0 <= 12 && p1 > 12 && p1 <= 31) {
        return new Date(year, p0 - 1, p1);
      }
      return new Date(year, p1 - 1, p0);
    }
  } else if (s.indexOf('-') !== -1) {
    const parts = s.split('-');
    if (parts.length === 3) {
      let year = parseInt(parts[0], 10);
      if (year > 2400) year -= 543;
      return new Date(year, parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
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
    const woSheetStatusIdx = headers.indexOf('WoSheetStatus');
    const woClosedDateIdx = headers.indexOf('WoClosedDate');
    const woScanDocIdx = headers.indexOf('WoScanDoc');

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
          actionBy3: (row[a3Idx] || '').toString().trim(),
          woSheetStatus: woSheetStatusIdx !== -1 ? (row[woSheetStatusIdx] || '').toString().trim().toUpperCase() : '',
          woClosedDate: woClosedDateIdx !== -1 ? row[woClosedDateIdx] : '',
          woScanDoc: woScanDocIdx !== -1 ? (row[woScanDocIdx] || '').toString().trim().toUpperCase() : ''
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
      if (item.status === 'เสร็จสิ้น' || item.status === 'เสร็จสิ้น (Return to Service)' || item.woSheetStatus === 'CLOSED') {
        woStatus = 'CLOSED';
        const cdVal = item.completeDate || item.woClosedDate;
        if (cdVal) {
          const cd = parseDateString(cdVal);
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

      const scanDoc = (item.woScanDoc === 'YES' || item.woScanDoc === 'NO')
        ? item.woScanDoc
        : ((item.workOrderNo || woStatus === 'CLOSED') ? 'NO' : '');
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

    // ขยายจำนวนแถวของชีตอัตโนมัติหากมีรายการมากกว่า 100+ แถว
    const neededWoRows = headerRow + rowsValues.length + 10;
    if (sheet.getMaxRows() < neededWoRows) {
      sheet.insertRowsAfter(sheet.getMaxRows(), neededWoRows - sheet.getMaxRows());
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
 * repairWoMonthSheetNotes - ตรวจสอบและแก้ไข Note UUID ใน Sheet W/O ให้ตรงกับรหัสอุปกรณ์จริงใน Requests Sheet
 * แก้ไขปัญหาเมื่อมีคน copy แถวใน Google Sheet แล้วติด Note UUID เดิมของรถคันอื่นมา (เช่น TLM-PS-030 ติด UUID ของ TLM-TR-028)
 */
/**
 * ดึงวันที่ช่างปิดใบงาน (CompleteDate / TechnicianDate / PmChecklistData.completeDate) ในรูปแบบ M/D/YYYY สำหรับชีต W/O
 */
function resolveTechnicianWoCloseDateStr(rowData, fallbackDate) {
  if (rowData) {
    let rawDate = rowData[25] || rowData[28] || '';
    if (!rawDate) {
      const jsonStr = rowData[52] || rowData[20] || '';
      if (jsonStr && typeof jsonStr === 'string' && jsonStr.trim().indexOf('{') === 0) {
        try {
          const parsed = JSON.parse(jsonStr);
          rawDate = parsed.completeDate || parsed.completedAt || '';
        } catch (e) {}
      }
    }
    if (rawDate) {
      const d = parseDateString(rawDate);
      if (d) {
        return (d.getMonth() + 1) + '/' + d.getDate() + '/' + d.getFullYear();
      }
    }
  }
  if (fallbackDate instanceof Date && !isNaN(fallbackDate.getTime())) {
    return (fallbackDate.getMonth() + 1) + '/' + fallbackDate.getDate() + '/' + fallbackDate.getFullYear();
  }
  return '';
}

function repairWoMonthSheetNotes(dateObj) {
  try {
    const targetDate = dateObj || new Date();
    const sheet = getOrCreateWoMonthSheet(targetDate);
    if (!sheet) return { success: false, message: 'ไม่พบชีต W/O ประจำเดือน' };

    const headerRow = findWoHeaderRow(sheet);
    const lastRow = sheet.getLastRow();
    const numRows = lastRow - headerRow;
    if (numRows <= 0) return { success: true, fixedCount: 0 };

    const eqCol = sheet.getRange(headerRow + 1, 1, numRows, 1).getValues();
    const dmgCol = sheet.getRange(headerRow + 1, 2, numRows, 1).getValues();
    const woCol = sheet.getRange(headerRow + 1, 4, numRows, 1).getValues();
    const statusCol = sheet.getRange(headerRow + 1, 5, numRows, 1).getValues();
    const scanCol = sheet.getRange(headerRow + 1, 6, numRows, 1).getValues();
    const closeDateCol = sheet.getRange(headerRow + 1, 10, numRows, 1).getValues();
    const notesRange = sheet.getRange(headerRow + 1, 1, numRows, 1);
    const notes = notesRange.getNotes();

    const reqSheet = getRequestsSheet();
    ensureRequestHeaders(reqSheet);
    const reqData = reqSheet.getDataRange().getValues();
    if (reqData.length <= 1) return { success: true, fixedCount: 0 };

    const headers = reqData[0];
    const uuidIdx = headers.indexOf('UUID');
    const eqIdx = headers.indexOf('EquipmentCode');
    const dmgIdx = headers.indexOf('DamageAppearance');
    const woIdx = headers.indexOf('WorkOrderNo');
    const woScanIdx = headers.indexOf('WoScanDoc');

    // สร้าง Map: UUID -> EqCode และ EqCode+Dmg -> UUID
    const uuidToEq = {};
    const uuidToRow = {};
    const uuidToScan = {};
    const uuidToTechCloseDate = {};
    const eqDmgToUuid = {};
    const eqToUuid = {};
    const woToUuid = {};

    for (let r = 1; r < reqData.length; r++) {
      const u = (reqData[r][uuidIdx] != null) ? reqData[r][uuidIdx].toString().trim() : '';
      const eq = (reqData[r][eqIdx] != null) ? reqData[r][eqIdx].toString().trim().toUpperCase() : '';
      const dmg = (reqData[r][dmgIdx] != null) ? reqData[r][dmgIdx].toString().trim() : '';
      const wo = (woIdx !== -1 && reqData[r][woIdx] != null) ? reqData[r][woIdx].toString().trim().replace(/\D/g, '') : '';
      const sc = (woScanIdx !== -1 && reqData[r][woScanIdx] != null) ? reqData[r][woScanIdx].toString().trim().toUpperCase() : '';
      if (u) {
        uuidToRow[u] = r + 1;
        uuidToScan[u] = sc;
        const techCloseDateStr = resolveTechnicianWoCloseDateStr(reqData[r], null);
        if (techCloseDateStr) {
          uuidToTechCloseDate[u] = techCloseDateStr;
        }
        if (eq) uuidToEq[u] = eq;
        if (eq && dmg) eqDmgToUuid[eq + '||' + dmg] = u;
        if (eq) eqToUuid[eq] = u;
        if (wo) woToUuid[wo] = u;
      }
    }

    let fixedCount = 0;
    const newNotes = [];
    const orphanCandidates = []; // แถวที่ติด UUID: ของระบบแต่ไม่มีอยู่ใน Requests และยังไม่มีเลข W/O

    for (let i = 0; i < numRows; i++) {
      const cellEq = (eqCol[i][0] != null) ? eqCol[i][0].toString().trim().toUpperCase() : '';
      const cellDmg = (dmgCol[i][0] != null) ? dmgCol[i][0].toString().trim() : '';
      const cellWo = (woCol[i][0] != null) ? woCol[i][0].toString().trim().replace(/\D/g, '') : '';
      const cellStatus = (statusCol[i][0] != null) ? statusCol[i][0].toString().trim().toUpperCase() : '';
      const cellScan = (scanCol[i][0] != null) ? scanCol[i][0].toString().trim().toUpperCase() : '';
      const cellCloseDate = (closeDateCol[i][0] != null) ? closeDateCol[i][0].toString().trim() : '';
      let currentNote = (notes[i][0] != null) ? notes[i][0].toString().trim() : '';
      let curUuid = '';
      if (currentNote.indexOf('UUID:') === 0) {
        curUuid = currentNote.substring(5).trim();
      }

      let needFix = false;
      let correctUuid = curUuid;
      const isSystemUuid = curUuid && (/^[0-9a-f]{8}-[0-9a-f]{4}-/i.test(curUuid) || curUuid.indexOf('MOCK-') === 0);

      if (cellEq) {
        // ตรวจสอบว่า UUID ปัจจุบันเป็นของรถคันอื่นหรือไม่ หรือไม่มีใน Requests แล้ว
        if (curUuid && uuidToEq[curUuid] && uuidToEq[curUuid] !== cellEq) {
          // Note นี้เป็นของรถคันอื่น! (เกิดจาก Copy แถวใน Google Sheet)
          needFix = true;
          correctUuid = (cellWo && woToUuid[cellWo]) || eqDmgToUuid[cellEq + '||' + cellDmg] || eqToUuid[cellEq] || '';
        } else if (!curUuid) {
          // แถวนี้ยังไม่มี Note
          needFix = true;
          correctUuid = (cellWo && woToUuid[cellWo]) || eqDmgToUuid[cellEq + '||' + cellDmg] || eqToUuid[cellEq] || '';
        } else if (isSystemUuid && !uuidToRow[curUuid]) {
          // UUID นี้ถูกลบออกจาก Requests แล้ว — ลองเช็คก่อนว่ามีเลข W/O หรืออาการตรงกับใบอื่นหรือไม่
          const rematchUuid = (cellWo && woToUuid[cellWo]) || eqDmgToUuid[cellEq + '||' + cellDmg] || '';
          if (rematchUuid) {
            needFix = true;
            correctUuid = rematchUuid;
          } else if (!cellWo) {
            // แถวกำพร้าจากใบงานที่ถูกลบไปแล้ว และยังไม่มีการเปิดเลข W/O
            orphanCandidates.push({ rowNum: headerRow + 1 + i, uuid: curUuid });
          }
        }
      }

      if (needFix && correctUuid) {
        newNotes.push(['UUID:' + correctUuid]);
        fixedCount++;
      } else {
        newNotes.push([currentNote]);
      }

      // เติม "วันที่ปิด" (Col 10) อัตโนมัติจากวันที่ช่างปิดใบงาน หากในชีต W/O ยังว่างอยู่
      if (correctUuid && uuidToTechCloseDate[correctUuid] && !cellCloseDate && (cellStatus === 'COMPLETE' || cellStatus === 'CLOSED' || uuidToTechCloseDate[correctUuid])) {
        sheet.getRange(headerRow + 1 + i, 10).setValue(uuidToTechCloseDate[correctUuid]);
        fixedCount++;
      }

      // ซิงค์สถานะสแกนเอกสาร (Col 6: YES/NO) กลับมาที่ Requests sheet หากมีการแก้ไขในชีต W/O
      if (correctUuid && uuidToRow[correctUuid] && woScanIdx !== -1 && (cellScan === 'YES' || cellScan === 'NO')) {
        if (uuidToScan[correctUuid] !== cellScan) {
          reqSheet.getRange(uuidToRow[correctUuid], woScanIdx + 1).setValue(cellScan);
          uuidToScan[correctUuid] = cellScan;
        }
      }
    }

    if (fixedCount > 0) {
      notesRange.setNotes(newNotes);
      SpreadsheetApp.flush();
    }

    // ลบแถวกำพร้าหลังจาก notesRange.setNotes() เพื่อไม่ให้ตำแหน่งแถวเลื่อน และ re-check UUID ใน Requests อีกครั้งกัน race condition
    let orphanDeletedCount = 0;
    if (orphanCandidates.length > 0) {
      const freshLastRow = reqSheet.getLastRow();
      const freshUuidSet = {};
      if (freshLastRow > 1) {
        const freshUuids = reqSheet.getRange(2, uuidIdx + 1, freshLastRow - 1, 1).getValues();
        for (let f = 0; f < freshUuids.length; f++) {
          const fu = (freshUuids[f][0] != null) ? freshUuids[f][0].toString().trim() : '';
          if (fu) freshUuidSet[fu] = true;
        }
      }
      const rowsToDel = [];
      for (let o = 0; o < orphanCandidates.length; o++) {
        if (!freshUuidSet[orphanCandidates[o].uuid]) {
          rowsToDel.push(orphanCandidates[o].rowNum);
        }
      }
      rowsToDel.sort(function(a, b) { return b - a; });
      for (let d = 0; d < rowsToDel.length; d++) {
        sheet.deleteRow(rowsToDel[d]);
        orphanDeletedCount++;
      }
      if (orphanDeletedCount > 0) {
        SpreadsheetApp.flush();
      }
    }

    return { success: true, fixedCount: fixedCount, orphanDeletedCount: orphanDeletedCount };
  } catch (err) {
    Logger.log('Error in repairWoMonthSheetNotes: ' + err.message);
    return { success: false, error: err.message };
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
      const eqCol = (optEqNo && optEqNo.toString().trim()) ? sheet.getRange(headerRow + 1, 1, numRows, 1).getValues() : null;
      const searchEq = (optEqNo && optEqNo.toString().trim()) ? optEqNo.toString().trim().toUpperCase() : '';

      for (let i = numRows - 1; i >= 0; i--) {
        if (notes[i][0] && notes[i][0].indexOf(searchNote) !== -1) {
          // ตรวจสอบว่ารหัสอุปกรณ์ตรงกันหรือไม่ (ป้องกันกรณี User copy แถวใน Google Sheet แล้วติด Note UUID เดิมมา)
          if (searchEq && eqCol) {
            const rowEq = (eqCol[i][0] || '').toString().trim().toUpperCase();
            if (rowEq && rowEq !== searchEq) {
              // รหัสอุปกรณ์ในแถวนี้ไม่ตรงกับที่ค้นหา ข้ามไป
              continue;
            }
          }
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
    const cleanWo = (data.workOrderNo || '').toString().trim().replace(/\D/g, '');
    sheet.getRange(targetRow, 4).setValue(cleanWo);
    sheet.getRange(targetRow, 5).setValue('OPEN');
    if (cleanWo) {
      sheet.getRange(targetRow, 6).setValue('NO');
    }
    sheet.getRange(targetRow, 7).setValue('Not Print');
    if (data.openedBy && data.openedBy.toString().trim().toUpperCase().startsWith('TL')) {
      sheet.getRange(targetRow, 8).setValue(data.openedBy.toString().trim().toUpperCase());
    }
    if (data.openedBy || cleanWo || isPm) {
      const openD = parseDateString(data.receivedDate || data.informDate);
      if (openD) {
        sheet.getRange(targetRow, 9).setValue((openD.getMonth() + 1) + '/' + openD.getDate() + '/' + openD.getFullYear());
      }
    }

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
 * @param {Object} [oldMeta] - { oldEquipmentCode, oldInformDate } ก่อนแก้ไข เพื่ออัปเดตแถวเดิมแทนการสร้างซ้ำ
 */
function syncToWoSheetOnUpdate(uuid, data, currentAdminId, role, oldMeta) {
  try {
    const dateObj = parseDateString(data.informDate || (oldMeta && oldMeta.oldInformDate));
    const newTabName = getWoSheetTabName(dateObj);

    // หากมีการแก้ไข InformDate ข้ามเดือน ให้ลบแถวในแท็บเดือนเดิมก่อนเพื่อไม่ให้เกิดแถวค้าง
    if (oldMeta && oldMeta.oldInformDate) {
      const oldDateObj = parseDateString(oldMeta.oldInformDate);
      const oldTabName = getWoSheetTabName(oldDateObj);
      if (oldTabName && oldTabName !== newTabName) {
        deleteFromWoSheet(uuid, oldMeta.oldInformDate, data.workOrderNo, oldMeta.oldEquipmentCode || data.equipmentCode);
      }
    }

    const sheet = getOrCreateWoMonthSheet(dateObj);
    if (!sheet) return;

    const headerRow = findWoHeaderRow(sheet);
    const searchEq = (oldMeta && oldMeta.oldEquipmentCode) ? oldMeta.oldEquipmentCode : data.equipmentCode;
    let targetRow = findWoRowByUUID(sheet, headerRow, uuid, data.workOrderNo, searchEq, data.damageAppearance);
    if (!targetRow && searchEq !== data.equipmentCode) {
      targetRow = findWoRowByUUID(sheet, headerRow, uuid, data.workOrderNo, data.equipmentCode, data.damageAppearance);
    }

    if (!targetRow) {
      targetRow = findWoNextEmptyRow(sheet, headerRow);
      sheet.getRange(targetRow, 1).setNote('UUID:' + uuid);
      sheet.getRange(targetRow, 5).setValue('OPEN');
      sheet.getRange(targetRow, 7).setValue('Not Print');
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
        const curScanVal = (sheet.getRange(targetRow, 6).getValue() || '').toString().trim().toUpperCase();
        if (curScanVal !== 'YES') {
          sheet.getRange(targetRow, 6).setValue('NO'); // สแกนเอกสาร (Col F = 6)
        }
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
  'Priority', 'PmCheckLevel', 'PmTaskCardTemplate', 'PmChecklistData',
  'WoScanDoc'
];

/**
 * ensureRequestHeaders - ตรวจสอบและสร้างหัวตารางเพิ่มเติมใน Requests sheet
 */
function ensureRequestHeaders(sheet) {
  try {
    if (!sheet) return;
    const maxCol = sheet.getMaxColumns();
    if (maxCol < REQUEST_HEADERS.length) {
      sheet.insertColumnsAfter(maxCol, REQUEST_HEADERS.length - maxCol);
    }
    const lastCol = sheet.getLastColumn();
    if (lastCol < REQUEST_HEADERS.length) {
      sheet.getRange(1, 1, 1, REQUEST_HEADERS.length).setValues([REQUEST_HEADERS]);
    } else {
      const currentHeaders = sheet.getRange(1, 1, 1, REQUEST_HEADERS.length).getValues()[0];
      let needUpdate = false;
      for (let i = 0; i < REQUEST_HEADERS.length; i++) {
        if (currentHeaders[i] !== REQUEST_HEADERS[i]) {
          currentHeaders[i] = REQUEST_HEADERS[i];
          needUpdate = true;
        }
      }
      if (needUpdate) {
        sheet.getRange(1, 1, 1, REQUEST_HEADERS.length).setValues([currentHeaders]);
      }
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
  // ตั้งค่าคอลัมน์ Part No. (คอลัมน์ F / 6) ให้เป็น Plain Text เสมอ เพื่อรักษาเลข 0 นำหน้า
  try {
    sheet.getRange('F:F').setNumberFormat('@STRING@');
  } catch(e) {}
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
      SpreadsheetApp.flush();
      return;
    }

    const now = new Date();
    const timestamp = Utilities.formatDate(now, 'Asia/Bangkok', 'dd/MM/yyyy HH:mm:ss');

    let itemNo = 1;
    sparePartsList.forEach(function(p) {
      const partName = (p.sparePartName || '').toString().trim();
      const partNo = (p.partNo != null ? p.partNo : '').toString().trim();
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
        const newRow = sheet.getLastRow();
        // กำหนดฟอร์แมต Plain Text (@STRING@) ที่คอลัมน์ Part No. (Col F = 6) และเขียนค่าสตริงทับเสมอเพื่อรักษาเลข 0 นำหน้า
        sheet.getRange(newRow, 6).setNumberFormat('@STRING@').setValue(partNo);
        itemNo++;
      }
    });
    SpreadsheetApp.flush();
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
    const dataRange = sheet.getDataRange();
    const data = dataRange.getValues();
    const displayData = dataRange.getDisplayValues();
    if (data.length <= 1) return [];

    const parts = [];
    for (let r = 1; r < data.length; r++) {
      if (data[r][0] && data[r][0].toString().trim() === uuid.toString().trim()) {
        // ใช้ getDisplayValues เพื่อรักษา string format (เช่น "00049") ไม่ให้กลายเป็น number
        const rawPartNo = (displayData[r] && displayData[r][5] !== '')
          ? displayData[r][5].toString()
          : (data[r][5] != null ? data[r][5].toString() : '');
        parts.push({
          sparePartName: ((displayData[r] && displayData[r][4]) || data[r][4] || '').toString().trim(),
          partNo: rawPartNo.trim(),
          typeModel: ((displayData[r] && displayData[r][6]) || data[r][6] || '').toString().trim(),
          qty: ((displayData[r] && displayData[r][7]) || data[r][7] || '').toString().trim(),
          price: ((displayData[r] && displayData[r][8]) || data[r][8] || '').toString().trim()
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
      sheet.getRange(targetRow, 5).setValue('OPEN');
      sheet.getRange(targetRow, 7).setValue('Not Print');
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
 * saveTechnicianReport - ช่าง หรือ Supervisor บันทึกผลการซ่อมบำรุงและปิดงาน (ส่งรอตรวจสอบ)
 */
function saveTechnicianReport(uuid, techData) {
  ensureDynamicUserProfilesLoaded();
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

    const targetKey = (uuid || '').toString().trim();
    for (let i = 1; i < allData.length; i++) {
      const colUuid = (allData[i][0] != null) ? allData[i][0].toString().trim() : '';
      const colReqId = (allData[i][1] != null) ? allData[i][1].toString().trim() : '';
      if (targetKey && (colUuid === targetKey || colReqId === targetKey)) {
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

    const targetKey = (uuid || '').toString().trim();
    for (let i = 1; i < allData.length; i++) {
      const colUuid = (allData[i][0] != null) ? allData[i][0].toString().trim() : '';
      const colReqId = (allData[i][1] != null) ? allData[i][1].toString().trim() : '';
      if (targetKey && (colUuid === targetKey || colReqId === targetKey)) {
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
 * resetTechnicianReport - ช่าง, Supervisor หรือ Admin รีเซ็ตใบงานที่กรอกผิดกลับเป็น "กำลังซ่อม"
 */
function resetTechnicianReport(uuid, userEmpId, reason) {
  ensureDynamicUserProfilesLoaded();
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
    const isSup = SUPERVISOR_IDS.includes(empId);
    const isAdmin = ADMIN_IDS.includes(empId);

    if (!isTech && !isSup && !isAdmin) {
      return { success: false, message: 'คุณไม่มีสิทธิ์ในการรีเซ็ตใบงาน (เฉพาะช่าง, Supervisor หรือ Admin เท่านั้น)' };
    }

    const resetterName = TECHNICIAN_PROFILES[empId] || SUPERVISOR_PROFILES[empId] || ADMIN_PROFILES[empId] || empId;
    const sheet = getRequestsSheet();
    ensureRequestHeaders(sheet);
    const allData = sheet.getDataRange().getValues();
    let rowIndex = -1;

    const targetKey = (uuid || '').toString().trim();
    for (let i = 1; i < allData.length; i++) {
      const colUuid = (allData[i][0] != null) ? allData[i][0].toString().trim() : '';
      const colReqId = (allData[i][1] != null) ? allData[i][1].toString().trim() : '';
      if (targetKey && (colUuid === targetKey || colReqId === targetKey)) {
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

    const targetKey = (uuid || '').toString().trim();
    for (let i = 1; i < allData.length; i++) {
      const colUuid = (allData[i][0] != null) ? allData[i][0].toString().trim() : '';
      const colReqId = (allData[i][1] != null) ? allData[i][1].toString().trim() : '';
      if (targetKey && (colUuid === targetKey || colReqId === targetKey)) {
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

    const targetKey = (uuid || '').toString().trim();
    for (let i = 1; i < allData.length; i++) {
      const colUuid = (allData[i][0] != null) ? allData[i][0].toString().trim() : '';
      const colReqId = (allData[i][1] != null) ? allData[i][1].toString().trim() : '';
      if (targetKey && (colUuid === targetKey || colReqId === targetKey)) {
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

    const targetKey = (uuid || '').toString().trim();
    for (let i = 1; i < allData.length; i++) {
      const colUuid = (allData[i][0] != null) ? allData[i][0].toString().trim() : '';
      const colReqId = (allData[i][1] != null) ? allData[i][1].toString().trim() : '';
      if (targetKey && (colUuid === targetKey || colReqId === targetKey)) {
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
          const curScan = (woSheet.getRange(targetRow, 6).getValue() || '').toString().trim().toUpperCase();
          if (curScan !== 'YES') {
            woSheet.getRange(targetRow, 6).setValue('NO');
          }
          const closeDateStr = resolveTechnicianWoCloseDateStr(rowData, now);
          woSheet.getRange(targetRow, 10).setValue(closeDateStr);
        }
      }
    } catch(eWo) {
      Logger.log('Error closing WO sheet: ' + eWo.message);
    }

    // บันทึกสถานะ W/O Sheet ลงใน Requests sheet ด้วย (Cols 48, 49, 54)
    sheet.getRange(rowIndex, 48).setValue('CLOSED');
    sheet.getRange(rowIndex, 49).setValue(todayStr);
    const curReqScan = (rowData[53] || '').toString().trim().toUpperCase();
    const finalScanVal = curReqScan === 'YES' ? 'YES' : 'NO';
    sheet.getRange(rowIndex, 54).setValue(finalScanVal);

    clearDashboardCache();
    return {
      success: true,
      message: 'ลงนามรับมอบอุปกรณ์เรียบร้อยแล้ว สถานะเปลี่ยนเป็น เสร็จสิ้น (Return to Service)',
      status: 'เสร็จสิ้น (Return to Service)',
      woSheetStatus: 'CLOSED',
      woScanDoc: finalScanVal
    };
  } catch(err) {
    Logger.log('Error in requesterAcceptEquipment: ' + err.message);
    return { success: false, message: 'เกิดข้อผิดพลาด: ' + err.message };
  } finally {
    try { lock.releaseLock(); } catch(e) {}
  }
}

/**
 * adminCloseWorkOrder - แอดมินกดปิด W/O ใน Sheet บันทึกการเปิด W/O โดยตรง (ตั้งแต่สถานะ รอ Manager อนุมัติ เป็นต้นไป)
 */
function adminCloseWorkOrder(uuid, adminEmpId) {
  ensureDynamicUserProfilesLoaded();
  try {
    const empId = (adminEmpId || '').toString().trim().toUpperCase();
    if (!ADMIN_IDS.includes(empId)) {
      return { success: false, message: 'เฉพาะ Admin เท่านั้นที่สามารถปิด W/O ใน Sheet ได้' };
    }
    const req = getRequestByUUID(uuid);
    if (!req) return { success: false, message: 'ไม่พบใบแจ้งซ่อม' };

    const now = new Date();
    const techDateObj = parseDateString(req.CompleteDate || req.TechnicianDate) || now;
    const closeDateStr = (techDateObj.getMonth() + 1) + '/' + techDateObj.getDate() + '/' + techDateObj.getFullYear();
    const todayStr = Utilities.formatDate(now, 'Asia/Bangkok', 'dd/MM/yyyy');
    const timestamp = Utilities.formatDate(now, 'Asia/Bangkok', 'dd/MM/yyyy HH:mm:ss');

    let finalScanDoc = (req.WoScanDoc || '').toString().trim().toUpperCase() === 'YES' ? 'YES' : 'NO';

    try {
      const dateObj = parseDateString(req.InformDate);
      const sheet = getOrCreateWoMonthSheet(dateObj);
      if (sheet) {
        const headerRow = findWoHeaderRow(sheet);
        let targetRow = findWoRowByUUID(sheet, headerRow, uuid, req.WorkOrderNo, req.EquipmentCode, req.DamageAppearance);
        if (!targetRow) {
          targetRow = findWoNextEmptyRow(sheet, headerRow);
          sheet.getRange(targetRow, 1).setValue(req.EquipmentCode || '');
          sheet.getRange(targetRow, 2).setValue(req.DamageAppearance || '');
          sheet.getRange(targetRow, 3).setValue(req.Priority === 'PM' ? 'PM' : 'CM');
          if (req.WorkOrderNo) sheet.getRange(targetRow, 4).setValue(req.WorkOrderNo);
          sheet.getRange(targetRow, 7).setValue('Not Print');
          sheet.getRange(targetRow, 1).setNote('UUID:' + uuid);
        }
        sheet.getRange(targetRow, 5).setValue('CLOSED');
        const curWoScan = (sheet.getRange(targetRow, 6).getValue() || '').toString().trim().toUpperCase();
        if (curWoScan === 'YES') {
          finalScanDoc = 'YES';
        } else {
          sheet.getRange(targetRow, 6).setValue('NO');
        }
        sheet.getRange(targetRow, 10).setValue(closeDateStr);
      }
    } catch (woErr) {
      Logger.log('Warning syncing CM close to WO sheet: ' + woErr.message);
    }

    // บันทึกสถานะ Status, WoSheetStatus, WoClosedDate, WoScanDoc ลงใน Requests sheet
    const reqSheet = getRequestsSheet();
    ensureRequestHeaders(reqSheet);
    const allData = reqSheet.getDataRange().getValues();
    let updatedStatus = req.Status || 'เสร็จสิ้น';
    for (let i = 1; i < allData.length; i++) {
      if ((allData[i][0] != null) && allData[i][0].toString().trim() === uuid) {
        const curSt = (allData[i][13] || '').toString().trim();
        if (curSt !== 'เสร็จสิ้น (Return to Service)') {
          updatedStatus = 'เสร็จสิ้น';
          reqSheet.getRange(i + 1, 14).setValue('เสร็จสิ้น');
        } else {
          updatedStatus = curSt;
        }
        reqSheet.getRange(i + 1, 20).setValue(timestamp);
        reqSheet.getRange(i + 1, 48).setValue('CLOSED');
        reqSheet.getRange(i + 1, 49).setValue(todayStr);
        reqSheet.getRange(i + 1, 54).setValue(finalScanDoc);
        break;
      }
    }

    SpreadsheetApp.flush();
    clearDashboardCache();
    return {
      success: true,
      message: 'ปิดใบงานและอัปเดตสถานะใน Sheet W/O เป็น CLOSED (รอสแกน: ' + finalScanDoc + ') เรียบร้อยแล้ว',
      status: updatedStatus,
      woSheetStatus: 'CLOSED',
      woClosedDate: todayStr,
      woScanDoc: finalScanDoc
    };
  } catch(e) {
    return { success: false, message: 'เกิดข้อผิดพลาด: ' + e.message };
  }
}

/**
 * toggleScanDocumentStatus - Admin สลับสถานะการสแกนเอกสารเก็บลง Drive กลาง (YES / NO)
 */
function toggleScanDocumentStatus(uuid, newStatus, adminEmpId) {
  ensureDynamicUserProfilesLoaded();
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(15000);
  } catch (e) {
    return { success: false, message: 'ระบบกำลังมีการบันทึกข้อมูล กรุณาลองใหม่อีกครั้ง' };
  }

  try {
    const empId = (adminEmpId || '').toString().trim().toUpperCase();
    if (!ADMIN_IDS.includes(empId)) {
      return { success: false, message: 'คุณไม่มีสิทธิ์เปลี่ยนสถานะสแกนเอกสาร (เฉพาะ Admin)' };
    }
    if (!uuid) {
      return { success: false, message: 'ไม่พบรหัสใบงาน (UUID)' };
    }

    const normalizedScan = (newStatus && newStatus.toString().trim().toUpperCase() === 'YES') ? 'YES' : 'NO';

    const reqSheet = getRequestsSheet();
    ensureRequestHeaders(reqSheet);
    const allData = reqSheet.getDataRange().getValues();
    let rowIndex = -1;
    const targetKey = uuid.toString().trim();

    for (let i = 1; i < allData.length; i++) {
      const colUuid = (allData[i][0] != null) ? allData[i][0].toString().trim() : '';
      const colReqId = (allData[i][1] != null) ? allData[i][1].toString().trim() : '';
      if (targetKey && (colUuid === targetKey || colReqId === targetKey)) {
        rowIndex = i + 1;
        break;
      }
    }

    if (rowIndex === -1) {
      return { success: false, message: 'ไม่พบข้อมูลใบงานในระบบ' };
    }

    const rowData = allData[rowIndex - 1];
    const realUuid = (rowData[0] != null) ? rowData[0].toString().trim() : targetKey;
    const informDate = rowData[2] || '';
    const eqCode = rowData[5] || '';
    const damage = rowData[8] || '';
    const woNo = rowData[17] || '';
    const prio = rowData[49] || '';

    // บันทึกลง Requests sheet (Col 54 = WoScanDoc)
    reqSheet.getRange(rowIndex, 54).setValue(normalizedScan);

    // ซิงค์ไปยัง Sheet "บันทึกการเปิด W/O" (Col 6 = สแกนเอกสาร)
    try {
      const dateObj = parseDateString(informDate);
      const woSheet = getOrCreateWoMonthSheet(dateObj);
      if (woSheet) {
        const headerRow = findWoHeaderRow(woSheet);
        let targetRow = findWoRowByUUID(woSheet, headerRow, realUuid, woNo, eqCode, damage);
        if (!targetRow) {
          targetRow = findWoNextEmptyRow(woSheet, headerRow);
          woSheet.getRange(targetRow, 1).setValue(eqCode || '');
          woSheet.getRange(targetRow, 2).setValue(damage || '');
          woSheet.getRange(targetRow, 3).setValue(prio === 'PM' ? 'PM' : 'CM');
          if (woNo) woSheet.getRange(targetRow, 4).setValue(woNo);
          woSheet.getRange(targetRow, 5).setValue('CLOSED');
          woSheet.getRange(targetRow, 7).setValue('Not Print');
          woSheet.getRange(targetRow, 1).setNote('UUID:' + realUuid);
        }
        woSheet.getRange(targetRow, 6).setValue(normalizedScan);
      }
    } catch (woErr) {
      Logger.log('Warning syncing scan status to WO sheet: ' + woErr.message);
    }

    SpreadsheetApp.flush();
    clearDashboardCache();

    return {
      success: true,
      uuid: realUuid,
      woScanDoc: normalizedScan,
      message: normalizedScan === 'YES'
        ? 'อัปเดตสถานะ: สแกนเก็บลง Drive กลางแล้ว (YES)'
        : 'อัปเดตสถานะ: รอสแกนเก็บลง Drive กลาง (NO)'
    };
  } catch (err) {
    Logger.log('Error in toggleScanDocumentStatus: ' + err.message);
    return { success: false, message: 'เกิดข้อผิดพลาด: ' + err.message };
  } finally {
    try { lock.releaseLock(); } catch (e) {}
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
      // 1. กำลังซ่อม (เพิ่งแจ้งซ่อมใหม่)
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
        Status: 'กำลังซ่อม',
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
  ensureDynamicUserProfilesLoaded();
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(15000);
  } catch(e) {
    return { success: false, message: 'ระบบกำลังมีการบันทึกข้อมูล กรุณาลองใหม่อีกครั้ง' };
  }

  try {
    const empId = (adminEmpId || '').toString().trim().toUpperCase();
    if (!ADMIN_IDS.includes(empId)) {
      return { success: false, message: 'คุณไม่มีสิทธิ์สร้างแผน PM (เฉพาะ Admin เท่านั้น)' };
    }

    const eqCode = (pmData.equipmentCode || '').toString().trim().toUpperCase();
    if (!eqCode) {
      return { success: false, message: 'กรุณาระบุรหัสอุปกรณ์' };
    }

    if (!isEquipmentInMaster(eqCode)) {
      return { success: false, message: 'รหัสอุปกรณ์ ' + eqCode + ' ไม่มีในระบบ GSE MASTER' };
    }

    const matchedEq = getEquipmentItemFromMaster(eqCode);
    const eqName = matchedEq ? (matchedEq.description || eqCode) : (pmData.equipmentName || eqCode);

    const rawLvl = (pmData.checkLevel || 'A').toString().trim().toUpperCase();
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

    // ตรวจหาชื่อเดือนที่ระบุมาโดยตรง เช่น "PM NOV"
    let explicitMonth = '';
    for (let mIdx = 0; mIdx < months.length; mIdx++) {
      const mName = months[mIdx];
      if (rawLvl === 'PM ' + mName || rawLvl === mName || new RegExp('\\b' + mName + '\\b').test(rawLvl)) {
        explicitMonth = mName;
        break;
      }
    }

    // แยกแยะระดับ Check Level (A, B, C หรือ MONTHLY) โดยตัดคำว่า PM และ CHECK ออกก่อนเพื่อไม่ให้ตัว C ในคำว่า CHECK ถูกตีความเป็น Check C
    const strippedLvl = rawLvl.replace(/\bPM\b/g, '').replace(/\bCHECK\b/g, '').replace(/\bSCHEDULE\b/g, '').trim();
    let checkLevel = 'A';
    if (explicitMonth || rawLvl.indexOf('MONTHLY') !== -1 || strippedLvl === 'M') {
      checkLevel = 'MONTHLY';
    } else if (strippedLvl === 'C' || /\bC\b/.test(strippedLvl)) {
      checkLevel = 'C';
    } else if (strippedLvl === 'B' || /\bB\b/.test(strippedLvl)) {
      checkLevel = 'B';
    } else {
      checkLevel = 'A';
    }

    let damageApp = 'PM ' + checkLevel;
    if (eqCode.indexOf('TLM-TB-') !== -1 || checkLevel === 'MONTHLY') {
      damageApp = 'PM ' + (explicitMonth || monthStr);
      if (eqCode.indexOf('TLM-TB-') !== -1 && checkLevel === 'A') {
        checkLevel = 'MONTHLY';
      }
    }

    // ค้นหาคีย์แม่แบบ Task Card
    let tplObj = null;
    try {
      tplObj = resolvePmTaskCard(eqCode, checkLevel === 'MONTHLY' ? 'A' : checkLevel, eqName);
    } catch(eTpl) {}
    const tplKeyStr = (tplObj && tplObj.folder) ? (tplObj.folder.replace(/-TLM$/, '') + '-' + (checkLevel === 'MONTHLY' ? 'A' : checkLevel) + '-TLM') : '';

    const sheet = getRequestsSheet();
    ensureRequestHeaders(sheet);
    const uuid = Utilities.getUuid();
    const now = new Date();
    const timestamp = Utilities.formatDate(now, 'Asia/Bangkok', 'dd/MM/yyyy HH:mm:ss');
    const informTime = Utilities.formatDate(now, 'Asia/Bangkok', 'HH:mm');

    const requestId = generateNextPmRequestId(sheet, dObj);
    const cleanWo = pmData.workOrderNo ? pmData.workOrderNo.toString().trim().replace(/\D/g, '') : '';

    const isNonEng = eqCode.indexOf('TLM-TB-') === 0 ||
                     eqCode.indexOf('TLM-BC-') === 0 ||
                     eqCode.indexOf('TLM-ES-') === 0 ||
                     eqCode.indexOf('TLM-N2-') === 0 ||
                     (eqCode.indexOf('TLM-PS-') === 0 && tplKeyStr.indexOf('PS-TLD-404') === -1);
    const hrKmVal = pmData.hrKm || (isNonEng ? 'N/A' : '');

    const rowData = [
      uuid,                                   // A - UUID
      requestId,                              // B - เลขที่ใบแจ้งซ่อม (PM-YYYYMM-XX)
      planDateStr,                            // C - วันที่แจ้งซ่อม / วันตามแผน
      informTime,                             // D - เวลา
      eqName,                                 // E - ชื่ออุปกรณ์
      eqCode,                                 // F - รหัสอุปกรณ์
      hrKmVal,                                // G - ชม./กม.
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

    const serialNo = matchedEq ? (matchedEq.serialNo || '') : '';
    const initialChecklistData = {
      gseNumber: eqCode,
      serialNo: serialNo,
      chaNo: 'N/A',
      engNo: 'N/A',
      hrMeter: hrKmVal,
      workOrderNo: cleanWo,
      checkLevel: checkLevel,
      notes: pmData.notes || '',
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

    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    const fullRow = new Array(headers.length).fill('');
    for (let c = 0; c < rowData.length && c < fullRow.length; c++) {
      fullRow[c] = rowData[c];
    }
    const setColVal = function(colName, val) {
      const idx = headers.indexOf(colName);
      if (idx >= 0) fullRow[idx] = val;
    };
    setColVal('Priority', 'PM');
    setColVal('PmCheckLevel', checkLevel);
    setColVal('PmTaskCardTemplate', tplKeyStr);
    setColVal('WoSheetStatus', 'OPEN');
    setColVal('PmChecklistData', JSON.stringify(initialChecklistData));

    sheet.appendRow(fullRow);

    // ซิงค์ไปยัง Sheet "บันทึกการเปิด W/O" พร้อมระบุคนเปิดใบงานและวันที่เปิดทันที
    syncToWoSheetOnCreate(uuid, {
      informDate: planDateStr,
      receivedDate: planDateStr,
      equipmentCode: eqCode,
      damageAppearance: damageApp,
      workOrderNo: cleanWo,
      openedBy: empId,
      priority: 'PM',
      requestId: requestId,
      isPm: true
    });

    SpreadsheetApp.flush();

    const createdReqObj = {
      UUID: uuid,
      RequestID: requestId,
      InformDate: planDateStr,
      InformTime: informTime,
      EquipmentName: eqName,
      EquipmentCode: eqCode,
      HrKm: hrKmVal,
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
      WoSheetStatus: 'OPEN',
      Timestamp: timestamp,
      LastModified: timestamp,
      Priority: 'PM',
      PmCheckLevel: checkLevel,
      PmTaskCardTemplate: tplKeyStr,
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
 * updatePmWorkOrder - Admin แก้ไขข้อมูลแผน PM (รหัสอุปกรณ์, ระดับ Check, วันที่ตามแผน, เลข W/O, ชม./กม., หมายเหตุ) และซิงค์ลงชีต W/O ทันที
 */
function updatePmWorkOrder(uuid, workOrderNo, targetDate, checkLevel, adminEmpId, extraData) {
  ensureDynamicUserProfilesLoaded();
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(15000);
  } catch(e) {
    return { success: false, message: 'ระบบกำลังมีการบันทึกข้อมูล กรุณาลองใหม่อีกครั้ง' };
  }

  try {
    const extra = extraData || {};
    const targetUuid = (uuid || '').toString().trim();
    const targetReqId = (extra.requestId || '').toString().trim();
    if (!targetUuid && !targetReqId) return { success: false, message: 'ไม่พบรหัสงาน PM' };

    const empId = (adminEmpId || '').toString().trim().toUpperCase();
    if (!ADMIN_IDS.includes(empId)) {
      return { success: false, message: 'เฉพาะ Admin เท่านั้นที่สามารถแก้ไขข้อมูลแผน PM ได้' };
    }

    const sheet = getRequestsSheet();
    ensureRequestHeaders(sheet);
    const allData = sheet.getDataRange().getValues();
    const headers = allData[0];
    let rowIndex = -1;

    for (let i = 1; i < allData.length; i++) {
      const rowU = (allData[i][0] != null) ? allData[i][0].toString().trim() : '';
      const rowR = (allData[i][1] != null) ? allData[i][1].toString().trim() : '';
      if ((targetUuid && rowU === targetUuid) || (targetReqId && rowR === targetReqId)) {
        rowIndex = i + 1;
        break;
      }
    }

    if (rowIndex === -1) {
      return { success: false, message: 'ไม่พบข้อมูลงาน PM ในระบบ' };
    }

    const actualUuid = (allData[rowIndex - 1][0] || targetUuid || Utilities.getUuid()).toString().trim();
    if (!allData[rowIndex - 1][0]) {
      sheet.getRange(rowIndex, 1).setValue(actualUuid);
    }

    const now = new Date();
    const timestamp = Utilities.formatDate(now, 'Asia/Bangkok', 'dd/MM/yyyy HH:mm:ss');
    const cleanWo = (workOrderNo || '').toString().trim().replace(/\D/g, '');

    // 1. อัปเดตรหัสและชื่ออุปกรณ์ (หาก Admin แก้ไข)
    let eqCode = (extra.equipmentCode || allData[rowIndex - 1][5] || '').toString().trim().toUpperCase();
    let eqName = (extra.equipmentName || allData[rowIndex - 1][4] || eqCode).toString().trim();
    let serialNo = '';
    if (eqCode) {
      const matchedEq = getEquipmentItemFromMaster(eqCode);
      if (matchedEq) {
        eqCode = matchedEq.gseNo || eqCode;
        eqName = matchedEq.description || eqName;
        serialNo = matchedEq.serialNo || '';
      }
      sheet.getRange(rowIndex, 5).setValue(eqName); // Col E - EquipmentName
      sheet.getRange(rowIndex, 6).setValue(eqCode); // Col F - EquipmentCode
    }

    // 2. อัปเดตวันที่ตามแผน (Target Date)
    let informDateStr = formatDateDMY(allData[rowIndex - 1][2]);
    if (targetDate) {
      const parsedD = parseDateString(targetDate);
      if (parsedD) {
        informDateStr = formatDateDMY(parsedD);
        sheet.getRange(rowIndex, 3).setValue(informDateStr); // Col C - InformDate
        sheet.getRange(rowIndex, 8).setValue(informDateStr); // Col H - DueDate
      }
    }
    const dObj = parseDateString(informDateStr);
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    const monthStr = months[dObj.getMonth()];

    // 3. อัปเดตระดับการตรวจ (Check Level) และ DamageAppearance (เช่น PM A, PM B, PM C, PM OCT)
    let damageApp = (allData[rowIndex - 1][8] || 'PM A').toString().trim();
    let normLvl = (allData[rowIndex - 1][headers.indexOf('PmCheckLevel')] || 'A').toString().trim();
    if (checkLevel) {
      const rawLvl = checkLevel.toString().trim().toUpperCase();
      const strippedLvl = rawLvl.replace(/\bPM\b/g, '').replace(/\bCHECK\b/g, '').replace(/\bSCHEDULE\b/g, '').trim();
      if (rawLvl.indexOf('MONTHLY') !== -1 || strippedLvl === 'M' || months.some(function(m) { return rawLvl === 'PM ' + m || rawLvl === m || strippedLvl === m; })) {
        normLvl = 'MONTHLY';
      } else if (strippedLvl === 'C' || /\bC\b/.test(strippedLvl)) {
        normLvl = 'C';
      } else if (strippedLvl === 'B' || /\bB\b/.test(strippedLvl)) {
        normLvl = 'B';
      } else {
        normLvl = 'A';
      }

      damageApp = 'PM ' + normLvl;
      if (eqCode.indexOf('TLM-TB-') !== -1 || normLvl === 'MONTHLY') {
        damageApp = 'PM ' + monthStr;
        if (eqCode.indexOf('TLM-TB-') !== -1 && normLvl === 'A') {
          normLvl = 'MONTHLY';
        }
      }
      sheet.getRange(rowIndex, 9).setValue(damageApp); // Col I - DamageAppearance
      const checkLevelCol = headers.indexOf('PmCheckLevel') + 1;
      if (checkLevelCol > 0) sheet.getRange(rowIndex, checkLevelCol).setValue(normLvl);

      let tplObj = null;
      try {
        tplObj = resolvePmTaskCard(eqCode, normLvl === 'MONTHLY' ? 'A' : normLvl, eqName);
      } catch(eTpl) {}
      const tplKeyStr = (tplObj && tplObj.folder) ? (tplObj.folder.replace(/-TLM$/, '') + '-' + (normLvl === 'MONTHLY' ? 'A' : normLvl) + '-TLM') : '';
      const tplCol = headers.indexOf('PmTaskCardTemplate') + 1;
      if (tplCol > 0 && tplKeyStr) sheet.getRange(rowIndex, tplCol).setValue(tplKeyStr);
    }
    const finalTplColIdx = headers.indexOf('PmTaskCardTemplate');
    const finalTplKey = (finalTplColIdx >= 0) ? (sheet.getRange(rowIndex, finalTplColIdx + 1).getValue() || '').toString().trim() : '';

    // 4. อัปเดตชม./กม. (HR / KM) และเลข W/O
    const isNonEngUpd = eqCode.indexOf('TLM-TB-') === 0 ||
                        eqCode.indexOf('TLM-BC-') === 0 ||
                        eqCode.indexOf('TLM-ES-') === 0 ||
                        eqCode.indexOf('TLM-N2-') === 0 ||
                        (eqCode.indexOf('TLM-PS-') === 0 && eqCode !== 'TLM-PS-072' && eqCode !== 'TLM-PS-073');
    let updHrVal = (extra.hrKm !== undefined && extra.hrKm !== null) ? extra.hrKm.toString().trim() : '';
    if (isNonEngUpd && (!updHrVal || updHrVal === '-' || updHrVal === '0')) {
      updHrVal = 'N/A';
    }
    if (extra.hrKm !== undefined && extra.hrKm !== null) {
      sheet.getRange(rowIndex, 7).setValue(updHrVal); // Col G - HrKm
    }
    sheet.getRange(rowIndex, 18).setValue(cleanWo); // Col R - WorkOrderNo
    sheet.getRange(rowIndex, 17).setValue(empId);   // Col Q - ReceivedBy
    sheet.getRange(rowIndex, 20).setValue(timestamp);

    // 5. อัปเดตข้อมูลใน PmChecklistData JSON
    const pmDataCol = headers.indexOf('PmChecklistData') + 1;
    let pmObj = {};
    if (pmDataCol > 0) {
      try {
        const curJson = sheet.getRange(rowIndex, pmDataCol).getValue();
        if (curJson) pmObj = JSON.parse(curJson);
      } catch(e) {}
      pmObj.gseNumber = eqCode;
      if (serialNo) pmObj.serialNo = serialNo;
      pmObj.workOrderNo = cleanWo;
      if (extra.hrKm !== undefined && extra.hrKm !== null) pmObj.hrMeter = updHrVal;
      else if (isNonEngUpd && (!pmObj.hrMeter || pmObj.hrMeter === '-')) pmObj.hrMeter = 'N/A';
      if (extra.notes !== undefined && extra.notes !== null) pmObj.notes = extra.notes;
      if (checkLevel) pmObj.checkLevel = normLvl;
      sheet.getRange(rowIndex, pmDataCol).setValue(JSON.stringify(pmObj));
    }

    // 6. ซิงค์ไปยัง Sheet "บันทึกการเปิด W/O"
    const curStatus = (allData[rowIndex - 1][13] || 'รอดำเนินการ').toString().trim();
    syncToWoSheetOnUpdate(actualUuid, {
      informDate: informDateStr,
      receivedDate: formatDateDMY(allData[rowIndex - 1][14]) || informDateStr,
      equipmentCode: eqCode,
      damageAppearance: damageApp,
      workOrderNo: cleanWo,
      status: curStatus,
      priority: 'PM',
      isPm: true
    }, empId, 'admin');

    SpreadsheetApp.flush();
    clearDashboardCache();

    return {
      success: true,
      uuid: actualUuid,
      equipmentCode: eqCode,
      equipmentName: eqName,
      workOrderNo: cleanWo,
      informDate: informDateStr,
      damageAppearance: damageApp,
      pmCheckLevel: normLvl,
      pmTaskCardTemplate: finalTplKey,
      hrKm: (extra.hrKm !== undefined) ? extra.hrKm : (allData[rowIndex - 1][6] || ''),
      pmChecklistData: JSON.stringify(pmObj),
      message: 'แก้ไขข้อมูลแผน PM (' + eqCode + ' - ' + damageApp + ') เรียบร้อยแล้ว'
    };
  } catch (err) {
    Logger.log('Error in updatePmWorkOrder: ' + err.message);
    return { success: false, message: 'เกิดข้อผิดพลาด: ' + err.message };
  } finally {
    try { lock.releaseLock(); } catch(e) {}
  }
}

/**
 * importPmMonthlyPlan - Admin นำเข้าแผน PM ประจำเดือนครั้งละหลายสิบ/หลายร้อยคันพร้อมกัน
 * ใช้ระบบ True Batch Write (setValues & setNotes รวดเดียว) ลงทั้ง:
 *   1. ชีต Requests (ในไฟล์ Spreadsheet ระบบหลัก)
 *   2. ชีต หน้าเก็บข้อมูล <เดือน> <ปี> (ในไฟล์ บันทึกการเปิด W/O)
 * ป้องกันปัญหา Google Apps Script ค้างหรือ Timeout เมื่อนำเข้ามากกว่า 100+ รายการ
 */
function importPmMonthlyPlan(planList, adminEmpId) {
  if (!planList || !Array.isArray(planList) || planList.length === 0) {
    return { success: false, message: 'ไม่พบรายการแผน PM ที่จะนำเข้า' };
  }

  ensureDynamicUserProfilesLoaded();
  const empId = (adminEmpId || '').toString().trim().toUpperCase();
  if (!ADMIN_IDS.includes(empId)) {
    return { success: false, message: 'คุณไม่มีสิทธิ์นำเข้าแผน PM (เฉพาะ Admin เท่านั้น)' };
  }

  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(25000);
  } catch (e) {
    return { success: false, message: 'ระบบกำลังมีการบันทึกข้อมูล กรุณาลองใหม่อีกครั้ง' };
  }

  try {
    // 1. โหลดข้อมูล GSE MASTER ครั้งเดียวเข้า Map ในหน่วยความจำ
    const masterList = getEquipmentList(false) || [];
    const masterMap = {};
    for (let m = 0; m < masterList.length; m++) {
      const normKey = (masterList[m].gseNo || '').toString().toUpperCase().replace(/[^A-Z0-9]/g, '');
      if (normKey) masterMap[normKey] = masterList[m];
    }

    // 2. เปิดชีต Requests และอ่าน Header + เลขลำดับ PM-YYYYMM-XX ล่าสุดครั้งเดียว
    const sheet = getRequestsSheet();
    ensureRequestHeaders(sheet);
    const existingData = sheet.getDataRange().getValues();
    const headers = existingData[0] || [];
    const colIdxMap = {};
    for (let c = 0; c < headers.length; c++) {
      colIdxMap[headers[c]] = c;
    }

    // นับลำดับสูงสุดของแต่ละเดือน (เช่น PM-202611-) ในหน่วยความจำ
    const seqMap = {};
    for (let r = 1; r < existingData.length; r++) {
      const rid = (existingData[r][1] || '').toString().trim();
      const mSeq = rid.match(/^(PM-\d{6}-)(\d+)$/);
      if (mSeq) {
        const pfx = mSeq[1];
        const num = parseInt(mSeq[2], 10);
        if (!seqMap[pfx] || num > seqMap[pfx]) seqMap[pfx] = num;
      }
    }

    const now = new Date();
    const timestamp = Utilities.formatDate(now, 'Asia/Bangkok', 'dd/MM/yyyy HH:mm:ss');
    const informTime = Utilities.formatDate(now, 'Asia/Bangkok', 'HH:mm');
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

    const newRequestRows = [];
    const createdRequests = [];
    const errors = [];
    const affectedMonthsMap = {}; // เก็บเดือนที่มีการนำเข้าเพื่อซิงค์ลงชีต W/O รวดเดียว

    for (let i = 0; i < planList.length; i++) {
      const item = planList[i];
      if (!item || !item.equipmentCode || !item.equipmentCode.toString().trim()) continue;

      let eqCode = item.equipmentCode.toString().trim().toUpperCase();
      const normEq = eqCode.replace(/[^A-Z0-9]/g, '');
      const matchedEq = masterMap[normEq] || null;

      if (!matchedEq && !/^TLM-[A-Z0-9]{1,4}-\d{2,4}[A-Z]?$/i.test(eqCode)) {
        errors.push(eqCode + ': รหัสอุปกรณ์ไม่อยู่ในรูปแบบมาตรฐาน TLM-');
        continue;
      }

      if (matchedEq && matchedEq.gseNo) {
        eqCode = matchedEq.gseNo;
      }
      const eqName = matchedEq ? (matchedEq.description || eqCode) : (item.equipmentName || eqCode);
      const serialNo = matchedEq ? (matchedEq.serialNo || '') : (item.serialNo || '');

      const rawLvl = (item.checkLevel || 'A').toString().trim().toUpperCase();
      const rawDate = item.planDate || item.targetDate || '';
      let planDateStr = '';
      if (rawDate) {
        const parsedD = parseDateString(rawDate);
        planDateStr = formatDateDMY(parsedD) || Utilities.formatDate(now, 'Asia/Bangkok', 'dd/MM/yyyy');
      } else {
        planDateStr = Utilities.formatDate(now, 'Asia/Bangkok', 'dd/MM/yyyy');
      }
      const dObj = parseDateString(planDateStr) || now;
      const monthStr = months[dObj.getMonth()];
      const yearStr = dObj.getFullYear();

      // ตรวจหาชื่อเดือนที่ระบุมาโดยตรง เช่น "PM NOV"
      let explicitMonth = '';
      for (let mIdx = 0; mIdx < months.length; mIdx++) {
        const mName = months[mIdx];
        if (rawLvl === 'PM ' + mName || rawLvl === mName || new RegExp('\\b' + mName + '\\b').test(rawLvl)) {
          explicitMonth = mName;
          break;
        }
      }

      const strippedLvl = rawLvl.replace(/\bPM\b/g, '').replace(/\bCHECK\b/g, '').replace(/\bSCHEDULE\b/g, '').trim();
      let checkLevel = 'A';
      if (explicitMonth || rawLvl.indexOf('MONTHLY') !== -1 || strippedLvl === 'M') {
        checkLevel = 'MONTHLY';
      } else if (strippedLvl === 'C' || /\bC\b/.test(strippedLvl)) {
        checkLevel = 'C';
      } else if (strippedLvl === 'B' || /\bB\b/.test(strippedLvl)) {
        checkLevel = 'B';
      } else {
        checkLevel = 'A';
      }

      let damageApp = 'PM ' + checkLevel;
      if (eqCode.indexOf('TLM-TB-') !== -1 || checkLevel === 'MONTHLY') {
        damageApp = 'PM ' + (explicitMonth || monthStr);
        if (eqCode.indexOf('TLM-TB-') !== -1 && checkLevel === 'A') {
          checkLevel = 'MONTHLY';
        }
      }

      let tplKeyStr = item.templateKey || '';
      if (!tplKeyStr) {
        try {
          const tplObj = resolvePmTaskCard(eqCode, checkLevel === 'MONTHLY' ? 'A' : checkLevel, eqName);
          if (tplObj && tplObj.folder) {
            tplKeyStr = tplObj.folder.replace(/-TLM$/, '') + '-' + (checkLevel === 'MONTHLY' ? 'A' : checkLevel) + '-TLM';
          }
        } catch (eTpl) {}
      }

      // สร้างเลขที่ใบงาน PM-YYYYMM-XX ต่อเนื่องกันในหน่วยความจำ
      const pfx = 'PM-' + yearStr + String(dObj.getMonth() + 1).padStart(2, '0') + '-';
      const nextSeq = (seqMap[pfx] || 0) + 1;
      seqMap[pfx] = nextSeq;
      const requestId = pfx + String(nextSeq).padStart(2, '0');

      const uuid = Utilities.getUuid();
      const cleanWo = item.workOrderNo ? item.workOrderNo.toString().trim().replace(/\D/g, '') : '';
      const isNonEng = eqCode.indexOf('TLM-TB-') === 0 ||
                       eqCode.indexOf('TLM-BC-') === 0 ||
                       eqCode.indexOf('TLM-ES-') === 0 ||
                       eqCode.indexOf('TLM-N2-') === 0 ||
                       (eqCode.indexOf('TLM-PS-') === 0 && tplKeyStr.indexOf('PS-TLD-404') === -1);
      const hrKmVal = item.hrKm || (isNonEng ? 'N/A' : '');

      const initialChecklistData = {
        gseNumber: eqCode,
        serialNo: serialNo,
        chaNo: 'N/A',
        engNo: 'N/A',
        hrMeter: hrKmVal,
        workOrderNo: cleanWo,
        checkLevel: checkLevel,
        notes: item.notes || '',
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
      const pmJsonStr = JSON.stringify(initialChecklistData);

      const baseRow = [
        uuid,                                   // A - UUID
        requestId,                              // B - เลขที่ใบแจ้งซ่อม (PM-YYYYMM-XX)
        planDateStr,                            // C - วันที่แจ้งซ่อม / วันตามแผน
        informTime,                             // D - เวลา
        eqName,                                 // E - ชื่ออุปกรณ์
        eqCode,                                 // F - รหัสอุปกรณ์
        hrKmVal,                                // G - ชม./กม.
        planDateStr,                            // H - วันที่ต้องการใช้
        damageApp,                              // I - อาการเสีย ("PM A", "PM NOV" ฯลฯ)
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

      const fullRow = new Array(headers.length).fill('');
      for (let c = 0; c < baseRow.length && c < fullRow.length; c++) {
        fullRow[c] = baseRow[c];
      }
      if (colIdxMap['Priority'] !== undefined) fullRow[colIdxMap['Priority']] = 'PM';
      if (colIdxMap['PmCheckLevel'] !== undefined) fullRow[colIdxMap['PmCheckLevel']] = checkLevel;
      if (colIdxMap['PmTaskCardTemplate'] !== undefined) fullRow[colIdxMap['PmTaskCardTemplate']] = tplKeyStr;
      if (colIdxMap['WoSheetStatus'] !== undefined) fullRow[colIdxMap['WoSheetStatus']] = 'OPEN';
      if (colIdxMap['PmChecklistData'] !== undefined) fullRow[colIdxMap['PmChecklistData']] = pmJsonStr;

      newRequestRows.push(fullRow);

      const monthKey = dObj.getFullYear() + '-' + dObj.getMonth();
      affectedMonthsMap[monthKey] = dObj;

      createdRequests.push({
        UUID: uuid,
        RequestID: requestId,
        InformDate: planDateStr,
        InformTime: informTime,
        EquipmentName: eqName,
        EquipmentCode: eqCode,
        SerialNo: serialNo,
        HrKm: hrKmVal,
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
        Priority: 'PM',
        PmCheckLevel: checkLevel,
        PmTaskCardTemplate: tplKeyStr,
        WoSheetStatus: 'OPEN',
        PmChecklistData: pmJsonStr
      });
    }

    if (newRequestRows.length === 0) {
      return {
        success: false,
        count: 0,
        total: planList.length,
        message: 'ไม่มีรายการที่สามารถนำเข้าได้' + (errors.length > 0 ? (' (' + errors.slice(0, 3).join(', ') + ')') : '')
      };
    }

    // 3. เขียนลงชีต Requests รวดเดียวด้วย Batch setValues()
    const startRow = sheet.getLastRow() + 1;
    const neededMaxRow = startRow + newRequestRows.length + 5;
    if (sheet.getMaxRows() < neededMaxRow) {
      sheet.insertRowsAfter(sheet.getMaxRows(), neededMaxRow - sheet.getMaxRows());
    }
    sheet.getRange(startRow, 1, newRequestRows.length, headers.length).setValues(newRequestRows);
    SpreadsheetApp.flush();

    // 4. ซิงค์ลงชีต "หน้าเก็บข้อมูล <เดือน> <ปี>" ในไฟล์ บันทึกการเปิด W/O รวดเดียวด้วย Batch Write
    const monthKeys = Object.keys(affectedMonthsMap);
    for (let mk = 0; mk < monthKeys.length; mk++) {
      try {
        const targetDateObj = affectedMonthsMap[monthKeys[mk]];
        const woSheet = getOrCreateWoMonthSheet(targetDateObj);
        if (woSheet) {
          rebuildWoRowsForMonth(woSheet, targetDateObj);
        }
      } catch (woErr) {
        Logger.log('Warning in batch W/O sync: ' + woErr.message);
      }
    }

    SpreadsheetApp.flush();
    clearDashboardCache();

    return {
      success: true,
      count: createdRequests.length,
      total: planList.length,
      requests: createdRequests,
      message: 'นำเข้าแผน PM สำเร็จ ' + createdRequests.length + ' รายการ (บันทึกลงชีต Requests และชีตบันทึกการเปิด W/O เรียบร้อย)' + (errors.length > 0 ? (' [ข้าม ' + errors.length + ' รายการ]') : '')
    };
  } catch (err) {
    Logger.log('Error in importPmMonthlyPlan: ' + err.message);
    return { success: false, message: 'เกิดข้อผิดพลาดในการนำเข้าแบบกลุ่ม: ' + err.message };
  } finally {
    try { lock.releaseLock(); } catch (e) {}
  }
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

      let tpl = null;
      let checkLvl = req.PmCheckLevel || 'A';
      if (!req.PmCheckLevel && req.DamageAppearance) {
        const parts = req.DamageAppearance.toString().split(' ');
        if (parts.length >= 2) checkLvl = parts[1];
      }
      tpl = resolvePmTaskCard(req.EquipmentCode, checkLvl, req.EquipmentName);

      let checklistProgress = { total: tpl ? tpl.itemCount : 0, completed: 0, defects: 0 };
      const rawJson = req.PmChecklistData || req.MaintenanceDetails;
      if (rawJson && typeof rawJson === 'string' && rawJson.startsWith('{')) {
        try {
          const detail = JSON.parse(rawJson);
          req._pmDetail = detail;
          if (detail.checklist && Array.isArray(detail.checklist)) {
            let passCount = 0, defectCount = 0;
            detail.checklist.forEach(function(item) {
              if (item.checked === true || item.status === 'PASS' || item.status === 'NA') passCount++;
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
  ensureDynamicUserProfilesLoaded();
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

    const targetKey = (uuid || '').toString().trim();
    for (let i = 1; i < allData.length; i++) {
      const colUuid = (allData[i][0] != null) ? allData[i][0].toString().trim() : '';
      const colReqId = (allData[i][1] != null) ? allData[i][1].toString().trim() : '';
      if (targetKey && (colUuid === targetKey || colReqId === targetKey)) {
        rowIndex = i + 1;
        break;
      }
    }

    if (rowIndex === -1) {
      return { success: false, message: 'ไม่พบข้อมูลงาน PM ในระบบ' };
    }

    const now = new Date();
    const timestamp = Utilities.formatDate(now, 'Asia/Bangkok', 'dd/MM/yyyy HH:mm:ss');
    const defaultDateStr = Utilities.formatDate(now, 'Asia/Bangkok', 'dd/MM/yyyy');
    const defaultTimeStr = Utilities.formatDate(now, 'Asia/Bangkok', 'HH:mm');
    const todayStr = (pmReport && pmReport.completeDate && formatDateDMY(pmReport.completeDate)) ? formatDateDMY(pmReport.completeDate) : defaultDateStr;
    const timeStr = (pmReport && pmReport.completeTime && formatTime24(pmReport.completeTime)) ? formatTime24(pmReport.completeTime) : defaultTimeStr;

    const act1 = (pmReport.actionBy1 || empId).toString().trim().toUpperCase();
    let act2 = (pmReport.actionBy2 || '').toString().trim().toUpperCase();
    let act3 = (pmReport.actionBy3 || '').toString().trim().toUpperCase();
    if (act2 && act2 === act1) act2 = '';
    if (act3 && (act3 === act1 || act3 === act2)) act3 = '';

    const resolvePerformerName = function(code) {
      if (!code) return '';
      return TECHNICIAN_PROFILES[code] || SUPERVISOR_PROFILES[code] || ADMIN_PROFILES[code] || MANAGER_PROFILES[code] || code;
    };
    const techName = resolvePerformerName(act1);

    // ปรับสถานะเป็น 'รอ Supervisor ตรวจสอบ' และล้าง ReworkReason เดิม (ถ้ามี)
    sheet.getRange(rowIndex, 14).setValue('รอ Supervisor ตรวจสอบ');
    sheet.getRange(rowIndex, 20).setValue(timestamp); // LastModified
    sheet.getRange(rowIndex, 47).setValue('');        // Clear ReworkReason (Col AU)

    const curEqCode = (allData[rowIndex - 1][5] || '').toString().trim().toUpperCase();
    const isNonEngSub = curEqCode.indexOf('TLM-TB-') === 0 ||
                        curEqCode.indexOf('TLM-BC-') === 0 ||
                        curEqCode.indexOf('TLM-ES-') === 0 ||
                        curEqCode.indexOf('TLM-N2-') === 0 ||
                        (curEqCode.indexOf('TLM-PS-') === 0 && curEqCode !== 'TLM-PS-072' && curEqCode !== 'TLM-PS-073');
    let finalHrMeter = (pmReport.hrMeter || pmReport.hrKm || '').toString().trim();
    if (isNonEngSub && (!finalHrMeter || finalHrMeter === '-' || finalHrMeter === '0')) {
      finalHrMeter = 'N/A';
    }
    if (pmReport.hrKm !== undefined && pmReport.hrKm !== null) {
      sheet.getRange(rowIndex, 7).setValue(finalHrMeter);
    }

    // หากมีการระบุหรืออัปเดตเลข W/O มาพร้อมกัน
    let woNo = (allData[rowIndex - 1][17] || '').toString().trim();
    if (pmReport.workOrderNo !== undefined && pmReport.workOrderNo !== null && pmReport.workOrderNo !== '-') {
      const cleanedWo = pmReport.workOrderNo.toString().trim().replace(/\D/g, '');
      if (cleanedWo) {
        woNo = cleanedWo;
        sheet.getRange(rowIndex, 18).setValue(woNo);
      }
    }

    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    const pmDataCol = headers.indexOf('PmChecklistData') + 1;
    const maintCol = headers.indexOf('MaintenanceDetails') + 1 || 21;

    // ช่างผู้ปฏิบัติงาน (เรียงชื่อลงมาในช่อง reportedBy โดยไม่มีเลขลำดับนำหน้า)
    const techNamesList = [];
    if (act1) techNamesList.push(resolvePerformerName(act1));
    if (act2 && act2 !== act1) techNamesList.push(resolvePerformerName(act2));
    if (act3 && act3 !== act1 && act3 !== act2) techNamesList.push(resolvePerformerName(act3));
    const defaultReportedBy = techNamesList.join('\n');

    let serialNoVal = (pmReport.serialNo || '').toString().trim();
    if (!serialNoVal || serialNoVal === '-') {
      const eqItem = getEquipmentItemFromMaster(allData[rowIndex - 1][5]);
      if (eqItem && eqItem.serialNo) serialNoVal = eqItem.serialNo;
    }

    const reportObj = {
      gseNumber: allData[rowIndex - 1][5] || '',
      serialNo: serialNoVal,
      chaNo: 'N/A',
      engNo: 'N/A',
      hrMeter: finalHrMeter,
      workOrderNo: woNo,
      checkLevel: (allData[rowIndex - 1][headers.indexOf('PmCheckLevel')] || allData[rowIndex - 1][8] || '').toString().trim(),
      sectionB: Array.isArray(pmReport.sectionB) ? pmReport.sectionB : [],
      sectionC: Array.isArray(pmReport.sectionC) ? pmReport.sectionC : [],
      checklist: Array.isArray(pmReport.checklist) ? pmReport.checklist : [],
      defectFound: (pmReport.defectFound || 'NO').toString().toUpperCase().trim(),
      rectification: pmReport.rectification || '',
      materials: Array.isArray(pmReport.materials) ? pmReport.materials : [],
      reportedBy: (pmReport.reportedBy || defaultReportedBy).toString().trim(),
      verifiedBy: '',
      verifiedDate: '',
      reworkReason: '',
      completedAt: timestamp,
      completeDate: todayStr,
      completeTime: timeStr
    };
    const reportJson = JSON.stringify(reportObj);

    if (pmDataCol > 0) sheet.getRange(rowIndex, pmDataCol).setValue(reportJson);
    sheet.getRange(rowIndex, maintCol).setValue(reportJson);

    // บันทึกช่างผู้ทำและวันเวลาที่ทำเสร็จลงคอลัมน์ V, W, X, Z, AA, AB, AC, AD
    sheet.getRange(rowIndex, 22).setValue(act1);
    sheet.getRange(rowIndex, 23).setValue(act2);
    sheet.getRange(rowIndex, 24).setValue(act3);
    sheet.getRange(rowIndex, 26).setNumberFormat('@STRING@').setValue(todayStr); // CompleteDate
    sheet.getRange(rowIndex, 27).setNumberFormat('@STRING@').setValue(timeStr);  // CompleteTime
    sheet.getRange(rowIndex, 28).setValue(techName);
    sheet.getRange(rowIndex, 29).setNumberFormat('@STRING@').setValue(todayStr); // TechnicianDate
    sheet.getRange(rowIndex, 30).setNumberFormat('@STRING@').setValue(timeStr);  // TechnicianTime

    // บันทึกอะไหล่ลงชีต SpareParts (แก้ไขให้ส่งคีย์ sparePartName ตรงกับ saveSpareParts)
    const reqId = allData[rowIndex - 1][1] || '';
    if (pmReport.materials && Array.isArray(pmReport.materials)) {
      const spareList = pmReport.materials.map(function(m, idx) {
        return {
          itemNo: m.no || (idx + 1),
          sparePartName: m.desc || m.name || m.sparePartName || '',
          partNo: m.partNo || '',
          qty: m.qty || 1,
          typeModel: m.snBatch || m.typeModel || '',
          price: m.price || ''
        };
      });
      saveSpareParts(uuid, reqId, woNo, spareList, act1);
    } else if (pmReport.spareParts && Array.isArray(pmReport.spareParts)) {
      saveSpareParts(uuid, reqId, woNo, pmReport.spareParts, act1);
    }

    // ซิงค์ชื่อช่างผู้ปฏิบัติงาน 1, 2, 3 และสถานะไปยัง Sheet "บันทึกการเปิด W/O"
    try {
      const informDate = allData[rowIndex - 1][2];
      const eqCode = allData[rowIndex - 1][5];
      const damageApp = allData[rowIndex - 1][8];
      const dateObj = parseDateString(informDate);
      const woSheet = getOrCreateWoMonthSheet(dateObj);
      if (woSheet) {
        const headerRow = findWoHeaderRow(woSheet);
        let targetRow = findWoRowByUUID(woSheet, headerRow, uuid, woNo, eqCode, damageApp);
        if (!targetRow) {
          targetRow = findWoNextEmptyRow(woSheet, headerRow);
          woSheet.getRange(targetRow, 1).setValue(eqCode || '');
          woSheet.getRange(targetRow, 2).setValue(damageApp || '');
          woSheet.getRange(targetRow, 3).setValue('PM');
          woSheet.getRange(targetRow, 7).setValue('Not Print');
          woSheet.getRange(targetRow, 1).setNote('UUID:' + uuid);
        }
        if (woNo) {
          woSheet.getRange(targetRow, 4).setValue(woNo);
          const curScanVal = (woSheet.getRange(targetRow, 6).getValue() || '').toString().trim().toUpperCase();
          if (curScanVal !== 'YES') {
            woSheet.getRange(targetRow, 6).setValue('NO');
          }
        }
        woSheet.getRange(targetRow, 5).setValue('COMPLETE');
        const techDateObj = parseDateString(todayStr) || now;
        const woCloseDateStr = (techDateObj.getMonth() + 1) + '/' + techDateObj.getDate() + '/' + techDateObj.getFullYear();
        woSheet.getRange(targetRow, 10).setValue(woCloseDateStr);
        woSheet.getRange(targetRow, 11).setValue(act1 || '');
        woSheet.getRange(targetRow, 12).setValue(act2 || '');
        woSheet.getRange(targetRow, 13).setValue(act3 || '');
      }
    } catch (woSyncErr) {
      Logger.log('Warning syncing PM tech report to WO sheet: ' + woSyncErr.message);
    }

    SpreadsheetApp.flush();
    clearDashboardCache();
    return {
      success: true,
      message: 'บันทึกรายงาน Task Card สำเร็จ และส่งต่อให้ Supervisor ตรวจสอบเรียบร้อยแล้ว',
      status: 'รอ Supervisor ตรวจสอบ',
      actionBy1: act1,
      actionBy2: act2,
      actionBy3: act3,
      technicianName: techName,
      completeDate: todayStr,
      completeTime: timeStr,
      workOrderNo: woNo,
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
 * rejectPmTaskCard - Supervisor หรือ Manager ตีกลับงาน PM ให้ช่างแก้ไข (Rework)
 */
function rejectPmTaskCard(uuid, reviewerEmpId, reason) {
  ensureDynamicUserProfilesLoaded();
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(15000);
  } catch(e) {
    return { success: false, message: 'ระบบกำลังมีการบันทึกข้อมูล กรุณาลองใหม่อีกครั้ง' };
  }

  try {
    if (!uuid) return { success: false, message: 'ไม่พบรหัสงาน PM' };
    const cleanReason = (reason || '').toString().trim();
    if (!cleanReason) {
      return { success: false, message: 'กรุณาระบุเหตุผลที่ส่งกลับให้ช่างแก้ไข (Rework Reason)' };
    }

    const empId = (reviewerEmpId || '').toString().trim().toUpperCase();
    const isSup = SUPERVISOR_IDS.includes(empId);
    const isMgr = MANAGER_IDS.includes(empId);
    const isAdmin = ADMIN_IDS.includes(empId);
    if (!isSup && !isMgr && !isAdmin) {
      return { success: false, message: 'คุณไม่มีสิทธิ์ส่งกลับแก้ไขงาน PM (เฉพาะ Supervisor, Manager หรือ Admin)' };
    }

    const reviewerName = SUPERVISOR_PROFILES[empId] || MANAGER_PROFILES[empId] || ADMIN_PROFILES[empId] || empId;
    const roleLabel = isMgr ? 'Manager' : (isSup ? 'Supervisor' : 'Admin');

    const sheet = getRequestsSheet();
    ensureRequestHeaders(sheet);
    const allData = sheet.getDataRange().getValues();
    let rowIndex = -1;

    const targetKey = (uuid || '').toString().trim();
    for (let i = 1; i < allData.length; i++) {
      const colUuid = (allData[i][0] != null) ? allData[i][0].toString().trim() : '';
      const colReqId = (allData[i][1] != null) ? allData[i][1].toString().trim() : '';
      if (targetKey && (colUuid === targetKey || colReqId === targetKey)) {
        rowIndex = i + 1;
        break;
      }
    }

    if (rowIndex === -1) {
      return { success: false, message: 'ไม่พบข้อมูลงาน PM' };
    }

    const now = new Date();
    const timestamp = Utilities.formatDate(now, 'Asia/Bangkok', 'dd/MM/yyyy HH:mm:ss');
    const fullReworkText = '[' + roleLabel + ': ' + reviewerName + '] ' + cleanReason;

    // ปรับสถานะกลับเป็น 'กำลังซ่อม' (กำลังทำ PM) เพื่อให้นำกลับมาแก้ไขและส่งใหม่ได้
    sheet.getRange(rowIndex, 14).setValue('กำลังซ่อม');
    sheet.getRange(rowIndex, 20).setValue(timestamp);
    sheet.getRange(rowIndex, 47).setValue(fullReworkText); // Col AU - ReworkReason

    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    const pmDataCol = headers.indexOf('PmChecklistData') + 1;
    if (pmDataCol > 0) {
      let pmObj = {};
      try {
        const curJson = sheet.getRange(rowIndex, pmDataCol).getValue();
        if (curJson) pmObj = JSON.parse(curJson);
      } catch(e) {}
      pmObj.reworkReason = fullReworkText;
      pmObj.verifiedBy = '';
      pmObj.verifiedDate = '';
      sheet.getRange(rowIndex, pmDataCol).setValue(JSON.stringify(pmObj));
    }

    // ปรับสถานะในชีต W/O กลับเป็น OPEN
    try {
      const informDate = allData[rowIndex - 1][2];
      const woNo = allData[rowIndex - 1][17];
      const eqCode = allData[rowIndex - 1][5];
      const damage = allData[rowIndex - 1][8];
      const dateObj = parseDateString(informDate);
      const woSheet = getOrCreateWoMonthSheet(dateObj);
      if (woSheet) {
        const headerRow = findWoHeaderRow(woSheet);
        const targetRow = findWoRowByUUID(woSheet, headerRow, uuid, woNo, eqCode, damage);
        if (targetRow) {
          woSheet.getRange(targetRow, 5).setValue('OPEN');
          woSheet.getRange(targetRow, 10).setValue('');
        }
      }
    } catch (eWo) {
      Logger.log('Error rolling back WO sheet on PM reject: ' + eWo.message);
    }

    SpreadsheetApp.flush();
    clearDashboardCache();
    return {
      success: true,
      status: 'กำลังซ่อม',
      reworkReason: fullReworkText,
      message: 'ส่งงาน PM กลับให้ช่างแก้ไขเรียบร้อยแล้ว'
    };
  } catch (err) {
    Logger.log('Error in rejectPmTaskCard: ' + err.message);
    return { success: false, message: 'เกิดข้อผิดพลาด: ' + err.message };
  } finally {
    try { lock.releaseLock(); } catch(e) {}
  }
}

/**
 * approvePmSupervisor - Supervisor ตรวจสอบและลงนามงาน PM (ส่งต่อให้ Manager อนุมัติ)
 */
function approvePmSupervisor(uuid, supervisorEmpId, notes) {
  ensureDynamicUserProfilesLoaded();
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

    const targetKey = (uuid || '').toString().trim();
    for (let i = 1; i < allData.length; i++) {
      const colUuid = (allData[i][0] != null) ? allData[i][0].toString().trim() : '';
      const colReqId = (allData[i][1] != null) ? allData[i][1].toString().trim() : '';
      if (targetKey && (colUuid === targetKey || colReqId === targetKey)) {
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

    // ซิงค์ไปยัง Sheet "บันทึกการเปิด W/O": ยืนยัน Col E = COMPLETE และเติมวันที่ปิด (Col J) จากวันที่ช่างทำเสร็จ
    try {
      const informDate = allData[rowIndex - 1][2] || '';
      const woNo = allData[rowIndex - 1][17] || '';
      const eqCode = allData[rowIndex - 1][5] || '';
      const damage = allData[rowIndex - 1][8] || '';
      const dateObj = parseDateString(informDate);
      const woSheet = getOrCreateWoMonthSheet(dateObj);
      if (woSheet) {
        const headerRow = findWoHeaderRow(woSheet);
        const targetRow = findWoRowByUUID(woSheet, headerRow, uuid, woNo, eqCode, damage);
        if (targetRow) {
          woSheet.getRange(targetRow, 5).setValue('COMPLETE');
          const curCloseVal = (woSheet.getRange(targetRow, 10).getValue() || '').toString().trim();
          if (!curCloseVal) {
            const techCloseDateStr = resolveTechnicianWoCloseDateStr(allData[rowIndex - 1], now);
            if (techCloseDateStr) woSheet.getRange(targetRow, 10).setValue(techCloseDateStr);
          }
        }
      }
    } catch (supWoErr) {
      Logger.log('Sync to WO sheet on PM supervisor approve error: ' + supWoErr.message);
    }

    SpreadsheetApp.flush();
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
  ensureDynamicUserProfilesLoaded();
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

    const targetKey = (uuid || '').toString().trim();
    for (let i = 1; i < allData.length; i++) {
      const colUuid = (allData[i][0] != null) ? allData[i][0].toString().trim() : '';
      const colReqId = (allData[i][1] != null) ? allData[i][1].toString().trim() : '';
      if (targetKey && (colUuid === targetKey || colReqId === targetKey)) {
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

    // อัพเดตสถานะ -> 'COMPLETE'
    sheet.getRange(rowIndex, 14).setValue('COMPLETE');
    sheet.getRange(rowIndex, 20).setValue(timestamp);
    sheet.getRange(rowIndex, 48).setValue('COMPLETE'); // Col AV - WoSheetStatus

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
      const supNameVal = allData[rowIndex - 1][32] || (pmObj.verifiedBy ? pmObj.verifiedBy.split('\n')[0] : '');
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
          const curCloseVal = (woSheet.getRange(targetRow, 10).getValue() || '').toString().trim();
          if (!curCloseVal) {
            const techCloseDateStr = resolveTechnicianWoCloseDateStr(allData[rowIndex - 1], now);
            if (techCloseDateStr) woSheet.getRange(targetRow, 10).setValue(techCloseDateStr);
          }
        }
      }
    } catch(syncErr) {
      Logger.log('Sync to WO sheet on PM manager approve error: ' + syncErr.message);
    }

    SpreadsheetApp.flush();
    clearDashboardCache();
    return {
      success: true,
      message: 'Manager ลงนามอนุมัติงาน PM เรียบร้อยแล้ว (สถานะเป็น COMPLETE - รอ Admin ปิดงานในระบบ)',
      status: 'COMPLETE',
      managerName: mgrName,
      managerDate: todayStr
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
  ensureDynamicUserProfilesLoaded();
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

    const targetKey = (uuid || '').toString().trim();
    for (let i = 1; i < allData.length; i++) {
      const colUuid = (allData[i][0] != null) ? allData[i][0].toString().trim() : '';
      const colReqId = (allData[i][1] != null) ? allData[i][1].toString().trim() : '';
      if (targetKey && (colUuid === targetKey || colReqId === targetKey)) {
        rowIndex = i + 1;
        break;
      }
    }

    if (rowIndex === -1) {
      return { success: false, message: 'ไม่พบข้อมูลงาน PM' };
    }

    const currentStatus = (allData[rowIndex - 1][13] || '').toString().trim();
    const allowedCloseStatuses = ['COMPLETE', 'รอ Manager อนุมัติ', 'รอ Supervisor ตรวจสอบ', 'รอตรวจสอบ'];
    if (allowedCloseStatuses.indexOf(currentStatus) === -1 && currentStatus !== 'เสร็จสิ้น') {
      return { success: false, message: 'สามารถปิดงานได้ตั้งแต่สถานะ "รอ Manager อนุมัติ" หรือ "COMPLETE" (สถานะปัจจุบัน: ' + currentStatus + ')' };
    }

    const now = new Date();
    const timestamp = Utilities.formatDate(now, 'Asia/Bangkok', 'dd/MM/yyyy HH:mm:ss');
    const todayStr = Utilities.formatDate(now, 'Asia/Bangkok', 'dd/MM/yyyy');

    const curReqScan = (allData[rowIndex - 1][53] || '').toString().trim().toUpperCase();
    let finalScanDoc = curReqScan === 'YES' ? 'YES' : 'NO';

    // ซิงค์ไปยัง Sheet "บันทึกการเปิด W/O": ปรับ Col E เป็น CLOSED + Col F เป็น NO + วันที่ปิด (Col J)
    const informDate = allData[rowIndex - 1][2] || '';
    const woNo = allData[rowIndex - 1][17] || '';
    const eqCode = allData[rowIndex - 1][5] || '';
    const damage = allData[rowIndex - 1][8] || '';

    try {
      const dateObj = parseDateString(informDate);
      const woSheet = getOrCreateWoMonthSheet(dateObj);
      if (woSheet) {
        const headerRow = findWoHeaderRow(woSheet);
        let targetRow = findWoRowByUUID(woSheet, headerRow, uuid, woNo, eqCode, damage);
        if (!targetRow) {
          targetRow = findWoNextEmptyRow(woSheet, headerRow);
          woSheet.getRange(targetRow, 1).setValue(eqCode || '');
          woSheet.getRange(targetRow, 2).setValue(damage || '');
          woSheet.getRange(targetRow, 3).setValue('PM');
          if (woNo) woSheet.getRange(targetRow, 4).setValue(woNo);
          woSheet.getRange(targetRow, 7).setValue('Not Print');
          woSheet.getRange(targetRow, 1).setNote('UUID:' + uuid);
        }
        woSheet.getRange(targetRow, 5).setValue('CLOSED');
        const curWoScan = (woSheet.getRange(targetRow, 6).getValue() || '').toString().trim().toUpperCase();
        if (curWoScan === 'YES') {
          finalScanDoc = 'YES';
        } else {
          woSheet.getRange(targetRow, 6).setValue('NO');
        }
        const closeDateStr = resolveTechnicianWoCloseDateStr(allData[rowIndex - 1], now);
        woSheet.getRange(targetRow, 10).setValue(closeDateStr);
      }
    } catch(syncErr) {
      Logger.log('Sync to WO sheet on PM admin close error: ' + syncErr.message);
    }

    // ปรับสถานะใน Requests เป็น 'เสร็จสิ้น', WoSheetStatus = 'CLOSED', WoScanDoc = finalScanDoc
    sheet.getRange(rowIndex, 14).setValue('เสร็จสิ้น');
    sheet.getRange(rowIndex, 20).setValue(timestamp); // LastModified
    sheet.getRange(rowIndex, 48).setValue('CLOSED');
    sheet.getRange(rowIndex, 49).setValue(todayStr);
    sheet.getRange(rowIndex, 54).setValue(finalScanDoc);

    SpreadsheetApp.flush();
    clearDashboardCache();
    return {
      success: true,
      message: 'Admin ปิดงานเรียบร้อยแล้ว (สถานะ W/O: CLOSED | สแกนเอกสาร: ' + finalScanDoc + ')',
      status: 'เสร็จสิ้น',
      woSheetStatus: 'CLOSED',
      woClosedDate: todayStr,
      woScanDoc: finalScanDoc
    };
  } catch(err) {
    Logger.log('Error in closePmJobByAdmin: ' + err.message);
    return { success: false, message: 'เกิดข้อผิดพลาด: ' + err.message };
  } finally {
    try { lock.releaseLock(); } catch(e) {}
  }
}



// ============================================================
// === PM FORM / TEMPLATE MANAGER (ADMIN ONLY) ===
// ============================================================

const PM_TEMPLATES_SHEET_NAME = 'PM_Templates_DB';
const CUSTOM_PM_CACHE_KEY = 'CUSTOM_PM_TEMPLATES_CACHE_V1';

/**
 * สร้างหรือดึงชีต PM_Templates_DB สำหรับเก็บแม่แบบใบงาน PM ที่ Admin เพิ่ม/แก้ไข/ลบ
 */
function getOrCreatePmTemplatesSheet() {
  const ss = getSpreadsheet();
  let sheet = ss.getSheetByName(PM_TEMPLATES_SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(PM_TEMPLATES_SHEET_NAME);
    const headers = [
      'ModelKey', 'CheckLevel', 'Action', 'GseType',
      'Brand', 'Model', 'MappedGseCodes', 'PdfFileId',
      'ChecklistJson', 'UpdatedBy', 'UpdatedAt'
    ];
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold').setBackground('#E2E8F0');
  }
  return sheet;
}

/**
 * สกัด Google Drive File ID จากลิงก์เต็ม หรือคืนค่า ID เดิมหากใส่มาเฉพาะรหัสไฟล์
 */
function extractDriveFileIdFromInput(inputStr) {
  if (!inputStr) return '';
  const s = inputStr.toString().trim();
  if (!s) return '';
  const m1 = s.match(/\/d\/([a-zA-Z0-9_\-]{15,})/);
  if (m1) return m1[1];
  const m2 = s.match(/[?&]id=([a-zA-Z0-9_\-]{15,})/);
  if (m2) return m2[1];
  return s;
}

/**
 * ดึงข้อมูลแม่แบบ PM ที่ Admin เพิ่ม/แก้ไข/ลบทั้งหมด
 */
function getCustomPmTemplatesConfig() {
  try {
    const cache = CacheService.getScriptCache();
    const cached = cache.get(CUSTOM_PM_CACHE_KEY);
    if (cached) {
      try { return JSON.parse(cached); } catch(e) {}
    }

    const ss = getSpreadsheet();
    const sheet = ss.getSheetByName(PM_TEMPLATES_SHEET_NAME);
    if (!sheet) {
      return { upserts: [], deletes: [] };
    }

    const data = sheet.getDataRange().getValues();
    if (data.length <= 1) {
      return { upserts: [], deletes: [] };
    }

    const upserts = [];
    const deletes = [];

    for (let i = 1; i < data.length; i++) {
      const r = data[i];
      const modelKey = (r[0] || '').toString().trim().toUpperCase();
      const checkLevel = (r[1] || '').toString().trim().toUpperCase();
      const action = (r[2] || 'UPSERT').toString().trim().toUpperCase();
      if (!modelKey) continue;

      if (action === 'DELETE') {
        deletes.push({
          modelKey: modelKey,
          checkLevel: checkLevel || 'ALL',
          updatedBy: (r[9] || '').toString(),
          updatedAt: (r[10] || '').toString()
        });
      } else {
        let items = [];
        let defaultSectionB = [];
        let defaultSectionC = [];
        let applyBCToAllLevels = true;
        try {
          const parsedCol8 = JSON.parse(r[8] || '[]');
          if (Array.isArray(parsedCol8)) {
            items = parsedCol8;
          } else if (parsedCol8 && typeof parsedCol8 === 'object') {
            items = Array.isArray(parsedCol8.items) ? parsedCol8.items : [];
            defaultSectionB = Array.isArray(parsedCol8.defaultSectionB) ? parsedCol8.defaultSectionB : [];
            defaultSectionC = Array.isArray(parsedCol8.defaultSectionC) ? parsedCol8.defaultSectionC : [];
            if (parsedCol8.applyBCToAllLevels !== undefined) applyBCToAllLevels = !!parsedCol8.applyBCToAllLevels;
          }
        } catch(e) {}
        upserts.push({
          modelKey: modelKey,
          checkLevel: checkLevel || 'A',
          gseType: (r[3] || '').toString().trim().toUpperCase(),
          brand: (r[4] || '').toString().trim(),
          model: (r[5] || '').toString().trim(),
          mappedGseCodes: (r[6] || '').toString().trim().toUpperCase(),
          pdfFileId: (r[7] || '').toString().trim(),
          items: items,
          defaultSectionB: defaultSectionB,
          defaultSectionC: defaultSectionC,
          applyBCToAllLevels: applyBCToAllLevels,
          updatedBy: (r[9] || '').toString(),
          updatedAt: (r[10] || '').toString()
        });
      }
    }

    const resObj = { upserts: upserts, deletes: deletes };
    try {
      cache.put(CUSTOM_PM_CACHE_KEY, JSON.stringify(resObj), 300);
    } catch(e) {}
    return resObj;
  } catch (err) {
    Logger.log('Error in getCustomPmTemplatesConfig: ' + err.message);
    return { upserts: [], deletes: [] };
  }
}

/**
 * saveCustomPmTemplate - เฉพาะ Admin เพิ่มหรือแก้ไขแม่แบบใบงาน PM (Form PM)
 */
function saveCustomPmTemplate(formData, adminEmpId) {
  ensureDynamicUserProfilesLoaded();
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(15000);
  } catch(e) {
    return { success: false, message: 'ระบบกำลังบันทึกข้อมูล กรุณาลองใหม่อีกครั้ง' };
  }

  try {
    const empId = (adminEmpId || '').toString().trim().toUpperCase();
    if (!ADMIN_IDS.includes(empId)) {
      return { success: false, message: 'ปฏิเสธสิทธิ์: เฉพาะ User Admin เท่านั้นที่สามารถเพิ่มหรือแก้ไข Form PM ได้' };
    }

    if (!formData || !formData.modelKey) {
      return { success: false, message: 'กรุณาระบุรหัสแม่แบบ (Model Key) เช่น TR-TLD-025-TLM' };
    }

    let modelKey = formData.modelKey.toString().trim().toUpperCase().replace(/\s+/g, '-');
    if (!modelKey.endsWith('-TLM')) {
      modelKey = modelKey.replace(/-[ABC]$/i, '') + '-TLM';
    }

    let checkLevel = (formData.checkLevel || 'A').toString().trim().toUpperCase();
    checkLevel = checkLevel.replace(/\bPM\b/g, '').replace(/\bCHECK\b/g, '').replace(/\bSCHEDULE\b/g, '').trim();
    if (checkLevel === 'C' || /\bC\b/.test(checkLevel)) checkLevel = 'C';
    else if (checkLevel === 'B' || /\bB\b/.test(checkLevel)) checkLevel = 'B';
    else checkLevel = 'A';

    const gseType = (formData.gseType || modelKey.split('-')[0] || 'TR').toString().trim().toUpperCase();
    const brand = (formData.brand || '').toString().trim().toUpperCase();
    const model = (formData.model || '').toString().trim().toUpperCase();
    const mappedGseCodes = (formData.mappedGseCodes || '').toString().trim().toUpperCase();
    const pdfFileId = extractDriveFileIdFromInput(formData.pdfFileId || '');

    let items = [];
    if (Array.isArray(formData.items)) {
      items = formData.items.map(function(it, idx) {
        return {
          no: idx + 1,
          desc: (it.desc || it.text || it || '').toString().trim()
        };
      }).filter(function(it) { return !!it.desc; });
    }

    if (items.length === 0) {
      return { success: false, message: 'กรุณาระบุรายการตรวจเช็ค (Checklist Items) อย่างน้อย 1 รายการ' };
    }

    const sheet = getOrCreatePmTemplatesSheet();
    const allData = sheet.getDataRange().getValues();
    const nowStr = Utilities.formatDate(new Date(), 'Asia/Bangkok', 'dd/MM/yyyy HH:mm:ss');

    const isTbForm = (gseType === 'TB' || modelKey.indexOf('TB-') === 0);
    const defaultSectionB = (!isTbForm && Array.isArray(formData.defaultSectionB))
      ? formData.defaultSectionB.map(function(b) {
          return { ref: (b.ref || b.reference || '').toString().trim(), desc: (b.desc || b.description || '').toString().trim() };
        }).filter(function(b) { return !!(b.ref || b.desc); })
      : [];
    const defaultSectionC = (!isTbForm && Array.isArray(formData.defaultSectionC))
      ? formData.defaultSectionC.map(function(c) {
          return { desc: (c.desc || c.description || '').toString().trim(), spec: (c.spec || c.specification || '').toString().trim() };
        }).filter(function(c) { return !!(c.desc || c.spec); })
      : [];
    const applyBCToAllLevels = formData.applyBCToAllLevels !== false;

    const col8Data = {
      items: items,
      defaultSectionB: defaultSectionB,
      defaultSectionC: defaultSectionC,
      applyBCToAllLevels: applyBCToAllLevels
    };

    const rowPayload = [
      modelKey,
      checkLevel,
      'UPSERT',
      gseType,
      brand,
      model,
      mappedGseCodes,
      pdfFileId,
      JSON.stringify(col8Data),
      empId,
      nowStr
    ];

    let foundRow = -1;
    for (let i = 1; i < allData.length; i++) {
      const rKey = (allData[i][0] || '').toString().trim().toUpperCase();
      const rLvl = (allData[i][1] || '').toString().trim().toUpperCase();
      if (rKey === modelKey && (rLvl === checkLevel || rLvl === 'ALL')) {
        foundRow = i + 1;
        break;
      }
    }

    if (foundRow > 0) {
      sheet.getRange(foundRow, 1, 1, rowPayload.length).setValues([rowPayload]);
    } else {
      sheet.appendRow(rowPayload);
    }

    SpreadsheetApp.flush();
    try {
      CacheService.getScriptCache().remove(CUSTOM_PM_CACHE_KEY);
    } catch(e) {}
    clearDashboardCache();

    return {
      success: true,
      message: 'บันทึกแม่แบบ Form PM (' + modelKey + ' - Check ' + checkLevel + ') เรียบร้อยแล้ว (' + items.length + ' รายการ)',
      customPmConfig: getCustomPmTemplatesConfig()
    };
  } catch (err) {
    Logger.log('Error in saveCustomPmTemplate: ' + err.message);
    return { success: false, message: 'เกิดข้อผิดพลาดในการบันทึก Form PM: ' + err.message };
  } finally {
    try { lock.releaseLock(); } catch(e) {}
  }
}

/**
 * deleteCustomPmTemplate - เฉพาะ Admin ลบแม่แบบใบงาน PM (ลบเฉพาะ Check Level หรือลบทั้งรุ่น)
 */
function deleteCustomPmTemplate(modelKeyInput, checkLevelInput, adminEmpId) {
  ensureDynamicUserProfilesLoaded();
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(15000);
  } catch(e) {
    return { success: false, message: 'ระบบกำลังบันทึกข้อมูล กรุณาลองใหม่อีกครั้ง' };
  }

  try {
    const empId = (adminEmpId || '').toString().trim().toUpperCase();
    if (!ADMIN_IDS.includes(empId)) {
      return { success: false, message: 'ปฏิเสธสิทธิ์: เฉพาะ User Admin เท่านั้นที่สามารถลบ Form PM ได้' };
    }

    const modelKey = (modelKeyInput || '').toString().trim().toUpperCase();
    const checkLevel = (checkLevelInput || 'ALL').toString().trim().toUpperCase();
    if (!modelKey) {
      return { success: false, message: 'ไม่พบรหัสแม่แบบ Form PM ที่ต้องการลบ' };
    }

    const sheet = getOrCreatePmTemplatesSheet();
    const allData = sheet.getDataRange().getValues();
    const nowStr = Utilities.formatDate(new Date(), 'Asia/Bangkok', 'dd/MM/yyyy HH:mm:ss');

    // ลบแถว UPSERT เดิมในชีต (ถ้ามี) และบันทึกสถานะ DELETE เพื่อซ่อนแม่แบบมาตรฐานด้วย
    for (let i = allData.length - 1; i >= 1; i--) {
      const rKey = (allData[i][0] || '').toString().trim().toUpperCase();
      const rLvl = (allData[i][1] || '').toString().trim().toUpperCase();
      if (rKey === modelKey && (checkLevel === 'ALL' || rLvl === checkLevel)) {
        sheet.deleteRow(i + 1);
      }
    }

    sheet.appendRow([
      modelKey,
      checkLevel,
      'DELETE',
      '', '', '', '', '', '[]',
      empId,
      nowStr
    ]);

    SpreadsheetApp.flush();
    try {
      CacheService.getScriptCache().remove(CUSTOM_PM_CACHE_KEY);
    } catch(e) {}
    clearDashboardCache();

    return {
      success: true,
      message: 'ลบแม่แบบ Form PM (' + modelKey + (checkLevel === 'ALL' ? ' ทั้งรุ่น' : ' Check ' + checkLevel) + ') เรียบร้อยแล้ว',
      customPmConfig: getCustomPmTemplatesConfig()
    };
  } catch (err) {
    Logger.log('Error in deleteCustomPmTemplate: ' + err.message);
    return { success: false, message: 'เกิดข้อผิดพลาดในการลบ Form PM: ' + err.message };
  } finally {
    try { lock.releaseLock(); } catch(e) {}
  }
}



// ============================================================
// === USER ID MANAGEMENT (CREATE / BULK CREATE / EDIT / DELETE — ADMIN ONLY) ===
// ============================================================

/**
 * ดึงรายชื่อผู้ใช้งานทั้งหมดในระบบ (รวมทั้งค่าเริ่มต้นและในชีต Users) สำหรับ Admin
 */
function getAllUsersForAdmin(adminEmpId) {
  try {
    ensureDynamicUserProfilesLoaded(true);
    const empId = (adminEmpId || '').toString().trim().toUpperCase();
    if (!ADMIN_IDS.includes(empId)) {
      return { success: false, message: 'ปฏิเสธสิทธิ์: เฉพาะ User Admin เท่านั้นที่สามารถดูและจัดการบัญชีผู้ใช้ได้' };
    }

    const deletedSet = getDeletedUserIdsSet();
    const usersMap = {};

    // 1. โหลดรายชื่อเริ่มต้นของระบบ (Admin, Manager, Supervisor, Technician, User) ที่ยังไม่ถูกลบ
    Object.keys(ADMIN_PROFILES).forEach(function(id) {
      if (deletedSet.has(id)) return;
      usersMap[id] = { employeeId: id, fullName: ADMIN_PROFILES[id], role: 'admin', department: 'GSE Admin', tel: '', isBuiltIn: true };
    });
    Object.keys(MANAGER_PROFILES).forEach(function(id) {
      if (deletedSet.has(id)) return;
      usersMap[id] = { employeeId: id, fullName: MANAGER_PROFILES[id], role: 'manager', department: 'GSE Maintenance Manager', tel: '', isBuiltIn: true };
    });
    Object.keys(SUPERVISOR_PROFILES).forEach(function(id) {
      if (deletedSet.has(id)) return;
      usersMap[id] = { employeeId: id, fullName: SUPERVISOR_PROFILES[id], role: 'supervisor', department: (id === 'TL237209' ? 'GSE Supervisor DMK' : 'GSE Maintenance Technician Supervisor'), tel: '', isBuiltIn: true };
    });
    Object.keys(TECHNICIAN_PROFILES).forEach(function(id) {
      if (deletedSet.has(id)) return;
      usersMap[id] = { employeeId: id, fullName: TECHNICIAN_PROFILES[id], role: 'technician', department: 'Technician', tel: '', isBuiltIn: true };
    });
    Object.keys(USER_PROFILES).forEach(function(id) {
      if (deletedSet.has(id)) return;
      usersMap[id] = { employeeId: id, fullName: USER_PROFILES[id], role: 'user', department: USER_DEPARTMENTS[id] || 'GSE', tel: '', isBuiltIn: true };
    });

    // 2. ผสานข้อมูลล่าสุดจากชีต Users (และกรองแถวที่ระบบเก่าเคยสร้างอัตโนมัติโดยไม่มีชื่อจริงออก)
    const sheet = getUsersSheet();
    if (sheet) {
      const data = sheet.getDataRange().getValues();
      for (let i = 1; i < data.length; i++) {
        const uId = (data[i][0] || '').toString().trim().toUpperCase();
        if (!uId || deletedSet.has(uId)) continue;
        const uName = (data[i][1] || '').toString().trim();
        if (isAutoCreatedGuestRow(uId, uName)) continue;
        const uRole = (data[i][2] || 'user').toString().trim().toLowerCase();
        const uDept = (data[i][3] || '').toString().trim();
        const uTel = (data[i][4] || '').toString().trim();

        const prev = usersMap[uId] || {};
        usersMap[uId] = {
          employeeId: uId,
          fullName: (uName && uName !== uId) ? uName : (prev.fullName || uName || uId),
          role: uRole || prev.role || 'user',
          department: uDept || prev.department || '',
          tel: uTel || prev.tel || '',
          inSheet: true
        };
      }
    }

    const roleOrder = { 'admin': 1, 'manager': 2, 'supervisor': 3, 'technician': 4, 'user': 5 };
    const usersList = Object.keys(usersMap).map(function(k) { return usersMap[k]; }).sort(function(a, b) {
      const oa = roleOrder[a.role] || 9;
      const ob = roleOrder[b.role] || 9;
      if (oa !== ob) return oa - ob;
      return a.employeeId.localeCompare(b.employeeId);
    });

    return {
      success: true,
      users: usersList
    };
  } catch (err) {
    Logger.log('Error in getAllUsersForAdmin: ' + err.message);
    return { success: false, message: 'เกิดข้อผิดพลาดในการโหลดรายชื่อผู้ใช้: ' + err.message };
  }
}

/**
 * adminSaveUser - ให้เฉพาะ Admin สร้าง User ID ใหม่ หรือแก้ไขข้อมูล User ID เดิมลงในชีต Users
 */
function adminSaveUser(userData, adminEmpId) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(15000);
  } catch(e) {
    return { success: false, message: 'ระบบกำลังบันทึกข้อมูล กรุณาลองใหม่อีกครั้ง' };
  }

  try {
    ensureDynamicUserProfilesLoaded();
    const empId = (adminEmpId || '').toString().trim().toUpperCase();
    if (!ADMIN_IDS.includes(empId)) {
      return { success: false, message: 'ปฏิเสธสิทธิ์: เฉพาะ User Admin เท่านั้นที่สามารถสร้างหรือแก้ไข User ID ได้' };
    }

    if (!userData || !userData.employeeId) {
      return { success: false, message: 'กรุณาระบุรหัสพนักงาน (User ID)' };
    }

    const targetId = userData.employeeId.toString().trim().toUpperCase().replace(/\s+/g, '');
    if (!/^TL\d{6}$/.test(targetId)) {
      return { success: false, message: 'รหัสพนักงาน (User ID) ต้องขึ้นต้นด้วย TL ตามด้วยตัวเลข 6 หลัก (รวม 8 ตัวอักษร เช่น TL123456)' };
    }

    const fullName = (userData.fullName || '').toString().trim();
    if (!fullName || fullName.toUpperCase() === targetId) {
      return { success: false, message: 'กรุณาระบุชื่อ-นามสกุลจริงของพนักงาน (Full Name)' };
    }

    const validRoles = ['user', 'technician', 'supervisor', 'manager', 'admin'];
    let role = (userData.role || 'user').toString().trim().toLowerCase();
    if (validRoles.indexOf(role) === -1) role = 'user';

    const department = (userData.department || '').toString().trim();
    const tel = (userData.tel || '').toString().trim();

    // หากเคยถูกลบไว้ก่อนหน้า ให้ปลดล็อกออกจากรายการลบ
    const deletedSet = getDeletedUserIdsSet();
    if (deletedSet.has(targetId)) {
      deletedSet.delete(targetId);
      saveDeletedUserIdsSet(deletedSet);
    }

    const sheet = getUsersSheet();
    const data = sheet.getDataRange().getValues();
    let foundRow = -1;
    for (let i = 1; i < data.length; i++) {
      if ((data[i][0] || '').toString().trim().toUpperCase() === targetId) {
        foundRow = i + 1;
        break;
      }
    }

    const rowValues = [targetId, fullName, role, department, tel];
    const isUpdate = foundRow > 0;
    if (isUpdate) {
      sheet.getRange(foundRow, 1, 1, 5).setValues([rowValues]);
    } else {
      sheet.appendRow(rowValues);
    }

    SpreadsheetApp.flush();
    try {
      CacheService.getScriptCache().remove(DYNAMIC_USERS_CACHE_KEY);
    } catch(e) {}
    ensureDynamicUserProfilesLoaded(true);

    const allRes = getAllUsersForAdmin(empId);
    return {
      success: true,
      isUpdate: isUpdate,
      message: (isUpdate ? 'อัปเดตข้อมูล User ID ' : 'สร้าง User ID ใหม่ ') + targetId + ' (' + fullName + ' — สิทธิ์ ' + role.toUpperCase() + ') เรียบร้อยแล้ว',
      users: allRes.users || [],
      technicians: getTechniciansList()
    };
  } catch (err) {
    Logger.log('Error in adminSaveUser: ' + err.message);
    return { success: false, message: 'เกิดข้อผิดพลาดในการบันทึก User ID: ' + err.message };
  } finally {
    try { lock.releaseLock(); } catch(e) {}
  }
}

/**
 * adminBulkSaveUsers - ให้เฉพาะ User Admin เพิ่มหรืออัปเดต User หลายคนพร้อมกันในครั้งเดียว (Batch Upsert)
 */
function adminBulkSaveUsers(usersList, adminEmpId) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(20000);
  } catch (e) {
    return { success: false, message: 'ระบบกำลังบันทึกข้อมูล กรุณาลองใหม่อีกครั้ง' };
  }

  try {
    ensureDynamicUserProfilesLoaded();
    const empId = (adminEmpId || '').toString().trim().toUpperCase();
    if (!ADMIN_IDS.includes(empId)) {
      return { success: false, message: 'ปฏิเสธสิทธิ์: เฉพาะ User Admin เท่านั้นที่สามารถเพิ่มผู้ใช้งานหลายคนพร้อมกันได้' };
    }

    if (!Array.isArray(usersList) || usersList.length === 0) {
      return { success: false, message: 'ไม่พบรายการผู้ใช้งานที่ต้องการบันทึก กรุณาตรวจสอบข้อมูลอีกครั้ง' };
    }

    const validRoles = ['user', 'technician', 'supervisor', 'manager', 'admin'];
    const deletedSet = getDeletedUserIdsSet();
    let deletedSetChanged = false;

    const sheet = getUsersSheet();
    const data = sheet.getDataRange().getValues();
    const existingRowMap = {};
    for (let i = 1; i < data.length; i++) {
      const rowId = (data[i][0] || '').toString().trim().toUpperCase();
      if (rowId && !existingRowMap[rowId]) {
        existingRowMap[rowId] = i + 1;
      }
    }

    const seenInBatch = {};
    const newRowsToAppend = [];
    let createdCount = 0;
    let updatedCount = 0;
    const errors = [];

    for (let idx = 0; idx < usersList.length; idx++) {
      const item = usersList[idx] || {};
      const targetId = (item.employeeId || '').toString().trim().toUpperCase().replace(/\s+/g, '');
      const fullName = (item.fullName || '').toString().trim();
      let role = (item.role || 'user').toString().trim().toLowerCase();
      if (validRoles.indexOf(role) === -1) role = 'user';
      const department = (item.department || '').toString().trim();
      const tel = (item.tel || '').toString().trim();

      if (!targetId) continue;

      if (!/^TL\d{6}$/.test(targetId)) {
        errors.push('แถวที่ ' + (idx + 1) + ' (' + targetId + '): รหัสต้องขึ้นต้นด้วย TL ตามด้วยตัวเลข 6 หลัก');
        continue;
      }
      if (!fullName || fullName.toUpperCase() === targetId) {
        errors.push('แถวที่ ' + (idx + 1) + ' (' + targetId + '): กรุณาระบุชื่อ-นามสกุลจริงของพนักงาน');
        continue;
      }

      if (deletedSet.has(targetId)) {
        deletedSet.delete(targetId);
        deletedSetChanged = true;
      }

      const rowValues = [targetId, fullName, role, department, tel];

      if (seenInBatch[targetId]) {
        // กรณีมีรหัสซ้ำในชุดข้อมูลเดียวกัน ให้ใช้ข้อมูลบรรทัดล่าสุดทับ
        const prevRef = seenInBatch[targetId];
        if (prevRef.type === 'existing') {
          sheet.getRange(prevRef.rowNumber, 1, 1, 5).setValues([rowValues]);
        } else if (prevRef.type === 'append') {
          newRowsToAppend[prevRef.appendIndex] = rowValues;
        }
        continue;
      }

      if (existingRowMap[targetId]) {
        const rowNum = existingRowMap[targetId];
        sheet.getRange(rowNum, 1, 1, 5).setValues([rowValues]);
        seenInBatch[targetId] = { type: 'existing', rowNumber: rowNum };
        updatedCount++;
      } else {
        const appendIdx = newRowsToAppend.length;
        newRowsToAppend.push(rowValues);
        seenInBatch[targetId] = { type: 'append', appendIndex: appendIdx };
        createdCount++;
      }
    }

    if (createdCount === 0 && updatedCount === 0) {
      return {
        success: false,
        message: errors.length > 0
          ? ('ไม่สามารถบันทึกได้: ' + errors.slice(0, 3).join(' | '))
          : 'ไม่พบข้อมูลที่ถูกต้องสำหรับบันทึก'
      };
    }

    if (newRowsToAppend.length > 0) {
      const startRow = sheet.getLastRow() + 1;
      sheet.getRange(startRow, 1, newRowsToAppend.length, 5).setValues(newRowsToAppend);
    }

    if (deletedSetChanged) {
      saveDeletedUserIdsSet(deletedSet);
    }

    SpreadsheetApp.flush();
    try {
      CacheService.getScriptCache().remove(DYNAMIC_USERS_CACHE_KEY);
    } catch (e) {}
    ensureDynamicUserProfilesLoaded(true);

    const allRes = getAllUsersForAdmin(empId);
    const totalDone = createdCount + updatedCount;
    let summaryMsg = 'บันทึกผู้ใช้งานสำเร็จ ' + totalDone + ' คน (เพิ่มใหม่ ' + createdCount + ' คน / อัปเดต ' + updatedCount + ' คน)';
    if (errors.length > 0) {
      summaryMsg += ' [ข้ามรายการไม่สมบูรณ์ ' + errors.length + ' รายการ]';
    }

    return {
      success: true,
      createdCount: createdCount,
      updatedCount: updatedCount,
      errors: errors,
      message: summaryMsg,
      users: allRes.users || [],
      technicians: getTechniciansList()
    };
  } catch (err) {
    Logger.log('Error in adminBulkSaveUsers: ' + err.message);
    return { success: false, message: 'เกิดข้อผิดพลาดในการบันทึกผู้ใช้งานแบบกลุ่ม: ' + err.message };
  } finally {
    try { lock.releaseLock(); } catch (e) {}
  }
}

/**
 * adminDeleteUser - ให้เฉพาะ Admin ลบ User ID ออกจากระบบ (รวมถึงระงับรหัสมาตรฐานหากถูกลบ)
 */
function adminDeleteUser(targetEmpIdInput, adminEmpId) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(15000);
  } catch(e) {
    return { success: false, message: 'ระบบกำลังบันทึกข้อมูล กรุณาลองใหม่อีกครั้ง' };
  }

  try {
    ensureDynamicUserProfilesLoaded();
    const empId = (adminEmpId || '').toString().trim().toUpperCase();
    if (!ADMIN_IDS.includes(empId)) {
      return { success: false, message: 'ปฏิเสธสิทธิ์: เฉพาะ User Admin เท่านั้นที่สามารถลบ User ID ได้' };
    }

    const targetId = (targetEmpIdInput || '').toString().trim().toUpperCase();
    if (!targetId) {
      return { success: false, message: 'ไม่พบรหัสพนักงานที่ต้องการลบ' };
    }
    if (targetId === empId) {
      return { success: false, message: 'ไม่สามารถลบรหัส Admin ที่คุณกำลังล็อกอินใช้งานอยู่ได้' };
    }

    const sheet = getUsersSheet();
    const data = sheet.getDataRange().getValues();
    let deletedCount = 0;
    for (let i = data.length - 1; i >= 1; i--) {
      if ((data[i][0] || '').toString().trim().toUpperCase() === targetId) {
        sheet.deleteRow(i + 1);
        deletedCount++;
      }
    }

    // บันทึกการลบไว้ใน PropertiesService ด้วย เพื่อให้แม้เป็นรหัส Built-in ก็ถูกลบออกจากรายชื่อผู้มีสิทธิ์เข้าใช้งานจริง
    const deletedSet = getDeletedUserIdsSet();
    deletedSet.add(targetId);
    saveDeletedUserIdsSet(deletedSet);
    removeUserIdFromAllRoleLists(targetId);

    SpreadsheetApp.flush();
    try {
      CacheService.getScriptCache().remove(DYNAMIC_USERS_CACHE_KEY);
    } catch(e) {}
    ensureDynamicUserProfilesLoaded(true);

    const allRes = getAllUsersForAdmin(empId);
    return {
      success: true,
      message: 'ลบ User ID ' + targetId + ' ออกจากรายชื่อผู้มีสิทธิ์เข้าใช้งานระบบเรียบร้อยแล้ว',
      users: allRes.users || [],
      technicians: getTechniciansList()
    };
  } catch (err) {
    Logger.log('Error in adminDeleteUser: ' + err.message);
    return { success: false, message: 'เกิดข้อผิดพลาดในการลบ User ID: ' + err.message };
  } finally {
    try { lock.releaseLock(); } catch(e) {}
  }
}
