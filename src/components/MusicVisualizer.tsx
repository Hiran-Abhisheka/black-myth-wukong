import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface MusicVisualizerProps {
  audioRef: React.RefObject<HTMLAudioElement>;
}

export const MusicVisualizer: React.FC<MusicVisualizerProps> = ({ audioRef }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const dataArrayRef = useRef<Uint8Array | null>(null);
  const animationIdRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const audio = audioRef.current;

    if (!canvas || !audio) return;

    // Create audio context and analyser on first user interaction
    const setupAudioContext = () => {
      if (analyserRef.current) return; // Already initialized

      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const analyser = audioContext.createAnalyser();
      analyser.fftSize = 256;

      const source = audioContext.createMediaElementAudioSource(audio);
      source.connect(analyser);
      analyser.connect(audioContext.destination);

      analyserRef.current = analyser;
      dataArrayRef.current = new Uint8Array(analyser.frequencyBinCount);

      draw();
    };

    // Trigger setup on user interaction
    document.addEventListener('click', setupAudioContext);

    const draw = () => {
      const canvas = canvasRef.current;
      if (!canvas || !analyserRef.current || !dataArrayRef.current) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      analyserRef.current.getByteFrequencyData(dataArrayRef.current);

      // Clear canvas
      ctx.fillStyle = 'rgba(26, 22, 19, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw bars
      const barWidth = (canvas.width / dataArrayRef.current.length) * 2.5;
      let x = 0;

      for (let i = 0; i < dataArrayRef.current.length; i++) {
        const barHeight = (dataArrayRef.current[i] / 255) * canvas.height;

        // Gradient color
        const hue = (i / dataArrayRef.current.length) * 60 + 40; // Gold to orange
        ctx.fillStyle = `hsl(${hue}, 100%, 50%)`;
        ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);

        x += barWidth + 1;
      }

      animationIdRef.current = requestAnimationFrame(draw);
    };

    return () => {
      document.removeEventListener('click', setupAudioContext);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [audioRef]);

  return (
    <motion.div
      className="fixed top-24 left-6 z-40 rounded-lg overflow-hidden border-2 border-gold-400/50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <canvas
        ref={canvasRef}
        width={200}
        height={100}
        className="block bg-obsidian-900/30"
      />
    </motion.div>
  );
};
