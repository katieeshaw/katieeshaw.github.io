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
            src="./project-image-1.png"
            alt="Project Image"
            className="project-details__showcase-img"
          />
        </div>

        <div className="project-details__description">
          <h3>Project Title 1</h3>
          <p className="project-details__description-text">
            This is a brief description of the project. It highlights the main features and technologies used.
          </p>
          <button className="view-project-btn">View Project</button>
        </div>
      </div>

      <div className="project-details">
        <div className="project-details__showcase-img-cont">
          <img
            src="./project-image-1.png"
            alt="Project Image"
            className="project-details__showcase-img"
          />
        </div>

        <div className="project-details__description">
          <h3>Project Title 2</h3>
          <p className="project-details__description-text">
            This is a brief description of the project. It highlights the main features and technologies used.
          </p>
          <button className="view-project-btn">View Project</button>
        </div>
      </div>

      <div className="project-details">
        <div className="project-details__showcase-img-cont">
          <img
            src="./project-image-1.png"
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
      </div>

    </div>

  );
};

export default Projects;
