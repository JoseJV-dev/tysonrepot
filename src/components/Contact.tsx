import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export function Contact() {
  return (
    <div className="mt-32 pt-20 border-t border-slate-200 dark:border-white/10 pb-20" id="contact">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-slate-50 to-white dark:from-[#242526] dark:to-[#1A1A1D] rounded-[3rem] p-12 md:p-20 text-center border border-azul/20 dark:border-neon/20 relative overflow-hidden"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-1 bg-gradient-to-r from-transparent via-azul dark:via-neon to-transparent opacity-50" />
        
        <div className="flex flex-col items-center gap-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-tight text-slate-900 dark:text-white">
            Tem uma ideia? <br />
            Quer aprender? <br />
            Precisa de uma solução?
          </h2>
          
          <p className="text-xl md:text-2xl font-bold text-azul dark:text-neon mt-4 mb-8">
            VAMOS CRIAR A PRIMEIRA FÓRMULA JUNTOS.
          </p>
          <a href="#" className="bg-azul dark:bg-neon text-white dark:text-chumbo hover:bg-azul/90 dark:hover:bg-white px-8 py-5 rounded-full font-black uppercase tracking-widest text-sm shadow-[0_0_30px_rgba(0,85,164,0.3)] dark:shadow-[0_0_30px_rgba(57,255,20,0.3)] hover:shadow-[0_0_40px_rgba(0,85,164,0.5)] dark:hover:shadow-[0_0_40px_rgba(57,255,20,0.5)] transition-all flex items-center gap-3 group">
            <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Falar no WhatsApp
          </a>
        </div>
        
        {/* Glow effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[radial-gradient(ellipse_at_center,rgba(0,85,164,0.05)_0%,transparent_50%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(57,255,20,0.05)_0%,transparent_50%)] pointer-events-none" />
      </motion.div>
    </div>
  );
}
