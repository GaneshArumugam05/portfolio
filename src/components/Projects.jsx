// Projects Component (src/components/Projects.js)
import React from 'react';

function Projects() {
  const projects = [
    { title: 'Project One', description: 'Description of project one.', link: '#' },
    { title: 'Project Two', description: 'Description of project two.', link: '#' },
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-8 md:px-12" id="projects">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="border p-6 rounded-lg">
            <h3 className="text-lg sm:text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <a href={project.link} className="text-blue-500 hover:underline">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;