import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks';

export const About: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      ref={ref}
      className="relative w-full section-padding bg-obsidian-900/50 backdrop-blur-sm border-y border-gold-900/30"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian-900 via-transparent to-obsidian-900 opacity-40 -z-10" />

      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {/* Section Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="section-title">About the Legend</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto" />
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <p className="text-lg text-gold-200 leading-relaxed">
              Black Myth: Wukong brings the legendary Chinese novel "Journey to the West" to life with stunning visuals and 
              immersive gameplay. Experience the tale of the Monkey King in an all-new way.
            </p>

            <p className="text-lg text-gold-200 leading-relaxed">
              Traverse breathtaking landscapes inspired by ancient Chinese mythology, from misty mountains to sacred temples. 
              Each realm holds secrets, challenges, and untold power awaiting discovery.
            </p>

            <ul className="space-y-3 pt-6">
              {['Epic Boss Battles', 'Rich Story Campaign', 'Dynamic Combat System'].map((feature, i) => (
                <motion.li
                  key={i}
                  className="flex items-center space-x-3 text-gold-300"
                  whileHover={{ x: 10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <span className="w-2 h-2 bg-gold-500 rounded-full" />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            className="relative h-96 rounded-lg overflow-hidden border border-gold-500/30 shadow-glow"
            variants={itemVariants}
            whileHover={{ boxShadow: '0 0 60px rgba(196, 155, 63, 0.4)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gold-900/20 to-obsidian-900/80 flex items-center justify-center">
              <motion.div
                className="text-center"
                animate={{ y: -10 }}
                transition={{ duration: 4, repeat: Infinity, repeatType: 'mirror' }}
              >
                <div className="w-24 h-24 bg-gold-500/20 rounded-full blur-2xl mx-auto mb-4" />
                <p className="font-cinzel text-2xl text-gold-400">Journey Awaits</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
