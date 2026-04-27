import { useEffect, useRef, useState } from 'react';

export const useAboutScroll = () => {
  const ref = useRef<HTMLElement>(null);
  const [translateX, setTranslateX] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const aboutRect = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // When About is fully visible (hasn't scrolled yet)
        if (aboutRect.top > windowHeight) {
          setTranslateX(0);
          setOpacity(1);
        } else if (aboutRect.top < -aboutRect.height) {
          // About has completely scrolled out - slide to left and fade
          setTranslateX(-100);
          setOpacity(0);
        } else if (aboutRect.top > 0) {
          // About is entering viewport - no effect yet
          setTranslateX(0);
          setOpacity(1);
        } else {
          // About is scrolling out - apply exit animation (right to left)
          const scrolledPast = Math.abs(aboutRect.top) / aboutRect.height;
          const xTranslate = -scrolledPast * 100;
          const opacityValue = Math.max(0, 1 - scrolledPast);
          
          setTranslateX(xTranslate);
          setOpacity(opacityValue);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { ref, translateX, opacity };
};

