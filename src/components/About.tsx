import { Award, Shield, Heart, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Qualité Premium',
    description: 'Bijoux en or 18 carats et pierres précieuses authentiques'
  },
  {
    icon: Shield,
    title: 'Garantie & Certificat',
    description: 'Tous nos bijoux sont certifiés et garantis'
  },
  {
    icon: Heart,
    title: 'Artisanat Local',
    description: 'Designs africains authentiques fabriqués à Dakar'
  },
  {
    icon: Sparkles,
    title: 'Pièces Uniques',
    description: 'Collections exclusives et sur mesure'
  }
];

export function About() {
  return (
    <section id="apropos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-amber-600 mb-4">À Propos</h2>
            <p className="text-4xl mb-6 text-gray-900">
              L'Excellence de la Bijouterie Sénégalaise
            </p>
            <p className="text-gray-600 mb-6">
              Depuis des années, Bijouterie YACINE est une référence à Dakar pour les bijoux 
              de qualité exceptionnelle. Notre savoir-faire combine traditions africaines et 
              techniques modernes pour créer des pièces uniques qui racontent une histoire.
            </p>
            <p className="text-gray-600 mb-8">
              Située au cœur de Dakar, notre boutique accueille une clientèle exigeante à la 
              recherche de bijoux authentiques. Chaque création reflète notre passion pour 
              l'excellence et notre engagement envers la satisfaction client.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-amber-600" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-gray-900 mb-2">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-64 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg shadow-xl"></div>
                <div className="h-48 bg-gradient-to-br from-amber-300 to-amber-500 rounded-lg shadow-xl"></div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-48 bg-gradient-to-br from-amber-500 to-amber-700 rounded-lg shadow-xl"></div>
                <div className="h-64 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg shadow-xl"></div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="text-4xl text-amber-600">4.4</div>
                <div>
                  <div className="flex text-amber-500">★★★★☆</div>
                  <div className="text-gray-600">41 avis clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
