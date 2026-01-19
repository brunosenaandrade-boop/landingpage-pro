"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  CreditCard,
  Bell,
  Code2,
  Users,
  BarChart3,
  Lock,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Vê no mapa",
    description: "Seu cliente vê o socorrista chegando no celular. Igual Uber, iFood, 99.",
  },
  {
    icon: CreditCard,
    title: "Paga pelo app",
    description: "PIX ou cartão. O dinheiro cai na sua conta. Você não precisa cobrar ninguém.",
  },
  {
    icon: Bell,
    title: "Avisa na hora",
    description: "Cliente pediu socorro? O socorrista recebe na hora no celular. Automático.",
  },
  {
    icon: Code2,
    title: "O app é seu",
    description: "Diferente de alugar um sistema, aqui você é dono. Faz o que quiser com ele.",
  },
  {
    icon: Users,
    title: "Android e iPhone",
    description: "Funciona nos dois. Eu coloco nas lojas pra você. Não precisa fazer nada.",
  },
  {
    icon: BarChart3,
    title: "Você vê tudo",
    description: "Quantos clientes tem, quanto entrou de dinheiro, quem tá devendo. Tudo na tela.",
  },
  {
    icon: Lock,
    title: "Seguro de verdade",
    description: "Os dados dos seus clientes ficam protegidos. Ninguém acessa o que não deve.",
  },
  {
    icon: Headphones,
    title: "Eu te ajudo",
    description: "60 dias comigo no WhatsApp. Qualquer dúvida, qualquer problema, é só chamar.",
  },
];

export default function Features() {
  return (
    <section className="py-32 relative" id="features">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/50 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-red-500 font-medium text-sm uppercase tracking-wider">
            O que o app faz
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Tudo que você precisa
            <br />
            <span className="text-zinc-500">num lugar só</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Eu faço tudo e te entrego funcionando.
            Você só precisa cuidar dos seus clientes.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/20 to-amber-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
