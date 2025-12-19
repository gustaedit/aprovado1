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
    <section id="inicio" className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col lg:flex-row">
      
      {/* --- 1. FUNDO (BACKGROUND) --- */}
     <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 w-full h-full">
            <Image 
              src="/faixa.png" 
              alt="Background Texture" 
              fill
              // ALTERAÇÃO AQUI:
              // scale-110: Aumenta a imagem para não criar buracos ao mover
              // translate-x-12: Move para a Direita
              // translate-y-12: Move para Baixo
              className="translate-y-12 " 
              priority
            />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        {/* Luz de fundo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[800px] lg:h-[800px] bg-red-600 rounded-full blur-[100px] opacity-40 mix-blend-screen"></div>
      </div>

      {/* --- 2. CONTEÚDO PRINCIPAL --- */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between h-full pt-32 lg:py-0">
        
        {/* --- COLUNA 1: VAZIA (ESQUERDA - Apenas Desktop) --- */}
        <div className="flex-1 hidden lg:block h-full order-1"></div>

        {/* --- COLUNA 2: LOGO E TEXTO (MEIO) --- */}
        <div className="flex-1 flex flex-col items-center justify-center text-center z-20 order-1 lg:order-2 w-full">
          
          {/* TEXTO "BEM VINDO" - Escondido no celular (hidden), aparece no tablet (md:block) */}
          <span className="hidden md:block text-white font-bold tracking-[0.4em] text-sm md:text-xl lg:text-2xl uppercase mb-4 lg:mb-6 drop-shadow-lg animate-fade-in-up">
              Bem Vindo ao
          </span>

          {/* LOGO - Ajustada para não diminuir tanto */}
          {/* Mobile: w-80 (Bem visível) */}
          {/* Tablet (md): w-[600px] (Bem grande, não encolhe tanto) */}
          {/* Desktop (xl): w-[900px] (Gigante) */}
          <div className="relative w-80 h-32 md:w-[600px] md:h-48 lg:w-[800px] lg:h-72 xl:w-[900px] xl:h-80 mb-8 lg:mb-10 drop-shadow-2xl transition-all duration-500">
            <Image 
              src="/title-logo.png" 
              alt="Team Ramos"
              fill
              className="object-contain object-center invert brightness-0 saturate-0 contrast-200"
              priority
            />
          </div>

          {/* SUBTÍTULO - Escondido no celular (hidden), aparece no tablet (md:block) */}
          <p className="hidden md:block max-w-md md:max-w-2xl lg:max-w-4xl text-gray-100 text-lg md:text-xl lg:text-3xl font-light tracking-wide leading-relaxed mb-8 lg:mb-12 drop-shadow-md">
            {subtitle}
          </p>

          <div className="w-full md:w-auto flex justify-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("servicos")}
              // Botão grande e responsivo
              className="bg-red-600 hover:bg-red-700 text-white border-none px-12 py-7 md:px-14 md:py-9 text-lg md:text-2xl uppercase font-bold tracking-widest rounded-xl transition-all hover:scale-110 shadow-[0_0_40px_rgba(220,38,38,0.7)]"
            >
              {buttonText} clique aqui
            </Button>
          </div>
        </div>

        {/* --- COLUNA 3: TREINADOR (DIREITA) --- */}
        {/* Escondido no celular (hidden), aparece como flex no tablet (md:flex) */}
        <div className="hidden md:flex flex-1 relative w-full h-[50vh] lg:h-screen justify-center lg:justify-end items-end order-2 lg:order-3 mt-10 lg:mt-0 pointer-events-none">
          
          {/* BLOCO VERMELHO (Desktop Only) */}
          <div className="absolute inset-y-0 right-0 w-2/3 bg-red-600 skew-x-[-12deg] origin-bottom-right translate-x-1/4 hidden lg:block z-0 opacity-90"></div>

          {/* IMAGEM DO TREINADOR */}
          <div className="relative w-full h-full lg:h-[95%] z-10">
            <Image
              src="/trainer-crossed-arms.png"
              alt="Treinador Team Ramos"
              fill
              // SCALE: 
              // md (Tablet): scale-150 (Mantém ele grande mesmo em telas menores)
              // xl (Desktop): scale-[1.3] (Gigante)
              className="object-contain object-bottom lg:object-right md:scale-120 lg:scale-150 xl:scale-[1.3] transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  )
}