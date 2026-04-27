import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { scrollYProgress } = useScroll();
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }
      
      setLastScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 50);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = docHeight > 0 ? (currentScrollY / docHeight) * 100 : 0;
      setScrollPercent(percent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Stats', href: '#stats' },
    { label: 'Features', href: '#features' },
    { label: 'Gallery', href: '#gallery' },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-400 to-gold-600 z-50"
        style={{
          scaleX: scrollYProgress,
          transformOrigin: '0%',
        }}
      />

      {/* Scroll Percentage */}
      <motion.div
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full border-2 border-gold-400 flex items-center justify-center backdrop-blur-sm bg-obsidian-900/20"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
      >
        <span className="text-gold-400 font-cinzel text-sm font-bold tracking-wider">
          {Math.round(scrollPercent)}%
        </span>
      </motion.div>

      <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-obsidian-900/95 backdrop-blur-lg border-b border-gold-900/30'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: isScrollingDown ? -100 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="flex items-center space-x-2 cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          <img 
            src="/Black-Myth-Wukong-Logo-White-Text-PNG.png" 
            alt="Wukong Logo" 
            className="h-12 w-auto object-contain"
          />
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              className="px-4 py-2 text-gold-300 hover:text-gold-400 font-serif transition-colors relative group"
              whileHover={{ y: -2 }}
            >
              {link.label}
              <motion.div
                className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-gold-400 to-gold-600 origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <motion.button
          className="hidden md:block px-6 py-2 bg-gold-500 text-obsidian-900 font-cinzel font-bold rounded-lg hover:bg-gold-400 transition-colors"
          whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(196, 155, 63, 0.5)' }}
          whileTap={{ scale: 0.95 }}
        >
          Play Now
        </motion.button>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden relative w-10 h-10 flex flex-col justify-center items-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            className="w-6 h-0.5 bg-gold-400 rounded absolute"
            animate={isMobileMenuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-gold-400 rounded"
            animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-gold-400 rounded absolute"
            animate={isMobileMenuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 8 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-obsidian-900/95 backdrop-blur-lg border-b border-gold-900/30"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="block px-4 py-3 text-gold-300 hover:text-gold-400 hover:bg-gold-500/10 rounded transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileHover={{ x: 5 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.button
                className="w-full mt-4 px-4 py-3 bg-gold-500 text-obsidian-900 font-bold rounded hover:bg-gold-400 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Play Now
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </motion.header>
    </>
  );
};
