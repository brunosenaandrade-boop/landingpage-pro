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
  "App pro seu cliente pedir socorro",
  "App pro socorrista receber o chamado",
  "Uma tela pra você controlar tudo",
  "O app é seu, pra sempre",
  "Cliente paga pelo app (PIX ou cartão)",
  "Vê o socorrista chegando no mapa",
  "Aviso no celular quando alguém pede socorro",
  "Tudo configurado e funcionando",
  "Eu coloco nas lojas pra você",
  "60 dias comigo no WhatsApp",
  "Te ensino a usar em vídeo",
  "Te mostro como conseguir clientes",
];

const bonuses = [
  {
    icon: Gift,
    title: "Como conseguir seus primeiros clientes",
    value: "R$ 1.997",
    description: "O mesmo jeito que meus clientes usam pra conseguir os primeiros 50 assinantes",
  },
  {
    icon: Zap,
    title: "Tudo configurado e no ar",
    value: "R$ 2.500",
    description: "Eu deixo tudo funcionando antes de entregar. Você não precisa fazer nada",
  },
  {
    icon: ShieldCheck,
    title: "60 dias comigo no WhatsApp",
    value: "R$ 3.000",
    description: "Qualquer dúvida, qualquer problema, é só me chamar que eu resolvo",
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
            O investimento
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Agilson, vou ser direto
            <br />
            <span className="text-zinc-500">como você gosta</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Empresa grande cobra R$ 150 mil, R$ 200 mil.
            <br />
            Eu vou fazer por uma fração disso. E você sabe que eu entrego.
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
            {/* Ancoragem */}
            <div className="p-4 sm:p-6 bg-red-950/20 border-b border-red-900/30">
              <div className="grid grid-cols-3 gap-2 sm:gap-6 text-center items-end">
                <div>
                  <div className="text-[10px] sm:text-xs text-zinc-500 uppercase tracking-wider mb-1">Empresa grande</div>
                  <div className="text-lg sm:text-2xl font-bold text-red-400 line-through">R$ 180.000</div>
                  <div className="text-[10px] sm:text-xs text-zinc-600 hidden sm:block">+ 8 meses de espera</div>
                </div>
                <div>
                  <div className="text-[10px] sm:text-xs text-zinc-500 uppercase tracking-wider mb-1">Freelancer</div>
                  <div className="text-lg sm:text-2xl font-bold text-red-400 line-through">R$ 40.000</div>
                  <div className="text-[10px] sm:text-xs text-zinc-600 hidden sm:block">+ qualidade duvidosa</div>
                </div>
                <div>
                  <div className="text-[10px] sm:text-xs text-green-500 uppercase tracking-wider mb-1">Comigo</div>
                  <div className="text-lg sm:text-2xl font-bold text-green-400">R$ 16.500</div>
                  <div className="text-[10px] sm:text-xs text-zinc-400 hidden sm:block">+ 8 anos de amizade</div>
                </div>
              </div>
            </div>

            {/* Header */}
            <div className="p-8 md:p-12 bg-gradient-to-br from-zinc-900 to-zinc-950 border-b border-zinc-800">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Tudo incluído, sem surpresa</h3>
                  <p className="text-zinc-400">
                    Os 3 apps + os bônus + 60 dias comigo te ajudando
                  </p>
                </div>
                <div className="text-right">
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
                  <div className="mt-2 text-xs text-zinc-500">
                    Menos que uma moto. E te dá um negócio.
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
                    O que você recebe
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
                    Ainda leva de brinde
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

              {/* Risk Reduction */}
              <div className="mt-8 p-6 rounded-2xl bg-green-950/20 border border-green-900/30">
                <h5 className="font-semibold text-green-400 mb-4 text-center">Por que você não tem nada a perder:</h5>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <div className="text-zinc-300 font-medium">Me conhece há 8 anos</div>
                    <div className="text-zinc-500 text-xs">Amigos em comum, história juntos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-zinc-300 font-medium">Update toda semana</div>
                    <div className="text-zinc-500 text-xs">Você acompanha cada passo no WhatsApp</div>
                  </div>
                  <div className="text-center">
                    <div className="text-zinc-300 font-medium">O app é seu pra sempre</div>
                    <div className="text-zinc-500 text-xs">Código na sua mão, você é o dono</div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10 pt-8 border-t border-zinc-800">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-8 h-8 text-green-500" />
                    <div>
                      <div className="font-medium">Minha palavra pra você</div>
                      <div className="text-sm text-zinc-500">
                        45 dias pra entregar. 60 dias pra te ajudar. Se não cumprir, você me cobra.
                      </div>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/5548998649898?text=Olá%20Bruno!%20Vi%20a%20proposta%20do%20Seguro%20Pneu%20Pro%20e%20quero%20fechar%20o%20projeto"
                    target="_blank"
                    className="group flex items-center justify-center gap-2 px-10 py-5 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl font-semibold text-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 glow-sm hover:glow w-full sm:w-auto"
                  >
                    Bora fechar, Bruno
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
          <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-amber-950/20 to-zinc-950 border border-amber-900/30 text-center">
            <div className="inline-flex items-center gap-2 text-amber-500 mb-6">
              <Clock className="w-5 h-5" />
              <span className="font-medium text-sm uppercase tracking-wider">
                Agilson, pensa comigo
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Você já teve essa ideia há quanto tempo?
            </h3>

            <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
              Quantos meses (ou anos) você ficou pensando nisso?
              Pesquisando, conversando, esperando o "momento certo"?
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="p-5 rounded-2xl bg-red-950/20 border border-red-900/30">
                <div className="text-red-400 font-medium mb-2">Se você esperar mais...</div>
                <p className="text-zinc-500 text-sm">
                  Daqui 6 meses você ainda vai estar pensando.
                  E alguém em Sergipe pode lançar antes de você.
                  <br /><br />
                  <span className="text-red-400/80 text-xs">O cara que chega primeiro, fica com o mercado.</span>
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-green-950/20 border border-green-900/30">
                <div className="text-green-400 font-medium mb-2">Se você fechar agora...</div>
                <p className="text-zinc-500 text-sm">
                  Em 45 dias seu app tá no ar.
                  Em 90 dias você já tem clientes pagando.
                  Em 6 meses, um negócio de verdade rodando.
                  <br /><br />
                  <span className="text-green-400/80 text-xs">E ainda leva na frente a vantagem de ser o primeiro.</span>
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-zinc-800/50 border border-zinc-700/50">
              <p className="text-zinc-300 text-sm">
                A gente se conhece há 8 anos, Agilson.
                <br />
                <span className="text-zinc-500">Você sabe que eu cumpro o que prometo.</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
