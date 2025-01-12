import React from 'react';
// --icons--
import reactIcon from "../assets/skills_Icon/react.png";
import javascriptIcon from "../assets/skills_Icon/javascript.png";
import tailwindCssIcon from "../assets/skills_Icon/tailwind-css.png";
import htmlIcon from "../assets/skills_Icon/html-5.png";
import CssIcon from "../assets/skills_Icon/css.png";
import pythonIcon from "../assets/skills_Icon/python.png";
import gitIcon from "../assets/skills_Icon/git.png";


function Skills() {
  const skills = [
    { name: 'React', img: reactIcon },
    { name: 'JavaScript', img: javascriptIcon },
    { name: 'Python', img: pythonIcon },
    { name: 'Tailwind CSS', img: tailwindCssIcon },
    { name: 'HTML', img: htmlIcon },
    { name: 'CSS', img: CssIcon },
    { name: 'Git', img: gitIcon },
  ];

  return (
    <div className="bg-gray-100 py-16 px-8">
      <h2 className="text-3xl font-bold text-center mb-6">Skills</h2>
      <div className="flex flex-wrap justify-center gap-16">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 w-28"
          >
            <img
              src={skill.img}
              alt={`${skill.name} logo`}
              className="h-16 w-16 mb-2 object-contain"
            />
            <span className="text-sm font-medium text-center">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
