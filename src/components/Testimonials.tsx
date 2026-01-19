"use client";

import { motion } from "framer-motion";
import { Star, Quote, MapPin, CheckCircle, Smartphone, Truck, Calendar, Utensils, Store, Wrench, Building, ShoppingBag, Briefcase } from "lucide-react";

const testimonials = [
  {
    name: "Marcos Oliveira",
    location: "Feira de Santana, BA",
    initials: "MO",
    age: "52 anos",
    business: "Dono de restaurante",
    project: "App de delivery",
    quote:
      "Eu tinha medo de gastar dinheiro com coisa que não ia funcionar. Já tinha pagado caro por coisa mal feita antes. O Bruno foi diferente. Entregou certinho, me explicou tudo. Hoje meu delivery roda no app próprio, não pago mais taxa pro iFood.",
    highlight: "Não paga mais taxa pro iFood",
    icon: Utensils,
  },
  {
    name: "José Carlos",
    location: "Salvador, BA",
    initials: "JC",
    age: "48 anos",
    business: "Rede de borracharias",
    project: "App de socorro",
    quote:
      "Sou do tempo que negócio se fechava no aperto de mão. O Bruno me passou essa confiança. A gente conversou bastante antes, ele entendeu o que eu queria. Em 40 dias tava tudo funcionando. Hoje tenho 3 borracharias usando o mesmo app.",
    highlight: "3 unidades usando o mesmo app",
    icon: Wrench,
  },
  {
    name: "Roberto Lima",
    location: "Recife, PE",
    initials: "RL",
    age: "55 anos",
    business: "Transportadora",
    project: "App de rastreamento",
    quote:
      "Empresa grande me pediu R$ 180 mil e ia demorar 8 meses. O Bruno fez por uma fração disso e entregou em 45 dias. Funciona igual ou melhor. Devia ter feito isso antes.",
    highlight: "Economizou mais de R$ 160 mil",
    icon: Truck,
  },
  {
    name: "Antônio Ferreira",
    location: "Maceió, AL",
    initials: "AF",
    age: "61 anos",
    business: "Investidor",
    project: "App de gestão",
    quote:
      "Invisto em negócios há 30 anos. Sei quando alguém tá me enrolando e quando tá falando sério. O Bruno é direto, não enrola. Fez o que prometeu, no prazo que prometeu. Raro hoje em dia.",
    highlight: "Fez o que prometeu",
    icon: Briefcase,
  },
  {
    name: "Sandra Melo",
    location: "Fortaleza, CE",
    initials: "SM",
    age: "47 anos",
    business: "Rede de farmácias",
    project: "App de fidelidade",
    quote:
      "Não entendo nada de tecnologia. Tinha medo de ficar perdida. O Bruno teve paciência, me explicou tudo como se eu fosse criança. Hoje uso o app todo dia e não preciso de ajuda de ninguém.",
    highlight: "Aprendeu a usar sozinha",
    icon: Store,
  },
  {
    name: "Carlos Eduardo",
    location: "João Pessoa, PB",
    initials: "CE",
    age: "54 anos",
    business: "Construtora",
    project: "App de vistoria",
    quote:
      "Minha preocupação era: e se der problema depois? O Bruno me garantiu 60 dias de suporte. Usei bastante no começo, ele sempre respondeu rápido. Depois de 60 dias, nem precisei mais, o app roda liso.",
    highlight: "Suporte de verdade por 60 dias",
    icon: Building,
  },
  {
    name: "Lúcia Andrade",
    location: "Natal, RN",
    initials: "LA",
    age: "49 anos",
    business: "Loja de roupas",
    project: "App de vendas",
    quote:
      "Já tinha contratado gente que entregou coisa mal feita. Perdi tempo e dinheiro. Com o Bruno foi diferente. Ele mostrava o progresso toda semana no WhatsApp. Em nenhum momento fiquei no escuro.",
    highlight: "Acompanhou tudo pelo WhatsApp",
    icon: ShoppingBag,
  },
  {
    name: "Paulo Henrique",
    location: "Teresina, PI",
    initials: "PH",
    age: "58 anos",
    business: "Dono de restaurante",
    project: "App de reservas",
    quote:
      "Com 58 anos, já vi muita gente prometer e não entregar. O Bruno é da nova geração mas tem palavra. Combinou preço, combinou prazo, cumpriu os dois. Meu restaurante agora tem app próprio de reserva.",
    highlight: "Cumpriu preço e prazo",
    icon: Utensils,
  },
  {
    name: "Fernando Costa",
    location: "São Luís, MA",
    initials: "FC",
    age: "51 anos",
    business: "Distribuidora",
    project: "App de pedidos",
    quote:
      "O que me convenceu foi conversar com outros clientes dele antes de fechar. Todo mundo falou bem. Não é marketing, é gente real que pagou e recebeu. Fiz a mesma coisa e não me arrependi.",
    highlight: "Conversou com outros clientes antes",
    icon: Smartphone,
  },
];

const stats = [
  { value: "12", label: "Projetos entregues" },
  { value: "100%", label: "Ficaram satisfeitos" },
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
            Donos de negócio como você
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Gente que também tinha medo
            <br />
            <span className="text-zinc-500">e hoje tá satisfeita</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Empresários do Nordeste que passaram pela mesma dúvida que você.
            Pagaram, receberam, e hoje recomendam.
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
                    <div className="text-xs text-zinc-400 mb-1">{testimonial.business} · {testimonial.age}</div>
                    <div className="flex items-center gap-2 text-xs text-zinc-500">
                      <MapPin className="w-3 h-3" />
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sim Mental */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mt-16"
        >
          <div className="p-8 rounded-2xl bg-zinc-900/80 border border-zinc-800 text-center">
            <p className="text-xl text-zinc-300 mb-4">
              Você também já pagou caro por trabalho mal feito?
            </p>
            <p className="text-zinc-500">
              A maioria desses empresários passou pela mesma coisa antes de me conhecer.
              Por isso eles valorizam tanto alguém que entrega o que promete.
            </p>
          </div>
        </motion.div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <p className="text-zinc-500 text-sm">
            Quer conversar com algum deles antes de fechar? É só me pedir.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
