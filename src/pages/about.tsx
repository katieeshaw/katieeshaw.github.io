import React from 'react';
import './about.css';

const Contact: React.FC = () => {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <p className="intro-text">Here you'll find more about my journey as a full stack developer, my passion for building GenAI tools, and the diverse set of skills I’ve developed in programming and technology.</p>
      
      <div className="about-skills-container">
        <section className="about-me">
          <h2>Get to know me!</h2>
          <p>I'm a <b>full stack developer</b> currently working as a software engineer in the Tax Technology team at PwC. I get to build end-to-end solutions that make complex tax processes more efficient, combining tech with real business impact.</p>
          <p>A large part of my work involves experimenting with <b>GenAI tools</b>, especially <b>building AI agents</b> that can think and act on their own to solve problems or automate tasks.</p>
          <p>I'm always open to interesting work, so if you’ve got something cool in mind, I’d love to hear about it!</p>
        </section>

        <section className="skills">
          <h2>My Skills</h2>
          <div className="skills-list">
            <span className="skill">JavaScript</span>
            <span className="skill">TypeScript</span>
            <span className="skill">Python</span>
            <span className="skill">React</span>
            <span className="skill">Django</span>
            <span className="skill">Microsoft Azure</span>
            <span className="skill">GenAI</span>
            <span className="skill">Node.js</span>
            <span className="skill">Databricks</span>
            <span className="skill">Power Platform</span>
            <span className="skill">SQL/NoSQL Databases</span>
            <span className="skill">RESTful APIs</span>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Contact;