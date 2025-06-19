"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const webProjects = [
  {
    title: "AI-Powered Portfolio",
    description: "A personal portfolio website with AI-generated content assistance, built using Next.js, TailwindCSS, and Framer Motion.",
    image: "/images/project1.jpg",
    tech: ["Next.js", "TailwindCSS", "Framer Motion"],
    link: "https://yourproject1.com",
  },
  {
    title: "Realtime Chat App",
    description: "A modern chat app using Firebase and React with a sleek dark UI and responsive design.",
    image: "/images/project2.jpg",
    tech: ["React", "Firebase", "TailwindCSS"],
    link: "https://yourproject2.com",
  },
  {
    title: "Event Finder Platform",
    description: "Web platform for discovering and booking event spaces, featuring geolocation and filtering features.",
    image: "/images/project3.jpg",
    tech: ["Vue", "Node.js", "MongoDB"],
    link: "https://yourproject3.com",
  },
];

const otherProjects = [
  {
    title: "3D Character Modeling",
    description: "Realistic character modeled and textured in Blender, optimized for real-time rendering.",
    image: "/images/blender1.jpg",
    tech: ["Blender", "Substance Painter"],
    link: "https://yourblenderproject.com",
  },
  {
    title: "Sci-Fi Vehicle Design",
    description: "A futuristic sci-fi vehicle concept designed in Blender with Eevee rendering.",
    image: "/images/blender2.jpg",
    tech: ["Blender", "Photoshop"],
    link: "https://yourvehicleproject.com",
  },
];

export default function ProjectsPage() {
  return (
    <section id="projects" className="min-h-screen overflow-x-hidden max-w-screen bg-gradient-to-bl from-gray-900 via-gray-950 to-black text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center mt-10">
        <motion.h2
          className="text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Futuristic Projects
        </motion.h2>

        <motion.h3 className="text-2xl font-semibold mb-6 text-left">Web Projects</motion.h3>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {webProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/10 hover:scale-[1.02] transition-transform duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="relative h-48 w-full mb-4 overflow-hidden rounded-xl">
                <Image src={project.image} alt={project.title} fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-300 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs rounded-full bg-blue-800/30 border border-blue-400 text-blue-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-sm text-blue-400 hover:underline"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>

        <motion.h3 className="text-2xl font-semibold mb-6 text-left">Other Creative Projects</motion.h3>
        <div className="grid md:grid-cols-3 gap-8">
          {otherProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/10 hover:scale-[1.02] transition-transform duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="relative h-48 w-full mb-4 overflow-hidden rounded-xl">
                <Image src={project.image} alt={project.title} fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-300 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs rounded-full bg-indigo-800/30 border border-indigo-400 text-indigo-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-sm text-indigo-400 hover:underline"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
