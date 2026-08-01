const fs = require('fs');
const path = require('path');

const componentsDir = 'src/components';
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx'));

let changedFiles = 0;
files.forEach(file => {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  let newContent = content
    .replace(/text-chumbo\/80 dark:text-branco\/60/g, 'text-slate-700 dark:text-white/60')
    .replace(/text-chumbo\/70 dark:text-branco\/70/g, 'text-slate-600 dark:text-white/70')
    .replace(/text-chumbo\/60 dark:text-branco\/60/g, 'text-slate-500 dark:text-white/60')
    .replace(/text-chumbo dark:text-branco\/80/g, 'text-slate-800 dark:text-white/80')
    .replace(/text-chumbo dark:text-branco\/70/g, 'text-slate-800 dark:text-white/70')
    .replace(/text-chumbo dark:text-branco\/60/g, 'text-slate-700 dark:text-white/60')
    .replace(/text-chumbo dark:text-branco\/50/g, 'text-slate-600 dark:text-white/50')
    .replace(/text-chumbo dark:text-branco/g, 'text-slate-900 dark:text-white')
    .replace(/border-chumbo\/20/g, 'border-slate-800/20')
    .replace(/bg-chumbo\/10/g, 'bg-slate-800/10')
    .replace(/border-branco\/([0-9]+)/g, 'border-white/$1')
    .replace(/bg-branco\/([0-9]+)/g, 'bg-white/$1');
  
  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent);
    changedFiles++;
    console.log(`Updated ${file}`);
  }
});
console.log(`Updated ${changedFiles} files.`);
