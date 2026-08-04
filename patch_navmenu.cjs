const fs = require('fs');
const path = require('path');

const filePath = path.join('src/components', 'NavMenu.tsx');
let content = fs.readFileSync(filePath, 'utf-8');

content = content.replace(
  /useEffect\(\(\) => \{\s*if \(isOpen && !isRobotOpen\) \{\s*document.body.style.overflow = 'hidden';\s*\} else \{\s*document.body.style.overflow = 'unset';\s*\}\s*return \(\) => \{\s*document.body.style.overflow = 'unset';\s*\};\s*\}, \[isOpen, isRobotOpen\]\);/g,
  `useEffect(() => {
    if (isOpen && !isRobotOpen) {
      document.body.style.overflow = 'hidden';
      lenis?.stop();
    } else {
      document.body.style.overflow = 'unset';
      lenis?.start();
    }
    return () => {
      document.body.style.overflow = 'unset';
      lenis?.start();
    };
  }, [isOpen, isRobotOpen, lenis]);`
);

content = content.replace(
  /className={\`absolute top-full left-0 right-0 p-6 flex flex-col gap-4 shadow-2xl z-50 border-b bg-white dark:bg-chumbo border-slate-200 dark:border-white\/10 max-h-\[80vh\] overflow-y-auto\`}/g,
  `className={\`absolute top-full left-0 right-0 p-6 flex flex-col gap-4 shadow-2xl z-50 border-b bg-white dark:bg-[#1A1A1D] border-slate-200 dark:border-white/10 max-h-[80vh] overflow-y-auto\`}
            data-lenis-prevent="true"`
);

fs.writeFileSync(filePath, content);
console.log('NavMenu patched');
