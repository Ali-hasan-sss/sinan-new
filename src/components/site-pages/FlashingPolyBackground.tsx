import { useEffect, useRef } from 'react';

export function FlashingPolyBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    interface Triangle {
      x1: number;
      y1: number;
      x2: number;
      y2: number;
      x3: number;
      y3: number;
      color: string;
      opacity: number;
      targetOpacity: number;
      flashSpeed: number;
    }

    const colors = [
      'rgba(138, 43, 226, 1)',   // Purple/Violet
      'rgba(0, 191, 255, 1)',     // Blue
      'rgba(255, 140, 0, 1)',     // Orange
      'rgba(255, 255, 255, 1)',   // White
    ];

    const triangles: Triangle[] = [];

    // Create 4 small triangles in different random positions
    for (let i = 0; i < 4; i++) {
      const x1 = Math.random() * canvas.width;
      const y1 = Math.random() * canvas.height;
      const size = 40 + Math.random() * 60; // Small triangles like in the image
      
      // Create random triangle shape
      const angle1 = Math.random() * Math.PI * 2;
      const angle2 = angle1 + (Math.PI * 2 / 3) + (Math.random() - 0.5) * 1;
      const angle3 = angle2 + (Math.PI * 2 / 3) + (Math.random() - 0.5) * 1;

      const x2 = x1 + Math.cos(angle1) * size;
      const y2 = y1 + Math.sin(angle1) * size;
      const x3 = x1 + Math.cos(angle3) * size;
      const y3 = y1 + Math.sin(angle3) * size;

      triangles.push({
        x1, y1, x2, y2, x3, y3,
        color: colors[i],
        opacity: 0.2,
        targetOpacity: 0.9,
        flashSpeed: 0.008 + Math.random() * 0.012
      });
    }

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      triangles.forEach((triangle) => {
        // Smooth flashing effect
        if (Math.abs(triangle.opacity - triangle.targetOpacity) < 0.05) {
          triangle.targetOpacity = Math.random() > 0.5 ? 0.15 : 0.9;
        }
        
        if (triangle.opacity < triangle.targetOpacity) {
          triangle.opacity += triangle.flashSpeed;
        } else {
          triangle.opacity -= triangle.flashSpeed;
        }

        // Clamp opacity
        triangle.opacity = Math.max(0.1, Math.min(0.95, triangle.opacity));

        // Extract RGB from color string
        const colorMatch = triangle.color.match(/rgba\((\d+),\s*(\d+),\s*(\d+)/);
        if (colorMatch) {
          const [, r, g, b] = colorMatch;
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${triangle.opacity})`;
        }

        ctx.beginPath();
        ctx.moveTo(triangle.x1, triangle.y1);
        ctx.lineTo(triangle.x2, triangle.y2);
        ctx.lineTo(triangle.x3, triangle.y3);
        ctx.closePath();
        ctx.fill();

        // Add subtle glow
        ctx.shadowBlur = 15;
        ctx.shadowColor = triangle.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ mixBlendMode: 'lighten', zIndex: 5 }}
    />
  );
}