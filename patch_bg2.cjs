const fs = require('fs');
let text = fs.readFileSync('src/components/BackgroundElements.tsx', 'utf-8');

text = text.replace(/<svg className={`absolute inset-0 w-full h-full pointer-events-none/g, '<svg className={`hidden md:block absolute inset-0 w-full h-full pointer-events-none');

fs.writeFileSync('src/components/BackgroundElements.tsx', text);
