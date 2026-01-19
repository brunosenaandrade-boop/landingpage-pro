"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus, ShieldCheck } from "lucide-react";

const faqs = [
  {
    category: "Sobre o investimento",
    questions: [
      {
        question: "Por que o preço é tão baixo comparado ao mercado?",
        answer:
          "Porque já desenvolvi sistemas similares e domino a tecnologia. Uma software house cobra R$ 150k+ porque precisa pagar equipe, escritório, gerentes... Eu trabalho direto com você, sem intermediários. Isso reduz custos significativamente sem perder qualidade.",
      },
      {
        question: "Como funciona o processo de desenvolvimento?",
        answer:
          "Assim que você fechar, começo a personalização imediata. Você recebe acesso a um grupo no WhatsApp para acompanhar o progresso. A cada etapa concluída, mostro o andamento. Em 30-45 dias, seu sistema está no ar.",
      },
      {
        question: "Quais formas de pagamento você aceita?",
        answer:
          "PIX (com 5% de desconto), cartão de crédito em até 6x sem juros, ou boleto bancário. Se quiser negociar uma condição especial, é só me chamar que a gente conversa.",
      },
    ],
  },
  {
    category: "Sobre o sistema",
    questions: [
      {
        question: "O código fonte é realmente meu para sempre?",
        answer:
          "Sim, 100%. Você recebe todo o código fonte do sistema. Pode modificar, contratar outro dev para evoluir, vender, fazer o que quiser. É seu patrimônio digital. Não existe mensalidade ou licença.",
      },
      {
        question: "E se o app der bug depois da entrega?",
        answer:
          "Você tem 60 dias de suporte técnico incluso para correção de bugs e ajustes. É tempo suficiente para estabilizar tudo. E como você recebe o código fonte, qualquer desenvolvedor Flutter pode dar manutenção depois se precisar.",
      },
      {
        question: "Preciso pagar algo mensal para o sistema funcionar?",
        answer:
          "O sistema em si não tem mensalidade — é seu para sempre. Só tem os custos normais de qualquer app: hospedagem (menos de R$ 100/mês) e as contas nas lojas. Eu deixo tudo configurado e funcionando antes de entregar.",
      },
    ],
  },
  {
    category: "Sobre começar o negócio",
    questions: [
      {
        question: "Como consigo meus primeiros clientes?",
        answer:
          "Incluo um guia de aquisição de clientes testado. As estratégias que mais funcionam: parceria com borracharias (eles indicam, você paga comissão), anúncios no Facebook/Instagram segmentados por região, e panfletagem em postos de gasolina. Clientes que seguiram o guia conseguiram os primeiros 50 assinantes em 30 dias.",
      },
      {
        question: "Preciso ter CNPJ para começar?",
        answer:
          "Não precisa para começar. Pode operar como MEI (faturamento até R$ 81k/ano) ou pessoa física inicialmente. Quando crescer, te ajudo a entender qual estrutura faz mais sentido. O sistema funciona independente da sua situação fiscal.",
      },
      {
        question: "E se já existir concorrência na minha cidade?",
        answer:
          "Concorrência valida o mercado - significa que tem demanda. Seu diferencial será: atendimento local, preço competitivo, e um app moderno (a maioria usa sistemas antigos). Clientes que entraram em mercados com concorrência conseguiram faturar igual ou mais que os estabelecidos.",
      },
    ],
  },
  {
    category: "Sobre o processo",
    questions: [
      {
        question: "Quanto tempo até eu poder começar a vender?",
        answer:
          "O desenvolvimento leva 30-45 dias. Após a entrega, você precisa de mais 7-10 dias para aprovação nas lojas (Google Play e App Store). Ou seja, em aproximadamente 45-55 dias você está operando. Eu cuido de toda a publicação.",
      },
      {
        question: "Preciso saber programar ou entender de tecnologia?",
        answer:
          "Não. Entrego tudo funcionando e pronto. Você recebe um treinamento em vídeo de como usar o painel admin, cadastrar prestadores, configurar preços, etc. Se tiver dúvidas depois, é só me chamar no WhatsApp durante o período de suporte.",
      },
      {
        question: "O que acontece depois dos 60 dias de suporte?",
        answer:
          "O sistema é estável e não precisa de manutenção constante. A maioria dos meus clientes segue operando normalmente sozinho. Se precisar de algo no futuro, é só me chamar que a gente combina. O código é seu, você tem liberdade total.",
      },
    ],
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
  const [openIndex, setOpenIndex] = useState<string | null>("0-0");

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
            Tire suas dúvidas
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Perguntas frequentes
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Se sua dúvida não estiver aqui, me chama no WhatsApp que respondo na hora.
          </p>
        </motion.div>

        {/* FAQ by category */}
        <div className="max-w-4xl mx-auto space-y-8">
          {faqs.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
            >
              <h3 className="text-lg font-semibold text-zinc-300 mb-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                {category.category}
              </h3>
              <div className="rounded-2xl bg-zinc-900/50 border border-zinc-800 px-8">
                {category.questions.map((faq, index) => (
                  <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openIndex === `${catIndex}-${index}`}
                    onClick={() =>
                      setOpenIndex(
                        openIndex === `${catIndex}-${index}`
                          ? null
                          : `${catIndex}-${index}`
                      )
                    }
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Commitment box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mt-16"
        >
          <div className="p-8 rounded-2xl bg-gradient-to-br from-green-900/20 to-green-950/20 border border-green-800/30">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-7 h-7 text-green-500" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-green-400 mb-2">
                  Compromisso de entrega
                </h4>
                <p className="text-zinc-400">
                  Seu sistema funcionando em 45 dias, com 60 dias de suporte técnico
                  dedicado. Comunicação direta comigo pelo WhatsApp durante todo o processo.
                  Você acompanha cada etapa do desenvolvimento.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
