import { MapPin, Code, Cpu, BookOpen, Lightbulb } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { NavMenu } from './NavMenu';

export function IntroScreen() {
  const { theme } = useTheme();
  
  return (
    <div className={`w-full flex flex-col pt-10 pb-20`} id="intro">
      <div className={`w-full flex-grow rounded-[32px] md:rounded-[40px] flex flex-col ${theme === 'dark' ? 'bg-[#242526]' : 'bg-white'} shadow-sm overflow-hidden p-6 md:p-10 relative`}>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 flex-grow items-center pb-4 relative z-10">
          
          {/* Left Column */}
          <div className="flex flex-col justify-center max-w-xl h-full">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-azul/10 text-azul dark:bg-neon/10 dark:text-neon text-[10px] md:text-xs font-bold uppercase tracking-wider w-fit mb-4 md:mb-5 border border-azul/20 dark:border-neon/20">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-azul dark:bg-neon animate-pulse" />
              Educação & Tecnologia
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tighter mb-4 md:mb-5 font-sans">
              Olá, sou <br />
              Prof. Vicente <br /> 
              Cruz
            </h1>
            
            <p className={`text-sm md:text-base mb-6 max-w-md ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} leading-relaxed`}>
              Atuando na interseção entre educação, ciência, tecnologia e engenharia aplicada. Criador da <span className="font-bold text-azul dark:text-neon">Vetor Zero</span>.
            </p>
            
            <a href="#solucoes" className={`px-5 py-2.5 md:px-6 md:py-3 rounded-full w-fit text-xs md:text-sm font-bold transition-transform hover:scale-105 ${theme === 'dark' ? 'bg-white text-black' : 'bg-slate-800 text-white'}`}>
              Conheça as Soluções
            </a>
          </div>

          {/* Right Column - Bento Grid */}
          <div className="grid grid-cols-2 gap-3 auto-rows-fr h-full max-h-[500px]">
            
            {/* Card 1: Info/Location */}
            <div className={`p-4 md:p-5 rounded-[20px] flex flex-col justify-between ${theme === 'dark' ? 'bg-[#18191A]' : 'bg-slate-50'}`}>
               <div>
                 <h3 className={`text-base md:text-lg font-bold mb-1 ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>Base de Operações</h3>
                 <p className="text-[10px] md:text-xs text-gray-500 flex items-center gap-1"><MapPin className="w-3 h-3" /> Luanda, Angola</p>
               </div>
               <div className="mt-3">
                 <div className="w-full h-20 md:h-24 rounded-xl bg-gray-200 dark:bg-gray-800 overflow-hidden relative mb-2.5">
                    <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80" alt="Map" className="w-full h-full object-cover opacity-50 grayscale" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="bg-white dark:bg-[#18191A] text-slate-800 dark:text-white px-3 py-1.5 rounded-full text-[9px] md:text-[10px] font-bold shadow flex items-center gap-1.5 uppercase tracking-widest border border-slate-200 dark:border-white/5">
                        <Lightbulb className="w-3 h-3 text-azul dark:text-neon" /> Inovação
                      </span>
                    </div>
                 </div>
               </div>
            </div>

            {/* Card 2: Photo */}
            <div className="rounded-[20px] overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80" 
                alt="Tecnologia" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            {/* Card 3: Brands / Phrase */}
            <div className="col-span-2 md:col-span-1 rounded-[20px] bg-gradient-to-br from-azul to-[#003a70] dark:from-[#242526] dark:to-[#1A1A1D] border border-transparent dark:border-white/10 p-4 md:p-5 flex items-center justify-center text-white">
              <p className="text-sm md:text-base font-bold mb-0 opacity-90 leading-relaxed text-center">
                Desenvolvemos pessoas capazes de compreender e construir o futuro.
              </p>
            </div>

            {/* Card 4: Icons */}
            <div className="col-span-2 md:col-span-1 grid grid-cols-2 gap-2 md:gap-3">
              {[
                { icon: BookOpen, color: 'text-azul dark:text-neon', label: 'Educação', href: '#educacao' },
                { icon: Code, color: 'text-slate-600 dark:text-gray-400', label: 'Produtos', href: '#produtos' },
                { icon: Cpu, color: 'text-orange-500', label: 'Projetos', href: '#projetos' },
                { icon: Lightbulb, color: 'text-yellow-500', label: 'Tecnologia', href: '#tecnologia' }
              ].map((item, i) => (
                <a 
                  href={item.href}
                  onClick={(e) => {
                     e.preventDefault();
                     const el = document.querySelector(item.href);
                     if (el) {
                       el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                     }
                  }}
                  key={i} 
                  className={`flex flex-col items-center justify-center gap-1 p-2 rounded-[16px] md:rounded-[20px] hover:scale-105 transition-transform ${theme === 'dark' ? 'bg-[#18191A]' : 'bg-slate-50'}`}
                >
                  <item.icon className={`w-5 h-5 md:w-6 md:h-6 ${item.color}`} />
                  <span className={`text-[10px] font-bold tracking-wider uppercase ${theme === 'dark' ? 'text-white/70' : 'text-slate-600'}`}>{item.label}</span>
                </a>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
