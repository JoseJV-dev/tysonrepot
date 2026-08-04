const fs = require('fs');
let text = fs.readFileSync('src/components/Footer.tsx', 'utf-8');

text = text.replace(/import { Github, Linkedin, Twitter, Mail, Infinity } from 'lucide-react';/, "import { Facebook, Instagram, Youtube, Mail, Infinity } from 'lucide-react';");

const iconsHTML = `
              <a href="https://www.facebook.com/vetorzeroao" target="_blank" rel="noopener noreferrer" className={\`p-2.5 rounded-full transition-all duration-300 \${theme === 'dark' ? 'bg-white/5 hover:bg-neon hover:text-chumbo text-branco' : 'bg-black/5 hover:bg-azul hover:text-white text-slate-700'}\`} aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/vetorzeroao" target="_blank" rel="noopener noreferrer" className={\`p-2.5 rounded-full transition-all duration-300 \${theme === 'dark' ? 'bg-white/5 hover:bg-neon hover:text-chumbo text-branco' : 'bg-black/5 hover:bg-azul hover:text-white text-slate-700'}\`} aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://youtube.com/@vetorzeroao?si=wpBgduE7hiBdCV9E" target="_blank" rel="noopener noreferrer" className={\`p-2.5 rounded-full transition-all duration-300 \${theme === 'dark' ? 'bg-white/5 hover:bg-neon hover:text-chumbo text-branco' : 'bg-black/5 hover:bg-azul hover:text-white text-slate-700'}\`} aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
`;

// Replace the old icons
const oldIconsRegex = /<a href="#" className=\{`p-2\.5 rounded-full transition-all duration-300 \$\{theme === 'dark' \? 'bg-white\/5 hover:bg-neon hover:text-chumbo text-branco' : 'bg-black\/5 hover:bg-azul hover:text-white text-slate-700'\}`\} aria-label="LinkedIn">[\s\S]*?<\/a>\s*<a href="#" className=\{`p-2\.5 rounded-full transition-all duration-300 \$\{theme === 'dark' \? 'bg-white\/5 hover:bg-neon hover:text-chumbo text-branco' : 'bg-black\/5 hover:bg-azul hover:text-white text-slate-700'\}`\} aria-label="Twitter">[\s\S]*?<\/a>/m;

text = text.replace(/<div className="flex items-center gap-4 mt-2">[\s\S]*?<\/div>/, `<div className="flex items-center gap-4 mt-2">${iconsHTML}</div>`);

fs.writeFileSync('src/components/Footer.tsx', text);
