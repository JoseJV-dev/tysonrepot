import { motion } from 'motion/react';
import { Gift, Brain, Users } from 'lucide-react';
import { features } from '../data';

const icons = [
  <Gift className="w-8 h-8" />,
  <Brain className="w-8 h-8" />,
  <Users className="w-8 h-8" />
];

export function About() {
  return (
    <section id="features" className="py-24 relative z-10 border-t border-white/5 bg-[#001122]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-6"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0055a4] to-[#003366] flex items-center justify-center text-white shrink-0 shadow-lg shadow-[#0055a4]/20 border border-[#00a8ff]/30">
                {icons[i]}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-[#00a8ff] tracking-tight">{feature.category}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
