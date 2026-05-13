# 📝 แบบทดสอบคณิตศาสตร์ ป.1-ป.6
### ครูแซม คณิตตรงจุด ติด Turbo

ระบบทดสอบวิเคราะห์พื้นฐานคณิตศาสตร์สำหรับนักเรียนประถมศึกษา ตาม **Spiral Skills Framework**

---

## 🎯 คุณสมบัติ

- ✅ ข้อสอบครบทุกระดับชั้น (ป.1 - ป.6)
- ✅ ครอบคลุมทักษะตามหลักสูตรแกนกลาง พ.ศ. 2560
- ✅ รูปภาพประกอบเฉพาะเรขาคณิตและแผนภูมิ
- ✅ ส่งผลคะแนนอัตโนมัติไปยัง Google Sheets
- ✅ วิเคราะห์จุดแข็ง-จุดอ่อนของนักเรียน
- ✅ ใช้งานได้ทันทีผ่าน GitHub Pages

---

## 📊 โครงสร้างข้อสอบ

| ระดับชั้น | จำนวนข้อ | ทักษะหลัก | ไฟล์ |
|----------|----------|-----------|------|
| **ป.1** | 85 ข้อ | การนับ, บวกลบ, รูปเรขาคณิต, การวัด | [p1_math_test_github.html](p1_math_test_github.html) |
| **ป.2** | 85 ข้อ | การคูณ, การหาร, เวลา, แผนภูมิรูปภาพ | [p2_math_test_github.html](p2_math_test_github.html) |
| **ป.3** | 85 ข้อ | เศษส่วน, การหารยาว, แกนสมมาตร | [p3_math_test_github.html](p3_math_test_github.html) |
| **ป.4** | 85 ข้อ | ทศนิยม, พื้นที่, มุม, แผนภูมิแท่ง | [p4_math_test_github.html](p4_math_test_github.html) |
| **ป.5** | 85 ข้อ | ร้อยละ, ปริมาตร, กราฟเส้น | [p5_math_test_github.html](p5_math_test_github.html) |
| **ป.6** | 85 ข้อ | อัตราส่วน, ห.ร.ม., ค.ร.น., พื้นที่วงกลม | [p6_math_test_github.html](p6_math_test_github.html) |

---

## 🚀 วิธีใช้งาน

### สำหรับนักเรียน/ผู้ปกครอง

1. **เข้าสู่ระบบ**: เปิดลิงก์ตามระดับชั้นที่ต้องการ
2. **กรอกข้อมูล**: ชื่อ-นามสกุล, โรงเรียน, เบอร์โทร
3. **ทำข้อสอบ**: ใช้เวลาประมาณ 40-50 นาที
4. **ส่งข้อสอบ**: ระบบจะบันทึกผลอัตโนมัติ

### สำหรับครู

เข้าดูผลคะแนนใน Google Sheets ที่ตั้งค่าไว้

---

## ⚙️ การติดตั้ง (สำหรับครู)

### ขั้นตอนที่ 1: Deploy ไป GitHub Pages

```bash
# 1. Clone repository นี้
git clone https://github.com/YOUR_USERNAME/math-test.git
cd math-test

# 2. Push ไป GitHub
git add .
git commit -m "Initial commit"
git push origin main

# 3. เปิด Settings → Pages
# เลือก Source: main branch
# บันทึก

# 4. เข้าใช้งานที่
# https://YOUR_USERNAME.github.io/math-test/p1_math_test_github.html
```

### ขั้นตอนที่ 2: เชื่อมต่อ Google Sheets

#### 2.1 สร้าง Google Sheet

