const fs = require('fs');
let text = fs.readFileSync('src/components/BackgroundElements.tsx', 'utf-8');

text = text.replace(/blur-\[120px\]/g, 'blur-3xl md:blur-[120px]');

fs.writeFileSync('src/components/BackgroundElements.tsx', text);
