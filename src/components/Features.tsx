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
    title: "GPS em tempo real",
    description: "Cliente acompanha o prestador chegando. Experiência premium igual aos grandes apps.",
  },
  {
    icon: CreditCard,
    title: "Pagamentos integrados",
    description: "PIX e cartão de crédito configurados. Receba automaticamente na sua conta.",
  },
  {
    icon: Bell,
    title: "Notificações push",
    description: "Sistema automático de alertas para clientes e prestadores em tempo real.",
  },
  {
    icon: Code2,
    title: "Código fonte completo",
    description: "Todo o código é seu. Modifique, escale e evolua como quiser.",
  },
  {
    icon: Users,
    title: "Multi-plataforma",
    description: "Apps nativos para Android e iOS. Publicação nas lojas inclusa.",
  },
  {
    icon: BarChart3,
    title: "Dashboard administrativo",
    description: "Controle total: clientes, prestadores, chamados, pagamentos e métricas.",
  },
  {
    icon: Lock,
    title: "Segurança enterprise",
    description: "Autenticação robusta, dados criptografados e boas práticas de segurança.",
  },
  {
    icon: Headphones,
    title: "Suporte dedicado",
    description: "60 dias de suporte técnico para você começar com confiança.",
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
            Funcionalidades
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Tudo que você precisa
            <br />
            <span className="text-zinc-500">em um único sistema</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Desenvolvo um sistema completo com tecnologia de ponta,
            pronto para você operar seu negócio de assistência veicular.
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
