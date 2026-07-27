/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HeroLeft } from './components/HeroLeft';
import { VideoStyleRight } from './components/VideoStyleRight';
import { BackgroundElements } from './components/BackgroundElements';
import { RobotCard } from './components/RobotCard';
import { ThemeProvider } from './components/ThemeProvider';
import { ThemeToggle } from './components/ThemeToggle';
import { NavMenu } from './components/NavMenu';
import { Footer } from './components/Footer';
import { ReactLenis } from 'lenis/react';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ReactLenis root options={{ lerp: 0.05, smoothWheel: true }}>
        <div className="min-h-screen bg-chumbo text-branco font-sans selection:bg-neon selection:text-chumbo overflow-x-hidden relative transition-colors duration-300" id="home">
          
          {/* Scroll Progress Bar */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-neon z-50 origin-left drop-shadow-[0_0_10px_rgba(204,255,0,0.8)]"
            style={{ scaleX }}
          />

          <BackgroundElements />
          
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-10 relative z-10">
            <header className="mb-16 flex items-center justify-between gap-6 relative z-50">
               {/* Logo */}
               <div className="flex items-center gap-4">
                 <div className="relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 shrink-0">
                   <svg viewBox="0 0 100 100" className="w-full h-full text-neon drop-shadow-[0_0_10px_rgba(204,255,0,0.3)]">
                     <path d="M 18 40 A 35 35 0 0 0 82 40" stroke="currentColor" strokeWidth="10" fill="none" strokeLinecap="round" />
                     <path d="M 5 20 L 95 20 L 50 85 Z M 30 35 L 70 35 L 50 65 Z" fill="currentColor" fillRule="evenodd" />
                     <rect x="12" y="20" width="4" height="20" fill="currentColor" />
                     <circle cx="14" cy="44" r="6" fill="currentColor" />
                   </svg>
                 </div>
                 <div className="flex flex-col pt-1">
                   <div className="flex items-center gap-2 text-xl md:text-3xl font-black tracking-widest leading-none">
                     <span className="text-neon">VETOR</span>
                     <span className="text-branco">ZERO</span>
                   </div>
                   <div className="h-[2px] w-full bg-azul my-1.5 opacity-80"></div>
                   <p className="text-[8px] md:text-[10px] tracking-[0.3em] text-azul uppercase font-bold text-center">A primeira fórmula</p>
                 </div>
               </div>
               
               {/* Navigation and Theme Toggle */}
               <div className="flex items-center gap-6">
                 <NavMenu />
                 <ThemeToggle />
               </div>
            </header>

        <div className="grid lg:grid-cols-2 gap-20 lg:gap-8 items-start" id="video-style">
           <HeroLeft />
           <VideoStyleRight />
        </div>

        {/* Secção do Cartão Robô */}
        <motion.div 
          id="robot-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-32 pt-20 border-t border-branco/10 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-azul/30 bg-azul/10 text-xs font-bold tracking-widest text-neon mb-8 backdrop-blur-sm uppercase">
            Cartão de Visita • Formato Robô
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4 text-center">
            O futuro da educação <br className="hidden md:block"/> começa com uma ideia.
          </h2>
          <p className="text-branco/60 mb-12 text-center max-w-2xl">
            Abra. Conecte. Transforme. Um formato compacto que desperta curiosidade e revela todo o nosso potencial tecnológico.
          </p>
          
          <RobotCard />
        </motion.div>
      </div>
      
      <Footer />
    </div>
  </ReactLenis>
</ThemeProvider>
  );
}

