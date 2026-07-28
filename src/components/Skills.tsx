import React from 'react';
import { motion } from 'motion/react';
import { Code2, Database, Layout, Server, Smartphone, Zap } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const skillCategories = [
  {
    title: 'Física Computacional',
    icon: <Zap className="w-6 h-6" />,
    skills: ['Modelagem Numérica', 'C/C++', 'Fortran', 'Simulação de Monte Carlo', 'Mecânica Quântica', 'Dinâmica dos Fluidos']
  },
  {
    title: 'Matemática Aplicada',
    icon: <Database className="w-6 h-6" />,
    skills: ['MatLab / Octave', 'Mathematica', 'Álgebra Linear Computacional', 'Equações Diferenciais', 'Otimização', 'Cálculo Estocástico']
  },
  {
    title: 'Análise de Dados & IA',
    icon: <Server className="w-6 h-6" />,
    skills: ['Python', 'SciPy & NumPy', 'TensorFlow / PyTorch', 'Machine Learning', 'Processamento de Sinais', 'Análise Estatística']
  },
  {
    title: 'Ferramentas Científicas',
    icon: <Code2 className="w-6 h-6" />,
    skills: ['LaTeX', 'Jupyter Notebooks', 'Git & Docker', 'ParaView (Visualização)', 'Linux / Bash', 'Computação Paralela (MPI)']
  }
];

export function Skills() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="flex flex-col items-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-azul/30 bg-azul/10 text-xs font-bold tracking-widest text-neon mb-6 uppercase backdrop-blur-sm shadow-[0_0_15px_rgba(0,85,255,0.2)]">
          Stack Tecnológico
        </div>
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4 text-center">
          Minhas Habilidades
        </h2>
        <p className={`max-w-2xl text-center ${isDark ? 'text-branco/60' : 'text-slate-600'}`}>
          Ferramentas, linguagens e frameworks que utilizo para transformar ideias em experiências digitais excepcionais.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`p-6 rounded-2xl border ${isDark ? 'border-white/10 bg-[#0d1520]' : 'border-black/5 bg-white'} shadow-xl hover:border-azul/50 transition-colors duration-300 group`}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-md transition-transform group-hover:scale-110 ${isDark ? 'bg-chumbo text-neon border border-white/10' : 'bg-slate-100 text-azul border border-black/5'}`}>
              {category.icon}
            </div>
            <h3 className="text-lg font-bold mb-4">{category.title}</h3>
            <ul className="space-y-3">
              {category.skills.map(skill => (
                <li key={skill} className="flex items-center gap-2">
                  <Zap className={`w-3.5 h-3.5 ${isDark ? 'text-neon' : 'text-azul'}`} />
                  <span className={`text-sm ${isDark ? 'text-branco/80' : 'text-slate-700'}`}>{skill}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
