
import React from 'react';

const CelestialObjects = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Periodic Comets */}
      {[...Array(5)].map((_, i) => (
        <div
          key={`comet-${i}`}
          className="absolute h-[2px] bg-gradient-to-r from-transparent via-white/50 to-white"
          style={{
            width: '150px',
            right: '-150px',
            top: `${15 + i * 20}%`,
            transform: 'rotate(15deg)',
            animation: `comet-left-to-right ${8 + i * 3}s linear infinite`,
            animationDelay: `${i * 2}s`,
            boxShadow: '0 0 4px rgba(255,255,255,0.8)'
          }}
        />
      ))}

      {/* Twinkling Sun */}
      <div className="absolute animate-pulse" 
        style={{
          width: '80px',
          height: '80px',
          top: '15%',
          right: '15%',
        }}>
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-200 via-amber-300 to-orange-500"
          style={{
            boxShadow: '0 0 40px rgba(251, 146, 60, 0.7), 0 0 70px rgba(251, 146, 60, 0.5), 0 0 100px rgba(251, 146, 60, 0.3)',
            animation: 'twinkle 4s ease-in-out infinite'
          }}
        />
        {/* Sun Rays */}
        {[...Array(12)].map((_, i) => (
          <div
            key={`ray-${i}`}
            className="absolute bg-gradient-to-r from-amber-300/60 to-transparent"
            style={{
              width: '60px',
              height: '2px',
              left: '50%',
              top: '50%',
              transformOrigin: 'left center',
              transform: `translateX(20px) translateY(-1px) rotate(${i * 30}deg)`,
              animation: `ray-pulse ${3 + i % 3}s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`
            }}
          />
        ))}
      </div>

      {/* Spherical Planets */}
      {[...Array(3)].map((_, i) => {
        const size = Math.random() * 40 + 30;
        const colors = [
          'from-rose-300 via-purple-500 to-indigo-800',
          'from-blue-300 via-cyan-500 to-teal-800',
          'from-amber-300 via-orange-500 to-red-800'
        ];
        
        return (
          <div
            key={`planet-${i}`}
            className={`absolute rounded-full animate-float bg-gradient-to-br ${colors[i]}`}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${Math.random() * 70 + 15}%`,
              top: `${Math.random() * 70 + 15}%`,
              boxShadow: 'inset -4px -4px 8px rgba(0,0,0,0.5), 0 0 20px rgba(255,255,255,0.2)',
              animationDelay: `${i * 2}s`,
              animationDuration: `${15 + i * 2}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          >
            {/* Planet Surface Detail */}
            <div
              className="w-full h-full rounded-full opacity-30"
              style={{
                background: 'radial-gradient(circle at 30% 30%, transparent 0%, rgba(0,0,0,0.5) 100%)',
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CelestialObjects;
