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

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-xl px-4">
      <div className="relative flex items-center justify-between text-white min-w-fit h-14 sm:h-16 px-4 sm:px-6 bg-neutral-600/15 backdrop-blur-sm border border-white/10 rounded-full shadow-sm transition-all duration-500 ease-out">
          {/* Desktop Navigation */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-6">          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              className={`px-4 py-1 text-sm font-light uppercase tracking-widest rounded-full transition-all hover:shadow-md ${
                activeSection === item.href
                  ? "text-blue-400 scale-110 font-normal"
                  : "hover:text-blue-400 text-white/90"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>        {/* Mobile Welcome Text */}
        <div className="md:hidden flex-1 flex items-center">
          <span className="text-sm font-light text-white/90 tracking-wider">
            Welcome to my portfolio
          </span>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-3 focus:outline-none hover:bg-white/10 rounded-full transition-colors"
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <div className={`w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </div>
        </button>        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div 
            className="md:hidden fixed inset-0 bg-black/60 z-40 animate-in fade-in duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="bg-gray-900/95 backdrop-blur-md w-[calc(100%-2rem)] max-w-sm max-h-[45vh] mt-24 mx-auto rounded-2xl shadow-2xl border border-gray-700/50 animate-in slide-in-from-top duration-200" onClick={(e) => e.stopPropagation()}>              {/* Header */}
              <div className="flex justify-between items-center px-5 py-4 border-b border-gray-700/50">
                <div className="text-lg font-extralight text-white tracking-[0.15em] uppercase">Navigation</div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-all duration-150"
                  aria-label="Close menu"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
                {/* Navigation */}
              <nav className="px-3 py-2">
                {navItems.map((item, index) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleMenuItemClick(e, item.href)}
                    className={`group flex items-center justify-between px-4 py-3 mx-1 my-1 text-base font-light rounded-xl transition-all duration-150 ${
                      activeSection === item.href
                        ? "text-blue-400 bg-blue-500/15 shadow-sm font-normal tracking-wide"
                        : "text-gray-200 hover:text-white hover:bg-gray-700/40 tracking-wider"
                    }`}
                    style={{ 
                      animationDelay: `${index * 60}ms`,
                      animation: `slideInLeft 0.3s ease-out ${index * 60}ms both`
                    }}
                  >
                    <span className="tracking-[0.05em]">{item.label}</span>
                    <div className={`w-1.5 h-1.5 rounded-full transition-all duration-150 ${
                      activeSection === item.href ? 'bg-blue-400' : 'bg-transparent group-hover:bg-gray-400'
                    }`}></div>
                  </a>
                ))}
              </nav>
                {/* Footer */}
              <div className="px-5 py-4 border-t border-gray-700/50">
                <a 
                  href="mailto:aufa.fadholi@gmail.com"
                  className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-sm font-light rounded-xl transition-all duration-150 shadow-lg hover:shadow-xl"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="tracking-[0.1em] uppercase">Get in Touch</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
