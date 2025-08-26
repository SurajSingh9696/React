import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import { FiExternalLink } from 'react-icons/fi';
import './Portfolio.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Section detection logic
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-featured online store with payment integration and inventory management.',
      tags: ['React', 'Node.js', 'MongoDB'],
      link: '#',
      image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 2,
      title: 'Health Tracking App',
      description: 'Mobile application for tracking fitness metrics and nutrition.',
      tags: ['React Native', 'Firebase', 'Redux'],
      link: '#',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 3,
      title: 'Data Visualization Dashboard',
      description: 'Interactive dashboard for analyzing large datasets with real-time updates.',
      tags: ['D3.js', 'Python', 'AWS'],
      link: '#',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    }
  ];

  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 95 },
    { name: 'CSS/Sass', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'UI/UX Design', level: 75 },
    { name: 'Python', level: 70 }
  ];

  return (
    <div className="portfolio-container">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'open' : ''}`}>
        <div className="nav-container">
          <a href="#home" className="logo">PORTFOLIO</a>
          <div className={`nav-links ${menuOpen ? 'show' : ''}`}>
            <a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a>
            <a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a>
            <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a>
            <a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a>
            <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
          </div>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="greeting">Hi, I'm</span>
            <span className="name">Alex Johnson</span>
            <span className="title">Frontend Developer</span>
          </h1>
          <p className="hero-description">
            I build exceptional digital experiences with modern web technologies.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn primary">View My Work</a>
            <a href="#contact" className="btn secondary">Contact Me</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-wrapper">
            <div className="glow"></div>
            <div className="profile-image"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="section-header">
          <h2>About Me</h2>
          <div className="divider"></div>
        </div>
        <div className="about-content">
          <div className="about-text">
            <h3>Who am I?</h3>
            <p>
              I'm a passionate frontend developer with 5+ years of experience creating responsive,
              user-friendly web applications. I specialize in React and modern JavaScript ecosystems.
            </p>
            <p>
              My approach combines technical expertise with an eye for design, resulting in
              applications that are both functional and visually appealing.
            </p>
            <div className="about-details">
              <div className="detail-item">
                <span className="detail-label">Name:</span>
                <span className="detail-value">Alex Johnson</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Email:</span>
                <span className="detail-value">alex@example.com</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">From:</span>
                <span className="detail-value">San Francisco, CA</span>
              </div>
            </div>
          </div>
          <div className="about-stats">
            {[5, 42, 100].map((stat, index) => (
              <div className="stat-card" key={index}>
                <div className="stat-number">{stat}+</div>
                <div className="stat-label">
                  {index === 0 ? 'Years Experience' : 
                   index === 1 ? 'Projects Completed' : 'Happy Clients'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="section-header">
          <h2>My Projects</h2>
          <div className="divider"></div>
          <p className="section-subtitle">
            Here are some of my recent works. Each project was carefully crafted to solve specific problems.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map(project => (
            <div className="project-card" key={project.id}>
              <div className="project-image" style={{ backgroundImage: `url(${project.image})` }}>
                <div className="project-overlay">
                  <a href={project.link} className="project-link">
                    <FiExternalLink />
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="section-header">
          <h2>My Skills</h2>
          <div className="divider"></div>
          <p className="section-subtitle">
            I've worked with a variety of technologies in the web development world.
          </p>
        </div>
        <div className="skills-container">
          <div className="skills-list">
            {skills.map((skill, index) => (
              <div className="skill-item" key={index}>
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percent">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                    data-percent={skill.level}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <div className="divider"></div>
          <p className="section-subtitle">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <div className="info-content">
                <h4>Email</h4>
                <p>alex@example.com</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">
                <FaLinkedin />
              </div>
              <div className="info-content">
                <h4>LinkedIn</h4>
                <p>linkedin.com/in/alexjohnson</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">
                <FaGithub />
              </div>
              <div className="info-content">
                <h4>GitHub</h4>
                <p>github.com/alexjohnson</p>
              </div>
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
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn primary">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="social-links">
            <a href="#"><FaGithub /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaTwitter /></a>
          </div>
          <p className="copyright">
            &copy; {new Date().getFullYear()} Alex Johnson. All rights reserved.
          </p>
          <a href="#home" className="back-to-top">
            <HiOutlineChevronDoubleUp />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;