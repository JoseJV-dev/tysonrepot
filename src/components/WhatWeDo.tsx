import { motion } from 'motion/react';
import { Users, Code, Lightbulb, ArrowRight } from 'lucide-react';

export function WhatWeDo() {
  const items = [
    {
      id: 'pessoas',
      title: 'DESENVOLVEMOS PESSOAS',
      desc: 'Educação e formação.',
      icon: Users
    },
    {
      id: 'tecnologia',
      title: 'DESENVOLVEMOS TECNOLOGIA',
      desc: 'Aplicações, websites e plataformas.',
      icon: Code
    },
    {
      id: 'solucoes',
      title: 'DESENVOLVEMOS SOLUÇÕES',
      desc: 'Projetos tecnológicos e serviços para empresas e instituições.',
      icon: Lightbulb
    }
  ];

  return (
    <div className="mt-32 pt-20 border-t border-slate-200 dark:border-white/10" id="fazemos">
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/2 flex flex-col gap-6"
        >
          <h2 className="text-azul dark:text-neon font-bold tracking-widest text-sm uppercase">O que a Vetor Zero faz?</h2>
          <h3 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight">
            Da formação de uma criança à digitalização de um restaurante.
          </h3>
          <p className="text-xl text-slate-800 dark:text-white/80 font-medium">
            Da gestão de uma rede elétrica à aprendizagem gamificada.
          </p>
          <p className="text-slate-700 dark:text-white/60 leading-relaxed max-w-lg">
            A Vetor Zero desenvolve experiências educativas, produtos digitais e soluções tecnológicas para pessoas, instituições e empresas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a href="#solucoes" className="bg-neon text-chumbo px-6 py-3 rounded-full font-bold uppercase tracking-widest text-sm shadow-[0_0_20px_var(--theme-neon)] hover:scale-105 transition-transform text-center">
              Explorar Soluções
            </a>
            <a href="#contact" className="border border-slate-200 dark:border-white/20 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 px-6 py-3 rounded-full font-bold uppercase tracking-widest text-sm transition-colors text-center">
              Falar Connosco
            </a>
          </div>
        </motion.div>

        <div className="lg:w-1/2 flex flex-col gap-6 w-full">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-[#242526] p-6 rounded-2xl border border-slate-200 dark:border-white/5 flex items-center gap-6 hover:border-azul/30 dark:hover:border-neon/30 transition-colors group"
              >
                <div className="w-16 h-16 rounded-full bg-slate-50 dark:bg-[#1A1A1D] border border-slate-200 dark:border-white/10 flex items-center justify-center text-azul dark:text-neon shrink-0 group-hover:shadow-[0_0_15px_rgba(0,85,164,0.2) dark:group-hover:shadow-[0_0_15px_rgba(57,255,20,0.2)]] transition-shadow">
                  <Icon className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-lg font-black tracking-wide text-slate-900 dark:text-white">{item.title}</h4>
                  <p className="text-slate-700 dark:text-white/60 mt-1">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
