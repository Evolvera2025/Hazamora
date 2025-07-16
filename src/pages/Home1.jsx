import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Mision } from '../components/Mision';
import ContactForm from '/src/components/Formulario.jsx';


export const Home1 = () => {
  return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

    <Navbar />
    {/*MaiN Content */}
    <main>
      <Hero />
      <Mision />
      <ContactForm />

    </main>
    {/*Footer*/}
    </div>;
}