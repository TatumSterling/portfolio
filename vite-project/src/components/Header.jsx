const styles = {
  pageStyle: {
    background: "#f2ede4",
    height: "100vh",
  },
  headerStyle: {
    background: "#e3b3cb",
    padding: "3%",
  },
  headingStyle: {
    textAlign: "center",
    fontSize: 60,
  },
  subStyle: {
    textAlign: "center",
    fontSize: 30,
  },
  imageStyle: {
    position: 'absolute',
    left: '20%',
    maxHeight: '250px',
    maxWidth: '100%',
    borderRadius: '50%', // Optional: Adds a circular border to the image
  },
};

function Header() {
  return (
    <header style={styles.headerStyle} className="header">
      <img
        src="linkedIn-picture.jpg" // Replace with the URL of your image
        alt="Profile-picture" // Replace with your name or any relevant alt text
        style={styles.imageStyle}
      />
      <div></div>
      <h1 style={styles.headingStyle}>Tatum Sterling</h1>
      <h2 style={styles.subStyle}> Junior Web Developer</h2>
    </header>
  );
}

export default Header;
