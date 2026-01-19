"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Users, Clock, TrendingUp, Sparkles } from "lucide-react";

export default function Hero() {
  const [clients, setClients] = useState(150);
  const monthlyPrice = 29.9;
  const revenue = clients * monthlyPrice;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-red-500/20 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-amber-500/20 rounded-full blur-[128px]" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge personalizado */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 mb-4"
          >
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span className="text-sm text-amber-400 font-medium">
              Proposta exclusiva para Agilson
            </span>
          </motion.div>

          {/* Trust badge - desde 2018 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mb-8"
          >
            <span className="text-zinc-500 text-sm">
              A gente se conhece desde 2018. Você sabe que eu sou de palavra.
            </span>
          </motion.div>

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            Agilson, seu app
            <br />
            <span className="gradient-text">pronto em 45 dias</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-zinc-400 max-w-2xl mx-auto mb-4"
          >
            Eu vou criar o Seguro Pneu Pro pra você.
            <br />
            <span className="text-white font-medium">Um app pro cliente, um pro socorrista, e uma tela pra você controlar tudo.</span>
          </motion.p>

          {/* Social proof mini */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-10"
          >
            <div className="flex items-center gap-2 text-sm text-zinc-500">
              <Users className="w-4 h-4 text-green-500" />
              <span><span className="text-white font-medium">12</span> donos de negócio já confiaram</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-zinc-500">
              <Clock className="w-4 h-4 text-blue-500" />
              <span>Pronto em <span className="text-white font-medium">45 dias</span></span>
            </div>
            <div className="flex items-center gap-2 text-sm text-zinc-500">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span><span className="text-white font-medium">8 anos</span> de amizade</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a
              href="#pricing"
              className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 rounded-full font-semibold text-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 glow-sm hover:glow"
            >
              Ver quanto custa
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#apps"
              className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-lg border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800/50 transition-all duration-300"
            >
              Ver como funciona
            </a>
          </motion.div>

          {/* ROI Calculator */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900/80 backdrop-blur-sm">
              {/* Calculator header */}
              <div className="p-6 border-b border-zinc-800 bg-gradient-to-r from-zinc-900 to-zinc-950">
                <div className="flex items-center justify-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-amber-500" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-lg">Quanto você pode ganhar?</h3>
                    <p className="text-sm text-zinc-500">Arraste e veja</p>
                  </div>
                </div>
              </div>

              {/* Calculator body */}
              <div className="p-8">
                {/* Slider */}
                <div className="mb-8">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <label className="text-sm text-zinc-400">Quantos clientes pagando por mês:</label>
                    <span className="text-2xl font-bold text-white">{clients} clientes</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="500"
                    step="10"
                    value={clients}
                    onChange={(e) => setClients(Number(e.target.value))}
                    className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-red-500"
                  />
                  <div className="flex justify-between text-xs text-zinc-600 mt-2">
                    <span>50 clientes</span>
                    <span>500 clientes</span>
                  </div>
                </div>

                {/* Results */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-5 rounded-2xl bg-zinc-800/50 text-center">
                    <div className="text-sm text-zinc-500 mb-1">Você recebe por mês</div>
                    <div className="text-2xl font-bold gradient-text">
                      R$ {revenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </div>
                    <div className="text-xs text-zinc-600">todo mês na sua conta</div>
                  </div>
                  <div className="p-5 rounded-2xl bg-zinc-800/50 text-center">
                    <div className="text-sm text-zinc-500 mb-1">Em 1 ano</div>
                    <div className="text-2xl font-bold text-green-500">
                      R$ {(revenue * 12).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </div>
                    <div className="text-xs text-zinc-600">se mantiver esses clientes</div>
                  </div>
                  <div className="p-5 rounded-2xl bg-green-900/20 border border-green-800/30 text-center">
                    <div className="text-sm text-zinc-500 mb-1">Em 2 anos</div>
                    <div className="text-2xl font-bold text-green-500">
                      R$ {(revenue * 24).toLocaleString('pt-BR', { minimumFractionDigits: 0 })}
                    </div>
                    <div className="text-xs text-zinc-600">seu negócio crescendo</div>
                  </div>
                </div>

                {/* Insight message */}
                <div className="mt-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                  <p className="text-sm text-amber-200 text-center">
                    {clients >= 200 ? (
                      <>
                        <span className="font-semibold">Olha esse número!</span> Com {clients} clientes você ganha{' '}
                        <span className="font-bold">R$ {revenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} por mês</span>.{' '}
                        É dinheiro entrando todo mês no automático.
                      </>
                    ) : clients >= 100 ? (
                      <>
                        <span className="font-semibold">Começando bem.</span> {clients} clientes é pouca gente.{' '}
                        Imagina só: com{' '}
                        <span className="font-bold">R$ {revenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} por mês</span>{' '}
                        você já paga suas contas e ainda sobra.
                      </>
                    ) : (
                      <>
                        <span className="font-semibold">É só o começo.</span> Com {clients} clientes você já ganha{' '}
                        <span className="font-bold">R$ {revenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} por mês</span>.{' '}
                        E vai só aumentar.
                      </>
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-red-500/10 to-amber-500/10 rounded-3xl blur-xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
