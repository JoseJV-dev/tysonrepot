import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Home, Briefcase, Phone, Plus, X, BookOpen } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export function MobileFAB() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

  const actions = [
    { id: 'contact', icon: Phone, label: 'Contato', href: '#contact' },
    { id: 'publications', icon: BookOpen, label: 'Publicações', href: '#publications' },
    { id: 'projects', icon: Briefcase, label: 'Projetos', href: '#projects' },
    { id: 'home', icon: Home, label: 'Início', href: '#home' },
  ];

  const handleToggle = () => setIsOpen(!isOpen);

  const isDark = theme === 'dark';

  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.2, staggerChildren: 0.05 }}
            className="flex flex-col items-end gap-3 mb-2"
          >
            {actions.map((action, index) => {
              const Icon = action.icon;
              return (
                <motion.a
                  key={action.id}
                  href={action.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: (actions.length - 1 - index) * 0.05 }}
                  className="flex items-center gap-3 group"
                >
                  <span className={`text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg ${
                    isDark ? "bg-[#0d1520] text-branco border border-branco/10" : "bg-white text-slate-800 border border-black/5"
                  }`}>
                    {action.label}
                  </span>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-transform active:scale-95 ${
                    isDark ? "bg-[#0d1520] border border-branco/10 text-neon" : "bg-white border border-black/5 text-azul"
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={handleToggle}
        whileTap={{ scale: 0.9 }}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,168,255,0.4)] transition-colors ${
          isDark ? "bg-azul text-white hover:bg-[#003a70]" : "bg-azul text-white hover:bg-[#003a70]"
        }`}
      >
        <motion.div
          animate={{ rotate: isOpen ? 135 : 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <Plus className="w-6 h-6" />
        </motion.div>
      </motion.button>
    </div>
  );
}
