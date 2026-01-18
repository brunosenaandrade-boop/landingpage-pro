"use client";

import { motion } from "framer-motion";
import { ArrowRight, Smartphone, Shield, Zap } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-32">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-red-500/20 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-amber-500/20 rounded-full blur-[128px]" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-zinc-400">Desenvolvimento exclusivo e personalizado</span>
          </motion.div>

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            Seu negócio de
            <br />
            <span className="gradient-text">assistência de pneus</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10"
          >
            Desenvolvo 3 aplicativos profissionais sob medida para você criar
            um negócio de assistência veicular com receita recorrente.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a
              href="https://wa.me/5548998649898?text=Olá!%20Tenho%20interesse%20no%20Sistema%20Seguro%20Pneu%20Pro"
              target="_blank"
              className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 rounded-full font-semibold text-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 glow-sm hover:glow"
            >
              Falar com especialista
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#apps"
              className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-lg border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800/50 transition-all duration-300"
            >
              Ver demonstração
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-xl bg-zinc-800/50 border border-zinc-700">
                <Smartphone className="w-6 h-6 text-red-500" />
              </div>
              <div className="text-3xl font-bold">3</div>
              <div className="text-sm text-zinc-500">Apps completos</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-xl bg-zinc-800/50 border border-zinc-700">
                <Shield className="w-6 h-6 text-red-500" />
              </div>
              <div className="text-3xl font-bold">100%</div>
              <div className="text-sm text-zinc-500">Código fonte</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-xl bg-zinc-800/50 border border-zinc-700">
                <Zap className="w-6 h-6 text-red-500" />
              </div>
              <div className="text-3xl font-bold">60</div>
              <div className="text-sm text-zinc-500">Dias de suporte</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-zinc-600 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-zinc-400 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
