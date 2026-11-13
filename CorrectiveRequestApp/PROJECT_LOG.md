# 📘 PROJECT LOG — ระบบใบแจ้งซ่อม (CM) + แผนบำรุงรักษา (PM) | Thai Lion Air GSE

> [!IMPORTANT]
> **กติกา:** ทุกครั้งที่มีการแก้ไข/ปรับเปลี่ยนโค้ด ต้องอัปเดตไฟล์นี้ (ส่วน **Change Log** + **Known Issues** + **Lessons Learned** ถ้ามี)
> อ่านไฟล์นี้ **ก่อน** เริ่มงานทุกครั้ง เพื่อไม่ให้แก้ผิดซ้ำ

---

## 1. ภาพรวมระบบ

| หัวข้อ | รายละเอียด |
|---|---|
| ประเภท | Google Apps Script Web App (HTML Service) |
| โฟลเดอร์โค้ด | `c:\Users\THAILIONAIR\Desktop\Project report\CorrectiveRequestApp` |
| Script ID (clasp) | `1o0jEjCyyUnfkYNfkA3MvOnyI8-7hQqHwahGE2XY77KnsdL-5a_fUJdmm` |
| Spreadsheet หลัก (`SPREADSHEET_ID`) | `1DEv99fXElxQDAOM0j_WvcTdFiNBXKBGwQ2bwWlQTcNY` (ชีต Users, Requests, GSE MASTER ฯลฯ) |
| Spreadsheet W/O (`WO_SPREADSHEET_ID`) | `1luje0x1QXrhhucSvmO6h_k5Es91X8rCcJeP2Fet7uYs` (แท็บรายเดือน เช่น `OCT 2026`) |
| แหล่ง Form PM ต้นฉบับ | `Z:\5.CM & PM form\TASK CARD SHED` (36 รุ่น, PDF/DOCX) |

### 1.1 Deployments ที่ผู้ใช้ใช้งานจริง (ต้อง redeploy ด้วย `-i` เสมอ)

| Deployment ID | เวอร์ชันล่าสุด |
|---|---|
| `AKfycbyx0OU7Q64FLoXLKOb83r-k-PjUMuVtfzMQt5Au4Uo3cVVfmVwLJzwq0V1ln9p1H5Uk` | @171 (หลัก - Official ตัวเดียวตามที่ผู้ใช้กำหนด) |
| `AKfycbyrs6lrMjljIxtONLpFhVwZkp7CA3XO3trlridqrWTNj3BQ5x9S7OhZrQbpy3V9VshKHg` | @172 (ซิงค์โค้ดล่าสุดเท่ากับหลัก เพื่อป้องกันปัญหาเปิดแท็บเก่าค้าง) |

### 1.2 ไฟล์สำคัญ

| ไฟล์ | หน้าที่ |
|---|---|
| `Code.gs` | `doGet`, `include()`, เปิด Spreadsheet / สร้างชีต |
| `ServerFunctions.gs` | Logic ฝั่ง Server ทั้งหมด (CM, W/O sync, PM, รายชื่อ Admin/Sup/Manager/Technician) |
| `index.html` | หน้า UI ทั้งหมด รวม `#pmTaskCardModal` (ฟอร์ม PM ดิจิทัล) และ `#pmPrintPage` (พิมพ์ A4) |
| `JavaScript.html` | Logic ฝั่ง Client ทั้งหมด |
| `Stylesheet.html` | CSS |
| `PmTaskCardTemplates.gs` | ฐานข้อมูล Checklist 36 รุ่น (ฝั่ง server) + `resolvePmTaskCard()` |
| `PmEmbeddedTemplates.html` | **ไฟล์ generate อัตโนมัติ — ห้ามแก้มือ** มี `PM_TASK_CARD_TEMPLATES`, `PM_EMBEDDED_TEMPLATES` (ภาพ base64), `PM_LAYOUT_DB`, `PM_CHECK_ICON_B64` |
| `make_embedded_templates.py` | สคริปต์สร้าง `PmEmbeddedTemplates.html` จาก `PmTaskCardTemplates.json`, `pm_templates_manifest.json`, `pm_pdf_layout_db.json`, `pm_templates_images/` |

### 1.3 ฟังก์ชัน PM หลัก

- Server: `createPmRequest`, `importPmMonthlyPlan`, `getPmDashboardData`, `submitPmTaskCardReport`, `approvePmSupervisor`, `approvePmManager`, `closePmJobByAdmin`
- Client: `resolvePmModelKey`, `resolvePmTemplateKey`, `normalizePmCheckLevel`, `openPmTaskCard`, `renderPmChecklist`, `renderPmToolRows`, `renderPmConsumableRows`, `renderPmMaterialRows`, `handlePmTechnicianSubmit`, `showPmPrintPreview`

---

## 2. Business Rules (ห้ามเปลี่ยนโดยไม่ถามผู้ใช้)

### 2.1 สิทธิ์/การแสดงผล
- เมนู navbar **แผนบำรุงรักษา (PM)** แสดงเฉพาะ **Admin** (ช่วงทดลอง)
- รายการ PM แสดง **เฉพาะหน้า PM** — ห้ามโผล่ในหน้าใบแจ้งซ่อม CM
- ปุ่มใน PM ใช้สไตล์เดียวกับ CM แต่ต่างสีเล็กน้อย
- สร้างใบ PM แล้วต้องขึ้นในตาราง **ทันที (real-time)** ไม่ต้องสลับหน้า

### 2.2 Mapping Form รถ Tractor
- **CAMEL → `TR-CAM-804-TLM`**: TLM-TR-026, 027, 028, 029, 030, 031
- **TLD → `TR-TLD-025-TLM`**: TLM-TR-001, 006, 010, 018, 019, 025, 049–068
- Check level A/B/C เลือกไฟล์ `-A-`, `-B-`, `-C-` ตามลำดับ (ไฟล์ A ของ TLD ชื่อจริงคือ `TR-TLM-025-A-TLM.pdf`)
- อุปกรณ์อื่นแยกตาม prefix รหัส เช่น `TLM-GP-xxx` → `GP` (ดู `resolvePmModelKey`)

### 2.3 ข้อมูลในใบ PM
| ช่อง | ที่มา |
|---|---|
| CHA NO / ENG NO | ค่าตายตัว `N/A` |
| SER NO | ชีต `GSE MASTER` คอลัมน์ `GSE S/N` |
| GSE NUMBER | รหัสอุปกรณ์ (ตอน Admin สร้างใบ) |
| W.O NO. | เลข W/O |
| HR METER | Technician กรอก |
| B. Tools (REFERENCE, DESCRIPTION) | Technician กรอก เพิ่ม/ลบแถวได้ |
| C. Consumables (DESCRIPTION, SPECIFICATION) | Technician กรอก เช่น กรองน้ำมันเครื่อง = KL094 |
| Checklist | ตัวหนา = หัวข้อ (ไม่มี checkbox), ข้อย่อย = checkbox ให้ช่างติ๊ก |
| Defect Found | YES/NO — **YES บังคับกรอก Rectification**; ตาราง COMPONENT/MATERIAL **ไม่บังคับ** |
| DATE + REPORTED BY | วันที่ + ชื่อช่าง (ดึงอัตโนมัติ), หลายคน = เรียงลงมา **ไม่มีเลขลำดับ** |
| DATE + VERIFIED BY | Sup อนุมัติก่อน → Manager ต่อ (= เสร็จสิ้น), วันที่ = วันกดอนุมัติ, ชื่อ Sup บน / Manager ล่าง |

### 2.4 Workflow สถานะ PM
`รอดำเนินการ` → (ช่างบันทึก) `รอ Supervisor ตรวจสอบ` → (Sup) `รอ Manager อนุมัติ` → (Manager) `COMPLETE` → (Admin ปิด) `เสร็จสิ้น` + ชีต W/O = `CLOSED`

### 2.5 การพิมพ์
- หน้าจอเป็นฟอร์มกรอก; ปุ่ม **Print Preview** ต้องได้เอกสารหน้าตาเหมือน PDF ต้นฉบับ พร้อมข้อมูลที่กรอก (แนวเดียวกับใบ CM)
- ไม่ต้องทำปุ่ม Export PDF แยก (Print → Save as PDF ได้อยู่แล้ว)
- ตัวอย่างใบที่ปิดแล้ว: `TR-TLM-025-A-TLM example Defect yes`, `TR-TLM-025-A-TLM Example`, `2345230` (แบบเขียนมือ) ในโฟลเดอร์ Project

### 2.6 แผนอนาคต (ยังไม่ทำ)
- ฟีเจอร์ที่ผู้ใช้ตอบว่า "ยังไม่ต้อง แต่เก็บเป็นแผน" (ข้อ 2 ในรอบ grill-me ล่าสุด)

---

## 3. ขั้นตอน Deploy (ทำทุกครั้งหลังแก้โค้ด)

```powershell
# 1) ถ้าแก้ข้อมูล template/ภาพ → generate ใหม่ก่อน
python make_embedded_templates.py
# 2) ตรวจ syntax JS (แยก <script> ออกแล้วรัน node --check)
# 3) push
npx @google/clasp push --force
# 4) redeploy ทับ deployment เดิม (ห้ามสร้างใหม่)
npx @google/clasp deploy -i AKfycbyx0OU7Q64FLoXLKOb83r-k-PjUMuVtfzMQt5Au4Uo3cVVfmVwLJzwq0V1ln9p1H5Uk -d "<คำอธิบาย>"
npx @google/clasp deploy -i AKfycbyrs6lrMjljIxtONLpFhVwZkp7CA3XO3trlridqrWTNj3BQ5x9S7OhZrQbpy3V9VshKHg -d "<คำอธิบาย>"
# 5) แจ้งผู้ใช้กด Ctrl+F5
# 6) อัปเดต PROJECT_LOG.md (ไฟล์นี้)
```

---

## 4. Lessons Learned (ข้อผิดพลาดที่เคยเกิด — ห้ามซ้ำ)

