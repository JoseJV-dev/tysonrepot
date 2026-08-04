const fs = require('fs');
let text = fs.readFileSync('src/components/NavMenu.tsx', 'utf-8');

text = text.replace(/if \(lenis\) \{\s*lenis\.scrollTo\(0\);\s*\} else \{\s*window\.scrollTo\(\{ top: 0, behavior: 'smooth' \}\);\s*\}/, "window.scrollTo({ top: 0, behavior: 'smooth' });");
text = text.replace(/if \(lenis\) \{\s*lenis\.scrollTo\(element as HTMLElement\);\s*\} else \{\s*element\.scrollIntoView\(\{ behavior: 'smooth', block: 'start' \}\);\s*\}/, "element.scrollIntoView({ behavior: 'smooth', block: 'start' });");

fs.writeFileSync('src/components/NavMenu.tsx', text);

let intro = fs.readFileSync('src/components/IntroScreen.tsx', 'utf-8');
intro = intro.replace(/const lenis = \(window as any\)\.lenis;\s*if \(lenis\) \{\s*lenis\.scrollTo\(el\);\s*\} else \{\s*el\.scrollIntoView\(\{ behavior: 'smooth', block: 'start' \}\);\s*\}/, "el.scrollIntoView({ behavior: 'smooth', block: 'start' });");
fs.writeFileSync('src/components/IntroScreen.tsx', intro);
