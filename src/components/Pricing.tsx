"use client";

import { motion } from "framer-motion";
import {
  Check,
  ArrowRight,
  Clock,
  CreditCard,
  Zap,
  ShieldCheck,
  Gift,
} from "lucide-react";

const included = [
  "App do Cliente (Android + iOS)",
  "App do Prestador (Android + iOS)",
  "Painel Administrativo Web completo",
  "Código fonte 100% seu",
  "Sistema de pagamentos (PIX + Cartão)",
  "GPS e rastreamento em tempo real",
  "Notificações push configuradas",
  "Banco de dados configurado",
  "Publicação nas lojas incluída",
  "60 dias de suporte técnico",
  "Treinamento em vídeo completo",
  "Guia de aquisição de clientes",
];

const bonuses = [
  {
    icon: Gift,
    title: "Guia de Aquisição de Clientes",
    value: "R$ 497",
    description: "Estratégias testadas para conseguir seus primeiros 50 clientes",
  },
  {
    icon: Zap,
    title: "Configuração de Servidor",
    value: "R$ 300",
    description: "Configuro toda a infraestrutura para você",
  },
  {
    icon: ShieldCheck,
    title: "Suporte estendido (60 dias)",
    value: "R$ 600",
    description: "Tire dúvidas e corrija bugs sem custo adicional",
  },
];

const paymentMethods = [
  { name: "PIX", highlight: "5% de desconto", icon: "💰" },
  { name: "Cartão", highlight: "Até 6x sem juros", icon: "💳" },
  { name: "Boleto", highlight: "À vista", icon: "📄" },
];

export default function Pricing() {
  return (
    <section className="py-32 relative" id="pricing">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/10 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/10 rounded-full blur-[128px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-red-500 font-medium text-sm uppercase tracking-wider">
            Investimento
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Quanto custa ter seu próprio negócio?
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Muito menos do que você imagina. E com suporte completo.
          </p>
        </motion.div>

        {/* Main pricing card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden relative">
            {/* Popular badge */}
            <div className="absolute top-6 right-6">
              <span className="px-4 py-1.5 bg-amber-500 text-black text-xs font-bold rounded-full">
                MAIS ESCOLHIDO
              </span>
            </div>

            {/* Header */}
            <div className="p-8 md:p-12 bg-gradient-to-br from-zinc-900 to-zinc-950 border-b border-zinc-800">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Pacote Completo</h3>
                  <p className="text-zinc-400">
                    Sistema completo + bônus + 60 dias de suporte dedicado
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-zinc-500 line-through mb-1">
                    De R$ 147.000
                  </div>
                  <div className="text-5xl md:text-6xl font-bold gradient-text">
                    R$ 16.500
                  </div>
                  {/* Installment highlight */}
                  <div className="mt-3 inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full">
                    <CreditCard className="w-4 h-4 text-green-500" />
                    <span className="text-green-400 font-semibold">
                      ou 6x de R$ 2.750 sem juros
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Features + Bonuses */}
            <div className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12">
                {/* What's included */}
                <div>
                  <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    O que está incluso
                  </h4>
                  <div className="space-y-3">
                    {included.map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-green-500" />
                        </div>
                        <span className="text-zinc-300 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bonuses */}
                <div>
                  <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
                    <Gift className="w-5 h-5 text-amber-500" />
                    Bônus exclusivos
                  </h4>
                  <div className="space-y-4">
                    {bonuses.map((bonus) => (
                      <div
                        key={bonus.title}
                        className="p-4 rounded-xl bg-zinc-800/50 border border-zinc-700/50"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0">
                            <bonus.icon className="w-5 h-5 text-amber-500" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <span className="font-medium text-sm">
                                {bonus.title}
                              </span>
                              <span className="text-xs text-zinc-500 line-through">
                                {bonus.value}
                              </span>
                            </div>
                            <p className="text-xs text-zinc-500 mt-1">
                              {bonus.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Payment methods */}
                  <div className="mt-8">
                    <h5 className="text-sm text-zinc-400 mb-4">
                      Formas de pagamento
                    </h5>
                    <div className="flex flex-wrap gap-3">
                      {paymentMethods.map((method) => (
                        <div
                          key={method.name}
                          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800 border border-zinc-700"
                        >
                          <span>{method.icon}</span>
                          <div className="text-sm">
                            <span className="font-medium">{method.name}</span>
                            <span className="text-zinc-500 ml-2">
                              {method.highlight}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10 pt-8 border-t border-zinc-800">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-8 h-8 text-green-500" />
                    <div>
                      <div className="font-medium">Compromisso de entrega</div>
                      <div className="text-sm text-zinc-500">
                        Sistema funcionando em 45 dias + 60 dias de suporte.
                      </div>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/5548998649898?text=Olá%20Bruno!%20Vi%20a%20proposta%20do%20Seguro%20Pneu%20Pro%20e%20quero%20fechar%20o%20projeto"
                    target="_blank"
                    className="group flex items-center justify-center gap-2 px-10 py-5 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl font-semibold text-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 glow-sm hover:glow w-full sm:w-auto"
                  >
                    Quero começar agora
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Urgency / Cost of waiting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mt-20"
        >
          <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 text-center">
            <div className="inline-flex items-center gap-2 text-amber-500 mb-6">
              <Clock className="w-5 h-5" />
              <span className="font-medium text-sm uppercase tracking-wider">
                Pense nisso
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Daqui 45 dias, onde você quer estar?
            </h3>

            <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
              Com seu app nas lojas, recebendo os primeiros assinantes e construindo
              seu negócio — ou ainda pesquisando orçamentos e adiando a decisão?
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="p-5 rounded-2xl bg-red-950/20 border border-red-900/30">
                <div className="text-red-400 font-medium mb-2">Se você esperar...</div>
                <p className="text-zinc-500 text-sm">
                  Mais 6 meses pesquisando, comparando, esperando o "momento certo"
                  que nunca chega. Enquanto isso, alguém lança na sua região.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-green-950/20 border border-green-900/30">
                <div className="text-green-400 font-medium mb-2">Se você começar agora...</div>
                <p className="text-zinc-500 text-sm">
                  Em 45 dias seu sistema está no ar. Em 90 dias você já tem
                  os primeiros clientes. Em 6 meses, um negócio funcionando.
                </p>
              </div>
            </div>

            <p className="text-zinc-500 text-sm">
              A melhor hora para começar era ontem. A segunda melhor é agora.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
