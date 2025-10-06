"use client"

const services = [
  {
    title: "Treino Personalizado",
    description:
      "Programa de exercícios desenvolvido especificamente para seus objetivos, com vídeos explicativos para cada movimento.",
    icon: "💪",
  },
  {
    title: "Mantenha o Foco",
    description:
      "suporte adaptado para queconsiga manter o foco em suas atividades e não deixar de trainar ..",
    icon: "👁️",
  },
  {
    title: "Acompanhamento Online",
    description: "Suporte constante via WhatsApp com ajustes em tempo real e motivação diária para seus treinos.",
    icon: "📱",
  },
  {
    title: "Consultoria Completa",
    description:
      "Orientação sobre suplementação, descanso e estratégias para maximizar seus resultados de forma saudável.",
    icon: "🎯",
  },
]

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 heading-primary">
            COMECE
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mt-2 heading-primary">
            AGORA!
          </h3>
          <p className="text-lg text-gray-300 font-century">conheça nossos serviços</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="border-2 border-red-600 rounded-lg p-6 bg-gray-900/50 backdrop-blur-sm hover:scale-105 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="text-4xl mb-4 text-center">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-center heading-secondary">{service.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed text-center font-century">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold mb-4 heading-primary">
            Yago Ramos Treinad
            or
          </h3>
          <p className="text-lg text-gray-300 mb-8 font-century">CREF: 18177-G</p>
        </div>
      </div>
    </section>
  )
}
