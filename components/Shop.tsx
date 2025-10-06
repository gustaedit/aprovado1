"use client"

import { Button } from "@/components/ui/button"
import { ShoppingCart, Star } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Camiseta Team Ramos",
    price: "R$ 49,90",
    originalPrice: "R$ 69,90",
    image: "/placeholder.svg?height=300&width=300",
    category: "Camisetas",
    rating: 5,
    description: "Camiseta premium 100% algodão com logo Team Ramos",
  },
  {
    id: 2,
    name: "Regata Treino",
    price: "R$ 39,90",
    originalPrice: "R$ 54,90",
    image: "/placeholder.svg?height=300&width=300",
    category: "Regatas",
    rating: 5,
    description: "Regata dry-fit ideal para treinos intensos",
  },
  {
    id: 3,
    name: "Garrafa Team Ramos",
    price: "R$ 29,90",
    originalPrice: "R$ 39,90",
    image: "/placeholder.svg?height=300&width=300",
    category: "Acessórios",
    rating: 5,
    description: "Garrafa térmica 500ml com logo Team Ramos",
  },
  {
    id: 4,
    name: "Shorts Treino",
    price: "R$ 59,90",
    originalPrice: "R$ 79,90",
    image: "/placeholder.svg?height=300&width=300",
    category: "Shorts",
    rating: 5,
    description: "Shorts dry-fit com bolsos laterais",
  },
  {
    id: 5,
    name: "Casaco Moletom",
    price: "R$ 89,90",
    originalPrice: "R$ 119,90",
    image: "/placeholder.svg?height=300&width=300",
    category: "Casacos",
    rating: 5,
    description: "Moletom premium com capuz e logo bordado",
  },
  {
    id: 6,
    name: "Calça Legging",
    price: "R$ 69,90",
    originalPrice: "R$ 94,90",
    image: "/placeholder.svg?height=300&width=300",
    category: "Calças",
    rating: 5,
    description: "Legging fitness de alta compressão",
  },
]

export default function Shop() {
  const handleBuyProduct = (productName: string) => {
    const message = `Olá! Tenho interesse no produto: ${productName}`
    const whatsappUrl = `https://wa.me/557181751951?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="loja" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent font-weezer">
            LOJA TEAM RAMOS
          </h2>
          <p className="text-xl text-gray-300 mb-2 font-century">Vista-se como um campeão</p>
          <p className="text-red-500 font-semibold font-century">🔥 FRETE GRÁTIS ACIMA DE R$ 100</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-2xl overflow-hidden hover:-translate-y-2 hover:scale-105 transition-transform duration-300"
            >
              {/* Imagem do Produto */}
              <div className="relative">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold font-century">
                  {product.category}
                </div>
                <div className="absolute top-4 right-4 bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-bold">
                  -30%
                </div>
              </div>

              {/* Conteúdo */}
              <div className="p-6 text-black">
                <div className="flex mb-2">
                  {[...Array(product.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <h3 className="text-xl font-bold mb-2 font-weezer">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4 font-century">{product.description}</p>

                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg text-gray-500 line-through font-century">{product.originalPrice}</span>
                  <span className="text-2xl font-bold text-red-600 font-century">{product.price}</span>
                </div>

                <Button
                  onClick={() => handleBuyProduct(product.name)}
                  className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:opacity-90 text-white font-bold py-3 rounded-xl text-lg transition-all duration-300 shadow-lg hover:shadow-xl font-century"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  COMPRAR AGORA
                </Button>

                <p className="text-center text-xs text-gray-500 mt-3 font-century">💳 Parcelamos em até 6x sem juros</p>
              </div>
            </div>
          ))}
        </div>

        {/* Seção de Benefícios */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 border-2 border-red-600 rounded-lg bg-gray-900/50">
            <div className="text-4xl mb-4">🚚</div>
            <h3 className="text-xl font-bold mb-2 font-weezer">Frete Grátis</h3>
            <p className="text-gray-300 text-sm font-century">Acima de R$ 100 para todo Brasil</p>
          </div>

          <div className="text-center p-6 border-2 border-red-600 rounded-lg bg-gray-900/50">
            <div className="text-4xl mb-4">🔄</div>
            <h3 className="text-xl font-bold mb-2 font-weezer">Troca Garantida</h3>
            <p className="text-gray-300 text-sm font-century">30 dias para trocar ou devolver</p>
          </div>

          <div className="text-center p-6 border-2 border-red-600 rounded-lg bg-gray-900/50">
            <div className="text-4xl mb-4">⭐</div>
            <h3 className="text-xl font-bold mb-2 font-weezer">Qualidade Premium</h3>
            <p className="text-gray-300 text-sm font-century">Materiais de alta qualidade</p>
          </div>
        </div>
      </div>
    </section>
  )
}
