import { MessageCircle, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contato" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
          Entre em Contato
        </h2>
        <p className="text-xl text-gray-600 font-poppins mb-4">
          Quer tirar dúvidas ou fazer um orçamento rápido?
        </p>
        <p className="text-xl text-gray-600 font-poppins mb-12">
          Estamos à disposição para deixar sua ocasião ainda mais doce!
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="https://wa.me/5521992845249"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-full font-poppins font-medium text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            <MessageCircle className="w-6 h-6" />
            <span>Fale no WhatsApp</span>
          </a>

          <a
            href="https://www.instagram.com/q.delicias_21/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-10 py-5 rounded-full font-poppins font-medium text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            <Instagram className="w-6 h-6" />
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
}
