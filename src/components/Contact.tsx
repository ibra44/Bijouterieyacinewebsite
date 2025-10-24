import { MapPin, Phone, Clock, Package, Truck } from 'lucide-react';

const schedule = [
  { day: 'Lundi - Vendredi', hours: '10:00 - 19:00' },
  { day: 'Samedi', hours: '10:00 - 20:00' },
  { day: 'Dimanche', hours: '14:00 - 18:00' }
];

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-amber-600 mb-4">Contact</h2>
          <p className="text-4xl mb-4 text-gray-900">
            Visitez-Nous à Guédiawaye marché sham
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-gray-900 mb-2">Adresse</h3>
            <p className="text-gray-600">
               guédiawaye Marché sham<br />
              Dakar, Sénégal
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-gray-900 mb-2">Téléphone</h3>
            <a href="tel:+22135566666" className="text-amber-600 hover:text-amber-700">
              +221 77 510 77 40
            </a>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-gray-900 mb-2">Horaires</h3>
            <div className="text-gray-600 space-y-1">
              {schedule.map((item, index) => (
                <div key={index} className="flex justify-center gap-2">
                  <span>{item.day}:</span>
                  <span>{item.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Package className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-gray-900 mb-2">Retrait en Magasin</h3>
                <p className="text-gray-600">
                  Commandez en ligne et récupérez vos bijoux directement dans notre boutique. 
                  Service gratuit et disponible sous 24h.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Truck className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-gray-900 mb-2">Livraison à Domicile</h3>
                <p className="text-gray-600">
                  Nous livrons vos bijoux dans toute la région de Dakar. 
                  Emballage sécurisé et livraison assurée.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-md overflow-hidden h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.9396948419395!2d-17.44536!3d14.692778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec173052d84b6a5%3A0x9c5d0d3e8d0e0e0e!2sRue%20Carnot%2C%20Dakar%2C%20Senegal!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Bijouterie YACINE Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
