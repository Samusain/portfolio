import React, { useState } from 'react';
import './Portfolio.css';
import mypic from '../../images/sample.png';
import projectImg from '../../images/desktop-preview.jpg'; 
import projectImg2 from '../../images/desktop-design.jpg';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Sample projects data
  const projects = [
    {
      id: 1,
      title: 'Insure with Theme Switcher',
      description: 'A responsive insurance site with some additional features React and Tailwind CSS',
      technologies: ['React', 'Tailwind CSS'],
      image: projectImg,
      link: 'https://insure-sfx.netlify.app/insure'
    },
    {
      id: 2,
      title: 'Blogr Landing Page',
      description: 'A responsive landing page for a blog platform, showcasing modern design principles.',
      technologies: ['React', 'Tailwind CSS'],
      image: projectImg2,
      link: 'https://samusain.github.io/myprojects/'
    }
  ];

  // Sample skills data
  const skills = [
    { name: 'HTML5', level: 95 },
    { name: 'CSS3', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 85 },
    { name: 'Responsive Design', level: 90 },
    { name: 'Git', level: 80 },
  ];

  // function section(){
  //   setActiveSection(prev => )
  // }

  return (
    <div className={`portfolio ${darkMode ? 'dark' : 'light'}`}>
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="logo">My Portfolio</div>
          <ul className="nav-links">
            <li><a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a></li>
            <li><a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a></li>
            <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
            <li><a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a></li>
            <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
          </ul>
          <button 
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Hi, I'm <span className="highlight">Samuel</span></h1>
            <h2>Frontend Developer</h2>
            <p>I build beautiful, responsive web experiences with React</p>
            <div className="cta-buttons">
              <a href="#projects" className="btn primary">View My Work</a>
              <a href="#contact" className="btn secondary">Contact Me</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="code-snippet">
              <pre>{`function Developer() {\n  return {\n    skills: ['React', 'JavaScript', 'CSS'],\n    passion: 'Creating amazing user experiences'\n  };\n}`}</pre>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a passionate frontend developer with 3+ years of experience building 
                modern web applications. I specialize in React and responsive design, 
                creating interfaces that are both beautiful and functional.
              </p>
              <p>
                My approach combines clean code principles with attention to design 
                details, ensuring the applications I build are maintainable and 
                delightful to use.
              </p>
              <div className="about-details">
                <div className="detail-item">
                  <span>Name:</span> Nnabuife Samuel
                </div>
                <div className="detail-item">
                  <span>Email:</span> samzy334@gmail.com
                </div>
                <div className="detail-item">
                  <span>From:</span> Lagos State, Nigeria.
                </div>
              </div>
            </div>
            <div className="about-image">
              <div className="image-frame"><img src={mypic} alt="mypic" className="mypic"/></div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">My Projects</h2>
          <div className="projects-grid">
            {projects.map(project => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <a href={project.link} className="project-link">View Project</a>
                  </div>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map(tech => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">My Skills</h2>
          <div className="skills-container">
            <div className="skills-list">
              {skills.map(skill => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-info">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="skills-illustration">
              <div className="code-circle">
                <div className="code-line"></div>
                <div className="code-line"></div>
                <div className="code-line"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <div className="info-item">
                <i className="fas fa-envelope"></i>
                <span>samzy334@gmail.com</span>
              </div>
              <div className="info-item">
                <i className="fas fa-phone"></i>
                <span>+234 (91) 5703-5164</span>
              </div>
              <div className="info-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Lagos, Nigeria</span>
              </div>
              <div className="social-links">
                <a href="#"><i className="fab fa-github"></i></a>
                <a href="#"><i className="fab fa-linkedin"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-codepen"></i></a>
              </div>
            </div>
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Subject" />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="btn primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Nnabuife Samuel. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;