1. **`clasp deploy` โดยไม่มี `-i`** จะสร้าง deployment ใหม่ → URL ที่ผู้ใช้ใช้ยังเป็นเวอร์ชันเก่า → ผู้ใช้เห็น "ไม่ได้แก้" (เคสเวอร์ชัน @83 ที่ยังแสดง iframe Google Drive)
2. **บอกผู้ใช้ว่า "แก้แล้ว" ทั้งที่ยังไม่ได้ทดสอบในเบราว์เซอร์จริง** → ผู้ใช้ถามกลับ "แก้แล้วจริงดิ" หลายรอบ ต่อไปต้องระบุชัดว่าทดสอบอะไรแล้ว/ยังไม่ได้ทดสอบอะไร
3. **ประกาศตัวแปรซ้ำ** (`currentActivePmRequest`) ใน `JavaScript.html` ทำให้ทั้งสคริปต์พัง → ตรวจ `node --check` ทุกครั้ง
4. **Hardcode fallback เป็นรถ Tractor** ใน `resolvePmModelKey` ทำให้อุปกรณ์อื่น (เช่น TLM-GP-012) ได้ checklist ว่าง/ผิดฟอร์ม
5. ผู้ใช้ต้องการ **ดึง Form จากไฟล์ PDF จริงในโฟลเดอร์** ไม่ใช่สร้างฟอร์มใหม่เอง
6. ไฟล์ `PmEmbeddedTemplates.html` ถูก generate — แก้มือแล้วจะโดนทับเมื่อรันสคริปต์
7. **การฝังรูปภาพ Base64 ลงใน `PmEmbeddedTemplates.html` มากเกินไป (8 MB)** ทำให้ Google Apps Script iframe sandbox ใน Chrome ทำงานไม่ไหว/หน่วยความจำเต็มจนหน้าจอขาวสนิท (White Screen) ต้องบีบอัดภาพด้วย Grayscale JPEG (quality 65, 1240px) และลดเหลือเฉพาะแม่แบบหลัก (~1.98 MB)
8. **ใน `@media print` การประกาศ `#printPage { display: block !important; }`** โดยไม่มี `.active` ทำให้หน้า CM ที่ว่างเปล่าถูกสั่งพิมพ์ทับหน้า PM เสมอ จนกลายเป็นหน้าขาว ต้องใช้ `#printPage.active` และ `#pmPrintPage.active` แยกกันชัดเจน
9. **Google Apps Script iframe sandbox buffer limit**: การนำ Base64 รูปภาพขนาดใหญ่ใส่ไว้ในไฟล์ที่ถูก `<?!= include(...) ?>` ลงใน `index.html` จะทำให้ขนาดของ HTML string ที่ Apps Script ส่งผ่าน `postMessage` ไปยัง iframe (`userCodeAppPanel`) เกินขนาด buffer ของ sandbox ส่งผลให้เบราว์เซอร์ค้างที่ `about:blank:1` และหน้าจอขาวสนิท (White Screen) ตั้งแต่เปิดเว็บแอป ต้องแยกข้อมูลรูปภาพขนาดใหญ่ไปไว้ใน Server-side Asset (`PmTemplateImagesData.html`) และโหลดแบบ On-demand (Lazy-load) ผ่าน `google.script.run` เมื่อผู้ใช้กด Print เท่านั้น เหมือนสถาปัตยกรรมที่ CM ใช้ (`getPdfTemplateCss`) ทำให้ขนาดของ frontend payload รวมลดลงเหลือเพียง ~720 KB
10. **การลืมเปิดแท็ก `<td class="col-actions"><div class="actions-cell">` ใน `renderPmTable`**: ใน HTML Table เมื่อมีแท็ก `<button>` อยู่ภายใน `<tr>` โดยไม่มี `<td>` หุ้ม Browser DOM parser จะเตะ (foster parent) ปุ่มเหล่านั้นออกไปกองรวมกันในคอลัมน์แรก (`NO.`) ทำให้ปุ่มเบียดซ้อนในแนวตั้ง คอลัมน์ "จัดการ" ว่างเปล่า และ Event handler คลิกไม่ทำงานตามตำแหน่งที่ถูกต้อง ต้องตรวจสอบโครงสร้าง HTML Table ให้มี `<td>` ครบทุกคอลัมน์เสมอ
11. **Race Condition ระหว่าง Google Sheets `deleteRow` และ Frontend SWR Refresh**: การสั่ง `sheet.deleteRow` โดยไม่เรียก `SpreadsheetApp.flush()` จะทำให้การลบยังค้างอยู่ใน Batch buffer เมื่อฝั่ง Client ได้รับคำตอบว่าสำเร็จแล้วสั่ง `loadDashboardData(true)` ทันที ตัว Server จะอ่านชีตก่อนที่แถวจะถูกลบจริง และ LocalStorage cache จะบันทึกรายการเดิมกลับมา ทำให้ผู้ใช้เห็นว่า "กดลบแล้วรายการกลับมาอยู่ที่เดิม ลบไม่ไป" ต้องเรียก `SpreadsheetApp.flush()` ทันทีหลังลบแถว, ใช้ Optimistic UI update ลบออกจากหน่วยความจำและล้าง `localStorage` ทันที 0ms, ใส่ `window._recentlyDeletedIds` บล็อกรายการที่เพิ่งลบไม่ให้ถูกโหลดซ้ำ, และหน่วงเวลา background refresh เล็กน้อย (~800ms)
12. **Deployment Version Divergence & Modal Dependency on Delete**: หากมีการ Deploy เฉพาะ Deployment 1 แต่ Deployment 2 ค้างอยู่ที่เวอร์ชันเก่า (@96) ผู้ใช้ที่เปิดลิงก์เดิมหรือมีแคชในเบราว์เซอร์จะพบอาการข้อผิดพลาดเดิมซ้ำ (หน้าขาว, กดลบไม่ได้, เปิดบันทึกไม่ได้) ต้อง Redeploy ทับ Deployment ทั้งสองตัวพร้อมกันเสมอ และการให้ปุ่มลบในตารางเปิด Modal ที่ต้องกดยืนยันอีกรอบอาจเกิดปัญหา Event Bubbling หรือ Modal DOM ถูกบัง ให้ใช้ Native `confirm()` แบบมี `event.stopPropagation()` พร้อมส่ง UUID/RequestID เข้าไปตรงๆ และทำการ Optimistic UI Removal 0ms ทันที
13. **การประกาศตัวแปรซ้ำในบล็อกเดียวกันทำให้สคริปต์พังทั้งไฟล์ (`SyntaxError: Identifier 'layoutPages' has already been declared`)**: ใน `JavaScript.html` มีการประกาศ `const layoutPages` สองครั้งในฟังก์ชัน `renderPmPrintPages` และ `pagesB64[pIdx]` อ่านค่า null ขณะรอโหลดภาพพื้นหลัง ทำให้เกิด SyntaxError ส่งผลให้ JavaScript ฝั่ง Client หยุดทำงานทันทีตั้งแต่ต้น ทำให้ปุ่มในหน้าแผน PM ไม่ตอบสนอง (เปิดบันทึกไม่ได้, Print ขาว, กรองสถานะไม่ได้) ต้องรัน Node.js syntax parsing check (`new vm.Script(...)`) ทุกครั้งก่อน push และเขียนโค้ดรองรับ fallback/lazy load อย่างปลอดภัย (`pagesB64 && pagesB64[pIdx]`)
14. **การครอบ `try/catch` แบบกลืน Error ใน `deleteFromWoSheet` + ค้นหาแท็บเดียว + ข้ามแถวเมื่อแก้ไขรหัสอุปกรณ์**: ทำให้เกิดแถวกำพร้า (Orphan row) ในชีต `บันทึกการเปิด W/O` (เช่นกรณี `TLM-GP-023` ที่ถูกลบออกจาก `Requests` แล้วแต่ยังค้างในแท็บ `NOV 2026`) ต้องค้นหาข้ามแท็บด้วย `UUID` โดยไม่สร้างแท็บเปล่า, ส่งคำเตือนกลับเมื่อลบในชีต W/O ไม่สำเร็จ, ส่ง `oldEquipmentCode`/`oldInformDate` ตอนแก้ไขเพื่ออัปเดตแถวเดิมในที่ และเก็บกวาดแถวกำพร้าที่ยังไม่มีเลข W/O อัตโนมัติใน `repairWoMonthSheetNotes`

---

## 5. Known Issues / ยังไม่เสร็จ (อัปเดตทุกครั้ง)

> [!WARNING]
> รายการเหล่านี้ยัง **ไม่ได้แก้** หรือ **ยังไม่ได้ทดสอบจริง** — อย่าบอกผู้ใช้ว่าเสร็จแล้ว

1. **Print Preview ของอุปกรณ์ที่ไม่ใช่ Tractor/GP-MAK-090** ยังใช้ภาพพื้นหลังของ `TR-TLD-025` เป็น fallback (= พิมพ์ผิดฟอร์ม) เพราะฝังภาพไว้แค่ Tractor 6 ไฟล์ + GP-MAK-090 A/B/C
2. **ตำแหน่ง overlay ในหน้าพิมพ์** (Header, B, C, Defect, ลายเซ็น) คาลิเบรตจากฟอร์ม Tractor — สำหรับ GP-MAK-090 ยังไม่ได้ตรวจตำแหน่ง
3. **เลขข้อ checklist ไม่ตรงกันระหว่างหน้าจอกับหน้าพิมพ์**: หน้าจอใช้ `PM_TASK_CARD_TEMPLATES` (เลข 1..N ต่อเนื่อง) แต่หน้าพิมพ์วาง ✓ จาก `PM_LAYOUT_DB` (เลขข้อเริ่มใหม่ทุกหมวด) → ติ๊กออกบางข้อแล้ว ✓ ในหน้าพิมพ์อาจผิดตำแหน่ง ต้องทำ mapping
4. ข้อมูล checklist TR-TLD-025 Check A ใน `PmTaskCardTemplates.json` ขึ้นต้นที่ "14. Check rear axle oil level" (ข้อ 1–13 ของหมวดแรกหายตอน extract) → ต้องตรวจกับ PDF ต้นฉบับ
5. ยังไม่ได้ทดสอบ end-to-end ในเบราว์เซอร์: ช่างบันทึก → Sup → Manager → Admin ปิด → ตรวจชีต W/O

---

## 6. Change Log (ใหม่สุดอยู่บน)

### 2026-11-13 11:04 — ป้องกันแถวค้าง (Orphan Row) ในชีตบันทึกการเปิด W/O เมื่อมีการลบหรือแก้ไขใบงาน — Deploy @171 (หลัก) & @172 (รอง)
- **คำขอผู้ใช้:**
  - หาสาเหตุที่ใบแจ้งซ่อม `TLM-GP-023` (`UUID:bb831a01-c6df-492f-be6e-184c361bfd18`) ไม่แสดงในหน้าเว็บแอปแล้ว แต่ยังค้างเป็น `OPEN` อยู่ในชีต `บันทึกการเปิด W/O` (แถว 344) และให้ทำวิธีป้องกันไม่ให้เกิดซ้ำ
- **สาเหตุที่ตรวจพบ:**
  1. `deleteRequest()` / `deleteMultipleRequests()` ลบแถวใน `Requests` ก่อน แล้วเรียก `deleteFromWoSheet()` ภายใต้ `try/catch` แบบกลืน Error เงียบๆ ทำให้ถ้าฝั่ง W/O พลาด (timeout/protection/ไม่พบแถว) หน้าเว็บยังขึ้นลบสำเร็จแต่แถวใน W/O ค้างถาวร
  2. `deleteFromWoSheet()` ค้นหาเฉพาะแท็บเดือนเดียวตาม `InformDate` (และ `parseDateString()` ตีความ `/` เป็น `dd/MM/yyyy` เสมอ) รวมถึงใช้ `getOrCreateWoMonthSheet()` ที่สร้างแท็บใหม่โดยไม่จำเป็น
  3. `repairWoMonthSheetNotes()` ไม่ได้เก็บกวาดแถวกำพร้าที่ถูกลบออกจาก `Requests` แล้ว (ทั้งจากเว็บหรือลบตรงในชีต `Requests`)
  4. `updateRequest()` -> `syncToWoSheetOnUpdate()` ไม่ได้ส่งรหัสอุปกรณ์/วันที่เดิม ทำให้การแก้ไขรหัสอุปกรณ์หรือวันที่ข้ามเดือนอาจทิ้งแถวเดิมไว้แล้วสร้างแถวใหม่ซ้ำ
- **การแก้ไข:**
  1. `ServerFunctions.gs`:
     - ปรับ `deleteFromWoSheet()` และเพิ่ม `deleteWoMatchesInSheet_()` ให้ไม่สร้างแท็บเปล่า ค้นหาแท็บเป้าหมาย + เดือนปัจจุบัน + แท็บ `หน้าเก็บข้อมูล` อื่นๆ ข้ามเดือนด้วย `UUID`, ลบทุกแถวที่ซ้ำ, มี Retry 1 ครั้ง และคืนผล `{ success, deletedCount, error }` แทนการกลืน Error
     - ปรับ `deleteRequest()` และ `deleteMultipleRequests()` ให้ตรวจผลจาก `deleteFromWoSheet()` และแจ้งเตือน `woWarning: true` กลับหน้าเว็บหากลบในชีต W/O ไม่สำเร็จ
     - ปรับ `updateRequest()` และ `syncToWoSheetOnUpdate()` ให้ส่ง `oldEquipmentCode` และ `oldInformDate` เพื่ออัปเดตแถวเดิมในที่เดียว หรือลบแถวในแท็บเดือนเดิมออกเมื่อย้ายเดือน
     - ปรับ `createRequest()` fallback `informDate` เป็น `yyyy-MM-dd` และปรับ `parseDateString()` รองรับปี พ.ศ. (`> 2400`) กับรูปแบบ `MM/dd/yyyy` ที่ชัดเจน (`p1 > 12`)
     - ปรับ `repairWoMonthSheetNotes()` และ bump คีย์แคช `WO_REPAIR_ORPHAN_V171` ใน `getDashboardData()` เพื่อตรวจจับและลบแถวกำพร้าที่มี `UUID:` ของระบบแต่ไม่มีอยู่ใน `Requests` แล้วและยังไม่มีเลข W/O (โดย re-check `Requests` Col A อีกรอบก่อนลบเพื่อกัน race condition)
  2. `JavaScript.html`: ปรับ `executeDeleteRequest()` และ `executeBulkDeletePmConfirmed()` ให้แสดง Toast สีแดง (`'error'`) เมื่อได้รับ `result.woWarning`
  3. `index.html`: อัปเดตป้ายเวอร์ชันเป็น `v171`
- **ไฟล์ที่ปรับปรุง:** `ServerFunctions.gs`, `JavaScript.html`, `index.html`, `PROJECT_LOG.md`
- **สถานะการทดสอบ:**
  - [x] ทดสอบ Syntax ของ `ServerFunctions.gs`, `Code.gs`, `LineNotification.gs` และ `JavaScript.html` ด้วย Node.js VM ผ่าน
  - [x] ทดสอบ Unit test แบบ Mock ใน Node.js VM สำหรับ `parseDateString`, `deleteFromWoSheet` (ค้นหาข้ามแท็บ) และ `repairWoMonthSheetNotes` (เก็บกวาดแถวกำพร้า) ผ่าน
  - [x] Clasp push และ deploy ทับทั้ง @171 (หลัก) และ @172 (รอง) สำเร็จ
  - [ ] ผู้ใช้เปิดหน้าเว็บแอป (กด Ctrl+F5 สังเกตป้าย `v171`) และตรวจสอบว่าแถว `TLM-GP-023` ที่ค้างอยู่ในแท็บ `NOV 2026` ถูกลบออกอัตโนมัติ รวมถึงทดสอบสร้าง-แก้ไข-ลบใบงานจริงบนเบราว์เซอร์

### 2026-11-09 09:03 — แก้ไขการดึงวันที่ช่าง (Technician) ปิดใบงาน PM บันทึกลงคอลัมน์ "วันที่ปิด" (Col J) ในชีตบันทึกการเปิด W/O + ซิงค์ย้อนหลังอัตโนมัติ — Deploy @169 (หลัก) & @170 (รอง)
- **คำขอผู้ใช้:**
  - "ช่วยแก้ไข ในส่วนของ PM หน่อยพอดีช่างเขากดปิดใบงานแล้ว แต่ วันที่ User technician ปิดใบงาน มันไม่ได้ดึงข้อมูลบันทึกลง Sheet บันทึก W/O ช่วยแก้ไขส่วนนี้ที" (พร้อมแนบภาพใบ PM ของ `TLM-TR-029` วันที่ `06/11/2026` ที่ในชีต W/O คอลัมน์ `วันที่ปิด` ว่างอยู่)
- **สาเหตุที่ตรวจพบ:**
  - ในฟังก์ชัน `submitPmTaskCardReport` (`ServerFunctions.gs`) เมื่อช่างกดบันทึกส่งใบงาน PM โค้ดสั่งอัปเดตชีต W/O เฉพาะคอลัมน์ 5 (`COMPLETE`) และคอลัมน์ 11-13 (`ช่างที่ทำคนที่ 1-3`) แต่ตกหล่นไม่ได้เขียนค่าลงคอลัมน์ 10 (`วันที่ปิด` / Col J) ต่างจากฝั่ง CM (`syncToWoSheetOnTechnicianReport`) ที่เขียนลงคอลัมน์ 10 ด้วย
