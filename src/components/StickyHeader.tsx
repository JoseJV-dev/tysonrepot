import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from './ThemeProvider';
import { ThemeToggle } from './ThemeToggle';

export function StickyHeader() {
  const [isVisible, setIsVisible] = useState(false);
  const [isRobotOpen, setIsRobotOpen] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      // Show header when scrolled past the intro screen
      if (window.scrollY > window.innerHeight * 0.8) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const handleRobotState = (e: Event) => {
      const customEvent = e as CustomEvent;
      setIsRobotOpen(customEvent.detail.isOpen);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('robotStateChange', handleRobotState);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('robotStateChange', handleRobotState);
    };
  }, []);

  return (
    <AnimatePresence>
      {(isVisible && !isRobotOpen) && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed top-4 left-0 right-0 z-[90] flex justify-center px-4"
        >
          <div className={`w-full max-w-[1400px] flex justify-between items-center px-6 py-3 rounded-[24px] shadow-lg border ${theme === 'dark' ? 'bg-[#242526]/90 border-white/10' : 'bg-white/90 border-black/10'} backdrop-blur-md`}>
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Vetor Zero" className="h-8 object-contain" />
              <span className="font-bold text-base md:text-lg tracking-tight hidden sm:block">VETOR ZERO</span>
            </div>
            <div className="flex items-center gap-4">
              <button className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-colors ${theme === 'dark' ? 'bg-white text-black hover:bg-gray-200' : 'bg-[#2D2D2A] text-white hover:bg-black'}`}>
                Agendar Reunião
              </button>
              <ThemeToggle />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
