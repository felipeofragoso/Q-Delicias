export default function Gallery() {
  const images = [
    {
      url: 'https://images.pexels.com/photos/1120970/pexels-photo-1120970.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Cupcakes decorados'
    },
    {
      url: 'https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Trufas artesanais'
    },
    {
      url: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Bolo decorado'
    },
    {
      url: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Doces finos'
    },
    {
      url: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Macarons coloridos'
    },
    {
      url: 'https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Doces para festa'
    },
    {
      url: 'https://images.pexels.com/photos/1414234/pexels-photo-1414234.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Brigadeiros gourmet'
    },
    {
      url: 'https://images.pexels.com/photos/1055270/pexels-photo-1055270.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Sobremesas elegantes'
    },
    {
      url: 'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Doces para eventos'
    }
  ];

  return (
    <section id="galeria" className="py-20 bg-gradient-to-br from-pink-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-4">
            Nossa Galeria
          </h2>
          <p className="text-xl text-gray-600 font-poppins">
            Confira alguns dos nossos trabalhos artesanais
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white font-poppins font-medium p-4">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
