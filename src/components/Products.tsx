import { motion } from 'motion/react';
import { Smartphone, Zap, Server, ArrowRight } from 'lucide-react';

export function Products() {
  return (
    <div className="mt-32 pt-20 border-t border-slate-200 dark:border-white/10" id="solucoes">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-sm md:text-base font-bold tracking-widest text-azul dark:text-neon uppercase mb-4">
          Soluções Vetor Zero
        </h2>
        <p className="text-3xl md:text-5xl font-black tracking-tighter uppercase">
          Produtos que estamos a construir
        </p>
        <p className="mt-6 text-slate-700 dark:text-white/60 max-w-2xl mx-auto italic">
          "Não desenvolvemos tecnologia apenas para mostrar que podemos. Desenvolvemos tecnologia para resolver problemas concretos."
        </p>
      </motion.div>

      <div className="flex flex-col gap-16">
        {/* KINA SERVICE */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-[#242526] rounded-[2rem] p-8 md:p-12 border border-slate-200 dark:border-white/5 flex flex-col lg:flex-row gap-12"
        >
          <div className="lg:w-1/3">
            <div className="w-16 h-16 bg-slate-50 dark:bg-[#1A1A1D] border border-slate-200 dark:border-white/10 rounded-2xl flex items-center justify-center text-azul dark:text-neon mb-6">
              <Smartphone className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-black tracking-wide uppercase mb-4">Kina Service</h3>
            <p className="text-azul dark:text-neon font-bold uppercase tracking-widest text-sm mb-4">O restaurante começa na mesa.</p>
            <p className="text-slate-800 dark:text-white/70 mb-6">
              O Kina Service é uma plataforma digital para restaurantes que transforma a experiência de pedir, reservar, pagar e descobrir comida.
            </p>
            <p className="text-slate-600 dark:text-white/50 text-sm italic border-l-2 border-neon/30 pl-4">
              Mais do que pedir comida. Descobrir onde comer.
            </p>
          </div>
          <div className="lg:w-2/3 bg-slate-50 dark:bg-[#1A1A1D] rounded-2xl p-8 border border-slate-200 dark:border-white/5">
            <h4 className="font-bold text-lg mb-6 uppercase tracking-wide">Como funciona?</h4>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
              <div className="flex gap-3"><span className="text-azul dark:text-neon font-bold">1.</span> <span className="text-slate-800 dark:text-white/80 text-sm">Lê o QR Code na mesa</span></div>
              <div className="flex gap-3"><span className="text-azul dark:text-neon font-bold">2.</span> <span className="text-slate-800 dark:text-white/80 text-sm">Acede ao menu digital</span></div>
              <div className="flex gap-3"><span className="text-azul dark:text-neon font-bold">3.</span> <span className="text-slate-800 dark:text-white/80 text-sm">Escolhe o que deseja comer</span></div>
              <div className="flex gap-3"><span className="text-azul dark:text-neon font-bold">4.</span> <span className="text-slate-800 dark:text-white/80 text-sm">Faz o pedido e paga</span></div>
              <div className="flex gap-3"><span className="text-azul dark:text-neon font-bold">5.</span> <span className="text-slate-800 dark:text-white/80 text-sm">Envia o comprovativo</span></div>
              <div className="flex gap-3"><span className="text-azul dark:text-neon font-bold">6.</span> <span className="text-slate-800 dark:text-white/80 text-sm">Entrega direta na mesa</span></div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/10">
              <h4 className="font-bold text-sm text-azul dark:text-neon uppercase mb-4">Também inclui:</h4>
              <ul className="flex flex-wrap gap-4 text-xs font-bold text-slate-700 dark:text-white/60">
                <li className="bg-white dark:bg-[#242526] px-3 py-1.5 rounded-md">Rede Social p/ Restaurantes</li>
                <li className="bg-white dark:bg-[#242526] px-3 py-1.5 rounded-md">Comparador de Preços</li>
                <li className="bg-white dark:bg-[#242526] px-3 py-1.5 rounded-md">Vídeos de Preparação</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* VETOR GRID */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-[#242526] rounded-[2rem] p-8 md:p-12 border border-slate-200 dark:border-white/5 flex flex-col lg:flex-row-reverse gap-12"
        >
          <div className="lg:w-1/3">
            <div className="w-16 h-16 bg-slate-50 dark:bg-[#1A1A1D] border border-slate-200 dark:border-white/10 rounded-2xl flex items-center justify-center text-azul dark:text-neon mb-6">
              <Server className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-black tracking-wide uppercase mb-4 leading-tight">Gestão Inteligente da Rede</h3>
            <p className="text-azul dark:text-neon font-bold uppercase tracking-widest text-sm mb-4">Vetor Grid (Provisório)</p>
            <p className="text-slate-800 dark:text-white/70 mb-6">
              Plataforma de gestão para distribuidoras de eletricidade.
            </p>
            <p className="text-slate-600 dark:text-white/50 text-sm italic border-l-2 border-neon/30 pl-4">
              Quando a informação é digital, cada pagamento e cada ocorrência deixa um registo.
            </p>
          </div>
          <div className="lg:w-2/3 bg-slate-50 dark:bg-[#1A1A1D] rounded-2xl p-8 border border-slate-200 dark:border-white/5">
            <h4 className="font-bold text-lg mb-4 uppercase tracking-wide text-azul dark:text-neon">O Problema</h4>
            <p className="text-slate-800 dark:text-white/70 text-sm mb-6">Falta de informação, falhas de comunicação, dificuldade no controlo das cobranças, e possibilidade de fraudes.</p>
            
            <h4 className="font-bold text-lg mb-4 uppercase tracking-wide text-azul dark:text-neon">A Solução Integrada</h4>
            <div className="flex items-center gap-4 text-xs sm:text-sm font-bold uppercase text-slate-900 dark:text-white mb-6 bg-white dark:bg-[#242526] p-4 rounded-xl overflow-x-auto">
              <span>Cliente</span> <ArrowRight className="w-4 h-4 text-azul dark:text-neon shrink-0" />
              <span>Sistema</span> <ArrowRight className="w-4 h-4 text-azul dark:text-neon shrink-0" />
              <span>Empresa de Eletricidade</span>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-8 mt-6">
              <div>
                <h5 className="font-bold text-sm text-slate-900 dark:text-white mb-3">O Cliente pode:</h5>
                <ul className="flex flex-col gap-2 text-sm text-slate-700 dark:text-white/60">
                  <li>• Consultar situação</li>
                  <li>• Comunicar avarias</li>
                  <li>• Enviar reclamações</li>
                  <li>• Consultar pagamentos</li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold text-sm text-slate-900 dark:text-white mb-3">A Empresa pode:</h5>
                <ul className="flex flex-col gap-2 text-sm text-slate-700 dark:text-white/60">
                  <li>• Identificar devedores</li>
                  <li>• Organizar equipas de corte</li>
                  <li>• Registar ocorrências</li>
                  <li>• Mapa real da rede</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* BOLT */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-[#242526] rounded-[2rem] p-8 md:p-12 border border-slate-200 dark:border-white/5 flex flex-col lg:flex-row gap-12"
        >
          <div className="lg:w-1/3">
            <div className="w-16 h-16 bg-slate-50 dark:bg-[#1A1A1D] border border-slate-200 dark:border-white/10 rounded-2xl flex items-center justify-center text-azul dark:text-neon mb-6">
              <Zap className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-black tracking-wide uppercase mb-4">Bolt</h3>
            <p className="text-azul dark:text-neon font-bold uppercase tracking-widest text-sm mb-4">Aprender é subir de nível.</p>
            <p className="text-slate-800 dark:text-white/70 mb-6">
              O assistente virtual académico da Vetor Zero. Ligado diretamente ao conceito do ATL em Casa, transforma a aprendizagem numa experiência gamificada.
            </p>
            <p className="text-slate-600 dark:text-white/50 text-sm font-bold uppercase tracking-widest">
              Aprenda. Crie. Desbloqueie o próximo nível.
            </p>
          </div>
          <div className="lg:w-2/3 bg-slate-50 dark:bg-[#1A1A1D] rounded-2xl p-8 border border-slate-200 dark:border-white/5">
            <div className="flex flex-col gap-8">
              <div>
                <h4 className="font-bold text-sm uppercase tracking-wider text-azul dark:text-neon mb-3">Fase 1: Presencial</h4>
                <p className="text-slate-800 dark:text-white/70 text-sm bg-white dark:bg-[#242526] p-4 rounded-xl">O aluno recebe a formação presencial com um instrutor para aprender os conceitos base.</p>
              </div>
              <div>
                <h4 className="font-bold text-sm uppercase tracking-wider text-azul dark:text-neon mb-3">Fase 2: Missão Bolt</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-xs text-slate-800 dark:text-white/70">
                  <div className="bg-white dark:bg-[#242526] p-3 rounded-lg border border-slate-200 dark:border-white/5">1. Aprende um conceito</div>
                  <div className="bg-white dark:bg-[#242526] p-3 rounded-lg border border-slate-200 dark:border-white/5">2. Recebe uma missão</div>
                  <div className="bg-white dark:bg-[#242526] p-3 rounded-lg border border-slate-200 dark:border-white/5">3. Realiza tarefa prática</div>
                  <div className="bg-white dark:bg-[#242526] p-3 rounded-lg border border-slate-200 dark:border-white/5">4. Envia evidência</div>
                  <div className="bg-white dark:bg-[#242526] p-3 rounded-lg border border-slate-200 dark:border-white/5">5. Atividade é avaliada</div>
                  <div className="bg-white dark:bg-[#242526] p-3 rounded-lg border border-neon/30 text-azul dark:text-neon font-bold">6. Próximo Nível</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
