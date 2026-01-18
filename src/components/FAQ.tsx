"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "O código fonte é realmente meu?",
    answer:
      "Sim, 100%. Você recebe todo o código fonte do sistema. Pode modificar, personalizar, adicionar funcionalidades e escalar como quiser. É seu patrimônio digital.",
  },
  {
    question: "Preciso saber programar?",
    answer:
      "Não. Eu desenvolvo todo o sistema e entrego funcionando. Você recebe os apps publicados nas lojas e o painel administrativo pronto. Só precisa operar o negócio.",
  },
  {
    question: "Por que o preço é tão baixo comparado ao mercado?",
    answer:
      "Porque já desenvolvi sistemas similares e domino a tecnologia. Isso me permite entregar um projeto de alta qualidade em menos tempo. Você recebe um sistema desenvolvido sob medida, com sua marca, por uma fração do preço de uma software house tradicional.",
  },
  {
    question: "Funciona em qualquer cidade?",
    answer:
      "Sim! O sistema usa GPS e funciona em qualquer lugar do Brasil. Você define a área de atuação e cadastra os prestadores da sua região.",
  },
  {
    question: "O que preciso para publicar nas lojas?",
    answer:
      "Eu cuido de tudo. A publicação nas lojas (Google Play e App Store) já está inclusa no pacote. Você só precisa dos dados do seu negócio para criar as contas de desenvolvedor em seu nome.",
  },
  {
    question: "E se eu tiver problemas técnicos?",
    answer:
      "Você tem 60 dias de suporte técnico incluso. Qualquer dúvida ou problema, estou aqui para ajudar. Além disso, você recebe um treinamento de como operar o sistema.",
  },
  {
    question: "Posso parcelar o pagamento?",
    answer:
      "Sim! Oferecemos condições especiais de parcelamento em até 6x. Entre em contato pelo WhatsApp para combinarmos a melhor forma de pagamento para você.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-zinc-800 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left hover:text-zinc-300 transition-colors"
      >
        <span className="font-medium pr-8">{question}</span>
        <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0">
          {isOpen ? (
            <Minus className="w-4 h-4 text-red-500" />
          ) : (
            <Plus className="w-4 h-4" />
          )}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-zinc-400 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 relative" id="faq">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-red-500 font-medium text-sm uppercase tracking-wider">
            Dúvidas
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Perguntas frequentes
          </h2>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="rounded-2xl bg-zinc-900/50 border border-zinc-800 px-8">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
