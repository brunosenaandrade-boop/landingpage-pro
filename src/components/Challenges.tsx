"use client";

import { motion } from "framer-motion";
import {
  XCircle,
  Clock,
  DollarSign,
  Users,
  AlertTriangle,
  CheckCircle,
  Building,
} from "lucide-react";

const challenges = [
  {
    icon: Building,
    title: "Contratar uma empresa grande",
    problems: [
      "Cobram R$ 150 mil ou mais",
      "Demora 6 meses a 1 ano",
      "Você fala com gerente, não com quem faz",
      "Qualquer mudança é reunião e mais reunião",
    ],
    verdict: "Caro demais e demorado",
  },
  {
    icon: Users,
    title: "Contratar um freelancer qualquer",
    problems: [
      "Não sabe se ele é bom mesmo",
      "Pode sumir no meio do projeto",
      "Qualidade duvidosa",
      "Se der problema, você fica na mão",
    ],
    verdict: "Muito arriscado",
  },
  {
    icon: DollarSign,
    title: "Comprar um sistema pronto",
    problems: [
      "Paga mensalidade pra sempre",
      "Não pode mudar nada",
      "Se a empresa fechar, você perde tudo",
      "Nunca é seu de verdade",
    ],
    verdict: "Você nunca é dono",
  },
  {
    icon: Clock,
    title: "Aprender a fazer sozinho",
    problems: [
      "Leva anos pra aprender",
      "Seu negócio fica parado",
      "Vai errar muito até acertar",
      "Tempo perdido é dinheiro perdido",
    ],
    verdict: "Não faz sentido",
  },
];

const solution = [
  {
    problem: "Preciso de R$ 150 mil pra começar",
    solution: "R$ 16.500 e em 45 dias você tá faturando",
  },
  {
    problem: "Não sei fazer app",
    solution: "Eu faço tudo e te entrego funcionando",
  },
  {
    problem: "E se der problema depois?",
    solution: "60 dias de ajuda direto comigo pelo WhatsApp",
  },
  {
    problem: "Vou depender de alguém pra sempre?",
    solution: "Não. O app é seu. Faz o que quiser com ele",
  },
];

export default function Challenges() {
  return (
    <section className="py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-red-500 font-medium text-sm uppercase tracking-wider">
            O problema
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Por que é tão difícil
            <br />
            <span className="text-zinc-500">fazer um app?</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Você já deve ter pensado em algumas opções.
            Deixa eu te mostrar por que nenhuma delas é boa.
          </p>
        </motion.div>

        {/* Challenges grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="h-full rounded-2xl bg-zinc-900/50 border border-zinc-800 p-6 hover:border-red-900/50 transition-colors">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-4">
                  <challenge.icon className="w-6 h-6 text-red-500" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-4">{challenge.title}</h3>

                {/* Problems */}
                <ul className="space-y-2 mb-4">
                  {challenge.problems.map((problem) => (
                    <li
                      key={problem}
                      className="flex items-start gap-2 text-sm text-zinc-400"
                    >
                      <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      {problem}
                    </li>
                  ))}
                </ul>

                {/* Verdict */}
                <div className="pt-4 border-t border-zinc-800">
                  <div className="flex items-center gap-2 text-red-400 text-sm font-medium">
                    <AlertTriangle className="w-4 h-4" />
                    {challenge.verdict}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* The Solution */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold">
              Comigo é <span className="gradient-text">diferente</span>
            </h3>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 overflow-hidden">
            <div className="p-8 md:p-10">
              <div className="grid md:grid-cols-2 gap-6">
                {solution.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </div>
                    <div>
                      <div className="text-zinc-500 text-sm line-through mb-1">
                        {item.problem}
                      </div>
                      <div className="text-white font-medium">
                        {item.solution}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom note */}
            <div className="p-8 md:p-10 bg-zinc-800/30 border-t border-zinc-800">
              <div className="text-center">
                <p className="text-zinc-400">
                  Eu cuido da parte técnica. Você cuida do seu negócio.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
