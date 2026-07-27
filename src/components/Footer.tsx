import { Github, Linkedin, Twitter } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export function Footer() {
  const { theme } = useTheme();
  
  return (
    <footer className={`py-10 border-t ${theme === 'dark' ? 'border-branco/10 bg-chumbo/50' : 'border-black/5 bg-branco/50'} backdrop-blur-md text-sm ${theme === 'dark' ? 'text-branco/60' : 'text-black/60'} mt-20`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <p className="font-bold tracking-widest uppercase text-xs">Vetor Zero</p>
          <p>© {new Date().getFullYear()} A primeira fórmula.</p>
        </div>
        
        <div className="flex items-center gap-6">
          <a href="#" className={`p-2 rounded-full transition-colors ${theme === 'dark' ? 'hover:bg-branco/10 hover:text-branco' : 'hover:bg-black/5 hover:text-black'}`} aria-label="LinkedIn">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className={`p-2 rounded-full transition-colors ${theme === 'dark' ? 'hover:bg-branco/10 hover:text-branco' : 'hover:bg-black/5 hover:text-black'}`} aria-label="GitHub">
            <Github className="w-5 h-5" />
          </a>
          <a href="#" className={`p-2 rounded-full transition-colors ${theme === 'dark' ? 'hover:bg-branco/10 hover:text-branco' : 'hover:bg-black/5 hover:text-black'}`} aria-label="Twitter">
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
