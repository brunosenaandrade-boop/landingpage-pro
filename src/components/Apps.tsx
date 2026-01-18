"use client";

import { motion } from "framer-motion";
import {
  User,
  Wrench,
  LayoutDashboard,
  Check,
  MapPin,
  CreditCard,
  Bell,
  MessageCircle,
  BarChart3,
  Settings,
  Navigation,
  Clock,
} from "lucide-react";

const apps = [
  {
    icon: User,
    name: "App Cliente",
    color: "from-red-500 to-red-600",
    description: "Para os assinantes do serviço",
    mockupColor: "bg-gradient-to-br from-red-600 to-red-800",
    highlights: [
      { icon: MapPin, text: "GPS em tempo real" },
      { icon: CreditCard, text: "PIX e Cartão" },
      { icon: Bell, text: "Push notifications" },
    ],
    features: [
      "Cadastro com validação de CPF",
      "Múltiplos planos de assinatura",
      "Solicitação de socorro em 2 cliques",
      "Acompanhamento do prestador no mapa",
      "Histórico completo de atendimentos",
      "Pagamento automático recorrente",
    ],
  },
  {
    icon: Wrench,
    name: "App Prestador",
    color: "from-blue-500 to-blue-600",
    description: "Para os socorristas parceiros",
    mockupColor: "bg-gradient-to-br from-blue-600 to-blue-800",
    highlights: [
      { icon: Navigation, text: "Waze/Google Maps" },
      { icon: MessageCircle, text: "Chat integrado" },
      { icon: Clock, text: "Timer de atendimento" },
    ],
    features: [
      "Notificação instantânea de chamados",
      "Aceite com tempo limite configurável",
      "Navegação integrada (Waze/Maps)",
      "Chat em tempo real com cliente",
      "Fotos antes/depois do serviço",
      "Dashboard de ganhos semanais",
    ],
  },
  {
    icon: LayoutDashboard,
    name: "Painel Admin",
    color: "from-zinc-600 to-zinc-700",
    description: "Controle total do seu negócio",
    mockupColor: "bg-gradient-to-br from-zinc-700 to-zinc-900",
    highlights: [
      { icon: BarChart3, text: "Métricas em tempo real" },
      { icon: Settings, text: "100% configurável" },
      { icon: CreditCard, text: "Controle financeiro" },
    ],
    features: [
      "Dashboard com KPIs principais",
      "Gestão completa de clientes",
      "Aprovação/bloqueio de prestadores",
      "Monitoramento de chamados ao vivo",
      "Relatórios financeiros detalhados",
      "Configuração de planos e preços",
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
            3 aplicativos profissionais
            <br />
            <span className="text-zinc-500">prontos para sua marca</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Sistema completo que conecta clientes, prestadores e você.
            Tudo personalizado com sua identidade visual.
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
                {/* Header with mockup */}
                <div className={`relative h-64 bg-gradient-to-br ${app.color} p-6 overflow-hidden`}>
                  {/* Phone mockup */}
                  <div className="absolute right-4 -bottom-8 w-36 h-72">
                    <div className={`w-full h-full rounded-3xl ${app.mockupColor} border-4 border-zinc-800 shadow-2xl transform rotate-6 group-hover:rotate-3 transition-transform duration-500`}>
                      {/* Screen content simulation */}
                      <div className="p-3 h-full">
                        <div className="w-full h-2 bg-white/20 rounded mb-2" />
                        <div className="w-3/4 h-2 bg-white/20 rounded mb-4" />
                        <div className="w-full h-20 bg-white/10 rounded-lg mb-3" />
                        <div className="space-y-2">
                          <div className="w-full h-3 bg-white/10 rounded" />
                          <div className="w-full h-3 bg-white/10 rounded" />
                          <div className="w-2/3 h-3 bg-white/10 rounded" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* App info */}
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center mb-4">
                      <app.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{app.name}</h3>
                    <p className="text-white/80 text-sm">{app.description}</p>
                  </div>
                </div>

                {/* Key highlights */}
                <div className="px-6 py-4 border-b border-zinc-800 flex flex-wrap gap-3">
                  {app.highlights.map((highlight) => (
                    <div
                      key={highlight.text}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-800 text-xs"
                    >
                      <highlight.icon className="w-3 h-3 text-red-500" />
                      <span className="text-zinc-300">{highlight.text}</span>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div className="p-6">
                  <ul className="space-y-3">
                    {app.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
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

        {/* Tech stack + differentiator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="max-w-4xl mx-auto rounded-2xl bg-zinc-900/50 border border-zinc-800 p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-xl font-bold mb-3">
                  Tecnologia de ponta, código seu
                </h4>
                <p className="text-zinc-400 text-sm mb-4">
                  Diferente de soluções "white label" onde você paga mensalidade eterna,
                  aqui você recebe o código fonte completo. É seu patrimônio digital.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Flutter", "Supabase", "PostgreSQL", "Firebase", "Google Maps"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs px-3 py-1.5 rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-400"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-4 rounded-xl bg-zinc-800/50">
                  <div className="text-2xl font-bold gradient-text">100%</div>
                  <div className="text-xs text-zinc-500">Código fonte seu</div>
                </div>
                <div className="p-4 rounded-xl bg-zinc-800/50">
                  <div className="text-2xl font-bold gradient-text">R$ 0</div>
                  <div className="text-xs text-zinc-500">Mensalidade do sistema</div>
                </div>
                <div className="p-4 rounded-xl bg-zinc-800/50">
                  <div className="text-2xl font-bold gradient-text">iOS + Android</div>
                  <div className="text-xs text-zinc-500">Multiplataforma</div>
                </div>
                <div className="p-4 rounded-xl bg-zinc-800/50">
                  <div className="text-2xl font-bold gradient-text">Ilimitado</div>
                  <div className="text-xs text-zinc-500">Usuários/clientes</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
