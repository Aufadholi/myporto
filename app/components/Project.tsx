"use client";

import { motion } from "motion/react";
import Image from "next/image";

const webProjects = [
  {
    title: "SDN Padangsari 01",
    description: "Internship Diskominfo Project - Rebranding Website SD Palebon 03 Semarang. Proyek ini bertujuan untuk meningkatkan visibilitas dan aksesibilitas informasi sekolah melalui desain ulang yang modern dan responsif.",
    image: "/images/image.png",
    tech: ["Laravel", "TailwindCSS", "Framer Motion"],
    link: "https://github.com/rezaadityaaa/sdn-padangsari",
  },  {
    title: "Sistem Poliklinik",
    description:
      "Sistem manajemen klinik dan poli dokter yang komprehensif untuk mengelola data pasien, jadwal dokter, rekam medis, dan antrian. Dilengkapi dengan fitur appointment booking, history pengobatan, dan dashboard admin yang user-friendly.",
    image: "/images/poli.png",
    tech: ["Laravel", "Bootstrap", "PHP", "MySQL"],
    link: "https://github.com/Aufadholi/BK-Laravel.git",
  },
  {
    title: "3D Character Modeling",
    description:
      "Realistic character modeled and textured in Blender, optimized for real-time rendering.",
    image: "/images/blender1.jpg",
    tech: ["Blender", "Substance Painter"],
    link: "https://yourblenderproject.com",
  },
  {
    title: "3D Character Modeling",
    description:
      "Realistic character modeled and textured in Blender, optimized for real-time rendering.",
    image: "/images/blender1.jpg",
    tech: ["Blender", "Substance Painter"],
    link: "https://yourblenderproject.com",
  },
  {
    title: "3D Character Modeling",
    description:
      "Realistic character modeled and textured in Blender, optimized for real-time rendering.",
    image: "/images/blender1.jpg",
    tech: ["Blender", "Substance Painter"],
    link: "https://yourblenderproject.com",
  },
];



export default function ProjectsPage() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-bl from-gray-900 via-gray-950 to-black text-white py-16 overflow-x-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent px-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
            A showcase of my recent work in web development and design
          </p>
        </motion.div>
          {/* Projects Grid */}
        <div className="w-full overflow-hidden">
          <div className="flex gap-4 sm:gap-6 lg:gap-14 overflow-x-auto overflow-y-hidden scrollbar-hide pb-6 px-4 sm:px-0" style={{ touchAction: 'pan-x' }}>
            {webProjects.map((project, index) => (              <motion.div
                key={index}
                className="group bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-600 transition-all duration-500 w-[260px] sm:w-[300px] md:w-[320px] lg:w-[360px] flex-shrink-0 shadow-lg relative min-h-0"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Image Container */}
                <div className="relative h-40 sm:h-48 md:h-52 overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 md:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 sm:px-3 py-1 text-xs font-medium rounded-full bg-blue-900/30 border border-blue-700/50 text-blue-300 hover:bg-blue-900/50 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors duration-300 group/link"
                  >
                    View Project 
                    <span className="group-hover/link:translate-x-1 transition-transform duration-300">→</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
