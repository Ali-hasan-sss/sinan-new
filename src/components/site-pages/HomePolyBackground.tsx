import { motion } from 'motion/react';
import Layer1_57_306 from '@/legacy-imports/Layer1-57-306';

export function HomePolyBackground() {
  return (
    <div 
      className="absolute left-0 right-0 pointer-events-none"
      style={{ 
        top: '83%',
        transform: 'translateY(-50%)',
        height: '30vh',
        opacity: 0.6,
        zIndex: 5
      }}
    >
      {/* Original gray background */}
      <div style={{ filter: 'grayscale(100%)' }}>
        <Layer1_57_306 />
      </div>
      
      {/* Purple glow on left triangle */}
      <motion.div
        className="absolute"
        style={{
          left: '15%',
          top: '30%',
          width: '150px',
          height: '150px',
        }}
        animate={{
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle, rgba(147, 51, 234, 1), transparent 65%)',
            mixBlendMode: 'screen',
            filter: 'blur(20px)'
          }}
        />
      </motion.div>

      {/* Orange glow on center triangle */}
      <motion.div
        className="absolute"
        style={{
          left: '45%',
          top: '40%',
          width: '130px',
          height: '130px',
        }}
        animate={{
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle, rgba(249, 115, 22, 1), transparent 65%)',
            mixBlendMode: 'screen',
            filter: 'blur(20px)'
          }}
        />
      </motion.div>

      {/* Blue glow on right triangle */}
      <motion.div
        className="absolute"
        style={{
          right: '18%',
          top: '25%',
          width: '160px',
          height: '160px',
        }}
        animate={{
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.6
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 1), transparent 65%)',
            mixBlendMode: 'screen',
            filter: 'blur(20px)'
          }}
        />
      </motion.div>
    </div>
  );
}