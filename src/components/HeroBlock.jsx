import React, { useState, useEffect } from 'react';
import "../style/heroblock.css";

const HeroBlock = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {    
    const handleScroll = () => {
      // Handle navbar background
      const scrolled = window.scrollY > 10;
      setIsScrolled(scrolled);
      
      // Get total scrollable height
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      const scrollMax = documentHeight - windowHeight;

      // Log scroll positions
      console.log('Current scroll position:', scrollPosition);
      console.log('Maximum scroll position:', scrollMax);
      console.log('Is at bottom:', Math.ceil(scrollPosition) >= Math.floor(scrollMax));

      // Handle active section
      const sections = ['hero', 'intro', 'projects', 'contact'];
      const currentPosition = window.scrollY + 150;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            currentPosition >= offsetTop && 
            currentPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
          // Set active to 'contact' if we're at the bottom of the page
          if (Math.ceil(scrollPosition) >= Math.floor(scrollMax)) {
            setActiveSection('contact');
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section, event) => {
    event.preventDefault(); // Prevent default anchor behavior
    setActiveSection(section);
    
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const isAtBottom = () => {
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY;
    const scrollMax = documentHeight - windowHeight;
    
    return Math.ceil(scrollPosition) >= Math.floor(scrollMax);
  };

  return (
    <div className="container">
      {/* Navbar */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="brand">iryna healey.</div>
        <div className="nav-links">
          <a 
            href="#hero" 
            className={`nav-link ${activeSection === 'hero' ? 'active' : ''}`}
            onClick={(e) => handleNavClick('hero', e)}
          >
            Home
          </a>
          <a 
            href="#intro" 
            className={`nav-link ${activeSection === 'intro' ? 'active' : ''}`}
            onClick={(e) => handleNavClick('intro', e)}
          >
            About Me
          </a>
          <a 
            href="#projects" 
            className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
            onClick={(e) => handleNavClick('projects', e)}
          >
            Projects
          </a>
          <a 
            href="#contact" 
            className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={(e) => handleNavClick('contact', e)}
          >
            Contact
          </a>
        </div>
        <a 
          href="mailto:irynahealey@gmail.com"
          className={`nav-link-right ${activeSection === 'contact' ? 'active' : ''}`}
          onClick={(e) => handleNavClick('contact', e)}
        >
          Let's talk
        </a>
      </nav>

      {/* Hero Section */}
      <div id="hero" className="hero">
        <p className="subtitle-hero">
          Design is not just what it looks like, but
        </p>
        <h1 className="title-hero">how it feels</h1>
        <p className="description-hero">
          create experiences that speak to the heart
        </p>
        <div className="scroll" onClick={(e) => handleNavClick('intro', e)} role="button" tabIndex={0}>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="122" viewBox="0 0 50 122" fill="none">
            <path className="scroll-arrow" d="M24.6464 105.354C24.8417 105.549 25.1583 105.549 25.3535 105.354L28.5355 102.172C28.7308 101.976 28.7308 101.66 28.5355 101.464C28.3403 101.269 28.0237 101.269 27.8284 101.464L25 104.293L22.1716 101.464C21.9763 101.269 21.6597 101.269 21.4645 101.464C21.2692 101.66 21.2692 101.976 21.4645 102.172L24.6464 105.354ZM24.5 -2.18557e-08L24.5 105L25.5 105L25.5 2.18557e-08L24.5 -2.18557e-08Z" fill="white"/>
            <path className="scroll-circle" d="M33.5 74.5487C42.5594 77.9804 49 86.7381 49 97C49 110.255 38.2548 121 25 121C11.7452 121 1 110.255 1 97C1 86.7381 7.44057 77.9804 16.5 74.5487" stroke="white"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeroBlock;