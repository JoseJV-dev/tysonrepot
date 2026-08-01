import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Bot, Mail, Phone, MapPin, Building2, GraduationCap, ChevronLeft, ChevronRight, X, Cpu, Smartphone, Zap, Server } from 'lucide-react';
import { cn } from '../lib/utils';
import { useTheme } from './ThemeProvider';

type RobotState = 'closed' | 'open';

export function RobotCard() {
  const [state, setState] = useState<RobotState>('closed');
  const [isDesktop, setIsDesktop] = useState(true);
  const [mobileCardIndex, setMobileCardIndex] = useState(0); // 0 = main, 1 = services, 2 = contacts
  const ref = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  
  // Parallax motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for rotation
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), { stiffness: 150, damping: 20 });

  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= 1024;
      setIsDesktop(desktop);
      if (!desktop && state === 'open') {
        // Reset to main card if switching to mobile view while open
        setMobileCardIndex(0);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [state]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current || state === 'open') {
      mouseX.set(0);
      mouseY.set(0);
      return;
    }
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleToggle = () => {
    if (state === 'closed') {
      setState('open');
      mouseX.set(0);
      mouseY.set(0);
      const event = new CustomEvent('robotStateChange', { detail: { isOpen: true } });
      window.dispatchEvent(event);
    } else if (isDesktop) {
      // Only close by clicking the main body on desktop
      setState('closed');
      const event = new CustomEvent('robotStateChange', { detail: { isOpen: false } });
      window.dispatchEvent(event);
    }
  };

  const closeMobile = () => {
    setState('closed');
    const event = new CustomEvent('robotStateChange', { detail: { isOpen: false } });
    window.dispatchEvent(event);
  };

  const nextCard = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMobileCardIndex((prev) => (prev + 1) % 3);
  };

  const prevCard = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMobileCardIndex((prev) => (prev - 1 + 3) % 3);
  };

  const isDark = theme === 'dark';

  const renderServices = () => (
    <div className="flex flex-col gap-6">
      <h3 className={`font-bold text-lg tracking-tight uppercase border-b-2 pb-2 ${isDark ? 'text-neon border-neon/20' : 'text-[#0055a4] border-[#0055a4]/20'}`}>Nossas Soluções</h3>
      
      <div className="flex items-start gap-3">
        <div className={`p-2 rounded-xl text-chumbo ${isDark ? 'bg-neon' : 'bg-[#0055a4] text-white'}`}><Smartphone size={20} /></div>
        <div>
          <h4 className={`font-bold text-sm leading-tight ${isDark ? 'text-white' : ''}`}>KINA SERVICE</h4>
          <p className={`text-xs mt-1 ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>Digitalização de restaurantes e menus.</p>
        </div>
      </div>
      
      <div className="flex items-start gap-3">
        <div className={`p-2 rounded-xl text-chumbo ${isDark ? 'bg-neon' : 'bg-[#0055a4] text-white'}`}><Server size={20} /></div>
        <div>
          <h4 className={`font-bold text-sm leading-tight ${isDark ? 'text-white' : ''}`}>VETOR GRID</h4>
          <p className={`text-xs mt-1 ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>Gestão Inteligente da Rede Elétrica.</p>
        </div>
      </div>
      
      <div className="flex items-start gap-3">
        <div className={`p-2 rounded-xl text-chumbo ${isDark ? 'bg-neon' : 'bg-[#0055a4] text-white'}`}><Zap size={20} /></div>
        <div>
          <h4 className={`font-bold text-sm leading-tight ${isDark ? 'text-white' : ''}`}>BOLT</h4>
          <p className={`text-xs mt-1 ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>O assistente virtual académico gamificado.</p>
        </div>
      </div>
    </div>
  );

  const renderContacts = () => (
    <div className="flex flex-col gap-6 h-full justify-between">
      <div>
        <h3 className={`font-bold text-lg tracking-tight uppercase border-b-2 pb-2 mb-6 ${isDark ? 'text-neon border-neon/20' : 'text-[#0055a4] border-[#0055a4]/20'}`}>Fale Connosco</h3>
        
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-full border ${isDark ? 'border-white/10 text-white' : 'border-slate-200 text-slate-700'}`}><Mail size={16} /></div>
            <a href="mailto:info@vetorzero.co.mz" className={`text-sm font-medium hover:underline ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>info@vetorzero.co.mz</a>
          </div>
          
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-full border ${isDark ? 'border-white/10 text-white' : 'border-slate-200 text-slate-700'}`}><Phone size={16} /></div>
            <p className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>+258 84 000 0000</p>
          </div>
          
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-full border ${isDark ? 'border-white/10 text-white' : 'border-slate-200 text-slate-700'}`}><MapPin size={16} /></div>
            <p className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>Luanda, Angola</p>
          </div>
        </div>
      </div>
      
      <a 
        href="#contact" 
        onClick={(e) => {
           if(state === 'open') {
             closeMobile();
           }
        }}
        className={`w-full py-3 rounded-xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-transform active:scale-95 ${
          isDark 
            ? 'bg-white text-[#18191A] hover:bg-white/90' 
            : 'bg-slate-900 text-white hover:bg-slate-800'
        }`}
      >
        <span>Solicitar Orçamento</span>
        <ChevronRight size={16} />
      </a>
    </div>
  );

  const renderMainBody = (isMobileView: boolean = false) => (
    <div 
      className={cn(
        "relative flex flex-col justify-between p-6 transform-style-3d border shadow-2xl transition-colors duration-300",
        state === 'closed' ? "w-[240px] h-[360px] rounded-[2rem]" : "w-[280px] h-[400px] rounded-[2rem]",
        isDark ? 'bg-[#18191A] border-white/10' : 'bg-slate-50 border-slate-200'
      )}
      style={{
        transform: state === 'closed' ? "translateZ(30px)" : "translateZ(0px)"
      }}
    >
      {/* Bot Header */}
      <div className="flex justify-between items-start z-10" style={{ transform: "translateZ(40px)" }}>
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-inner border ${isDark ? 'bg-[#242526] border-white/10' : 'bg-white border-slate-200'}`}>
          <Cpu className={isDark ? 'text-neon' : 'text-[#0055a4]'} size={24} />
        </div>
        <div className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase border ${isDark ? 'bg-[#242526] text-neon border-neon/20' : 'bg-white text-[#0055a4] border-[#0055a4]/20'}`}>
          {state === 'closed' ? 'V-ZERO v1.0' : 'SISTEMA ATIVO'}
        </div>
      </div>

      {/* Bot Face / Visual Area */}
      <div 
        className="flex-1 flex flex-col items-center justify-center relative my-4 z-10"
        style={{ transform: "translateZ(20px)" }}
      >
        <motion.div 
          animate={{ 
            scale: state === 'open' ? 1.1 : 1,
            y: state === 'open' ? -10 : 0
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative"
        >
          {/* Eyes/Core */}
          <div className="flex gap-4 items-center justify-center relative">
            <div className={`w-8 h-8 rounded-full shadow-[inset_0_0_10px_rgba(0,0,0,0.5)] flex items-center justify-center ${isDark ? 'bg-[#0f0f12]' : 'bg-slate-200'}`}>
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }} 
                transition={{ duration: 2, repeat: Infinity }}
                className={`w-3 h-3 rounded-full ${isDark ? 'bg-neon shadow-[0_0_15px_var(--theme-neon)]' : 'bg-[#0055a4] shadow-[0_0_10px_rgba(0,85,164,0.5)]'}`} 
              />
            </div>
            <div className={`w-8 h-8 rounded-full shadow-[inset_0_0_10px_rgba(0,0,0,0.5)] flex items-center justify-center ${isDark ? 'bg-[#0f0f12]' : 'bg-slate-200'}`}>
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }} 
                transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                className={`w-3 h-3 rounded-full ${isDark ? 'bg-neon shadow-[0_0_15px_var(--theme-neon)]' : 'bg-[#0055a4] shadow-[0_0_10px_rgba(0,85,164,0.5)]'}`} 
              />
            </div>
          </div>
          
          {/* Decorative lines around face */}
          <div className={`absolute top-1/2 -left-8 w-6 h-0.5 -translate-y-1/2 ${isDark ? 'bg-white/10' : 'bg-slate-300'}`} />
          <div className={`absolute top-1/2 -right-8 w-6 h-0.5 -translate-y-1/2 ${isDark ? 'bg-white/10' : 'bg-slate-300'}`} />
        </motion.div>

        {state === 'open' && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 text-center"
          >
            <p className={`text-xs font-bold tracking-widest uppercase mb-1 ${isDark ? 'text-neon' : 'text-[#0055a4]'}`}>A PRIMEIRA FÓRMULA</p>
            <h3 className={`text-xl font-black ${isDark ? 'text-white' : 'text-slate-800'}`}>Vetor Zero</h3>
          </motion.div>
        )}
      </div>

      {/* Bot Footer / Actions */}
      <div className="z-10" style={{ transform: "translateZ(30px)" }}>
        {state === 'closed' ? (
          <div className={`w-full py-3 rounded-xl border flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest ${isDark ? 'bg-[#242526] border-white/10 text-white' : 'bg-white border-slate-200 text-slate-700'}`}>
            <span>Interagir</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronRight size={16} className={isDark ? 'text-neon' : 'text-[#0055a4]'} />
            </motion.div>
          </div>
        ) : (
          <div className="flex gap-2">
            {!isDesktop && (
              <button 
                onClick={(e) => { e.stopPropagation(); closeMobile(); }}
                className={`flex-1 py-3 rounded-xl border flex flex-col items-center justify-center text-[10px] font-bold uppercase tracking-widest ${isDark ? 'bg-[#242526] border-white/10 text-white hover:bg-white/5' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'}`}
              >
                <X size={18} className="mb-1" />
                Fechar
              </button>
            )}
            <button 
              onClick={(e) => {
                 e.stopPropagation();
                 const contactSection = document.getElementById('contact');
                 if(contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                    closeMobile();
                 }
              }}
              className={`flex-1 py-3 rounded-xl border flex flex-col items-center justify-center text-[10px] font-bold uppercase tracking-widest ${isDark ? 'bg-neon border-neon text-chumbo' : 'bg-[#0055a4] border-[#0055a4] text-white'}`}
            >
              <Mail size={18} className="mb-1" />
              Email
            </button>
            <button 
              className={`flex-1 py-3 rounded-xl border flex flex-col items-center justify-center text-[10px] font-bold uppercase tracking-widest ${isDark ? 'bg-neon border-neon text-chumbo' : 'bg-[#0055a4] border-[#0055a4] text-white'}`}
            >
              <Phone size={18} className="mb-1" />
              Ligar
            </button>
          </div>
        )}
      </div>
      
      {/* Edge Highlights */}
      <div className={`absolute inset-0 rounded-[2rem] border-2 pointer-events-none z-20 ${isDark ? 'border-white/5' : 'border-black/5'}`} style={{ transform: "translateZ(1px)" }} />
    </div>
  );

  return (
    <>
      {/* Mobile Modal Overlay */}
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
              onClick={() => closeMobile()}
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
                      ? 'w-6 bg-neon' 
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
              <div className={`text-xs font-bold px-4 py-2.5 rounded-xl whitespace-nowrap border flex items-center gap-2 ${isDark ? 'bg-slate-900 text-white shadow-[0_0_20px_rgba(57,255,20,0.2)] border-white/10' : 'bg-white text-slate-800 shadow-lg border-slate-200'}`}>
                <span className={`w-2 h-2 rounded-full animate-pulse ${isDark ? 'bg-neon' : 'bg-[#0055a4]'}`} />
                {state === 'closed' ? 'Clique para interagir com o robô' : 'Clique para recolher o painel'}
              </div>
              <div className={cn(
                "w-2.5 h-2.5 transform rotate-45 absolute left-1/2 -translate-x-1/2",
                state === 'closed' ? "border-b border-r -bottom-[5px]" : "border-t border-l -top-[5px]",
                isDark ? 'bg-slate-900 border-white/10' : 'bg-white border-slate-200'
              )} />
            </div>

            {/* Dynamic Hover Drop Shadow */}
            <div 
              style={{ transform: "translateZ(-20px)" }}
              className={`absolute inset-0 top-0 blur-[50px] rounded-3xl opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 z-10 pointer-events-none ${isDark ? 'bg-neon/30' : 'bg-[#0055a4]/20'}`} 
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
