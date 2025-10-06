"use client"

import { Dumbbell } from "lucide-react"

export default function Contact() {
  return (
    <section id="contato" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-center space-x-4 p-4 border-2 border-red-600 rounded-lg bg-gray-800 hover:scale-105 transition-transform">
              <Dumbbell className="w-6 h-6 text-white" />
              <span className="text-white font-medium font-century">Graduado em Educação Física - UNIfCAs</span>
            </div>

            <div className="flex items-center space-x-4 p-4 border-2 border-red-600 rounded-lg bg-gray-800 hover:scale-105 transition-transform">
              <Dumbbell className="w-6 h-6 text-white" />
              <span className="text-white font-medium font-century">Pós graduado em fisiologia do exercício</span>
            </div>

            <div className="flex items-center space-x-4 p-4 border-2 border-red-600 rounded-lg bg-gray-800 hover:scale-105 transition-transform">
              <Dumbbell className="w-6 h-6 text-white" />
              <span className="text-white font-medium font-century">Pós graduado em fisiologia do exercício</span>
            </div>

            <div className="flex items-center space-x-4 p-4 border-2 border-red-600 rounded-lg bg-gray-800 hover:scale-105 transition-transform">
              <Dumbbell className="w-6 h-6 text-white" />
              <span className="text-white font-medium font-century">Método Lapidando Diamantes</span>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img src="/trainer-pointing.png" alt="Yago Ramos Treinador" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
