"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Clock, Users, FileText } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 mb-8"
          >
            <FileText className="w-4 h-4 text-green-500" />
            <span className="text-sm text-green-400 font-medium">
              Proposta personalizada
            </span>
          </motion.div>

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            Lance seu negócio de
            <br />
            <span className="gradient-text">assistência veicular</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-zinc-400 max-w-2xl mx-auto mb-4"
          >
            Sistema completo com 3 apps profissionais + painel admin.
            <br />
            <span className="text-white font-medium">Fature R$ 5.000+/mês</span> com assinaturas recorrentes.
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
              <span><span className="text-white font-medium">12+</span> sistemas entregues</span>
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
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <a
              href="#pricing"
              className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 rounded-full font-semibold text-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 glow-sm hover:glow"
            >
              Ver proposta completa
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#video"
              className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-lg border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800/50 transition-all duration-300"
            >
              <Play className="w-5 h-5" />
              Ver sistema funcionando
            </a>
          </motion.div>

          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            id="video"
            className="relative max-w-4xl mx-auto"
          >
            {/* Video container with glow effect */}
            <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/50 aspect-video group cursor-pointer">
              {/* Placeholder gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900" />

              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-red-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-red-500/30">
                  <Play className="w-8 h-8 text-white ml-1" fill="white" />
                </div>
              </div>

              {/* Video text */}
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-zinc-400 text-sm">
                  Veja o sistema completo em ação: App Cliente, App Prestador e Painel Admin
                </p>
              </div>

              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-amber-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </div>

            {/* Video caption */}
            <p className="text-center text-zinc-600 text-sm mt-4">
              Demonstração de 2 minutos do sistema completo
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
