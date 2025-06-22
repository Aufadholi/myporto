"use client";

import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white py-8 px-6 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Branding & Motto */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="text-4xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-200 to-blue-100 animate-pulse">
            AFS.
          </div>
          <p className="text-sm text-gray-200 mt-3 max-w-xs leading-relaxed">
            Pioneering cutting-edge digital solutions with innovative code, bold design, and futuristic vision.
          </p>
        </div>

        {/* Navigation & Contact Info */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <h3 className="text-lg font-semibold text-cyan-400">Explore</h3>
          <div className="mt-4 text-sm text-gray-300 flex flex-col gap-2">
            <a href="mailto:aufa.fadholi@gmail.com" className="flex items-center gap-2 hover:text-cyan-300 transition-colors">
              <FaEnvelope size={16} /> aufa.fadholi@gmail.com
            </a>
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-cyan-300 transition-colors">
              <FaPhone size={16} /> +62-8231-9057-182
            </a>
          </div>
        </div>

        {/* Social Icons & Quick Links */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <h3 className="text-lg font-semibold text-cyan-400">Get In Touch</h3>
          <div className="flex gap-3">
            <a
              href="https://github.com/Aufadholi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-gray-900/70 hover:bg-cyan-500/30 text-gray-200 hover:text-cyan-300 transition-colors duration-300 border border-cyan-500/20"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-gray-900/70 hover:bg-blue-600/30 text-gray-200 hover:text-blue-300 transition-colors duration-300 border border-blue-500/20"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="https://www.instagram.com/aufafadholi/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-gray-900/70 hover:bg-pink-600/30 text-gray-200 hover:text-pink-300 transition-colors duration-300 border border-pink-500/20"
              aria-label="Instagram"
            >
              <FaInstagram size={18} />
            </a>
          </div>
          <p className="text-xs text-gray-400 text-center md:text-right mt-2">
            Follow for updates on cutting-edge tech and projects.
          </p>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-8 text-center text-xs text-gray-400 border-t border-gray-800/50 pt-4">
        © {new Date().getFullYear()} AF. All rights reserved. Powered by Next.js & TailwindCSS.
      </div>
    </footer>
  );
}