import { motion } from 'motion/react';
import { Building } from 'lucide-react';

export function Institutions() {
  return (
    <div className="mt-32 pt-20 border-t border-slate-200 dark:border-white/10" id="instituicoes">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-[#242526] dark:to-[#1A1A1D] rounded-[3rem] p-12 md:p-20 border border-slate-200 dark:border-white/5 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden"
      >
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#AF52DE]/10 blur-3xl rounded-full" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#AF52DE]/10 blur-3xl rounded-full" />
        
        <div className="md:w-1/2 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-[#AF52DE]/10 flex items-center justify-center text-[#AF52DE]">
              <Building className="w-6 h-6" />
            </div>
            <h2 className="text-sm font-bold tracking-widest text-[#AF52DE] uppercase">
              Desenvolvemos para Instituições
            </h2>
          </div>
          
          <h3 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-6 leading-tight text-slate-900 dark:text-white">
            A sua instituição precisa de uma plataforma digital?
          </h3>
          
          <p className="text-xl text-[#AF52DE] font-medium italic border-l-4 border-[#AF52DE] pl-4 mb-8">
            Se existe um problema que pode ser organizado através da tecnologia, podemos ajudar a construir a solução.
          </p>
          
          <a href="#contact" className="inline-flex bg-slate-900 text-white dark:bg-white dark:text-chumbo px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform">
            Fale-nos sobre o seu projeto
          </a>
        </div>
        
        <div className="md:w-1/2 relative z-10">
          <div className="bg-white dark:bg-[#1A1A1D] rounded-2xl p-8 border border-slate-200 dark:border-white/10 shadow-2xl">
            <h4 className="font-bold text-lg mb-6 uppercase tracking-wide text-slate-900 dark:text-white/80">A Vetor Zero desenvolve:</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-4 text-slate-700 dark:text-white font-medium">
                <span className="w-2 h-2 rounded-full bg-[#AF52DE] shrink-0" />
                Websites institucionais
              </li>
              <li className="flex items-center gap-4 text-slate-700 dark:text-white font-medium">
                <span className="w-2 h-2 rounded-full bg-[#AF52DE] shrink-0" />
                Plataformas de venda
              </li>
              <li className="flex items-center gap-4 text-slate-700 dark:text-white font-medium">
                <span className="w-2 h-2 rounded-full bg-[#AF52DE] shrink-0" />
                Sistemas de gestão
              </li>
              <li className="flex items-center gap-4 text-slate-700 dark:text-white font-medium">
                <span className="w-2 h-2 rounded-full bg-[#AF52DE] shrink-0" />
                Aplicações web
              </li>
              <li className="flex items-center gap-4 text-slate-700 dark:text-white font-medium">
                <span className="w-2 h-2 rounded-full bg-[#AF52DE] shrink-0" />
                Plataformas educativas
              </li>
              <li className="flex items-center gap-4 text-slate-700 dark:text-white font-medium">
                <span className="w-2 h-2 rounded-full bg-[#AF52DE] shrink-0" />
                Soluções personalizadas
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
