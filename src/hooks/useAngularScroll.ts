import { useEffect, useRef, useState } from 'react';

export const useAngularScroll = () => {
  const ref = useRef<HTMLElement>(null);
  const [translateX, setTranslateX] = useState(100);

  useEffect(() => {
    const handleScroll = () => {
      const aboutElement = document.getElementById('about');
      if (!aboutElement) return;
      
      const aboutRect = aboutElement.getBoundingClientRect();
      
      // Calculate how far past About we are (after it exits from top)
      const scrollDistance = -aboutRect.bottom;
      const slideDistance = Math.min(scrollDistance, window.innerHeight);
      const progress = slideDistance / window.innerHeight;
      
      // Characters slide from 100% (off-screen right) to 0% (fully visible)
      const xTranslate = Math.max(0, 100 - (progress * 100));
      setTranslateX(xTranslate);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { ref, translateX };
};
