"use client";
import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import { useEffect, useState } from "react";
import { FaInstagram, FaTiktok, FaYoutube, FaEnvelope } from "react-icons/fa";
import Skill from "./components/Skill";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-950 flex-col snap-y snap-mandatory ">
      <Header handleLinkClick={function (e: React.MouseEvent<HTMLAnchorElement>, href: string): void {
        throw new Error("Function not implemented.");
      } } />

      <section id="hero" className="snap-start">
        <Hero />
      </section>
      
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="skills" className="snap-center">
        <Skill />
      </section>

      { /* Add other sections here, e.g., About, Experience, Skills, Projects */ }
      
    </div>
  );
}
