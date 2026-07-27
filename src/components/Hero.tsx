import { motion } from 'motion/react';
import { RobotCard } from './RobotCard';

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#0055a4]/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#00a8ff]/10 rounded-full blur-[150px] mix-blend-screen" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0055a4]/30 bg-[#002244]/50 text-xs font-bold tracking-widest text-[#00a8ff] mb-8 backdrop-blur-sm uppercase">
            Cartão de Visita • Formato Robô
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-6">
            O futuro da educação <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00a8ff] to-[#0055a4]">começa com uma ideia.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-4 max-w-2xl leading-relaxed">
            Abra. Conecte. Transforme. Um formato compacto que desperta curiosidade e revela todo o nosso potencial tecnológico.
          </p>
        </motion.div>

        {/* The Interactive 3D Robot Card */}
        <RobotCard />

      </div>
    </section>
  );
}
