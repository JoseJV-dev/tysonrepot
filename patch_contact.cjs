const fs = require('fs');
let text = fs.readFileSync('src/components/Contact.tsx', 'utf-8');
text = text.replace(/className="mt-32 pt-20 border-t border-slate-200 dark:border-white\/10 pb-20" id="contact"/, 'className="mt-10 pt-10 pb-20" id="contact"');
fs.writeFileSync('src/components/Contact.tsx', text);
