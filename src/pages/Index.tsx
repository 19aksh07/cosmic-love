
import React, { useEffect, useRef, useState } from 'react';
import StarBackground from '@/components/StarBackground';
import LoveNote from '@/components/LoveNote';
import CelestialObjects from '@/components/CelestialObjects';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [page, setPage] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.1;
      
      const handleInteraction = () => {
        audio.play();
        document.removeEventListener('click', handleInteraction);
      };
      
      document.addEventListener('click', handleInteraction);
      return () => document.removeEventListener('click', handleInteraction);
    }
  }, []);

  const handleContinue = () => {
    // First cycle through messages
    if (messageIndex < pages[page].messages.length - 1) {
      setMessageIndex(prev => prev + 1);
    } else {
      // Then move to next page when all messages are shown
      setPage(prev => (prev + 1) % pages.length);
      setMessageIndex(0);
    }
  };

  const pages = [
    {
      title: "For You, My Love",
      messages: [
        "In the vast expanse of the cosmos,\nmy heart found its home in you.\nEvery star in the sky reminds me\nof the light you bring to my life.",
        "Like celestial bodies in perfect orbit,\nour love keeps us in perfect harmony.\nYou are my universe, my everything,\nmy eternal starlight."
      ]
    },
    {
      title: "Our Cosmic Dance",
      messages: [
        "As galaxies spiral through space,\nour souls intertwine in an eternal dance.\nIn this infinite universe,\nI found my perfect match.",
        "Together we create our own constellation,\na story written in the stars.\nForever bound by love's gravity,\nshining brighter than any star."
      ]
    }
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4">
      <StarBackground />
      <CelestialObjects />
      <audio
        ref={audioRef}
        loop
        src="https://cdn.lovable.dev/music/space-ambient.mp3"
      />
      <div className="relative z-10 w-full max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-light text-center mb-12 tracking-wider bg-clip-text text-transparent bg-gradient-to-b from-white/90 via-white/80 to-purple-300/70"
            style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.2)' }}>
          {pages[page].title}
        </h1>
        <LoveNote message={pages[page].messages[messageIndex]} />
        
        <div className="mt-8 flex justify-center">
          <Button
            onClick={handleContinue}
            className="bg-transparent border border-purple-500/20 hover:bg-purple-500/10 text-white/90 group"
          >
            Continue
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
