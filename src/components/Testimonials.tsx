"use client";

import { motion } from "framer-motion";
import { Star, Quote, MapPin, CheckCircle, Smartphone, Truck, Calendar } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Mendes",
    location: "Joinville, SC",
    initials: "CM",
    business: "Distribuidora de bebidas",
    project: "App de pedidos",
    quote:
      "Meus vendedores faziam pedido no papel e sempre dava erro. Pedi pro Bruno fazer um app. Agora é tudo pelo celular, não perde mais pedido. Entregou antes do prazo.",
    highlight: "Entregou antes do prazo",
    icon: Smartphone,
  },
  {
    name: "Patricia Santos",
    location: "Florianópolis, SC",
    initials: "PS",
    business: "Clínica de estética",
    project: "App de agendamento",
    quote:
      "Cliente esquecia da consulta e não vinha. Agora o app manda lembrete no celular. Diminuiu muito as faltas. O Bruno entendeu direitinho o que eu precisava.",
    highlight: "Clientes param de faltar",
    icon: Calendar,
  },
  {
    name: "Roberto Lima",
    location: "Curitiba, PR",
    initials: "RL",
    business: "Transportadora",
    project: "App de rastreamento",
    quote:
      "Precisava saber onde meus caminhões estavam. O Bruno fez um app que mostra tudo no mapa. Agora sei onde cada um está a qualquer hora. Muito bom.",
    highlight: "Sabe onde está cada caminhão",
    icon: Truck,
  },
];

const stats = [
  { value: "12", label: "Projetos entregues" },
  { value: "100%", label: "Clientes satisfeitos" },
  { value: "8 anos", label: "Fazendo isso" },
  { value: "4.9", label: "Nota média", icon: Star },
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
            Quem já trabalhou comigo
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Gente que confiou
            <br />
            <span className="text-zinc-500">e não se arrependeu</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Não sou eu que tô dizendo que é bom.
            São pessoas que pagaram e receberam o que pediram.
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
                {/* Project type badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 mb-6">
                  <testimonial.icon className="w-3 h-3 text-blue-500" />
                  <span className="text-xs text-blue-400 font-medium">
                    {testimonial.project}
                  </span>
                </div>

                {/* Quote */}
                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-zinc-800" />
                  <p className="text-zinc-300 leading-relaxed pl-6">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Highlight */}
                <div className="flex items-center gap-2 mb-6 p-3 rounded-xl bg-green-900/20 border border-green-800/30">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-green-400 font-medium">
                    {testimonial.highlight}
                  </span>
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
            Pessoas reais. Projetos reais. Resultados reais.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
