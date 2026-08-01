import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from './ThemeProvider';
import { NavMenu } from './NavMenu';

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
          <div className={`w-full max-w-[1400px] flex justify-between items-center px-6 py-3 rounded-[24px] shadow-lg border ${theme === 'dark' ? 'bg-[#242526]/90 border-white/10' : 'bg-white/90 border-slate-200'} backdrop-blur-md`}>
            
            <div className="flex items-center gap-3">
              {/* VETOR ZERO LOGO SVG */}
              <svg width="24" height="24" viewBox="0 0 100 110" className="shrink-0">
                <polygon 
                  points="50,5 95,30 95,80 50,105 5,80 5,30" 
                  fill="transparent" 
                  stroke="#00a8ff" 
                  strokeWidth="8"
                  strokeLinejoin="round"
                />
                <path 
                  d="M 30 45 L 50 80 L 70 45 L 60 45 L 50 65 L 40 45 Z" 
                  fill={theme === 'dark' ? '#ffffff' : '#1A1A1D'} 
                />
              </svg>
              <span className={`font-bold text-base md:text-lg tracking-tight hidden lg:block uppercase ${theme === 'dark' ? 'text-white' : 'text-chumbo'}`}>VETOR ZERO</span>
            </div>

            <NavMenu />

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
