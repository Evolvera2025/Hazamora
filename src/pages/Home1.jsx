import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Mision } from '../components/Mision';
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
      <ServiciosSection />
      <Blog />
      <ContactForm />

    </main>
    <Footer />
    {/*Footer*/}
    </div>;
}