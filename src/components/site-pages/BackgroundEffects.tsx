import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export function BackgroundEffects() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; duration: number; delay: number }>>([]);

  useEffect(() => {
    // Generate floating particles
    const particleArray = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: 10 + Math.random() * 20,
      delay: Math.random() * 5,
    }));
    setParticles(particleArray);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 2 }}>
      
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 100, 0, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 100, 0, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Scanning Lines */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(255, 100, 0, 0.05) 50%, transparent 100%)',
          height: '100px',
        }}
        animate={{
          y: ['-100px', 'calc(100vh + 100px)'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Horizontal Scanning Line */}
      <motion.div
        className="absolute left-0 right-0"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(0, 200, 255, 0.1) 50%, transparent 100%)',
          height: '2px',
          boxShadow: '0 0 20px rgba(0, 200, 255, 0.5)',
        }}
        animate={{
          y: ['0vh', '100vh'],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Radar Pulse - Top Right */}
      <div className="absolute top-10 right-10 w-64 h-64">
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-orange-500"
          style={{
            boxShadow: '0 0 30px rgba(255, 100, 0, 0.5)',
          }}
          animate={{
            scale: [0, 2.5],
            opacity: [0.8, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        />
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-cyan-500"
          style={{
            boxShadow: '0 0 30px rgba(0, 200, 255, 0.5)',
          }}
          animate={{
            scale: [0, 2.5],
            opacity: [0.8, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeOut',
            delay: 1.5,
          }}
        />
      </div>

      {/* Radar Pulse - Bottom Left */}
      <div className="absolute bottom-10 left-10 w-64 h-64">
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-purple-500"
          style={{
            boxShadow: '0 0 30px rgba(150, 0, 255, 0.5)',
          }}
          animate={{
            scale: [0, 2.5],
            opacity: [0.8, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeOut',
            delay: 0.75,
          }}
        />
      </div>

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-orange-500 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            boxShadow: '0 0 4px rgba(255, 100, 0, 0.8)',
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Data Stream Particles */}
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={`stream-${i}`}
          className="absolute w-0.5 h-8"
          style={{
            left: `${(i * 10) + 5}%`,
            background: 'linear-gradient(180deg, transparent, rgba(0, 200, 255, 0.8), transparent)',
            boxShadow: '0 0 6px rgba(0, 200, 255, 0.6)',
          }}
          animate={{
            y: ['-50px', 'calc(100vh + 50px)'],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: i * 0.5,
            ease: 'linear',
          }}
        />
      ))}

      {/* Holographic Glitch Effect */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(255, 0, 255, 0.02) 50%, transparent 100%)',
        }}
        animate={{
          x: ['-100%', '200%'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Chromatic Aberration Effect */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(255, 0, 0, 0.1), transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(0, 255, 255, 0.1), transparent 50%)',
            'radial-gradient(circle at 50% 20%, rgba(0, 255, 0, 0.1), transparent 50%)',
            'radial-gradient(circle at 50% 80%, rgba(255, 0, 255, 0.1), transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(255, 0, 0, 0.1), transparent 50%)',
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Corner Scanners */}
      <motion.div
        className="absolute top-0 left-0 w-32 h-32"
        style={{
          borderTop: '2px solid rgba(255, 100, 0, 0.5)',
          borderLeft: '2px solid rgba(255, 100, 0, 0.5)',
          boxShadow: '0 0 20px rgba(255, 100, 0, 0.3)',
        }}
        animate={{
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute top-0 right-0 w-32 h-32"
        style={{
          borderTop: '2px solid rgba(0, 200, 255, 0.5)',
          borderRight: '2px solid rgba(0, 200, 255, 0.5)',
          boxShadow: '0 0 20px rgba(0, 200, 255, 0.3)',
        }}
        animate={{
          opacity: [1, 0.3, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute bottom-0 left-0 w-32 h-32"
        style={{
          borderBottom: '2px solid rgba(150, 0, 255, 0.5)',
          borderLeft: '2px solid rgba(150, 0, 255, 0.5)',
          boxShadow: '0 0 20px rgba(150, 0, 255, 0.3)',
        }}
        animate={{
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      <motion.div
        className="absolute bottom-0 right-0 w-32 h-32"
        style={{
          borderBottom: '2px solid rgba(255, 100, 0, 0.5)',
          borderRight: '2px solid rgba(255, 100, 0, 0.5)',
          boxShadow: '0 0 20px rgba(255, 100, 0, 0.3)',
        }}
        animate={{
          opacity: [1, 0.3, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      {/* Digital Noise Effect */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
        animate={{
          opacity: [0.02, 0.08, 0.02],
        }}
        transition={{
          duration: 0.15,
          repeat: Infinity,
        }}
      />
    </div>
  );
}
