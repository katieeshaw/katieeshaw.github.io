import Projects from './projects';
import Contact from './contact';
import CV from './cv';
import About from './about';
import './home.css';

function Home() {
  return (
    <div>
        <section className="home-container" id="top">
            <section className="intro">
                <h1>Hey, I'm <b className="intro-header">Katie Shaw</b></h1>
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

        <section id="contact">
            <Contact />
        </section>
    </div>
  );
}

export default Home;
