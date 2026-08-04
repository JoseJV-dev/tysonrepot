import { motion, useInView } from 'motion/react';
import React, { useRef } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  yOffset?: number;
}

export function ScrollReveal({ children, delay = 0, yOffset = 50 }: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: yOffset }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}
