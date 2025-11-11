import { useState, FormEvent } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function OrderForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    sweetType: '',
    quantity: '',
    eventDate: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const whatsappMessage = `Nova encomenda do site Q Delícias!%0A%0ANome: ${formData.name}%0AE-mail: ${formData.email}%0ATelefone: ${formData.phone}%0ATipo de doce: ${formData.sweetType}%0AQuantidade: ${formData.quantity}%0AData do evento: ${formData.eventDate || 'Não informada'}%0AMensagem: ${formData.message || 'Nenhuma'}`;

    window.open(`https://wa.me/5521992845249?text=${whatsappMessage}`, '_blank');

    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        sweetType: '',
        quantity: '',
        eventDate: '',
        message: ''
      });

      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="encomendas" className="py-20 bg-gradient-to-br from-pink-50 via-white to-amber-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-4">
            Faça sua Encomenda
          </h2>
          <p className="text-xl text-gray-600 font-poppins">
            Preencha o formulário e entraremos em contato em breve
          </p>
        </div>

        {showSuccess && (
          <div className="mb-8 bg-green-50 border-l-4 border-green-500 p-6 rounded-lg flex items-center space-x-3 animate-fade-in">
            <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
            <p className="text-green-800 font-poppins">
              Obrigada! Sua solicitação foi enviada com sucesso. Entraremos em contato pelo WhatsApp em breve.
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-poppins font-medium mb-2">
              Nome completo *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 outline-none transition-all font-poppins"
              placeholder="Seu nome"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-poppins font-medium mb-2">
              E-mail *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 outline-none transition-all font-poppins"
              placeholder="seu@email.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-gray-700 font-poppins font-medium mb-2">
              Telefone (WhatsApp) *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 outline-none transition-all font-poppins"
              placeholder="(21) 99999-9999"
            />
          </div>

          <div>
            <label htmlFor="sweetType" className="block text-gray-700 font-poppins font-medium mb-2">
              Tipo de doce ou encomenda desejada *
            </label>
            <select
              id="sweetType"
              name="sweetType"
              required
              value={formData.sweetType}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 outline-none transition-all font-poppins"
            >
              <option value="">Selecione uma opção</option>
              <option value="Brigadeiros">Brigadeiros</option>
              <option value="Cupcakes">Cupcakes</option>
              <option value="Bolo decorado">Bolo decorado</option>
              <option value="Trufas">Trufas</option>
              <option value="Macarons">Macarons</option>
              <option value="Doces finos">Doces finos</option>
              <option value="Outro">Outro</option>
            </select>
          </div>

          <div>
            <label htmlFor="quantity" className="block text-gray-700 font-poppins font-medium mb-2">
              Quantidade aproximada *
            </label>
            <input
              type="text"
              id="quantity"
              name="quantity"
              required
              value={formData.quantity}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 outline-none transition-all font-poppins"
              placeholder="Ex: 50 unidades, 1 bolo"
            />
          </div>

          <div>
            <label htmlFor="eventDate" className="block text-gray-700 font-poppins font-medium mb-2">
              Data do evento (opcional)
            </label>
            <input
              type="date"
              id="eventDate"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 outline-none transition-all font-poppins"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700 font-poppins font-medium mb-2">
              Mensagem adicional (opcional)
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 outline-none transition-all font-poppins resize-none"
              placeholder="Conte-nos mais sobre sua encomenda..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white font-poppins font-semibold py-4 rounded-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
          >
            <Send className="w-5 h-5" />
            <span>{isSubmitting ? 'Enviando...' : 'Enviar pedido'}</span>
          </button>
        </form>
      </div>
    </section>
  );
}
