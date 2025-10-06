"use client"

import { useState } from "react"
import { Menu, X, Instagram, MessageCircle } from "lucide-react"
import Link from "next/link"

interface HeaderProps {
  scrollToSection: (sectionId: string) => void
}

export default function Header({ scrollToSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigationItems = [
    { label: "Home", id: "inicio" },
    { label: "Serviços", id: "servicos" },
    { label: "Planos", id: "precos" },
    { label: "Sobre mim", id: "sobre" },
    { label: "Contato", id: "contato" },
  ]

  const handleNavClick = (id: string) => {
    scrollToSection(id)
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm">
      {/* Desktop (1920px+) */}
      <div className="hidden 2xl:block">
        <div className="max-w-[1920px] mx-auto px-8 py-4 flex items-center justify-between">
          <div className="text-xl font-bold cursor-pointer font-weezer" onClick={() => scrollToSection("inicio")}>
            RAM<span className="text-red-600">O</span>S
          </div>

          <nav className="flex space-x-8 text-sm font-century">
            {navigationItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.id)}
                className="hover:text-red-600 transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
             <Link href="/loja" className="hover:text-red-600 transition-colors cursor-pointer">
              Loja
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <a
              href="https://www.instagram.com/teamramos94/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 border-2 border-red-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
            >
              <Instagram className="w-4 h-4 text-red-600" />
            </a>
            <a
              href="https://wa.me/557181751951"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 border-2 border-red-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
            >
              <MessageCircle className="w-4 h-4 text-red-600" />
            </a>
          </div>
        </div>
      </div>

      {/* Laptop (1366px - 1919px) */}
      <div className="hidden xl:block 2xl:hidden">
        <div className="max-w-[1366px] mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-bold cursor-pointer font-weezer" onClick={() => scrollToSection("inicio")}>
            RAM<span className="text-red-600">O</span>S
          </div>

          <nav className="flex space-x-6 text-sm font-century">
            {navigationItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.id)}
                className="hover:text-red-600 transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
             <Link href="/loja" className="hover:text-red-600 transition-colors cursor-pointer">
              Loja
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <a
              href="https://www.instagram.com/teamramos94/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 border-2 border-red-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
            >
              <Instagram className="w-4 h-4 text-red-600" />
            </a>
            <a
              href="https://wa.me/557181751951"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 border-2 border-red-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
            >
              <MessageCircle className="w-4 h-4 text-red-600" />
            </a>
          </div>
        </div>
      </div>

      {/* Tablet (810px - 1365px) */}
      <div className="hidden lg:block xl:hidden">
        <div className="max-w-[810px] mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-xl font-bold cursor-pointer font-weezer" onClick={() => scrollToSection("inicio")}>
            RAM<span className="text-red-600">O</span>S
          </div>

          <nav className="flex space-x-4 text-sm font-century">
            {navigationItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.id)}
                className="hover:text-red-600 transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
             <Link href="/loja" className="hover:text-red-600 transition-colors cursor-pointer">
              Loja
            </Link> 
          </nav>

          <div className="flex items-center space-x-3">
            <a
              href="https://www.instagram.com/teamramos94/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 border-2 border-red-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
            >
              <Instagram className="w-3 h-3 text-red-600" />
            </a>
            <a
              href="https://wa.me/557181751951"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 border-2 border-red-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
            >
              <MessageCircle className="w-3 h-3 text-red-600" />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile (até 809px) */}
      <div className="block lg:hidden">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-xl font-bold cursor-pointer font-weezer" onClick={() => scrollToSection("inicio")}>
            RAM<span className="text-red-600">O</span>S
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <X /> : <Menu />}</button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="bg-black">
            <div className="container mx-auto px-4 py-4 space-y-4 font-century">
              {navigationItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.id)}
                  className="block hover:text-red-600 transition-colors w-full text-left"
                >
                  {item.label}
                </button>
              ))}
               <Link
                href="/loja"
                className="block hover:text-red-600 transition-colors w-full text-left"
                onClick={() => setIsMenuOpen(false)}
              >
                Loja
              </Link>

              {/* Social Links no Mobile */}
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-800">
                <a
                  href="https://www.instagram.com/teamramos94/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 border-2 border-red-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
                >
                  <Instagram className="w-4 h-4 text-red-600" />
                </a>
                <a
                  href="https://wa.me/557181751951"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 border-2 border-red-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
                >
                  <MessageCircle className="w-4 h-4 text-red-600" />
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
