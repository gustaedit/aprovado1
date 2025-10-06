"use client"

import { useState } from "react"
import { Plus } from "lucide-react"

const faqItems = [
  {
    question: "Como funciona a consultoria online?",
    answer:
      "A consultoria online funciona através de videochamadas personalizadas onde desenvolvemos seu plano de treino específico para seus objetivos. Você recebe todo o material via WhatsApp e tem acompanhamento constante.",
  },
  {
    question: "Preciso ter experiência com treinos?",
    answer:
      "Não é necessário ter experiência prévia. Nosso método é desenvolvido para se adaptar a todos os níveis, desde iniciantes até avançados, com progressão gradual e segura.",
  },
  {
    question: "Quanto tempo para ver resultados?",
    answer:
      "Os primeiros resultados aparecem já nas primeiras 2-3 semanas. Transformações significativas ocorrem entre 8-12 semanas com dedicação e seguindo o protocolo.",
  },
  {
    question: "O acompanhamento é realmente personalizado?",
    answer:
      "Sim! Cada protocolo é único, considerando seu biotipo, objetivos, limitações, preferências alimentares e disponibilidade de tempo para treinar.",
  },
]

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-red-600 heading-primary">FAQ</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqItems.map((item, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full text-left p-6 bg-gray-800 rounded-lg flex items-center justify-between hover:bg-gray-700 transition-colors hover:scale-105"
              >
                <span className="font-semibold heading-secondary">{item.question}</span>
                <div
                  className={`transform transition-transform duration-200 ${
                    openFaq === index ? "rotate-45" : "rotate-0"
                  }`}
                >
                  <Plus className="w-5 h-5" />
                </div>
              </button>
              {openFaq === index && (
                <div className="overflow-hidden">
                  <div className="p-6 bg-gray-700 rounded-b-lg">
                    <p className="text-gray-300 font-century">{item.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-gray-300 font-century">Melhore sua saude e seus resultados</p>
        </div>
      </div>
    </section>
  )
}
