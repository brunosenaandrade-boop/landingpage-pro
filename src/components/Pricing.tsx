"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Calculator, TrendingUp } from "lucide-react";

const included = [
  "App do Cliente (Android + iOS)",
  "App do Prestador (Android + iOS)",
  "Painel Administrativo Web",
  "Código fonte completo",
  "Sistema de pagamentos (PIX + Cartão)",
  "GPS e rastreamento em tempo real",
  "Notificações push configuradas",
  "Banco de dados configurado",
  "Publicação nas lojas (Play Store + App Store)",
  "60 dias de suporte técnico",
  "Treinamento de uso do sistema",
  "Documentação técnica",
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
            Valor que faz sentido
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Um sistema que custaria mais de R$ 150.000 para desenvolver do zero,
            por uma fração do valor.
          </p>
        </motion.div>

        {/* Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="grid md:grid-cols-2 gap-6">
            {/* Market price */}
            <div className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800">
              <div className="text-zinc-500 text-sm font-medium mb-2">
                Desenvolver do zero
              </div>
              <div className="text-4xl font-bold text-zinc-400 line-through decoration-red-500">
                R$ 150.000+
              </div>
              <div className="mt-4 space-y-2 text-sm text-zinc-500">
                <p>6-12 meses de desenvolvimento</p>
                <p>Equipe de 3-5 desenvolvedores</p>
                <p>Alto risco de projeto</p>
              </div>
            </div>

            {/* My price */}
            <div className="p-8 rounded-2xl gradient-border bg-zinc-900">
              <div className="text-red-500 text-sm font-medium mb-2">
                Desenvolvimento sob medida
              </div>
              <div className="text-5xl font-bold gradient-text">
                R$ 16.500
              </div>
              <div className="mt-4 space-y-2 text-sm text-zinc-400">
                <p>30-45 dias de desenvolvimento</p>
                <p>Desenvolvedor especializado</p>
                <p>Sistema testado e funcional</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main pricing card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden">
            {/* Header */}
            <div className="p-8 md:p-12 bg-gradient-to-br from-zinc-900 to-zinc-950 border-b border-zinc-800">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Pacote Completo</h3>
                  <p className="text-zinc-400">Tudo que você precisa para começar</p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-zinc-500 line-through">R$ 147.000</div>
                  <div className="text-4xl md:text-5xl font-bold gradient-text">R$ 16.500</div>
                  <div className="text-zinc-400 text-sm mt-1">ou 6x de R$ 2.750</div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-4">
                {included.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-green-500" />
                    </div>
                    <span className="text-zinc-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-10">
                <a
                  href="https://wa.me/5548998649898?text=Olá!%20Quero%20adquirir%20o%20Sistema%20Seguro%20Pneu%20Pro%20por%20R%24%2016.500"
                  target="_blank"
                  className="group flex items-center justify-center gap-2 w-full py-5 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl font-semibold text-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 glow-sm hover:glow"
                >
                  Quero começar meu negócio
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ROI Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-20"
        >
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-amber-500 mb-4">
              <Calculator className="w-5 h-5" />
              <span className="font-medium text-sm uppercase tracking-wider">Retorno do investimento</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold">
              Faça as contas
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 text-center">
              <TrendingUp className="w-8 h-8 text-amber-500 mx-auto mb-4" />
              <div className="text-3xl font-bold">200</div>
              <div className="text-zinc-500 text-sm mt-1">clientes no plano básico</div>
              <div className="text-zinc-600 text-xs mt-2">R$ 29,90/mês</div>
            </div>
            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 text-center">
              <div className="text-3xl font-bold gradient-text">R$ 5.980</div>
              <div className="text-zinc-500 text-sm mt-1">receita mensal</div>
              <div className="text-zinc-600 text-xs mt-2">200 × R$ 29,90</div>
            </div>
            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 text-center">
              <div className="text-3xl font-bold text-green-500">3 meses</div>
              <div className="text-zinc-500 text-sm mt-1">para recuperar</div>
              <div className="text-zinc-600 text-xs mt-2">o investimento</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
