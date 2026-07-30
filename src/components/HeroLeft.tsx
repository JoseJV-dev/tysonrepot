import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Timer, Zap, Compass, BookOpen, Sun, Moon, Sunrise } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export function HeroLeft() {
  const { theme } = useTheme();
  const [greeting, setGreeting] = useState('');
  const [GreetingIcon, setGreetingIcon] = useState(() => Sun);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      setGreeting('Bom dia');
      setGreetingIcon(() => Sunrise);
    } else if (hour >= 12 && hour < 18) {
      setGreeting('Boa tarde');
      setGreetingIcon(() => Sun);
    } else {
      setGreeting('Boa noite');
      setGreetingIcon(() => Moon);
    }
  }, []);
  
  return (
    <div className={`flex flex-col gap-6 lg:gap-8 h-full`}>
      {/* Greeting */}
      {greeting && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`flex items-center gap-2 text-sm md:text-base font-bold uppercase tracking-widest ${theme === 'dark' ? 'text-neon' : 'text-azul'}`}
        >
          <GreetingIcon className="w-5 h-5" />
          <span>{greeting}</span>
        </motion.div>
      )}

      {/* Title */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="text-5xl sm:text-7xl lg:text-[5.5rem] font-black leading-[0.9] tracking-tighter"
      >
        VETOR<br />
        <motion.span 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5, type: 'spring' }}
          className="text-neon inline-block mt-2"
          style={{ filter: "drop-shadow(0 0 15px var(--theme-neon))" }}
        >
          ZERO
        </motion.span>
      </motion.div>

      {/* Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="flex flex-col gap-3"
      >
        <p className="text-xl md:text-2xl text-branco/90 max-w-sm font-medium leading-snug">
          Especialista em Física e Matemática
        </p>
        <div className="flex items-center gap-3 text-branco/50 text-sm font-bold uppercase tracking-widest">
           <Compass className="w-4 h-4 text-neon" /> Geometria
           <span className="w-1 h-1 bg-azul rounded-full" />
           <BookOpen className="w-4 h-4 text-azul" /> Lógica
        </div>
      </motion.div>

      {/* Illustration Area */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, type: 'spring', bounce: 0.4 }}
        className="relative py-12 lg:py-16 mt-4"
      >
        {/* SVG Math/Physics Element */}
        <div className="w-full max-w-[400px] h-48 md:h-64 relative mx-auto lg:mx-0 flex items-center justify-center">
            <svg viewBox="0 0 400 200" className="w-full h-full drop-shadow-[0_0_25px_rgba(204,255,0,0.1)] z-10 overflow-visible">
               {/* Grid / Geometry */}
               <path d="M0,100 L400,100 M200,0 L200,200 M100,0 L300,200 M100,200 L300,0" stroke={theme === 'dark' ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)"} strokeWidth="2" strokeDasharray="4,4" />
               
               {/* Geometric circles */}
               <circle cx="200" cy="100" r="90" fill="none" stroke={theme === 'dark' ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"} strokeWidth="1" strokeDasharray="5,5" />
               <circle cx="200" cy="100" r="45" fill="none" stroke={theme === 'dark' ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)"} strokeWidth="1" />
               
               {/* Atom orbits */}
               <ellipse cx="200" cy="100" rx="110" ry="35" fill="none" stroke="var(--theme-neon)" strokeWidth="1.5" transform="rotate(30 200 100)" style={{ filter: "drop-shadow(0 0 5px var(--theme-neon))" }} />
               <ellipse cx="200" cy="100" rx="110" ry="35" fill="none" stroke="#0055a4" strokeWidth="1.5" transform="rotate(150 200 100)" />
               <ellipse cx="200" cy="100" rx="110" ry="35" fill="none" stroke={theme === 'dark' ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.3)"} strokeWidth="1.5" transform="rotate(90 200 100)" />
               
               {/* Nucleus */}
               <circle cx="200" cy="100" r="8" fill="var(--theme-neon)" style={{ filter: "drop-shadow(0 0 10px var(--theme-neon))" }} />
               <circle cx="205" cy="95" r="4" fill="#fff" opacity="0.8" />

               {/* Formula overlays */}
               <text x="30" y="40" fill={theme === 'dark' ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.4)"} fontSize="14" fontFamily="monospace" fontWeight="bold">E=mc²</text>
               <text x="310" y="170" fill={theme === 'dark' ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.4)"} fontSize="14" fontFamily="monospace" fontWeight="bold">∮B·dA=0</text>
               <text x="270" y="30" fill={theme === 'dark' ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.4)"} fontSize="14" fontFamily="monospace" fontWeight="bold">F=G(m₁m₂/r²)</text>
               <text x="20" y="160" fill={theme === 'dark' ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.4)"} fontSize="14" fontFamily="monospace" fontWeight="bold">∇×E=-∂B/∂t</text>
            </svg>
            
            {/* Ambient sparks */}
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute inset-0 z-0 flex items-center justify-center">
               <div className="absolute top-4 right-1/4 w-3 h-3 bg-neon rounded-full opacity-60" style={{ filter: "drop-shadow(0 0 10px var(--theme-neon))" }} />
               <div className="absolute bottom-10 left-1/4 w-2 h-2 bg-azul rounded-full opacity-60" />
            </motion.div>
        </div>

        {/* Handwritten text */}
        <motion.div 
          initial={{ opacity: 0, rotate: 0 }}
          whileInView={{ opacity: 1, rotate: -6 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, type: 'spring' }}
          className="absolute right-0 md:right-0 bottom-0 lg:-bottom-8 text-neon font-['Caveat',_cursive] text-2xl md:text-3xl max-w-[320px] leading-tight drop-shadow-md z-20"
        >
          A matemática é o alfabeto com o qual escrevemos o universo.
          {/* Arrow pointing up-left */}
          <svg className="absolute -top-8 -left-8 w-10 h-10 rotate-[-15deg] opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 5l-5 5 5 5"/>
            <path d="M5 10h14"/>
          </svg>
        </motion.div>
      </motion.div>

      {/* Footer Badge */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="flex items-center gap-5 pt-8 mt-12 lg:mt-auto border-t border-branco/10"
      >
        <div className="text-sm font-bold tracking-widest uppercase text-branco/70 leading-relaxed">
          Explorando os limites da <br/>
          <span className="text-branco font-black">ciência e lógica</span>
        </div>
        <div className="w-14 h-14 rounded-full border-2 border-neon flex items-center justify-center text-neon shadow-[0_0_15px_var(--theme-neon)] relative shrink-0">
          <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-4px] rounded-full border-t-2 border-l-2 border-neon/50"
          />
          <Zap className="w-6 h-6" />
        </div>
      </motion.div>
    </div>
  );
}
