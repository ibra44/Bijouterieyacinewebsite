import { ShoppingBag, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center">
                <ShoppingBag className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white">Bijouterie YACINE</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Votre destination pour les bijoux d'exception à Guédiawaye. 
              Qualité, authenticité et élégance depuis des années.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a href="#accueil" className="text-gray-400 hover:text-amber-500 transition">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#collections" className="text-gray-400 hover:text-amber-500 transition">
                  Collections
                </a>
              </li>
              <li>
                <a href="#apropos" className="text-gray-400 hover:text-amber-500 transition">
                  À Propos
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-amber-500 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Collections</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-500 transition">
                  Bagues
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-500 transition">
                  Colliers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-500 transition">
                  Bracelets
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-500 transition">
                  Boucles d'Oreilles
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Guédiawaye sham</li>
              <li> Sénégal</li>
              <li>
                <a href="tel:+22135566666" className="hover:text-amber-500 transition">
                  +221 77 510 77 40
                </a>
              </li>
              <li>info@bijouterieyacine.sn</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© 2025 Bijouterie YACINE. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
