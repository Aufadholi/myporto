// Hero.tsx
"use client";
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import { useRef } from 'react';
import Header from './Header';

export default function Hero() {
  const [text] = useTypewriter({
    words: [
      "<Someone who loves to explore/>",
      "<A passionate software engineer/>",
      "<A lifelong learner/>",
    ],
    loop: true,
  });

  const pageRef = useRef<HTMLDivElement>(null);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (pageRef.current) {
      pageRef.current.style.opacity = '0';
      setTimeout(() => {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
          setTimeout(() => {
            if (pageRef.current) {
              pageRef.current.style.opacity = '1';
            }
          }, 300);
        }
      }, 300);
    }
  };

  return (
    <>
      <Header handleLinkClick={handleLinkClick} />
      <div
        ref={pageRef}
        className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-bl from-black via-gray-950 to-gray-900 transition-opacity duration-300 ease-in-out"
      >
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <BackgroundCircles />
          <img
            src="/images/astro.png"
            alt="Hero Image"
            className="z-10 rounded-full w-32 h-32 sm:w-64 sm:h-64 object-cover border-4 border-blue-500/20"
          />
        </div>

        <h2 className="mt-[32rem] sm:mt-[35rem] text-md uppercase text-gray-400 pb-6 tracking-[15px] z-10">
          Software Engineer
        </h2>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl uppercase text-white font-semibold z-10">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 to-white">{text}</span>
          <Cursor cursorColor="#3B82F6" />
        </h1>
      </div>
    </>
  );
}
