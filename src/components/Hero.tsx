"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Users, Clock, TrendingUp, Sparkles, Target } from "lucide-react";

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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 mb-8"
          >
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span className="text-sm text-amber-400 font-medium">
              Proposta exclusiva para Agilson
            </span>
          </motion.div>

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            Sua ideia pronta para
            <br />
            <span className="gradient-text">faturar em 45 dias</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-zinc-400 max-w-2xl mx-auto mb-4"
          >
            Sistema completo de assistência veicular com 3 apps + painel admin.
            <br />
            <span className="text-white font-medium">Código 100% seu, sem mensalidade, sem dependência.</span>
          </motion.p>

          {/* Social proof mini */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex items-center justify-center gap-6 mb-10"
          >
            <div className="flex items-center gap-2 text-sm text-zinc-500">
              <Users className="w-4 h-4 text-green-500" />
              <span><span className="text-white font-medium">12+</span> projetos entregues</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-zinc-500">
              <Clock className="w-4 h-4 text-blue-500" />
              <span>Entrega em <span className="text-white font-medium">30-45 dias</span></span>
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
              Ver investimento completo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#apps"
              className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-lg border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800/50 transition-all duration-300"
            >
              Ver o sistema
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
                    <Target className="w-5 h-5 text-amber-500" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-lg">Simule seu faturamento</h3>
                    <p className="text-sm text-zinc-500">Arraste e veja o potencial do negócio</p>
                  </div>
                </div>
              </div>

              {/* Calculator body */}
              <div className="p-8">
                {/* Slider */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <label className="text-sm text-zinc-400">Quantos clientes você pretende ter?</label>
                    <span className="text-2xl font-bold text-white">{clients}</span>
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
                    <div className="text-sm text-zinc-500 mb-1">Receita mensal</div>
                    <div className="text-2xl font-bold gradient-text">
                      R$ {revenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </div>
                    <div className="text-xs text-zinc-600">recorrente, todo mês</div>
                  </div>
                  <div className="p-5 rounded-2xl bg-zinc-800/50 text-center">
                    <div className="text-sm text-zinc-500 mb-1">Receita anual</div>
                    <div className="text-2xl font-bold text-green-500">
                      R$ {(revenue * 12).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </div>
                    <div className="text-xs text-zinc-600">projeção 12 meses</div>
                  </div>
                  <div className="p-5 rounded-2xl bg-green-900/20 border border-green-800/30 text-center">
                    <div className="text-sm text-zinc-500 mb-1">Em 2 anos</div>
                    <div className="flex items-center justify-center gap-1">
                      <TrendingUp className="w-5 h-5 text-green-500" />
                      <span className="text-2xl font-bold text-green-500">
                        R$ {(revenue * 24).toLocaleString('pt-BR', { minimumFractionDigits: 0 })}
                      </span>
                    </div>
                    <div className="text-xs text-zinc-600">potencial acumulado</div>
                  </div>
                </div>

                {/* Insight message */}
                <div className="mt-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                  <p className="text-sm text-amber-200 text-center">
                    {clients >= 200 ? (
                      <>
                        <span className="font-semibold">Números impressionantes!</span> Com {clients} clientes você constrói uma receita de{' '}
                        <span className="font-bold">R$ {(revenue * 12).toLocaleString('pt-BR', { minimumFractionDigits: 0 })}/ano</span>.{' '}
                        Isso é um negócio sólido.
                      </>
                    ) : clients >= 100 ? (
                      <>
                        <span className="font-semibold">Meta alcançável.</span> {clients} clientes representa{' '}
                        menos de 1% do mercado da sua cidade. Com{' '}
                        <span className="font-bold">R$ {revenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}/mês</span>{' '}
                        você já tem um negócio funcionando.
                      </>
                    ) : (
                      <>
                        <span className="font-semibold">Só o começo.</span> Com {clients} clientes você já fatura{' '}
                        <span className="font-bold">R$ {revenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}/mês</span>.{' '}
                        Imagine quando chegar em 200, 300...
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
