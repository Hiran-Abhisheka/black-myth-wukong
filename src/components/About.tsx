import React from 'react';
import { motion } from 'framer-motion';
import { useInView, useParallax } from '../hooks';

export const About: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false });
  const { ref: leftRef, offset: leftOffset } = useParallax(0.3);
  const { ref: rightRef, offset: rightOffset } = useParallax(0.5);

  const splitTextVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const charVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: i * 0.06,
      },
    }),
  };

  const titleWords = [
    { text: 'Wukong', position: 'left', row: 1 },
    { text: 'The', position: 'left', row: 2 },
    { text: 'Monkey', position: 'right', row: 2 },
    { text: 'King', position: 'left', row: 3 },
    { text: 'Ancient', position: 'right', row: 4 },
    { text: 'Power', position: 'left', row: 5 },
    { text: 'Unleashed', position: 'right', row: 5 },
  ];

  return (
    <section
      ref={ref}
      id="about"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Fixed Background */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(/aboutbg.jpg)',
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-obsidian-900/70 z-5" />

      {/* Content Grid */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Section - Text Content */}
          <motion.div
            ref={leftRef}
            className="lg:col-span-6 space-y-8"
            style={{ y: leftOffset }}
          >
            {/* Top Badge */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <motion.span 
                className="text-gold-500 font-cinzel text-sm tracking-widest px-3 py-1 rounded cursor-pointer"
                whileHover={{ 
                  backgroundColor: '#c49b3f',
                  color: '#1a1613',
                  transition: { duration: 0.2 }
                }}
              >
                Legend
              </motion.span>
              <div className="flex gap-3 text-white text-xs font-serif">
                <motion.span 
                  className="px-2 py-1 rounded cursor-pointer"
                  whileHover={{ 
                    backgroundColor: '#c49b3f',
                    color: '#1a1613',
                    transition: { duration: 0.2 }
                  }}
                >
                  Mythology
                </motion.span>
                <motion.span 
                  className="px-2 py-1 rounded cursor-pointer"
                  whileHover={{ 
                    backgroundColor: '#c49b3f',
                    color: '#1a1613',
                    transition: { duration: 0.2 }
                  }}
                >
                  Combat
                </motion.span>
                <motion.span 
                  className="px-2 py-1 rounded cursor-pointer"
                  whileHover={{ 
                    backgroundColor: '#c49b3f',
                    color: '#1a1613',
                    transition: { duration: 0.2 }
                  }}
                >
                  Journey
                </motion.span>
              </div>
            </motion.div>

            {/* Title - Character Split Animation */}
            <div className="space-y-6">
              {titleWords.slice(0, 3).map((word, wordIdx) => (
                <motion.div
                  key={`${inView}-${wordIdx}`}
                  className="flex flex-wrap gap-1"
                  variants={splitTextVariants}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                >
                  {word.text.split('').map((char, charIdx) => (
                    <motion.span
                      key={charIdx}
                      className={`text-4xl sm:text-5xl lg:text-6xl font-cinzel font-black uppercase px-2 rounded cursor-pointer ${
                        word.text === 'Wukong' ? 'text-gold-500' : 'text-white'
                      }`}
                      variants={charVariants}
                      custom={charIdx}
                      whileHover={{ 
                        backgroundColor: '#c49b3f',
                        color: '#1a1613',
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </motion.span>
                  ))}
                </motion.div>
              ))}
            </div>

            {/* Description */}
            <motion.p
              className="text-lg text-white max-w-md leading-relaxed font-serif"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Based on the legendary Chinese novel "Journey to the West", Black Myth: Wukong brings the Monkey King's epic tale to life with cutting-edge gameplay and stunning visuals inspired by ancient Chinese mythology.
            </motion.p>

            {/* Decorative Line */}
            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-gold-400 to-transparent"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </motion.div>

          {/* Right Section - Title Overlay */}
          <motion.div
            ref={rightRef}
            className="lg:col-span-6 relative h-96 lg:h-full flex flex-col justify-between"
            style={{ y: rightOffset }}
          >
            {/* Top Caption */}
            <motion.div
              className="text-gold-500 text-sm font-serif"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.p 
                className="text-gold-500 px-2 py-1 rounded cursor-pointer w-fit"
                whileHover={{ 
                  backgroundColor: '#c49b3f',
                  color: '#1a1613',
                  transition: { duration: 0.2 }
                }}
              >
                Epic battles await
              </motion.p>
              <motion.p 
                className="text-white px-2 py-1 rounded cursor-pointer w-fit"
                whileHover={{ 
                  backgroundColor: '#c49b3f',
                  color: '#1a1613',
                  transition: { duration: 0.2 }
                }}
              >
                in every realm
              </motion.p>
            </motion.div>

            {/* Central Title Words */}
            <div className="space-y-4">
              {titleWords.slice(3).map((word, wordIdx) => (
                <motion.div
                  key={`${inView}-${wordIdx}`}
                  className={`flex ${word.position === 'right' ? 'justify-end' : 'justify-start'}`}
                  variants={splitTextVariants}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                >
                  {word.text.split('').map((char, charIdx) => (
                    <motion.span
                      key={charIdx}
                      className={`text-3xl sm:text-4xl lg:text-5xl font-cinzel font-black uppercase px-2 rounded cursor-pointer ${
                        word.text === 'Power' ? 'text-gold-500' : 'text-white'
                      }`}
                      variants={charVariants}
                      custom={charIdx}
                      whileHover={{ 
                        backgroundColor: '#c49b3f',
                        color: '#1a1613',
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </motion.span>
                  ))}
                </motion.div>
              ))}
            </div>

            {/* Bottom Badge */}
            <motion.span
              className="text-white font-cinzel text-sm tracking-widest self-end px-3 py-1 rounded cursor-pointer"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ 
                backgroundColor: '#c49b3f',
                color: '#1a1613',
                transition: { duration: 0.2 }
              }}
            >
              Power
            </motion.span>
          </motion.div>
        </div>

        {/* Decorative Lines */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(7)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-full h-px bg-gold-500/20"
              style={{
                top: `${15 + i * 13}%`,
                left: '5%',
                right: '5%',
              }}
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.1 + i * 0.05 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
