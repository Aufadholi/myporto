import React from 'react';

function About() {
  return (
    <section className="relative min-h-screen bg-gray-900 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Background Decorative Element */}
      

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12 py-16">
        {/* Image Section */}
        <div className="relative flex-shrink-0">
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 group">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-100 to-blue-500 rounded-2xl transform group-hover:scale-105 transition-transform duration-500"></div>
            <img
              src="https://via.placeholder.com/300"
              alt="Profile"
              className="relative w-full h-full object-cover rounded-2xl shadow-2xl transform translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <h3 className="text-4xl text-white sm:text-5xl font-bold tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-100 to-amber-200">Me</span>
          </h3>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
            I'm a dedicated developer with a passion for crafting sleek, efficient, and user-focused web applications. 
            My expertise lies in modern frontend technologies, and I thrive on transforming creative ideas into seamless digital experiences. 
            Always curious, always evolving.
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-gradient-to-r from-amber-100 to-amber-200 text-black font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Get in Touch
            </a>
            <a
              href="#portfolio"
              className="inline-block px-6 py-3 border border-gray-500 text-gray-300 font-semibold rounded-lg hover:bg-gray-700/50 transition-colors duration-300"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;