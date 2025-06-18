"use client";
import { FaInstagram, FaTiktok, FaYoutube, FaEnvelope } from 'react-icons/fa';

interface HeaderProps {
  handleLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

export default function Header({ handleLinkClick }: HeaderProps) {
  return (
    <header className="fixed top-4 z-50 w-full">
      <div
        className="relative flex items-center justify-between text-white min-w-fit h-12 sm:h-14 px-3 sm:px-5 transition-all duration-500 ease-out overflow-hidden"
      >
        {/* KIRI - ICON MEDIA SOSIAL */}
        <div className="flex flex-row items-center gap-5 sm:gap-5 z-10">
          <a href="https://www.youtube.com/@aufafadholi2915" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={24} className="sm:size-[30px] hover:scale-110" />
          </a>
          <a href="https://www.instagram.com/aufafadholi/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} className="sm:size-[30px] hover:scale-110" />
          </a>
          <a href="https://www.tiktok.com/@aufafadholi" target="_blank" rel="noopener noreferrer">
            <FaTiktok size={22} className="sm:size-[28px] hover:scale-110" />
          </a>
        </div>

        {/* TENGAH - BUTTON NAVIGASI */}
        <nav className="absolute left-1/2 transform -translate-x-1/2 flex gap-3 sm:gap-6 z-0">
          {[
            { href: '#about', label: 'About' },
            { href: '#skills', label: 'Skills' },
            { href: '#experience', label: 'Experience' },
            { href: '#projects', label: 'Projects' },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
            >
              <button className="px-4 py-1 text-sm uppercase font-medium rounded-full border border-transparent hover:border-amber-200 bg-gray-800/50 hover:bg-gray-700/50 hover:scale-105 hover:shadow-lg transition-all duration-300">
                {item.label}
              </button>
            </a>
          ))}
        </nav>

        {/* KANAN - EMAIL */}
        <div className="flex flex-row items-center gap-4 sm:gap-6 z-10">
          <a href="mailto:aufa.fadholi@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope size={22} className="sm:size-[28px] hover:scale-110" />
          </a>
        </div>
      </div>
    </header>
  );
}