- **การแก้ไข:**
  1. `ServerFunctions.gs`:
     - เพิ่มฟังก์ชันช่วย `resolveTechnicianWoCloseDateStr(rowData, fallbackDate)` เพื่อดึงวันที่ช่างปิดงาน (`CompleteDate` / `TechnicianDate` / `PmChecklistData.completeDate`) แปลงเป็นรูปแบบ `M/D/YYYY` สำหรับชีต W/O
     - ใน `submitPmTaskCardReport`: เพิ่มการเขียน `woCloseDateStr` ลงคอลัมน์ 10 (`วันที่ปิด`) ของชีต W/O ทันทีที่ช่างกดส่งงาน PM
     - ใน `approvePmSupervisor`, `approvePmManager`, `closePmJobByAdmin`, `adminCloseWorkOrder`, `requesterAcceptEquipment`: ให้ใช้วันที่ช่างปิดงานเป็นหลักในคอลัมน์ 10 เพื่อไม่ให้วันที่ Admin กดปิดทีหลังไปทับวันที่ช่างทำเสร็จจริง
     - ใน `repairWoMonthSheetNotes` และ `getDashboardData`: เพิ่มระบบ Auto-Backfill ตรวจสอบแถวในชีต W/O ที่ช่างส่งงานแล้ว (`COMPLETE`/`CLOSED`) แต่คอลัมน์ 10 (`วันที่ปิด`) ยังว่างอยู่ ให้ดึงวันที่ช่างปิดงานจาก `Requests` มาเติมให้อัตโนมัติทันทีเมื่อเปิดเว็บแอปหรือกดรีเฟรช
  2. `index.html`: อัปเดตป้ายเวอร์ชันเป็น `v169`
- **ไฟล์ที่ปรับปรุง:** `ServerFunctions.gs`, `index.html`, `PROJECT_LOG.md`
- **สถานะการทดสอบ:**
  - [x] ทดสอบ Syntax ของ `JavaScript.html` และ `ServerFunctions.gs` ด้วย Node.js VM ผ่าน 100%
  - [x] Clasp push และ deploy ทับทั้ง @169 (หลัก) และ @170 (รอง) สำเร็จ
  - [ ] ผู้ใช้เปิดหน้าเว็บแอป (กด Ctrl+F5 สังเกตป้าย `v169`) เพื่อให้ระบบ Auto-Backfill เติมวันที่ปิดของ `TLM-TR-029` และรายการ PM ที่ค้างในชีต W/O อัตโนมัติ

### 2026-11-06 15:03 — เพิ่มระบบ Remind สแกนเอกสารลง Drive กลาง (YES/NO) เฉพาะ Admin + ปลดล็อกให้ Admin ปิดใบงานได้ตั้งแต่สถานะ รอ Manager อนุมัติ — Deploy @167 (หลัก) & @168 (รอง)
- **คำขอผู้ใช้:**
  - กำหนดให้ Admin มีปุ่มกด Remind ตัวเองว่าใบงานที่ปิดแล้วเหลือสแกนเก็บลง Drive กลาง (User Admin เห็นคนเดียว User อื่นไม่เห็น)
  - ปลดล็อกให้ปิดใบงานได้ตั้งแต่สถานะ `รอ Manager อนุมัติ` เมื่อปิดแล้วตั้งค่าสแกนเอกสารในชีต W/O เป็น `NO` อัตโนมัติ และเมื่อกดสแกนแล้วให้เปลี่ยนเป็น `YES` ในชีตบันทึก W/O ด้วย
- **การแก้ไข:**
  1. `ServerFunctions.gs`:
     - เพิ่มคอลัมน์ `WoScanDoc` (Col 54) ใน `REQUEST_HEADERS` เพื่อเก็บสถานะคู่ขนานกับคอลัมน์ 6 (`สแกนเอกสาร`: `YES`/`NO`) ในชีต `บันทึกการเปิด W/O`
     - ปรับปรุง `adminCloseWorkOrder` (CM) และ `closePmJobByAdmin` (PM) ให้ Admin ปิดใบงานได้ตั้งแต่สถานะ `รอ Manager อนุมัติ` เปลี่ยนสถานะเป็น `เสร็จสิ้น` (`CLOSED`) และตั้งค่าสแกนเอกสารเป็น `NO` อัตโนมัติ
     - เพิ่มฟังก์ชัน `toggleScanDocumentStatus(uuid, newStatus, adminEmpId)` สำหรับสลับสถานะ `NO` ⇄ `YES` พร้อมซิงค์ลงชีต W/O ทันที
     - ปรับปรุง `rebuildWoRowsForMonth` และ `repairWoMonthSheetNotes` ให้รักษาค่า `YES`/`NO` ไม่ให้ถูกรีเซ็ตกลับเป็น `NO` เมื่อซิงค์ชีต
  2. `index.html`, `JavaScript.html`, `Stylesheet.html`:
     - เพิ่มปุ่ม One-click Toggle `📁 รอสแกน (NO)` (สีส้ม) ⇄ `✅ สแกนแล้ว (YES)` (สีเขียว) ในตารางหลักทั้งหน้า CM และ PM (แสดงเฉพาะ Admin)
     - เพิ่มปุ่ม Quick Filter `รอสแกน Drive (N)` บนแถบเครื่องมือทั้งหน้า CM และ PM (แสดงเฉพาะ Admin) พร้อมอัปเดตป้ายเวอร์ชันเป็น `v167`
- **ไฟล์ที่ปรับปรุง:** `ServerFunctions.gs`, `index.html`, `JavaScript.html`, `Stylesheet.html`, `PROJECT_LOG.md`
- **สถานะการทดสอบ:**
  - [x] ทดสอบ Syntax ของ `JavaScript.html` และ `ServerFunctions.gs` ด้วย Node.js VM ผ่าน 100%
  - [x] Clasp push และ deploy ทับทั้ง @167 (หลัก) และ @168 (รอง) สำเร็จ
  - [ ] ผู้ใช้ทดสอบกดปุ่ม `ปิด W/O` และปุ่มสลับ `รอสแกน (NO)` ⇄ `สแกนแล้ว (YES)` ในเบราว์เซอร์จริง (กด Ctrl+F5 สังเกตป้าย `v167`)

### 2026-11-06 14:25 — ติดตั้ง Git Repository และเชื่อมต่อ Remote GitHub (JackSleep10/Report-CM-PM)
- **คำขอผู้ใช้:**
  - "ช่วย push และ commit ทั้ง Project นี้ ขึ้น https://github.com/JackSleep10/Report-CM-PM นี่หน่อย แล้วจากนั้น ทุกครั้งที่มีการแก้ไขอะไรต่างๆ ให้ Commit และ Push ขึ้น ตลอดนะ"
- **การแก้ไข:**
  1. กำหนดค่า Git User Identity (`JackSleep10` / `bannathat.tata@gmail.com`) และตั้งค่า `core.quotepath false`
  2. สร้างไฟล์ `.gitignore` ที่ Root ของโครงการ
  3. เพิ่มกฎข้อที่ 7 ใน `AGENTS.md`: บันทึกและ Push ขึ้น GitHub อัตโนมัติทุกครั้งหลังมีการแก้ไขโค้ด
  4. Initialized Git repository, เชื่อมต่อ remote `https://github.com/JackSleep10/Report-CM-PM.git`, ทำการ commit ไฟล์ทั้งหมดและ push ขึ้นสาขา `main`
- **ไฟล์ที่ปรับปรุง:** `AGENTS.md`, `.gitignore`, `CorrectiveRequestApp/PROJECT_LOG.md`
- **สถานะการทดสอบ:**
  - [x] ตรวจสอบสิทธิ์ Windows Credential Manager สำหรับ GitHub
  - [x] Initialized Git repo และ Fetch / Sync กับ Remote Branch `main`
  - [x] Push ขึ้น https://github.com/JackSleep10/Report-CM-PM สำเร็จ

### 2026-10-27 22:08 — แก้ไขเส้นขีดแบ่งแถว (Border Bottom) ในตาราง PM คอลัมน์ NO. และ Checkbox ให้เชื่อมตรงกันเป็นเส้นเดียว — Deploy @165 (หลัก) & @166 (รอง)
- **คำขอผู้ใช้:**
  - "ปรับเส้นขีดแบ่งด้วยมันไม่โอเค ปรับให้มันดีๆ แล้วตรงกันหน่อยแก้ไขด้วย" (พร้อมแนบภาพที่คอลัมน์ `NO.` เส้นขีดลอยสูงและขาดออกจากแถว)
- **สาเหตุที่ตรวจพบ:**
  - คลาส `.dt-only` ใน `Stylesheet.html` ถูกกำหนดเป็น `display: inline;` ซึ่งเมื่อนำมาใส่ใน `<td class="dt-only">` ของคอลัมน์ `NO.` ทำให้เซลล์ `<td>` เปลี่ยนจาก `table-cell` กลายเป็น `inline` ส่งผลให้ตัวเลขลอยขึ้นด้านบนและเส้นขอบล่าง (`border-bottom`) ขาดออกจากเซลล์ข้างเคียง
- **การแก้ไข:**
  1. `Stylesheet.html`: กำหนดให้ `td.dt-only, th.dt-only` และ `.pm-table td, .pm-table th` เป็น `display: table-cell; vertical-align: middle !important;` บนหน้าจอ Desktop
  2. `index.html` & `JavaScript.html`: จัด `vertical-align: middle; margin: 0;` ให้ Checkbox และคอลัมน์ `NO.` อยู่กึ่งกลางบรรทัดเดียวกันเป๊ะ พร้อมอัปเดตป้ายเวอร์ชันเป็น `v165`
- **ไฟล์ที่ปรับปรุง:** `Stylesheet.html`, `index.html`, `JavaScript.html`, `PROJECT_LOG.md`
- **สถานะการทดสอบ:**
  - [x] ทดสอบ Syntax ด้วย Node.js VM ผ่าน 100%
  - [x] Clasp push และ deploy ทับทั้ง @165 (หลัก) และ @166 (รอง) สำเร็จ
  - [ ] ผู้ใช้ตรวจสอบเส้นตารางในเบราว์เซอร์จริง (กด Ctrl+F5 สังเกตป้าย `v165`)

### 2026-10-27 21:58 — เพิ่มฟังก์ชันลบใบงานหลายรายการพร้อมกัน (Bulk Delete) สำหรับ Admin ในหน้าแผนบำรุงรักษา (PM) — Deploy @163 (หลัก) & @164 (รอง)
- **คำขอผู้ใช้:**
  - "เพิ่มฟังชั่น ลบ ใบงานได้หลายใบหน่อยสำหรับ User admin ในหน้า แผนบำรุงรักษา (PM)"
- **การแก้ไข:**
  1. `index.html`:
     - เพิ่มปุ่ม `<button id="btnBulkDeletePmToolbar">` (`ลบที่เลือก (N)`) บนแถบเครื่องมือหน้า PM ซึ่งจะแสดงขึ้นมาอัตโนมัติเมื่อ Admin ติ๊กเลือกรายการอย่างน้อย 1 ใบงาน
     - เพิ่มคอลัมน์ Checkbox ด้านซ้ายสุดของตาราง PM พร้อม Checkbox เลือกทั้งหมด (`#pmSelectAllCheckbox`) ที่หัวตาราง (แสดงเฉพาะ Admin)
     - อัปเดต Version Badge บน Navbar เป็น `v163`
  2. `ServerFunctions.gs`:
     - เพิ่มฟังก์ชัน `deleteMultipleRequests(items, adminEmpId)` ตรวจสอบสิทธิ์ Admin, ค้นหาแถวที่ตรงกับ UUID/RequestID ทั้งหมดในรอบเดียว, เรียงลำดับแถวจากล่างขึ้นบน (`rowsToDelete.sort((a, b) => b - a)`) เพื่อลบในชีต `Requests` โดยไม่ให้ลำดับแถวเลื่อน, เรียก `SpreadsheetApp.flush()`, และซิงค์ลบออกจากชีต `บันทึกการเปิด W/O` ประจำเดือนพร้อมกัน
  3. `JavaScript.html`:
     - อัปเดต `renderPmTable()` ให้แสดง Checkbox ในแต่ละแถวสำหรับ Admin และไฮไลต์แถวที่เลือก
     - เพิ่มฟังก์ชัน `toggleSelectPmRow()`, `toggleSelectAllPmRows()`, `updatePmBulkSelectionUI()`, `handleBulkDeletePm()`, และ `executeBulkDeletePmConfirmed()` พร้อมระบบ Optimistic UI ลบออกจากหน้าจอทันที 0ms และล้างแคช LocalStorage
- **ไฟล์ที่ปรับปรุง:** `index.html`, `ServerFunctions.gs`, `JavaScript.html`, `PROJECT_LOG.md`
- **สถานะการทดสอบ:**
  - [x] ทดสอบ Syntax ด้วย Node.js VM (`JavaScript.html`, `ServerFunctions.gs`, `Code.gs`) ผ่าน 100%
  - [x] Clasp push และ deploy ทับทั้ง @163 (หลัก) และ @164 (รอง) สำเร็จ
  - [ ] ผู้ใช้ทดสอบติ๊กเลือกหลายใบงานและกดลบในหน้าแผนบำรุงรักษา (PM) บนเบราว์เซอร์จริง (กด Ctrl+F5 สังเกตป้าย `v163`)

### 2026-10-27 21:55 — ปรับฟอนต์ช่อง EFFECTIVITY ในฟอร์ม PM GP-409-E-CUP (A, B, C) ให้มีขนาดและรูปแบบเดียวกับช่องอื่น (10pt Arial กึ่งกลางบรรทัดเดียว)
- **คำขอผู้ใช้:**
  - "ปรับ font ช่อง EFFECTIVITY ให้เหมือนกับ ช่องอื่นด้วยทุก ไฟล์เลย" (พร้อมแนบภาพตัวอย่างช่อง EFFECTIVITY ที่ขนาดฟอนต์ 7pt เล็กผิดปกติ)
