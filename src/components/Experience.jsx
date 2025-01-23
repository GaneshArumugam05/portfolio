// Experience Component (src/components/Experience.js)
import React from 'react';

function Experience() {
  const experiences = [
    {
      company: 'ThirdI Tech',
      role: 'Web and Mobile App Developer',
      period: '2025 - Present',
      responsibilities: [
        'Designed and developed responsive web applications using React.js and Tailwind CSS.',
        'Built cross-platform mobile applications using React Native, ensuring smooth performance on both iOS and Android.',
        'Collaborated with UI/UX designers to translate wireframes into high-quality, interactive applications.',
        'Integrated third-party APIs, including payment gateways and geolocation services, into mobile and web applications.',
        'Optimized web and mobile app performance, improving load times by 25%.',
        'Maintained clear documentation for projects, ensuring codebase readability and scalability.',
      ],
    },
    {
      company: 'ThirdI Tech',
      role: 'Web and Mobile App Developer Intern',
      period: '2024 - 2024',
      responsibilities: [
        'Assisted in the development of mobile app features using React Native.',
        'Worked on improving UI responsiveness for existing web projects.',
        'Gained experience with Firebase for backend services and user authentication.',
        'Collaborated with senior developers to enhance coding standards and practices.',
      ],
    },
  ];

  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-8 md:px-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">Experience</h2>
      <ul className="space-y-8">
        {experiences.map((exp, index) => (
          <li key={index} className="p-6 border rounded-lg bg-white shadow-md transform transition duration-300 hover:scale-105">
            <h3 className="text-xl sm:text-2xl font-bold">{exp.role}</h3>
            <p className="text-gray-600 font-medium">{exp.company}</p>
            <p className="text-gray-500 text-sm mb-4">{exp.period}</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {exp.responsibilities.map((task, taskIndex) => (
                <li key={taskIndex}>{task}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Experience;
