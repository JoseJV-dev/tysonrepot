import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Timer, Zap, Compass, BookOpen, Sun, Moon, Sunrise } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export function HeroLeft() {
  const { theme } = useTheme();
  
  return (
    <div className={`flex flex-col gap-6 lg:gap-8 h-full pt-10`}>
      {/* Title */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="text-5xl sm:text-7xl lg:text-[6rem] font-black leading-[0.9] tracking-tighter"
      >
        <span className="text-azul dark:text-neon" style={{ filter: "drop-shadow(0 0 15px var(--theme-neon))" }}>VETOR</span><br />
        <motion.span 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5, type: 'spring' }}
          className="text-slate-900 dark:text-white inline-block mt-2"
        >
          ZERO
        </motion.span>
      </motion.div>

      {/* Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="flex flex-col gap-6"
      >
        <p className="text-xl md:text-2xl text-slate-900 dark:text-white font-bold leading-snug tracking-widest uppercase">
          A Primeira Fórmula
        </p>
        
        <div className="flex flex-wrap items-center gap-2 text-azul dark:text-neon text-xs md:text-sm font-bold uppercase tracking-widest">
           Educação <span className="w-1.5 h-1.5 bg-chumbo/30 dark:bg-white/30 rounded-full mx-1" />
           Tecnologia <span className="w-1.5 h-1.5 bg-chumbo/30 dark:bg-white/30 rounded-full mx-1" />
           Soluções
        </div>

        <p className="text-base md:text-lg text-slate-800 dark:text-white/80 max-w-lg leading-relaxed mt-2 border-l-2 border-azul/50 pl-4">
          Da primeira experiência com um circuito ao desenvolvimento de uma plataforma digital. <br className="hidden md:block"/><br className="hidden md:block"/> A Vetor Zero transforma ideias, conhecimento e desafios reais em soluções para o futuro.
        </p>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-6">
          <a href="#solucoes" className="bg-azul dark:bg-neon text-white dark:text-chumbo px-6 py-4 rounded-full font-bold uppercase tracking-widest text-sm shadow-[0_0_20px_var(--theme-neon)] hover:scale-105 transition-transform text-center">
            Explorar Soluções
          </a>
          <a href="#contact" className="border border-slate-800/20 dark:border-white/20 text-slate-900 dark:text-white hover:bg-slate-800/10 dark:hover:bg-white/10 px-6 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-colors text-center">
            Falar Connosco
          </a>
        </div>
      </motion.div>
    </div>
  );
}
