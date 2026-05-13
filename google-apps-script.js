/**
 * Google Apps Script สำหรับรับข้อมูลจากแบบทดสอบคณิตศาสตร์
 * 
 * วิธีการติดตั้ง:
 * 1. เปิด Google Sheets ที่ต้องการเก็บข้อมูล
 * 2. ไปที่ Extensions → Apps Script
 * 3. ลบโค้ดเดิมออก แล้ววางโค้ดนี้แทน
 * 4. บันทึก (Ctrl+S)
 * 5. คลิก Deploy → New deployment
 * 6. เลือก "Web app"
 * 7. Execute as: Me
 * 8. Who has access: Anyone
 * 9. คลิก Deploy
 * 10. คัดลอก Web app URL นำไปใส่ในไฟล์ HTML
 */

function doPost(e) {
  try {
    // รับข้อมูลจาก POST request
    const data = JSON.parse(e.postData.contents);
    
    // เปิด Spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // ถ้ายังไม่มี header ให้สร้าง
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'วันที่-เวลา',
        'ชื่อนักเรียน',
        'โรงเรียน',
        'ชั้น',
        'เบอร์โทรผู้ปกครอง',
        'วันที่ทำข้อสอบ',
        'คะแนนถูก',
        'จำนวนข้อทั้งหมด',
        'เปอร์เซ็นต์',
        'ทักษะที่เชี่ยวชาญ (≥80%)',
        'ทักษะที่ต้องเสริม (60-79%)',
        'ทักษะวิกฤต (<60%)',
        'รายละเอียดผลคะแนนแต่ละทักษะ (JSON)'
      ]);
      
      // จัดรูปแบบ header
      const headerRange = sheet.getRange(1, 1, 1, 13);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#667eea');
      headerRange.setFontColor('#ffffff');
    }
    
    // เตรียมข้อมูลที่จะบันทึก
    const timestamp = new Date().toLocaleString('th-TH', { timeZone: 'Asia/Bangkok' });
    
    const row = [
      timestamp,
      data.studentName || '',
      data.schoolName || '',
      data.gradeLevel || '',
      data.parentPhone || '',
      data.testDate || '',
      data.summary.totalCorrect || 0,
      data.summary.totalQuestions || 0,
      data.summary.percent + '%' || '0%',
      data.summary.mastered || 0,
      data.summary.weak || 0,
      data.summary.critical || 0,
      JSON.stringify(data.results, null, 2)
    ];
    
    // เพิ่มข้อมูลลง Sheet
    sheet.appendRow(row);
    
    // ส่งผลลัพธ์กลับ
    return ContentService
      .createTextOutput(JSON.stringify({ 
        status: 'success', 
        message: 'บันทึกข้อมูลสำเร็จ',
        timestamp: timestamp
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // ส่งข้อผิดพลาดกลับ
    return ContentService
      .createTextOutput(JSON.stringify({ 
        status: 'error', 
        message: error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ฟังก์ชันทดสอบ (สำหรับ Debug)
function testDoPost() {
  const testData = {
    postData: {
      contents: JSON.stringify({
        timestamp: new Date().toISOString(),
        studentName: "ทดสอบ ระบบ",
        schoolName: "โรงเรียนทดสอบ",
        gradeLevel: "ป.1",
        parentPhone: "0812345678",
        testDate: "2024-01-15",
        answers: {},
        results: {
          "counting-1": { correct: 4, total: 5 }
        },
        summary: {
          totalCorrect: 4,
          totalQuestions: 5,
          percent: 80,
          mastered: 1,
          weak: 0,
          critical: 0
        }
      })
    }
  };
  
  const result = doPost(testData);
  Logger.log(result.getContent());
}
