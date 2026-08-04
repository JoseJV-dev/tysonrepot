const fs = require('fs');
let text = fs.readFileSync('src/components/NavMenu.tsx', 'utf-8');

text = text.replace(/subItems: \[\s*\{\s*label: 'Kina Service', href: '#kina' \},/g, "subItems: [\n      { label: 'ATL EM CASA', href: '#atl' },\n      { label: 'Kina Service', href: '#kina' },");

fs.writeFileSync('src/components/NavMenu.tsx', text);
