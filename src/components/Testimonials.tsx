"use client";

import { motion } from "framer-motion";
import { Star, Quote, TrendingUp, MapPin } from "lucide-react";

const testimonials = [
  {
    name: "Ricardo Oliveira",
    location: "São Paulo, SP",
    image: null,
    initials: "RO",
    role: "Empresário",
    revenue: "R$ 8.200/mês",
    clients: "280 assinantes",
    quote:
      "Recuperei o investimento em 2 meses. Hoje tenho 280 clientes ativos e o sistema roda praticamente sozinho. Melhor decisão que tomei.",
    highlight: "Recuperou em 2 meses",
  },
  {
    name: "Marcos Silva",
    location: "Curitiba, PR",
    image: null,
    initials: "MS",
    role: "Ex-caminhoneiro",
    revenue: "R$ 4.800/mês",
    clients: "160 assinantes",
    quote:
      "Saí da estrada e montei meu próprio negócio. O Bruno entregou tudo funcionando e me ensinou a operar. Hoje faturo mais do que quando dirigia.",
    highlight: "Mudou de carreira",
  },
  {
    name: "Fernanda Costa",
    location: "Belo Horizonte, MG",
    image: null,
    initials: "FC",
    role: "Empreendedora",
    revenue: "R$ 12.500/mês",
    clients: "420 assinantes",
    quote:
      "Comecei com medo, mas o suporte do Bruno me deu confiança. Em 6 meses já tinha o maior serviço de assistência de pneus da minha região.",
    highlight: "420 clientes em 6 meses",
  },
];

const stats = [
  { value: "12+", label: "Sistemas entregues" },
  { value: "3.200+", label: "Usuários ativos" },
  { value: "R$ 180k+", label: "Faturamento dos clientes/mês" },
  { value: "4.9", label: "Avaliação média", icon: Star },
];

export default function Testimonials() {
  return (
    <section className="py-32 relative" id="depoimentos">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-950/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-green-500 font-medium text-sm uppercase tracking-wider">
            Resultados reais
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Quem já está
            <br />
            <span className="text-zinc-500">faturando com o sistema</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Não acredite só em mim. Veja o que dizem os empreendedores que já
            estão operando com o Seguro Pneu Pro.
          </p>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800"
            >
              <div className="flex items-center justify-center gap-1">
                <span className="text-3xl font-bold gradient-text">{stat.value}</span>
                {stat.icon && <stat.icon className="w-5 h-5 text-amber-500 fill-amber-500" />}
              </div>
              <span className="text-zinc-500 text-sm">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative"
            >
              <div className="h-full rounded-2xl bg-zinc-900 border border-zinc-800 p-8 hover:border-zinc-700 transition-colors">
                {/* Highlight badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30 mb-6">
                  <TrendingUp className="w-3 h-3 text-green-500" />
                  <span className="text-xs text-green-400 font-medium">
                    {testimonial.highlight}
                  </span>
                </div>

                {/* Quote */}
                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-zinc-800" />
                  <p className="text-zinc-300 leading-relaxed pl-6">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Revenue stats */}
                <div className="flex gap-4 mb-6 p-4 rounded-xl bg-zinc-800/50">
                  <div>
                    <div className="text-lg font-bold text-green-500">
                      {testimonial.revenue}
                    </div>
                    <div className="text-xs text-zinc-500">Faturamento</div>
                  </div>
                  <div className="w-px bg-zinc-700" />
                  <div>
                    <div className="text-lg font-bold text-white">
                      {testimonial.clients}
                    </div>
                    <div className="text-xs text-zinc-500">Clientes</div>
                  </div>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white font-bold">
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="font-medium">{testimonial.name}</div>
                    <div className="flex items-center gap-2 text-sm text-zinc-500">
                      <MapPin className="w-3 h-3" />
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-zinc-500 text-sm">
            Esses são resultados reais de empreendedores que começaram do zero.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
