"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Github, Award, Briefcase, GraduationCap, Rocket, Headphones } from "lucide-react";

const credentials = [
  {
    icon: Briefcase,
    title: "12+ projetos entregues",
    description: "Apps e sistemas em produção",
  },
  {
    icon: Rocket,
    title: "8 anos de experiência",
    description: "Desenvolvimento mobile e web",
  },
  {
    icon: Award,
    title: "Especialista Flutter",
    description: "Apps nativos iOS e Android",
  },
  {
    icon: Headphones,
    title: "Suporte direto",
    description: "Comunicação sem intermediários",
  },
];

export default function About() {
  return (
    <section className="py-32 relative" id="sobre">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Photo side */}
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 to-amber-500/20 rounded-3xl blur-2xl" />

              {/* Photo container */}
              <div className="relative rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900">
                {/* Real photo */}
                <div className="aspect-square relative">
                  <Image
                    src="/bruno.png"
                    alt="Bruno Sena - Desenvolvedor Full Stack"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Info bar */}
                <div className="p-6 border-t border-zinc-800 bg-zinc-900/90 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold">Bruno Sena</h3>
                      <p className="text-zinc-400 text-sm">Desenvolvedor Full Stack</p>
                    </div>
                    <div className="flex gap-3">
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition-colors"
                      >
                        <Linkedin className="w-5 h-5 text-zinc-400" />
                      </a>
                      <a
                        href="https://github.com/brunosenaandrade-boop"
                        target="_blank"
                        className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition-colors"
                      >
                        <Github className="w-5 h-5 text-zinc-400" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content side */}
            <div>
              <span className="text-red-500 font-medium text-sm uppercase tracking-wider">
                Por trás do código
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
                Sem intermediário.
                <br />
                <span className="text-zinc-500">Direto com quem faz.</span>
              </h2>

              <div className="space-y-4 text-zinc-400 mb-8">
                <p>
                  Quando você contrata uma software house, seu projeto vira um ticket.
                  Passa por gerente, coordenador, dev júnior, e você nunca fala com
                  quem realmente escreve o código.
                </p>
                <p>
                  Aqui é diferente. Eu sou o Bruno. Sou quem vai desenvolver seu sistema,
                  responder suas dúvidas no WhatsApp, e garantir que funcione.
                  Sem camadas. Sem burocracia.
                </p>
                <p className="text-white font-medium">
                  Comunicação rápida, decisões ágeis, custo menor, e comprometimento real
                  — porque meu nome está em jogo.
                </p>
              </div>

              {/* Credentials grid */}
              <div className="grid grid-cols-2 gap-4">
                {credentials.map((credential) => (
                  <div
                    key={credential.title}
                    className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800"
                  >
                    <credential.icon className="w-5 h-5 text-red-500 mb-2" />
                    <div className="font-medium text-sm">{credential.title}</div>
                    <div className="text-xs text-zinc-500">{credential.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Trust elements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-zinc-900 to-zinc-900/50 border border-zinc-800"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Award className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <h4 className="font-bold">Compromisso de entrega</h4>
                  <p className="text-zinc-400 text-sm">
                    Sistema funcionando em 45 dias + 60 dias de suporte dedicado comigo.
                  </p>
                </div>
              </div>
              <a
                href="https://wa.me/5548998649898?text=Olá%20Bruno!%20Vi%20a%20proposta%20e%20quero%20tirar%20uma%20dúvida"
                target="_blank"
                className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-full font-medium text-sm whitespace-nowrap transition-colors"
              >
                Tirar uma dúvida
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
