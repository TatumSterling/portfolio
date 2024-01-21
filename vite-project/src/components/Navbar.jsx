const styles = {
    navbarStyle: {
      background: '#f7e9dc',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      color: '#fff',


    },
    navLink: {
      textDecoration: 'none',
      color: '#000000',
      margin: '0 1rem',
      fontSize: '1.2rem',
    },
  };
  
  function Navbar() {
    return (
      <nav style={styles.navbarStyle} className="navbar">
        <a href="/" style={styles.navLink}>Home</a>
        <a href="/Projects" style={styles.navLink}>Projects</a>
        <a href="/Contact" style={styles.navLink}>Contact Me</a>
      </nav>
    );
  }

  export default Navbar; 