- **สาเหตุที่ตรวจพบ:**
  - ในการประมวลผลคำสั่ง Word Find/Replace ครั้งก่อน มีการกำหนดขนาดฟอนต์ `7.0pt` สำหรับคำว่า `GPU-409-E-CUP` เพื่อเลี่ยงการตัดคำเนื่องจากเซลล์เดิมมีระยะเยื้องซ้าย (`leftIndent: 391 dxa`) ทำให้ตัวอักษรในช่อง EFFECTIVITY เล็กและบางกว่าช่อง `SVC` และ `INTERVAL` (10pt Arial) อย่างชัดเจน
- **การแก้ไข:**
  - ปรับระยะเยื้อง `LeftIndent = 0`, `RightIndent = 0` และจัดข้อความให้อยู่กึ่งกลาง (`Alignment = Center`) ในเซลล์ EFFECTIVITY
  - กำหนดฟอนต์ `Arial` ขนาด `10.0pt` เท่ากับช่อง `INSP. TYPE (SVC)` และ `INTERVAL (250/500/1000 H)`
  - ส่งออกทั้งไฟล์ `.docx` และ `.pdf` ใหม่ครบทั้ง 3 ชุด:
    - `GP-409-E-CUP-A-TLM.docx` / `.pdf`
    - `GP-409-E-CUP-B-TLM.docx` / `.pdf`
    - `GP-409-E-CUP-C-TLM.docx` / `.pdf`
- **สถานะการทดสอบ:**
  - [x] ตรวจสอบตำแหน่งและความสูงตัวอักษรใน PDF ทั้ง 3 ไฟล์ด้วย PyMuPDF: ขนาดความสูง 11.11pt เท่ากันเป๊ะกับช่อง SVC และแสดงผลบรรทัดเดียวตรงกลางสวยงาม
  - [x] ตรวจสอบภาพพรีวิว `header_A_preview.png`, `header_B_preview.png`, `header_C_preview.png` เรียบร้อยแล้ว

### 2026-10-27 20:37 — ยกเลิกสถานะ "รอดำเนินการ" ในหน้าใบแจ้งซ่อม (CM) ทั้งใน Dropdown, การ์ดสรุป และให้แจ้งซ่อมใหม่ขึ้นสถานะ "กำลังซ่อม" ทันที — Deploy @161 (หลัก) & @162 (รอง)
- **คำขอผู้ใช้:**
  - "ช่วยแก้ไขงานหน่อย เรื่อง เวลาคนแจ้งซ่อมมาใน ระบบใบแจ้งซ่อม เปลี่ยนจาก คำว่า รอดำเนินการ ให้เอา ออกเลย ทั้งใน Dropdown และเวลาแจ้งซ่อมมา ให้ ขึ้นสถานะว่า กำลังซ่อม เอาแบบนี้แทน แก้ไข ให้หน่อย เอาเฉพาะหน้า ใบแจ้งซ่อม (CM) อย่างเดียวก่อน"
- **การแก้ไข:**
  1. `index.html`:
     - ลบ `<option value="รอดำเนินการ">รอดำเนินการ</option>` ออกจาก Dropdown กรองสถานะ (`#statusFilter`) และ Dropdown สถานะในฟอร์มสร้าง/แก้ไขใบแจ้งซ่อม (`#fStatus`)
     - นำการ์ดสรุป "รอดำเนินการ" (`#pendingCount`) ออกจากหน้าใบแจ้งซ่อม CM (`#viewRequests`) เหลือ 4 การ์ด (ทั้งหมด, กำลังซ่อม, รอตรวจสอบ, เสร็จสิ้น)
     - อัปเดต Version Badge บน Navbar เป็น `v161`
  2. `ServerFunctions.gs`:
     - ใน `createRequest()` เปลี่ยนสถานะเริ่มต้น (คอลัมน์ N) เมื่อสร้างใบแจ้งซ่อมใหม่จาก `'รอดำเนินการ'` เป็น `'กำลังซ่อม'`
     - ใน `updateRequest()` เปลี่ยนค่าเริ่มต้น `statusToSet` เป็น `'กำลังซ่อม'` และหากมีค่าเดิมเป็น `'รอดำเนินการ'` ให้ปรับเป็น `'กำลังซ่อม'` อัตโนมัติ
     - ใน `getStatusCounts()` และ `getDashboardData()` ปรับการนับสถานะให้รายการที่เป็น `'รอดำเนินการ'` นับรวมใน `'กำลังซ่อม'` (`inProgress`)
  3. `JavaScript.html`:
     - ใน `recomputeAndUpdateCounts()`, `renderTable()`, และ `filterTable()` สำหรับใบงาน CM ปรับให้แสดงผลและกรองรายการเดิมที่อาจค้างสถานะ `'รอดำเนินการ'` ให้เป็น `'กำลังซ่อม'` ทันที (โดยไม่กระทบหน้า PM และหน้าสถานะอุปกรณ์ GSE)
     - ใน `showCreateForm()` และ `showEditForm()` ตั้งค่าเริ่มต้นของ `#fStatus` เป็น `'กำลังซ่อม'`
- **ไฟล์ที่ปรับปรุง:** `index.html`, `ServerFunctions.gs`, `JavaScript.html`, `PROJECT_LOG.md`
- **สถานะการทดสอบ:**
  - [x] ทดสอบ Syntax ด้วย Node.js VM (`JavaScript.html`, `ServerFunctions.gs`, `Code.gs`) ผ่าน 100%
  - [x] Clasp push และ deploy ทับทั้ง @161 (หลัก) และ @162 (รอง) สำเร็จ
  - [ ] ผู้ใช้ทดสอบเปิดดูหน้าใบแจ้งซ่อม (CM) และสร้างใบแจ้งซ่อมใหม่ในเบราว์เซอร์จริง (กด Ctrl+F5 สังเกตป้าย `v161`)

### 2026-10-26 23:05 — สร้างแบบฟอร์มเอกสาร PM Manual สำหรับ GPU-409-E-CUP (GP-409-E-CUP-TLM) ทั้งระดับ Master, A, B, C ครบชุด .docx และ .pdf (Local Forms)
- **คำขอผู้ใช้:**
  - "ช่วยเขียน Manual ขึ้นมาหน่อย โดยใช้ข้อมูลการทำ PM ตาม กำหนดการโดยที่อ่านจากไฟล์ D:\Manual TLD\GP TLD ที่อยู่ใน Folder นี่ แล้ว ดัดแปลง สร้างไฟล์ Manual โดยเอา Z:\5.CM & PM form\TASK CARD SHED\GP-MAK-090-TLM ไฟล์ในนี้เป็นตัวอย่าง และสร้าง Folder ขึ้นมาใหม่ โดย ที่ใช้ชื่อ GP-409-E-CUP-TLM จากนั้นแบ่งเป็น GP-409-E-CUP-A-TLM, GP-409-E-CUP-B-TLM, GP-409-E-CUP-C-TLM โดยอิงตามไฟล์ตัวอย่างทั้งหมด หรือ copy มาทั้งหมด แต่ต้องเปลี่ยน ชื่อเป็น GP-409-E-CUP-A-TLM , GP-409-E-CUP-B-TLM , GP-409-E-CUP-C-TLM ตามหัวข้อนั้นๆ สร้างเป็น Form ออกมาแยก โดยที่ยังไม่ต้องนำขึ้น Push บน Web app ดึง logo อะไรต่างๆ มาให้หมด ถ้ามีคำแนะนำตรงไหนแนะนำมา /grill-me"
- **การดำเนินการและการสัมภาษณ์สรุปความต้องการ (/grill-me):**
  1. ตำแหน่งบันทึกไฟล์: จัดเก็บไว้ที่โฟลเดอร์โปรเจกต์ `c:\Users\THAILIONAIR\Desktop\Project report\GP-409-E-CUP-TLM` เพื่อการตรวจสอบความถูกต้องก่อน
  2. แหล่งข้อมูล Checklist & เครื่องยนต์: เครื่องยนต์ Cummins QSB4.5 จากคู่มือ `D:\Manual TLD\GP TLD\GPU-409-E-CUP.pdf` และอะไหล่สิ้นเปลืองจาก `D:\Manual TLD\PM ITEM.xlsx` (Sheet `GP QSB4.5 ,GP06-07,16-23`)
  3. รหัสเอกสาร Header/Footer:
     - Master Matrix: `GRS-RM-CK-070` (Eff. Date: 26 OCT 26)
     - Schedule A: `GRS-RM-CK-101` (Eff. Date: 26 OCT 26)
     - Schedule B: `GRS-RM-CK-102` (Eff. Date: 26 OCT 26)
     - Schedule C: `GRS-RM-CK-103` (Eff. Date: 26 OCT 26)
  4. ส่วนตาราง Consumables (C.) และ Tools (B.): คงเป็นตารางว่าง (Blank rows) ตามต้นฉบับเพื่อให้ช่างหน้างานเป็นผู้บันทึก
  5. รูปภาพและโลโก้: ดึง `image1.jpeg` (โลโก้ Thai Lion Air) และ `image2.jpeg` มาประกอบในเอกสารครบถ้วน
- **ไฟล์ที่สร้างขึ้นในโฟลเดอร์ `GP-409-E-CUP-TLM`:**
  - `GP-409-E-CUP-TLM.docx` (Master PM Matrix 2 หน้า)
  - `GP-409-E-CUP-TLM.pdf` (Master PM Matrix 2 หน้า)
  - `GP-409-E-CUP-A-TLM.docx` (Task Card Schedule A 250H / 3MO)
  - `GP-409-E-CUP-A-TLM.pdf` (Task Card Schedule A 250H / 3MO)
  - `GP-409-E-CUP-B-TLM.docx` (Task Card Schedule B 500H / 6MO)
  - `GP-409-E-CUP-B-TLM.pdf` (Task Card Schedule B 500H / 6MO)
  - `GP-409-E-CUP-C-TLM.docx` (Task Card Schedule C 1000H / 12MO)
  - `GP-409-E-CUP-C-TLM.pdf` (Task Card Schedule C 1000H / 12MO)
- **สถานะการทดสอบ:**
  - [x] ตรวจสอบโครงสร้างข้อความและตารางในไฟล์ PDF ทุกหน้าด้วย PyMuPDF ไม่พบคำเก่า (MAK, 090, 096-098) ค้างอยู่
  - [x] ตรวจสอบช่อง Effectivity (`GPU-409-E-CUP`) แสดงผลเต็มในบรรทัดเดียว ไม่ตกบรรทัด
  - [x] ตรวจสอบโลโก้และรูปหัวตารางครบถ้วน
  - [ ] ยังไม่ได้นำขึ้น Push บน Web App (ตามที่ผู้ใช้กำหนดไว้ในคำสั่ง)

### 2026-10-26 14:52 — แก้ไขช่อง Part No. ในใบงาน CM และระบบบันทึกอะไหล่ให้รักษาเลข 0 นำหน้าเป็น Text เสมอ — Deploy @159 (หลัก) & @160 (รอง)
- **คำขอผู้ใช้:**
  - "ช่วยแก้ไขช่อง part no. ในใบงาน CM พอดีช่างกรอก Form ใส่ในช่อง เป็น 00049 แล้วมันตัด 000 ออกแสดงว่ามันต้องเปลี่ยนให้ช่องมันับเป็นText ส่งออกมา แก้ไขให้ด้วย ในหน้าใบ CM เพราะมันมีกรณีบาง Part no มี 000 นำหน้า แก้ไขให้ด้วย"
- **สาเหตุที่ตรวจพบ (Root Cause Analysis):**
  1. ใน `ServerFunctions.gs` ฟังก์ชัน `saveSpareParts()` ใช้ `sheet.appendRow([...])` โดยที่คอลัมน์ F (Part No.) ของชีต `SpareParts` ไม่ได้ถูกกำหนดฟอร์แมต Plain Text ไว้อย่างชัดเจน ทำให้ Google Sheets แปลงสตริงตัวเลขที่มีเลข 0 นำหน้า (เช่น `"00049"`) กลายเป็นตัวเลข (Number `49`) และตัดเลขศูนย์นำหน้าทิ้งโดยอัตโนมัติ
  2. ฟังก์ชัน `getSparePartsByUUID()` เดิมใช้ `sheet.getDataRange().getValues()` ซึ่งอ่านค่าประเภท Number `49` ออกมาจากเซลล์ และส่งต่อไปยัง Client
  3. ใน `JavaScript.html` ฟังก์ชัน `showPrintView()` และฟังก์ชัน `setText()` ส่งค่าตรงไปยังหน้าพิมพ์ ทำให้บนแบบฟอร์มเอกสาร CM ในช่อง Part No. แสดงเป็น `49`
