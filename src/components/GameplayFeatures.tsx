import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks';

interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    id: 1,
    icon: '⚔️',
    title: 'Combat System',
    description: 'Master precise combat mechanics with various weapons and martial techniques.',
  },
  {
    id: 2,
    icon: '🏔️',
    title: 'Vast Worlds',
    description: 'Explore ancient realms from misty mountains to ethereal temples.',
  },
  {
    id: 3,
    icon: '👹',
    title: 'Challenging Bosses',
    description: 'Battle mythical demons and legendary creatures with unique abilities.',
  },
  {
    id: 4,
    icon: '✨',
    title: 'Magical Powers',
    description: 'Harness supernatural abilities and transformation techniques.',
  },
  {
    id: 5,
    icon: '📖',
    title: 'Epic Story',
    description: 'Unravel the rich narrative inspired by classic Chinese literature.',
  },
  {
    id: 6,
    icon: '🎯',
    title: 'Multiple Endings',
    description: 'Your choices shape the destiny and conclusion of your journey.',
  },
];

export const GameplayFeatures: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section ref={ref} id="features" className="relative w-full section-padding bg-obsidian-900">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gold-900/5 rounded-full blur-3xl"
          animate={{ y: [0, 40, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gold-900/5 rounded-full blur-3xl"
          animate={{ y: [0, -40, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Gameplay Features</h2>
          <p className="text-gold-300 text-lg max-w-2xl mx-auto">
            Discover the core features that make this journey unforgettable
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mt-6" />
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              className="card-container p-8 flex flex-col items-center text-center group cursor-pointer"
              variants={itemVariants}
              whileHover={{ y: -8, boxShadow: '0 0 40px rgba(196, 155, 63, 0.3)' }}
            >
              {/* Icon */}
              <motion.div
                className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-300"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {feature.icon}
              </motion.div>

              {/* Content */}
              <h3 className="font-cinzel text-xl text-gold-400 mb-3 group-hover:text-gold-300 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gold-200/70 leading-relaxed text-sm">
                {feature.description}
              </p>

              {/* Hover line */}
              <motion.div
                className="mt-4 h-1 w-0 bg-gradient-to-r from-gold-400 to-gold-600 group-hover:w-full transition-all duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
