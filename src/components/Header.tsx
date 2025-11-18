import { Phone, ShoppingBag, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-gradient-to-r from-amber-600 to-amber-500 text-white">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <a href="tel:+22135566666" className="flex items-center gap-2 hover:opacity-90 transition">
                <Phone className="w-4 h-4" />
                <span>+221 77 510 77 40</span>
              </a>
            </div>
            <div className="hidden md:block">
              <span>Guédiawaye Marché SHAME </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center">
              <ShoppingBag className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-amber-900">Bijouterie YACINE</h1>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(4)].map((_, i) => (
                    <span key={i} className="text-amber-500">★</span>
                  ))}
                  <span className="text-amber-500">☆</span>
                </div>
                <span className="text-gray-600">(41 avis)</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <a href="#accueil" className="text-gray-700 hover:text-amber-600 transition">
              Accueil
            </a>
            <a href="#collections" className="text-gray-700 hover:text-amber-600 transition">
              Collections
            </a>
            <a href="#apropos" className="text-gray-700 hover:text-amber-600 transition">
              À Propos
            </a>
            <a href="#contact" className="text-gray-700 hover:text-amber-600 transition">
              Contact
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <a
              href="#accueil"
              className="text-gray-700 hover:text-amber-600 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Accueil
            </a>
            <a
              href="#collections"
              className="text-gray-700 hover:text-amber-600 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Collections
            </a>
            <a
              href="#apropos"
              className="text-gray-700 hover:text-amber-600 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              À Propos
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-amber-600 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
