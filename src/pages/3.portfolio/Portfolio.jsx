import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'A responsive web application for managing tasks with real-time collaboration features.',
      link: 'https://github.com/AI-Balushi' // Link to your GitHub profile
    },
    {
      title: 'Project 2',
      description: 'An eCommerce platform built with React and Node.js, designed for optimal performance and user experience.',
      link: 'https://github.com/AI-Balushi' // Link to your GitHub profile
    },
    {
      title: 'Project 3',
      description: 'A mobile-friendly landing page for a startup, focusing on user engagement and conversion.',
      link: 'https://github.com/AI-Balushi' // Link to your GitHub profile
    },
    {
      title: 'Project 4',
      description: 'A custom-built dashboard for data analytics, featuring interactive charts and user-friendly navigation.',
      link: 'https://github.com/AI-Balushi' // Link to your GitHub profile
    },
    {
      title: 'Project 5',
      description: 'A social media application with features for connecting and sharing with friends.',
      link: 'https://github.com/AI-Balushi' // Link to your GitHub profile
    },
    {
      title: 'Project 6',
      description: 'A content management system that simplifies the process of managing digital content.',
      link: 'https://github.com/AI-Balushi' // Link to your GitHub profile
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold text-gray-800">Portfolio</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-600">
          Discover my latest projects that demonstrate my skills and passion for web development. Each project is crafted with attention to detail and user experience.
        </p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-5 py-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800">{project.title}</h2>
              <p className="mt-2 text-gray-600">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-indigo-600 hover:underline">
                View Project
              </a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Portfolio;
