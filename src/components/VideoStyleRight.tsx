import { motion } from 'motion/react';
import { PenTool, User } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export function VideoStyleRight() {
  const { theme } = useTheme();

  return (
    <div className={`flex flex-col gap-12 h-full`}>
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col gap-2"
      >
        <h2 className="text-2xl font-black uppercase tracking-wide">Estilo do Vídeo</h2>
        <p className="text-neon font-bold tracking-widest uppercase text-xs md:text-sm">Série: Tudo sobre electrónica em 1 minuto</p>
      </motion.div>

      {/* Section 1: Explicação Visual */}
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative flex flex-col gap-4"
      >
        {/* Blue tag */}
        <div className="absolute top-6 left-0 bg-azul text-white text-[10px] md:text-xs font-bold uppercase tracking-widest px-4 py-2.5 rounded-r-full flex items-center gap-2 shadow-[0_0_15px_rgba(0,85,255,0.4)] z-20">
           <PenTool className="w-4 h-4" /> Explicação Visual
        </div>
        
        <div className={`mt-12 w-full h-[280px] ${theme === 'dark' ? 'bg-[#f0f4f8]' : 'bg-slate-50'} rounded-2xl relative overflow-hidden flex items-center justify-center border-4 ${theme === 'dark' ? 'border-white/10' : 'border-black/5'}`}>
            {/* Simulation of notebook paper */}
            <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'linear-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '100% 24px' }}></div>
            
            <div className="relative z-10 flex flex-col items-center gap-4 text-[#1e293b] font-['Caveat',_cursive] text-2xl md:text-3xl font-bold w-full px-8">
               <div className="uppercase tracking-widest text-xl mb-2 font-sans font-black text-azul/80 border-b-2 border-azul/20 pb-1">Resistor</div>
               
               {/* Hand-drawn resistor circuit symbol */}
               <svg viewBox="0 0 200 40" className="w-48 my-2 drop-shadow-sm">
                 <line x1="0" y1="20" x2="40" y2="20" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" />
                 <path d="M40 20 L45 5 L55 35 L65 5 L75 35 L85 5 L95 35 L105 5 L115 35 L125 5 L135 35 L145 5 L155 35 L160 20" fill="none" stroke="#0f172a" strokeWidth="3" strokeLinejoin="round" />
                 <line x1="160" y1="20" x2="200" y2="20" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" />
               </svg>
               
               <ul className="text-[1.3rem] leading-relaxed mt-2 ml-4 md:ml-12 list-none w-full max-w-[300px]">
                 <li className="flex gap-3"><span className="text-azul">→</span> Reduz a corrente</li>
                 <li className="flex gap-3"><span className="text-azul">→</span> Não produz energia</li>
                 <li className="flex gap-3"><span className="text-azul">→</span> Não armazena energia</li>
               </ul>
            </div>
            
            {/* Hand image decoration (optional, using an SVG icon to simulate drawing) */}
            <PenTool className="absolute bottom-10 right-10 w-12 h-12 text-[#94a3b8] opacity-50 rotate-[-45deg]" />
        </div>

        {/* 1 Minuto tag & Description */}
        <div className="flex items-center gap-4 md:gap-6 mt-4">
            <div className="w-16 h-16 shrink-0 rounded-full border-2 border-neon flex flex-col items-center justify-center text-neon bg-chumbo z-10 -mt-10 ml-4 shadow-[0_0_15px_var(--theme-neon)] relative">
              <span className="font-black text-sm">01:00</span>
              <span className="text-[7px] tracking-widest font-bold">MINUTO</span>
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute inset-[-4px] rounded-full border-t-2 border-r-2 border-neon/50" />
            </div>
            <div className={`text-xs md:text-sm font-bold tracking-widest uppercase text-neon border-l-2 ${theme === 'dark' ? 'border-white/10' : 'border-black/10'} pl-4 py-1`}>
              Explicação simples, visual e objectiva
            </div>
        </div>
      </motion.div>

      {/* Section 2: Explicação Prática */}
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative flex flex-col gap-4 mt-8 md:mt-12"
      >
         {/* Blue tag */}
         <div className="absolute top-6 left-0 bg-azul text-white text-[10px] md:text-xs font-bold uppercase tracking-widest px-4 py-2.5 rounded-r-full flex items-center gap-2 shadow-[0_0_15px_rgba(0,85,255,0.4)] z-20">
           <User className="w-4 h-4" /> Explicação Prática
        </div>
        
        <div className={`mt-12 w-full h-[280px] bg-chumbo rounded-2xl overflow-hidden relative border-4 ${theme === 'dark' ? 'border-white/10' : 'border-black/10'} group`}>
            {/* Image of professor */}
            <img 
               src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&q=80&w=800" 
               alt="Professor" 
               className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-500 group-hover:scale-105"
            />
            
            {/* Tech UI overlay elements */}
            <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-[pulse_1s_ease-in-out_Infinity] shadow-[0_0_10px_rgba(239,68,68,0.8)]" />
              <div className="text-[10px] md:text-xs font-mono font-bold uppercase tracking-widest text-white/90">REC 00:00:24</div>
            </div>
            <svg className="absolute bottom-4 right-4 w-12 h-12 text-azul/50" viewBox="0 0 100 100">
               <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10 5" />
               <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1" />
            </svg>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-chumbo via-chumbo/20 to-transparent"></div>
            
            <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center gap-3">
              <svg width="24" height="24" viewBox="0 0 40 40" className="text-neon">
                 <path d="M5 10 L35 10 L20 35 Z" fill="none" stroke="currentColor" strokeWidth="4" />
                 <path d="M15 15 L25 15 L20 25 Z" fill="currentColor" />
              </svg>
              <span className="font-black tracking-widest text-sm uppercase text-branco">Vetor Zero</span>
            </div>
        </div>

        {/* Quote */}
        <div className="text-center font-bold tracking-wider uppercase text-neon leading-relaxed text-[11px] md:text-xs mt-4 px-4 border-l-2 border-r-2 border-azul/30 py-2 bg-azul/5 rounded-lg shadow-[inset_0_0_20px_rgba(0,85,255,0.1)]">
          <span className={`${theme === 'dark' ? 'text-white' : 'text-slate-800'} block mb-1`}>O resistor ensina uma lição importante:</span>
          Nem tudo funciona melhor quando<br/>
          passa mais energia.
        </div>
      </motion.div>
    </div>
  );
}
