const fs = require('fs');
const content = fs.readFileSync('src/data/menuData.ts', 'utf8');
const regex = /\/\/\s*(\d+)\.\s*([^\n]+)\n\s*\{\s*id:\s*"([^"]+)",\s*nameEn:\s*"([^"]+)"/g;
let m;
while ((m = regex.exec(content)) !== null) {
  console.log(`${m[1]}. id: "${m[3]}" | nameEn: "${m[4]}"`);
}
