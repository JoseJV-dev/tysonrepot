const fs = require('fs');
let text = fs.readFileSync('src/components/NavMenu.tsx', 'utf-8');
text = text.replace(/https:\/\/wa\.me\/244900000000/g, 'https://wa.me/244943803380');
fs.writeFileSync('src/components/NavMenu.tsx', text);
