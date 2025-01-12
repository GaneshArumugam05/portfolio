// 6. About Component (src/components/About.js)
import React from 'react';

function About() {
  return (
    <div className="bg-white py-16 px-8" id="about">
      <h2 className="text-3xl font-bold text-center mb-6">About Me</h2>
      <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
      Hi, I'm Ganesh Arumugam, a passionate Web and Mobile App Developer based in Chennai. 
      I began my journey at ThirdITech as an intern, where I honed my skills in creating modern, 
      responsive web and mobile applications. With dedication and a strong work ethic, 
      I progressed to a full-time role, taking on diverse projects that enriched my development expertise. 
      My focus lies in crafting intuitive user interfaces and delivering impactful digital solutions. Continuously exploring new technologies, 
      I am committed to growing as a developer and contributing to innovative projects.
      </p>
    </div>
  );
}

export default About;