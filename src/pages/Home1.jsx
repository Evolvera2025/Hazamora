import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Mision } from '../components/Mision';
import { Gallery } from '../components/Galeria';
import ServiciosSection from '/src/components/Servicios';
import ContactForm from '/src/components/Formulario.jsx';
import  Footer  from '../components/Footer';
import  Blog  from '../components/Blog';

export const Home1 = () => {
  return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

    <Navbar />
    {/*MaiN Content */}
    <main>
      <Hero />
      <Mision />
      <Gallery />
      <ServiciosSection />
      <Blog />
      <ContactForm />
    </main>
    <Footer />
    {/*Footer*/}
    </div>;
}