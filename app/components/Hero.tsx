// components/Hero.tsx
"use client";
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';

export default function Hero() {  const [text] = useTypewriter({
    words: [
      "Creative Developer",
      "Digital Architect", 
      "Innovation Enthusiast",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-bl from-black via-gray-950 to-gray-900 transition-opacity duration-300 ease-in-out px-4 sm:px-0">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <BackgroundCircles />
        <img
          src="/images/astro.png"
          alt="Hero Image"
          className="z-10 rounded-full w-24 h-24 sm:w-32 sm:h-32 md:w-64 md:h-64 object-cover border-2 sm:border-4 border-blue-500/20"
        />
      </div>      <div className="flex flex-col items-center text-center z-10 mt-32 sm:mt-[32rem] md:mt-[35rem]">
        <h2 className="text-xs sm:text-lg uppercase text-gray-400 pb-3 sm:pb-6 tracking-[8px] sm:tracking-[18px] font-extralight">
          Software Engineer
        </h2>
        <h1 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl uppercase text-white font-light leading-tight sm:leading-normal max-w-xs sm:max-w-none px-2 sm:px-0 tracking-wide">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 via-white to-blue-200 break-words font-extralight">{text}</span>
          <Cursor cursorColor="#3B82F6" />
        </h1>
      </div>
    </div>
  );
}
