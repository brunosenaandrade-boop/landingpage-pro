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
    title: "Empresa grande de tecnologia",
    problems: [
      "Cobram R$ 150 mil, R$ 200 mil...",
      "Demora 8 meses, 1 ano...",
      "Você vira um número, um ticket",
      "Qualquer mudança é semana de reunião",
    ],
    verdict: "Eles não precisam de você",
  },
  {
    icon: Users,
    title: "Freelancer da internet",
    problems: [
      "Você não sabe quem é de verdade",
      "Não conhece a família, os amigos",
      "Entrega coisa genérica, sem cuidado",
      "Se der erro, você não tem a quem recorrer",
    ],
    verdict: "É apostar no escuro",
  },
  {
    icon: DollarSign,
    title: "Alugar um sistema pronto",
    problems: [
      "Paga mensalidade até morrer",
      "Não pode mudar nada",
      "Se a empresa fechar, você perde tudo",
      "Nunca vai ser seu de verdade",
    ],
    verdict: "É como alugar casa a vida toda",
  },
  {
    icon: Clock,
    title: "Tentar fazer sozinho",
    problems: [
      "Você tem restaurante pra cuidar",
      "Não tem tempo pra aprender isso",
      "Vai errar muito até acertar",
      "Enquanto isso, o concorrente lança",
    ],
    verdict: "Seu tempo vale mais que isso",
  },
];

const solution = [
  {
    problem: "Preciso de R$ 150 mil pra começar",
    solution: "Uma fração disso. E em 45 dias você tá faturando",
  },
  {
    problem: "Não conheço ninguém de confiança",
    solution: "A gente se conhece desde 2018, Agilson",
  },
  {
    problem: "E se der problema depois?",
    solution: "60 dias no WhatsApp comigo. Respondo no mesmo dia",
  },
  {
    problem: "Vou depender de alguém pra sempre?",
    solution: "O app é seu. Você decide se quer minha ajuda ou não",
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
            Você já passou por isso
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Dono de negócio sofre
            <br />
            <span className="text-zinc-500">na mão de quem promete e não entrega</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Você é empresário há décadas. Já viu de tudo.
            Sabe como é difícil achar gente séria pra fazer um serviço direito.
          </p>
        </motion.div>

        {/* Sim Mental */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16"
        >
          <div className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800">
            <p className="text-lg text-zinc-300 text-center">
              Quantas vezes você já pagou caro e recebeu coisa mal feita?
              <br />
              <span className="text-zinc-500 text-base">É a história de todo empresário brasileiro.</span>
            </p>
          </div>
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
                  Você cuida do restaurante. Eu cuido do app.
                  <br />
                  <span className="text-zinc-500 text-sm">Cada um no que sabe fazer.</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
