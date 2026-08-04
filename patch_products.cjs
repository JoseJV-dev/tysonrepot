const fs = require('fs');
let text = fs.readFileSync('src/components/Products.tsx', 'utf-8');

// Need to import BookOpen
text = text.replace(/import \{ Smartphone, Server, Zap, ArrowRight \} from 'lucide-react';/, "import { Smartphone, Server, Zap, ArrowRight, BookOpen } from 'lucide-react';");

const newProduct = `        {/* ATL EM CASA */}
        <motion.div 
          id="atl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-[#242526] rounded-[2rem] p-8 md:p-12 border border-slate-200 dark:border-white/5 flex flex-col lg:flex-row-reverse gap-12"
        >
          <div className="lg:w-1/3">
            <div className="w-16 h-16 bg-slate-50 dark:bg-[#1A1A1D] border border-slate-200 dark:border-white/10 rounded-2xl flex items-center justify-center text-azul dark:text-neon mb-6">
              <BookOpen className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-black tracking-wide uppercase mb-4 leading-tight">ATL EM CASA</h3>
            <p className="text-azul dark:text-neon font-bold uppercase tracking-widest text-sm mb-4">Aprender Fazendo.</p>
            <p className="text-slate-800 dark:text-white/70 mb-6">
              Ciência e Tecnologia para o futuro de seu filho.
            </p>
          </div>

          <div className="lg:w-2/3 bg-slate-50 dark:bg-[#1A1A1D] rounded-2xl p-8 border border-slate-200 dark:border-white/5 flex flex-col justify-center">
            <h4 className="font-bold text-lg mb-4 uppercase tracking-wide text-azul dark:text-neon">O que oferecemos</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                 <span className="w-2 h-2 rounded-full bg-azul dark:bg-neon mt-1.5 shrink-0" />
                 <span className="text-slate-800 dark:text-white/80 text-sm md:text-base">Aulas práticas de robótica, programação e eletrónica no conforto de casa.</span>
              </li>
              <li className="flex items-start gap-3">
                 <span className="w-2 h-2 rounded-full bg-azul dark:bg-neon mt-1.5 shrink-0" />
                 <span className="text-slate-800 dark:text-white/80 text-sm md:text-base">Desenvolvimento de habilidades do século XXI, como pensamento crítico e resolução de problemas.</span>
              </li>
              <li className="flex items-start gap-3">
                 <span className="w-2 h-2 rounded-full bg-azul dark:bg-neon mt-1.5 shrink-0" />
                 <span className="text-slate-800 dark:text-white/80 text-sm md:text-base">Projetos práticos e divertidos que estimulam a criatividade e a inovação.</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* KINA SERVICE */}`;

text = text.replace(/\{\/\* KINA SERVICE \*\/\}/, newProduct);

fs.writeFileSync('src/components/Products.tsx', text);
