import React from 'react';
import { motion } from 'framer-motion';

export const StrengthIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
  <motion.svg
    viewBox="0 0 100 100"
    className={`fill-current ${className}`}
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ type: 'spring', stiffness: 120, damping: 15 }}
  >
    <defs>
      <linearGradient id="strengthGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffd700" />
        <stop offset="100%" stopColor="#d4af37" />
      </linearGradient>
      <radialGradient id="strengthGlow">
        <stop offset="0%" stopColor="#ffd700" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
      </radialGradient>
    </defs>
    {/* Glow aura */}
    <motion.circle cx="50" cy="50" r="40" fill="url(#strengthGlow)" />
    
    {/* Upper arm/bicep - large muscular shape */}
    <motion.path
      d="M35 35 Q28 40 28 50 Q28 60 35 65 L48 68 Q55 65 55 50 Q55 35 48 32 Z"
      fill="url(#strengthGrad)"
      animate={{ scaleY: [1, 1.12, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
      style={{ transformOrigin: '41px 50px' }}
    />
    
    {/* Lower arm/forearm */}
    <motion.path
      d="M48 32 L68 20 Q72 25 72 35 Q70 55 55 60 L48 68 Q50 55 48 35 Z"
      fill="url(#strengthGrad)"
      animate={{ rotate: [-8, 12, -8], x: [0, 3, 0] }}
      transition={{ duration: 2.2, repeat: Infinity }}
      style={{ transformOrigin: '55px 40px', opacity: 0.95 }}
    />
    
    {/* Fist - defined and prominent */}
    <motion.circle
      cx="75"
      cy="20"
      r="8"
      fill="url(#strengthGrad)"
      animate={{ scale: [1, 1.25, 1], y: [-2, -6, -2] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    
    {/* Fist details - knuckles */}
    <motion.circle
      cx="75"
      cy="20"
      r="8"
      fill="none"
      stroke="url(#strengthGrad)"
      strokeWidth="1.2"
      opacity="0.6"
      animate={{ opacity: [0.4, 0.8, 0.4] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    
    {/* Muscle definition lines */}
    <motion.path
      d="M38 45 Q42 42 45 45"
      stroke="url(#strengthGrad)"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
      opacity="0.6"
      animate={{ opacity: [0.3, 0.9, 0.3] }}
      transition={{ duration: 1.8, repeat: Infinity }}
    />
    
    {/* Power glow effect */}
    <motion.path
      d="M48 32 L60 20 L68 25"
      stroke="url(#strengthGrad)"
      strokeWidth="1"
      fill="none"
      strokeLinecap="round"
      opacity="0.5"
      animate={{ opacity: [0.2, 0.7, 0.2] }}
      transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
    />
  </motion.svg>
);

export const SpeedIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
  <motion.svg
    viewBox="0 0 100 100"
    className={`fill-current ${className}`}
  >
    <defs>
      <linearGradient id="speedGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#ffff00" />
        <stop offset="50%" stopColor="#ffef5b" />
        <stop offset="100%" stopColor="#ffd700" />
      </linearGradient>
      <radialGradient id="speedGlow">
        <stop offset="0%" stopColor="#ffff00" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#ffd700" stopOpacity="0" />
      </radialGradient>
    </defs>
    
    {/* Glow aura */}
    <motion.circle 
      cx="50" 
      cy="50" 
      r="36" 
      fill="url(#speedGlow)"
      animate={{ r: [36, 42, 36] }}
      transition={{ duration: 1.8, repeat: Infinity }}
    />
    
    {/* Main lightning bolt - proper jagged zigzag */}
    <motion.path
      d="M50 5 L65 28 L48 34 L68 55 L45 60 L62 88 L30 48 L42 42 Z"
      fill="url(#speedGrad)"
      animate={{ 
        opacity: [0.9, 1, 0.9],
      }}
      transition={{ duration: 1.4, repeat: Infinity }}
      style={{ filter: 'drop-shadow(0 0 8px #ffff00)' }}
    />
    
    {/* Inner bright core */}
    <motion.path
      d="M50 8 L62 28 L50 34 L65 55 L48 60 L60 82 L35 48 L45 42 Z"
      fill="url(#speedGrad)"
      opacity="0.5"
      animate={{ opacity: [0.35, 0.65, 0.35] }}
      transition={{ duration: 1.3, repeat: Infinity, delay: 0.1 }}
    />
    
    {/* Left branch lightning */}
    <motion.path
      d="M40 32 L32 48 L38 62"
      stroke="url(#speedGrad)"
      strokeWidth="2.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.7"
      animate={{ opacity: [0.2, 0.8, 0.2] }}
      transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
      style={{ filter: 'drop-shadow(0 0 4px #ffff00)' }}
    />
    
    {/* Right branch lightning */}
    <motion.path
      d="M60 50 L72 62 L68 75"
      stroke="url(#speedGrad)"
      strokeWidth="2.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.7"
      animate={{ opacity: [0.2, 0.8, 0.2] }}
      transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
      style={{ filter: 'drop-shadow(0 0 4px #ffff00)' }}
    />
    
    {/* Speed motion lines - horizontal dash effect */}
    {[0, 1, 2].map((i) => (
      <motion.line
        key={i}
        x1={18 + i * 14}
        y1="50"
        x2={8 + i * 14}
        y2="50"
        stroke="url(#speedGrad)"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
        animate={{ x: [-12, 16, -12], opacity: [0.2, 0.8, 0.2] }}
        transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.12 }}
      />
    ))}
  </motion.svg>
);

export const AgilityIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
  <motion.svg
    viewBox="0 0 100 100"
    className={`fill-current ${className}`}
  >
    <defs>
      <linearGradient id="agilityGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00ff88" />
        <stop offset="100%" stopColor="#00cc66" />
      </linearGradient>
      <linearGradient id="agilityGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#00ff88" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#00cc66" stopOpacity="0.1" />
      </linearGradient>
    </defs>
    {/* Main circular body */}
    <motion.circle
      cx="50"
      cy="50"
      r="28"
      fill="url(#agilityGrad2)"
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
    />
    {/* Rotating curves */}
    <motion.path
      d="M50 25 Q70 40 65 60"
      stroke="url(#agilityGrad)"
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      style={{ transformOrigin: '50px 50px' }}
    />
    <motion.path
      d="M50 75 Q30 60 35 40"
      stroke="url(#agilityGrad)"
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      style={{ transformOrigin: '50px 50px' }}
    />
    {/* Center accent */}
    <motion.circle
      cx="50"
      cy="50"
      r="6"
      fill="url(#agilityGrad)"
      animate={{ scale: [1, 1.3, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
  </motion.svg>
);

export const MagicIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
  <motion.svg
    viewBox="0 0 100 100"
    className={`fill-current ${className}`}
  >
    <defs>
      <linearGradient id="magicGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ff00ff" />
        <stop offset="100%" stopColor="#aa00ff" />
      </linearGradient>
      <radialGradient id="magicGlow">
        <stop offset="0%" stopColor="#ff00ff" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#aa00ff" stopOpacity="0" />
      </radialGradient>
    </defs>
    {/* Glow background */}
    <motion.circle cx="50" cy="50" r="38" fill="url(#magicGlow)" />
    {/* Outer ring */}
    <motion.circle
      cx="50"
      cy="50"
      r="30"
      fill="none"
      stroke="url(#magicGrad)"
      strokeWidth="2"
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
      style={{ transformOrigin: '50px 50px' }}
    />
    {/* Middle ring */}
    <motion.circle
      cx="50"
      cy="50"
      r="22"
      fill="none"
      stroke="url(#magicGrad)"
      strokeWidth="1.5"
      opacity="0.6"
      animate={{ rotate: [360, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      style={{ transformOrigin: '50px 50px' }}
    />
    {/* Inner star/burst */}
    <motion.path
      d="M50 25 L55 42 L73 45 L60 55 L65 75 L50 62 L35 75 L40 55 L27 45 L45 42 Z"
      fill="url(#magicGrad)"
      animate={{ scale: [1, 1.15, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
      style={{ transformOrigin: '50px 50px' }}
    />
    {/* Center glow */}
    <motion.circle
      cx="50"
      cy="50"
      r="8"
      fill="url(#magicGrad)"
      animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
  </motion.svg>
);

export const EnduranceIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
  <motion.svg
    viewBox="0 0 100 100"
    className={`fill-current ${className}`}
  >
    <defs>
      <linearGradient id="enduranceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ff6b35" />
        <stop offset="100%" stopColor="#cc4422" />
      </linearGradient>
      <radialGradient id="enduranceGlow">
        <stop offset="0%" stopColor="#ff6b35" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#cc4422" stopOpacity="0" />
      </radialGradient>
    </defs>
    {/* Glow background */}
    <motion.circle cx="50" cy="50" r="40" fill="url(#enduranceGlow)" />
    {/* Outer shield outline */}
    <motion.path
      d="M50 18 L75 35 L75 55 Q50 70 25 55 L25 35 Z"
      fill="none"
      stroke="url(#enduranceGrad)"
      strokeWidth="2.5"
      opacity="0.8"
    />
    {/* Shield body with gradient */}
    <motion.path
      d="M50 22 L72 37 L72 55 Q50 68 28 55 L28 37 Z"
      fill="url(#enduranceGrad)"
      opacity="0.6"
      animate={{ scale: [1, 1.08, 1] }}
      transition={{ duration: 2.5, repeat: Infinity }}
      style={{ transformOrigin: '50px 45px' }}
    />
    {/* Inner flame effect */}
    <motion.path
      d="M50 35 L58 50 L50 60 L42 50 Z"
      fill="url(#enduranceGrad)"
      opacity="0.9"
      animate={{ scaleY: [1, 1.2, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
      style={{ transformOrigin: '50px 47.5px' }}
    />
    {/* Inner accent lines */}
    <motion.path
      d="M45 40 L45 55"
      stroke="url(#enduranceGrad)"
      strokeWidth="1.5"
      opacity="0.5"
      animate={{ opacity: [0.3, 1, 0.3] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
    <motion.path
      d="M55 40 L55 55"
      stroke="url(#enduranceGrad)"
      strokeWidth="1.5"
      opacity="0.5"
      animate={{ opacity: [0.3, 1, 0.3] }}
      transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
    />
  </motion.svg>
);

export const WisdomIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
  <motion.svg
    viewBox="0 0 100 100"
    className={`fill-current ${className}`}
  >
    <defs>
      <linearGradient id="wisdomGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#c9a961" />
        <stop offset="100%" stopColor="#8b7355" />
      </linearGradient>
      <linearGradient id="wisdomGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#d9c379" />
        <stop offset="100%" stopColor="#9b8365" />
      </linearGradient>
    </defs>
    {/* Head/Mind */}
    <motion.circle
      cx="50"
      cy="32"
      r="14"
      fill="url(#wisdomGrad)"
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 3, repeat: Infinity }}
    />
    {/* Crown/Halo */}
    <motion.circle
      cx="50"
      cy="32"
      r="18"
      fill="none"
      stroke="url(#wisdomGrad)"
      strokeWidth="1.5"
      opacity="0.5"
      animate={{ r: [18, 22, 18], y: [0, -5, 0] }}
      transition={{ duration: 2.5, repeat: Infinity }}
    />
    {/* Body/Meditation pose */}
    <motion.path
      d="M40 47 L40 65 L50 75 L60 65 L60 47 Q55 43 50 43 Q45 43 40 47"
      fill="url(#wisdomGrad2)"
      opacity="0.8"
      animate={{ y: [-3, 3, -3] }}
      transition={{ duration: 2.5, repeat: Infinity, delay: 0.2 }}
    />
    {/* Legs crossed */}
    <motion.path
      d="M42 65 L35 75 L50 80 L65 75 L58 65"
      fill="url(#wisdomGrad)"
      opacity="0.7"
      animate={{ y: [-2, 2, -2] }}
      transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }}
    />
    {/* Eye/Third eye glow */}
    <motion.circle
      cx="50"
      cy="30"
      r="3"
      fill="url(#wisdomGrad)"
      animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
  </motion.svg>
);

export const CloudJumpIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
  <motion.svg
    viewBox="0 0 100 100"
    className={`fill-current ${className}`}
  >
    <defs>
      <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#d0efff" />
        <stop offset="100%" stopColor="#90c8ff" />
      </linearGradient>
    </defs>
    {/* Cloud body */}
    <motion.path
      d="M20 60 Q20 45 35 45 Q45 30 60 45 Q75 45 75 60 Q75 75 50 80 Q25 75 20 60"
      fill="url(#cloudGrad)"
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
    />
    {/* Cloud texture - bumps */}
    <motion.circle cx="35" cy="55" r="8" fill="url(#cloudGrad)" opacity="0.6" animate={{ y: [0, -12, 0] }} transition={{ duration: 2.5, repeat: Infinity }} />
    <motion.circle cx="50" cy="50" r="10" fill="url(#cloudGrad)" opacity="0.7" animate={{ y: [0, -12, 0] }} transition={{ duration: 2.5, repeat: Infinity }} />
    <motion.circle cx="65" cy="55" r="8" fill="url(#cloudGrad)" opacity="0.6" animate={{ y: [0, -12, 0] }} transition={{ duration: 2.5, repeat: Infinity }} />
    {/* Falling particles/sparkles */}
    {[0, 1, 2].map((i) => (
      <motion.circle
        key={i}
        cx={30 + i * 20}
        cy="85"
        r="2"
        fill="url(#cloudGrad)"
        animate={{ y: [0, 20, 0], opacity: [1, 0.3, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3 }}
      />
    ))}
  </motion.svg>
);

export const BoneCudgelIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
  <motion.svg
    viewBox="0 0 100 100"
    className={`fill-current ${className}`}
  >
    <defs>
      <linearGradient id="cudgelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#e8d4b8" />
        <stop offset="100%" stopColor="#a89860" />
      </linearGradient>
      <linearGradient id="cudgelDark" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#d4b89c" />
        <stop offset="100%" stopColor="#8b7355" />
      </linearGradient>
    </defs>
    {/* Main shaft */}
    <motion.rect
      x="45"
      y="20"
      width="10"
      height="55"
      fill="url(#cudgelGrad)"
      animate={{ rotate: [-8, 8, -8] }}
      transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      style={{ transformOrigin: '50px 50px' }}
    />
    {/* Shaft highlights */}
    <motion.rect
      x="47"
      y="25"
      width="3"
      height="45"
      fill="url(#cudgelDark)"
      opacity="0.4"
      animate={{ rotate: [-8, 8, -8] }}
      transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      style={{ transformOrigin: '50px 50px' }}
    />
    {/* Large knob head */}
    <motion.circle
      cx="50"
      cy="17"
      r="10"
      fill="url(#cudgelGrad)"
      animate={{ scale: [1, 1.12, 1], rotate: [-8, 8, -8] }}
      transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      style={{ transformOrigin: '50px 50px' }}
    />
    {/* Knob highlight */}
    <motion.circle
      cx="48"
      cy="14"
      r="4"
      fill="url(#cudgelDark)"
      opacity="0.6"
      animate={{ scale: [1, 1.2, 1], rotate: [-8, 8, -8] }}
      transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      style={{ transformOrigin: '50px 50px' }}
    />
    {/* Bottom cap/ferrule */}
    <motion.ellipse
      cx="50"
      cy="77"
      rx="7"
      ry="4"
      fill="url(#cudgelDark)"
      opacity="0.7"
      animate={{ rotate: [-8, 8, -8] }}
      transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      style={{ transformOrigin: '50px 50px' }}
    />
  </motion.svg>
);

export const ImmortalBodyIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
  <motion.svg
    viewBox="0 0 100 100"
    className={`fill-current ${className}`}
  >
    <defs>
      <linearGradient id="immortalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ff5544" />
        <stop offset="100%" stopColor="#dd1111" />
      </linearGradient>
      <radialGradient id="immortalGlow">
        <stop offset="0%" stopColor="#ffaa99" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#dd1111" stopOpacity="0" />
      </radialGradient>
    </defs>
    {/* Flame glow background */}
    <motion.circle cx="50" cy="50" r="38" fill="url(#immortalGlow)" />
    {/* Armor core */}
    <motion.path
      d="M50 15 L65 28 L65 45 L50 55 L35 45 L35 28 Z"
      fill="url(#immortalGrad)"
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
      style={{ transformOrigin: '50px 35px' }}
    />
    {/* Flame layers */}
    <motion.path
      d="M40 45 Q35 55 40 70 Q50 68 50 55 Q50 68 60 70 Q65 55 60 45"
      fill="url(#immortalGrad)"
      opacity="0.7"
      animate={{ scaleY: [1, 1.25, 1] }}
      transition={{ duration: 2.2, repeat: Infinity }}
      style={{ transformOrigin: '50px 55px' }}
    />
    {/* Inner glow core */}
    <motion.circle
      cx="50"
      cy="40"
      r="8"
      fill="url(#immortalGrad)"
      opacity="0.9"
      animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
    {/* Ripple effects */}
    {[0, 1, 2].map((i) => (
      <motion.circle
        key={i}
        cx="50"
        cy="50"
        r="20"
        fill="none"
        stroke="url(#immortalGrad)"
        strokeWidth="1"
        opacity="0.4"
        animate={{ r: [20, 35, 20], opacity: [0.4, 0, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
      />
    ))}
  </motion.svg>
);

export const TransformationIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
  <motion.svg
    viewBox="0 0 100 100"
    className={`fill-current ${className}`}
  >
    <defs>
      <linearGradient id="transformGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00ff44" />
        <stop offset="100%" stopColor="#00aa22" />
      </linearGradient>
      <linearGradient id="transformGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#00ff44" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#00aa22" stopOpacity="0.1" />
      </linearGradient>
    </defs>
    {/* Outer rotating circle */}
    <motion.circle
      cx="50"
      cy="50"
      r="28"
      fill="url(#transformGrad2)"
      stroke="url(#transformGrad)"
      strokeWidth="2"
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
      style={{ transformOrigin: '50px 50px' }}
    />
    {/* Inner rotating diamond */}
    <motion.path
      d="M50 20 L70 50 L50 80 L30 50 Z"
      fill="url(#transformGrad)"
      opacity="0.7"
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
      style={{ transformOrigin: '50px 50px' }}
    />
    {/* Counter-rotating accent */}
    <motion.path
      d="M50 25 L65 50 L50 75 L35 50 Z"
      fill="none"
      stroke="url(#transformGrad)"
      strokeWidth="1.5"
      opacity="0.5"
      animate={{ rotate: [360, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      style={{ transformOrigin: '50px 50px' }}
    />
    {/* Center transformation nucleus */}
    <motion.circle
      cx="50"
      cy="50"
      r="6"
      fill="url(#transformGrad)"
      animate={{ scale: [1, 1.4, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
  </motion.svg>
);

export const DivineVisionIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
  <motion.svg
    viewBox="0 0 100 100"
    className={`fill-current ${className}`}
  >
    <defs>
      <linearGradient id="visionGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00ffff" />
        <stop offset="100%" stopColor="#0088ff" />
      </linearGradient>
      <radialGradient id="visionGlow">
        <stop offset="0%" stopColor="#00ffff" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#0088ff" stopOpacity="0" />
      </radialGradient>
    </defs>
    {/* Glow background */}
    <motion.circle cx="50" cy="50" r="35" fill="url(#visionGlow)" />
    {/* Outer iris */}
    <motion.circle
      cx="50"
      cy="50"
      r="26"
      fill="none"
      stroke="url(#visionGrad)"
      strokeWidth="2"
      animate={{ r: [26, 30, 26] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    {/* Middle iris layer */}
    <motion.circle
      cx="50"
      cy="50"
      r="18"
      fill="none"
      stroke="url(#visionGrad)"
      strokeWidth="1.5"
      opacity="0.7"
      animate={{ r: [18, 24, 18] }}
      transition={{ duration: 1.8, repeat: Infinity, delay: 0.1 }}
    />
    {/* Pupil */}
    <motion.circle
      cx="50"
      cy="50"
      r="8"
      fill="url(#visionGrad)"
      animate={{ scale: [1, 1.25, 1] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
    {/* Inner pupil highlight */}
    <motion.circle
      cx="50"
      cy="48"
      r="3"
      fill="white"
      opacity="0.6"
      animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
    {/* Vision rays */}
    {[0, 120, 240].map((angle) => (
      <motion.line
        key={angle}
        x1="50"
        y1="50"
        x2={50 + 25 * Math.cos((angle * Math.PI) / 180)}
        y2={50 + 25 * Math.sin((angle * Math.PI) / 180)}
        stroke="url(#visionGrad)"
        strokeWidth="1"
        opacity="0.4"
        animate={{ opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: angle / 120 * 0.3 }}
      />
    ))}
  </motion.svg>
);

export const HeavenSealIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
  <motion.svg
    viewBox="0 0 100 100"
    className={`fill-current ${className}`}
  >
    <defs>
      <linearGradient id="sealGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffff00" />
        <stop offset="100%" stopColor="#ffaa00" />
      </linearGradient>
      <radialGradient id="sealGlow">
        <stop offset="0%" stopColor="#ffff00" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#ffaa00" stopOpacity="0" />
      </radialGradient>
    </defs>
    {/* Glow background */}
    <motion.circle cx="50" cy="50" r="36" fill="url(#sealGlow)" />
    {/* Outer celestial circle */}
    <motion.circle
      cx="50"
      cy="50"
      r="30"
      fill="none"
      stroke="url(#sealGrad)"
      strokeWidth="1.5"
      opacity="0.6"
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
      style={{ transformOrigin: '50px 50px' }}
    />
    {/* Main star */}
    <motion.path
      d="M50 15 L58 38 L82 38 L63 55 L71 78 L50 62 L29 78 L37 55 L18 38 L42 38 Z"
      fill="url(#sealGrad)"
      animate={{ scale: [1, 1.1, 1], y: [0, -8, 0] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      style={{ transformOrigin: '50px 50px' }}
    />
    {/* Inner star accent */}
    <motion.path
      d="M50 22 L55 38 L70 38 L58 48 L63 65 L50 55 L37 65 L42 48 L30 38 L45 38 Z"
      fill="url(#sealGrad)"
      opacity="0.5"
      animate={{ scale: [1, 1.08, 1], rotate: [0, 10, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      style={{ transformOrigin: '50px 50px' }}
    />
    {/* Celestial glow points */}
    {[0, 90, 180, 270].map((angle) => (
      <motion.circle
        key={angle}
        cx={50 + 25 * Math.cos((angle * Math.PI) / 180)}
        cy={50 + 25 * Math.sin((angle * Math.PI) / 180)}
        r="3"
        fill="url(#sealGrad)"
        opacity="0.7"
        animate={{ scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: angle / 120 * 0.3 }}
      />
    ))}
  </motion.svg>
);
