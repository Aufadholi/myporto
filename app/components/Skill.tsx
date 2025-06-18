"use client";
import React from "react";
import {
  SiLaravel,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBlender,
} from "react-icons/si";

const skills = [
  { name: "Next.js", icon: <SiNextdotjs size={32} /> },
  { name: "Laravel", icon: <SiLaravel size={32} /> },
  { name: "React", icon: <SiReact size={32} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={32} /> },
  { name: "Blender", icon: <SiBlender size={32} /> },

];

const Skill = () => {
  return (
    <section className="min-h-screen bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-12">
          Skills & Expertise
          <div className="w-16 h-1 bg-gray-400 mx-auto mt-2" />
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#1f2937] rounded-xl p-6 shadow-lg flex flex-col items-center hover:scale-105 transition-transform"
            >
              <div className="text-white mb-4">{skill.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-4">
                {skill.name}
              </h3>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
