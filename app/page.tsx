"use client";
import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { useEffect, useState } from "react";
import { FaInstagram, FaTiktok, FaYoutube, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-[#1b1b1b] flex-col snap-y snap-mandatory ">
      <Header />

      <section id="hero" className="snap-center">
        <Hero />
      </section>

      { /* Add other sections here, e.g., About, Experience, Skills, Projects */ }
      
    </div>
  );
}
