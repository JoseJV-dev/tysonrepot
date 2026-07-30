import { motion } from 'motion/react';
import React, { useEffect, useState } from 'react';
import { useTheme } from './ThemeProvider';

const formulas = [
  "E = mc²",
  "∇ × B = μ₀J + μ₀ε₀(∂E/∂t)",
  "iℏ(∂Ψ/∂t) = HΨ",
  "e^(iπ) + 1 = 0",
  "∫₀^∞ e^{-x²} dx = √π/2"
];

const symbols = ["∑", "π", "∞", "∫", "ℏ"];

const lightnings = [
  "M -100 200 L 200 200 L 300 300 L 600 300 L 700 400 L 1100 400",
  "M 300 -100 L 300 200 L 200 300 L 200 600 L 400 800 L 400 1100",
  "M 1100 600 L 800 600 L 700 700 L 400 700 L 300 800 L -100 800",
  "M 800 1100 L 800 800 L 900 700 L 900 400 L 700 200 L 700 -100",
  "M 100 100 L 200 100 L 250 150 L 250 300 L 350 400",
  "M 900 900 L 800 900 L 750 850 L 750 700 L 650 600"
];

interface AnimatedLightningProps {
  path: string;
  delay: number;
  theme: string;
}

const AnimatedLightning: React.FC<AnimatedLightningProps> = ({ path, delay, theme }) => {
  return (
    <motion.path
      d={path}
      fill="transparent"
      stroke={theme === 'dark' ? '#ccff00' : '#0055ff'}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0, pathOffset: 0, opacity: 0 }}
      animate={{ 
        pathLength: [0, 0.4, 0],
        pathOffset: [0, 0.6, 1],
        opacity: [0, 1, 0]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatDelay: delay,
        ease: "linear"
      }}
      style={{ filter: `drop-shadow(0 0 10px ${theme === 'dark' ? '#ccff00' : '#0055ff'})` }}
    />
  );
};

export function BackgroundElements() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-fixed">
      {/* Static Glows (using CSS instead of JS animation for better performance) */}
      <div 
        className={`absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full blur-[120px] bg-azul ${theme === 'dark' ? 'opacity-[0.10]' : 'opacity-[0.03]'}`} 
      />
      <div 
        className={`absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full blur-[120px] bg-neon ${theme === 'dark' ? 'opacity-[0.05]' : 'opacity-[0.02]'}`} 
      />
      
      {/* Floating Formulas - Drastically reduced for performance */}
      {formulas.slice(0, 4).map((formula, i) => {
        const randomX = (i * 25) + Math.random() * 10;
        const randomDelay = i * 5;
        const randomDuration = 40 + (i * 10);
        const fontSize = i % 2 === 0 ? 'text-2xl' : 'text-xl';
        const opacity = theme === 'dark' ? 0.15 : 0.05;
        
        return (
          <motion.div
            key={`formula-${i}`}
            initial={{ y: "110vh", opacity: 0, x: `${randomX}vw` }}
            animate={{ 
              y: "-20vh", 
              opacity: [0, opacity, opacity, 0],
            }}
            transition={{ 
              duration: randomDuration, 
              repeat: Infinity, 
              delay: randomDelay,
              ease: "linear" 
            }}
            className={`absolute ${fontSize} font-mono font-bold whitespace-nowrap ${theme === 'dark' ? 'text-white' : 'text-black'}`}
          >
            {formula}
          </motion.div>
        );
      })}

      {/* Floating Math Symbols - Drastically reduced for performance */}
      {symbols.slice(0, 4).map((symbol, i) => {
        const randomX = 10 + (i * 20) + Math.random() * 10;
        const randomDelay = i * 6;
        const randomDuration = 35 + (i * 15);
        const fontSize = i % 2 === 0 ? 'text-5xl' : 'text-3xl';
        const opacity = theme === 'dark' ? 0.08 : 0.03;

        return (
          <motion.div
            key={`symbol-${i}`}
            initial={{ y: "110vh", opacity: 0, x: `${randomX}vw`, rotate: 0 }}
            animate={{ 
              y: "-20vh", 
              opacity: [0, opacity, opacity, 0],
              rotate: 360
            }}
            transition={{ 
              y: { duration: randomDuration, repeat: Infinity, delay: randomDelay, ease: "linear" },
              opacity: { duration: randomDuration, repeat: Infinity, delay: randomDelay, ease: "linear" },
              rotate: { duration: randomDuration * 3, repeat: Infinity, delay: randomDelay, ease: "linear" }
            }}
            className={`absolute ${fontSize} font-serif font-black ${theme === 'dark' ? 'text-neon' : 'text-azul'}`}
          >
            {symbol}
          </motion.div>
        );
      })}

      {/* Static Circuit pattern (No JS animation to prevent lag) */}
      <svg 
        className={`absolute inset-0 w-full h-full ${theme === 'dark' ? 'opacity-[0.03]' : 'opacity-[0.02]'}`} 
        xmlns="http://www.w3.org/2000/svg"
      >
        <pattern id="circuit" width="120" height="120" patternUnits="userSpaceOnUse">
          <path d="M10 10h100v100h-100z" fill="none" stroke="currentColor" strokeWidth="0.5" className={theme === 'dark' ? 'text-white' : 'text-black'}/>
          <circle cx="10" cy="10" r="2" fill="currentColor" className={theme === 'dark' ? 'text-neon' : 'text-azul'}/>
          <circle cx="110" cy="110" r="2" fill="currentColor" className={theme === 'dark' ? 'text-neon' : 'text-azul'}/>
          <circle cx="110" cy="10" r="2" fill="currentColor" className={theme === 'dark' ? 'text-neon' : 'text-azul'}/>
          <circle cx="10" cy="110" r="2" fill="currentColor" className={theme === 'dark' ? 'text-neon' : 'text-azul'}/>
          <path d="M10 110h50l40-40" fill="none" stroke="currentColor" strokeWidth="1" className={theme === 'dark' ? 'text-white' : 'text-black'}/>
          <path d="M110 10h-40l-20 30v60" fill="none" stroke="currentColor" strokeWidth="1" className={theme === 'dark' ? 'text-white' : 'text-black'}/>
          <path d="M60 60 l20 -20" fill="none" stroke="currentColor" strokeWidth="1" className={theme === 'dark' ? 'text-neon' : 'text-azul'}/>
        </pattern>
        <rect width="100%" height="100%" fill="url(#circuit)"/>
      </svg>

      {/* Dynamic Lightning Circuits */}
      <svg className={`absolute inset-0 w-full h-full pointer-events-none ${theme === 'dark' ? 'opacity-30' : 'opacity-20'}`} viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
        {lightnings.map((path, i) => (
          <AnimatedLightning key={`lightning-${i}`} path={path} delay={i * 1.5 + Math.random() * 2} theme={theme} />
        ))}
      </svg>
    </div>
  );
}
