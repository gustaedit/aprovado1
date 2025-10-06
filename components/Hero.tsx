"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

// Interface atualizada para receber o conteúdo dinamicamente
interface HeroProps {
  scrollToSection: (sectionId: string) => void;
  title: string;
  subtitle: string;
  buttonText: string;
}

export default function Hero({ scrollToSection, title, subtitle, buttonText }: HeroProps) {
  return (
    <section id="inicio" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Image e Overlay com Gradiente */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/banner-team-ramos.jpg"
          alt="Team Ramos - Lapidando Diamantes"
          fill
          priority
          quality={100}
          className="object-cover object-center"
        />
        {/* Overlay com gradiente para um visual mais refinado */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
      </div>

      {/* Conteúdo Centralizado com Animação */}
      <div className="relative z-10 flex w-full flex-col items-center text-center container px-4">
        {/* Container para aplicar animação em cascata */}
        <div className="opacity-0 animate-fade-in-up">
          {/* Título Principal (H1) */}
          <h1 className="text-4xl font-bold text-white drop-shadow-xl
            md:text-5xl 
            lg:text-6xl"
          >
            {title}
          </h1>

          {/* Subtítulo (Parágrafo) */}
          <p className="mt-4 max-w-md text-white/90 drop-shadow-lg 
            text-base
            md:max-w-2xl md:text-lg
            lg:max-w-3xl lg:text-xl"
          >
            {subtitle}
          </p>
        </div>

        {/* Botão com atraso na animação */}
        <div className="opacity-0 animate-fade-in-up [animation-delay:0.3s]">
          <Button
            size="lg"
            onClick={() => scrollToSection("servicos")}
            className="mt-8 bg-red-600 border-2 border-red-600 text-white shadow-2xl transition-transform duration-300 hover:scale-105 hover:bg-red-700 hover:border-red-700
              px-8 py-3 text-base 
              lg:px-10 lg:py-4 lg:text-lg"
          >
            {buttonText}
          </Button>
        </div>
      </div>

      {/* Indicador de Scroll */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/50 p-2">
          <div className="h-3 w-1 rounded-full bg-white/50" />
        </div>
      </div>
    </section>
  )
}