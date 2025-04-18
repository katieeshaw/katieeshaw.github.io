import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <p>I'm always open to discussing new projects, tech ideas, or opportunities to collaborate.</p>
      
      <section className="contact-details">
        <p>📧 Email: <a href="mailto:katieshaw0509@gmail.com">katieshaw0509@gmail.com</a></p>
        <p>💼 LinkedIn: <a href="https://linkedin.com/in/katie-e-shaw" target="_blank" rel="noopener noreferrer">linkedin.com/in/katie-e-shaw</a></p>
        <p>🐱 GitHub: <a href="https://github.com/katieeshaw" target="_blank" rel="noopener noreferrer">https://github.com/katieeshaw</a></p>
      </section>
    </div>
  );
};

export default Contact;