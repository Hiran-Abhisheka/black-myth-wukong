import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    id: 1,
    title: 'Combat System',
    description: 'Master precise combat mechanics with various weapons and martial techniques.',
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M3 3l4 4m-4 0l4-4m14 0l-4 4m4 0l-4-4M11 7v10M7 11h10M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/>
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Vast Worlds',
    description: 'Explore ancient realms from misty mountains to ethereal temples.',
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Challenging Bosses',
    description: 'Battle mythical demons and legendary creatures with unique abilities.',
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8m0 2c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6m0 2c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"/>
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Magical Powers',
    description: 'Harness supernatural abilities and transformation techniques.',
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Epic Story',
    description: 'Unravel the rich narrative inspired by classic Chinese literature.',
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
      </svg>
    ),
  },
  {
    id: 6,
    title: 'Multiple Endings',
    description: 'Your choices shape the destiny and conclusion of your journey.',
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
      </svg>
    ),
  },
];

export const GameplayFeatures: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="features" className="relative w-full section-padding overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden bg-gradient-to-b from-obsidian-900 to-obsidian-800">
        {/* Animated geometric lines */}
        <motion.div
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500/30 to-transparent"
          animate={{ scaleX: [0.5, 1, 0.5] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        
        {/* Floating orbs */}
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-gold-900/8 rounded-full blur-3xl"
          animate={{ y: [0, 60, 0], x: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-72 h-72 bg-gold-900/8 rounded-full blur-3xl"
          animate={{ y: [0, -60, 0], x: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(0deg, #d4af37 1px, transparent 1px), linear-gradient(90deg, #d4af37 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="section-title">Gameplay Features</h2>
          <p className="text-gold-300 text-lg max-w-2xl mx-auto">
            Discover the core features that make this journey unforgettable
          </p>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mt-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
          />
        </motion.div>

        {/* Features List */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              className="relative group"
              variants={itemVariants}
            >
              {/* Animated background frame */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-gold-500/20 to-gold-900/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 blur"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />

              {/* Content */}
              <div className="relative bg-gradient-to-br from-obsidian-800/80 to-obsidian-900/80 backdrop-blur-sm p-8 rounded-lg border border-gold-500/20 group-hover:border-gold-500/40 transition-all duration-300">
                {/* Icon */}
                <motion.div
                  className="text-gold-400 mb-5 inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gold-500/10 group-hover:bg-gold-500/20 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {feature.icon}
                </motion.div>

                {/* Title */}
                <motion.h3 
                  className="font-cinzel text-lg text-gold-400 mb-3 group-hover:text-gold-300 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  {feature.title}
                </motion.h3>

                {/* Description */}
                <p className="text-gold-200/70 text-sm leading-relaxed mb-4">
                  {feature.description}
                </p>

                {/* Animated accent line */}
                <motion.div
                  className="h-1 w-0 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
