
import { useEffect, useState } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  animationDelay: number;
}

const FloatingStars = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = [];
      for (let i = 0; i < 50; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          animationDelay: Math.random() * 8,
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-gradient-to-br from-primary to-accent floating-star"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDelay: `${star.animationDelay}s`,
            boxShadow: `0 0 ${star.size * 2}px hsl(var(--primary) / 0.5)`,
          }}
        />
      ))}
      
      {/* Additional glow elements */}
      <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-accent rounded-full animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-primary rounded-full animate-pulse-glow" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-accent rounded-full animate-pulse-glow" style={{ animationDelay: '5s' }}></div>
      <div className="absolute bottom-1/4 left-2/3 w-2.5 h-2.5 bg-primary rounded-full animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};

export default FloatingStars;
