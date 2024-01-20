

const styles = {
  headerStyle: {
    background: '#c3aae3',
  },
  headingStyle: {
    fontSize: '100px',
    textAlign: 'center'
  },
};

// We use JSX curly braces to evaluate the style object

function Header() {
  return (
    <header style={styles.headerStyle} className="header">
      <h1 style={styles.headingStyle}>Welcome</h1>
    </header>
  );
}

export default Header;

