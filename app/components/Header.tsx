"use client";
import { FaInstagram, FaTiktok, FaYoutube, FaEnvelope } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="fixed top-4  z-50 w-full max-w">
      <div
        className={`
           text-white  flex items-center justify-between
          min-w-fit h-12 sm:h-14 px-3 sm:px-5 transition-all duration-500 ease-out overflow-hidden
        `}
      >
        {/* ICONS DI KIRI */}
        <div className="flex flex-row items-center gap-5 sm:gap-5">
          <a href="https://www.youtube.com/@aufafadholi2915" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={24} className="sm:size-[30px] hover:scale-110" color="white" />
          </a>
          <a href="https://www.instagram.com/aufafadholi/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} className="sm:size-[30px] hover:scale-110" color="white" />
          </a>
          <a href="https://www.tiktok.com/@aufafadholi" target="_blank" rel="noopener noreferrer">
            <FaTiktok size={22} className="sm:size-[28px] hover:scale-110" color="white" />
          </a>
        </div>
        {/* TEXT DAN MAIL DI KANAN */}
        <div className="flex flex-row items-center gap-2 sm:gap-3">
          <a href="mailto:aufa.fadholi@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope size={22} className="sm:size-[28px] hover:scale-110" color="white" />
          </a>
          <span className="text-md px-2 py-1 transition-colors duration-300 whitespace-nowrap">
            Lets Get In Touch!
          </span>
          
        </div>
      </div>
    </header>
  );
}