"use client";
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const [text] = useTypewriter({
    words: [
      "<Someone who loves to explore/>",
      "<A passionate software engineer/>",
      "<A lifelong learner/>",
    ],
    loop: true,
  });

  const buttonContainerRef = useRef<HTMLDivElement>(null);
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const debounce = (func: () => void, delay: number) => {
      return () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(func, delay);
      };
    };

    const handleScroll = () => {
      if (!buttonContainerRef.current) return;

      const buttonRect = buttonContainerRef.current.getBoundingClientRect();
      const isBelowViewport = buttonRect.top < 0;

      if (isBelowViewport) {
        buttonContainerRef.current.classList.add(
          'fixed',
          'top-0',
          'left-0',
          'right-0',
          'bg-gray-900/80',
          'backdrop-blur-sm',
          'shadow-md',
          'py-4'
        );
      } else {
        buttonContainerRef.current.classList.remove(
          'fixed',
          'top-0',
          'left-0',
          'right-0',
          'bg-gray-900/80',
          'backdrop-blur-sm',
          'shadow-md',
          'py-4'
        );
      }
    };

    const debouncedScroll = debounce(handleScroll, 50);

    window.addEventListener('scroll', debouncedScroll);
    return () => {
      window.removeEventListener('scroll', debouncedScroll);
      clearTimeout(timeoutId);
    };
  }, []);

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
          }, 300); // Match fade-in duration
        }
      }, 300); // Match fade-out duration
    }
  };

  return (
    <div
      ref={pageRef}
      className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black to-gray-900 transition-opacity duration-300 ease-in-out"
    >
      {/* Lingkaran dan gambar di tengah */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <BackgroundCircles />
        <img
          src="/images/astro.png"
          alt="Hero Image"
          className="z-10 rounded-full w-32 h-32 sm:w-64 sm:h-64 object-cover border-4 border-blue-500/20"
        />
      </div>

      {/* Konten lain di bawah */}
      <h2 className="mt-[32rem] sm:mt-[35rem] text-md uppercase text-gray-400 pb-6 tracking-[15px] z-10">
        Software Engineer
      </h2>
      <h1 className="text-4xl sm:text-5xl lg:text-6xl uppercase text-white font-semibold z-10">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 to-white">{text}</span>
        <Cursor cursorColor="#3B82F6" />
      </h1>

      {/* Button Container */}
      <div
        ref={buttonContainerRef}
        className="gap-6 mt-10 flex flex-row items-center justify-center z-10 text-white transition-all duration-300"
      >
        <Link href="#about" onClick={(e) => handleLinkClick(e, '#about')}>
          <button className="px-6 py-2 uppercase font-semibold rounded-full border border-transparent hover:border-amber-200 bg-gray-800/50 hover:bg-gray-700/50 hover:scale-105 hover:shadow-lg transform transition-all duration-500 ease-out">
            About
          </button>
        </Link>
        <Link href="#skills" onClick={(e) => handleLinkClick(e, '#skills')}>
          <button className="px-6 py-2 uppercase font-semibold rounded-full border border-transparent hover:border-amber-200 bg-gray-800/50 hover:bg-gray-700/50 hover:scale-105 hover:shadow-lg transform transition-all duration-500 ease-out">
            Skills
          </button>
        </Link>
        <Link href="#experience" onClick={(e) => handleLinkClick(e, '#experience')}>
          <button className="px-6 py-2 uppercase font-semibold rounded-full border border-transparent hover:border-amber-200 bg-gray-800/50 hover:bg-gray-700/50 hover:scale-105 hover:shadow-lg transform transition-all duration-500 ease-out">
            Experience
          </button>
        </Link>
        <Link href="#projects" onClick={(e) => handleLinkClick(e, '#projects')}>
          <button className="px-6 py-2 uppercase font-semibold rounded-full border border-transparent hover:border-amber-200 bg-gray-800/50 hover:bg-gray-700/50 hover:scale-105 hover:shadow-lg transform transition-all duration-500 ease-out">
            Projects
          </button>
        </Link>
      </div>
    </div>
  );
}