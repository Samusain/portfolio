import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import './Portfolio.css';
import Aurora from '../Aurora/Aurora';
import SpotlightCard from '../SpotlightCard/SpotlightCard';
import TextPressure from '../TextPressure/TextPressure';
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
  const [darkMode, setDarkMode] = useState(true);
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
      link: 'https://insure-sfx.netlify.app/insure',
      featured: true
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

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
      <Aurora/>
      <section id="home" className="hero">
        <div className="container">
          <motion.div className="hero-content fade-in">
            <h1>Hi, I'm <span style={{display: 'inline-block'}}>Samuel</span></h1>
            <h2>Frontend Developer</h2>
            <p>I build beautiful, responsive web experiences with modern technologies and attention to detail.</p>
            <motion.div className="cta-buttons">
              <a href="#projects" className="btn primary" onClick={(e) => handleNavClick(e, 'projects')}>My Work</a>
              <a href="#contact" className="btn secondary" onClick={(e) => handleNavClick(e, 'contact')}>Contact Me</a>
            </motion.div>
          </motion.div>
          <motion.div 
            className="hero-image fade-in"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="code-snippet">
              <pre>{`// interactive dev journey
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
          </motion.div>
        </div>
      </section>
      {/* Enhanced About Section */}
      <section id="about" className="about">
        <div className="container">
          <motion.h2 
            className="section-title fade-in"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            About Me
          </motion.h2>
          <motion.div 
            className="about-content"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="about-text fade-in" variants={itemVariants}>
              <p>
                I'm a passionate frontend developer with 3+ years of experience building 
                modern web applications. I specialize in creating responsive, interactive, 
                and visually stunning user interfaces that engage and delight users.
              </p>
              <p>
                My journey in web development started with a curiosity about how things work. 
                Today, I combine technical expertise with creative design thinking to deliver 
                exceptional digital products.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new design trends, contributing 
                to open-source projects, or sharing knowledge with the developer community.
              </p>
            </motion.div>
            <motion.div className="about-image fade-in" variants={itemVariants}>
              <img src={mypic} alt="Samuel" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <motion.h2 
            className="section-title fade-in"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Featured Projects
          </motion.h2>
          
          {/* Featured Project */}
          <motion.div 
            className="featured-project fade-in"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SpotlightCard spotlightColor="rgba(147, 141, 171, 0.4)">
              <div className="featured-project-content">
                <div className="featured-image">
                  <img src={projectImg} alt="Insure Project" />
                </div>
                <div className="featured-text">
                  <h3>Insure with Theme Switcher</h3>
                  <p>A responsive insurance platform featuring a sophisticated theme switcher, built with React and Tailwind CSS. This project showcases modern design patterns and smooth user interactions.</p>
                  <div className="tech-tags">
                    {['React', 'Tailwind CSS', 'JavaScript', 'Responsive Design'].map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <a href="https://insure-sfx.netlify.app/insure" target="_blank" rel="noopener noreferrer" className="project-link">
                    View Project →
                  </a>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Other Projects Grid */}
          <motion.div 
            className="projects-grid fade-in"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.slice(1).map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <SpotlightCard spotlightColor="rgba(147, 141, 171, 0.3)">
                  <div className="project-card">
                    <div className="project-image">
                      <img src={project.image} alt={project.title} />
                    </div>
                    <div className="project-info">
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <div className="tech-tags">
                        {project.technologies.map(tech => (
                          <span key={tech} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                        View Project →
                      </a>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <motion.h2 
            className="section-title fade-in"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Skills & Expertise
          </motion.h2>
          <motion.div 
            className="skills-grid fade-in"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skills.map((skill) => (
              <motion.div key={skill.name} className="skill-item" variants={itemVariants}>
                <SpotlightCard spotlightColor="rgba(147, 141, 171, 0.25)">
                  <div className="skill-content">
                    <h3>{skill.name}</h3>
                    <div className="skill-bar">
                      <motion.div 
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <motion.h2 
            className="section-title fade-in"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Get In Touch
          </motion.h2>
          <motion.div 
            className="contact-content"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="contact-info" variants={itemVariants}>
              <div className="info-item">
                <MdMailOutline className="icon" />
                <div>
                  <h3>Email</h3>
                  <p>samuel@example.com</p>
                </div>
              </div>
              <div className="info-item">
                <IoLocationOutline className="icon" />
                <div>
                  <h3>Location</h3>
                  <p>Your City, Country</p>
                </div>
              </div>
              <div className="info-item">
                <MdOutlineCall className="icon" />
                <div>
                  <h3>Phone</h3>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
            </motion.div>

            <motion.form 
              ref={form} 
              onSubmit={sendEmail} 
              className="contact-form"
              variants={itemVariants}
            >
              <div className="form-group">
                <input 
                  type="text" 
                  name="user_name" 
                  placeholder="Your Name" 
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  name="user_email" 
                  placeholder="Your Email" 
                  required 
                />
              </div>
              <div className="form-group">
                <textarea 
                  name="message" 
                  placeholder="Your Message" 
                  rows="5" 
                  required 
                ></textarea>
              </div>
              <button type="submit" className="btn primary">Send Message</button>
            </motion.form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="social-links">
              <a href="#" className="social-icon" aria-label="LinkedIn">
                <SlSocialLinkedin />
              </a>
              <a href="#" className="social-icon" aria-label="GitHub">
                <BsGithub />
              </a>
              <a href="#" className="social-icon" aria-label="WhatsApp">
                <BsWhatsapp />
              </a>
            </div>
            <p>&copy; 2024 Samuel N.C. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
