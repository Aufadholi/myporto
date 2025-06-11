"use client";
import { useEffect, useState } from 'react';
import { FaInstagram, FaTiktok, FaYoutube, FaEnvelope } from 'react-icons/fa';

export default function Header() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <header className="fixed pt-5 left-1/2 -translate-x-1/2 z-50 w-full flex items-center max-w-7xl justify-between">
      {/* Left: Social Icons */}
      <div
        className={`flex flex-row items-center gap-6 transition-all duration-700
          ${show ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
        `}
      >
        <a href="https://www.instagram.com/aufafadholi/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">
          <FaInstagram size={30} color='red'/>
        </a>
        <a href="https://www.tiktok.com/@aufafadholi" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
          <FaTiktok size={28} color='red'/>
        </a>
        <a href="https://www.youtube.com/@aufafadholi2915" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
          <FaYoutube size={30} color='red'/>
        </a>
      </div>
      {/* Right: Email dan Text di pojok kanan */}
      <div
        className={`flex flex-row items-center gap-4 transition-all duration-700
          ${show ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}
        `}
      >
        <FaEnvelope size={32} className="text-gray-300" />
        <span className="text-sm font-semibold ml-3 whitespace-nowrap">Lets Get In Touch!</span>
      </div>
    </header>
  );
}