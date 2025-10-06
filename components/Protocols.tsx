"use client"

import { Button } from "@/components/ui/button"
import { Check, Crown, Target } from "lucide-react"

const protocols = [
  {
    name: "PRESENCIAL",
    subtitle: "Treino presencial personalizado",
    icon: Target,
    color: "from-gray-400 to-gray-500",
    whatsappLink: "https://wa.me/557181751951?text=Olá!%20Tenho%20interesse%20no%20Plano%20Presencial.",
    features: [
      "Treino personalizado presencial",
      "Acompanhamento direto na academia",
      "Correção de postura em tempo real",
      "Motivação presencial constante",
      "Ajustes imediatos no treino",
    ],
  },
  {
    name: "ONLINE",
    subtitle: "Consultoria online completa",
    icon: Crown,
    color: "from-red-500 to-red-600",
    whatsappLink: "https://wa.me/557181751951?text=Olá!%20Tenho%20interesse%20no%20Plano%20Online.",
    features: [
      "Treino personalizado online",
      "Atendimento via WhatsApp 24/7",
      "Acompanhamento semanal",
      "Ajustes de treino ilimitados",
      "Consultoria por videochamada",
    ],
  },
]

export default function Protocols() {
  return (
    <section id="precos" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent heading-primary">
            Escolha Seu Plano
          </h2>
          <p className="text-xl text-gray-300 mb-2 font-century">Transforme seu corpo com nossos protocolos</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {protocols.map((protocol, index) => {
            const IconComponent = protocol.icon
            return (
              <div
                key={index}
                className="relative bg-white rounded-3xl shadow-2xl overflow-hidden hover:-translate-y-2 hover:scale-105 transition-transform duration-300"
              >
                {/* Header com gradiente */}
                <div className={`bg-gradient-to-br ${protocol.color} p-8 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                        <IconComponent className="w-8 h-8" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-center mb-2 heading-primary">{protocol.name}</h3>
                    <p className="text-center text-white/80 text-sm mb-4 font-century">{protocol.subtitle}</p>
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="p-8">
                  <ul className="space-y-4 mb-8">
                    {protocol.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-gray-700">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <Check className="w-3 h-3 text-green-600" />
                        </div>
                        <span className="text-sm font-century">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={() => window.open(protocol.whatsappLink, "_blank")}
                    className={`w-full bg-gradient-to-r ${protocol.color} hover:opacity-90 text-white font-bold py-4 rounded-2xl text-lg transition-all duration-300 shadow-lg hover:shadow-xl font-century`}
                  >
                    COMEÇAR AGORA
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
