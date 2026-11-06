# 📋 ระบบใบแจ้งซ่อมออนไลน์ (Corrective Request Web App)
## Thai Lion Air

---

## 📌 สิ่งที่ต้องเตรียม
- Google Account (Gmail)
- เข้าถึง Google Drive และ Google Sheets

---

## 🚀 วิธีติดตั้ง (Step-by-Step)

### ขั้นตอนที่ 1: สร้าง Google Sheet

1. เปิด [Google Sheets](https://sheets.google.com)
2. คลิก **"+ Blank"** สร้าง Spreadsheet ใหม่
3. ตั้งชื่อว่า: `ใบแจ้งซ่อม_Database`
4. **คัดลอก Spreadsheet ID** จาก URL:
   ```
   https://docs.google.com/spreadsheets/d/XXXXXXXXXXXXXXXXX/edit
                                          ^^^^^^^^^^^^^^^^^ นี่คือ ID
   ```
5. เก็บ ID นี้ไว้ จะใช้ในขั้นตอนถัดไป

---

### ขั้นตอนที่ 2: สร้าง Google Apps Script Project

1. เปิด [Google Apps Script](https://script.google.com)
2. คลิก **"New Project"**
3. ตั้งชื่อ Project ว่า: `CorrectiveRequestApp`

---

### ขั้นตอนที่ 3: สร้างไฟล์ใน Apps Script

ลบไฟล์ `Code.gs` เดิมออก แล้วสร้างไฟล์ใหม่ทั้งหมดดังนี้:

#### 📄 ไฟล์ที่ต้องสร้าง:

| ลำดับ | ชื่อไฟล์ | ประเภท | คำอธิบาย |
|-------|----------|--------|----------|
| 1 | `Code` | Script (.gs) | จุดเริ่มต้น Web App |
| 2 | `ServerFunctions` | Script (.gs) | ฟังก์ชัน CRUD |
| 3 | `index` | HTML (.html) | หน้าเว็บหลัก |
| 4 | `Stylesheet` | HTML (.html) | CSS Styling |
| 5 | `JavaScript` | HTML (.html) | Client-side Logic |

#### วิธีสร้างไฟล์:
- **ไฟล์ .gs**: คลิก `+` → `Script` → ตั้งชื่อ → วางโค้ด
- **ไฟล์ .html**: คลิก `+` → `HTML` → ตั้งชื่อ → วางโค้ด

> ⚠️ **สำคัญ**: ชื่อไฟล์ต้องตรงกับที่ระบุ (ไม่ต้องใส่นามสกุล เพราะ Apps Script ใส่ให้เอง)

---

### ขั้นตอนที่ 4: ใส่ Spreadsheet ID

1. เปิดไฟล์ `Code.gs`
2. หาบรรทัด:
   ```javascript
   const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID_HERE';
   ```
3. เปลี่ยนเป็น Spreadsheet ID ที่คัดลอกมาจากขั้นตอนที่ 1:
   ```javascript
   const SPREADSHEET_ID = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
   ```

---

### ขั้นตอนที่ 5: รันฟังก์ชัน Setup (ครั้งเดียว)

1. ในไฟล์ `Code.gs` เลือกฟังก์ชัน `setupSpreadsheet` จาก dropdown ด้านบน
2. คลิกปุ่ม **▶ Run**
3. ระบบจะขอ Authorization → คลิก **"Review Permissions"** → เลือก Google Account → **"Allow"**
4. ระบบจะสร้าง Headers และข้อมูลตัวอย่างใน Google Sheet อัตโนมัติ

---

### ขั้นตอนที่ 6: Deploy เป็น Web App

1. คลิก **"Deploy"** → **"New deployment"**
2. คลิกไอคอนเฟือง ⚙️ → เลือก **"Web app"**
3. ตั้งค่า:
   - **Description**: `ระบบใบแจ้งซ่อม v1`
   - **Execute as**: `Me` (ตัวเอง)
   - **Who has access**: `Anyone` (ทุกคน)
4. คลิก **"Deploy"**
5. คัดลอก **Web App URL** ที่ได้ → นี่คือ URL สำหรับเข้าใช้ระบบ!

---

### ขั้นตอนที่ 7: ทดสอบ

1. เปิด Web App URL ใน Browser
2. ทดสอบ Login ด้วยรหัสพนักงานตัวอย่าง:
   - **Admin**: `ADMIN001`
   - **User**: `EMP001` หรือ `EMP002`
3. ทดสอบสร้างใบแจ้งซ่อมใหม่
4. ทดสอบแก้ไข / ลบ / Print

---

## 👤 การเพิ่มผู้ใช้ใหม่

เปิด Google Sheet → sheet **"Users"** → เพิ่มแถวใหม่:

| EmployeeID | FullName | Role | Department | Tel |
|------------|----------|------|------------|-----|
| EMP003 | ชื่อ นามสกุล | user | แผนก | 02-xxx-xxxx |

- **Role**: ใส่ `user` สำหรับผู้ใช้ทั่วไป หรือ `admin` สำหรับผู้ดูแลระบบ

---

## 🔄 การอัพเดตระบบ

เมื่อแก้ไขโค้ดใน Apps Script แล้ว ต้อง Deploy ใหม่:
1. คลิก **"Deploy"** → **"Manage deployments"**
2. คลิกไอคอนแก้ไข ✏️
3. เปลี่ยน Version เป็น **"New version"**
4. คลิก **"Deploy"**

---

## ❓ การแก้ไขปัญหาที่พบบ่อย

| ปัญหา | วิธีแก้ |
|-------|--------|
| "ไม่พบรหัสพนักงาน" | ตรวจสอบว่ารหัสอยู่ใน sheet "Users" หรือไม่ |
| หน้าเว็บขาว/ไม่แสดงผล | ตรวจสอบว่าชื่อไฟล์ถูกต้อง โดยเฉพาะ `index`, `Stylesheet`, `JavaScript` |
| ข้อมูลไม่บันทึก | ตรวจสอบ Spreadsheet ID ว่าถูกต้อง |
| "Authorization required" | รันฟังก์ชันใหม่แล้วอนุญาตสิทธิ์ |

---

## 📁 โครงสร้างไฟล์

```
CorrectiveRequestApp/
├── Code.gs              ← จุดเริ่มต้น + Setup
├── ServerFunctions.gs   ← ฟังก์ชัน CRUD (login, create, update, delete)
├── index.html           ← หน้าเว็บหลัก (SPA)
├── Stylesheet.html      ← CSS Styling
├── JavaScript.html      ← Client-side Logic
└── README.md            ← คู่มือนี้
```
