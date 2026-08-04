import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, X, ChevronRight, Smartphone, Server, Zap, ChevronLeft, BookOpen } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export function RobotCard() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const { theme } = useTheme();

  const slides = [
    {
      id: 'atl',
      title: 'ATL EM CASA',
      desc: 'Ciência e Tecnologia para o futuro de seu filho.',
      icon: BookOpen
    },
    {
      id: 'kina',
      title: 'KINA SERVICE',
      desc: 'Digitalização de restaurantes e menus.',
      icon: Smartphone
    },
    {
      id: 'grid',
      title: 'VETOR GRID',
      desc: 'Gestão Inteligente da Rede Elétrica.',
      icon: Server
    },
    {
      id: 'bolt',
      title: 'BOLT',
      desc: 'O assistente virtual académico gamificado.',
      icon: Zap
    }
  ];

  const handleToggle = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    const event = new CustomEvent('robotStateChange', { detail: { isOpen: newState } });
    window.dispatchEvent(event);
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-full min-h-[400px] flex items-center justify-center">
      {/* Closed State */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        onClick={handleToggle}
        className="relative w-full max-w-sm aspect-square bg-[#1A1A1D] rounded-[3rem] p-8 cursor-pointer group shadow-[0_0_30px_rgba(57,255,20,0.1)] hover:shadow-[0_0_50px_rgba(57,255,20,0.2)] transition-shadow border border-white/5 flex flex-col items-center justify-center overflow-hidden z-10"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-neon/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <div className="relative z-10 flex flex-col items-center gap-6">
          <div className="w-24 h-24 rounded-full bg-[#242526] border border-white/10 flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)]">
            <Terminal className="w-10 h-10 text-neon" />
          </div>
          
          <div className="text-center">
            <p className="text-neon font-bold tracking-widest text-sm uppercase mb-2">Sistema Online</p>
            <h3 className="text-white text-2xl font-black">Conhecer Soluções</h3>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-8 left-8 w-2 h-2 rounded-full bg-neon animate-pulse" />
        <div className="absolute bottom-8 right-8 w-12 h-1 rounded-full bg-white/10" />
      </motion.div>

      {/* Expanded Modal State */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={handleToggle}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-[#1A1A1D] w-full max-w-md rounded-[2.5rem] p-8 border border-white/10 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleToggle}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#242526] flex items-center justify-center text-white/50 hover:text-white transition-colors border border-white/10"
              >
                <X className="w-5 h-5" />
              </button>

              <h2 className="text-neon font-black text-xl tracking-widest uppercase mb-8 border-b border-white/10 pb-4 inline-block">
                Nossas Soluções
              </h2>

              <div className="relative min-h-[250px] flex items-center justify-center">
                <button 
                  onClick={prevSlide}
                  className="absolute left-[-1.5rem] w-10 h-10 rounded-full bg-[#242526] flex items-center justify-center text-white border border-white/10 z-10 hover:bg-neon hover:text-black transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSlide}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col items-center text-center w-full px-4"
                  >
                    <div className="w-20 h-20 rounded-2xl bg-neon/10 border border-neon/20 flex items-center justify-center text-neon mb-6">
                      {(() => {
                        const Icon = slides[activeSlide].icon;
                        return <Icon className="w-10 h-10" />;
                      })()}
                    </div>
                    <h3 className="text-white font-black text-2xl uppercase tracking-wide mb-3">
                      {slides[activeSlide].title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed max-w-[250px] mx-auto">
                      {slides[activeSlide].desc}
                    </p>
                  </motion.div>
                </AnimatePresence>

                <button 
                  onClick={nextSlide}
                  className="absolute right-[-1.5rem] w-10 h-10 rounded-full bg-[#242526] flex items-center justify-center text-white border border-white/10 z-10 hover:bg-neon hover:text-black transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="flex justify-center gap-2 mt-8">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    className={`h-2 rounded-full transition-all ${
                      idx === activeSlide ? 'w-8 bg-neon' : 'w-2 bg-white/20'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
