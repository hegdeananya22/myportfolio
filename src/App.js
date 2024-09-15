import React from 'react';
import './App.css';

// Import your components
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import ContactInfo from './components/ContactInfo';

function App() {
  return (
    <div className="App">
      <header>
        <div className="profile-info">
          <img src="/path-to-your-image.jpg" alt="Profile" className="profile-img" />
          <div className="intro">
            <h1>Ananya Vinayak Hegde</h1>
            <p>Student</p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section id="about-me">
          <AboutMe />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="contact-info">
          <ContactInfo />
        </section>
      </main>
    </div>
  );
}

export default App;
