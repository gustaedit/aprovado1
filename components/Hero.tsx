"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
  subtitle: string;
  buttonText: string;
}

export default function Hero({ scrollToSection, subtitle, buttonText }: HeroProps) {
  return (
    <section id="inicio" className="relative w-full min-h-[100dvh] bg-black overflow-hidden flex flex-col lg:flex-row">
      
      {/* --- 1. FUNDO (BACKGROUND LIMPO) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Base Preta */}
        <div className="absolute inset-0 bg-black"></div>
        
        {/* Luz Vermelha Centralizada */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[800px] lg:h-[800px] bg-red-600 rounded-full blur-[80px] md:blur-[100px] opacity-30 md:opacity-40 mix-blend-screen"></div>
      </div>

      {/* --- 2. ELEMENTO FAIXA (ESQUERDA) --- */}
      {/* AJUSTE: Aumentei de w-40 para w-72 no mobile para ficar bem grande */}
      <div className="absolute top-0 left-0 z-30 w-72 sm:w-80 md:w-96 lg:w-[500px] xl:w-[600px] pointer-events-none">
        <Image 
          src="/faixa.png" 
          alt="Faixa Decorativa" 
          width={800} 
          height={800}
          className="object-contain object-top-left"
          priority
        />
      </div>

      {/* --- 3. CONTEÚDO PRINCIPAL --- */}
      <div className="relative z-20 container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center lg:justify-between h-full min-h-[100dvh] pt-32 pb-10 lg:py-0">
        
        {/* --- COLUNA 1: ESPAÇO VAZIO (Desktop) --- */}
        <div className="hidden lg:block flex-1 order-1">
            {/* Espaço reservado para equilibrar a faixa no desktop */}
        </div>

        {/* --- COLUNA 2: LOGO E TEXTO (CENTRO) --- */}
        <div className="flex-[2] flex flex-col items-center justify-center text-center z-30 order-1 lg:order-2 w-full">
          
          {/* Texto "BEM VINDO" */}
          <span className="text-white font-bold tracking-[0.2em] md:tracking-[0.4em] text-xs md:text-xl lg:text-2xl uppercase mb-4 drop-shadow-lg animate-fade-in-up">
              Bem Vindo ao
          </span>

          {/* LOGO GIGANTE */}
          <div className="relative w-[280px] h-28 sm:w-[400px] sm:h-36 md:w-[600px] md:h-48 lg:w-[800px] lg:h-72 xl:w-[900px] xl:h-80 mb-8 md:mb-10 drop-shadow-2xl transition-all duration-500">
            <Image 
              src="/title-logo.png" 
              alt="Team Ramos"
              fill
              className="object-contain object-center invert brightness-0 saturate-0 contrast-200"
              priority
            />
          </div>

          {/* SUBTÍTULO */}
          <p className="max-w-[90%] md:max-w-2xl lg:max-w-4xl text-gray-200 text-sm sm:text-lg md:text-xl lg:text-3xl font-light tracking-wide leading-relaxed mb-10 lg:mb-12 drop-shadow-md">
            {subtitle}
          </p>

          <div className="w-full md:w-auto flex justify-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("servicos")}
              className="bg-red-600 hover:bg-red-700 text-white border-none px-10 py-7 md:px-14 md:py-9 text-base md:text-2xl uppercase font-bold tracking-widest rounded-xl transition-all hover:scale-110 shadow-[0_0_20px_rgba(220,38,38,0.5)] md:shadow-[0_0_40px_rgba(220,38,38,0.7)]"
            >
              {buttonText} clique aqui
            </Button>
          </div>
        </div>

        {/* --- COLUNA 3: TREINADOR (DIREITA) --- */}
        {/* AJUSTE: 'hidden' por padrão, 'lg:flex' apenas em telas grandes */}
        <div className="hidden lg:flex flex-1 h-screen justify-end items-end order-3 pointer-events-none z-10 relative">
          
          {/* Bloco Vermelho de Fundo (Apenas Desktop) */}
          <div className="absolute inset-y-0 right-0 w-2/3 bg-red-600 skew-x-[-12deg] origin-bottom-right translate-x-1/4 z-0 opacity-90"></div>

          {/* Imagem do Treinador */}
          <div className="relative w-full h-[100%] z-10 transition-transform duration-500 hover:scale-[1.25]">
            <Image
              src="/trainer-crossed-arms.png"
              alt="Treinador Team Ramos"
              fill
              className="object-contain object-right-bottom scale-[1.2] xl:scale-[1.3]"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  )
}