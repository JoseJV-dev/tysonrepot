import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { ThemeToggle } from './ThemeToggle';

type MenuItem = {
  label: string;
  href: string;
  subItems?: { label: string; href: string }[];
};

const menuItems: MenuItem[] = [
  { label: 'Início', href: '#home' },
  { 
    label: 'O Que Fazemos', 
    href: '#desafios',
    subItems: [
      { label: 'Educação', href: '#educacao' },
      { label: 'Desenvolvimento Digital', href: '#digital' },
      { label: 'Projetos Tecnológicos', href: '#projetos-tec' },
      { label: 'Prestação de Serviços', href: '#servicos' }
    ]
  },
  { 
    label: 'Nossas Soluções', 
    href: '#solucoes',
    subItems: [
      { label: 'Kina Service', href: '#kina' },
      { label: 'Bolt', href: '#bolt' },
      { label: 'Soluções para Empresas', href: '#instituicoes' },
      { label: 'Projetos em Desenvolvimento', href: '#dev' }
    ]
  },
  { label: 'ATL em Casa', href: '#atl' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Sobre Nós', href: '#sobre' },
  { label: 'Contactos', href: '#contact' },
];

export function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isRobotOpen, setIsRobotOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
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
            if (rect.top <= 200) {
              current = section;
            }
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScrollEvent);
    handleScrollEvent();

    const handleRobotState = (e: Event) => {
      const customEvent = e as CustomEvent;
      setIsRobotOpen(customEvent.detail.isOpen);
      if (customEvent.detail.isOpen) setIsOpen(false);
    };

    window.addEventListener('robotStateChange', handleRobotState);

    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
      window.removeEventListener('robotStateChange', handleRobotState);
    };
  }, []);

  useEffect(() => {
    if (isOpen && !isRobotOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, isRobotOpen]);

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

  const toggleDropdown = (label: string, e: React.MouseEvent) => {
    e.preventDefault();
    setOpenDropdown(openDropdown === label ? null : label);
  };

  if (isRobotOpen && isOpen) {
    setIsOpen(false);
  }

  return (
    <div className="flex items-center gap-4">
      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center gap-6 lg:gap-8">
        {menuItems.map((item) => {
          const sectionId = item.href.substring(1);
          const isActive = activeSection === sectionId;
          const hasSubItems = !!item.subItems;
          
          return (
            <div key={item.label} className="relative group">
              <a
                href={item.href}
                onClick={(e) => hasSubItems ? undefined : handleScroll(e, item.href)}
                className={`flex items-center gap-1 text-[11px] lg:text-xs font-bold tracking-widest uppercase transition-colors duration-300 relative py-2 ${
                  isActive 
                    ? 'text-azul dark:text-neon' 
                    : 'text-slate-500 dark:text-white/60 hover:text-azul dark:hover:text-neon'
                }`}
              >
                {item.label}
                {hasSubItems && <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />}
                <span className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                  isActive ? 'w-full' : 'w-0 group-hover:w-full'
                } bg-azul dark:bg-neon`}></span>
              </a>

              {hasSubItems && (
                <div className="absolute top-full left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left group-hover:translate-y-0 translate-y-2 z-50">
                  <div className="bg-white dark:bg-[#1A1A1D] border border-slate-200 dark:border-white/10 rounded-xl p-2 shadow-xl">
                    {item.subItems?.map(subItem => (
                      <a
                        key={subItem.label}
                        href={subItem.href}
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                        className="block px-4 py-3 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-white/70 hover:text-azul dark:hover:text-neon hover:bg-slate-50 dark:hover:bg-white/5 rounded-lg transition-colors"
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
        <a 
          href="https://wa.me/244900000000" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white px-5 py-2.5 rounded-full font-bold uppercase tracking-wider text-xs flex items-center gap-2 hover:scale-105 transition-transform"
        >
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          Falar no WhatsApp
        </a>
      </nav>

      {/* Theme Toggle goes here */}
      <ThemeToggle />

      {/* Mobile Menu Toggle */}
      {!isRobotOpen && (
        <button 
          className="md:hidden p-2 text-slate-900 dark:text-white hover:text-azul dark:hover:text-neon transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      )}

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && !isRobotOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`absolute top-full left-0 right-0 p-6 flex flex-col gap-4 shadow-2xl z-50 border-b bg-white dark:bg-chumbo border-slate-200 dark:border-white/10 max-h-[80vh] overflow-y-auto`}
          >
            {menuItems.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              const hasSubItems = !!item.subItems;
              const isDropdownOpen = openDropdown === item.label;
              
              return (
                <div key={item.label} className="flex flex-col">
                  <a
                    href={item.href}
                    onClick={(e) => hasSubItems ? toggleDropdown(item.label, e) : handleScroll(e, item.href)}
                    className={`flex items-center justify-between text-lg font-black tracking-widest uppercase transition-colors duration-300 py-2 ${
                      isActive
                        ? 'text-azul dark:text-neon'
                        : 'text-slate-900 dark:text-white hover:text-azul dark:hover:text-neon'
                    }`}
                  >
                    {item.label}
                    {hasSubItems && (
                      <ChevronDown className={`w-5 h-5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    )}
                  </a>
                  
                  {hasSubItems && (
                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="flex flex-col gap-3 pl-4 py-3 border-l-2 border-slate-200 dark:border-white/10 mt-2">
                            {item.subItems?.map(subItem => (
                              <a
                                key={subItem.label}
                                href={subItem.href}
                                className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-white/60 hover:text-azul dark:hover:text-neon"
                                onClick={(e) => e.preventDefault()}
                              >
                                {subItem.label}
                              </a>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
            
            <a 
              href="https://wa.me/244900000000" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-6 bg-[#25D366] text-white p-4 rounded-xl font-bold uppercase tracking-widest text-center flex items-center justify-center gap-3"
            >
              <span className="w-3 h-3 rounded-full bg-white animate-pulse" />
              Falar no WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
