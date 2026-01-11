import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import BackgroundPattern from './components/BackgroundPattern';
import Navigation from './components/Navigation';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-950 text-gray-100 overflow-x-hidden">
      <BackgroundPattern />
      <Navigation />

      <div className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>

      <footer className="relative z-10 py-8 text-center text-gray-400 text-sm border-t border-gray-800">
        <p>&copy; 2026 Steffina Evangelin S. Built with passion and precision.</p>
      </footer>
    </div>
  );
}

export default App;
