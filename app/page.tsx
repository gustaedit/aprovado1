"use client"

import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import Contact from "@/components/Contact"
import Transformations from "@/components/Transformations"
import Protocols from "@/components/Protocols"
import About from "@/components/About"
import FAQ from "@/components/FAQ"
import Footer from "@/components/Footer"

export default function PersonalTrainerSite() {
  // Função para scroll suave
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  const frases = [
    "• Método lapidando Diamantes",
    "• Definição além do corpo",
    "• Mente focada",
    "• Hábitos que geram orgulho",
    "• Método lapidando Diamantes",
    "• Definição além do corpo",
    "• Mente focada",
    "• Hábitos que geram orgulho",
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Header scrollToSection={scrollToSection} />

      <Hero scrollToSection={scrollToSection} />

      {/* Red Banner */}
      <section className="bg-red-600 py-4 overflow-hidden">
        <div className="overflow-hidden w-full">
          <div className="whitespace-nowrap text-white text-center font-normal text-base tracking-tight border-0 animate-scroll">
            {frases.concat(frases).map((frase, i) => (
              <span key={i} className="mx-8">
                {frase}
              </span>
            ))}
          </div>
        </div>
      </section>
      <About />
      <Services />
      <Contact />
      <Transformations />
      <Protocols />
      <FAQ />
      <Footer scrollToSection={scrollToSection} />
    </div>
  )
}
