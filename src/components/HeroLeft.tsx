import { motion } from 'motion/react';
import { Timer, Zap } from 'lucide-react';

export function HeroLeft() {
  return (
    <div className="flex flex-col gap-6 lg:gap-8 pt-4">
      {/* Title */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="text-5xl sm:text-7xl lg:text-[6.5rem] font-black leading-[0.9] tracking-tighter"
      >
        O QUE É<br />
        UM<br />
        <motion.span 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5, type: 'spring' }}
          className="text-neon inline-block"
          style={{ filter: "drop-shadow(0 0 15px var(--theme-neon))" }}
        >
          RESISTOR?
        </motion.span>
      </motion.div>

      {/* Subtitle */}
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-xl md:text-2xl text-branco/70 max-w-sm font-medium leading-snug"
      >
        Ele controla a velocidade da electricidade.
      </motion.p>

      {/* Illustration Area */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, type: 'spring', bounce: 0.4 }}
        className="relative py-12 lg:py-16 mt-4"
      >
        {/* SVG Resistor */}
        <div className="w-full max-w-[400px] h-32 md:h-48 relative mx-auto lg:mx-0 flex items-center justify-center">
            <svg viewBox="0 0 400 120" className="w-full h-full drop-shadow-[0_0_25px_rgba(204,255,0,0.15)] z-10">
               {/* Wires */}
               <line x1="0" y1="60" x2="100" y2="60" stroke="#71717a" strokeWidth="6" strokeLinecap="round" />
               <line x1="300" y1="60" x2="400" y2="60" stroke="#71717a" strokeWidth="6" strokeLinecap="round" />
               {/* Resistor Body */}
               <rect x="100" y="30" width="200" height="60" rx="30" fill="#d4a373" stroke="#8c5a2b" strokeWidth="3" />
               {/* Color Bands */}
               <rect x="130" y="30" width="16" height="60" fill="#8c5a2b" />
               <rect x="170" y="30" width="16" height="60" fill="#e63946" />
               <rect x="210" y="30" width="16" height="60" fill="#1d3557" />
               <rect x="250" y="30" width="16" height="60" fill="#e9c46a" />
               {/* Highlight / 3D effect */}
               <path d="M120 35h160a20 20 0 0 1 0 10H120a20 20 0 0 1 0-10z" fill="white" opacity="0.3" />
            </svg>
            
            {/* Ambient sparks */}
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute inset-0 z-0">
               <Zap className="absolute top-0 right-1/4 text-neon w-6 h-6 opacity-60" style={{ filter: "drop-shadow(0 0 5px var(--theme-neon))" }} />
               <Zap className="absolute bottom-4 left-1/4 text-neon w-5 h-5 opacity-40" />
            </motion.div>
        </div>

        {/* Handwritten text */}
        <motion.div 
          initial={{ opacity: 0, rotate: 0 }}
          whileInView={{ opacity: 1, rotate: -6 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, type: 'spring' }}
          className="absolute right-0 md:right-10 bottom-0 lg:-bottom-10 text-neon font-['Caveat',_cursive] text-2xl md:text-3xl max-w-[280px] leading-tight drop-shadow-md z-20"
        >
          Nem tudo funciona melhor quando passa mais energia.
          {/* Arrow pointing up-left */}
          <svg className="absolute -top-10 -left-12 w-12 h-12 rotate-[-20deg]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        <div className="text-sm font-bold tracking-widest uppercase text-branco/70">
          Tudo sobre electrónica<br/>em <span className="text-branco font-black">1 minuto</span>
        </div>
        <div className="w-14 h-14 rounded-full border-2 border-neon flex items-center justify-center text-neon shadow-[0_0_15px_rgba(204,255,0,0.15)] relative">
          <motion.div 
             animate={{ rotate: 360 }} 
             transition={{ duration: 60, repeat: Infinity, ease: "linear" }} 
             className="absolute inset-0 rounded-full border-t-2 border-neon"
          />
          <span className="font-black text-xl">60</span>
        </div>
      </motion.div>
    </div>
  );
}
