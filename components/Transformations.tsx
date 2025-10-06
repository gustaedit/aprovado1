"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Transformations() {
  const transformations = [
    {
      name: "Emily Bispo",
      quote:
        "A mudança que eu queria veio na decisão que tomei, o melhor treino é aquele feito com determinação e foco.",
      image: "/emily-testimonial.jpg",
      result: "Transformação completa",
    },
    {
      name: "Maria Silva",
      quote: "Em 6 meses consegui não só perder peso, mas ganhar confiança e disciplina que levarei para toda vida.",
      image: "/placeholder-user.jpg",
      result: "-15kg em 6 meses",
    },
    {
      name: "João Santos",
      quote: "O método realmente funciona. Não é só sobre exercício, é sobre mudança de mentalidade.",
      image: "/placeholder-user.jpg",
      result: "+8kg de massa magra",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === transformations.length - 1 ? 0 : prevIndex + 1))
    }, 2000)

    return () => clearInterval(interval)
  }, [currentIndex, isAutoPlay, transformations.length])

  const handlePrevious = () => {
    setIsAutoPlay(false)
    setCurrentIndex(currentIndex === 0 ? transformations.length - 1 : currentIndex - 1)

    // Reativar auto-play após 5 segundos
    setTimeout(() => setIsAutoPlay(true), 5000)
  }

  const handleNext = () => {
    setIsAutoPlay(false)
    setCurrentIndex(currentIndex === transformations.length - 1 ? 0 : currentIndex + 1)

    // Reativar auto-play após 5 segundos
    setTimeout(() => setIsAutoPlay(true), 5000)
  }

  const handleDotClick = (index: number) => {
    setIsAutoPlay(false)
    setCurrentIndex(index)

    // Reativar auto-play após 5 segundos
    setTimeout(() => setIsAutoPlay(true), 5000)
  }

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Quero Começar Agora!!")
    const whatsappUrl = `https://wa.me/557181751951?text=Olá!%20Quero%20Começar%20Agora!!`
    window.open(whatsappUrl, "_blank")
  }

  const currentTransformation = transformations[currentIndex]

  return (
    <section id="transformations" className="py-20 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Alunos TR</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Veja os resultados reais de quem decidiu transformar sua vida com o método Lapidando Diamantes
          </p>
        </motion.div>

        {/* Carrossel Container */}
        <div className="relative max-w-2xl mx-auto">
          {/* Botão Anterior */}
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Transformação anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Botão Próximo */}
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Próxima transformação"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Card da Transformação */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-black rounded-lg overflow-hidden border border-zinc-800 hover:border-red-600 transition-colors duration-300 mx-8"
          >
            <div className="aspect-square relative">
              <Image
                src={currentTransformation.image || "/placeholder.svg"}
                alt={currentTransformation.name}
                fill
                className="object-cover"
              />

              {/* Overlay com informações */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-2xl font-bold text-white mb-2">{currentTransformation.name}</h3>
                <p className="text-red-500 font-semibold text-lg">{currentTransformation.result}</p>
              </div>
            </div>

            <div className="p-8">
              <blockquote className="text-gray-300 italic text-lg leading-relaxed text-center">
                "{currentTransformation.quote}"
              </blockquote>
            </div>
          </motion.div>

          {/* Indicadores (Dots) */}
          <div className="flex justify-center space-x-3 mt-8">
            {transformations.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-red-600 scale-125" : "bg-gray-600 hover:bg-gray-400"
                }`}
                aria-label={`Ver transformação ${index + 1}`}
              />
            ))}
          </div>

          {/* Contador */}
          <div className="text-center mt-4">
            <span className="text-gray-400 text-sm">
              {currentIndex + 1} de {transformations.length}
            </span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-8">Quer ser o próximo a transformar sua vida?</p>
          <button
            onClick={handleWhatsAppClick}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
          >
            COMEÇAR AGORA
          </button>
        </motion.div>

        {/* Indicador de Auto-play */}
        <div className="text-center mt-4">
          <div className="flex items-center justify-center space-x-2">
            <div className={`w-2 h-2 rounded-full ${isAutoPlay ? "bg-green-500" : "bg-gray-500"}`} />
            <span className="text-xs text-gray-500">{isAutoPlay ? "Auto-play ativo" : "Auto-play pausado"}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
