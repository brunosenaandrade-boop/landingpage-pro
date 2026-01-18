"use client";

import { motion } from "framer-motion";
import { User, Wrench, LayoutDashboard, Check } from "lucide-react";

const apps = [
  {
    icon: User,
    name: "App Cliente",
    color: "from-red-500 to-red-600",
    description: "Para os assinantes do serviço",
    features: [
      "Cadastro e login seguro",
      "Contratação de planos",
      "Solicitação de socorro",
      "Acompanhamento em tempo real",
      "Histórico de atendimentos",
      "Pagamento integrado",
    ],
  },
  {
    icon: Wrench,
    name: "App Prestador",
    color: "from-blue-500 to-blue-600",
    description: "Para os socorristas parceiros",
    features: [
      "Recebimento de chamados",
      "Aceite de atendimentos",
      "Navegação GPS integrada",
      "Chat com cliente",
      "Finalização de serviço",
      "Relatório de ganhos",
    ],
  },
  {
    icon: LayoutDashboard,
    name: "Painel Admin",
    color: "from-zinc-600 to-zinc-700",
    description: "Para você gerenciar tudo",
    features: [
      "Dashboard com métricas",
      "Gestão de clientes",
      "Gestão de prestadores",
      "Controle de chamados",
      "Relatórios financeiros",
      "Configurações do sistema",
    ],
  },
];

export default function Apps() {
  return (
    <section className="py-32 relative" id="apps">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-red-500 font-medium text-sm uppercase tracking-wider">
            Ecossistema completo
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            3 aplicativos
            <br />
            <span className="text-zinc-500">desenvolvidos sob medida</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Um ecossistema completo para conectar clientes, prestadores de serviço
            e você, o administrador do negócio.
          </p>
        </motion.div>

        {/* Apps grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {apps.map((app, index) => (
            <motion.div
              key={app.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              {/* Card */}
              <div className="relative rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden hover:border-zinc-700 transition-all duration-500">
                {/* Header gradient */}
                <div className={`h-48 bg-gradient-to-br ${app.color} p-8 flex flex-col justify-between`}>
                  <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center">
                    <app.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{app.name}</h3>
                    <p className="text-white/80 text-sm">{app.description}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="p-8">
                  <ul className="space-y-4">
                    {app.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-green-500" />
                        </div>
                        <span className="text-zinc-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-zinc-500 text-sm mb-6">Desenvolvido com tecnologias modernas</p>
          <div className="flex flex-wrap items-center justify-center gap-8 text-zinc-600">
            <span className="font-mono text-sm px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800">Flutter</span>
            <span className="font-mono text-sm px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800">Supabase</span>
            <span className="font-mono text-sm px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800">PostgreSQL</span>
            <span className="font-mono text-sm px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800">Firebase</span>
            <span className="font-mono text-sm px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800">Google Maps</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
