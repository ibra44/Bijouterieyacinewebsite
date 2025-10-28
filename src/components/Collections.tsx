import { ImageWithFallback } from './figma/ImageWithFallback';

const products = [
  {
    id: 1,
    name: 'Bagues en Or',
    description: 'Collection de bagues en or 18 carats',
    //image: 'https://images.unsplash.com/photo-1638382874010-aa4e76fe267d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBqZXdlbHJ5JTIwcmluZ3N8ZW58MXx8fHwxNzYxMjgxMzQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    image:'images/hero-bijouterie.jpg', 
    category: 'Bagues'
  },
  {
    id: 2,
    name: 'Colliers Africains',
    description: 'Designs traditionnels en or',
    //image: 'https://images.unsplash.com/photo-1611012756377-05e2e4269fa3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwbmVja2xhY2UlMjBqZXdlbHJ5fGVufDF8fHx8MTc2MTI2NTA3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    image:'images/hero-bijouterie.jpg', 
    category: 'Colliers'
  },
  {
    id: 3,
    name: 'Bijoux Précieux',
    description: 'Pièces uniques artisanales',
    //image: 'https://images.unsplash.com/photo-1725114076972-8bbe826d792b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZ29sZCUyMGpld2Vscnl8ZW58MXx8fHwxNzYxMzQyNDM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    image:'images/hero-bijouterie.jpg', 
    category: 'Collections'
  },
  {
    id: 4,
    name: 'Boucles d\'Oreilles',
    description: 'Élégance et raffinement',
    //image: 'https://images.unsplash.com/photo-1757140448317-722fb8f439f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZWFycmluZ3MlMjBqZXdlbHJ5fGVufDF8fHx8MTc2MTM0MjQzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    image:'images/hero-bijouterie.jpg', 
    category: 'Boucles d\'Oreilles'
  },
  {
    id: 5,
    name: 'Bracelets en Or',
    description: 'Collection exclusive de bracelets',
    //image: 'https://images.unsplash.com/photo-1655707063513-a08dad26440e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwYnJhY2VsZXRzJTIwamV3ZWxyeXxlbnwxfHx8fDE3NjEzNDI0Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    image:'images/hero-bijouterie.jpg', 
    category: 'Bracelets'
  },
  {
    id: 6,
    name: 'Parures Complètes',
    description: 'Ensembles harmonieux',
    //image: 'https://images.unsplash.com/photo-1611012756377-05e2e4269fa3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwbmVja2xhY2UlMjBqZXdlbHJ5fGVufDF8fHx8MTc2MTI2NTA3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    image:'images/hero-bijouterie.jpg', 
    category: 'Parures'
  }
];

export function Collections() {
  return (
    <section id="collections" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-amber-600 mb-4">Nos Collections</h2>
          <p className="text-4xl mb-4 text-gray-900">
            Découvrez Notre Sélection
          </p>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Chaque pièce est soigneusement sélectionnée et fabriquée avec passion. 
            Notre expertise garantit des bijoux de qualité exceptionnelle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-80 overflow-hidden">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-amber-500 text-white px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <button className="text-amber-600 hover:text-amber-700 transition flex items-center gap-2">
                  Découvrir
                  <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
