/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Publications } from './components/Publications';
import { Contact } from './components/Contact';
import { HeroLeft } from './components/HeroLeft';
import { VideoStyleRight } from './components/VideoStyleRight';
import { BackgroundElements } from './components/BackgroundElements';
import { RobotCard } from './components/RobotCard';
import { Projects } from './components/Projects';
import { PhysicsPlayground } from './components/PhysicsPlayground';
import { ThemeProvider } from './components/ThemeProvider';
import { Footer } from './components/Footer';
import { MobileFAB } from './components/MobileFAB';
import { ReactLenis } from 'lenis/react';
import { motion } from 'motion/react';
import { IntroScreen } from './components/IntroScreen';
import { StickyHeader } from './components/StickyHeader';

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ReactLenis root options={{ lerp: 0.05, smoothWheel: true }}>
        <div className="bg-chumbo text-branco font-sans selection:bg-neon selection:text-chumbo overflow-x-hidden relative transition-colors duration-300" id="home">
          
          <StickyHeader />
          <IntroScreen />
          
          <BackgroundElements />
          
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 pb-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 items-start mt-6" id="video-style">
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

        <Projects />
        <Skills />
        <Experience />
        <Publications />
        <PhysicsPlayground />
        <Contact />
      </div>
      
      <Footer />
      <MobileFAB />
    </div>
  </ReactLenis>
</ThemeProvider>
  );
}

