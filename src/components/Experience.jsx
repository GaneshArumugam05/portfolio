// 9. Experience Component (src/components/Experience.js)
import React from 'react';

function Experience() {
  const experiences = [
    { company: 'Company A', role: 'Frontend Developer', period: '2021 - Present' },
    { company: 'Company B', role: 'Web Developer Intern', period: '2020 - 2021' },
  ];

  return (
    <div className="bg-gray-100 py-16 px-8">
      <h2 className="text-3xl font-bold text-center mb-6">Experience</h2>
      <ul className="space-y-4">
        {experiences.map((exp, index) => (
          <li key={index} className="p-4 border rounded-lg">
            <h3 className="text-xl font-bold">{exp.role}</h3>
            <p className="text-gray-600">{exp.company}</p>
            <p className="text-gray-500 text-sm">{exp.period}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Experience;