import { useState } from 'react';

interface Triangle {
  id: number;
  x: string;
  y: string;
  rotation: number;
  size: number;
  color: string;
}

export function HoverTriangles() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // مواضع استراتيجية على الصورة - موزعة بشكل طبيعي
  const triangles: Triangle[] = [
    { id: 1, x: '12%', y: '18%', rotation: 45, size: 100, color: 'rgba(138, 43, 226, 0.9)' },   // Purple/Violet - يسار فوق
    { id: 2, x: '28%', y: '35%', rotation: -30, size: 85, color: 'rgba(0, 191, 255, 0.9)' },    // Blue - وسط يسار
    { id: 3, x: '45%', y: '25%', rotation: 60, size: 95, color: 'rgba(255, 140, 0, 0.9)' },     // Orange - وسط فوق
    { id: 4, x: '62%', y: '40%', rotation: -45, size: 90, color: 'rgba(255, 255, 255, 0.9)' },  // White - وسط يمين
    { id: 5, x: '78%', y: '22%', rotation: 30, size: 85, color: 'rgba(138, 43, 226, 0.9)' },    // Purple/Violet - يمين فوق
    { id: 6, x: '88%', y: '50%', rotation: -60, size: 80, color: 'rgba(0, 191, 255, 0.9)' },    // Blue - يمين وسط
    { id: 7, x: '15%', y: '55%', rotation: 90, size: 75, color: 'rgba(255, 140, 0, 0.9)' },     // Orange - يسار تحت
    { id: 8, x: '35%', y: '68%', rotation: -20, size: 85, color: 'rgba(255, 255, 255, 0.9)' },  // White - وس�� تحت
    { id: 9, x: '52%', y: '72%', rotation: 45, size: 80, color: 'rgba(138, 43, 226, 0.9)' },    // Purple/Violet - وسط تحت
    { id: 10, x: '70%', y: '65%', rotation: -75, size: 90, color: 'rgba(0, 191, 255, 0.9)' },   // Blue - يمين تحت
    { id: 11, x: '20%', y: '82%', rotation: 15, size: 70, color: 'rgba(255, 140, 0, 0.9)' },    // Orange - يسار أسفل
    { id: 12, x: '85%', y: '78%', rotation: -40, size: 75, color: 'rgba(255, 255, 255, 0.9)' }, // White - يمين أسفل
  ];

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 6 }}>
      {triangles.map((triangle) => (
        <div
          key={triangle.id}
          className="absolute pointer-events-auto cursor-pointer transition-all duration-500"
          style={{
            left: triangle.x,
            top: triangle.y,
            transform: `translate(-50%, -50%) rotate(${triangle.rotation}deg)`,
            width: `${triangle.size}px`,
            height: `${triangle.size}px`,
          }}
          onMouseEnter={() => setHoveredId(triangle.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <svg
            width={triangle.size}
            height={triangle.size}
            viewBox="0 0 100 100"
            className="transition-all duration-500"
          >
            {/* Triangle shape - شفاف عادي، ملون عند hover */}
            <polygon
              points="50,10 90,80 10,80"
              fill={hoveredId === triangle.id ? triangle.color : 'transparent'}
              stroke="transparent"
              strokeWidth="0"
              className="transition-all duration-500"
              style={{
                filter: hoveredId === triangle.id 
                  ? `drop-shadow(0 0 25px ${triangle.color}) drop-shadow(0 0 40px ${triangle.color})` 
                  : 'none',
                opacity: hoveredId === triangle.id ? 1 : 0,
              }}
            />
            
            {/* Subtle outline when NOT hovering - للمساعدة في اكتشاف المثلثات */}
            <polygon
              points="50,10 90,80 10,80"
              fill="transparent"
              stroke="rgba(255, 255, 255, 0.05)"
              strokeWidth="1"
              className="transition-all duration-300"
              style={{
                opacity: hoveredId === triangle.id ? 0 : 1,
              }}
            />
          </svg>
        </div>
      ))}
    </div>
  );
}