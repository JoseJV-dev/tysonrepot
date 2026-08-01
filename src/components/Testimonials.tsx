import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "A colaboração com a Vetor Zero transformou a forma como abordamos a tecnologia nas nossas operações. A equipa é excepcional.",
      author: "João Silva",
      role: "Diretor de Operações, TechAngola",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&q=80"
    },
    {
      id: 2,
      quote: "O nosso sistema de gestão nunca foi tão eficiente. A abordagem gamificada e as soluções tecnológicas excederam as nossas expetativas.",
      author: "Maria Santos",
      role: "CEO, InovaEdu",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&q=80"
    },
    {
      id: 3,
      quote: "Profissionais, dedicados e com uma visão incrível sobre o futuro da educação e tecnologia em Angola. Recomendo vivamente.",
      author: "Carlos Mendes",
      role: "Fundador, StartUp Luanda",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&q=80"
    }
  ];

  return (
    <div className="mt-20 md:mt-32 pt-16 md:pt-20 border-t border-slate-200 dark:border-white/10" id="testemunhos">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10 md:mb-16"
      >
        <p className="text-azul dark:text-neon font-bold tracking-widest text-xs md:text-sm uppercase mb-3 md:mb-4">O que dizem sobre nós</p>
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase text-slate-900 dark:text-white">
          Testemunhos
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {testimonials.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-[#242526] rounded-[24px] md:rounded-3xl p-6 md:p-8 border border-slate-200 dark:border-white/5 relative group hover:border-azul/30 dark:hover:border-neon/30 transition-colors shadow-sm flex flex-col h-full"
          >
            <div className="absolute top-6 right-8 text-slate-100 dark:text-white/5 group-hover:text-azul/10 dark:group-hover:text-neon/10 transition-colors">
              <Quote className="w-10 h-10 md:w-12 md:h-12" />
            </div>
            
            <p className="text-slate-600 dark:text-white/80 mb-8 relative z-10 leading-relaxed text-sm md:text-base italic flex-grow">
              "{item.quote}"
            </p>
            
            <div className="flex items-center gap-4 relative z-10 mt-auto">
              <img src={item.image} alt={item.author} className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-slate-100 dark:border-white/10" />
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-xs md:text-sm uppercase tracking-wide">{item.author}</h4>
                <p className="text-[10px] md:text-xs text-slate-500 dark:text-white/50 font-medium">{item.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