1. ไปที่ [Google Sheets](https://sheets.google.com)
2. สร้าง Spreadsheet ใหม่
3. ตั้งชื่อ เช่น "ผลคะแนนคณิตศาสตร์"

#### 2.2 ติดตั้ง Apps Script

1. ใน Google Sheet → **Extensions** → **Apps Script**
2. ลบโค้ดเดิมออก
3. คัดลอกโค้ดจากไฟล์ [`google-apps-script.js`](google-apps-script.js)
4. วางใน Apps Script Editor
5. บันทึก (Ctrl+S)

#### 2.3 Deploy Web App

1. ใน Apps Script → **Deploy** → **New deployment**
2. เลือก **Web app**
3. ตั้งค่า:
   - **Execute as**: Me (YOUR_EMAIL)
   - **Who has access**: Anyone
4. คลิก **Deploy**
5. **คัดลอก Web app URL** (จะมีหน้าตาคล้าย `https://script.google.com/macros/s/...`)

#### 2.4 ใส่ URL ในไฟล์ HTML

1. เปิดไฟล์ HTML ทั้ง 6 ไฟล์
2. ค้นหา `YOUR_GOOGLE_APPS_SCRIPT_URL`
3. แทนที่ด้วย URL ที่คัดลอกมา
4. บันทึกและ push ไป GitHub

```javascript
// ก่อนแก้ไข
const GOOGLE_SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_URL";

// หลังแก้ไข
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz.../exec";
```

---

## 📈 ตัวอย่าง Google Sheets Output

| วันที่-เวลา | ชื่อนักเรียน | โรงเรียน | ชั้น | เบอร์โทร | คะแนนถูก | ข้อทั้งหมด | เปอร์เซ็นต์ | เชี่ยวชาญ | ต้องเสริม | วิกฤต |
|-------------|--------------|----------|------|----------|----------|------------|------------|----------|-----------|--------|
| 15/1/2567 10:30 | เด็กหญิงสมใจ | รร.วัดหนองแขม | ป.3 | 0812345678 | 72 | 85 | 85% | 12 | 3 | 2 |

---

## 🔒 ความปลอดภัยข้อมูล

- ✅ ข้อมูลส่งตรงไป Google Sheets ของคุณเท่านั้น
- ✅ ไม่มีการเก็บข้อมูลในเซิร์ฟเวอร์ภายนอก
- ✅ คุณควบคุมข้อมูลได้ 100%
- ✅ สามารถลบข้อมูลได้ตลอดเวลา

---

## 🛠️ เทคโนโลยีที่ใช้

- HTML5 + CSS3 + JavaScript (Vanilla JS)
- Google Apps Script (Backend)
- GitHub Pages (Hosting)
- SVG (รูปภาพเรขาคณิต/แผนภูมิ)

---

## 📞 ติดต่อ

**ครูแซม คณิตตรงจุด ติด Turbo**

- 📱 Line: @krusamm
- 📧 Email: krusamm@gmail.com
- 🌐 Website: [TUTOR บ้านครู](https://www.facebook.com/tutorbankhru)

---

## 📝 License

MIT License - ใช้งานได้อย่างอิสระ

---

## 🎓 Spiral Skills Framework

ข้อสอบออกแบบตาม **Spiral Skills Framework** โดยแยกทักษะเป็น Level ต่างๆ:

- **Level 1**: พื้นฐาน (ป.1-ป.2)
- **Level 2**: เข้มข้นขึ้น (ป.2-ป.3)
- **Level 3**: ประยุกต์ (ป.3-ป.4)
- **Level 4+**: ขั้นสูง (ป.4-ป.6)

ตัวอย่าง: **เศษส่วน** มี 8 levels
- Level 1 (ป.3): อ่าน/เขียนเศษส่วน
- Level 3 (ป.3): บวก/ลบเศษส่วนตัวส่วนเดียวกัน
- Level 5 (ป.4): บวก/ลบเศษส่วนตัวส่วนต่างกัน
- Level 8 (ป.6): การดำเนินการใช้ ค.ร.น.

---

## ⭐ หากชอบโปรเจคนี้

กด Star ⭐ ให้กับ Repository นี้

และแชร์ให้เพื่อนครูคนอื่นๆ ได้ใช้งานด้วย!

---

**สร้างโดย ครูศราวุธ พิมศร (ครูแซม)**  
โรงเรียนมัธยมวัดหนองแขม  
Bangkok Secondary Education Service Area Office District 1
