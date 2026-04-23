import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useInView } from '../hooks';

export const Hero: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false });
  useEffect(() => {
    // Floating animation for background glow
    gsap.to('.hero-glow', {
      y: -30,
      duration: 8,
      repeat: -1,
      repeatType: 'mirror',
      ease: 'sine.inOut',
    });

    // Random burst glitches effect
    const glitchElement = document.querySelector('.cinematic-glitch');
    if (glitchElement) {
      const randomizeGlitch = () => {
        // 40% chance of intense burst glitch
        const isIntenseBurst = Math.random() < 0.4;
        
        if (isIntenseBurst) {
          (glitchElement as HTMLElement).style.animationName = 'glitch-intense';
          (glitchElement as HTMLElement).style.animationDuration = '0.5s';
          (glitchElement as HTMLElement).style.animationIterationCount = '1';
        } else {
          (glitchElement as HTMLElement).style.animationName = 'professional-glitch';
          const randomDuration = Math.random() * (4 - 2.5) + 2.5; // 2.5-4s
          (glitchElement as HTMLElement).style.animationDuration = `${randomDuration}s`;
          (glitchElement as HTMLElement).style.animationIterationCount = '1';
        }
        
        const randomDelay = Math.random() * 3; // 0-3s delay
        (glitchElement as HTMLElement).style.animationDelay = `${randomDelay}s`;
        
        // Schedule next randomization
        const currentDuration = isIntenseBurst ? 500 : (Math.random() * (4000 - 2500) + 2500);
        setTimeout(randomizeGlitch, currentDuration + (randomDelay * 1000));
      };
      
      randomizeGlitch();
    }
  }, []);

  return (
    <section ref={ref} className="relative w-full h-screen flex items-center overflow-hidden pt-20">
      {/* Video Background - Fixed */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0 scale-110"
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for better text readability */}
      <div className="fixed inset-0 bg-obsidian-900/70 z-1" />

      {/* Animated background elements */}
      <motion.div
        className="hero-glow absolute top-1/4 left-0 w-96 h-96 bg-gold-500/20 rounded-full blur-3xl pointer-events-none z-2"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-0 w-96 h-96 bg-gold-600/10 rounded-full blur-3xl pointer-events-none z-2"
        animate={{
          scale: [1, 0.8, 1],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Content - Left Aligned */}
      <motion.div 
        className="relative z-10 px-4 sm:px-6 lg:px-12 max-w-3xl w-full ml-0 lg:ml-20"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {/* Decorative Asian element */}
        <motion.div
          className="mb-8 flex items-center gap-3 slide-in-left"
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div 
            className="w-16 h-1 bg-gradient-to-r from-gold-500 via-gold-400 to-transparent"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1.4 }}
          />
          <motion.span 
            className="font-serif text-xs tracking-widest text-gold-400"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1.4 }}
          >
            ANCIENT LEGEND
          </motion.span>
        </motion.div>

        {/* Title with Cinematic Glitch */}
        <motion.h1 
          className="hero-title font-cinzel text-6xl sm:text-7xl lg:text-8xl font-black text-gold-400 mb-2 leading-tight uppercase tracking-wider"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1.2, ease: [0.33, 0.66, 0.66, 1], delay: 0.8 }}
        >
          WUKONG'S
        </motion.h1>
        <motion.h2 
          className="hero-title cinematic-glitch font-cinzel text-6xl sm:text-7xl lg:text-8xl font-black text-gold-300 mb-12 leading-tight uppercase tracking-wider"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1.2, ease: [0.33, 0.66, 0.66, 1], delay: 1.1 }}
        >
          LEGEND
        </motion.h2>

        {/* Subtitle */}
        <motion.p 
          className="hero-subtitle font-serif text-lg sm:text-xl text-gold-200 mb-12 max-w-2xl leading-relaxed opacity-95"
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
          transition={{ duration: 0.9, ease: [0.33, 0.66, 0.66, 1], delay: 1.5 }}
        >
          Journey through ancient realms and conquer mythical demons in this epic tale of power and redemption
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          className="hero-buttons flex flex-col sm:flex-row gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.9, ease: [0.33, 0.66, 0.66, 1], delay: 1.9 }}
        >
          {/* Play Now Button */}
          <motion.button
            className="px-6 py-2 bg-gold-500 text-obsidian-900 font-cinzel font-bold rounded-lg hover:bg-gold-400 transition-colors"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(196, 155, 63, 0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            Play Now
          </motion.button>

          {/* Watch Trailer Button - Circle Arrow */}
          <motion.button
            className="relative group w-16 h-16 flex items-center justify-center overflow-hidden rounded-full"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Border circle */}
            <div className="absolute inset-0 border-2 border-gold-500 rounded-full z-0" />
            
            {/* Hover background fill */}
            <motion.div
              className="absolute inset-0 bg-gold-500/10 rounded-full z-0"
              whileHover={{ backgroundColor: 'rgba(196, 155, 63, 0.25)' }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Play arrow icon */}
            <span className="relative z-10 text-gold-400 text-2xl">▶</span>
            
            {/* Glow effect on hover */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{ boxShadow: '0 0 0 2px rgba(196, 155, 63, 0)' }}
              whileHover={{ boxShadow: '0 0 30px rgba(196, 155, 63, 0.8)' }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-12 lg:left-1/2 lg:transform lg:-translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg
          className="w-6 h-10 text-gold-500 opacity-70"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
};
