import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface GalleryImage {
  id: number;
  title: string;
  category: string;
  size: 'small' | 'medium' | 'large';
  image: string;
}

const galleryImages: GalleryImage[] = [
  { id: 1, title: 'Mountain Temple', category: 'Environment', size: 'large', image: '/gallery/1.jpg' },
  { id: 2, title: 'Ancient Shrine', category: 'Location', size: 'small', image: '/gallery/2.jpg' },
  { id: 3, title: 'Battle Scene', category: 'Action', size: 'medium', image: '/gallery/3.jpg' },
  { id: 4, title: 'Misty Valleys', category: 'Environment', size: 'medium', image: '/gallery/4.jpg' },
  { id: 5, title: 'Character Portrait', category: 'Character', size: 'small', image: '/gallery/5.jpg' },
  { id: 6, title: 'Epic Showdown', category: 'Action', size: 'large', image: '/gallery/6.jpg' },
  { id: 7, title: 'Sacred Garden', category: 'Location', size: 'small', image: '/gallery/7.jpg' },
  { id: 8, title: 'Demon Realm', category: 'Environment', size: 'medium', image: '/gallery/8.jpg' },
];

interface LightboxState {
  isOpen: boolean;
  imageId: number | null;
}

export const Gallery: React.FC = () => {
  const [lightbox, setLightbox] = useState<LightboxState>({ isOpen: false, imageId: null });

  const getGridSize = (size: string) => {
    switch (size) {
      case 'large':
        return 'md:col-span-2 md:row-span-2';
      case 'medium':
        return 'md:col-span-2 md:row-span-1';
      case 'small':
      default:
        return 'md:col-span-1 md:row-span-1';
    }
  };

  // Animation variants for staggered container and items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="gallery" className="relative w-full section-padding bg-obsidian-900">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gold-900/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="section-title">Gallery</h2>
          <p className="text-gold-300 text-lg">
            Explore stunning visuals from the world of Black Myth: Wukong
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mt-6" />
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-4"
          layout
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <AnimatePresence mode="popLayout">
            {galleryImages.map((image) => (
              <motion.div
                key={image.id}
                className={`${getGridSize(image.size)} relative group cursor-pointer overflow-hidden rounded-lg border border-gold-900/30 hover:border-gold-500/60 transition-colors`}
                layoutId={`gallery-${image.id}`}
                variants={itemVariants}
                onClick={() => setLightbox({ isOpen: true, imageId: image.id })}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 30px rgba(196, 155, 63, 0.6)',
                  transition: { duration: 0.3 }
                }}
              >
                {/* Image */}
                <img 
                  src={image.image}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />

                {/* Gradient animation overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"
                  animate={{ x: [-100, 100] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                {/* Hover effect */}
                <motion.div
                  className="absolute inset-0 bg-black/30"
                  initial={{ opacity: 0.3 }}
                  whileHover={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Content */}
                <div className="relative z-10 text-center absolute inset-0 flex items-center justify-center">
                  <motion.p
                    className="font-cinzel text-gold-400 text-sm sm:text-lg drop-shadow-lg"
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {image.title}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox.isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setLightbox({ isOpen: false, imageId: null })}
          >
            <motion.div
              className="relative bg-obsidian-900 border border-gold-500/40 rounded-lg max-w-2xl w-full"
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image display */}
              <div className="aspect-video bg-gradient-to-br from-gold-900/20 to-obsidian-900/60 flex items-center justify-center overflow-hidden rounded-t-lg">
                <img 
                  src={galleryImages.find((img) => img.id === lightbox.imageId)?.image}
                  alt={galleryImages.find((img) => img.id === lightbox.imageId)?.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Close button */}
              <motion.button
                className="absolute top-4 right-4 w-8 h-8 bg-gold-500 text-obsidian-900 rounded-full flex items-center justify-center hover:bg-gold-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setLightbox({ isOpen: false, imageId: null })}
              >
                ×
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
