import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const timeline = [
  {
    type: 'work',
    title: 'Analista Quantitativo / Pesquisador',
    organization: 'FinTech Quant Solutions',
    date: '2021 - Presente',
    description: 'Desenvolvimento de modelos matemáticos para precificação de derivativos e gestão de risco. Implementação de algoritmos estocásticos de alta performance em C++ e Python.'
  },
  {
    type: 'work',
    title: 'Pesquisador em Física Computacional',
    organization: 'Instituto Nacional de Pesquisas Espaciais',
    date: '2018 - 2021',
    description: 'Simulação numérica de plasmas astrofísicos e dinâmica de fluidos. Paralelização de código (MPI/CUDA) para clusters de alto desempenho.'
  },
  {
    type: 'education',
    title: 'Doutorado em Física Teórica',
    organization: 'Universidade de São Paulo (USP)',
    date: '2014 - 2018',
    description: 'Foco em Mecânica Estatística e Teoria Quântica de Campos. Tese sobre "Transições de Fase em Sistemas Desordenados". Publicações em revistas Q1.'
  }
];

export function Experience() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="experience" className="py-20 relative z-10">
      <div className="flex flex-col items-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-azul/30 bg-azul/10 text-xs font-bold tracking-widest text-neon mb-6 uppercase backdrop-blur-sm shadow-[0_0_15px_rgba(0,85,255,0.2)]">
          Trajetória
        </div>
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4 text-center">
          Experiência e Formação
        </h2>
        <p className={`max-w-2xl text-center ${isDark ? 'text-branco/60' : 'text-slate-600'}`}>
          Um resumo da minha jornada profissional e acadêmica ao longo dos anos.
        </p>
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Linha central */}
        <div className={`absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 ${isDark ? 'bg-white/10' : 'bg-black/10'} transform md:-translate-x-1/2`} />

        <div className="space-y-12">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Ícone central */}
              <div className={`absolute left-4 md:left-1/2 w-10 h-10 rounded-full flex items-center justify-center transform -translate-x-1/2 shadow-lg z-10 ${isDark ? 'bg-[#0d1520] border-2 border-neon text-neon' : 'bg-white border-2 border-azul text-azul'}`}>
                {item.type === 'work' ? <Briefcase className="w-4 h-4" /> : <GraduationCap className="w-4 h-4" />}
              </div>

              {/* Conteúdo */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
                <div className={`p-6 rounded-2xl border ${isDark ? 'border-white/10 bg-[#0d1520]' : 'border-black/5 bg-white'} shadow-xl relative group hover:border-azul/50 transition-colors duration-300`}>
                  <div className={`flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-widest ${isDark ? 'text-neon' : 'text-azul'} ${index % 2 !== 0 && 'md:justify-end'}`}>
                    <Calendar className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <h4 className={`text-sm font-semibold mb-4 ${isDark ? 'text-branco/60' : 'text-slate-500'}`}>{item.organization}</h4>
                  <p className={`text-sm leading-relaxed ${isDark ? 'text-branco/80' : 'text-slate-700'}`}>
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
