"use client";
import { FaCode, FaPaintBrush, FaCubes, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const skills = [
  {
    title: "Frontend Developer",
    description:
      "Crafting responsive, accessible, and modern web interfaces using React, Next.js, TailwindCSS, and more.",
    icon: <FaCode className="text-cyan-400" size={28} />,
  },
  {
    title: "UI/UX Designer",
    description:
      "Designing seamless and intuitive user experiences with attention to aesthetics and usability.",
    icon: <FaPaintBrush className="text-pink-400" size={28} />,
  },
  {
    title: "3D Modelling",
    description:
      "Creating low-poly to high-detail 3D assets for web or product showcases using Blender & WebGL.",
    icon: <FaCubes className="text-purple-400" size={28} />,
  },
];

export default function About() {
  return (
    <section className="min-h-screen py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <motion.h2
          className="text-4xl font-bold mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <p className="text-gray-400 text-lg">
          A creative developer blending design, code, and 3D model imagination.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-1">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            className="rounded-xl p-6 border border-white/10 bg-white/5 backdrop-blur-md shadow-xl hover:-translate-y-1 transition transform"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              {skill.icon}
              <h3 className="text-xl font-semibold">{skill.title}</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">{skill.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-white max-w-6xl text-center md:text-left space-y-4 mt-10 mx-auto rounded-xl p-6 border border-white/10 bg-white/5 backdrop-blur-md shadow-xl hover:-translate-y-1 transition transform">
        <h3 className="text-2xl font-semibold">Let’s Build Something Great</h3>
        <p className="text-gray-300">
          With a passion for clean code and engaging UX, I focus on delivering web solutions that not only function but inspire.
        </p>
        <div className="flex justify-center md:justify-start gap-4 pt-2">
          <a
            href="https://github.com/Aufadholi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border border-white/30 text-white font-medium rounded-md hover:bg-white/10 transition"
          >
            <FaGithub className="w-4 h-4" />
            GitHub
          </a>
          <a
            href="www.linkedin.com/in/aufa-fadholi-90638a29a"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border border-white/30 text-white font-medium rounded-md hover:bg-white/10 transition"
          >
            <FaLinkedin className="w-4 h-4" />
            LinkedIn
          </a>
        </div>
      </div>

      <div className="mt-20 max-w-4xl mx-auto text-center text-gray-400 text-md px-4">
        <p>
          With a strong eye for design, a deep understanding of frontend development, and 3D artistry, I help bring ideas to life on screen. Whether it's building sleek UIs, designing user flows, or modeling 3D environments, I bridge the gap between imagination and implementation.
        </p>
      </div>
    </section>
  );
}
