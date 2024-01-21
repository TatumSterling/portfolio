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
    fontSize: "100px",
    textAlign: "center",
    font: "",
  },
};



function Header() {
  return (
        <header style={styles.headerStyle} className="header">
            <h1 style={styles.headingStyle}>Tatum Sterling</h1>
        </header>
  );
}

export default Header;
