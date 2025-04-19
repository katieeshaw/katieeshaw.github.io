import Projects from './projects';
import CV from './cv';
import About from './about';
import './home.css';

function Home() {
  return (
    <div>
        <section className="home-container" id="top">
            <div className="sidebar">
                <a href="https://github.com/katieeshaw" target="_blank" rel="noopener noreferrer"><img src="./github-ico.png" alt="Icon 2" className="home-hero__social-icon" /></a>
                <a href="https://linkedin.com/in/katie-e-shaw" target="_blank" rel="noopener noreferrer"><img src="./linkedin-ico.png" alt="Icon 1" className="home-hero__social-icon" /></a>
                <a href="mailto:katieshaw0509@gmail.com" target="_blank" rel="noopener noreferrer"><img src="./email-image.webp" alt="Icon 1" /></a>
            </div>

            <section className="intro">
                <h1>Hey, I'm Katie Shaw</h1>
                <p>I'm a software engineer who loves building web apps and solving problems to create real, practical solutions.</p>
            </section>
        </section>

        <section id="about">
            <About />
        </section>

        <section id="projects">
            <Projects />
        </section>

        <section id="cv">
            <CV />
        </section>
    </div>
  );
}

export default Home;
