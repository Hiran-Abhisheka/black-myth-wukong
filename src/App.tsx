import { useEffect } from 'react';
import {
  Header,
  Hero,
  About,
  Characters,
  GameplayFeatures,
  Trailer,
  Gallery,
  Footer,
} from './components';
import './index.css';

function App() {
  useEffect(() => {
    // Smooth scroll behavior is set in CSS, but we can add additional scroll effects here
    // This ensures the page loads properly
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-obsidian-900 text-gold-100">
      {/* Background elements */}
      <div className="hero-bg" />
      <div className="fog" />

      {/* Main content */}
      <Header />
      <Hero />
      <About />
      <Characters />
      <GameplayFeatures />
      <Trailer />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
