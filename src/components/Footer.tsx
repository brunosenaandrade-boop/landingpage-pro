"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Code2, Rocket, Clock, Shield } from "lucide-react";

export default function Footer() {
  return (
    <>
      {/* Final CTA */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-500/10 rounded-full blur-[128px]" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Agilson, bora fazer
              <br />
              <span className="gradient-text">seu app?</span>
            </h2>
            <p className="text-xl text-zinc-400 mb-6">
              Daqui 45 dias você pode estar ganhando dinheiro com isso.
            </p>

            {/* Trust elements */}
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              <div className="flex items-center gap-2 text-sm text-zinc-400">
                <Rocket className="w-4 h-4 text-red-500" />
                <span>Pronto em 45 dias</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-zinc-400">
                <Clock className="w-4 h-4 text-blue-500" />
                <span>60 dias comigo te ajudando</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-zinc-400">
                <Shield className="w-4 h-4 text-green-500" />
                <span>O app é seu</span>
              </div>
            </div>

            <a
              href="https://wa.me/5548998649898?text=Olá%20Bruno!%20Vi%20a%20proposta%20do%20Seguro%20Pneu%20Pro%20e%20quero%20fechar%20o%20projeto"
              target="_blank"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-red-500 to-red-600 rounded-full font-semibold text-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 glow"
            >
              <MessageCircle className="w-6 h-6" />
              Vamos conversar
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-semibold">Bruno Sena</span>
                <p className="text-xs text-zinc-500">Faço apps e sistemas</p>
              </div>
            </div>
            <p className="text-zinc-500 text-sm">
              Proposta exclusiva para Agilson &middot; Janeiro 2026
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/5548998649898?text=Olá%20Bruno!%20Vi%20a%20proposta%20e%20quero%20conversar"
        target="_blank"
        className="fixed bottom-8 right-8 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:scale-110 transition-transform z-50"
      >
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-white fill-current">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </>
  );
}
