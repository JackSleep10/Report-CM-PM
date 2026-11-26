# Project Rules — CorrectiveRequestApp (CM + PM)

1. **ก่อนเริ่มงานทุกครั้ง** ให้อ่าน `CorrectiveRequestApp/PROJECT_LOG.md` ให้ครบ โดยเฉพาะส่วน Business Rules, Lessons Learned และ Known Issues
2. **หลังแก้ไข/ปรับเปลี่ยนโค้ดทุกครั้ง** ต้องอัปเดต `CorrectiveRequestApp/PROJECT_LOG.md`:
   - เพิ่มรายการใน **Change Log** (ใหม่สุดอยู่บน) ตาม template ในไฟล์
   - อัปเดต **Known Issues** (เพิ่มสิ่งที่ค้าง / ลบสิ่งที่แก้เสร็จและทดสอบแล้ว)
   - ถ้าเกิดความผิดพลาดใหม่ ให้เพิ่มใน **Lessons Learned**
   - อัปเดตเลขเวอร์ชัน Deployment ในตาราง 1.1
3. Deploy ต้องใช้ `clasp deploy -i <deploymentId>` ทับ deployment เดิมทั้ง 2 ตัวเสมอ
4. ห้ามแก้ `PmEmbeddedTemplates.html` ด้วยมือ — แก้ที่ `make_embedded_templates.py` / ไฟล์ JSON แล้ว generate ใหม่
5. ห้ามบอกผู้ใช้ว่า "แก้เสร็จแล้ว" ถ้ายังไม่ได้ทดสอบ — ให้แยกบอกชัดว่าอะไรทดสอบแล้ว อะไรยังไม่ได้ทดสอบ
6. หลังแก้โค้ดเสร็จ ให้สรุปรายชื่อไฟล์ที่แก้ไขทุกครั้ง
7. **หลังแก้ไข/ปรับเปลี่ยนโค้ดหรือไฟล์ทุกครั้ง** ต้องทำ `git add`, `git commit` และ `git push` ขึ้น GitHub (`https://github.com/JackSleep10/Report-CM-PM`) (ควบคู่กับ `clasp push` และ `clasp deploy -i` ทับทั้ง 2 deployment) ทุกครั้ง เพื่อให้ Codebase เหมือนกันทั้งหมด
8. **งานเปิด/ทดสอบ/ตรวจสอบหน้าเว็บจริง** ให้ใช้ skill `webcmd-browser` (`C:\Users\acklo\.gemini\config\skills\webcmd-browser\SKILL.md`) เป็นหลัก โดยเรียกผ่าน `webcmd.cmd` (ไม่เรียก `webcmd` ตรงเพราะติด PowerShell ExecutionPolicy) และรัน `webcmd.cmd site memory context <url> --task-id <id> -f json` ก่อนเริ่มงานเบราว์เซอร์ทุกครั้ง เพื่อใช้ความจำโครงสร้างหน้าเว็บเดิมแทนการสแกนใหม่ทุกรอบ
