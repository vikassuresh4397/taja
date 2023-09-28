import React from 'react'
import Home from './NavbarElements/Home'
import About from './NavbarElements/About'
import Skills from './NavbarElements/Skills'

const Navbar = () => {
  return (
    <div>
    <nav id="nav-menu">
      <ul>
        <li><a href="#home" className="nav-link home">Home</a></li>
        <li><a href="#about" className="nav-link about">About</a></li>
        <li><a href="#skills" className="nav-link skills">Skills</a></li>
        <li><a href="#projects" className="nav-link projects">Projects</a></li>
        <li><a href="#contact" className="nav-link contact">Contact</a></li>
        <li><a href="resume.pdf" target="_blank" rel="noopener noreferrer" className="nav-link resume">Resume</a></li>
      </ul>
    </nav>

   

    <Home />

   

    <About />

  

    <Skills />

    <section id="projects">
      <h2>Projects</h2>
      <div className="project-card">
        <img src="project-1.jpg" alt="Project 1" />
        <h3 className="project-title">Project 1</h3>
        <p className="project-description">Project description.</p>
        <p className="project-tech-stack">Tech stack used: HTML, CSS, JavaScript</p>
        <a href="https://github.com/project-1" className="project-github-link">GitHub Repository</a>
        <a href="https://project-1-demo.com" className="project-deployed-link">Demo</a>
      </div>
      <div className="project-card">
        <img src="project-2.jpg" alt="Project 2" />
        <h3 className="project-title">Project 2</h3>
        <p className="project-description">Project description.</p>
        <p className="project-tech-stack">Tech stack used: React, Node.js</p>
        <a href="https://github.com/project-2" className="project-github-link">GitHub Repository</a>
        <a href="https://project-2-demo.com" className="project-deployed-link">Demo</a>
      </div>
    </section>

    <section id="contact">
      <h2>Contact</h2>
      <a href="https://github.com/your-github-profile" id="contact-github">GitHub Profile</a>
      <a href="https://linkedin.com/in/your-linkedin-profile" id="contact-linkedin">LinkedIn Profile</a>
      <p id="contact-phone">Phone: 123-456-7890</p>
      <p id="contact-email">Email: john@example.com</p>
    </section>

    <section id="resume">
  <h2>Resume</h2>
  <button id="resume-button-1" onClick={() => window.open("resume.pdf", "_blank")}>Download Resume</button>
</section>

<footer>
  <div className="react-activity-calendar"></div>
  <img src="github-streak-stats.png" alt="GitHub Streak Stats" id="github-streak-stats" />
  <img src="github-top-langs.png" alt="GitHub Top Languages" id="github-top-langs" />
  <img src="github-stats-card.png" alt="GitHub Stats Card" id="github-stats-card" />
</footer>
</div>
  )
}

export default Navbar