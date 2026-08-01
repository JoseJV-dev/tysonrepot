import { Github, Linkedin, Twitter, Mail, Infinity } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { motion } from 'motion/react';

export function Footer() {
  const { theme } = useTheme();
  
  return (
    <footer className={`relative overflow-hidden pt-24 pb-12 border-t ${theme === 'dark' ? 'border-white/10 bg-[#060a10]' : 'border-black/5 bg-slate-100'} mt-20`}>
      
      {/* Background Math Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center opacity-20">
         <div className={`text-[20vw] font-black tracking-tighter ${theme === 'dark' ? 'text-white/5' : 'text-black/5'} absolute -bottom-16 whitespace-nowrap select-none`}>
            ∑ ∫ ∏ √ ∞
         </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <img 
                src="/logo.png" 
                alt="Vetor Zero" 
                className="h-12 object-contain bg-white/90 p-1.5 rounded-lg"
              />
            </div>
            <p className={`max-w-sm text-sm leading-relaxed ${theme === 'dark' ? 'text-branco/70' : 'text-slate-600'}`}>
              Desvendando a complexidade do universo através da lógica, números e tecnologia. Nossa missão é tornar a ciência acessível, fascinante e aplicável ao futuro.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4">
            <h4 className={`text-xs font-bold tracking-widest uppercase mb-2 ${theme === 'dark' ? 'text-branco' : 'text-slate-900'}`}>Explorar</h4>
            {['Início', 'Sobre a Série', 'Cartão Robô', 'Projetos'].map(item => (
              <a key={item} href={`#${item === 'Início' ? 'home' : item.toLowerCase().replace(' ','-')}`} className={`text-sm font-medium transition-colors ${theme === 'dark' ? 'text-branco/60 hover:text-neon' : 'text-slate-600 hover:text-azul'} w-fit`}>
                {item}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className={`text-xs font-bold tracking-widest uppercase mb-2 ${theme === 'dark' ? 'text-branco' : 'text-slate-900'}`}>Contato</h4>
            
            <a href="mailto:tysonferry3@gmail.com" className={`flex items-center gap-2 text-sm font-medium transition-colors ${theme === 'dark' ? 'text-branco/60 hover:text-neon' : 'text-slate-600 hover:text-azul'}`}>
               <Mail size={16} />
               tysonferry3@gmail.com
            </a>
            
            <div className="flex items-center gap-4 mt-2">
              <a href="#" className={`p-2.5 rounded-full transition-all duration-300 ${theme === 'dark' ? 'bg-white/5 hover:bg-neon hover:text-chumbo text-branco' : 'bg-black/5 hover:bg-azul hover:text-white text-slate-700'}`} aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className={`p-2.5 rounded-full transition-all duration-300 ${theme === 'dark' ? 'bg-white/5 hover:bg-neon hover:text-chumbo text-branco' : 'bg-black/5 hover:bg-azul hover:text-white text-slate-700'}`} aria-label="GitHub">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className={`p-2.5 rounded-full transition-all duration-300 ${theme === 'dark' ? 'bg-white/5 hover:bg-neon hover:text-chumbo text-branco' : 'bg-black/5 hover:bg-azul hover:text-white text-slate-700'}`} aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={`pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium tracking-wide ${theme === 'dark' ? 'border-white/10 text-branco/40' : 'border-black/10 text-slate-500'}`}>
          <p>© {new Date().getFullYear()} Prof. Tyson Ferry. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1">Desenvolvido com <span className="text-azul dark:text-neon animate-pulse">■</span> Lógica</span>
            <span className="flex items-center gap-1">Baseado em <span className="text-azul font-serif font-black text-sm">π</span></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
