const styles = {
  pageStyle: {
    background: '#f2ede4',
    height: '100vh'
  },
  headerStyle: {
    background: "#e3b3cb",
    padding: "0.5%",
  },
  headingStyle: {

    textAlign: "center",
    fontSize: 60,
  },
  subStyle: {
    textAlign: 'center',
    fontSize: 30
  }
};



function Header() {
  return (
        <header style={styles.headerStyle} className="header">
            <h1 style={styles.headingStyle}>Tatum Sterling</h1>
            <h2 style={styles.subStyle}> Junior Web Developer</h2>
        </header>
  );
}

export default Header;
