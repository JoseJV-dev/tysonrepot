import { motion } from 'motion/react';
import { GraduationCap, Lightbulb, Building2, Wrench, ArrowRight } from 'lucide-react';

export function Challenges() {
  const challenges = [
    {
      id: 'aprender',
      title: 'QUERO APRENDER',
      desc: 'Programas educativos e experiências práticas para desenvolver competências tecnológicas.',
      icon: GraduationCap,
      links: ['ATL EM CASA', 'FORMAÇÕES PRESENCIAIS', 'BOLT']
    },
    {
      id: 'ideia',
      title: 'TENHO UMA IDEIA',
      desc: 'Transformamos ideias em plataformas, aplicações e produtos digitais.',
      icon: Lightbulb,
      links: ['DESENVOLVIMENTO DE PROJETOS', 'WEBSITES E APLICAÇÕES']
    },
    {
      id: 'digitalizar',
      title: 'PRECISO DIGITALIZAR O MEU NEGÓCIO',
      desc: 'Soluções tecnológicas desenvolvidas para melhorar processos, reduzir custos e aumentar o controlo.',
      icon: Building2,
      links: ['KINA SERVICE', 'SOLUÇÕES PARA EMPRESAS']
    },
    {
      id: 'solucao-tecnica',
      title: 'PRECISO DE UMA SOLUÇÃO TÉCNICA',
      desc: 'Consultoria, prototipagem, eletrónica, automação e infraestrutura tecnológica.',
      icon: Wrench,
      links: ['PRESTAÇÃO DE SERVIÇOS']
    }
  ];

  return (
    <div className="mt-20 md:mt-32 pt-16 md:pt-20 border-t border-slate-200 dark:border-white/10" id="desafios">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10 md:mb-16"
      >
        <p className="text-[#FF3B30] dark:text-[#FF3B30] font-bold tracking-widest text-xs md:text-sm uppercase mb-3 md:mb-4">Como podemos ajudar?</p>
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase text-slate-900 dark:text-white">
          Qual é o seu <span className="text-[#FF3B30]">desafio?</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
        {challenges.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-[#242526] rounded-3xl p-7 md:p-8 border border-slate-200 dark:border-white/5 flex flex-col h-full hover:border-[#FF3B30]/30 transition-colors group relative overflow-hidden shadow-sm"
            >
              <div className="w-14 h-14 rounded-full bg-slate-50 dark:bg-[#1A1A1D] border border-slate-100 dark:border-white/10 flex items-center justify-center text-[#FF3B30] mb-6 shrink-0 shadow-inner group-hover:shadow-[0_0_15px_rgba(255,59,48,0.1)] transition-shadow">
                <Icon className="w-6 h-6" />
              </div>
              
              <h3 className="text-lg font-black uppercase tracking-wide text-slate-800 dark:text-white mb-3 leading-tight">
                {item.title}
              </h3>
              
              <p className="text-slate-600 dark:text-white/60 mb-8 flex-grow text-sm md:text-sm leading-relaxed">
                {item.desc}
              </p>
              
              <div className="flex flex-col gap-3">
                {item.links.map(link => (
                  <div key={link} className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-white/80 group-hover:text-[#FF3B30] dark:group-hover:text-white transition-colors">
                    <ArrowRight className="w-3.5 h-3.5 text-[#FF3B30] shrink-0" />
                    <span className="truncate">{link}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
