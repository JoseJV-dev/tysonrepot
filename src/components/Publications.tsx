import React from 'react';
import { motion } from 'motion/react';
import { BookText, FileText, ArrowUpRight } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const publications = [
  {
    title: "Quantum Entanglement in Macroscopic Disordered Systems",
    journal: "Physical Review Letters",
    year: "2023",
    citations: 124,
    doi: "10.1103/PhysRevLett.130.010203",
    type: "Artigo Principal"
  },
  {
    title: "Numerical Simulation of Magnetohydrodynamic Turbulence",
    journal: "Journal of Computational Physics",
    year: "2021",
    citations: 89,
    doi: "10.1016/j.jcp.2021.110291",
    type: "Artigo Revisado"
  },
  {
    title: "Stochastic Modeling of Financial Derivatives using Non-Gaussian Distributions",
    journal: "Quantitative Finance",
    year: "2019",
    citations: 56,
    doi: "10.1080/14697688.2019.1578351",
    type: "Artigo Revisado"
  },
  {
    title: "A Novel Algorithmic Approach to N-Body Gravity Simulations",
    journal: "Astrophysical Journal",
    year: "2017",
    citations: 210,
    doi: "10.3847/1538-4357/aa9d3b",
    type: "Artigo Principal"
  }
];

export function Publications() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="publications" className="py-20 relative z-10">
      <div className="flex flex-col items-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-azul/30 bg-azul/10 text-xs font-bold tracking-widest text-neon mb-6 uppercase backdrop-blur-sm shadow-[0_0_15px_rgba(0,85,255,0.2)]">
          Pesquisa Acadêmica
        </div>
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4 text-center">
          Publicações Científicas
        </h2>
        <p className={`max-w-2xl text-center ${isDark ? 'text-branco/60' : 'text-slate-600'}`}>
          Artigos e pesquisas publicadas em periódicos internacionais revisados por pares nas áreas de física teórica e matemática aplicada.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {publications.map((pub, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`p-6 md:p-8 rounded-2xl border ${isDark ? 'border-white/10 bg-[#0d1520]' : 'border-black/5 bg-white'} shadow-xl flex flex-col md:flex-row gap-6 md:items-center justify-between group hover:border-azul/50 transition-colors duration-300`}
          >
            <div className="flex items-start gap-5">
              <div className={`mt-1 w-12 h-12 shrink-0 rounded-full flex items-center justify-center ${isDark ? 'bg-chumbo text-neon border border-white/10' : 'bg-slate-100 text-azul border border-black/5'}`}>
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md ${isDark ? 'bg-white/5 text-neon/70' : 'bg-black/5 text-azul/80'}`}>
                    {pub.year}
                  </span>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md ${isDark ? 'bg-azul/20 text-azul' : 'bg-azul/10 text-azul'}`}>
                    {pub.type}
                  </span>
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${isDark ? 'text-branco/40' : 'text-slate-400'}`}>
                    Citações: {pub.citations}
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-1 leading-tight">{pub.title}</h3>
                <p className={`text-sm italic ${isDark ? 'text-branco/60' : 'text-slate-600'}`}>
                  {pub.journal} — DOI: {pub.doi}
                </p>
              </div>
            </div>
            
            <button className={`shrink-0 self-start md:self-center w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${isDark ? 'border-white/10 hover:border-neon hover:text-neon hover:bg-neon/10' : 'border-black/10 hover:border-azul hover:text-azul hover:bg-azul/10'}`}>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
