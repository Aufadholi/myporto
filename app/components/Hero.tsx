"use client";
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';

export default function Hero() {
  const [text] = useTypewriter({
    words: ["Welcome to My Portfolio", "A Tea Lovers", "You know me as a Developer"],
    loop: true,
  });

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      {/* Background circles absolute, isi parent */}
      <BackgroundCircles />
      <img
        src="/images/astro.png"
        alt="Hero Image"
        className="z-10 mt-28 rounded-full w-32 h-32 sm:w-74 sm:h-74 object-cover"
      />
      <h2 className='pt-5 text-md uppercase text-[#9b9b9b] pb-4 tracking-[15px]'>
        Software Engineer
      </h2>
      <h1 className="mt-3 text-4xl font-bold text-white text-center relative z-10">
        <span>{text}</span>
        <Cursor cursorColor="black" />
      </h1>
    </div>
  );
}