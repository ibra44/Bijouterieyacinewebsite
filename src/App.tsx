import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Collections } from './components/Collections';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Collections />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
