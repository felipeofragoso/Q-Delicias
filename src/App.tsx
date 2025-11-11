import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import OrderForm from './components/OrderForm';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Gallery />
      <Testimonials />
      <OrderForm />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
