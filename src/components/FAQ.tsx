"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus, ShieldCheck } from "lucide-react";

const faqs = [
  {
    category: "Sobre o dinheiro",
    questions: [
      {
        question: "Por que é tão mais barato que as empresas grandes?",
        answer:
          "Porque eu já fiz apps assim antes. E eu trabalho sozinho, não tenho gerente, escritório, café... Empresa grande cobra caro porque tem muita gente pra pagar. Eu não. O preço é menor, mas a qualidade é a mesma.",
      },
      {
        question: "Como funciona o pagamento?",
        answer:
          "É bem simples: R$ 7.000 de entrada pra começar o projeto, e o restante em parcelas de R$ 1.000 por mês. Pode ser no PIX, cartão ou boleto. Se precisar ajustar alguma coisa, é só me chamar que a gente vê.",
      },
      {
        question: "Tem alguma mensalidade depois?",
        answer:
          "O app é seu, não cobra mensalidade. Só tem os custos normais: uns R$ 100 por mês pra manter no ar, e a conta das lojas. Coisa pequena. E eu já deixo tudo configurado pra você.",
      },
    ],
  },
  {
    category: "Sobre o app",
    questions: [
      {
        question: "O app é meu mesmo? Pra sempre?",
        answer:
          "Sim. Você é o dono. Pode mudar, pode vender, pode contratar outra pessoa pra mexer. É seu, tipo uma casa. Não é aluguel.",
      },
      {
        question: "E se der problema depois que você entregar?",
        answer:
          "Fico 60 dias no WhatsApp com você. Qualquer problema que aparecer, é só chamar que eu resolvo. É tempo de sobra pra tudo funcionar redondo.",
      },
      {
        question: "Funciona no Android e no iPhone?",
        answer:
          "Funciona nos dois. E eu mesmo coloco nas lojas pra você. Não precisa fazer nada.",
      },
    ],
  },
  {
    category: "Sobre começar o negócio",
    questions: [
      {
        question: "Como consigo meus primeiros clientes?",
        answer:
          "Te dou um guia que mostra o caminho. O que mais funciona: fazer parceria com borracharias da região (eles indicam, você paga uma comissão), e fazer uns anúncios no Instagram. Gente que seguiu esse caminho conseguiu 50 clientes em 30 dias.",
      },
      {
        question: "Preciso ter empresa aberta?",
        answer:
          "Não. Pode começar como pessoa física ou MEI. Quando crescer, você vê certinho como quer fazer. O app funciona do mesmo jeito.",
      },
      {
        question: "E se já tiver alguém fazendo isso na minha cidade?",
        answer:
          "Aí é bom sinal. Se tem gente fazendo, é porque dá dinheiro. E a maioria usa sistemas velhos, feios. Seu app vai ser moderno, bonito. É um diferencial grande.",
      },
    ],
  },
  {
    category: "Sobre como funciona",
    questions: [
      {
        question: "Quanto tempo até eu poder vender?",
        answer:
          "45 dias eu entrego tudo pronto. Mais uns 10 dias pras lojas aprovarem. Ou seja, em uns 55 dias você tá operando.",
      },
      {
        question: "Preciso entender de computador?",
        answer:
          "Não. Te entrego tudo funcionando. E te mando uns vídeos ensinando a mexer. Se não entender, é só me chamar que eu explico.",
      },
      {
        question: "E depois dos 60 dias de ajuda?",
        answer:
          "O app é estável, não dá problema toda hora. A maioria dos meus clientes toca sozinho depois. Mas se precisar de algo, é só me chamar que a gente combina.",
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
            Dúvidas
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Perguntas que
            <br />
            <span className="text-zinc-500">todo mundo faz</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Se sua dúvida não tiver aqui, me chama no WhatsApp que eu respondo na hora.
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
              <div className="rounded-2xl bg-zinc-900/50 border border-zinc-800 px-4 sm:px-8">
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
                  Minha palavra
                </h4>
                <p className="text-zinc-400">
                  Seu app funcionando em 45 dias. 60 dias comigo no WhatsApp pra qualquer
                  problema. Você me manda mensagem, eu respondo. Simples assim.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
