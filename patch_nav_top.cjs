const fs = require('fs');
let text = fs.readFileSync('src/components/NavMenu.tsx', 'utf-8');

const replaceScrollTop = `      if (lenis) {
        lenis.scrollTo(0);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }`;

text = text.replace(/      window\.scrollTo\(\{ top: 0, behavior: 'smooth' \}\);/g, replaceScrollTop);

fs.writeFileSync('src/components/NavMenu.tsx', text);
