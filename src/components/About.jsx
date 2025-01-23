import React from 'react';
import Dp from '../assets/my_Profile/portfolioDp.png';
import resume from '../assets/resume.pdf';

function About() {
  return (
    <div className="bg-white py-16 px-4 sm:px-8 md:px-12" id="about">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">About</h2>
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <img className="h-32 w-32 sm:h-48 sm:w-48 md:h-64 md:w-64 rounded-full shadow-lg transition-transform transform hover:scale-105 duration-300 animate-slide-in" src={Dp} alt="Ganesh Arumugam" />
        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed max-w-5xl lg:ml-8  items-center justify-center ">
          Hi, I'm <strong>Ganesh Arumugam</strong>, a passionate Web and Mobile App Developer based in Chennai. I began my journey at ThirdITech as an intern, where I honed my skills in creating modern, responsive web and mobile applications. With dedication and a strong work ethic, I progressed to a full-time role, taking on diverse projects that enriched my development expertise. My focus lies in crafting intuitive user interfaces and delivering impactful digital solutions. Continuously exploring new technologies, I am committed to growing as a developer and contributing to innovative projects.
        </p>
      </div>
      <div className="flex justify-center mt-8">
        <a
          download="Ganesh_Arumugam_CV.pdf"
          href={resume}
          className="text-white font-bold rounded-md bg-blue-600 h-12 w-32 flex items-center justify-center hover:bg-blue-800 transition-transform transform hover:scale-105 duration-300 animate-bounce-on-hover"
        >
          Download CV
        </a>
      </div>
    </div>
  );
}

export default About;