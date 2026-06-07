import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

interface Polygon {
  points: string;
  color: string;
  strokeColor: string;
}

export function PolygonBackground() {
  const [polygons, setPolygons] = useState<Polygon[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const generatePolygons = () => {
      const newPolygons: Polygon[] = [];
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      // Create larger triangles
      const cols = 8;
      const rows = 5;
      const cellWidth = width / cols;
      const cellHeight = height / rows;

      const accentColors = [
        'rgb(45, 85, 120)',  // dark blue
        'rgb(65, 75, 95)',   // dark gray blue
        'rgb(80, 100, 75)',  // dark olive
        'rgb(70, 65, 95)',   // dark purple
        'rgb(40, 45, 50)',   // very dark gray
      ];

      const baseColors = [
        'rgb(25, 28, 32)',
        'rgb(30, 33, 38)',
        'rgb(35, 38, 42)',
        'rgb(28, 30, 35)',
        'rgb(32, 35, 40)',
      ];

      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const x = i * cellWidth;
          const y = j * cellHeight;
          const randomOffset = () => (Math.random() - 0.5) * 80;

          // Create larger triangles
          if (i < cols && j < rows) {
            // Top-left to bottom-right diagonal
            const points1 = `${x + randomOffset()},${y + randomOffset()} ${x + cellWidth + randomOffset()},${y + randomOffset()} ${x + randomOffset()},${y + cellHeight + randomOffset()}`;
            
            // Bottom-left to top-right diagonal
            const points2 = `${x + cellWidth + randomOffset()},${y + randomOffset()} ${x + cellWidth + randomOffset()},${y + cellHeight + randomOffset()} ${x + randomOffset()},${y + cellHeight + randomOffset()}`;

            // Randomly assign accent colors (10% chance)
            const useAccent1 = Math.random() < 0.1;
            const useAccent2 = Math.random() < 0.1;

            newPolygons.push({
              points: points1,
              color: useAccent1 
                ? accentColors[Math.floor(Math.random() * accentColors.length)]
                : baseColors[Math.floor(Math.random() * baseColors.length)],
              strokeColor: 'rgba(60, 70, 80, 0.4)',
            });

            newPolygons.push({
              points: points2,
              color: useAccent2
                ? accentColors[Math.floor(Math.random() * accentColors.length)]
                : baseColors[Math.floor(Math.random() * baseColors.length)],
              strokeColor: 'rgba(60, 70, 80, 0.4)',
            });
          }
        }
      }

      setPolygons(newPolygons);
    };

    generatePolygons();
    window.addEventListener('resize', generatePolygons);
    return () => window.removeEventListener('resize', generatePolygons);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const getPolygonFill = (polygon: Polygon) => {
    if (!polygon || !polygon.color) return 'rgb(30, 33, 38)';
    if (polygons.length === 0) return polygon.color;
    
    const coords = polygon.points.split(' ').map(p => {
      const [px, py] = p.split(',').map(Number);
      return { x: px, y: py };
    });
    
    const centerX = (coords[0].x + coords[1].x + coords[2].x) / 3;
    const centerY = (coords[0].y + coords[1].y + coords[2].y) / 3;
    
    const distance = Math.sqrt(
      Math.pow(mousePosition.x - centerX, 2) +
      Math.pow(mousePosition.y - centerY, 2)
    );

    if (distance < 150) {
      // Lighten the color on hover
      const rgb = polygon.color.match(/\d+/g);
      if (rgb && rgb.length >= 3) {
        const r = Math.min(255, parseInt(rgb[0]) + 40);
        const g = Math.min(255, parseInt(rgb[1]) + 40);
        const b = Math.min(255, parseInt(rgb[2]) + 40);
        return `rgb(${r}, ${g}, ${b})`;
      }
    }
    
    return polygon.color;
  };

  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg
        ref={svgRef}
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        style={{ background: '#000' }}
      >
        {/* Polygons */}
        {polygons.map((polygon, index) => (
          <motion.polygon
            key={index}
            points={polygon.points}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              fill: getPolygonFill(polygon),
            }}
            transition={{
              opacity: { duration: 0.6, delay: index * 0.005 },
              fill: { duration: 0.3 }
            }}
            stroke={polygon.strokeColor}
            strokeWidth="1"
          />
        ))}
      </svg>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none" />
    </div>
  );
}