import { useEffect, useRef, useState } from 'react';
import {
  Header,
  Hero,
  About,
  Stats,
  GameplayFeatures,
  Gallery,
  Footer,
  LoadingScreen,
} from './components';
import './index.css';

function App() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loading screen after a delay to show content
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 second loading screen

    return () => clearTimeout(timer);
  }, []);

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
      {/* Loading Screen */}
      <LoadingScreen isLoading={isLoading} />

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
      <div className="ambient-light" />
      <div className="bg-orb orb-1" />
      <div className="bg-orb orb-2" />
      <div className="bg-orb orb-3" />

      {/* Main content */}
      <Header />
      <Hero />
      <About />
      
      {/* All pages scroll vertically */}
      <Stats />
      <GameplayFeatures />
      <Gallery />
      
      <Footer />
    </div>
  );
}

export default App;
