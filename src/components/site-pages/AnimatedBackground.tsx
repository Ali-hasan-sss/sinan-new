import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface Arrow {
  id: number;
  x: number;
  y: number;
  rotation: number;
  color: string;
}

export function AnimatedBackground() {
  const [arrows, setArrows] = useState<Arrow[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Generate random arrows
    const generateArrows = () => {
      const newArrows: Arrow[] = [];
      const cols = 12;
      const rows = 8;
      const spacing = 100;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          newArrows.push({
            id: i * rows + j,
            x: i * spacing + Math.random() * 30,
            y: j * spacing + Math.random() * 30,
            rotation: Math.random() * 360,
            color: 'rgba(255, 255, 255, 0.1)',
          });
        }
      }
      setArrows(newArrows);
    };

    generateArrows();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const getArrowColor = (arrow: Arrow) => {
    const distance = Math.sqrt(
      Math.pow(mousePosition.x - arrow.x, 2) + 
      Math.pow(mousePosition.y - arrow.y, 2)
    );

    if (distance < 150) {
      return 'rgba(255, 255, 255, 0.6)';
    } else if (distance < 250) {
      return 'rgba(255, 255, 255, 0.3)';
    }
    return 'rgba(255, 255, 255, 0.08)';
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="10"
            refX="5"
            refY="5"
            orient="auto"
          >
            <polygon points="0 0, 10 5, 0 10" fill="currentColor" />
          </marker>
        </defs>
        {arrows.map((arrow) => (
          <motion.g
            key={arrow.id}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
            }}
            transition={{ duration: 0.5, delay: arrow.id * 0.01 }}
          >
            <motion.line
              x1={arrow.x}
              y1={arrow.y}
              x2={arrow.x + 40 * Math.cos((arrow.rotation * Math.PI) / 180)}
              y2={arrow.y + 40 * Math.sin((arrow.rotation * Math.PI) / 180)}
              stroke={getArrowColor(arrow)}
              strokeWidth="2"
              markerEnd="url(#arrowhead)"
              animate={{
                stroke: getArrowColor(arrow),
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.g>
        ))}
      </svg>

      {/* Animated circles that follow mouse */}
      <motion.div
        className="absolute w-64 h-64 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)',
          left: mousePosition.x - 128,
          top: mousePosition.y - 128,
        }}
        animate={{
          x: 0,
          y: 0,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
        }}
      />
    </div>
  );
}
