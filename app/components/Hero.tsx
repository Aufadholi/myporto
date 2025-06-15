"use client";
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link';

export default function Hero() {
  const [text] = useTypewriter({
    words: [
      "<Someone who loves to explore/>",
      "<A passionate software engineer/>",
      "<A lifelong learner/>",
    ],
    loop: true,
  });

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      {/* Lingkaran dan gambar di tengah */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <BackgroundCircles />
        <img
          src="/images/astro.png"
          alt="Hero Image"
          className="z-10 rounded-full w-32 h-32 sm:w-74 sm:h-74 object-cover"
        />
      </div>
      {/* Konten lain di bawah */}
      <h2 className='mt-130 text-md uppercase text-[#9b9b9b] pb-4 tracking-[15px] z-10'>
        Software Engineer
      </h2>
      <h1 className="text-5xl lg:text-4xl uppercase text-white font-semibold z-10">
        <span>{text}</span>
        <Cursor cursorColor="black" />
      </h1>
      <div className='gap-4 mt-10 flex flex-row items-center justify-center z-10'>
        <Link href='#about'>
          <button className='herobutton'>About</button>
        </Link>
        <Link href='#experience'>
          <button className='herobutton'>Experience</button>
        </Link>
        <Link href='#skills'>
          <button className='herobutton'>Skills</button>
        </Link>
        <Link href='#projects'>
          <button className='herobutton'>Projects</button>
        </Link>
      </div>
    </div>
  );
}