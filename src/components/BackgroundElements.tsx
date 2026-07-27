import { motion } from 'motion/react';
import { useTheme } from './ThemeProvider';
import { useEffect, useState } from 'react';

const formulas = [
  "E = mc²",
  "F = ma",
  "∇ × B = μ₀J + μ₀ε₀(∂E/∂t)",
  "iℏ(∂Ψ/∂t) = HΨ",
  "e^(iπ) + 1 = 0",
  "∫₀^∞ e^{-x²} dx = √π/2",
  "S = k_B ln Ω",
  "R_μν - 1/2 R g_μν = (8πG/c^4) T_μν",
  "Δp Δx ≥ ℏ/2",
  "V = IR",
  "F = G(m₁m₂/r²)",
  "PV = nRT",
  "a² + b² = c²",
  "lim(x→0) sin(x)/x = 1",
  "f'(x) = lim(h→0) (f(x+h) - f(x))/h",
  "A = πr²"
];

const symbols = ["∑", "π", "∞", "Δ", "∫", "λ", "Ω", "θ", "μ", "ℏ", "φ", "ψ", "∇"];

export function BackgroundElements() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      {/* Dynamic Glows */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: theme === 'dark' ? [0.15, 0.25, 0.15] : [0.05, 0.1, 0.05],
          x: [0, 50, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-azul rounded-full blur-[120px]" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: theme === 'dark' ? [0.05, 0.15, 0.05] : [0.02, 0.08, 0.02],
          x: [0, -40, 0],
          y: [0, -50, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-neon rounded-full blur-[120px]" 
      />
      
      {/* Floating Formulas */}
      {[...formulas, ...formulas].map((formula, i) => {
        const randomX = Math.random() * 100;
        const randomDelay = Math.random() * 20;
        const randomDuration = 15 + Math.random() * 25;
        const fontSize = Math.random() > 0.8 ? 'text-4xl' : Math.random() > 0.4 ? 'text-2xl' : 'text-xl';
        const opacity = Math.random() > 0.5 ? 0.3 : 0.1;
        
        return (
          <motion.div
            key={`formula-${i}`}
            initial={{ y: "110vh", opacity: 0, x: `${randomX}vw` }}
            animate={{ 
              y: "-20vh", 
              opacity: [0, opacity, opacity, 0],
              rotate: [0, Math.random() * 30 - 15, Math.random() * 30 - 15],
              x: [`${randomX}vw`, `${randomX + (Math.random() * 10 - 5)}vw`]
            }}
            transition={{ 
              duration: randomDuration, 
              repeat: Infinity, 
              delay: randomDelay,
              ease: "linear" 
            }}
            className={`absolute ${fontSize} font-mono font-bold whitespace-nowrap ${theme === 'dark' ? 'text-white' : 'text-black'}`}
            style={{ filter: `blur(${Math.random() * 2}px)` }}
          >
            {formula}
          </motion.div>
        );
      })}

      {/* Floating Math Symbols */}
      {[...symbols, ...symbols, ...symbols].map((symbol, i) => {
        const randomX = Math.random() * 100;
        const randomDelay = Math.random() * 15;
        const randomDuration = 10 + Math.random() * 20;
        const fontSize = Math.random() > 0.7 ? 'text-6xl' : 'text-3xl';
        const opacity = Math.random() > 0.5 ? 0.2 : 0.05;

        return (
          <motion.div
            key={`symbol-${i}`}
            initial={{ y: "110vh", opacity: 0, x: `${randomX}vw`, rotate: 0 }}
            animate={{ 
              y: "-20vh", 
              opacity: [0, opacity, opacity, 0],
              rotate: 360,
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              y: { duration: randomDuration, repeat: Infinity, delay: randomDelay, ease: "linear" },
              opacity: { duration: randomDuration, repeat: Infinity, delay: randomDelay, ease: "linear" },
              rotate: { duration: randomDuration * 1.5, repeat: Infinity, delay: randomDelay, ease: "linear" },
              scale: { duration: randomDuration / 2, repeat: Infinity, delay: randomDelay, ease: "easeInOut" }
            }}
            className={`absolute ${fontSize} font-serif font-black ${theme === 'dark' ? 'text-neon' : 'text-azul'}`}
            style={{ filter: `blur(${Math.random() * 3}px)` }}
          >
            {symbol}
          </motion.div>
        );
      })}

      {/* Interactive/Animated Circuit pattern */}
      <motion.svg 
        animate={{ 
          opacity: theme === 'dark' ? [0.03, 0.06, 0.03] : [0.02, 0.05, 0.02],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 w-full h-full" 
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
      </motion.svg>
    </div>
  );
}