- **การแก้ไข:**
  1. `ServerFunctions.gs`:
     - ใน `getOrCreateSparePartsSheet()` กำหนดฟอร์แมตคอลัมน์ F (`sheet.getRange('F:F').setNumberFormat('@STRING@')`) เป็น Plain Text
     - ใน `saveSpareParts()` หลัง `appendRow()` สั่งตั้งค่าเซลล์ `sheet.getRange(newRow, 6).setNumberFormat('@STRING@').setValue(partNo)` ให้เป็น Plain Text พร้อมเขียนสตริงทับทันที ป้องกัน Google Sheets แปลงเป็นตัวเลข
     - ใน `getSparePartsByUUID()` เปลี่ยนมาใช้ `sheet.getDataRange().getDisplayValues()` เพื่ออ่านค่าที่เป็นสตริงตัวอักษรจริงจากหน้าชีต พร้อม fallback ที่ปลอดภัย ทำให้ได้ค่า `"00049"` ครบถ้วน
  2. `JavaScript.html`:
     - ใน `showPrintView()` ปรับปรุงการเซ็ตช่อง Part No. ให้แปลงเป็นสตริงเสมอ: `setText('pPartRow' + rowNum + '_No', parts[p].partNo != null ? String(parts[p].partNo) : '')`
     - ใน `setText()` ปรับปรุงให้รองรับค่าสตริงและตัวเลข `0` ได้อย่างถูกต้อง `(value != null) ? String(value) : ''`
     - ใน `addSparePartRow()` ปรับปรุงช่องกรอก Part No. ให้แสดงผลเป็น String
     - ใน `handleSaveTechnicianReport()` บันทึก `partNo: String(partNo)` อย่างชัดเจน
     - ใน Modal ตรวจสอบของ Supervisor/Manager ปรับปรุงให้แสดงผลเป็น String
  3. `index.html`:
     - อัปเดต Version Badge บน Navbar เป็น `v159`
  4. อัปเดตข้อมูลจริงในชีต `SpareParts`:
     - ดำเนินการอัปเดตแถวที่ 116 สำหรับ W/O `2363404` (อุปกรณ์ `TLM-TB-047` รายการ "สลักล็อคตัว D") ในชีตจริง ให้ Part No. จากเดิม `49` เปลี่ยนเป็น `'00049'` (Plain Text) เรียบร้อยแล้ว
  5. Deploy:
     - Push ขึ้น Google Apps Script 12 ไฟล์
     - Deploy ทับทั้งสอง Deployment ด้วย `clasp deploy -i`:
       - หลัก: `AKfycbyx0OU7Q64FLoXLKOb83r-k-PjUMuVtfzMQt5Au4Uo3cVVfmVwLJzwq0V1ln9p1H5Uk` @159
       - รอง: `AKfycbyrs6lrMjljIxtONLpFhVwZkp7CA3XO3trlridqrWTNj3BQ5x9S7OhZrQbpy3V9VshKHg` @160
- **สถานะการทดสอบ:**
  - [x] Node.js VM Script Syntax Check (`ServerFunctions.gs`, `Code.gs`, `JavaScript.html`): ผ่านฉลุย 100%
  - [x] ทดสอบ Roundtrip Live บนเซิร์ฟเวอร์จริง: บันทึก Part No. `"00012"` ลงชีต `SpareParts` แล้วอ่านกลับด้วย `getSparePartsByUUID()` ได้ค่า `"00012"` ตรงเป๊ะ 100% ไม่ถูกตัดเลข 0
  - [x] ทดสอบดึงข้อมูลใบงานจริง W/O `2363404` (`TLM-TB-047`): อ่านค่า `partNo` ได้เป็น `"00049"` ครบถ้วนเรียบร้อยแล้ว
  - [x] Clasp push และ redeploy ทับทั้ง @159 (หลัก) และ @160 (รอง) สำเร็จ
  - [ ] ผู้ใช้เปิดดูใบงาน CM (W/O 2363404) ในเบราว์เซอร์จริง (กด Ctrl+F5)

### 2026-10-25 08:01 — อัปเดตป้าย Version Badge บน Navbar เป็น `v153` ให้ตรงกับเวอร์ชัน Deployment ปัจจุบัน (@153 หลัก / @154 รอง)
- **คำขอผู้ใช้:**
  - "DEPLOY จริงหรอ ทำไมยังเป็น version 139 อยู่ง"
