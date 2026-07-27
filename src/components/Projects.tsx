import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import React, { useRef } from 'react';
import { ExternalLink, FunctionSquare, Infinity as InfinityIcon, Zap } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const projects = [
  {
    title: 'Motor de Física Avançado',
    category: 'Simulação',
    description: 'Um simulador em tempo real para calcular trajetórias complexas e colisões utilizando as leis de Newton e dinâmica dos fluidos.',
    icon: <Zap className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=600',
    tags: ['Física', 'TypeScript', 'WebGL']
  },
  {
    title: 'Visualizador de Grafos',
    category: 'Matemática',
    description: 'Plataforma interativa para explorar e visualizar teorias de grafos, topologia e equações diferenciais em 3D.',
    icon: <FunctionSquare className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600',
    tags: ['Matemática', 'Algoritmos', 'Visualização']
  },
  {
    title: 'Simulador Quântico',
    category: 'Computação',
    description: 'Um modelo educacional que demonstra os princípios da superposição quântica e emaranhamento através de uma interface gamificada.',
    icon: <InfinityIcon className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea2d9?auto=format&fit=crop&q=80&w=600',
    tags: ['Mecânica Quântica', 'Simulador']
  }
];

function TiltCard({ project, index, theme }: { project: any, index: number, theme: string }) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`group rounded-2xl overflow-hidden border ${theme === 'dark' ? 'border-white/10 bg-[#0d1520]' : 'border-black/5 bg-white'} shadow-2xl flex flex-col h-full hover:border-azul/50 transition-colors duration-500`}
    >
      <div style={{ transform: "translateZ(30px)" }} className="flex flex-col h-full">
        {/* Image */}
        <div className="h-48 relative overflow-hidden rounded-t-2xl">
          <div className={`absolute inset-0 z-10 ${theme === 'dark' ? 'bg-[#0d1520]/60' : 'bg-slate-900/10'} group-hover:bg-transparent transition-colors duration-500`} />
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          <div className="absolute top-4 left-4 z-20">
            <span className="bg-azul text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-[0_0_10px_rgba(0,85,255,0.5)]">
              {project.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 flex flex-col flex-grow relative bg-inherit rounded-b-2xl">
          <div className={`absolute -top-6 right-6 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg ${theme === 'dark' ? 'bg-chumbo text-neon border border-white/10' : 'bg-slate-100 text-azul border border-black/5'}`}>
            {project.icon}
          </div>
          
          <h3 className="text-xl font-bold mb-3 pr-8">{project.title}</h3>
          <p className={`text-sm mb-6 flex-grow ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag: string) => (
              <span 
                key={tag}
                className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md ${theme === 'dark' ? 'bg-white/5 text-neon/70' : 'bg-black/5 text-azul/80'}`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action */}
          <div className={`pt-4 border-t ${theme === 'dark' ? 'border-white/10' : 'border-black/5'} flex items-center justify-between`}>
            <span className="text-xs font-bold tracking-widest uppercase text-azul group-hover:text-neon transition-colors duration-300">
              Explorar Teoria
            </span>
            <ExternalLink className={`w-4 h-4 ${theme === 'dark' ? 'text-white/30 group-hover:text-neon' : 'text-black/30 group-hover:text-azul'} transition-colors duration-300`} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const { theme } = useTheme();

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="flex flex-col items-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-azul/30 bg-azul/10 text-xs font-bold tracking-widest text-neon mb-6 uppercase backdrop-blur-sm shadow-[0_0_15px_rgba(0,85,255,0.2)]">
          Laboratório Digital
        </div>
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4 text-center">
          Projetos Científicos
        </h2>
        <p className={`max-w-2xl text-center ${theme === 'dark' ? 'text-branco/60' : 'text-slate-600'}`}>
          Aplicações práticas de matemática e física na resolução de problemas complexos e simulações visuais interativas.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-[2000px]">
        {projects.map((project, index) => (
          <TiltCard key={project.title} project={project} index={index} theme={theme} />
        ))}
      </div>
    </section>
  );
}
