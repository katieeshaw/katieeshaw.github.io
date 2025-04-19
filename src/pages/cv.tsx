import React from 'react';
import './home.css';
import './cv.css';

const CV: React.FC = () => {
  return (
    <div className="cv-container">
      <h1>CV</h1>
      <p className="intro-text">Here's a quick overview of my professional background and experience in tech:</p>

      <section className="cv-section">
        <h2>Experience</h2>
        <h3>Software Engineer - PwC</h3>
        <ul>
          <li>
            <strong>AI-Enabled Application Developer</strong><br />
            <span>Aug 2024 – Present</span><br />
            Developed scalable AI-powered solutions using Python and Azure, including a generative AI-based function app with vector search via CosmosDB, SQL integration, and Power Apps front-end.
          </li>
          <li>
            <strong>Full-Stack Developer (React/Node.js & Cloud)</strong><br />
            <span>Aug 2024 – Present</span><br />
            Built and deployed full-stack features using React and Node.js; managed GCP infrastructure and integrated OneSource data via Azure Function Apps.
          </li>
          <li>
            <strong>Salesforce Developer</strong><br />
            <span>Jan 2023 – Jul 2024</span><br />
            Created scalable Apex applications to streamline risk management workflows and collaborated with business stakeholders in agile teams.
          </li>
          <li>
            <strong>Product Pricing Analyst</strong><br />
            <span>Sep 2022 – Dec 2022</span><br />
            Supported digital asset pricing and designed an internal app concept to automate valuations, improving speed and consistency.
          </li>
          <li>
            <strong>Google Chatbot Developer</strong><br />
            <span>Jun 2022 – Jul 2022</span><br />
            Built a custom Google Chat bot to automate workspace admin tasks, suggest meeting times, and improve team productivity.
          </li>
        </ul>
      </section>

      <section className="cv-section">
        <h2>Education</h2>
        <ul>
          <li>
            <strong>BSc Computer Science (Digital & Technology Solutions)</strong><br />
            <span>University of Leeds, 2020 – 2024</span><br />
            <p>Achieved <b>First Class (Hons)</b></p> 
            <p>Dissertation focused on building a secure Django-based web application. The project explored the <b>security implications of enforced frequent password changes</b>, combining software engineering with cybersecurity research. I designed and conducted a user study where participants were required to update their passwords regularly, and developed a custom metrics system to analyse the impact on overall password strength, predictability, and user behavior over time.</p>
          </li>
        </ul>
      </section>

      <section className="cv-section">
        <h2>Skills</h2>
        <div className="skills-list">
          <span className="skill">Python</span>
          <span className="skill">JavaScript / TypeScript</span>
          <span className="skill">React</span>
          <span className="skill">Node.js</span>
          <span className="skill">Microsoft Azure</span>
          <span className="skill">Power Apps</span>
          <span className="skill">Power Automate</span>
          <span className="skill">SQL & NoSQL</span>
          <span className="skill">GenAI</span>
          <span className="skill">Databricks</span>
          <span className="skill">Agile Methodologies</span>
          <span className="skill">RESTful APIs</span>
          <span className="skill">CI/CD</span>
          <span className="skill">Django</span>
        </div>
      </section>

      <p className="cv-download">
        📄 <a href="./documents/Katie%20Shaw%20-%20CV.pdf" target="_blank" rel="noopener noreferrer">Download my full CV (PDF)</a>
      </p>
    </div>
  );
};

export default CV;