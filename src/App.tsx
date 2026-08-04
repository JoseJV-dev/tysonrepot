import { WhatWeDo } from './components/WhatWeDo';
import { Challenges } from './components/Challenges';
import { Pillars } from './components/Pillars';
import { Products } from './components/Products';
import { Institutions } from './components/Institutions';
import { Impact } from './components/Impact';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { ThemeProvider } from './components/ThemeProvider';
import { Footer } from './components/Footer';
import { MobileFAB } from './components/MobileFAB';
import { ReactLenis } from 'lenis/react';
import { StickyHeader } from './components/StickyHeader';
import { BackgroundElements } from './components/BackgroundElements';
import { ScrollReveal } from './components/ScrollReveal';
import { IntroScreen } from './components/IntroScreen';
import { RobotCard } from './components/RobotCard';

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ReactLenis root options={{ lerp: 0.05, smoothWheel: true }}>
        <div className="bg-slate-50 dark:bg-[#1A1A1D] text-slate-900 dark:text-white font-sans selection:bg-neon selection:text-slate-900 overflow-x-hidden relative transition-colors duration-300" id="home">
          
          <StickyHeader />
          
          <BackgroundElements />
          
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 pb-10 relative z-10">
            
            <ScrollReveal yOffset={40}><About /></ScrollReveal>
            <ScrollReveal yOffset={40}><Contact /></ScrollReveal>
            <ScrollReveal yOffset={40}><IntroScreen /></ScrollReveal>
            
            <ScrollReveal yOffset={40}>
              <div className="flex justify-center py-10" id="robo">
                <RobotCard />
              </div>
            </ScrollReveal>
            
            <ScrollReveal yOffset={40}><WhatWeDo /></ScrollReveal>
            <ScrollReveal yOffset={40}><Challenges /></ScrollReveal>
            <ScrollReveal yOffset={40}><Pillars /></ScrollReveal>
            <ScrollReveal yOffset={40}><Products /></ScrollReveal>
            <ScrollReveal yOffset={40}><Institutions /></ScrollReveal>
            <ScrollReveal yOffset={40}><Impact /></ScrollReveal>
            <ScrollReveal yOffset={40}><Testimonials /></ScrollReveal>
            <ScrollReveal yOffset={40}><FAQ /></ScrollReveal>
            
          </div>
          
          <Footer />
          <MobileFAB />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
