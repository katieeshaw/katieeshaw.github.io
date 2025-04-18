import Projects from './projects';
import Contact from './contact';
import CV from './cv';
import About from './about';

function Home() {
  return (
    <div>
        <section className="home-container" id="top">
            <section className="intro">
                <h1>Welcome to My Portfolio</h1>
                <p>Hi! I'm a software engineer passionate about building web applications and solving real-world problems.</p>
            </section>

            <section className="highlight">
                <h2>What I Do</h2>
                <ul>
                <li>💻 Full-stack development</li>
                <li>🚀 Building scalable cloud applications</li>
                <li>🧠 Using AI to solve technical challenges</li>
                </ul>
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
