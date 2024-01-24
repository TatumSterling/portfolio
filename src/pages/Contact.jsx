const styles = {
    containerStyle:{
        padding: '10%',
        background: '#f5e9f1',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold'
      },
      infoStyle: {
        padding: '5%'
      }
    
};

function Contact() {
    return (
        <div style={styles.containerStyle}>
            <div style={styles.infoStyle}>Email: tatumoakley29@hotmail.com</div>
            <div style={styles.infoStyle}>Phone: 210-730-4209</div>
            <a href= 'https://github.com/TatumSterling' style={styles.infoStyle}>Github: TatumSterling</a>
            <div style={styles.infoStyle}>LinkedIn: Tatum Sterling</div>
        </div>
    );
}

export default Contact;