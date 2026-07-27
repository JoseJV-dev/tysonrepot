import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

  const menuItems = [
    { label: 'Início', href: '#home' },
    { label: 'Sobre a Série', href: '#video-style' },
    { label: 'Cartão Robô', href: '#robot-card' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Playground', href: '#physics-playground' },
  ];

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
        {menuItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={(e) => handleScroll(e, item.href)}
            className="text-sm font-bold tracking-widest uppercase text-branco/60 hover:text-neon transition-colors duration-300 relative group"
          >
            {item.label}
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-neon transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
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
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className={`text-lg font-black tracking-widest uppercase transition-colors duration-300 ${theme === 'dark' ? 'text-white hover:text-neon' : 'text-slate-900 hover:text-azul'}`}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
