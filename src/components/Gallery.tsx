import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks';

interface GalleryImage {
  id: number;
  title: string;
  category: string;
  size: 'small' | 'medium' | 'large';
}

const galleryImages: GalleryImage[] = [
  { id: 1, title: 'Mountain Temple', category: 'Environment', size: 'large' },
  { id: 2, title: 'Ancient Shrine', category: 'Location', size: 'small' },
  { id: 3, title: 'Battle Scene', category: 'Action', size: 'medium' },
  { id: 4, title: 'Misty Valleys', category: 'Environment', size: 'medium' },
  { id: 5, title: 'Character Portrait', category: 'Character', size: 'small' },
  { id: 6, title: 'Epic Showdown', category: 'Action', size: 'large' },
  { id: 7, title: 'Sacred Garden', category: 'Location', size: 'small' },
  { id: 8, title: 'Demon Realm', category: 'Environment', size: 'medium' },
];

interface LightboxState {
  isOpen: boolean;
  imageId: number | null;
}

export const Gallery: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });
  const [lightbox, setLightbox] = useState<LightboxState>({ isOpen: false, imageId: null });
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Environment', 'Location', 'Character', 'Action'];

  const filteredImages =
    selectedCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

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

  return (
    <section ref={ref} className="relative w-full section-padding bg-obsidian-900">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gold-900/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Gallery</h2>
          <p className="text-gold-300 text-lg">
            Explore stunning visuals from the world of Black Myth: Wukong
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mt-6" />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap gap-3 justify-center mb-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-cinzel transition-all ${
                selectedCategory === cat
                  ? 'bg-gold-500 text-obsidian-900 shadow-glow'
                  : 'bg-obsidian-800 text-gold-400 border border-gold-500/30 hover:border-gold-500/60'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-4"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                className={`${getGridSize(image.size)} relative group cursor-pointer overflow-hidden rounded-lg border border-gold-900/30 hover:border-gold-500/60 transition-colors`}
                layoutId={`gallery-${image.id}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                onClick={() => setLightbox({ isOpen: true, imageId: image.id })}
                whileHover={{ boxShadow: '0 0 30px rgba(196, 155, 63, 0.4)' }}
              >
                {/* Image placeholder with gradient */}
                <div className="w-full h-full min-h-48 bg-gradient-to-br from-gold-900/20 to-obsidian-900/60 flex items-center justify-center relative overflow-hidden">
                  {/* Gradient animation overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"
                    animate={{ x: [-100, 100] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />

                  {/* Hover effect */}
                  <motion.div
                    className="absolute inset-0 bg-black/30 group-hover:bg-black/0 transition-colors"
                  />

                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <motion.p
                      className="font-cinzel text-gold-400 text-sm sm:text-lg"
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                    >
                      {image.title}
                    </motion.p>
                  </div>

                  {/* Play icon for action category */}
                  <AnimatePresence>
                    {image.category === 'Action' && (
                      <motion.svg
                        className="absolute right-4 bottom-4 w-8 h-8 text-gold-400 opacity-0 group-hover:opacity-100 transition-opacity"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                      >
                        <path d="M8 5v14l11-7z" />
                      </motion.svg>
                    )}
                  </AnimatePresence>
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
            onClick={() => setLightbox({ isOpen: false, imageId: null })}
          >
            <motion.div
              className="relative bg-obsidian-900 border border-gold-500/40 rounded-lg max-w-2xl w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image display */}
              <div className="aspect-video bg-gradient-to-br from-gold-900/20 to-obsidian-900/60 flex items-center justify-center">
                <p className="text-gold-400 font-cinzel text-lg">
                  {galleryImages.find((img) => img.id === lightbox.imageId)?.title}
                </p>
              </div>

              {/* Info */}
              <div className="p-6">
                <p className="text-gold-300 font-cinzel text-xl mb-2">
                  {galleryImages.find((img) => img.id === lightbox.imageId)?.title}
                </p>
                <p className="text-gold-200/70">
                  Category: {galleryImages.find((img) => img.id === lightbox.imageId)?.category}
                </p>
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
