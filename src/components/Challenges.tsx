"use client";

import { motion } from "framer-motion";
import {
  XCircle,
  Clock,
  DollarSign,
  Code,
  Users,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const challenges = [
  {
    icon: Code,
    title: "Desenvolver do zero",
    problems: [
      "6-12 meses de desenvolvimento",
      "Equipe de 3-5 desenvolvedores",
      "R$ 150.000+ de investimento",
      "Alto risco de falhas",
    ],
    verdict: "Inviável para a maioria",
  },
  {
    icon: Users,
    title: "Contratar freelancer",
    problems: [
      "Qualidade inconsistente",
      "Atrasos frequentes",
      "Comunicação difícil",
      "Projeto abandonado no meio",
    ],
    verdict: "Arriscado demais",
  },
  {
    icon: DollarSign,
    title: "Comprar solução pronta",
    problems: [
      "Código fechado (não é seu)",
      "Mensalidade eterna",
      "Sem personalização",
      "Dependência do fornecedor",
    ],
    verdict: "Você nunca é dono",
  },
  {
    icon: Clock,
    title: "Aprender a programar",
    problems: [
      "2-3 anos de estudo",
      "Mercado muda rápido",
      "Perda de foco no negócio",
      "Tempo = dinheiro perdido",
    ],
    verdict: "Tempo demais",
  },
];

const solution = [
  {
    problem: "Preciso de R$ 150k+ para começar",
    solution: "R$ 16.500 e você começa a faturar em 45 dias",
  },
  {
    problem: "Não sei programar",
    solution: "Entrego funcionando + treinamento completo",
  },
  {
    problem: "E se der problema depois?",
    solution: "60 dias de suporte + código fonte é seu para sempre",
  },
  {
    problem: "E se não der certo?",
    solution: "Garantia de 30 dias ou seu dinheiro de volta",
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
            A realidade
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Por que 90% desistem
            <br />
            <span className="text-zinc-500">antes de começar</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Você provavelmente já pensou em algumas alternativas.
            Deixa eu te mostrar por que elas não funcionam.
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
              A solução que <span className="gradient-text">elimina tudo isso</span>
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

            {/* CTA */}
            <div className="p-8 md:p-10 bg-zinc-800/30 border-t border-zinc-800">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="text-xl font-bold mb-2">
                    Pronto para começar sem complicação?
                  </h4>
                  <p className="text-zinc-400">
                    Eu cuido da tecnologia, você foca no negócio.
                  </p>
                </div>
                <a
                  href="https://wa.me/5548998649898?text=Olá!%20Quero%20saber%20mais%20sobre%20o%20sistema"
                  target="_blank"
                  className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 rounded-full font-semibold whitespace-nowrap hover:from-red-600 hover:to-red-700 transition-all"
                >
                  Falar agora
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
