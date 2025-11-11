import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Ana M.',
      text: 'Os melhores doces que já provei! Perfeitos em cada detalhe.',
      rating: 5
    },
    {
      name: 'Juliana P.',
      text: 'Minha mesa de festa ficou um encanto. Recomendo demais!',
      rating: 5
    },
    {
      name: 'Carlos L.',
      text: 'Atendimento maravilhoso e doces incríveis.',
      rating: 5
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-4">
            O que dizem nossos clientes
          </h2>
          <p className="text-xl text-gray-600 font-poppins">
            Experiências que nos enchem de orgulho
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-pink-50 to-amber-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-gray-700 font-poppins text-lg mb-6 italic">
                "{testimonial.text}"
              </p>
              <p className="text-pink-600 font-poppins font-semibold">
                — {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
