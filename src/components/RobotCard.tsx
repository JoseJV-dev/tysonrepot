import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'motion/react';
import React, { useState, useEffect, useRef } from 'react';
import { 
  Check, GraduationCap, Code, Settings2, 
  Phone, MessageCircle, Facebook, QrCode, Building2
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) setMatches(media.matches);
    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);
  return matches;
}

type CardState = 'closed' | 'opening' | 'open';

export function RobotCard() {
  const [state, setState] = useState<CardState>('closed');
  const isDesktop = useMediaQuery('(min-width: 1024px)'); // lg breakpoint

  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current || state !== 'closed') return; // Only tilt when closed
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleToggle = () => {
    if (state === 'closed') {
      setState('open');
      x.set(0);
      y.set(0);
    } else {
      setState('closed');
    }
  };

  return (
    <motion.div 
      className="relative flex items-center justify-center w-full max-w-4xl mx-auto perspective-1000 my-20"
      animate={{
        minHeight: state === 'open' && !isDesktop ? 1000 : 500
      }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
    >
      
      {/* Central Interactive Area */}
      <div 
        className="relative flex items-center justify-center w-full h-[500px]"
      >
        
        {/* LEFT WING - Services */}
        <motion.div
          initial={false}
          animate={{
            rotateY: state === 'open' ? 0 : (isDesktop ? 90 : 0),
            rotateX: state === 'open' ? 0 : (isDesktop ? 0 : -90),
            x: state === 'open' ? (isDesktop ? -380 : 0) : 0,
            y: state === 'open' ? (isDesktop ? 0 : -320) : 0,
            opacity: state === 'open' ? 1 : 0,
          }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
          style={{ 
            originX: isDesktop ? 1 : 0.5,
            originY: isDesktop ? 0.5 : 1 
          }}
          className="absolute z-10 w-[240px] md:w-[280px] lg:w-[240px] h-[400px] bg-slate-50 rounded-2xl shadow-2xl p-6 text-slate-900 flex flex-col justify-between transform-style-3d border border-slate-200"
        >
          <div className="flex flex-col gap-6">
            <h3 className="text-[#0055a4] font-bold text-lg tracking-tight uppercase border-b-2 border-[#0055a4]/20 pb-2">Nossos Serviços</h3>
            
            <div className="flex items-start gap-3">
              <div className="bg-[#0055a4] text-white p-2 rounded-xl"><Building2 size={20} /></div>
              <div>
                <h4 className="font-bold text-sm leading-tight">ATL EM CASA</h4>
                <p className="text-xs text-slate-500 mt-1">Formação e apoio escolar em casa</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-[#0055a4] text-white p-2 rounded-xl"><GraduationCap size={20} /></div>
              <div>
                <h4 className="font-bold text-sm leading-tight">FORMAÇÃO</h4>
                <p className="text-xs text-slate-500 mt-1">Cursos e treinamentos profissionalizantes</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-[#0055a4] text-white p-2 rounded-xl"><Code size={20} /></div>
              <div>
                <h4 className="font-bold text-sm leading-tight text-[11px]">DESENVOLVIMENTO DE PROJECTO</h4>
                <p className="text-[10px] text-slate-500 mt-1">Soluções tecnológicas personalizadas</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-[#0055a4] text-white p-2 rounded-xl"><Settings2 size={20} /></div>
              <div>
                <h4 className="font-bold text-sm leading-tight">PRESTAÇÃO DE SERVIÇO</h4>
                <p className="text-xs text-slate-500 mt-1">Suporte técnico especializado</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CENTER BODY - Main Card */}
        <motion.div
          ref={ref}
          onClick={handleToggle}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative z-30 cursor-pointer flex flex-col items-center group perspective-1000"
          whileHover={{ scale: state === 'closed' ? 1.05 : (state === 'open' && !isDesktop ? 0.6 : 1) }}
          animate={{
            scale: state === 'open' && !isDesktop ? 0.6 : 1,
            y: 0
          }}
          style={{
             rotateX: rotateX,
             rotateY: rotateY,
             transformStyle: "preserve-3d"
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          
          {/* Hover Tooltip */}
          <div 
            style={{ transform: state === 'closed' ? "translateZ(60px)" : "translateZ(0px)" }}
            className={cn(
            "absolute opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50",
            state === 'closed' ? "-top-14" : "-bottom-14"
          )}>
            <div className="bg-slate-900 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-[0_0_20px_rgba(0,168,255,0.2)] whitespace-nowrap border border-white/10 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00a8ff] animate-pulse" />
              {state === 'closed' ? 'Clique para interagir com o robô' : 'Clique para recolher o painel'}
            </div>
            <div className={cn(
              "w-2.5 h-2.5 bg-slate-900 border-white/10 transform rotate-45 absolute left-1/2 -translate-x-1/2",
              state === 'closed' ? "border-b border-r -bottom-[5px]" : "border-t border-l -top-[5px]"
            )} />
          </div>

          {/* Dynamic Hover Drop Shadow */}
          <div 
            style={{ transform: "translateZ(-20px)" }}
            className="absolute inset-0 top-0 bg-[#00a8ff]/30 blur-[50px] rounded-3xl opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 z-10 pointer-events-none" 
          />

          {/* Robot Head (Only visible when open) */}
          <motion.div
            initial={false}
            animate={{ 
              y: state === 'open' ? -60 : 20, 
              opacity: state === 'open' ? 1 : 0 
            }}
            transition={{ duration: 0.6, type: "spring" }}
            className="absolute -top-16 w-32 h-20 bg-gradient-to-b from-[#003a70] to-[#001122] rounded-t-3xl border-t-4 border-l-4 border-r-4 border-[#0055a4] flex items-center justify-center gap-4 z-0 shadow-[inset_0_2px_5px_rgba(255,255,255,0.4),0_-5px_15px_rgba(0,168,255,0.3)] overflow-hidden"
          >
            {/* Eyes */}
            <div className="w-5 h-5 bg-[#00a8ff] rounded-full shadow-[0_0_15px_#00a8ff] animate-pulse relative">
              <div className="absolute inset-1 bg-white/40 rounded-full" />
            </div>
            <div className="w-5 h-5 bg-[#00a8ff] rounded-full shadow-[0_0_15px_#00a8ff] animate-pulse relative">
              <div className="absolute inset-1 bg-white/40 rounded-full" />
            </div>
          </motion.div>

          {/* Main Shield / Body */}
          <div 
            style={{ transform: state === 'closed' ? "translateZ(40px)" : "translateZ(0px)" }}
            className={cn(
            "relative w-[280px] h-[360px] bg-gradient-to-b from-[#003a70] via-[#002244] to-[#000a14] rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.7),inset_0_2px_3px_rgba(255,255,255,0.3),inset_0_-4px_10px_rgba(0,0,0,0.8)] flex flex-col items-center justify-center p-8 border border-[#0055a4]/30 z-20 transition-all duration-500 overflow-hidden",
            state === 'open' && "bg-gradient-to-b from-white via-slate-50 to-slate-200 shadow-[0_20px_50px_rgba(0,168,255,0.2),inset_0_2px_3px_rgba(255,255,255,1),inset_0_-4px_10px_rgba(0,0,0,0.1)] border-white/80"
          )}>
            {/* Glossy overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 pointer-events-none rounded-3xl z-30" />
            
            {/* Circuit pattern overlay for realism */}
            <div 
              className="absolute inset-0 opacity-10 pointer-events-none z-0 mix-blend-overlay"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`
              }}
            />
            
            {/* Logo Container */}
            <div className="relative mb-6 z-20">
               <svg viewBox="0 0 100 100" className="w-24 h-24 drop-shadow-xl transition-colors duration-500" style={{ color: state === 'open' ? '#0055a4' : '#00a8ff' }}>
                 <path d="M 18 40 A 35 35 0 0 0 82 40" stroke="currentColor" strokeWidth="10" fill="none" strokeLinecap="round" className={state === 'closed' ? "drop-shadow-[0_0_8px_#00a8ff]" : ""} />
                 <path d="M 5 20 L 95 20 L 50 85 Z M 30 35 L 70 35 L 50 65 Z" fill="currentColor" fillRule="evenodd" className={state === 'closed' ? "drop-shadow-[0_0_12px_#00a8ff]" : ""} />
                 <rect x="12" y="20" width="4" height="20" fill="currentColor" />
                 <circle cx="14" cy="44" r="6" fill="currentColor" />
               </svg>
            </div>
            
            <h2 className={cn(
              "text-3xl font-black tracking-widest text-center transition-colors duration-300 flex items-center gap-1.5",
              state === 'open' ? "text-[#003366]" : "text-white"
            )}>
              <span>VETOR</span>
              <span className={state === 'open' ? "text-slate-800" : "text-neon"}>ZERO</span>
            </h2>
            <div className={cn("h-[2px] w-full my-2", state === 'open' ? "bg-[#0055a4]/50" : "bg-azul")}></div>
            <p className={cn(
              "text-[10px] uppercase font-bold tracking-[0.2em] text-center transition-colors duration-300",
              state === 'open' ? "text-[#0055a4]" : "text-azul"
            )}>
              Educação e Tecnologia
            </p>

            <p className={cn(
              "text-xs text-center mt-8 font-medium leading-relaxed max-w-[200px] transition-colors duration-300",
              state === 'open' ? "text-slate-600" : "text-slate-300"
            )}>
              Ciência, Tecnologia e Educação para o Futuro.
            </p>
            
            {state === 'closed' && (
              <p className="absolute bottom-6 text-xs text-white/50 uppercase tracking-widest animate-pulse">
                Clique para abrir
              </p>
            )}
          </div>
        </motion.div>

        {/* RIGHT WING - Contacts */}
        <motion.div
          initial={false}
          animate={{
            rotateY: state === 'open' ? 0 : (isDesktop ? -90 : 0),
            rotateX: state === 'open' ? 0 : (isDesktop ? 0 : -90),
            x: state === 'open' ? (isDesktop ? 380 : 0) : 0,
            y: state === 'open' ? (isDesktop ? 0 : 320) : 0,
            opacity: state === 'open' ? 1 : 0,
          }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
          style={{ 
            originX: isDesktop ? 0 : 0.5,
            originY: isDesktop ? 0.5 : 0.5 
          }}
          className="absolute z-10 w-[240px] md:w-[280px] lg:w-[240px] h-[400px] bg-slate-50 rounded-2xl shadow-2xl p-6 text-slate-900 flex flex-col justify-between transform-style-3d border border-slate-200"
        >
          <div className="flex flex-col gap-6">
            <h3 className="text-[#0055a4] font-bold text-lg tracking-tight uppercase border-b-2 border-[#0055a4]/20 pb-2">Contactos</h3>
            
            <div className="flex items-center gap-3">
              <div className="bg-[#0055a4] text-white p-2 rounded-full"><MessageCircle size={18} /></div>
              <div>
                <h4 className="font-bold text-xs text-slate-500">WhatsApp</h4>
                <p className="text-sm font-bold">943 803 380</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="bg-[#0055a4] text-white p-2 rounded-full"><Phone size={18} /></div>
              <div>
                <h4 className="font-bold text-xs text-slate-500">Chamadas</h4>
                <p className="text-xs font-bold leading-tight">(+244) 943 803 380<br/>951 567 980</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="bg-[#0055a4] text-white p-2 rounded-full"><Facebook size={18} /></div>
              <div>
                <h4 className="font-bold text-xs text-slate-500">Facebook</h4>
                <p className="text-xs font-bold">Vetor Zero Oficial</p>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-slate-200 flex flex-col items-center">
              <div className="w-24 h-24 bg-white p-1 border border-slate-200 rounded flex items-center justify-center">
                <QrCode size={64} className="text-[#003366]"/>
              </div>
              <p className="text-[10px] font-bold text-center mt-2 text-slate-500">ESCANIE O QR CODE<br/>e fale connosco!</p>
            </div>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}
