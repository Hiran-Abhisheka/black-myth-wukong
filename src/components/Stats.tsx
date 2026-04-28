import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks';
import {
  StrengthIcon,
  SpeedIcon,
  AgilityIcon,
  MagicIcon,
  EnduranceIcon,
  WisdomIcon,
  CloudJumpIcon,
  BoneCudgelIcon,
  ImmortalBodyIcon,
  TransformationIcon,
  DivineVisionIcon,
  HeavenSealIcon,
} from './AnimatedIcons';

interface Stat {
  name: string;
  value: number;
  description: string;
  Icon: React.FC<{ className?: string }>;
}

const stats: Stat[] = [
  {
    name: 'Strength',
    value: 95,
    description: 'Physical power and combat prowess',
    Icon: StrengthIcon,
  },
  {
    name: 'Speed',
    value: 98,
    description: 'Lightning-fast reflexes and movement',
    Icon: SpeedIcon,
  },
  {
    name: 'Agility',
    value: 97,
    description: 'Graceful evasion and acrobatics',
    Icon: AgilityIcon,
  },
  {
    name: 'Magic',
    value: 92,
    description: 'Mystical abilities and transformations',
    Icon: MagicIcon,
  },
  {
    name: 'Endurance',
    value: 99,
    description: 'Immortal body and resilience',
    Icon: EnduranceIcon,
  },
  {
    name: 'Wisdom',
    value: 85,
    description: 'Ancient knowledge and experience',
    Icon: WisdomIcon,
  },
];

interface Ability {
  name: string;
  description: string;
  Icon: React.FC<{ className?: string }>;
}

const abilities: Ability[] = [
  {
    name: 'Cloud Jump',
    description: 'Traverse vast distances using summoned clouds',
    Icon: CloudJumpIcon,
  },
  {
    name: 'Bone Cudgel',
    description: 'Wield the legendary staff with devastating power',
    Icon: BoneCudgelIcon,
  },
  {
    name: 'Immortal Body',
    description: 'Enhanced healing and resistance to damage',
    Icon: ImmortalBodyIcon,
  },
  {
    name: 'Transformation',
    description: 'Shape-shift into multiple powerful forms',
    Icon: TransformationIcon,
  },
  {
    name: 'Divine Vision',
    description: 'See through illusions and detect enemies',
    Icon: DivineVisionIcon,
  },
  {
    name: 'Heaven Seal',
    description: 'Unleash celestial power in combat',
    Icon: HeavenSealIcon,
  },
];

