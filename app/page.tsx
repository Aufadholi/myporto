"use client";
import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { useEffect, useState } from "react";
import { FaInstagram, FaTiktok, FaYoutube, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-black flex-col">
      <Header />

      <section>
        <Hero />
      </section>
    </div>
  );
}
