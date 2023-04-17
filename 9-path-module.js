const path = require('path')
// console.log(path.sep)

const filePath = path.join('/content','/sub_folder','text.txt')
console.log(filePath)

const base = path.basename(filePath)
// console.log(base)

// const absolute = path.resolve(__dirname,'content','sub_folder','text.txt');
const absolute = path.resolve(__dirname);
// console.log(absolute)


// path.join	path.basename	path.resolve
// รวมต่อ path ของไฟล์หรือโฟลเดอร์	ดึงชื่อไฟล์หรือโฟลเดอร์ออกมา	แปลงเป็น absolute path
// ใช้ร่วมกับ __dirname เพื่อรวม path ที่เป็น relative path เข้าด้วยกัน	ระบุได้ว่าต้องการส่วนของไฟล์หรือโฟลเดอร์	สามารถใช้ได้กับ relative path และ return absolute path ออกมา