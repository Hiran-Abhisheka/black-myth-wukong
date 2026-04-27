import React from 'react';
import { motion } from 'framer-motion'; console.log(motion);

interface Stat {
  name: string;
  value: number;
  description: string;
}

const stats: Stat[] = [
  {
    name: 'Strength',
    value: 95,
    description: 'Physical power and combat prowess',
  },
  {
    name: 'Speed',
    value: 98,
    description: 'Lightning-fast reflexes and movement',
  },
  {
    name: 'Agility',
    value: 97,
    description: 'Graceful evasion and acrobatics',
  },
  {
    name: 'Magic',
    value: 92,
    description: 'Mystical abilities and transformations',
  },
  {
    name: 'Endurance',
    value: 99,
    description: 'Immortal body and resilience',
  },
  {
    name: 'Wisdom',
    value: 85,
    description: 'Ancient knowledge and experience',
  },
];

interface Ability {
  name: string;
  description: string;
}

const abilities: Ability[] = [
  {
    name: 'Cloud Jump',
    description: 'Traverse vast distances using summoned clouds',
  },
  {
    name: 'Bone Cudgel',
    description: 'Wield the legendary staff with devastating power',
  },
  {
    name: 'Immortal Body',
    description: 'Enhanced healing and resistance to damage',
  },
  {
    name: 'Transformation',
    description: 'Shape-shift into multiple powerful forms',
  },
  {
    name: 'Divine Vision',
    description: 'See through illusions and detect enemies',
  },
  {
    name: 'Heaven Seal',
    description: 'Unleash celestial power in combat',
  },
];

export const Stats: React.FC = () => {
  return (
    <section
      id="stats"
      className="relative w-full min-h-screen section-padding bg-gradient-to-b from-obsidian-900 to-obsidian-800 pointer-events-auto"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gold-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-900/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Wukong's Power</h2>
          <p className="text-gold-300 text-lg max-w-2xl mx-auto">
            Master of combat with unmatched abilities and legendary powers
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mt-6" />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {stats.map((stat) => (
            <div
              key={stat.name}
              className="card-container p-8 relative overflow-hidden group"
            >
              {/* Background glow */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-gold-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />

              {/* Content */}
              <div className="relative z-10">
                <h3 className="font-cinzel text-xl text-gold-400 mb-4 group-hover:text-shadow-gold transition-all duration-300">
                  {stat.name}
                </h3>

                {/* Stat Bar */}
                <div className="mb-4">
                  <div className="relative h-2 bg-obsidian-800 rounded-full overflow-hidden border border-gold-500/30">
                    <div
                      className="h-full bg-gradient-to-r from-gold-400 to-gold-600 rounded-full transition-all duration-500"
                      style={{ width: `${stat.value}%` }}
                    />
                  </div>
                  <p className="text-gold-300 text-sm mt-2">{stat.value}%</p>
                </div>

                <p className="text-gold-200/70 text-sm">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Abilities Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="font-cinzel text-3xl text-gold-400 mb-4">Special Abilities</h3>
            <div className="w-16 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto" />
          </div>

          {/* Abilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {abilities.map((ability) => (
              <div
                key={ability.name}
                className="card-container p-6 flex items-start gap-4 group overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                {/* Background glow */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-gold-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />

                {/* Icon circle */}
                <div className="relative z-10 flex-shrink-0">
                  <div
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-obsidian-900 font-cinzel font-bold text-lg group-hover:scale-110 transition-transform duration-300"
                  >
                    {String.fromCharCode(9733)}
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex-1">
                  <h4 className="font-cinzel text-lg text-gold-400 mb-2">{ability.name}</h4>
                  <p className="text-gold-200/70 text-sm">{ability.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
