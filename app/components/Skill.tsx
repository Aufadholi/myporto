import React from 'react';

function Skill() {
  const programmingSkills = [
    { name: 'Laravel', icon: 'https://via.placeholder.com/50?text=Laravel', description: 'Building robust backend applications with PHP.' },
    { name: 'React', icon: 'https://via.placeholder.com/50?text=React', description: 'Crafting dynamic and interactive user interfaces.' },
    { name: 'Next.js', icon: 'https://via.placeholder.com/50?text=Next.js', description: 'Developing performant, SEO-friendly web apps.' },
    { name: 'Python', icon: 'https://via.placeholder.com/50?text=Python', description: 'Developing performant, SEO-friendly web apps.' },
  ];

  const additionalSkills = [
    { name: 'Blender', icon: 'https://via.placeholder.com/50?text=Blender', description: 'Creating 3D models and animations for creative projects.' },
  ];

  return (
    <section className="relative min-h-screen bg-gray-900 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto py-16 space-y-12">
        {/* Header Section */}
        <div className="text-center">
          <h3 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-100 to-amber-200">Skills</span>
          </h3>
          <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            A curated selection of my expertise in web development and creative tools, refined through real-world projects and a commitment to excellence.
          </p>
        </div>

        {/* Programming Skills Section */}
        <div className="space-y-6">
          <h4 className="text-2xl sm:text-3xl font-semibold text-gray-100 text-center">Programming Skills</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {programmingSkills.map((skill, index) => (
              <div
                key={index}
                className="relative p-6 bg-gray-800 rounded-xl shadow-md group hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 w-full max-w-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-100/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center space-x-4">
                  <img src={skill.icon} alt={`${skill.name} icon`} className="w-12 h-12 object-contain flex-shrink-0" />
                  <div className="flex-1">
                    <h5 className="text-xl font-semibold text-white">{skill.name}</h5>
                    <p className="text-gray-400 text-sm leading-relaxed">{skill.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Skills Section */}
        <div className="space-y-6">
          <h4 className="text-2xl sm:text-3xl font-semibold text-gray-100 text-center">Additional Skills</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {additionalSkills.map((skill, index) => (
              <div
                key={index}
                className="relative p-6 bg-gray-800 rounded-xl shadow-md group hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 w-full max-w-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-100/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center space-x-4">
                  <img src={skill.icon} alt={`${skill.name} icon`} className="w-12 h-12 object-contain flex-shrink-0" />
                  <div className="flex-1">
                    <h5 className="text-xl font-semibold text-white">{skill.name}</h5>
                    <p className="text-gray-400 text-sm leading-relaxed">{skill.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex justify-center gap-4">
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-amber-100 to-amber-200 text-black font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Let’s Collaborate
          </a>
          <a
            href="#portfolio"
            className="inline-block px-8 py-3 border border-gray-500 text-gray-300 font-semibold rounded-lg hover:bg-gray-700/50 transition-colors duration-300"
          >
            See My Work
          </a>
        </div>
      </div>
    </section>
  );
}

export default Skill;