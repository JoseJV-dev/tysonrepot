import { motion } from 'motion/react';

export function Pillars() {
  const pillars = [
    {
      id: 'educacao',
      title: 'EDUCAÇÃO',
      subtitle: 'Aprender fazendo.',
      items: ['ATL EM CASA', 'Formações Presenciais', 'Robótica', 'Eletrónica', 'Programação', 'Ciências Exatas']
    },
    {
      id: 'produtos',
      title: 'PRODUTOS DIGITAIS',
      subtitle: 'Tecnologia criada para resolver problemas específicos.',
      desc: 'A Vetor Zero desenvolve plataformas digitais próprias para diferentes setores.',
      items: ['Kina Service', 'Bolt', 'Plataformas de gestão', 'Sistemas institucionais', 'Aplicações web']
    },
    {
      id: 'projetos',
      title: 'DESENVOLVIMENTO DE PROJETOS',
      subtitle: 'Da ideia ao produto.',
      items: ['Projetos académicos TCC (Ensino médio e Universitário)', 'Protótipos tecnológicos (Para uso civil ou institucional)', 'Aplicações web', 'Plataformas digitais de forma Geral']
    },
    {
      id: 'tecnologia',
      title: 'TECNOLOGIA APLICADA',
      subtitle: 'Soluções para problemas reais.',
      items: ['Automação', 'Eletrónica', 'Sistemas inteligentes', 'Consultoria técnica', 'Laboratórios educativos', 'Infraestrutura tecnológica']
    }
  ];

  return (
    <div className="mt-32 pt-20 border-t border-slate-200 dark:border-white/10" id="pilares">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase text-center md:text-left text-azul">
          Os Quatro Pilares da Vetor Zero
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {pillars.map((pillar, index) => (
          <motion.div
            key={pillar.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-[#242526] p-8 rounded-[2rem] border border-slate-200 dark:border-white/5 hover:border-azul/30 transition-all"
          >
            <h3 className="text-2xl font-black uppercase tracking-wide text-slate-900 dark:text-white mb-2">{pillar.title}</h3>
            <p className="text-azul font-bold text-sm tracking-widest uppercase mb-4">{pillar.subtitle}</p>
            {pillar.desc && <p className="text-slate-800 dark:text-white/70 text-sm mb-6">{pillar.desc}</p>}
            
            <ul className="flex flex-col gap-3 mt-6">
              {pillar.items.map(item => (
                <li key={item} className="flex items-start gap-3 text-slate-800 dark:text-white/80 text-sm font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-azul mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
