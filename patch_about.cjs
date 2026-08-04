const fs = require('fs');
let text = fs.readFileSync('src/components/About.tsx', 'utf-8');
text = text.replace(/className="mt-32 pt-20 border-t border-slate-200 dark:border-white\/10" id="sobre"/, 'className="pt-32 pb-10" id="sobre"');
fs.writeFileSync('src/components/About.tsx', text);
