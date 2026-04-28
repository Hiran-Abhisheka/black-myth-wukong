import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  isLoading: boolean;
}

export const LoadingScreen = ({ isLoading }: LoadingScreenProps) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-obsidian-900"
        >
          {/* Background animated orbs */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-96 h-96 bg-gradient-to-r from-gold-500 to-transparent rounded-full blur-3xl opacity-20 animate-float-orb-1 -top-20 -left-20"></div>
            <div className="absolute w-96 h-96 bg-gradient-to-r from-red-600 to-transparent rounded-full blur-3xl opacity-15 animate-float-orb-2 -bottom-32 right-0"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-32 h-32 flex items-center justify-center"
            >
              <img
                src="/Black-Myth-Wukong-Logo-White-Text-PNG.png"
                alt="Black Myth Wukong"
                className="w-full h-full object-contain"
              />
            </motion.div>

            {/* Loading text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <h1 className="text-2xl font-bold text-gold-400 mb-2">BlackMyth Wukong</h1>
              <p className="text-gold-200 text-sm">Loading experience...</p>
            </motion.div>

            {/* Animated loading bar */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 200 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="h-1 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 rounded-full overflow-hidden"
            >
              <motion.div
                animate={{ x: [-200, 200] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="h-full w-1/3 bg-gradient-to-r from-transparent via-white to-transparent"
              />
            </motion.div>

            {/* Animated dots */}
            <motion.div className="flex gap-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{
                    duration: 1.2,
                    delay: i * 0.2,
                    repeat: Infinity,
                  }}
                  className="w-2 h-2 rounded-full bg-gold-400"
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
