import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks';

interface Character {
  id: number;
  name: string;
  title: string;
  description: string;
  skills: string[];
}

const characters: Character[] = [
  {
    id: 1,
    name: 'Sun Wukong',
    title: 'The Monkey King',
    description: 'Born from stone with immense power, wielding the legendary staff across realms.',
    skills: ['Cloud Jump', 'Bone Cudgel', 'Immortal Body'],
  },
  {
    id: 2,
    name: 'Zhu Bajie',
    title: 'The Pig Warrior',
    description: 'A powerful demon turned ally, master of earth manipulation and combat prowess.',
    skills: ['Earth Spike', 'Demon Strength', 'Tusks Attack'],
  },
  {
    id: 3,
    name: 'Tang Sanzang',
    title: 'The Monk',
    description: 'A holy monk on a sacred mission, blessed with divine protection and wisdom.',
    skills: ['Divine Shield', 'Holy Light', 'Teleportation'],
  },
  {
    id: 4,
    name: 'Sha Wujing',
    title: 'The Orc General',
    description: 'A reformed demon warrior, master of the venom whip and ancient techniques.',
    skills: ['Venom Whip', 'Demon Rage', 'Sand Storm'],
  },
];

interface CharacterCardProps {
  character: Character;
  index: number;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isHovered) return;

    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const rotateX = (mouseY - centerY) / 10;
    const rotateY = -(mouseX - centerX) / 10;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <motion.div
      className="relative h-96"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className="w-full h-full cursor-pointer perspective"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: rotation.x,
          rotateY: rotation.y,
          transformStyle: 'preserve-3d',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <div className="card-container p-6 h-full flex flex-col justify-between relative overflow-hidden group">
          {/* Glow effect on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-gold-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
          />

          {/* Background pattern */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full blur-2xl transform translate-x-16 -translate-y-16 group-hover:translate-x-12 group-hover:-translate-y-12 transition-transform duration-300" />

          {/* Content */}
          <div className="relative z-10">
            <motion.h3
              className="font-cinzel text-2xl text-gold-400 mb-2"
              animate={isHovered ? { textShadow: '0 0 20px rgba(196, 155, 63, 0.8)' } : {}}
            >
              {character.name}
            </motion.h3>
            <p className="font-serif text-sm text-gold-300 mb-4">{character.title}</p>
            <p className="text-gold-200/80 leading-relaxed text-sm">{character.description}</p>
          </div>

          {/* Skills */}
          <motion.div
            className="relative z-10 space-y-2"
            animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0.7, y: 10 }}
          >
            <div className="flex flex-wrap gap-2">
              {character.skills.map((skill, i) => (
                <motion.span
                  key={i}
                  className="px-3 py-1 text-xs bg-gold-900/40 border border-gold-500/30 text-gold-300 rounded-full"
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(196, 155, 63, 0.3)' }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const Characters: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} id="characters" className="relative w-full section-padding bg-gradient-to-b from-obsidian-900 to-obsidian-800">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gold-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-900/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Meet the Heroes</h2>
          <p className="text-gold-300 text-lg max-w-2xl mx-auto">
            Experience the legendary journey with memorable characters. Hover to explore their abilities.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mt-6" />
        </motion.div>

        {/* Characters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {characters.map((character, index) => (
            <CharacterCard key={character.id} character={character} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
