// Hero Component (src/components/Hero.js)
import React from 'react';
import illustrator1 from '../assets/my_Profile/Animated5.png';
import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6"; // Using Fa6 for FaXTwitter

function Home() {
  return (
    <div className="bg-gray-100 text-white min-h-screen flex flex-col md:flex-row items-center justify-center p-4">
      <img className="h-48 w-48 sm:h-64 sm:w-64 md:h-96 md:w-96" src={illustrator1} alt="Illustrator" />
      <div className="text-center md:text-left mt-4 md:mt-0 md:ml-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">Hi, I'm Ganesh Arumugam</h1>
        <h3 className="mt-4 text-sm sm:text-base md:text-lg text-black">A React Frontend Developer</h3>
        <a href="#projects" className="mt-6 inline-block px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-700">View My Work</a>  
        {/* transition-transform transform hover:scale-105 duration-300 animate-bounce-on-hover */}
        <div className="flex justify-center md:justify-start space-x-6 mt-8">
          <a href="#" className="text-blue-800 hover:text-blue-600" aria-label="LinkedIn">
            <FaLinkedin size={20} />
          </a>
          <a href="#" className="text-gray-800 hover:text-gray-600" aria-label="GitHub">
            <FaGithub size={20} />
          </a>
          <a href="#" className="text-sky-800 hover:text-sky-600" aria-label="Twitter">
            <FaXTwitter size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;