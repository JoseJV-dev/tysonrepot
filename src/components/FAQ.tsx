import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const faqs = [
    {
      question: "Quais são os serviços oferecidos pela Vetor Zero?",
      answer: "A Vetor Zero atua em quatro pilares principais: Educação Tecnológica (ATL, formações e kits didáticos), Desenvolvimento Digital (plataformas, websites e sistemas de gestão), Projetos Tecnológicos (eletrónica, automação e IoT) e Prestação de Serviços Técnicos."
    },
    {
      question: "Como funciona o projeto ATL em Casa?",
      answer: "O ATL em Casa (atualmente em desenvolvimento e estruturação) visa levar a educação tecnológica de forma prática e lúdica diretamente aos jovens e crianças, através de kits didáticos e conteúdos focados em robótica e programação."
    },
    {
      question: "Podem desenvolver um sistema de gestão à medida para a minha empresa?",
      answer: "Sim! Desenvolvemos soluções personalizadas que ajudam a digitalizar negócios, melhorar processos, reduzir custos e aumentar o controlo sobre as operações diárias, como é o caso do Kina Service."
    },
    {
      question: "Atuam apenas em Luanda?",
      answer: "Atualmente, a nossa base de operações foca-se em Luanda e em projetos digitais que podem ser implementados à distância. Estamos sempre abertos a analisar oportunidades noutras regiões ou online."
    },
    {
      question: "Como posso solicitar um orçamento ou consultoria?",
      answer: "Pode entrar em contacto connosco através do email info@vetorzero.co.mz, do nosso telefone ou pelo botão de WhatsApp disponível no site. Iremos agendar uma reunião para entender as suas necessidades e apresentar a melhor solução."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-20 md:mt-32 pt-16 md:pt-20 border-t border-slate-200 dark:border-white/10" id="faq">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10 md:mb-16"
      >
        <p className="text-azul dark:text-neon font-bold tracking-widest text-xs md:text-sm uppercase mb-3 md:mb-4">Dúvidas Frequentes</p>
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase text-slate-900 dark:text-white">
          Perguntas Frequentes
        </h2>
      </motion.div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-[#242526] rounded-2xl border border-slate-200 dark:border-white/5 overflow-hidden transition-colors hover:border-azul/30 dark:hover:border-neon/30"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none"
              >
                <span className="font-bold text-sm md:text-base text-slate-900 dark:text-white pr-4">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-azul dark:text-neon shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-5 md:p-6 pt-0 text-sm md:text-base text-slate-600 dark:text-white/70 leading-relaxed border-t border-slate-100 dark:border-white/5 mt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
