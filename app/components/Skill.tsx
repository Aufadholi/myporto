"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  SiLaravel,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBlender,
  SiFigma,
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { easeOut } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: easeOut,
    },
  }),
};

const categories = [
  {
    title: "Frameworks & Libraries",
    items: [
      {
        name: "Next.js",
        icon: <SiNextdotjs size={24} />,
        description: "React framework with SSR and file-based routing.",
        glow: "shadow-white/20",
      },
      {
        name: "Laravel",
        icon: <SiLaravel size={24} />,
        description: "PHP backend framework for scalable web apps.",
        glow: "shadow-red-400/20",
      },
      {
        name: "React",
        icon: <SiReact size={24} />,
        description: "UI library for building fast, interactive UIs.",
        glow: "shadow-blue-400/20",
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss size={24} />,
        description: "Utility-first CSS framework for rapid design.",
        glow: "shadow-cyan-400/20",
      },
    ],
  },
  {
    title: "Languages",
    items: [
      {
        name: "JavaScript",
        icon: <SiJavascript size={24} />,
        description: "Dynamic scripting language for the web programming.",
        glow: "shadow-yellow-400/20",
      },
      {
        name: "TypeScript",
        icon: <SiTypescript size={24} />,
        description: "Typed superset of JavaScript for scalable apps.",
        glow: "shadow-blue-300/20",
      },
      {
        name: "PHP",
        icon: <SiPhp size={24} />,
        description: "Backend scripting language for web development.",
        glow: "shadow-indigo-400/20",
      },
      {
        name: "HTML & CSS",
        icon: (
          <div className="flex space-x-1 items-center">
            <SiHtml5 size={18} />
            <SiCss3 size={18} />
          </div>
        ),
        description: "Core structure and styling for web pages.",
        glow: "shadow-pink-300/20",
      },
    ],
  },
  {
    title: "Design & 3D Tools",
    items: [
      {
        name: "Figma",
        icon: <SiFigma size={24} />,
        description: "Collaborative UI/UX design tool. The best tools for creating website design.",
        glow: "shadow-pink-400/20",
      },
      {
        name: "Blender",
        icon: <SiBlender size={24} />,
        description: "3D modeling and animation software.",
        glow: "shadow-orange-400/20",
      },
    ],
  },
];

const Skill = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-gray-900 py-20 px-6">
      <div className="max-w-6xl mx-auto mt-10">
        <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-4">
          Skills
        </h2>
        <p className="text-center text-gray-400 max-w-xl mx-auto mb-16">
          A curated set of tools, languages, and technologies I use to craft digital experiences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={catIndex}
              className="bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md p-6 shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-xl text-white font-semibold mb-4">
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    className={`flex items-start gap-4 p-3 rounded-lg bg-white/5 hover:bg-white/8 transition group hover:scale-103 ${item.glow}`}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={itemIndex}
                  >
                    <div className="text-white">{item.icon}</div>
                    <div>
                      <p className="text-white font-medium">{item.name}</p>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
