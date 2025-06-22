"use client";

import { useEffect, useState } from "react";

interface HeaderProps {
  handleLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

const navItems = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#project", label: "Projects" },
];

export default function Header({ handleLinkClick }: HeaderProps) {
  const [activeSection, setActiveSection] = useState<string>("#hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          setActiveSection(`#${visible.target.id}`);
        }
      },
      {
        rootMargin: "0px 0px -60% 0px",
        threshold: 0.2,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);
  const handleMenuItemClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    handleLinkClick(e, href);
    setIsMenuOpen(false); // Close menu after clicking
  };  // Close menu when scrolling or touching outside
  useEffect(() => {
    const handleScroll = () => setIsMenuOpen(false);
    const handleResize = () => setIsMenuOpen(false);
    
    if (isMenuOpen) {
      document.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleResize);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (    <header className="fixed top-3 sm:top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-xs sm:max-w-xl px-3 sm:px-4">
      <div className="relative flex items-center justify-between text-white min-w-fit h-12 sm:h-14 md:h-16 px-3 sm:px-4 md:px-6 bg-gray-900/80 sm:bg-neutral-600/15 backdrop-blur-md border border-white/20 sm:border-white/10 rounded-2xl sm:rounded-full shadow-lg sm:shadow-sm transition-all duration-500 ease-out hover:shadow-xl hover:bg-gray-900/90 sm:hover:bg-neutral-600/20">
          {/* Desktop Navigation */}        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-6">          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              className={`px-4 py-2 text-sm font-medium uppercase tracking-[0.15em] rounded-full transition-all duration-300 hover:shadow-lg ${
                activeSection === item.href
                  ? "text-blue-400 scale-105 font-semibold bg-blue-500/10 shadow-md"
                  : "hover:text-blue-400 text-white/85 hover:bg-white/5"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>        {/* Mobile Welcome Text */}
        <div className="md:hidden flex-1 flex items-center">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
            <span className="text-xs sm:text-sm font-semibold tracking-[0.12em] uppercase bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Aufa Fadholi
            </span>
          </div>
        </div>        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 sm:p-3 focus:outline-none hover:bg-white/10 rounded-xl transition-all duration-300 group"
          aria-label="Toggle menu"
        >
          <div className="space-y-1 sm:space-y-1.5">
            <div className={`w-5 sm:w-6 h-0.5 bg-white transition-all duration-300 ease-in-out group-hover:bg-blue-400 ${isMenuOpen ? 'rotate-45 translate-y-1.5 sm:translate-y-2' : ''}`}></div>
            <div className={`w-5 sm:w-6 h-0.5 bg-white transition-all duration-300 ease-in-out group-hover:bg-blue-400 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-5 sm:w-6 h-0.5 bg-white transition-all duration-300 ease-in-out group-hover:bg-blue-400 ${isMenuOpen ? '-rotate-45 -translate-y-1.5 sm:-translate-y-2' : ''}`}></div>
          </div>
        </button>        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div 
            className="md:hidden fixed inset-0 bg-black/70 backdrop-blur-sm z-40 animate-in fade-in duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            {/* Menu positioned directly below header */}
            <div 
              className="absolute top-16 sm:top-20 left-1/2 -translate-x-1/2 w-[calc(100%-1.5rem)] max-w-sm bg-gray-900/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-700/30 overflow-hidden animate-in slide-in-from-top-5 duration-500 ease-out" 
              onClick={(e) => e.stopPropagation()}
              style={{
                animation: 'slideDown 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards'
              }}
            >              
              {/* Header */}
              <div className="flex justify-between items-center px-5 py-4 border-b border-gray-700/30 bg-gradient-to-r from-gray-800/50 to-gray-900/50">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
                  <div className="text-base sm:text-lg font-semibold text-white tracking-[0.1em] uppercase">Menu</div>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-xl transition-all duration-200 group"
                  aria-label="Close menu"
                >
                  <svg className="w-4 h-4 group-hover:rotate-90 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>                {/* Navigation */}
              <nav className="px-2 sm:px-3 py-3 overflow-hidden">                {navItems.map((item, index) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleMenuItemClick(e, item.href)}
                    className={`group flex items-center justify-between px-4 sm:px-5 py-3 sm:py-4 mx-1 my-1 text-sm sm:text-base font-medium rounded-2xl transition-all duration-300 backdrop-blur-sm transform ${
                      activeSection === item.href
                        ? "text-blue-400 bg-gradient-to-r from-blue-500/20 to-purple-500/20 shadow-lg font-semibold tracking-[0.08em] border border-blue-500/30"
                        : "text-gray-200 hover:text-white hover:bg-gradient-to-r hover:from-gray-700/40 hover:to-gray-600/40 tracking-[0.06em] font-normal hover:shadow-md border border-transparent hover:border-gray-600/30"
                    }`}
                    style={{ 
                      animationDelay: `${(index + 1) * 100}ms`,
                      animation: `slideInFromTop 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${(index + 1) * 100}ms both`,
                      transform: 'translateY(-20px)',
                      opacity: '0'
                    }}
                  >
                    <span className="tracking-[0.05em] flex items-center gap-3">
                      <div className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                        activeSection === item.href ? 'bg-blue-400 shadow-lg shadow-blue-400/50' : 'bg-transparent group-hover:bg-gray-400'
                      }`}></div>
                      {item.label}
                    </span>
                    <div className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      activeSection === item.href ? 'bg-blue-400' : 'bg-transparent group-hover:bg-gray-400'
                    }`}></div>
                  </a>
                ))}
              </nav>                {/* Footer */}              
              <div 
                className="px-4 sm:px-5 py-4 border-t border-gray-700/30 bg-gradient-to-r from-gray-800/30 to-gray-900/30"
                style={{
                  animationDelay: '600ms',
                  animation: 'slideInFromTop 0.5s cubic-bezier(0.4, 0, 0.2, 1) 600ms both',
                  transform: 'translateY(-20px)',
                  opacity: '0'
                }}
              >
                <a 
                  href="mailto:aufa.fadholi@gmail.com"
                  className="flex items-center justify-center gap-3 w-full px-4 py-3 sm:py-3.5 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 hover:from-blue-700 hover:via-blue-800 hover:to-purple-700 text-white text-sm font-semibold rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 border border-blue-500/20"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="tracking-[0.08em] uppercase">Let&apos;s Connect</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
