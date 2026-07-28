import React from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export function Contact() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="flex flex-col items-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-azul/30 bg-azul/10 text-xs font-bold tracking-widest text-neon mb-6 uppercase backdrop-blur-sm shadow-[0_0_15px_rgba(0,85,255,0.2)]">
          Conexão
        </div>
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4 text-center">
          Vamos Conversar
        </h2>
        <p className={`max-w-2xl text-center ${isDark ? 'text-branco/60' : 'text-slate-600'}`}>
          Tem um projeto em mente ou apenas quer dizer olá? Entre em contato e vamos construir algo incrível juntos.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Informações de Contato */}
        <div className="flex flex-col justify-center gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`p-6 rounded-2xl border ${isDark ? 'border-white/10 bg-[#0d1520]' : 'border-black/5 bg-white'} shadow-xl flex items-center gap-6`}
          >
            <div className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 ${isDark ? 'bg-chumbo text-neon border border-white/10' : 'bg-slate-100 text-azul border border-black/5'}`}>
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm font-bold tracking-widest uppercase mb-1 opacity-70">Email</h3>
              <p className="text-lg font-medium">contato@exemplo.com</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`p-6 rounded-2xl border ${isDark ? 'border-white/10 bg-[#0d1520]' : 'border-black/5 bg-white'} shadow-xl flex items-center gap-6`}
          >
            <div className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 ${isDark ? 'bg-chumbo text-neon border border-white/10' : 'bg-slate-100 text-azul border border-black/5'}`}>
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm font-bold tracking-widest uppercase mb-1 opacity-70">Telefone</h3>
              <p className="text-lg font-medium">+55 11 99999-9999</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`p-6 rounded-2xl border ${isDark ? 'border-white/10 bg-[#0d1520]' : 'border-black/5 bg-white'} shadow-xl flex items-center gap-6`}
          >
            <div className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 ${isDark ? 'bg-chumbo text-neon border border-white/10' : 'bg-slate-100 text-azul border border-black/5'}`}>
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm font-bold tracking-widest uppercase mb-1 opacity-70">Localização</h3>
              <p className="text-lg font-medium">São Paulo, SP - Brasil</p>
            </div>
          </motion.div>
        </div>

        {/* Formulário */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`p-8 rounded-3xl border ${isDark ? 'border-white/10 bg-[#0d1520]' : 'border-black/5 bg-white'} shadow-2xl`}
        >
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-bold ml-2">Nome</label>
              <input 
                type="text" 
                id="name" 
                placeholder="Seu nome completo" 
                className={`w-full px-5 py-4 rounded-xl border outline-none transition-all ${isDark ? 'bg-chumbo border-white/10 focus:border-neon placeholder:text-branco/30' : 'bg-slate-50 border-black/10 focus:border-azul placeholder:text-slate-400'}`} 
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-bold ml-2">Email</label>
              <input 
                type="email" 
                id="email" 
                placeholder="seu.email@exemplo.com" 
                className={`w-full px-5 py-4 rounded-xl border outline-none transition-all ${isDark ? 'bg-chumbo border-white/10 focus:border-neon placeholder:text-branco/30' : 'bg-slate-50 border-black/10 focus:border-azul placeholder:text-slate-400'}`} 
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-bold ml-2">Mensagem</label>
              <textarea 
                id="message" 
                rows={4} 
                placeholder="Como posso ajudar?" 
                className={`w-full px-5 py-4 rounded-xl border outline-none transition-all resize-none ${isDark ? 'bg-chumbo border-white/10 focus:border-neon placeholder:text-branco/30' : 'bg-slate-50 border-black/10 focus:border-azul placeholder:text-slate-400'}`} 
              ></textarea>
            </div>
            
            <button className={`w-full py-4 rounded-xl font-black uppercase tracking-widest flex items-center justify-center gap-3 transition-transform active:scale-95 shadow-xl ${isDark ? 'bg-neon text-chumbo hover:shadow-[0_0_20px_rgba(204,255,0,0.4)]' : 'bg-azul text-white hover:shadow-[0_0_20px_rgba(0,85,255,0.4)]'}`}>
              <span>Enviar Mensagem</span>
              <Send className="w-5 h-5" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
