import React from 'react';

const Projects: React.FC = () => {
  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <p>Here are some of the projects I've worked on recently:</p>
      
      <ul className="project-list">
        <li>
          <h3>🧾 VAT Rate AI Tool</h3>
          <p>Built with Python and Azure Functions to determine VAT rates using AI-powered logic.</p>
        </li>
        <li>
          <h3>📊 Django Tax Dashboard</h3>
          <p>A university dissertation project – web app to visualize and manage tax data.</p>
        </li>
        <li>
          <h3>📱 Portfolio Website</h3>
          <p>This very site – built using React, Vite, and TypeScript!</p>
        </li>
      </ul>
    </div>
  );
};

export default Projects;
