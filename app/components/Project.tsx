"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const webProjects = [
  {
    title: "SDN Padangsari 01",
    description: "Website for school profile",
    image: "/images/image.png",
    tech: ["Laravel", "TailwindCSS", "Framer Motion"],
    link: "https://yourproject1.com",
  },
  {
    title: "Realtime Chat App",
    description:
      "A modern chat app using Firebase and React with a sleek dark UI and responsive design.",
    image: "/images/project2.jpg",
    tech: ["React", "Firebase", "TailwindCSS"],
    link: "https://yourproject2.com",
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
      className="min-h-screen overflow-x-hidden max-w-screen bg-gradient-to-bl from-gray-900 via-gray-950 to-black text-white py-20 px-4"
    >
      <div className="max-w-6xl mx-auto text-center mt-10">
        <motion.h2
          className="text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Recent Projects
        </motion.h2>

        <motion.h3 className="text-2xl font-semibold mb-6 text-left">
          Web Projects
        </motion.h3>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {webProjects.map((project, index) => (
            <motion.div
              key={index}
              className="group bg-white/5 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/10 hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="relative h-48 w-full mb-4 overflow-hidden rounded-xl">
                <Image src={project.image} alt={project.title} fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <div className="relative h-16">
                <motion.p
                  className="absolute top-0 left-0 right-0 text-sm text-gray-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out"
                >
                  {project.description}
                </motion.p>
              </div>
              <div className="flex flex-wrap gap-2 mb-3 mt-2">
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

        
      </div>
    </section>
  );
}
