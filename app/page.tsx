// app/page.tsx atau app/Home.tsx
"use client";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Projects from "./components/Project";
import Footer from "./components/Footer";


export default function Home() {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-950 flex-col snap-y snap-mandatory scroll-smooth">
      <Header handleLinkClick={handleLinkClick} />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="skills" className="snap-center">
        <Skill />
      </section>
      
      <section id="project" className="snap-center">
        <Projects />
      </section>

      <section id="footer" className="snap-end">
        <Footer />
      </section>
    </div>
  );
}
