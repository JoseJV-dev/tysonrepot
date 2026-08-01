import { motion, useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { Users, Building, Rocket } from 'lucide-react';

function Counter({ from = 0, to, duration = 2 }: { from?: number, to: number, duration?: number }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        
        // Easing function (easeOutExpo)
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        setCount(Math.floor(easeProgress * (to - from) + from));
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, to, from, duration]);

  return <span ref={ref}>{count}</span>;
}

export function Impact() {
  const stats = [
    {
      id: 1,
      label: 'Projetos Concluídos',
      value: 150,
      suffix: '+',
      icon: Rocket,
    },
    {
      id: 2,
      label: 'Alunos Formados',
      value: 500,
      suffix: '+',
      icon: Users,
    },
    {
      id: 3,
      label: 'Instituições Parceiras',
      value: 20,
      suffix: '+',
      icon: Building,
    }
  ];

  return (
    <div className="mt-32 pt-20 border-t border-slate-200 dark:border-white/10" id="impacto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-azul dark:text-neon font-bold tracking-widest text-sm uppercase mb-4">O Nosso Alcance</p>
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase text-slate-900 dark:text-white">
          Impacto da <span className="text-azul dark:text-neon">Vetor Zero</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-[#242526] rounded-3xl p-8 border border-slate-200 dark:border-white/5 flex flex-col items-center text-center relative overflow-hidden group hover:border-azul/30 dark:hover:border-neon/30 transition-colors"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Icon className="w-24 h-24 text-slate-900 dark:text-white" />
              </div>
              
              <div className="w-16 h-16 rounded-full bg-slate-50 dark:bg-[#1A1A1D] border border-slate-200 dark:border-white/10 flex items-center justify-center text-azul dark:text-neon mb-6 relative z-10 shadow-[0_0_15px_rgba(0,85,164,0.1)] dark:shadow-[0_0_15px_rgba(57,255,20,0.1)] group-hover:shadow-[0_0_20px_rgba(0,85,164,0.2)] dark:group-hover:shadow-[0_0_20px_rgba(57,255,20,0.2)] transition-shadow">
                <Icon className="w-8 h-8" />
              </div>
              
              <div className="flex items-baseline gap-1 mb-2 relative z-10">
                <h3 className="text-5xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white">
                  <Counter from={0} to={stat.value} duration={2.5} />
                </h3>
                <span className="text-3xl font-bold text-azul dark:text-neon">{stat.suffix}</span>
              </div>
              
              <p className="text-slate-600 dark:text-white/70 font-bold tracking-widest uppercase text-sm relative z-10 mt-2">
                {stat.label}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
