import { Heart, Award, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-pink-200 rounded-3xl transform -rotate-3"></div>
            <img
              src="https://images.pexels.com/photos/1120970/pexels-photo-1120970.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Confeitaria artesanal"
              className="relative rounded-3xl shadow-2xl w-full h-[450px] object-cover"
            />
          </div>

          <div className="space-y-6 order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900">
              Sobre nós
            </h2>
            <p className="text-lg text-gray-600 font-poppins leading-relaxed">
              Na <span className="text-pink-500 font-semibold">Q Delícias</span>, cada doce é feito com amor, ingredientes selecionados e um toque artesanal que faz toda diferença. Criamos doces personalizados para festas, casamentos, eventos corporativos e presentes especiais.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start space-x-4">
                <div className="bg-pink-100 p-3 rounded-full">
                  <Heart className="w-6 h-6 text-pink-500" />
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-gray-900">Feito com amor</h3>
                  <p className="text-gray-600 font-poppins">Cada doce é uma obra de arte criada com dedicação</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <Award className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-gray-900">Ingredientes premium</h3>
                  <p className="text-gray-600 font-poppins">Selecionamos os melhores ingredientes para você</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-pink-100 p-3 rounded-full">
                  <Sparkles className="w-6 h-6 text-pink-500" />
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-gray-900">Personalização única</h3>
                  <p className="text-gray-600 font-poppins">Criamos doces exclusivos para sua ocasião especial</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
