"use client";
import { useEffect, useState } from "react";
import { FaInstagram, FaTiktok, FaYoutube, FaEnvelope } from "react-icons/fa";

interface HeaderProps {
  handleLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

const navItems = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
];

export default function Header({ handleLinkClick }: HeaderProps) {
  const [activeSection, setActiveSection] = useState<string>("#hero");

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
        root: null,
        rootMargin: "0px 0px -60% 0px", // trigger saat 40% dari atas viewport
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

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-xl px-4">
      <div
        className="relative flex items-center justify-between text-white min-w-fit h-14 sm:h-16 px-4 sm:px-6
        bg-neutral-600/15 backdrop-blur-sm border border-white/10 rounded-full shadow-sm transition-all duration-500 ease-out"
      >
        <nav className="absolute left-1/2 transform -translate-x-1/2 flex gap-3 sm:gap-6 z-0">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
            >
              <button
                className={`px-4 py-1 text-sm uppercase font-medium rounded-full transition-all  hover:shadow-md ${
                  activeSection === item.href
                    ? "text-blue-500 scale-110"
                    : "hover:text-blue-500 text-white"
                }`}
              >
                {item.label}
              </button>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
