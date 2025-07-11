import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Mision } from '../components/Mision';


export const Home1 = () => {
  return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

    <Navbar />
    {/*MaiN Content */}
    <main>
      <Hero />
      <Mision />

    </main>
    {/*Footer*/}
    </div>;
}