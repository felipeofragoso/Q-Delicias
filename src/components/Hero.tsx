import { MessageCircle, Instagram } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-pink-50 via-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-gray-900 leading-tight">
              Q Delícias — O sabor que encanta em cada detalhe
            </h1>
            <p className="text-xl text-gray-600 font-poppins font-light">
              Doces personalizados feitos com carinho para deixar seus momentos ainda mais especiais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://wa.me/5521992845249"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-poppins font-medium transition-all transform hover:scale-105 shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Fale conosco no WhatsApp</span>
              </a>
              <a
                href="https://www.instagram.com/q.delicias_21/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-poppins font-medium transition-all transform hover:scale-105 shadow-lg"
              >
                <Instagram className="w-5 h-5" />
                <span>Siga no Instagram</span>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-300 to-amber-300 rounded-3xl transform rotate-3"></div>
            <img
              src="https://images.pexels.com/photos/1120970/pexels-photo-1120970.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Doces artesanais Q Delícias"
              className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
