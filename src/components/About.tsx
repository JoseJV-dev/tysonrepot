import { motion } from 'motion/react';
import { Target } from 'lucide-react';

export function About() {
  return (
    <div className="pt-12 md:pt-16 pb-10" id="sobre">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row gap-12 lg:gap-24 items-center"
      >
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full border-4 border-azul/20 dark:border-neon/20 animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border-2 border-slate-200 dark:border-white/10 border-t-azul dark:border-t-neon animate-[spin_7s_linear_infinite_reverse]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <span className="block text-4xl font-black text-azul dark:text-neon">VETOR</span>
                <span className="block text-4xl font-black text-slate-900 dark:text-white">ZERO</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-azul/10 dark:bg-neon/10 flex items-center justify-center text-azul dark:text-neon">
              <Target className="w-5 h-5" />
            </div>
            <h2 className="text-sm md:text-base font-bold tracking-widest text-azul dark:text-neon uppercase">
              A Primeira Fórmula
            </h2>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-black tracking-tighter mb-8 text-slate-900 dark:text-white">
            Sobre a Vetor Zero
          </h3>

          <div className="flex flex-col gap-6 text-slate-600 dark:text-white/70 leading-relaxed text-lg">
            <p>
              A Vetor Zero — Educação e Tecnologia nasceu com uma visão simples:
            </p>
            <p className="text-2xl font-black text-slate-900 dark:text-white border-l-4 border-azul dark:border-neon pl-6 py-2 my-2">
              A melhor forma de aprender tecnologia é utilizá-la para criar.
            </p>
            <p>
              Atuamos na interseção entre educação, ciência, tecnologia e engenharia aplicada, criando experiências de aprendizagem e soluções que transformam ideias em projetos reais.
            </p>
            <p>
              A nossa missão é desenvolver pessoas capazes não apenas de utilizar a tecnologia, mas de compreender, construir e transformar o futuro.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
