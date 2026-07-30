import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'motion/react';
import React, { useState, useEffect, useRef } from 'react';
import { 
  Check, GraduationCap, Code, Settings2, 
  Phone, MessageCircle, Facebook, QrCode, Building2,
  ChevronLeft, ChevronRight, X
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { useTheme } from './ThemeProvider';

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
  
  // 0: Main Body, 1: Services, 2: Contacts
  const [mobileCardIndex, setMobileCardIndex] = useState(0); 

  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    if (state === 'open' && !isDesktop) {
      document.body.style.overflow = 'hidden';
      window.dispatchEvent(new CustomEvent('robotStateChange', { detail: { isOpen: true } }));
    } else {
      document.body.style.overflow = '';
      window.dispatchEvent(new CustomEvent('robotStateChange', { detail: { isOpen: false } }));
    }
    return () => {
      document.body.style.overflow = '';
      window.dispatchEvent(new CustomEvent('robotStateChange', { detail: { isOpen: false } }));
    };
  }, [state, isDesktop]);

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
      setMobileCardIndex(0);
      x.set(0);
      y.set(0);
    } else {
      setState('closed');
    }
  };

  const nextCard = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMobileCardIndex((prev) => (prev + 1) % 3);
  };

  const prevCard = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMobileCardIndex((prev) => (prev - 1 + 3) % 3);
  };

  // Content renderers
  const renderServices = () => (
    <div className="flex flex-col gap-6">
      <h3 className={`font-bold text-lg tracking-tight uppercase border-b-2 pb-2 ${isDark ? 'text-[#00a8ff] border-[#00a8ff]/20' : 'text-[#0055a4] border-[#0055a4]/20'}`}>Nossos Serviços</h3>
      
      <div className="flex items-start gap-3">
        <div className={`p-2 rounded-xl text-white ${isDark ? 'bg-[#00a8ff]' : 'bg-[#0055a4]'}`}><Building2 size={20} /></div>
        <div>
          <h4 className={`font-bold text-sm leading-tight ${isDark ? 'text-white' : ''}`}>ATL EM CASA</h4>
          <p className={`text-xs mt-1 ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>Formação e apoio escolar em casa</p>
        </div>
      </div>
      
      <div className="flex items-start gap-3">
        <div className={`p-2 rounded-xl text-white ${isDark ? 'bg-[#00a8ff]' : 'bg-[#0055a4]'}`}><GraduationCap size={20} /></div>
        <div>
          <h4 className={`font-bold text-sm leading-tight ${isDark ? 'text-white' : ''}`}>FORMAÇÃO</h4>
          <p className={`text-xs mt-1 ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>Cursos e treinamentos profissionalizantes</p>
        </div>
      </div>
      
      <div className="flex items-start gap-3">
        <div className={`p-2 rounded-xl text-white ${isDark ? 'bg-[#00a8ff]' : 'bg-[#0055a4]'}`}><Code size={20} /></div>
        <div>
          <h4 className={`font-bold text-sm leading-tight text-[11px] ${isDark ? 'text-white' : ''}`}>DESENVOLVIMENTO DE PROJECTO</h4>
          <p className={`text-[10px] mt-1 ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>Soluções tecnológicas personalizadas</p>
        </div>
      </div>
      
      <div className="flex items-start gap-3">
        <div className={`p-2 rounded-xl text-white ${isDark ? 'bg-[#00a8ff]' : 'bg-[#0055a4]'}`}><Settings2 size={20} /></div>
        <div>
          <h4 className={`font-bold text-sm leading-tight ${isDark ? 'text-white' : ''}`}>PRESTAÇÃO DE SERVIÇO</h4>
          <p className={`text-xs mt-1 ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>Suporte técnico especializado</p>
        </div>
      </div>
    </div>
  );

  const renderContacts = () => (
    <div className="flex flex-col gap-6">
      <h3 className={`font-bold text-lg tracking-tight uppercase border-b-2 pb-2 ${isDark ? 'text-[#00a8ff] border-[#00a8ff]/20' : 'text-[#0055a4] border-[#0055a4]/20'}`}>Contactos</h3>
      
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-full text-white ${isDark ? 'bg-[#00a8ff]' : 'bg-[#0055a4]'}`}><MessageCircle size={18} /></div>
        <div>
          <h4 className={`font-bold text-xs ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>WhatsApp</h4>
          <p className={`text-sm font-bold ${isDark ? 'text-white' : ''}`}>943 803 380</p>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-full text-white ${isDark ? 'bg-[#00a8ff]' : 'bg-[#0055a4]'}`}><Phone size={18} /></div>
        <div>
          <h4 className={`font-bold text-xs ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>Chamadas</h4>
          <p className={`text-xs font-bold leading-tight ${isDark ? 'text-white' : ''}`}>(+244) 943 803 380<br/>951 567 980</p>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-full text-white ${isDark ? 'bg-[#00a8ff]' : 'bg-[#0055a4]'}`}><Facebook size={18} /></div>
        <div>
          <h4 className={`font-bold text-xs ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>Facebook</h4>
          <p className={`text-xs font-bold ${isDark ? 'text-white' : ''}`}>Vetor Zero Oficial</p>
        </div>
      </div>
      
      <div className={`mt-4 pt-4 border-t flex flex-col items-center ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
        <div className={`w-24 h-24 p-1 border rounded flex items-center justify-center ${isDark ? 'bg-[#242526] border-white/10' : 'bg-white border-slate-200'}`}>
          <QrCode size={64} className={isDark ? 'text-[#00a8ff]' : 'text-[#003366]'}/>
        </div>
        <p className={`text-[10px] font-bold text-center mt-2 ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>ESCANIE O QR CODE<br/>e fale connosco!</p>
      </div>
    </div>
  );

  const renderMainBody = (isMobileOverlay = false) => (
    <>
      {/* Robot Head (Only visible when open, not in mobile overlay unless wanted, let's keep it in both) */}
      <motion.div
        initial={false}
        animate={{ 
          y: (state === 'open' || isMobileOverlay) ? -60 : 20, 
          opacity: (state === 'open' || isMobileOverlay) ? 1 : 0 
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
        style={{ transform: (state === 'closed' && !isMobileOverlay) ? "translateZ(40px)" : "translateZ(0px)" }}
        className={cn(
        "relative w-[280px] h-[360px] bg-gradient-to-b from-[#003a70] via-[#002244] to-[#000a14] rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.7),inset_0_2px_3px_rgba(255,255,255,0.3),inset_0_-4px_10px_rgba(0,0,0,0.8)] flex flex-col items-center justify-center p-8 border border-[#0055a4]/30 z-20 transition-all duration-500 overflow-hidden",
        (state === 'open' || isMobileOverlay) && (isDark ? "bg-gradient-to-b from-[#18191A] via-[#242526] to-[#0d1520] border-white/10 shadow-[0_20px_50px_rgba(0,168,255,0.1)]" : "bg-gradient-to-b from-white via-slate-50 to-slate-200 shadow-[0_20px_50px_rgba(0,168,255,0.2),inset_0_2px_3px_rgba(255,255,255,1),inset_0_-4px_10px_rgba(0,0,0,0.1)] border-white/80")
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
           <svg viewBox="0 0 100 100" className="w-24 h-24 drop-shadow-xl transition-colors duration-500" style={{ color: (state === 'open' || isMobileOverlay) ? '#0055a4' : '#00a8ff' }}>
             <path d="M 18 40 A 35 35 0 0 0 82 40" stroke="currentColor" strokeWidth="10" fill="none" strokeLinecap="round" className={(state === 'closed' && !isMobileOverlay) ? "drop-shadow-[0_0_8px_#00a8ff]" : ""} />
             <path d="M 5 20 L 95 20 L 50 85 Z M 30 35 L 70 35 L 50 65 Z" fill="currentColor" fillRule="evenodd" className={(state === 'closed' && !isMobileOverlay) ? "drop-shadow-[0_0_12px_#00a8ff]" : ""} />
             <rect x="12" y="20" width="4" height="20" fill="currentColor" />
             <circle cx="14" cy="44" r="6" fill="currentColor" />
           </svg>
        </div>
        
        <h2 className={cn(
          "text-3xl font-black tracking-widest text-center transition-colors duration-300 flex items-center gap-1.5",
          (state === 'open' || isMobileOverlay) ? (isDark ? "text-white" : "text-[#003366]") : "text-white"
        )}>
          <span>VETOR</span>
          <span className={(state === 'open' || isMobileOverlay) ? (isDark ? "text-[#00a8ff]" : "text-slate-800") : "text-neon"}>ZERO</span>
        </h2>
        <div className={cn("h-[2px] w-full my-2", (state === 'open' || isMobileOverlay) ? (isDark ? "bg-[#00a8ff]/30" : "bg-[#0055a4]/50") : "bg-azul")}></div>
        <p className={cn(
          "text-[10px] uppercase font-bold tracking-[0.2em] text-center transition-colors duration-300",
          (state === 'open' || isMobileOverlay) ? (isDark ? "text-[#00a8ff]" : "text-[#0055a4]") : "text-azul"
        )}>
          Educação e Tecnologia
        </p>

        <p className={cn(
          "text-xs text-center mt-8 font-medium leading-relaxed max-w-[200px] transition-colors duration-300",
          (state === 'open' || isMobileOverlay) ? (isDark ? "text-gray-300" : "text-slate-600") : "text-slate-300"
        )}>
          Ciência, Tecnologia e Educação para o Futuro.
        </p>
        
        {(state === 'closed' && !isMobileOverlay) && (
          <p className="absolute bottom-6 text-xs text-white/50 uppercase tracking-widest animate-pulse">
            Clique para abrir
          </p>
        )}
      </div>
    </>
  );

  return (
    <>
      <AnimatePresence>
        {state === 'open' && !isDesktop && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center p-6"
          >
            <button
              onClick={() => setState('closed')}
              className="absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center bg-white/10 text-white border border-white/20 shadow-lg"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative w-full max-w-sm flex items-center justify-center mt-12" style={{ perspective: 1000 }}>
              
              {/* Stacked background cards for the "folded" look */}
              <div className={`absolute top-4 w-[240px] h-[360px] rounded-3xl -z-20 scale-90 blur-sm translate-y-6 ${isDark ? 'bg-white/5' : 'bg-slate-200/40'}`} />
              <div className={`absolute top-2 w-[260px] h-[360px] rounded-3xl -z-10 scale-95 blur-[2px] translate-y-3 ${isDark ? 'bg-white/10' : 'bg-slate-100/60'}`} />

              <motion.div
                key={mobileCardIndex}
                initial={{ rotateX: 90, opacity: 0, y: 20 }}
                animate={{ rotateX: 0, opacity: 1, y: 0 }}
                exit={{ rotateX: -90, opacity: 0, y: -20 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                style={{ transformOrigin: 'bottom' }}
                className="relative z-10 flex flex-col items-center justify-center"
              >
                {mobileCardIndex === 0 && renderMainBody(true)}
                {mobileCardIndex === 1 && (
                  <div className={`w-[280px] h-[360px] rounded-3xl shadow-2xl p-6 flex flex-col justify-between border ${isDark ? 'bg-[#18191A] border-white/10' : 'bg-slate-50 border-slate-200'}`}>
                    {renderServices()}
                  </div>
                )}
                {mobileCardIndex === 2 && (
                  <div className={`w-[280px] h-[360px] rounded-3xl shadow-2xl p-6 flex flex-col justify-between border ${isDark ? 'bg-[#18191A] border-white/10' : 'bg-slate-50 border-slate-200'}`}>
                    {renderContacts()}
                  </div>
                )}
              </motion.div>

              {/* Navigation Arrows */}
              <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-2 w-[calc(100%+3rem)] -ml-6 z-50">
                <button 
                  onClick={prevCard}
                  className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 backdrop-blur text-white border border-white/20 shadow-lg transition-transform active:scale-90"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={nextCard}
                  className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 backdrop-blur text-white border border-white/20 shadow-lg transition-transform active:scale-90"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex gap-2 mt-12 z-50">
              {[0, 1, 2].map((idx) => (
                <div 
                  key={idx} 
                  className={`h-2 rounded-full transition-all ${
                    idx === mobileCardIndex 
                      ? 'w-6 bg-[#00a8ff]' 
                      : 'w-2 bg-white/30'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        className={cn(
          "relative flex items-center justify-center w-full max-w-4xl mx-auto perspective-1000 my-20",
          !isDesktop && state === 'open' && "opacity-0 pointer-events-none hidden" // Hide the original bot on mobile when open
        )}
        animate={{
          minHeight: 500
        }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
      >
        
        {/* Central Interactive Area */}
        <div className="relative flex items-center justify-center w-full h-[500px]">
          
          {/* LEFT WING - Services (Desktop only when open) */}
          {isDesktop && (
            <motion.div
              initial={false}
              animate={{
                rotateY: state === 'open' ? 0 : 90,
                rotateX: state === 'open' ? 0 : 0,
                x: state === 'open' ? -380 : 0,
                y: 0,
                opacity: state === 'open' ? 1 : 0,
              }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
              style={{ originX: 1, originY: 0.5 }}
              className={`absolute z-10 w-[240px] h-[400px] rounded-2xl shadow-2xl p-6 flex flex-col justify-between transform-style-3d border pointer-events-none ${isDark ? 'bg-[#18191A] border-white/10' : 'bg-slate-50 border-slate-200'}`}
            >
              {renderServices()}
            </motion.div>
          )}

          {/* CENTER BODY - Main Card */}
          <motion.div
            ref={ref}
            onClick={handleToggle}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative z-30 cursor-pointer flex flex-col items-center group perspective-1000"
            whileHover={{ scale: state === 'closed' ? 1.05 : 1 }}
            animate={{
              scale: 1,
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

            {renderMainBody(false)}
          </motion.div>

          {/* RIGHT WING - Contacts (Desktop only when open) */}
          {isDesktop && (
            <motion.div
              initial={false}
              animate={{
                rotateY: state === 'open' ? 0 : -90,
                rotateX: state === 'open' ? 0 : 0,
                x: state === 'open' ? 380 : 0,
                y: 0,
                opacity: state === 'open' ? 1 : 0,
              }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
              style={{ originX: 0, originY: 0.5 }}
              className={`absolute z-10 w-[240px] h-[400px] rounded-2xl shadow-2xl p-6 flex flex-col justify-between transform-style-3d border pointer-events-none ${isDark ? 'bg-[#18191A] border-white/10' : 'bg-slate-50 border-slate-200'}`}
            >
              {renderContacts()}
            </motion.div>
          )}

        </div>
      </motion.div>
    </>
  );
}
