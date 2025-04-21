import React from 'react';
import './projects.css';

const Projects: React.FC = () => {
  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <p className="intro-text">Here you will find some of my personal projects:</p>
      
      <div className="project-details">
        <div className="project-details__showcase-img-cont">
          <img
            src="./images/project-image-1.png"
            alt="Project Image"
            className="project-details__showcase-img"
          />
        </div>

        <div className="project-details__description">
          <h3>Portfolio Website</h3>
          <p className="project-details__description-text">
            The very website you're on now! Built with React using Vite, it's curently hosted on GitHub Pages.
          </p>
          <a href="https://github.com/katieeshaw/katieeshaw.github.io" target="_blank" rel="noopener noreferrer">
            <button className="view-project-btn">View Project</button>
          </a>
        </div>
      </div>

      <div className="project-details">
        <div className="project-details__showcase-img-cont">
          <img
            src="./images/project-image-2.png"
            alt="Project Image"
            className="project-details__showcase-img"
          />
        </div>

        <div className="project-details__description">
          <h3>MealTime (WIP)</h3>
          <p className="project-details__description-text">
            Your personal recipe manager and meal planner – built with a React frontend (Vite) and a FastAPI backend. You can log in, save your favorite recipes, and plan your meals for the week.
          </p>
          <a href="https://github.com/katieeshaw/recipe-manager" target="_blank" rel="noopener noreferrer">
            <button className="view-project-btn">View Project</button>
          </a>
        </div>
      </div>

      {/* <div className="project-details">
        <div className="project-details__showcase-img-cont">
          <img
            src="./images/project-image-1.png"
            alt="Project Image"
            className="project-details__showcase-img"
          />
        </div>

        <div className="project-details__description">
          <h3>Project Title 3</h3>
          <p className="project-details__description-text">
            This is a brief description of the project. It highlights the main features and technologies used.
          </p>
          <button className="view-project-btn">View Project</button>
        </div>
      </div> */}

    </div>

  );
};

export default Projects;
