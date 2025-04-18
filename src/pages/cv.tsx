import React from 'react';

const CV: React.FC = () => {
  return (
    <div className="cv-container">
      <h1>Curriculum Vitae</h1>
      <p>Here's a quick overview of my professional background:</p>

      <section className="cv-section">
        <h2>Experience</h2>
        <ul>
          <li>
            <strong>Software Engineer – PwC (Tax Technology)</strong><br />
            <span>2023 – Present</span><br />
            Working on AI-powered tools and cloud-based tax tech solutions.
          </li>
          <li>
            <strong>Software Engineering Intern</strong><br />
            <span>Summer 2022</span><br />
            Developed internal tools using Python and React.
          </li>
        </ul>
      </section>

      <section className="cv-section">
        <h2>Education</h2>
        <ul>
          <li>
            <strong>BSc Computer Science</strong><br />
            <span>University of XYZ, 2019 – 2023</span><br />
            Dissertation: Tax Tech Web App (Django)
          </li>
        </ul>
      </section>

      <p>📄 <a href="/your-cv.pdf" target="_blank" rel="noopener noreferrer">Download my full CV (PDF)</a></p>
    </div>
  );
};

export default CV;