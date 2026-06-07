import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface Spear {
  id: number;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  opacity: number;
}

export function SpearBackground() {
  const [spears, setSpears] = useState<Spear[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const generateSpears = () => {
      const newSpears: Spear[] = [];
      const count = 30;

      for (let i = 0; i < count; i++) {
        newSpears.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          rotation: Math.random() * 360,
          scale: 0.5 + Math.random() * 1.5,
          opacity: 0.03 + Math.random() * 0.07,
        });
      }
      setSpears(newSpears);
    };

    generateSpears();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) * 100, 
        y: (e.clientY / window.innerHeight) * 100 
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const getSpearOpacity = (spear: Spear) => {
    const distance = Math.sqrt(
      Math.pow(mousePosition.x - spear.x, 2) + 
      Math.pow(mousePosition.y - spear.y, 2)
    );

    if (distance < 15) {
      return Math.min(0.4, spear.opacity * 6);
    } else if (distance < 25) {
      return Math.min(0.2, spear.opacity * 3);
    }
    return spear.opacity;
  };

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Spears */}
      {spears.map((spear) => (
        <motion.div
          key={spear.id}
          className="absolute"
          style={{
            left: `${spear.x}%`,
            top: `${spear.y}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: getSpearOpacity(spear),
            scale: spear.scale,
          }}
          transition={{ 
            opacity: { duration: 0.3 },
            scale: { duration: 0.8, delay: spear.id * 0.02 }
          }}
        >
          <svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            style={{
              transform: `rotate(${spear.rotation}deg)`,
            }}
          >
            {/* Glass spear - similar to SINAN logo style */}
            <defs>
              <linearGradient id={`grad-${spear.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: 'rgba(255,255,255,0.1)', stopOpacity: 1 }} />
                <stop offset="50%" style={{ stopColor: 'rgba(255,255,255,0.3)', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: 'rgba(255,255,255,0.1)', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            
            {/* Spear shaft */}
            <line 
              x1="30" 
              y1="100" 
              x2="170" 
              y2="100" 
              stroke={`url(#grad-${spear.id})`}
              strokeWidth="2"
              opacity="0.6"
            />
            
            {/* Spear head - pointed triangle */}
            <path 
              d="M 170 100 L 190 95 L 200 100 L 190 105 Z" 
              fill={`url(#grad-${spear.id})`}
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="0.5"
            />
            
            {/* Spear details - glass effect lines */}
            <line 
              x1="30" 
              y1="98" 
              x2="170" 
              y2="98" 
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="0.5"
            />
            <line 
              x1="30" 
              y1="102" 
              x2="170" 
              y2="102" 
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="0.5"
            />

            {/* Geometric accent */}
            <circle cx="100" cy="100" r="3" fill="rgba(255,255,255,0.2)" />
            <circle cx="130" cy="100" r="2" fill="rgba(255,255,255,0.15)" />
            <circle cx="70" cy="100" r="2" fill="rgba(255,255,255,0.15)" />
          </svg>
        </motion.div>
      ))}

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30 pointer-events-none" />
    </div>
  );
}
