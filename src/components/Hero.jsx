// 5. Hero Component (src/components/Hero.js)
import React from 'react';

import Dp from '../assets/my_Profile/ganesh.png'




function Hero() {
  return (

    <div>
      
    
    
    <div className="bg-gray-700 text-white h-screen flex items-center justify-center">
      <div className="text-center">
        <img className=" ml-24 w-32 h-32 rounded-full object-cover bg-white" src={Dp} alt="" />
        <h1 className="text-5xl font-bold">Hi, I'm Ganesh </h1>
        <p className="mt-4 text-lg">A React Frontend Developer</p>
        <a href="#projects" className="mt-6 inline-block px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-700">View My Work</a>
      </div>
    </div>
    </div>
  );
}

export default Hero;