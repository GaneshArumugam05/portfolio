import React from 'react';
import Dp from '../assets/my_Profile/ganesh.png';
// import CV from '../assets/my_Profile/Ganesh_Arumugam_CV.pdf'; // Ensure the path to your CV is correct

function About() {
  return (
    <div className="bg-white py-16 px-8" id="about">
      <h2 className="text-3xl font-bold text-center mb-10">About</h2>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        <img
          className="h-96 w-96 rounded-full shadow-lg"
          src={Dp}
          alt="Ganesh Arumugam"
        />
        <p className="text-gray-700 text-lg leading-relaxed max-w-2xl lg:ml-8">
          Hi, I'm <strong>Ganesh Arumugam</strong>, a passionate Web and Mobile
          App Developer based in Chennai. I began my journey at ThirdITech as
          an intern, where I honed my skills in creating modern, responsive web
          and mobile applications. With dedication and a strong work ethic, I
          progressed to a full-time role, taking on diverse projects that
          enriched my development expertise. My focus lies in crafting intuitive
          user interfaces and delivering impactful digital solutions.
          Continuously exploring new technologies, I am committed to growing as
          a developer and contributing to innovative projects.
        </p>
      </div>

      <div className="flex justify-center mt-8">
        <a
          href={''}
          download="Ganesh_Arumugam_CV.pdf"
          className="text-white font-bold rounded-md bg-blue-600 h-16 w-32 flex items-center justify-center hover:bg-blue-800"
        >
          Download CV
        </a>
      </div>
    </div>
  );
}

export default About;
