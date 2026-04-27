import { useEffect, useRef } from 'react';
import {
  Header,
  Hero,
  About,
  Stats,
  GameplayFeatures,
  Trailer,
  Gallery,
  Footer,
} from './components';
import './index.css';

function App() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Smooth scroll behavior is set in CSS, but we can add additional scroll effects here
    // This ensures the page loads properly
    window.scrollTo(0, 0);

    // Setup background music
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.3; // Set volume to 30%
      // Try to autoplay - browsers may block this until user interaction
      audio.play().catch(() => {
        // Autoplay blocked by browser, will play after user interaction
      });
    }

    // Play music on user interaction (fallback for autoplay restrictions)
    const playMusic = () => {
      if (audio) {
        audio.loop = true;
        if (audio.paused) {
          audio.play();
        }
      }
    };

    document.addEventListener('click', playMusic);
    
    return () => {
      document.removeEventListener('click', playMusic);
    };
  }, []);

  return (
    <div className="min-h-screen bg-obsidian-900 text-gold-100">
      {/* Background Music */}
      <audio
        ref={audioRef}
        src="/bgmusic.mp3"
        loop
        playsInline
      />

      {/* Background elements */}
      <div className="hero-bg" />
      <div className="fog" />

      {/* Main content */}
      <Header />
      <Hero />
      <About />
      
      {/* All pages scroll vertically */}
      <Stats />
      <GameplayFeatures />
      <Trailer />
      <Gallery />
      
      <Footer />
    </div>
  );
}

export default App;
