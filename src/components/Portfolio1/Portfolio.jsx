import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './Portfolio.css';
import mypic from '../../images/sample.png';
import projectImg from '../../images/desktop-preview.jpg'; 
import projectImg2 from '../../images/desktop-design.jpg';
import projectImg3 from '../../images/22fix-project.png';
import projectImg4 from '../../images/LedgyFront.png';
import projectImg5 from '../../images/22SolarFront.png';
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineNightlight } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineCall } from "react-icons/md";
import { SlSocialLinkedin } from "react-icons/sl";
import { BsGithub } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const form = useRef();

  // Sample projects data
  const projects = [
    {
      id: 1,
      title: 'Insure with Theme Switcher',
      description: 'A responsive insurance site with additional features built using React and Tailwind CSS',
      technologies: ['React', 'Tailwind CSS', 'JavaScript'],
      image: projectImg,
      link: 'https://insure-sfx.netlify.app/insure'
    },
    {
      id: 2,
      title: 'Blogr Landing Page',
      description: 'A responsive landing page for a blog platform, showcasing modern design principles and smooth animations.',
      technologies: ['React', 'Tailwind CSS', 'Responsive Design'],
      image: projectImg2,
      link: 'https://samusain.github.io/myprojects/'
    },
    {
      id: 3,
      title: '22-Fix Electrical Installation Company',
      description: 'A professional website for an electrical installation company with modern UI and excellent user experience.',
      technologies: ['React', 'Tailwind CSS', 'Figma Design'],
      image: projectImg3,
      link: 'https://22-fix.vercel.app/'
    },
    {
      id: 4,
      title: 'Ledgy Media Agency',
      description: 'A moderntech agency, that offers a series of cutting-edge IT solutions, with a dynamic UI/UX.',
      technologies: ['React', 'Tailwind CSS', 'UX Design'],
      image: projectImg4,
      link: 'https://ledgymedia.vercel.app/'
    },
    {
      id: 5,
      title: '22-Fix Solar Energy Solutions',
      description: 'A professional website for a solar energy solutions company with modern UI and excellent user experience.',
      technologies: ['React', 'Tailwind CSS', 'Figma Design'],
      image: projectImg5,
      link: 'https://22-fix-solar.vercel.app/'
    },
    {
      id: 6,
      title: 'Homanol',
      description: 'A professional website for a cooking gas company with modern UI and excellent user experience.',
      technologies: ['JavaScript', 'React', 'Tailwind CSS', 'UX Design'],
      image: projectImg5,
      link: 'https://homanol.vercel.app/'
    }
  ];

  // Sample skills data
  const skills = [
    { name: 'HTML5', level: 95 },
    { name: 'CSS3', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 85 },
    { name: 'Responsive Design', level: 90 },
    { name: 'Git & GitHub', level: 80 },
  ];

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_6get4df', 'template_6il5v4p', form.current, {
        publicKey: '6JehNra3FZoYoSEmU',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Message sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send message. Please try again.');
        },
      );
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  // Handle navigation link click (smooth scroll + close mobile menu)
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMobileMenu();
  };

  // Scroll event listeners
  useEffect(() => {
    const handleScroll = () => {
      // Navbar scroll effect
      setNavbarScrolled(window.scrollY > 100);

      // Active section detection
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
      document.body.style.overflow = 'auto';
    };
  }, []);

  // Close mobile menu on window resize (if screen becomes desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && mobileMenuOpen) {
        closeMobileMenu();
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  return (
    <div className={`portfolio ${darkMode ? 'dark' : 'light'}`}>
      {/* Enhanced Navigation */}
      <nav className={`navbar ${navbarScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="logo">SAMUEL N.C.</div>
          
          {/* Desktop Navigation */}
          <ul className="nav-links">
            <li><a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'home')}>Home</a></li>
            <li><a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'about')}>About</a></li>
            <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'projects')}>Projects</a></li>
            <li><a href="#skills" className={activeSection === 'skills' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'skills')}>Skills</a></li>
            <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'contact')}>Contact</a></li>
          </ul>
          
          <div className="nav-actions">
            <button 
              className="theme-toggle"
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle theme"
            >
              {darkMode ? <MdOutlineLightMode /> : <MdOutlineNightlight />}
            </button>
            
            {/* Burger Menu Button (Mobile only) */}
            <button 
              className="burger-menu"
              onClick={toggleMobileMenu}
              aria-label="Menu"
            >
              {mobileMenuOpen ? <IoClose /> : <RxHamburgerMenu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          <li><a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'home')}>Home</a></li>
          <li><a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'about')}>About</a></li>
          <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'projects')}>Projects</a></li>
          <li><a href="#skills" className={activeSection === 'skills' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'skills')}>Skills</a></li>
          <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'contact')}>Contact</a></li>
        </ul>
      </div>
      
      {/* Overlay for mobile menu */}
      <div className={`overlay ${mobileMenuOpen ? 'visible' : ''}`} onClick={closeMobileMenu}></div>

      {/* Enhanced Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content fade-in">
            <h1>Hi, I'm <span style={{display: 'inline-block'}}>Samuel</span></h1>
            <h2>Frontend Developer</h2>
            <p>I build beautiful, responsive web experiences with modern technologies and attention to detail.</p>
            <div className="cta-buttons">
              <a href="#projects" className="btn primary" onClick={(e) => handleNavClick(e, 'projects')}>View My Work</a>
              <a href="#contact" className="btn secondary" onClick={(e) => handleNavClick(e, 'contact')}>Contact Me</a>
            </div>
          </div>
          <div className="hero-image fade-in">
            <div className="code-snippet">
              <pre>{`// 🚀 interactive dev journey
const samuel = {
  stack: ['React', 'Tailwind', 'JS'],
  design: 'pixel-perfect',
  focus: 'high-performance UI',
  motto: 'clean code, bold design'
};

function buildFuture() {
  return samuel.stack.map(tech => 
    \`✨ \${tech} magic\`
  );
}
// currently shipping: 6+ live projects`}</pre>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title fade-in">About Me</h2>
          <div className="about-content">
            <div className="about-text fade-in">
              <p>
                I'm a passionate frontend developer with 3+ years of experience building 
                modern web applications. I specialize in React and responsive design, 
                creating interfaces that are both beautiful and functional.
              </p>
              <p>
                My approach combines clean code principles with attention to design 
                details, ensuring the applications I build are maintainable and 
                delightful to use across all devices.
              </p>
              <div className="about-details">
                <div className="detail-item fade-in">
                  <span>Name:</span> Nnabuife Samuel
                </div>
                <div className="detail-item fade-in">
                  <span>Email:</span> samzy334@gmail.com
                </div>
                <div className="detail-item fade-in">
                  <span>Location:</span> Lagos State, Nigeria
                </div>
                <div className="detail-item fade-in">
                  <span>Focus:</span> Frontend Development
                </div>
              </div>
            </div>
            <div className="about-image fade-in">
              <div className="image-frame">
                <img src={mypic} alt="Samuel Nnabuife" className="mypic"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title fade-in">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={project.id} className={`project-card fade-in`} style={{animationDelay: `${index * 0.2}s`}}>
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                      View Project
                    </a>
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

      {/* Enhanced Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title fade-in">My Skills</h2>
          <div className="skills-container">
            <div className="skills-list">
              {skills.map((skill, index) => (
                <div key={skill.name} className="skill-item fade-in" style={{animationDelay: `${index * 0.1}s`}}>
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
            <div className="skills-illustration fade-in">
              <div className="code-circle">
                <div className="code-line"></div>
                <div className="code-line"></div>
                <div className="code-line"></div>
                <span className="code-symbol">&lt;/&gt;</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title fade-in">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <div className="info-item fade-in">
                <MdMailOutline />
                <span>samzy334@gmail.com</span>
              </div>
              <div className="info-item fade-in">
                <MdOutlineCall />
                <span>+234 (91) 5703-5164</span>
              </div>
              <div className="info-item fade-in">
                <IoLocationOutline />
                <span>Lagos, Nigeria</span>
              </div>
              <div className="social-links">
                <a href="https://github.com/Samusain" target="_blank" rel="noopener noreferrer" className="fade-in">
                  <BsGithub />
                </a>
                <a href="https://www.linkedin.com/in/samuel-nnabuife-73675127b" target="_blank" rel="noopener noreferrer" className="fade-in">
                  <SlSocialLinkedin />
                </a>
                <a href="https://wa.me/2349157035164" target="_blank" rel="noopener noreferrer" className="fade-in">
                  <BsWhatsapp />
                </a>
              </div>
            </div>
            <form className="contact-form fade-in" ref={form} onSubmit={sendEmail}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input name="name" id="name" type="text" placeholder="David Jonathan" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input name="email" id="email" type="email" placeholder="example@gmail.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="title">Subject</label>
                <input name="title" id="title" type="text" placeholder="We Need Your Service" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" placeholder="Let's discuss a contract..." required></textarea>
              </div>
              <button type="submit" className="btn primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Nnabuife Samuel. All rights reserved.</p>
          <p style={{marginTop: '0.5rem', opacity: '0.7'}}>Built with React and passion</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;