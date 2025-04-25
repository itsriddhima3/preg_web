import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]">
        <source src="/homevideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Over Video */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Homepage</h1>
         <div className='flex flex-row gap-4'>
            <Link to="/about" 
            className="bg-white text-black px-4 py-2 rounded hover:bg-black     hover:text-white">
            Learn More
            </Link>
            <Link  to="/register"
            className="bg-white text-black  px-6 py-2 rounded hover:bg-black     hover:text-white transition">
            Get Started
            </Link>
         </div>
      </div>
    </div>
  );
}
