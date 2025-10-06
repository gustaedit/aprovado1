"use client"

import { Mail, MessageCircle } from "lucide-react"

interface FooterProps {
  scrollToSection: (sectionId: string) => void
}

export default function Footer({ scrollToSection }: FooterProps) {
  const navigationItems = [
    { label: "Home", id: "inicio" },
    { label: "Serviços", id: "servicos" },
    { label: "Planos", id: "precos" },
    { label: "Sobre mim", id: "sobre" },
    { label: "Contato", id: "contato" },
    { label: "Loja", id: "loja" },
  ]

  return (
    <footer className="bg-black py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div>
            <h3 className="text-xl font-bold mb-4 heading-primary">
              TEAM RAM<span className="text-red-600">O</span>S
            </h3>
            <div className="flex items-center text-gray-400 mb-2 font-century">
              <Mail className="w-4 h-4 mr-2" />
              TeamRamos@gmail.com
            </div>
            <div className="flex items-center text-gray-400 mb-2 font-century">
              <MessageCircle className="w-4 h-4 mr-2" />
              +55 71 8175-1951
            </div>
            <p className="text-gray-400 text-sm mt-4 font-century">© 2025 TEAM RAMOS.</p>
            <p className="text-gray-400 text-sm font-century">All rights reserved.</p>
            <p className="text-gray-400 text-sm mt-2 font-century">Privacy policy</p>
          </div>

          <div>
            <h4 className="font-bold mb-4 heading-secondary">Links</h4>
            <div className="space-y-2 text-gray-400">
              {navigationItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.id)}
                  className="block hover:text-red-600 transition-colors font-century"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 heading-secondary">Social Media</h4>
            <div className="space-y-2 text-gray-400">
              <a
                href="https://www.instagram.com/teamramos94/"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-red-600 cursor-pointer transition-colors font-century"
              >
                Instagram
              </a>
              <a
                href="https://wa.me/557181751951"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-red-600 cursor-colors font-century"
              >
                WhatsApp
              </a>
              <div className="hover:text-red-600 cursor-pointer transition-colors font-century">Facebook</div>
              <div className="hover:text-red-600 cursor-pointer transition-colors font-century">Youtube</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
