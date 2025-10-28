//import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section id="accueil" className="relative h-[600px] flex items-center">
      <div className="absolute inset-0">
        <ImageWithFallback
          src="/images/collection-bagues.jpg"
          //src="https://images.unsplash.com/photo-1759683730016-1c3c6e526cfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZXdlbHJ5JTIwc3RvcmUlMjBsdXh1cnl8ZW58MXx8fHwxNzYxMjg5NzUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Bijouterie Yacine"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white">
          <h2 className="text-amber-400 mb-4">L'Excellence de Dakar</h2>
          <p className="text-5xl md:text-6xl mb-6 text-white">
            Bijoux d'Exception pour des Moments Précieux
          </p>
          <p className="text-xl mb-8 text-gray-200">
            Découvrez notre collection exclusive de bijoux en or, argent et pierres précieuses. 
            Fabrication artisanale et designs africains authentiques.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#collections"
              className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-3 rounded-full hover:from-amber-600 hover:to-amber-700 transition shadow-lg"
            >
              Voir nos Collections
            </a>
            <a
              href="#contact"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-full hover:bg-white/20 transition border border-white/30"
            >
              Nous Contacter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
