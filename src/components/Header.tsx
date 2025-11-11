import { Cake, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('inicio')}>
            <Cake className="w-8 h-8 text-pink-400" strokeWidth={1.5} />
            <span className="text-2xl font-playfair font-bold text-pink-500">Q Delícias</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            {['inicio', 'sobre', 'galeria', 'depoimentos', 'encomendas', 'contato'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-700 hover:text-pink-500 capitalize transition-colors font-poppins font-medium"
              >
                {item}
              </button>
            ))}
          </nav>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            {['inicio', 'sobre', 'galeria', 'depoimentos', 'encomendas', 'contato'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-500 capitalize transition-colors font-poppins"
              >
                {item}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
