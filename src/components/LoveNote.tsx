
import React, { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

interface LoveNoteProps {
  message: string;
}

const LoveNote = ({ message }: LoveNoteProps) => {
  const [visible, setVisible] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setVisible(false);
    const timer = setTimeout(() => setVisible(true), 1000);
    return () => clearTimeout(timer);
  }, [message]);

  const handleClick = () => {
    toast({
      description: "💫 A whisper from the stars just for you...",
    });
  };

  return (
    <div 
      className={`relative z-10 p-8 rounded-lg backdrop-blur-sm bg-space-deep/30 border border-space-purple/20 
                  max-w-md mx-auto text-center animate-float cursor-pointer hover:bg-space-deep/40 transition-colors
                  ${visible ? 'animate-stardust' : 'opacity-0'}`}
      onClick={handleClick}
    >
      {message.split('\n').map((line, i) => (
        <p 
          key={i} 
          className="text-space-gold mb-2 text-lg font-light tracking-wide"
          style={{ 
            animationDelay: `${i * 0.5 + 1}s`,
            textShadow: '0 0 10px rgba(255, 250, 209, 0.5)'
          }}
        >
          {line}
        </p>
      ))}
    </div>
  );
};

export default LoveNote;
