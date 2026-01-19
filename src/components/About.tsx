"use client";

import { motion } from "framer-motion";
import { Code, Linkedin, Github, Award, Briefcase, GraduationCap } from "lucide-react";

const credentials = [
  {
    icon: Briefcase,
    title: "12+ sistemas entregues",
    description: "Projetos em produção gerando receita",
  },
  {
    icon: Code,
    title: "8 anos de experiência",
    description: "Desenvolvimento mobile e web",
  },
  {
    icon: Award,
    title: "Especialista Flutter",
    description: "Apps nativos iOS e Android",
  },
  {
    icon: GraduationCap,
    title: "Formação sólida",
    description: "Engenharia de Software",
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
                {/* Placeholder photo - avatar style */}
                <div className="aspect-square bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                    <span className="text-6xl font-bold text-white">B</span>
                  </div>
                </div>

                {/* Info bar */}
                <div className="p-6 border-t border-zinc-800">
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
                Quem vai desenvolver seu sistema
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
                Não é uma empresa.
                <br />
                <span className="text-zinc-500">É um desenvolvedor dedicado.</span>
              </h2>

              <div className="space-y-4 text-zinc-400 mb-8">
                <p>
                  Meu nome é Bruno e desenvolvo sistemas há mais de 8 anos.
                  Já entreguei dezenas de projetos para empresas de todos os tamanhos.
                </p>
                <p>
                  O Seguro Pneu Pro nasceu de um projeto real que desenvolvi para um cliente.
                  Funcionou tão bem que decidi oferecer o mesmo sistema para outros empreendedores.
                </p>
                <p className="text-white font-medium">
                  Você não está comprando um template genérico. Está contratando
                  um desenvolvedor experiente que vai personalizar tudo para você.
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
                  <h4 className="font-bold">Compromisso de qualidade</h4>
                  <p className="text-zinc-400 text-sm">
                    Se não ficar satisfeito em 30 dias, devolvo seu dinheiro. Sem perguntas.
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
