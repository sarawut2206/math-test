# 🚀 คู่มือติดตั้งด่วน (Quick Start Guide)

## สำหรับครูที่ต้องการใช้งานทันที

### 📦 ไฟล์ที่มีในโปรเจคนี้

```
math-test/
├── p1_math_test_github.html    (ข้อสอบ ป.1)
├── p2_math_test_github.html    (ข้อสอบ ป.2)
├── p3_math_test_github.html    (ข้อสอบ ป.3)
├── p4_math_test_github.html    (ข้อสอบ ป.4)
├── p5_math_test_github.html    (ข้อสอบ ป.5)
├── p6_math_test_github.html    (ข้อสอบ ป.6)
├── google-apps-script.js       (โค้ดสำหรับ Google Sheets)
├── README.md                    (คู่มือหลัก)
└── QUICK_START.md              (ไฟล์นี้)
```

---

## ⚡ 3 ขั้นตอนเริ่มใช้งาน

### ขั้นที่ 1: Upload ไป GitHub (5 นาที)

1. ไปที่ https://github.com/new
2. ตั้งชื่อ repository เช่น `math-test`
3. เลือก **Public**
4. คลิก **Create repository**
5. Upload ไฟล์ทั้งหมดที่ดาวน์โหลดมา
6. ไปที่ **Settings** → **Pages**
7. Source: เลือก `main` branch
8. คลิก **Save**
9. รอ 1-2 นาที แล้วได้ URL: `https://YOUR_USERNAME.github.io/math-test/`

### ขั้นที่ 2: ตั้งค่า Google Sheets (3 นาที)

1. เปิด https://sheets.google.com → สร้าง Spreadsheet ใหม่
2. ตั้งชื่อ: `ผลคะแนนคณิตศาสตร์`
3. **Extensions** → **Apps Script**
4. ลบโค้ดเดิม → วางโค้ดจาก `google-apps-script.js`
5. **บันทึก** (Ctrl+S)
6. **Deploy** → **New deployment**
7. Type: **Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
8. **Deploy** → **คัดลอก URL**

### ขั้นที่ 3: เชื่อมต่อ (2 นาที)

1. เปิดไฟล์ HTML ทั้ง 6 ไฟล์ใน GitHub
2. คลิก **แก้ไข** (ปุ่มดินสอ)
3. ค้นหา `YOUR_GOOGLE_APPS_SCRIPT_URL`
4. แทนที่ด้วย URL ที่คัดลอกมาจากขั้นที่ 2
5. **Commit changes**

---

## ✅ เสร็จแล้ว! ทดสอบระบบ

1. เปิด: `https://YOUR_USERNAME.github.io/math-test/p1_math_test_github.html`
2. กรอกข้อมูลทดสอบ
3. ทำข้อสอบ 5-10 ข้อ
4. กดส่ง
5. เช็คใน Google Sheets → ควรเห็นข้อมูลแถวใหม่

---

## 🎯 ส่งลิงก์ให้นักเรียน

คัดลอกลิงก์นี้ส่งให้นักเรียน/ผู้ปกครอง:

```
ป.1: https://YOUR_USERNAME.github.io/math-test/p1_math_test_github.html
ป.2: https://YOUR_USERNAME.github.io/math-test/p2_math_test_github.html
ป.3: https://YOUR_USERNAME.github.io/math-test/p3_math_test_github.html
ป.4: https://YOUR_USERNAME.github.io/math-test/p4_math_test_github.html
ป.5: https://YOUR_USERNAME.github.io/math-test/p5_math_test_github.html
ป.6: https://YOUR_USERNAME.github.io/math-test/p6_math_test_github.html
```

**แทนที่ `YOUR_USERNAME` ด้วยชื่อ GitHub ของคุณ**

---

## 🔧 แก้ปัญหาเบื้องต้น

### ปัญหา: หน้าเว็บไม่โหลด
- รอ 2-3 นาที หลัง Deploy GitHub Pages
- ตรวจสอบว่าเลือก branch ถูกต้องใน Settings → Pages

### ปัญหา: ส่งข้อสอบแล้วไม่มีข้อมูลใน Sheets
- ตรวจสอบว่าแทนที่ `YOUR_GOOGLE_APPS_SCRIPT_URL` แล้ว
- ตรวจสอบว่า Deploy Apps Script ด้วย "Who has access: **Anyone**"
- กด F12 → Console → ดู error message

### ปัญหา: URL ยาวเกินไป
- ใช้ Bitly หรือ Short URL เพื่อสร้างลิงก์สั้น
- หรือสร้าง QR Code จากลิงก์

---

## 📱 สร้าง QR Code (Optional)

1. ไปที่ https://www.qr-code-generator.com/
2. วาง URL ของแต่ละระดับชั้น
3. ดาวน์โหลด QR Code
4. พิมพ์แจกให้นักเรียน

---

## 💡 Tips

- **ตั้งชื่อ Sheet Tab** ตามระดับชั้น (ป.1, ป.2, ...) เพื่อแยกข้อมูล
- **ใช้ Google Forms Notifications** เพื่อรับแจ้งเตือนเมื่อมีคนส่งข้อสอบ
- **Export ข้อมูล** เป็น CSV เพื่อวิเคราะห์ใน Excel
- **แชร์ Google Sheet** ให้เพื่อนครูดูผลคะแนนร่วมกัน

---

## 📞 ติดปัญหา?

ติดต่อ: **ครูแซม**
- Line: @krusamm
- Email: krusamm@gmail.com

---

**สำเร็จ! คุณพร้อมใช้งานแล้ว 🎉**