export const Stats: React.FC = () => {
  const [containerRef] = useInView({ threshold: 0.2, triggerOnce: false });

  return (
    <motion.section
      ref={containerRef}
      id="stats"
      className="relative w-full min-h-screen section-padding bg-obsidian-900 pointer-events-auto overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* Animated Decorative background - Minimal */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-gold-900/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-20 h-full">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.h2 
            className="section-title bg-clip-text text-transparent bg-gradient-to-r from-gold-400 to-gold-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Wukong's Power
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mt-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
            style={{ originX: 0.5 }}
          />
        </motion.div>

        {/* Main Content - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Armor Image */}
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="relative w-full max-w-2xl">
              <motion.img
                src="/newfolder/Black-Myth-Wukong-Game-Armor-Set-PNG.png"
                alt="Wukong Armor"
                className="w-full h-auto drop-shadow-2xl filter brightness-110"
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </div>
          </motion.div>

          {/* Right Side - Powers List */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.name}
                className="group relative"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                {/* Power Item */}
                <div className="flex gap-6 items-start">
                  {/* Decorative dots and lines */}
                  <motion.svg
                    className="flex-shrink-0 w-16 h-16"
                    viewBox="0 0 64 64"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                    viewport={{ once: false, amount: 0.3 }}
                  >
                    {/* Outer circle of dots */}
                    {[0, 1, 2, 3, 4].map((i) => (
                      <motion.circle
                        key={`dot-${i}`}
                        cx={32 + 20 * Math.cos((i * 72 * Math.PI) / 180)}
                        cy={32 + 20 * Math.sin((i * 72 * Math.PI) / 180)}
                        r="2"
                        fill="#d4af37"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                      />
                    ))}
                    
                    {/* Center dot */}
                    <motion.circle
                      cx="32"
                      cy="32"
                      r="3"
                      fill="#ffd700"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    
                    {/* Connecting lines */}
                    {[0, 1, 2, 3, 4].map((i) => (
                      <motion.line
                        key={`line-${i}`}
                        x1="32"
                        y1="32"
                        x2={32 + 20 * Math.cos((i * 72 * Math.PI) / 180)}
                        y2={32 + 20 * Math.sin((i * 72 * Math.PI) / 180)}
                        stroke="#d4af37"
                        strokeWidth="1"
                        opacity="0.4"
                        animate={{ opacity: [0.2, 0.6, 0.2] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.15 }}
                      />
                    ))}
                  </motion.svg>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <motion.h3 
                        className="font-cinzel text-xl text-gold-400 group-hover:text-gold-300 transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        {stat.name}
                      </motion.h3>
                      <motion.span 
                        className="text-gold-300 font-bold text-lg"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      >
                        {stat.value}%
                      </motion.span>
                    </div>

                    {/* Stat Bar */}
                    <div className="mb-3 h-2 bg-obsidian-800 rounded-full overflow-hidden border border-gold-500/30">
                      <motion.div
                        className="h-full bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${stat.value}%` }}
                        transition={{ duration: 1.2, delay: 0.3 + index * 0.1, ease: 'easeOut' }}
                        viewport={{ once: false, amount: 0.3 }}
                      />
                    </div>

                    {/* Description */}
                    <motion.p 
                      className="text-gold-200/70 text-sm leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: false, amount: 0.3 }}
                    >
                      {stat.description}
                    </motion.p>
                  </div>
                </div>

                {/* Hover line effect */}
                <motion.div
                  className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b from-gold-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Abilities Section */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h3 className="font-cinzel text-4xl bg-clip-text text-transparent bg-gradient-to-r from-gold-400 to-gold-300 mb-4">
              Special Abilities
            </h3>
            <motion.div 
              className="w-16 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              style={{ originX: 0.5 }}
            />
          </motion.div>

          {/* Abilities List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {abilities.map((ability, index) => (
              <motion.div
                key={ability.name}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.08 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <div className="flex gap-5 items-start p-6 rounded-lg border border-gold-500/20 bg-obsidian-900/50 group-hover:bg-obsidian-900/80 group-hover:border-gold-500/50 transition-all duration-300">
                  {/* Decorative dots and lines icon */}
                  <motion.svg
                    className="flex-shrink-0 w-14 h-14"
                    viewBox="0 0 56 56"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
                    viewport={{ once: false, amount: 0.3 }}
                  >
                    {/* Corner dots */}
                    <motion.circle cx="8" cy="8" r="1.5" fill="#d4af37" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity }} />
                    <motion.circle cx="48" cy="8" r="1.5" fill="#d4af37" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }} />
                    <motion.circle cx="48" cy="48" r="1.5" fill="#d4af37" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity, delay: 0.6 }} />
                    <motion.circle cx="8" cy="48" r="1.5" fill="#d4af37" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity, delay: 0.9 }} />
                    
                    {/* Corner lines */}
                    <line x1="8" y1="8" x2="16" y2="8" stroke="#d4af37" strokeWidth="1" opacity="0.5" />
                    <line x1="8" y1="8" x2="8" y2="16" stroke="#d4af37" strokeWidth="1" opacity="0.5" />
                    <line x1="48" y1="8" x2="40" y2="8" stroke="#d4af37" strokeWidth="1" opacity="0.5" />
                    <line x1="48" y1="8" x2="48" y2="16" stroke="#d4af37" strokeWidth="1" opacity="0.5" />
                    
                    {/* Center element */}
                    <motion.circle cx="28" cy="28" r="2" fill="#ffd700" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
                  </motion.svg>

                  {/* Content */}
                  <div className="flex-1">
                    <motion.h4 
                      className="font-cinzel text-lg text-gold-400 mb-2 group-hover:text-gold-300 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {ability.name}
                    </motion.h4>
                    <motion.p 
                      className="text-gold-200/70 text-sm leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 + index * 0.08 }}
                      viewport={{ once: false, amount: 0.3 }}
                    >
                      {ability.description}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
