"use client";
import { FaCode, FaPaintBrush, FaCubes } from "react-icons/fa";
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
						<p className="text-gray-300 text-sm leading-relaxed">
							{skill.description}
						</p>
					</motion.div>
				))}
			</div>			
      <div className="text-white max-w-6xl mx-auto mt-16 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-xl hover:-translate-y-1 transition transform overflow-hidden">
				<div className="grid grid-cols-1 md:grid-cols-2 p-4">					
          {/* Photo Section */}
					<div className="flex justify-center md:justify-start md:pl-8">
						<div className="relative group cursor-pointer float-animation">
							{/* Outer glow effect */}
							<div className="absolute -inset-3 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-1000 ease-out glow-effect"></div>
							
							{/* Secondary glow ring */}
							<div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 rounded-2xl opacity-0 group-hover:opacity-100 blur-md transition-all duration-700 ease-out"></div>
							
							{/* Main photo container */}
							<div className="relative w-64 h-64 rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl group-hover:shadow-[0_30px_70px_-15px_rgba(59,130,246,0.5)] group-hover:border-blue-400/60 transition-all duration-700 ease-out group-hover:rotate-1 transform-gpu">
								{/* Background pattern overlay */}
								<div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
								
								{/* Main image */}
								<img
									src="/images/astro.png"
									alt="Aufa Fadholi"
									className="w-full h-full object-cover group-hover:scale-130 transition-transform duration-1000 ease-out filter group-hover:brightness-115 group-hover:contrast-110 group-hover:saturate-110"
								/>
								
								{/* Dynamic gradient overlays */}
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
								<div className="absolute inset-0 bg-gradient-to-br from-blue-400/25 via-transparent to-purple-400/25 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
								<div className="absolute inset-0 bg-gradient-to-tl from-cyan-400/15 via-transparent to-pink-400/15 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-200"></div>
								
								{/* Enhanced shimmer effect */}
								<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1200 ease-out delay-300 skew-x-12"></div>
								
								{/* Secondary shimmer */}
								<div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-300/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500 ease-out delay-500 -skew-x-12"></div>
								
								{/* Hover text overlay */}
								<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 delay-400">
									<div className="text-white text-sm font-semibold bg-black/60 backdrop-blur-md px-6 py-3 rounded-xl border border-white/30 transform translate-y-6 group-hover:translate-y-0 transition-all duration-500 shadow-lg">
										<div className="flex items-center gap-2">
											<div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span>Yo</span>
										</div>
									</div>
								</div>
								
								{/* Corner accents */}
								<div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-600"></div>
								<div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-600"></div>
							</div>
							
							{/* Enhanced status indicator */}
							<div className="absolute -bottom-4 -right-4 group/status">
								<div className="relative">
									{/* Multiple pulse rings */}
									<div className="absolute inset-0 w-10 h-10 bg-green-400/20 rounded-full animate-ping"></div>
									<div className="absolute inset-1 w-8 h-8 bg-green-400/30 rounded-full animate-pulse delay-200"></div>
									<div className="absolute inset-2 w-6 h-6 bg-green-400/40 rounded-full animate-ping delay-400"></div>
									
									{/* Main status dot */}
									<div className="relative w-10 h-10 bg-gradient-to-r from-green-400 via-emerald-500 to-green-400 rounded-full border-4 border-gray-900 group-hover/status:border-green-300/60 group-hover:scale-125 group-hover/status:shadow-2xl group-hover/status:shadow-green-400/60 transition-all duration-500 flex items-center justify-center animate-pulse">
										<div className="w-3 h-3 bg-white rounded-full opacity-95 animate-pulse"></div>
										
										{/* Inner glow */}
										<div className="absolute inset-0 bg-gradient-to-r from-green-300/50 to-emerald-400/50 rounded-full blur-sm group-hover/status:blur-md transition-all duration-300"></div>
									</div>
									
									{/* Status tooltip */}
									<div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900/90 text-white text-xs rounded-lg border border-green-400/30 opacity-0 group-hover/status:opacity-100 transition-all duration-300 delay-200 whitespace-nowrap backdrop-blur-sm">
										Online Now
										<div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900/90"></div>
									</div>
								</div>
							</div>
							
							{/* Enhanced floating particles effect */}
							<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none overflow-hidden">
								<div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-bounce delay-100 blur-sm"></div>
								<div className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-bounce delay-300 blur-sm"></div>
								<div className="absolute bottom-1/4 left-3/4 w-2 h-2 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full animate-bounce delay-500 blur-sm"></div>
								<div className="absolute top-1/2 right-1/2 w-1 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-bounce delay-700 blur-sm"></div>
								<div className="absolute top-3/4 left-1/2 w-1.5 h-1.5 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-bounce delay-900 blur-sm"></div>
							</div>
							
							{/* Magnetic field lines effect */}
							<div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-1000 pointer-events-none">
								<div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-blue-400/50 to-transparent transform -translate-x-1/2 animate-pulse delay-200"></div>
								<div className="absolute left-0 top-1/2 w-full h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent transform -translate-y-1/2 animate-pulse delay-400"></div>
							</div>
						</div>
					</div>
          {/* About Content */}
					<div className="flex flex-col justify-center space-y-2 text-center md:text-justify md:-ml-30 md:pr-7">
						<div className="md:mb-1">
							<h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
								About Me
							</h3>
							<div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto md:mx-0"></div>
						</div>

						<div className="space-y-3 text-gray-300 md:mt-2">
							<p className="leading-relaxed">
								Saya adalah seorang{" "}
								<span className="text-blue-400 font-semibold">
									Frontend Developer
								</span>{" "}
								dan
								<span className="text-purple-400 font-semibold">
									{" "}
									UI/UX Designer
								</span>{" "}
								dengan passion dalam menciptakan solusi digital yang inovatif
								dan user-friendly.
							</p>

							<p className="leading-relaxed">
								Dengan pengalaman dalam pengembangan web menggunakan teknologi
								modern seperti
								<span className="text-cyan-400 font-medium"> React, Next.js, Laravel</span>
								, saya selalu berusaha menghadirkan kualitas terbaik dalam setiap
								project yang dikerjakan.
							</p>

							<p className="leading-relaxed">
								Selain coding, saya juga memiliki ketertarikan dalam
								<span className="text-pink-400 font-medium"> 3D Modeling</span>{" "}
								dan selalu antusias mempelajari teknologi terbaru untuk terus
								berkembang.
							</p>
						</div>						{/* Stats */}
						<div className="grid grid-cols-3 gap-4 pt-2 md:mt-1">
							<div className="text-center">
								<div className="text-2xl font-bold text-blue-400">5+</div>
								<div className="text-xs text-gray-400 uppercase tracking-wide">
									Projects
								</div>
							</div>
							<div className="text-center">
								<div className="text-2xl font-bold text-purple-400">1+</div>
								<div className="text-xs text-gray-400 uppercase tracking-wide">
									Years Exp
								</div>
							</div>
							<div className="text-center">
								<div className="text-2xl font-bold text-pink-400">1+</div>
								<div className="text-xs text-gray-400 uppercase tracking-wide">
									Tech Stack
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
