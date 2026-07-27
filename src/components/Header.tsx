import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#030b14]/80 backdrop-blur-md border-b border-[#0055a4]/20 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          {/* Logo Hexagon Small */}
          <svg width="30" height="30" viewBox="0 0 100 110">
            <polygon 
              points="50,5 95,30 95,80 50,105 5,80 5,30" 
              fill="transparent" 
              stroke="#00a8ff" 
              strokeWidth="6"
              strokeLinejoin="round"
            />
            <path 
              d="M 30 45 L 50 80 L 70 45 L 60 45 L 50 65 L 40 45 Z" 
              fill="#ffffff" 
            />
            <path 
              d="M 45 45 L 55 45 L 50 35 Z" 
              fill="#00a8ff" 
            />
          </svg>
          <div className="font-bold tracking-tight text-lg leading-none">
            VETOR ZERO
            <div className="text-[8px] text-[#00a8ff] uppercase tracking-widest mt-0.5">Educação e Tecnologia</div>
          </div>
        </motion.div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          {[
            { label: 'Início', id: '#' },
            { label: 'Vantagens', id: 'features' }
          ].map((item, i) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="hover:text-white hover:text-shadow-glow transition-all"
            >
              {item.label}
            </motion.a>
          ))}
          <motion.a
            href="mailto:vetorzero@example.com"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="px-5 py-2 rounded-full bg-[#0055a4] hover:bg-[#00a8ff] text-white transition-colors"
          >
            Fale Connosco
          </motion.a>
        </nav>
      </div>
    </header>
  );
}
