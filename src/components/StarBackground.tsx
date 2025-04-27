
import React from 'react';

const StarBackground = () => {
  return (
    <div className="fixed inset-0 bg-[#0a0a0f] overflow-hidden">
      {/* Stars with reduced quantity for better performance */}
      {[...Array(100)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            width: Math.random() * 3 + 'px',
            height: Math.random() * 3 + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            animationDelay: Math.random() * 5 + 's',
            animationDuration: Math.random() * 3 + 2 + 's'
          }}
        />
      ))}
      
      {/* Galaxies */}
      {[...Array(3)].map((_, i) => (
        <div
          key={`galaxy-${i}`}
          className="absolute opacity-20"
          style={{
            width: `${Math.random() * 200 + 300}px`,
            height: `${Math.random() * 200 + 300}px`,
            left: `${Math.random() * 70 + 15}%`,
            top: `${Math.random() * 70 + 15}%`,
            background: `radial-gradient(ellipse at center, 
              rgba(255,192,203,0.2) 0%,
              rgba(147,112,219,0.15) 40%,
              transparent 70%)`,
            transform: `rotate(${Math.random() * 360}deg)`,
            filter: 'blur(8px)'
          }}
        />
      ))}

      {/* Subtle color overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          background: 'linear-gradient(45deg, #0a0a0f 85%, #2d1b46 92%, #451b3c 98%)'
        }}
      />
    </div>
  );
};

export default StarBackground;
