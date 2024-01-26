import React, { useEffect } from 'react';




const styles = {
  navbarStyle: {
    background: '#f7e9dc',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    color: '#000000',
    border: '1px solid #4a1e39',

  },
  navLink: {
    textDecoration: 'none',
    color: '#000000',
    margin: '0 1rem',
    fontSize: '1.2rem',
  },
};



function Navbar({ activeLink, onLinkClick }) {
  // Define handleClick outside of useEffect
  const handleClick = (link, event) => {
    event.preventDefault();

    // Get the target element based on the link
    const targetElement = document.getElementById(link);

    // Scroll to the target element
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
      });
    }

    onLinkClick(link);
  };

  useEffect(() => {
    // Attach any other event handlers or perform setup logic here if needed

    // Clean up logic if needed (componentWillUnmount equivalent)
    return () => {
      // Clean up code here if necessary
    };
  }, [onLinkClick]);

  return (
    <nav style={styles.navbarStyle} className="navbar">
      <a
        href="#Home"
        style={{
          ...styles.navLink,
          fontWeight: activeLink === 'home' ? 'bold' : 'normal',
        }}
        onClick={(e) => handleClick('home', e)}
      >
        Home
      </a>
      <a
        href="#about-me"
        style={{
          ...styles.navLink,
          fontWeight: activeLink === 'about-me' ? 'bold' : 'normal',
        }}
        onClick={(e) => handleClick('about-me', e)}
      >
        About Me
      </a>
      <a
        href="#portfolio"
        style={{
          ...styles.navLink,
          fontWeight: activeLink === 'projects' ? 'bold' : 'normal',
        }}
        onClick={(e) => handleClick('projects', e)}
      >
        Portfolio
      </a>
      <a
        href="#Resume"
        style={{
          ...styles.navLink,
          fontWeight: activeLink === 'resume' ? 'bold' : 'normal',
        }}
        onClick={(e) => handleClick('resume', e)}
      >
        Resume
      </a>
      <a
        href="#Contact"
        style={{
          ...styles.navLink,
          fontWeight: activeLink === 'contact' ? 'bold' : 'normal',
        }}
        onClick={(e) => handleClick('contact', e)}
      >
        Contact Me
      </a>
    </nav>
  );
      }

export default Navbar;


