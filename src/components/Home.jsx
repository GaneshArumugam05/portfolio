// 5. Hero Component (src/components/Hero.js)
import React from 'react';

import illustrator1 from '../assets/my_Profile/Animated5.png';

import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6"; // Using Fa6 for FaXTwitter




function Home() {
  return (

    <div>
      
    
    
    <div className="bg-gray-100 text-white h-screen flex items-center justify-center">
    <img className="  h-96 w-96   " src={illustrator1} alt="" />
      <div className="text-center">
        
        <h1 className="text-5xl font-bold text-black">Hi, I'm Ganesh Arumugam </h1>
        <p className="mt-4 text-lg text-black">A React Frontend Developer</p>
        <a href="#projects" className="mt-6 inline-block px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-700">View My Work</a>

        <div className="flex justify-center space-x-6 mt-8">
                  <a 
                    href="#" 
                    className="flex items-center space-x-2 text-blue-800 hover:text-blue-600"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin size={20} />
                    {/* <span>LinkedIn</span> */}
                  </a>
                  <a 
                    href="#" 
                    className="flex items-center space-x-2 text-gray-800 hover:text-gray-600"
                    aria-label="GitHub"
                  >
                    <FaGithub size={20} />
                    {/* <span>GitHub</span> */}
                  </a>
                  <a 
                    href="#" 
                    className="flex items-center space-x-2 text-sky-800 hover:text-sky-600"
                    aria-label="Twitter"
                  >
                    <FaXTwitter size={20} />
                    {/* <span>Twitter</span> */}
                  </a>
                </div>


      </div>
    </div>
    </div>
  );
}

export default Home;