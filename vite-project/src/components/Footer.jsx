const styles = {
    footerStyle: {
        background: '#f7e9dc',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        color: '#000000',
        paddingLeft: '20%',
        paddingRight: '20%'
    },
    footerLink: {
        textDecoration: 'none',
        color: '#000000',
        margin: '0 1rem',
        fontSize: '1.2rem',
      },
}

function Footer() {
    return (
        <footer style = {styles.footerStyle}>
            <a href="https://www.linkedin.com/in/tatum-sterling-584273256?utm_source=share&utm_cam-paign=share_via&utm_content=profile&utm_medium=ios_app" style={styles.footerLink}>LinkedIn</a>
            <a href="https://github.com/TatumSterling" style={styles.footerLink}>Github</a>
        </footer>
    );
}

export default Footer;