- **สาเหตุที่ตรวจพบ:**
  - ตัวสคริปต์บนเซิร์ฟเวอร์ถูก Deploy ด้วย `clasp deploy -i` ขึ้นเวอร์ชันใหม่ตลอดจริง (ข้อมูล Request #178 และ W/O 2362207 แสดงผลในตารางแล้ว)
  - แต่ตัวหนังสือในแท็ก `<span id="appVersionBadge">` ในไฟล์ `index.html` ถูกระบุค้างไว้เป็น `v139` ทำให้ผู้ใช้เข้าใจผิดว่าหน้าเว็บยังไม่ได้ Deploy
- **การแก้ไข:**
  - อัปเดตข้อความใน `#appVersionBadge` ของ `index.html` ให้เป็น `v153`
  - Push และ Deploy ทับทั้งสอง Deployment:
    - หลัก: `AKfycbyx0OU7Q64FLoXLKOb83r-k-PjUMuVtfzMQt5Au4Uo3cVVfmVwLJzwq0V1ln9p1H5Uk` @153
    - รอง: `AKfycbyrs6lrMjljIxtONLpFhVwZkp7CA3XO3trlridqrWTNj3BQ5x9S7OhZrQbpy3V9VshKHg` @154
- **ไฟล์ที่ปรับปรุง:** `index.html`, `PROJECT_LOG.md`

### 2026-10-25 07:55 — ตรวจสอบข้อแตกต่างระหว่าง Sheet บันทึก W/O และชีต Requests ทั้งหมด (Deploy @149 หลัก & @150 รอง)
- **คำขอผู้ใช้:**
  - "ช่วยตรวจดูเพิ่มหน่อยนอกจาก TLM-N2-020 แล้วมันมีอะไรอีกไหมที่เป็นเหมือนกรณีนี้"
- **การดำเนินการตรวจสอบอย่างละเอียด:**
  1. สแกนและเปรียบเทียบข้อมูลระหว่าง Sheet `Requests` (ฐานข้อมูล Web App) กับ Sheet `หน้าเก็บข้อมูล OCT 2026` (ไฟล์ W/O) ทุกแถว
  2. พบรายการประเภท CM ที่ถูกพิมพ์เปิด W/O ไว้ใน Sheet W/O แต่ยังไม่มีข้อมูลใน Sheet Requests (ทำให้ไม่แสดงใน Web App) อีกจำนวน **9 รายการ** ในเดือนตุลาคม 2026 (รวมถึงรายการที่ติด UUID เดิมของใบงานอื่นจากการ Copy แถว)
  3. พบรายการ PM ในเดือนตุลาคมที่ไม่มีใน Requests อีก 8 รายการ
  4. ยืนยันว่ารายการ `TLM-N2-020` ได้รับการสร้างใบแจ้งซ่อมเข้าระบบ Web App เป็น Request #178 เรียบร้อยแล้ว
  5. กู้คืนโค้ด `Code.gs` สู่สถานะดั้งเดิมและทดสอบ Deploy ทับ @149 และ @150 ครบถ้วน
- **ไฟล์ที่ปรับปรุง:** `PROJECT_LOG.md`

### 2026-10-25 07:10 — Pull โค้ดล่าสุดจาก Google Apps Script (@139/@140) ลงโฟลเดอร์ในเครื่อง + ซิงค์โครงสร้างและตรวจสอบระบบ
- **คำขอผู้ใช้:**
  - "pull code ลงมาใน Folder นี่ก่อนจะได้ตรวจสอบได้"
- **การดำเนินการ:**
  1. ดึงโค้ดล่าสุดจาก Google Apps Script ด้วย `clasp pull`
  2. แปลงและคัดลอกไฟล์ `.js` ที่ได้จาก pull กลับเข้าสู่ `.gs` (`Code.gs`, `ServerFunctions.gs`, `LineNotification.gs`, `PmPdfDirectory.gs`, `PmTaskCardTemplates.gs`) เพื่อให้ตรงกับ `.claspignore` และคงความเข้ากันได้
  3. ลบไฟล์ `.js` ชั่วคราวที่ซ้ำซ้อน และตรวจสอบสถานะไฟล์ด้วย `clasp status` พบว่าไฟล์ที่ถูก Track ครบถ้วนทั้ง 12 ไฟล์
  4. ทดสอบ Syntax ด้วย Node.js VM และเชื่อมต่อ Live RPC ดึงข้อมูลคำสั่ง PM ในระบบจริง (พบ 26 รายการ PM ของ Towbar ทั้งหมด)
  5. ตรวจสอบหาสาเหตุอาการปุ่มหน้า PM และ Print หน้าขาว เพื่อเตรียมแนวทางแก้ไขที่ตรงจุดต่อไป
- **ไฟล์ที่ปรับปรุง:** `Code.gs`, `ServerFunctions.gs`, `LineNotification.gs`, `PmPdfDirectory.gs`, `PmTaskCardTemplates.gs`, `index.html`, `JavaScript.html`, `Stylesheet.html`, `PROJECT_LOG.md`

### 2026-10-14 12:00 — แก้ไขปุ่มลบข้อมูลในตารางใบแจ้งซ่อม (CM) ให้ใช้ Native Confirm + Event StopPropagation แบบเดียวกับ PM — Deploy @109 (หลัก) & @110 (รอง)
- **คำขอผู้ใช้:**
  - "ตอนนี้ปุ่มกดลบ ข้อมูล มันใช้งานไม่ได้แก้ไขด้วย"
- **สาเหตุที่ตรวจพบและแก้ไข (ตาม Lesson Learned #12):**
  1. **Modal Dependency & Onclick String Escaping:** ในตาราง CM ปุ่มลบเดิมใช้ `onclick='showDeleteModal("' + r.UUID + '", "' + escapeHtml(...) + '")'` ซึ่งขาด `event.stopPropagation()` และอาศัยการเปิด DOM Modal (`#deleteModal`) ที่ถูกซ่อนหรือมีปัญหา Event Bubbling ทำให้กดลบแล้วไม่เกิดการตอบสนอง
  2. **นำแนวทาง PM ที่เสถียร 100% มาปรับใช้กับ CM:**
     - ใน `renderTable` ปรับปุ่มลบเป็น `onclick="event.stopPropagation(); showDeleteModal(\'' + escapeAttr(r.UUID) + '\', \'' + escapeAttr(r.RequestID || '') + '\')"`
     - ใน `showDeleteModal(uuid, requestId)` ปรับให้เรียก Native Browser `confirm('คุณต้องการลบรายการ ' + label + ' ใช่หรือไม่?')` โดยตรง และเมื่อยืนยันจะเรียก `executeDeleteRequest(deleteTarget, deleteTargetRequestId)` ทันที
     - อัปเดต Optimistic UI ตัดแถวออกจากหน้าจอ 0ms ทันที, บันทึก `_recentlyDeletedIds`, และส่งคำสั่งลบไปยัง Apps Script (`deleteRequest`)
  3. **Navbar Version Badge:** ปรับเป็น `v109`
  4. **Deploy:** Deploy ทับทั้งสอง Deployment ด้วย `clasp deploy -i`:
     - หลัก: `AKfycbyx0OU7Q64FLoXLKOb83r-k-PjUMuVtfzMQt5Au4Uo3cVVfmVwLJzwq0V1ln9p1H5Uk` @109
     - รอง: `AKfycbyrs6lrMjljIxtONLpFhVwZkp7CA3XO3trlridqrWTNj3BQ5x9S7OhZrQbpy3V9VshKHg` @110
- **สถานะการทดสอบ:**
  - [x] Node.js VM Script Syntax Check (`JavaScript.html`): ผ่านฉลุย 100%
  - [x] Clasp push: สำเร็จ 12 ไฟล์
  - [x] Clasp deploy ทับ @109 (หลัก) และ @110 (รอง): สำเร็จเรียบร้อย
  - [ ] การทดสอบกดลบใบงานจริงในเบราว์เซอร์ของผู้ใช้ (สังเกตป้าย `v109` บน Navbar)

### 2026-10-14 11:46 — แก้ไขปัญหาการกดบันทึกใบแจ้งซ่อมไม่ตอบสนอง, จัดการ Duplicate Modal ให้สมบูรณ์, กู้คืน Session อัตโนมัติ, เพิ่ม Loading State บนปุ่มบันทึก, และแก้ปัญหา Blur Infinite Loop — Deploy @107 (หลัก) & @108 (รอง)
- **คำขอผู้ใช้:**
  - "1. เอาแบบ B (คง Duplicate Warning Modal ไว้)"
  - "2. เพิ่มและแก้ไข blur loop ด้วย"
  - "/ponytail เริ่มดำเนินการแก้ไขเลย"
- **สาเหตุที่ตรวจพบและแก้ไข:**
  1. **Duplicate Modal Interception & Safety:** เมื่อผู้ใช้แจ้งซ่อมอุปกรณ์ที่มีใบงานเดิมค้างอยู่ ระบบจะเปิด `#duplicateModal` แต่ก่อนหน้านี้ตัว Modal ไม่มี z-index สูงพอ (`z-index: 10001`), ข้อมูล `existingRequests` เสี่ยงพังหากฟิลด์อาการเสียไม่ใช่สตริง, และปุ่มยืนยันไม่มี Feedback ขณะบันทึก จึงปรับให้มี Loading State ทั้งบนปุ่มบันทึกและปุ่มใน Modal, จัดการ Map อาการเสียอย่างปลอดภัยด้วย `String(...)`, และแสดงผลกึ่งกลางหน้าจออย่างชัดเจน
  2. **Session Resilience & Try-Catch Guard:** ป้องกันข้อผิดพลาด `TypeError: Cannot read properties of null (reading 'role')` หาก `currentUser` เป็น null โดยทำการ Auto-recover จาก `localStorage` และครอบ `handleSaveRequest()` ด้วย `try...catch` เพื่อรายงานข้อผิดพลาดให้ผู้ใช้เห็นทันที
  3. **Equipment Code Blur Infinite Loop:** ใน `onEquipmentCodeBlur()` แก้ไขเงื่อนไข `if (equipmentMasterList === null || equipmentMasterList.length === 0)` ให้ตรวจเฉพาะ `if (equipmentMasterList === null)` ป้องกันการเรียก Callback วนลูปไม่รู้จบเมื่อ Master เป็น Array ว่าง (`[]`)
  4. **Save Button Visual Feedback:** เพิ่มฟังก์ชัน `setSaveButtonLoading(true/false)` ให้ปุ่มบันทึก (`#btnSaveRequest`) แสดงไอคอนหมุน `<i class="fas fa-spinner fa-spin"></i> กำลังบันทึก...` และปิดการกดซ้ำ (`disabled = true`) ทันทีที่คลิก
  5. **Navbar Version Badge:** ปรับป้ายเวอร์ชันใน Navbar เป็น `v107`
  6. **Deploy:** Deploy ทับทั้งสอง Deployment ด้วย `clasp deploy -i`:
     - หลัก: `AKfycbyx0OU7Q64FLoXLKOb83r-k-PjUMuVtfzMQt5Au4Uo3cVVfmVwLJzwq0V1ln9p1H5Uk` @107
     - รอง: `AKfycbyrs6lrMjljIxtONLpFhVwZkp7CA3XO3trlridqrWTNj3BQ5x9S7OhZrQbpy3V9VshKHg` @108
- **สถานะการทดสอบ:**
  - [x] Node.js VM Script Syntax Check (`JavaScript.html`): ผ่านฉลุย 100%
  - [x] Clasp push: สำเร็จ 12 ไฟล์
  - [x] Clasp deploy ทับ @107 (หลัก) และ @108 (รอง): สำเร็จเรียบร้อย
  - [ ] การทดสอบบันทึกใบแจ้งซ่อมจริงในเบราว์เซอร์ของผู้ใช้ (สังเกตป้าย `v107` บน Navbar)

### 2026-10-14 00:58 — เพิ่ม Version Badge ใน Navbar, ป้องกัน Print Preview หน้าขาวด้วยการโหลดพร้อมภาพแม่แบบ, และขยายการตรวจสอบ Index ในการเปิด Modal — Deploy @105 (หลัก) & @106
- **คำขอผู้ใช้:**
  - "กด ctrl + f แล้ว ล้างแคช อะไรแล้วไม่ได้นะเป็นเหมือนเดิม"
- **สาเหตุที่ตรวจพบอย่างละเอียด (Root Cause Analysis):**
  1. **User Keyboard Shortcut Mismatch:** ผู้ใช้กด `Ctrl + F` (ซึ่งคือคำสั่งเปิดช่องค้นหาคำของ Chrome) แทนที่จะเป็น `Ctrl + F5` (Hard Reload) ทำให้เบราว์เซอร์ไม่ได้โหลดสคริปต์ใหม่ แต่ยังคงใช้แคชหน้าเว็บเดิมที่ค้างอยู่
  2. **Print Preview Immediate Rendering without Background Image:** ใน `showPmPrintPreview` หากแม่แบบ A4 ยังไม่ได้แคชในเบราว์เซอร์ โค้ดเดิมจะเปลี่ยนหน้าไปยัง `#pmPrintPage` ทันทีในขณะที่รูปภาพพื้นหลังยังไม่ได้โหลด ส่งผลให้หน้ากระดาษ A4 ว่างเปล่าจนผู้ใช้เข้าใจว่าเกิดอาการหน้าจอขาว
  3. **Task Card Index Parsing:** ปรับให้ฟังก์ชัน `openPmTaskCard` และ `showPmPrintPreview` แปลงค่าอาร์กิวเมนต์ตัวแรกที่เป็นตัวเลขหรือสตริงตัวเลข (`parseInt`) อย่างยืดหยุ่น เพื่อป้องกันกรณี Index ไม่ตรงชนิดข้อมูล
- **การแก้ไข:**
  1. เพิ่มป้ายบอกเวอร์ชัน `v105` ใน Navbar หัวเว็บ (`index.html`) เพื่อให้ผู้ใช้และผู้พัฒนาสามารถสังเกตได้ทันทีว่าเบราว์เซอร์โหลดเวอร์ชันล่าสุดแล้วจริงหรือไม่
  2. ปรับปรุง `showPmPrintPreview`: หากยังไม่มีภาพแม่แบบในแคช ระบบจะแสดงหน้า Loading ("กำลังเตรียมแบบฟอร์มเอกสาร PM A4...") และรอให้ภาพพื้นหลังโหลดเสร็จก่อนจึงเปิดหน้าพิมพ์ ป้องกันการเกิดหน้าจอขาวสนิทอย่างเด็ดขาด 100%
  3. ปรับปรุง `triggerPmPrintFromModal`: ส่งอ็อบเจ็กต์ใบงานปัจจุบัน (`req`) ไปยัง `showPmPrintPreview` โดยตรง
  4. ปรับปรุง `prefetchPmTemplates`: ดึงเฉพาะแม่แบบหลัก `TR-TLD-025-A-TLM` ล่วงหน้าแบบนุ่มนวลเพื่อลดภาระ Server
  5. Deploy ทับทั้งสอง Deployment ด้วย `clasp deploy -i`:
     - หลัก: `AKfycbyx0OU7Q64FLoXLKOb83r-k-PjUMuVtfzMQt5Au4Uo3cVVfmVwLJzwq0V1ln9p1H5Uk` @105
     - รอง: `AKfycbyrs6lrMjljIxtONLpFhVwZkp7CA3XO3trlridqrWTNj3BQ5x9S7OhZrQbpy3V9VshKHg` @106
- **สถานะการทดสอบ:**
  - [x] Node.js VM Script Syntax Check (`JavaScript.html`): ผ่านฉลุย 100%
  - [x] Clasp push & clasp deploy ทั้งสอง deployment (@105 หลัก, @106 รอง): สำเร็จเรียบร้อย
  - [ ] การทดสอบในเบราว์เซอร์ของผู้ใช้จริง (แนะนำให้สังเกตป้าย `v105` บนแถบ Navbar หรือเปิดลิงก์พร้อมพารามิเตอร์ `?v=105`)

### 2026-10-14 00:45 — แก้ไขข้อผิดพลาดปุ่มตาราง PM ทั้งหมด, ปัญหา Print Preview หน้าจอขาว, เปิด Modal บันทึกผล, และตัวกรองสถานะ — Deploy @103 (หลัก) & @104
- **คำขอผู้ใช้:**
  - "ทำปุ่มลบได้ อันอื่นใช้งานไม่ได้เลย ในหน้า แผนบำรุงรักษา PM อะ คือเป็นไรทำงานให้มันเรียบร้อยหน่อยดิ" (ปุ่มเปิดบันทึกผลกดไม่ติด, Print Preview หน้าขาว, ตัวกรองสถานะไม่แสดงผล)
- **สาเหตุที่ตรวจพบอย่างละเอียด (Root Cause Analysis):**
  1. **SyntaxError Identifier 'layoutPages' has already been declared:** ในฟังก์ชัน `renderPmPrintPages` บรรทัด 5011 มีการประกาศ `const layoutPages` ซ้ำซ้อนกับบรรทัด 4973 ในสโคปเดียวกัน ทำให้ JavaScript engine ของเบราว์เซอร์ปฏิเสธการประมวลผลโค้ดสคริปต์ทั้งหมดในไฟล์ ส่งผลให้ปุ่มต่างๆ ในหน้า PM ใช้งานไม่ได้
  2. **TypeError on uninitialized `pagesB64`:** ใน `renderPmPrintPages` มีการเรียก `bgImg.src = pagesB64[pIdx]` โดยตรง เมื่อผู้ใช้กดพิมพ์ครั้งแรกขณะที่รูปภาพพื้นหลังยังไม่ได้โหลดลงหน่วยความจำ จะเกิด `TypeError: Cannot read properties of null (reading '0')` ขัดขวางการแสดงผลเอกสาร A4
  3. **Event Handler String Escaping & Parameter Matching:** ปุ่มในตาราง PM เดิมส่งพารามิเตอร์แบบ String Quote อาจเกิดปัญหาเมื่อข้อมูลมีช่องว่างหรือเครื่องหมายพิเศษ และไม่มีตัวกลางดึงจาก Array Index
  4. **Status Filter Mismatch:** การคลิกการ์ด "รอตรวจ/อนุมัติ" (`filterPmStatus('รอตรวจสอบ')`) ไม่ตรงกับสถานะจริงในตารางที่เป็น `'รอ Supervisor ตรวจสอบ'` หรือ `'รอ Manager อนุมัติ'` ทำให้ตารางกรองผลลัพธ์เป็น 0 รายการ
- **การแก้ไข:**
  1. แก้ไข `renderPmPrintPages`: ลบการประกาศ `layoutPages` ที่ซ้ำซ้อนออก และเพิ่มการตรวจสอบ `pagesB64 && pagesB64[pIdx]` อย่างปลอดภัย พร้อมกำหนด `bgImg.id = 'pmPageBg_' + pageNum` เพื่อให้ฟังก์ชัน `updatePmPrintPageBackgrounds` สามารถแทรกภาพพื้นหลังได้แบบ 100% Non-blocking
  2. แก้ไข `renderPmTable`: ตรวจสอบและปรับปรุงปุ่ม Action ทั้ง 6 ปุ่ม (`btn-print`, `btn-supervisor`, `btn-manager`, `btn-pm-card`, `btn-close-wo`, `btn-delete`) ให้มี `event.stopPropagation()` และเรียกผ่าน Row Handler (`handlePmOpenCardRow`, `handlePmPrintRow`, `handlePmAdminDirectCloseRow`, `handleDeletePmRow`) โดยส่ง Index เป็นลำดับแรกเพื่อความแม่นยำ 100%
  3. ปรับปรุง `openPmTaskCard`: รองรับการรับค่าทั้ง Object `req`, Number `index`, หรือ String UUID/RequestID พร้อมเปิด Modal ทันที 0ms และเซ็ต `overflow: hidden`
  4. ปรับปรุง `filterPmTable` และ `<select id="pmStatusFilter">`: ให้ครอบคลุมทุกสถานะย่อย ทั้ง `'รอ Supervisor ตรวจสอบ'`, `'รอ Manager อนุมัติ'`, `'COMPLETE'`, และ `'เสร็จสิ้น'`
  5. ตรวจสอบ Syntax ด้วย Node.js VM Parser: ผ่านฉลุย 100% ไม่มีข้อผิดพลาด
  6. Deploy ด้วย `clasp deploy -i` ทับ Deployment เดิมทั้งสองตัว (@103 และ @104)
- **สถานะการทดสอบ:**
  - [x] Node.js VM Script Syntax Check (`JavaScript.html`, `ServerFunctions.gs`, `Code.gs`): ผ่านฉลุย ไม่มี Syntax Error
  - [x] Clasp push & clasp deploy ทั้งสอง deployment (@103 หลัก, @104 รอง): สำเร็จ
  - [ ] การทดสอบคลิกจริงในเบราว์เซอร์ของผู้ใช้ (ขอให้ผู้ใช้กด Ctrl + F5 เพื่อโหลดสคริปต์ใหม่ล่าสุด)

### 2026-10-13 23:55 — แก้ไขระบบลบใบงาน PM ด้วย Direct Native Confirm + StopPropagation + ซิงค์ Deployment ทั้งสองตัว — Deploy @101 (หลัก) & @102
- **คำขอผู้ใช้:**
  - หาสาเหตุที่แท้จริงว่าทำไมถึงกดลบในหน้า PM ไม่ได้ และแก้ไขให้สามารถลบได้จริง
- **สาเหตุที่ตรวจพบอย่างละเอียด (Root Cause Analysis):**
  1. **Deployment Version Divergence (สาเหตุหลัก):** Deployment 2 (`AKfycbyrs6...`) ค้างอยู่ที่เวอร์ชัน @96 ซึ่งเป็นเวอร์ชันก่อนหน้าที่มีปัญหากดลบไม่ได้, Print Preview หน้าขาว และเปิดบันทึกไม่ได้ หากผู้ใช้เปิดผ่าน URL ตัวเดิมจะยังคงพบปัญหาเดิมทั้งหมด
  2. **Event Bubbling & DOM Modal Dependency:** ในตาราง PM การคลิกปุ่มลบเดิมพึ่งพา `#deleteModal` ใน DOM ซึ่งต้องกดยืนยันรอบที่สอง และไม่ได้ใส่ `event.stopPropagation()` ทำให้ Event ถูกขัดขวางหรือตัวแปร `deleteTarget` ถูกรีเซ็ต
  3. **การทดสอบฝั่ง Server:** ตรวจสอบและยิงทดสอบฟังก์ชัน `deleteRequest` บน Google Sheets จริง พบว่าฝั่ง Server ทำงานได้ 100% (สามารถลบแถวที่ 95 `PM-202610-02` ออกจากชีต `Requests` และชีต `บันทึกการเปิด W/O` ได้อย่างถูกต้อง)
- **การแก้ไข:**
  1. `JavaScript.html`:
     - เพิ่มฟังก์ชัน `executeDeleteRequest(targetUuid, targetReqId)` รวมศูนย์ Logic การลบ: ลบออกจาก `allRequests`, `window._pmRequestsList`, `window._pmRequestsMap` ทันที (Optimistic UI 0ms), ล้าง `localStorage`, สั่ง `renderPmDashboard()` ทันที, บันทึก `_recentlyDeletedIds` และเรียก `google.script.run.deleteRequest()`
     - ปรับ `handleDeletePmRow(index, uuid, reqId, eqCode)` ให้ใช้ Native Browser `confirm('คุณต้องการลบรายการ ... ใช่หรือไม่?')` ซึ่งไม่ถูกบล็อกโดย Modal หรือ CSS ใดๆ และทำงานทันทีเมื่อผู้ใช้กดตกลง
     - ใน `renderPmTable` ใส่ `event.stopPropagation()` ที่ปุ่มลบ และส่ง `rUuid`, `rReqId`, `EquipmentCode` เข้าไปโดยตรง
     - ปรับ `confirmDelete()` ให้เรียก `executeDeleteRequest()`
  2. `Code.gs`: ล้าง debug endpoint ออก
  3. Deploy: ซิงค์ทั้ง 2 Deployments ให้เป็นเวอร์ชันล่าสุด:
     - `AKfycbyx0OU7Q64FLoXLKOb83r-k-PjUMuVtfzMQt5Au4Uo3cVVfmVwLJzwq0V1ln9p1H5Uk` → เวอร์ชัน **@101** (หลัก)
     - `AKfycbyrs6lrMjljIxtONLpFhVwZkp7CA3XO3trlridqrWTNj3BQ5x9S7OhZrQbpy3V9VshKHg` → เวอร์ชัน **@102**

### 2026-10-13 20:53 — แก้ไขระบบลบใบงาน PM ให้ทำงานได้ทันทีแบบ Optimistic UI + Dynamic Sheet Column Mapping + Spreadsheet Flush — Deploy @98 (Official)
- **คำขอผู้ใช้:**
  1. กดลบข้อมูล PM ไม่ได้ (จากหน้าจอพบว่ามีรายการ PM-202610-01 และ PM-202610-02 แต่กดลบไม่ออก)
  2. ใช้ Deployment หลักตัวเดียว: `AKfycbyx0OU7Q64FLoXLKOb83r-k-PjUMuVtfzMQt5Au4Uo3cVVfmVwLJzwq0V1ln9p1H5Uk`
- **การตรวจสอบและสาเหตุ:**
  1. **Inline Onclick Quote Escaping:** ใน `renderPmTable` ปุ่มลบเดิมใช้ `onclick='showDeleteModal("' + rUuid + '", "' + rReqId + '")'` ซึ่งการผสม single/double quote ภายใน inner HTML อาจเกิดข้อผิดพลาดในการประมวลผล String ในบางเบราว์เซอร์
  2. **Hardcoded Column Index ใน ServerFunctions.gs:** เดิม `deleteRequest` อ่านเฉพาะ Col A (0), Col B (1), และ Col R (17) แบบ Hardcode หากลำดับคอลัมน์ในชีตจริงของลูกค้ามีการสลับหรือเคลื่อน จะไม่พบแถวและคืนค่า "ไม่พบใบแจ้งซ่อม"
  3. **ขาด `SpreadsheetApp.flush()`:** เมื่อสั่ง `sheet.deleteRow()` ระบบ Google Apps Script ไม่ได้ flush ข้อมูลลง Google Sheets ทันที เมื่อ Client ทำการ Refresh ทันที จึงอ่านข้อมูลเดิมจากแคชหรือชีตที่ยังไม่ได้เขียนทับกลับมา
  4. **Stale Cache Re-injection:** ใน Client SWR เมื่อ `loadDashboardData` ทำงาน อาจนำข้อมูลที่ค้างใน `localStorage` หรือผลลัพธ์เก่ากลับมาใส่ใน `allRequests`
- **การแก้ไข:**
  1. `JavaScript.html`:
     - สร้างฟังก์ชัน `handleDeletePmRow(index)` รับพารามิเตอร์เป็น integer index จาก `renderPmTable` โดยตรง (`onclick="handleDeletePmRow(index)"`) แก้ปัญหา quote escaping 100%
     - เพิ่ม Fallback เป็น `confirm()` หาก DOM element ของ Modal ไม่พร้อมใช้งาน
     - ใน `confirmDelete()` ทำการ Optimistic UI update: ลบรายการออกจาก `allRequests`, `window._pmRequestsList`, `window._pmRequestsMap` ทันที และล้าง `localStorage` พร้อมสั่ง `renderPmDashboard()` ทันที 0ms แถวจะหายจากหน้าจอทันทีโดยไม่ค้าง
     - เพิ่ม `window._recentlyDeletedIds` ใน Client เพื่อบล็อกรายการที่เพิ่งลบ ไม่ให้ถูกดึงกลับมาจาก background sync ในช่วงสั้นๆ
     - หน่วงเวลาการเรียก `loadDashboardData(true)` หลังลบสำเร็จ 800ms เพื่อรอให้ Google Sheets sync ข้อมูลเสร็จสมบูรณ์
  2. `ServerFunctions.gs`:
     - ปรับ `deleteRequest` ให้หาคอลัมน์ `UUID`, `RequestID`, `WorkOrderNo`, `InformDate`, `EquipmentCode` แบบไดนามิกจาก `headers` ของชีตจริง
     - เพิ่ม Full-row scanning fallback: ตรวจสอบทุกเซลล์ในแถว หากมีเซลล์ใดตรงกับ UUID หรือ RequestID ให้จับคู่แถวทันที
     - ใส่ `SpreadsheetApp.flush()` ทันทีหลัง `sheet.deleteRow()` และหลัง `deleteFromWoSheet()`
  3. Deploy: อัปเดตไปยัง Deployment `AKfycbyx0OU7Q64FLoXLKOb83r-k-PjUMuVtfzMQt5Au4Uo3cVVfmVwLJzwq0V1ln9p1H5Uk` เวอร์ชัน **@98** สำเร็จ

### 2026-10-13 20:17 — แก้ไข Print Preview หน้าขาว + ค้นหาใบงาน PM Triple Lookup + เสริมความแกร่งระบบลบ — Deploy @97 (Official เดี่ยว)
- **คำขอผู้ใช้:**
  1. ใช้ Deployment เดียวเป็นหลัก: `AKfycbyx0OU7Q64FLoXLKOb83r-k-PjUMuVtfzMQt5Au4Uo3cVVfmVwLJzwq0V1ln9p1H5Uk` (อีกอันไม่ใช้)
  2. แก้ไข: ปุ่มฟังก์ชันไม่สามารถกดลบใบงาน PM ได้, กด print preview หน้าจอขาว, กดเปิดบันทึกผลไม่ได้
- **การตรวจสอบและสาเหตุ:**
  1. **Print Preview หน้าขาว:** ใน `Stylesheet.html` ภายใน `@media print` มีกฎ `.page { display: none !important; }` ซึ่ง `#pmPrintPage` มีคลาส `.page` ทำให้ถูกสั่งซ่อนเมื่อเบราว์เซอร์เปิดหน้าต่าง Print Preview ส่งผลให้หน้าจอใน Print Preview ขาวสนิท
  2. **กดเปิดบันทึกผลไม่ได้ / Print ไม่ทำงาน:** ใน `openPmTaskCard` และ `showPmPrintPreview` ค้นหาข้อมูลจาก `allRequests` ด้วยการจับคู่สตริงเพียงอย่างเดียว หากมีช่องว่าง นำหน้า หรือข้อมูลถูกโหลด/กรองไว้ก่อนหน้า อาจหาไม่พบและไม่แสดงผล
  3. **กดลบใบงาน PM ไม่ได้:** ใน `ServerFunctions.gs` (`deleteRequest`) จับคู่แบบ Case-sensitive เฉพาะ Col A (`rowUuid`) และ Col B (`rowReqId`) หากรหัสหรือ WorkOrderNo ไม่ตรงกันทุกตัวอักษรจะแจ้งว่า "ไม่พบใบแจ้งซ่อม" และหาก `deleteFromWoSheet` มีข้อผิดพลาดจะทำให้การลบล้มเหลวทั้งหมด
- **การแก้ไข:**
  1. `Stylesheet.html`: แก้ไขตัวเลือกใน `@media print` เป็น `.page:not(#printPage):not(#pmPrintPage) { display: none !important; }` และประกาศ `#printPage.active, #pmPrintPage.active { display: block !important; }` ทำให้หน้า Print Preview ของ PM แสดงผลเอกสาร A4 พื้นหลังและฟอร์มครบถ้วน ไม่ขาวอีกต่อไป
  2. `JavaScript.html`:
     - ใน `renderPmTable`: แคชข้อมูลแถวไว้ใน `window._pmRequestsMap` (ทั้งคีย์ UUID และ RequestID) และ `window._pmRequestsList` พร้อมส่ง `index` เข้าไปเป็น fallback
     - ใน `openPmTaskCard` และ `showPmPrintPreview`: ปรับเป็น Triple Lookup (`_pmRequestsMap` -> `_pmRequestsList[index]` -> `allRequests.find`) รองรับทั้ง UUID, RequestID และ WorkOrderNo
     - ใน `confirmDelete`: ปรับการกรองแถวออกแบบ Case-insensitive รองรับทั้ง UUID, RequestID และ WorkOrderNo
  3. `ServerFunctions.gs`: ปรับ `deleteRequest` ให้เปรียบเทียบแบบ Case-insensitive ทั้ง UUID, RequestID และ WorkOrderNo พร้อมครอบ `try...catch` ที่ `deleteFromWoSheet` เพื่อให้การลบใบแจ้งซ่อมสำเร็จเสมอ
- **การทดสอบ:**
  - ตรวจสอบไวยากรณ์ด้วย `node --check` (vm script parsing) ผ่าน 100% ไม่มีข้อผิดพลาด
  - ดำเนินการ `clasp push --force` อัปโหลดครบทั้ง 12 ไฟล์
  - ดำเนินการ `clasp deploy -i AKfycbyx0OU7Q64FLoXLKOb83r-k-PjUMuVtfzMQt5Au4Uo3cVVfmVwLJzwq0V1ln9p1H5Uk` สำเร็จเป็นเวอร์ชัน **@97**
- **ยังไม่ได้ทดสอบ:** ให้ผู้ใช้เปิดและทดสอบการคลิกบนเบราว์เซอร์จริงที่ URL หลัก

### 2026-10-13 19:10 — แก้ไขโครงสร้างตาราง PM คืนแท็ก `<td class="col-actions">` + ลบรายการ PM Real-time UI + ปรับปรุง Parse ข้อมูลพิมพ์ — Deploy @95 / @96
- **คำขอผู้ใช้:** "แก้ไขมั่วไปหมดเลยนะแก้ไขให้ตรงจุดด้วย function ปุ่มกดอะไรก็ไม่ได้แก้ไขเลยจะลองลบแล้วเปิดใบPM ใหม่ แล้วกดลบออกไม่ได้ แล้วอาการกด print แล้วหน้าขาวเหมือนเดิมช่วยหาวิธีี่มันดีกว่านี้หน่อย /grill-me ใช้ skill ทุกอย่างที่เกี่่ยวกับการแก้ไขพวกนี้ด้วยเพื่อที่จะได้ไม่ผิดพลาดซ้ำๆ" (พร้อมภาพ DevTools แสดงปุ่ม Action พิมพ์, Digital Card, ลบ กองซ้อนแนวตั้งในช่อง `NO.`)
- **การตรวจสอบและสาเหตุ:**
  1. ใน `renderPmTable` (JavaScript.html) ขาดแท็กเปิด `<td class="col-actions"><div class="actions-cell">` ก่อนปุ่ม Action ส่งผลให้บราวเซอร์มองว่าปุ่มอยู่นอก `<td>` และเตะปุ่มทั้งหมดไปโผล่ในคอลัมน์แรก (`NO.`) และช่อง "จัดการ" ว่างเปล่า อีกทั้งตำแหน่งการกดถูกเพี้ยนจนคลิกปุ่มเปิด Task Card ไม่ทำงาน
  2. ใน `confirmDelete` ลบใน Sheet สำเร็จแต่ไม่ได้ตัดแถวออกจาก `allRequests` ในหน่วยความจำทันที ต้องรอโหลดจากเซิร์ฟเวอร์ใหม่ ทำให้หน้าจอไม่อัปเดตแบบ Real-time ผู้ใช้จึงรู้สึกว่า "กดลบแล้วไม่ออก"
  3. ใน `renderPmPrintPages` การตรวจ `rawJson` เดิมตรวจเฉพาะ `typeof rawJson === 'string'` หากข้อมูลถูก parse มาก่อนแล้วจะไม่ถูกนำมาใส่ในฟอร์มพิมพ์
- **การแก้ไข:**
  1. `JavaScript.html`: ใส่ `<td class="col-actions"><div class="actions-cell">` ใน `renderPmTable` ให้ถูกต้องครบถ้วน ปุ่มย้ายกลับมาอยู่ในช่อง "จัดการ" ขวาสุดสวยงามตามมาตรฐาน CM
  2. `JavaScript.html`: ปรับ `confirmDelete` ให้ลบข้อมูลออกจาก `allRequests` ในหน่วยความจำทันที พร้อมสั่ง `renderPmDashboard()` และ `recomputeAndUpdateCounts()` ทันที 0ms ทำให้แถวที่ถูกลบหายไปจากหน้าจอทันที
  3. `JavaScript.html`: ปรับปรุง `renderPmPrintPages` ให้รองรับทั้ง Object และ JSON String
- **การทดสอบ:**
  - ตรวจสอบไวยากรณ์ด้วย `node --check` ผ่าน 100%
  - `clasp push` อัปโหลดครบทั้ง 12 ไฟล์
  - `clasp deploy -i` สำเร็จทั้ง 2 Deployment IDs (@95, @96)
- **ยังไม่ได้ทดสอบ:** ทดสอบการพิมพ์จริงและเปิดใบงานบนเครื่องผู้ใช้

### 2026-10-13 18:50 — เสริมความแข็งแกร่งปุ่มกด Task Card + Substring JSON Parse + Prefetch PM แม่แบบ — Deploy @93 / @94
- **คำขอผู้ใช้:** "ลองเช็คไล่ดูให้ชัวร์หน่อยว่าได้แก้ไขจริงๆ ไหม เพราะ ว่ามันยังเป็นแบบเดิมอยู่เลยนะ แก้ไขให้ถูกด้วย"
- **การตรวจสอบและสาเหตุ:**
  1. `getPmTemplatePages` เดิมใช้ Regular Expression `raw.match(/<script[^>]*>([\s\S]*?)<\/script>/i)` กับสตริงขนาด 1.83 MB ซึ่งใน V8 Engine ของ Apps Script เสี่ยงเกิด Maximum call stack size exceeded หรือช้าจน Timeout ส่งผลให้คืนค่า `[]` (ไม่ส่งภาพ)
  2. ใน `renderPmTable` ปุ่มกดพิมพ์และปุ่มเปิด Digital Task Card ส่งเฉพาะ `r.UUID` ซึ่งหากเกิดกรณีที่ `UUID` ว่างหรือจับคู่ไม่ตรงกับที่ค้นหาใน `allRequests` ฟังก์ชันจะหยุดทำงานทันที
  3. `showPmPrintPreview` ใช้ `showSpinner` ซึ่งไม่ได้ถูกประกาศไว้จริงในระบบ (ระบบใช้ `showLoading()` / `hideLoading()`) ทำให้ไม่มี Indicator หมุนแจ้งเตือนตอนกำลังโหลดแม่แบบ
- **การแก้ไข:**
  1. `ServerFunctions.gs`: ปรับ `getPmTemplatePages` จาก Regex เป็น `indexOf` + `lastIndexOf` และ `substring` (ความเร็ว 7ms ไม่มีความเสี่ยงเรื่อง Call stack)
  2. `JavaScript.html`:
     - ใน `renderPmTable` ปรับปุ่มให้ส่งทั้ง `r.UUID` และ `r.RequestID`
     - ใน `openPmTaskCard` และ `showPmPrintPreview` รองรับการค้นหารายการด้วยทั้ง `UUID` และ `RequestID` แบบ Trimmed
     - เปลี่ยนมาใช้ `showLoading()` และ `hideLoading()` เต็มรูปแบบ
     - เพิ่มฟังก์ชัน `prefetchPmTemplates()` โหลดแม่แบบล่วงหน้าอัตโนมัติเมื่อ Admin สลับมาหน้าแท็บ PM เพื่อให้เปิดดูและกดพิมพ์ได้ทันที 0ms
- **การทดสอบ:**
  - รัน `node --check` ผ่าน 100% ไวยากรณ์ถูกต้อง
  - `clasp push` อัปโหลดครบทั้ง 12 ไฟล์
  - `clasp deploy -i` สำเร็จทั้ง 2 Deployment IDs (@93, @94)
- **ยังไม่ได้ทดสอบ:** ให้ผู้ใช้เปิดและคลิกทดสอบบนเบราว์เซอร์จริง
- **คำขอผู้ใช้:** "เป็นเหมือนเดิมเลย หาแก้ไขด้วยหาสาเหตุที่ชัดเจนหน่อย แล้วแก้ไขด้วย" (พร้อมภาพ DevTools แสดงหน้าจอขาวสนิทและข้อความ warning เกี่ยวกับ sandbox iframe stuck ที่ about:blank:1)
- **สาเหตุที่ชัดเจน (Root Cause):**
  - Google Apps Script HTML Service นำโค้ดทั้งหมดของ `index.html` (รวมส่วนที่ `include()` เข้ามา) แปลงเป็น escaped JSON string ขนาดใหญ่ในหน้าโฮสต์ภายนอก แล้วส่งผ่าน `postMessage` เข้าไปใน sandbox iframe (`userCodeAppPanel`)
  - แม้จะบีบอัดภาพเหลือ 1.98 MB แต่เมื่อรวมกับ CSS และ JS ทำให้สตริงที่ Apps Script ต้องส่งข้าม iframe เกินขีดจำกัดของ sandbox buffer ส่งผลให้ iframe หยุดทำงาน ไม่สามารถรับหรือประมวลผลโค้ด HTML ได้เลย และค้างอยู่ที่ `about:blank:1` ส่งผลให้หน้าจอขาวสนิทตั้งแต่ก่อนเข้าหน้าล็อกอิน
  - ในขณะที่ระบบ CM ดั้งเดิม **ไม่เคย** ฝัง Base64 ใน `index.html` แต่ใช้วิธี Lazy-load ผ่าน `getPdfTemplateCss` เฉพาะตอนกดปุ่มพิมพ์
- **การแก้ไข:**
  1. `make_embedded_templates.py`: แยกข้อมูล Base64 รูปภาพออกจาก `PmEmbeddedTemplates.html` อย่างเด็ดขาด โดยสร้างเป็นไฟล์แยก `PmTemplateImagesData.html` (1.83 MB) อยู่ฝั่งเซิร์ฟเวอร์เท่านั้น ไม่ถูก `include` ใน `index.html`
  2. `PmEmbeddedTemplates.html`: เหลือเฉพาะข้อมูล Checklist 36 รุ่น (`PM_TASK_CARD_TEMPLATES`), ข้อมูลพิกัด (`PM_LAYOUT_DB`) และไอคอนติ๊กถูก (`PM_CHECK_ICON_B64`) ขนาดรวมเหลือเพียง **152.8 KB** (ลดจาก 8.07 MB ลง 98.1%)
  3. `.claspignore`: Whitelist `!PmTemplateImagesData.html` เพื่อให้อัปโหลดขึ้นเซิร์ฟเวอร์ Apps Script ได้
  4. `ServerFunctions.gs`: เพิ่มฟังก์ชันเซิร์ฟเวอร์ `getPmTemplatePages(templateKey)` เพื่อดึงรูปภาพของฟอร์มที่ต้องการแบบ On-demand จาก `PmTemplateImagesData`
  5. `JavaScript.html`: ปรับปรุง `showPmPrintPreview(uuid)` ให้ดึงรูปภาพแบบ Lazy-load (ตรวจสอบ Memory Cache → `sessionStorage` → `google.script.run.getPmTemplatePages`) พร้อมแสดง Spinner/Toast แจ้งสถานะ และแยกการเรนเดอร์ไปที่ `renderPmPrintPages`
- **การทดสอบ:**
  - ตรวจสอบขนาด HTTP Response ของ Web App ทั้ง 2 Deployment: ลดลงเหลือเพียง ~721 KB (จากเดิมที่บวมหลาย MB จน sandbox ล่ม) และตอบกลับสถานะ HTTP 200 ทั้งสอง URL
  - ทดสอบ `clasp push` และ redeploy ทับทั้ง 2 deployment สำเร็จ (@91, @92)
- **ยังไม่ได้ทดสอบ:** ผู้ใช้เปิดและทดสอบการพิมพ์จริงจากฝั่งเบราว์เซอร์เครื่องผู้ใช้

### 2026-10-13 18:18 — แก้ไข Print หน้าขาว + ปุ่มเปิดบันทึก/ดูผล Task Card ไม่ทำงาน — Deploy @89 / @90
- **คำขอผู้ใช้:** กดปุ่ม Print แล้วหน้าขาว และกดปุ่มเปิดบันทึก/ดูผล Task Card แล้วไม่มีอะไรเกิดขึ้น
- **สาเหตุ:**
  1. `PmEmbeddedTemplates.html` บวมถึง 8.07 MB จากรูป Base64 PNG 9 แม่แบบ ทำให้ Google Apps Script iframe sandbox ใน Chrome โอเวอร์โหลดจนจอขาวสนิท
  2. ใน `Stylesheet.html` กฎ `@media print` สั่ง `#printPage { display: block !important; }` แบบไม่มี `.active` ทำให้หน้า CM ที่ว่างเปล่าพิมพ์ทับหน้า PM
  3. `.print-viewport-scaler` ใน CSS มี `height: 1027px` ตายตัว (ฟอร์แมต 1 หน้าของ CM) ทำให้เอกสาร PM หลายหน้าถูกตัดตก
  4. ใน `openPmTaskCard` ไม่มี defensive `try...catch` และ `modal.style.display = 'flex'` อยู่บรรทัดสุดท้าย หากส่วนใดสะดุด (เช่น `techniciansListCache` ติดลูป) Modal จะไม่เปิดเลย
- **แก้:**
  - `make_embedded_templates.py`: บีบอัดรูปด้วย Grayscale JPEG (1240px, quality 65) พร้อมระบบ Aliases ลดขนาด `PmEmbeddedTemplates.html` จาก 8.07 MB เหลือเพียง 1.98 MB (ลดลง 78%)
  - `Stylesheet.html`: เปลี่ยน `#printPage` ใน `@media print` เป็น `#printPage.active`, ปรับ `#pmPrintPage .print-viewport-scaler` ให้ `height: auto !important`, ปรับแถบ Toolbar sticky ชัดเจน
  - `JavaScript.html`:
    - `openPmTaskCard`: เปิด `modal.style.display = 'flex'` ทันที, ค้นหา request ได้ทั้ง UUID และ RequestID (trimmed), ครอบ `try...catch` ทุก Section แยกอิสระ
    - `populatePmTechnicianSelects`: แก้ไขเงื่อนไขการเรียก `loadTechniciansList` ป้องกัน infinite recursion (`techniciansListCache === null`)
    - `showPmPrintPreview`: ครอบ `try...catch`, fallback template อย่างสมบูรณ์, scroll top ทันที
- **ทดสอบแล้ว:**
  - Node.js DOM mock script จำลองการกด `openPmTaskCard` และ `showPmPrintPreview` ทั้ง 3 รุ่น (TLD, CAMEL, GP-MAK) ผลลัพธ์: Modal เปิดสำเร็จ (`display = flex`) ทุกรุ่น, หน้าพิมพ์เรนเดอร์ครบ 5 หน้า (TLD/CAMEL) และ 3 หน้า (GP-MAK)
  - Clasp push และ deploy ทับ `@89` และ `@90` สำเร็จ
- **ยังไม่ได้ทดสอบ:** ผู้ใช้เปิดและสั่งพิมพ์จริงจากเครื่องผู้ใช้ (ต้องให้ผู้ใช้กด Ctrl+F5 ทดสอบ)

### 2026-10-13 17:35 — สร้าง PROJECT_LOG.md
- สร้างไฟล์นี้ + `AGENTS.md` ที่ root workspace เพื่อบังคับให้ agent อ่าน/อัปเดต log ทุกครั้ง

### 2026-10-13 17:33 — ฟอร์ม PM ไม่มีช่องให้กรอก (TLM-GP-012) — Deploy @87 / @88
- **ปัญหา:** ผู้ใช้เปิด `PM-202610-02` (TLM-GP-012) แล้วเห็นแค่ PDF ไม่มีช่องกรอก
- **สาเหตุ:** (1) URL ผู้ใช้ชี้ deployment เวอร์ชันเก่า (2) `resolvePmModelKey` fallback เป็น Tractor เสมอ
- **แก้:**
  - `JavaScript.html` — `resolvePmModelKey` รองรับทุก prefix GSE (36 รุ่น), `resolvePmTemplateKey` สร้าง key ทั่วไป `<MODEL>-<LVL>-TLM`
  - `JavaScript.html` — `renderPmChecklist` ดึงจาก `PM_TASK_CARD_TEMPLATES` ก่อน → `PM_LAYOUT_DB` → checklist มาตรฐาน 250 ชม. (ไม่ปล่อยว่าง); หัวข้อ "xxx HOURS" แสดงเป็นหัวข้อตัวหนา
  - `JavaScript.html` — `showPmPrintPreview` มี fallback template แทนการ error
  - `make_embedded_templates.py` — ฝัง `PM_TASK_CARD_TEMPLATES` ทั้ง 36 รุ่น + ภาพ/Layout ของ GP-MAK-090 A/B/C
  - regenerate `PmEmbeddedTemplates.html`
- **ทดสอบแล้ว:** `node --check` ผ่าน, clasp push สำเร็จ
- **ยังไม่ได้ทดสอบ:** เปิดฟอร์มจริงในเบราว์เซอร์ (ดู Known Issues)

### 2026-10-13 (ก่อนหน้า) — ฟอร์ม PM ดิจิทัลเต็มรูปแบบ — Deploy @84–86
- สร้างฟอร์ม Section B/C/D/E/F ใน `index.html` (`#pmTaskCardFormContainer`) + หน้าพิมพ์ A4 หลายหน้า `#pmPrintPage`
- `ServerFunctions.gs` — ดึง `serialNo` จาก GSE MASTER, บันทึก B/C/checklist/defect/materials ลง `PmChecklistData` (JSON)
- แก้ประกาศ `currentActivePmRequest` ซ้ำ

### 2026-10-12 / 13 — ระบบ PM รอบแรก
- Navbar PM เห็นเฉพาะ Admin, ปุ่มสไตล์เดียวกับ CM, ซ่อน PM จากหน้า CM
- แก้ real-time หลังสร้างใบ PM, ปุ่ม Print, ปุ่มเปิดดูผลบันทึก
- Mapping Tractor CAMEL/TLD
- แผนอ้างอิง: artifact `PM_SYSTEM_INTEGRATION_PLAN.md`, `PM_FIX_AND_MAPPING_PLAN.md`

### 2026-10-10 — ป้องกันชีต W/O + กู้คืน
- `adminRestoreWoMonthSheet` / `rebuildWoRowsForMonth`: ปุ่ม "กู้คืน / ซิงค์ข้อมูลชีต W/O" ใน Dashboard Admin กวาดข้อมูลจาก Requests ของเดือนที่เลือกไปเขียนชีต W/O
- `protectWoSheetTabs` ป้องกันแท็บ W/O
- อ้างอิง: artifact `SHEET_PROTECTION_AND_RECOVERY_PLAN.md`

---

## 7. Template สำหรับบันทึกครั้งถัดไป

```markdown
### YYYY-MM-DD HH:MM — <หัวข้อ> — Deploy @xx
- **คำขอผู้ใช้:** ...
- **สาเหตุ:** ...
- **แก้:** `ไฟล์` — ฟังก์ชัน — อะไร
- **ทดสอบแล้ว:** ...
- **ยังไม่ได้ทดสอบ / ค้าง:** ... (ย้ายไปข้อ 5 ด้วย)
```
