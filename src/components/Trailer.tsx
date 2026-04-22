import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks';

export const Trailer: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.3 });
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  return (
    <section
      ref={ref}
      className="relative w-full section-padding bg-gradient-to-b from-obsidian-800 to-obsidian-900"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold-900/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Watch the Trailer</h2>
          <p className="text-gold-300 text-lg">
            Experience the cinematic journey of Black Myth: Wukong
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mt-6" />
        </motion.div>

        {/* Video Container */}
        <motion.div
          className="relative aspect-video rounded-lg overflow-hidden border-2 border-gold-500/40 group"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ borderColor: 'rgba(196, 155, 63, 0.8)' }}
        >
          {/* Video placeholder with background */}
          <div className="w-full h-full bg-gradient-to-br from-obsidian-900 via-gold-900/20 to-obsidian-900 flex items-center justify-center relative overflow-hidden">
            {/* Animated background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-500/10 to-transparent"
              animate={{ x: [-1000, 1000] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            />

            {/* Play button */}
            <AnimatePresence>
              {!isPlayingVideo && (
                <motion.button
                  onClick={() => setIsPlayingVideo(true)}
                  className="relative z-20"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="w-20 h-20 bg-gold-500 rounded-full flex items-center justify-center shadow-glow"
                    animate={{ boxShadow: ['0 0 20px rgba(196, 155, 63, 0.5)', '0 0 40px rgba(196, 155, 63, 0.8)', '0 0 20px rgba(196, 155, 63, 0.5)'] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <svg
                      className="w-10 h-10 text-obsidian-900 ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </motion.div>
                </motion.button>
              )}
            </AnimatePresence>

            {/* Playing state */}
            {isPlayingVideo && (
              <motion.div
                className="absolute inset-0 z-20 flex items-center justify-center bg-black/50 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="bg-obsidian-900 rounded-lg p-8 max-w-2xl"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                >
                  <div className="aspect-video bg-black rounded flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-gold-400 font-cinzel text-xl mb-4">
                        Embed Video Player Here
                      </p>
                      <p className="text-gold-300 text-sm">
                        Replace with YouTube iframe or video player
                      </p>
                    </div>
                  </div>
                  <motion.button
                    onClick={() => setIsPlayingVideo(false)}
                    className="mt-4 w-full py-2 bg-gold-500 text-obsidian-900 font-bold rounded hover:bg-gold-400"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Close
                  </motion.button>
                </motion.div>
              </motion.div>
            )}

            {/* Static content overlay */}
            {!isPlayingVideo && (
              <div className="relative z-10 text-center space-y-4">
                <p className="font-cinzel text-2xl text-gold-400">
                  Black Myth: Wukong
                </p>
                <p className="text-gold-300/70">
                  Click to watch the official trailer
                </p>
              </div>
            )}
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-center text-gold-300/80 mt-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Immerse yourself in a visually stunning adventure that brings the classic tale of the Monkey King to life
        </motion.p>
      </div>
    </section>
  );
};
