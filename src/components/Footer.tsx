import { Cake, Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center space-x-3">
            <Cake className="w-8 h-8 text-pink-400" strokeWidth={1.5} />
            <span className="text-2xl font-playfair font-bold text-pink-400">Q Delícias</span>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://www.instagram.com/q.delicias_21/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 p-3 rounded-full transition-all transform hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://wa.me/5521992845249"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 p-3 rounded-full transition-all transform hover:scale-110"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
          </div>

          <p className="text-gray-400 font-poppins text-center">
            © 2025 Q Delícias — Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
