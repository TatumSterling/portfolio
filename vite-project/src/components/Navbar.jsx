
import React from 'react';

const styles = {
  navbarStyle: {
    background: '#f7e9dc',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    color: '#000000',
  },
  navLink: {
    textDecoration: 'none',
    color: '#000000',
    margin: '0 1rem',
    fontSize: '1.2rem',
  },
};

function Navbar({ activeLink, onLinkClick }) {
  const handleClick = (link, event) => {
    event.preventDefault();
    onLinkClick(link);
  };

  return (
    <nav style={styles.navbarStyle} className="navbar">
      <a
        href="/"
        style={{
          ...styles.navLink,
          fontWeight: activeLink === 'home' ? 'bold' : 'normal',
        }}
        onClick={(e) => handleClick('home', e)}
      >
        Home
      </a>
      <a
        href="/Projects"
        style={{
          ...styles.navLink,
          fontWeight: activeLink === 'projects' ? 'bold' : 'normal',
        }}
        onClick={(e) => handleClick('projects', e)}
      >
        Portfolio
      </a>
      <a
        href="/Resume"
        style = {{
          ...styles.navLink,
          fontWeight: activeLink === 'resume' ? 'bold' : 'normal',
        }}
        onClick={(e) => handleClick('resume', e)}
        >
        Resume
      </a>
      <a
        href="/Contact"
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