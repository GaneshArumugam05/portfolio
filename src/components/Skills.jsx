// 7. Skills Component (src/components/Skills.js)
import React from 'react';

function Skills() {
  const skills = ['React', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS', 'Git',];

  return (
    <div className="bg-gray-100 py-16 px-8">
      <h2 className="text-3xl font-bold text-center mb-6">Skills & Technologies</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <span key={index} className="px-4 py-2 bg-blue-500 text-white rounded-full">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Skills;