import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const menuItems = [
  { label: 'Início', href: '#home' },
  { label: 'Cartão Robô', href: '#robot-card' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Habilidades', href: '#skills' },
  { label: 'Trajetória', href: '#experience' },
  { label: 'Publicações', href: '#publications' },
  { label: 'Contato', href: '#contact' },
];

export function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme } = useTheme();

  useEffect(() => {
    const handleScrollEvent = () => {
      const sections = menuItems.map(item => item.href.substring(1));
      let current = 'home';

      if (window.scrollY > 100) {
        for (const section of sections) {
          if (section === 'home') continue;
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            // Check if element is in viewport with offset for header
            if (rect.top <= 200) {
              current = section;
            }
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScrollEvent);
    // Call once to set initial state
    handleScrollEvent();
    
    return () => window.removeEventListener('scroll', handleScrollEvent);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center gap-8">
        {menuItems.map((item) => {
          const sectionId = item.href.substring(1);
          const isActive = activeSection === sectionId;
          
          return (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className={`text-sm font-bold tracking-widest uppercase transition-colors duration-300 relative group ${
                isActive 
                  ? (theme === 'dark' ? 'text-neon' : 'text-azul') 
                  : 'text-branco/60 hover:text-neon'
              }`}
            >
              {item.label}
              <span className={`absolute -bottom-2 left-0 h-0.5 transition-all duration-300 ${
                isActive ? 'w-full' : 'w-0 group-hover:w-full'
              } ${theme === 'dark' ? 'bg-neon' : 'bg-azul'}`}></span>
            </a>
          );
        })}
      </nav>

      {/* Mobile Menu Toggle */}
      <button 
        className="md:hidden p-2 text-branco hover:text-neon transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`absolute top-full left-0 right-0 p-6 flex flex-col gap-6 shadow-2xl z-50 border-b ${theme === 'dark' ? 'bg-[#0d1520] border-white/10' : 'bg-white border-black/10'}`}
          >
            {menuItems.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className={`text-lg font-black tracking-widest uppercase transition-colors duration-300 ${
                    isActive
                      ? (theme === 'dark' ? 'text-neon' : 'text-azul')
                      : (theme === 'dark' ? 'text-white hover:text-neon' : 'text-slate-900 hover:text-azul')
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
