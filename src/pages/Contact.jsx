

import React from "react";

const styles = {
    containerStyle: {
        background: '#f5e9f1',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    headerStyle: {
        fontSize: 30,
    },
    paragraphStyle: {
        width: '65%',
        fontSize: 20,
    },
    contactCardStyle: {
        display: 'flex',
        flexDirection: 'column',
        width: '75%',
        alignItems: 'center',
        padding: '10px',
        margin: '10px'
    },
    messageStyle: {
        display: 'flex',
        flexDirection: 'column',
        width: '75%',
        alignItems: 'center',
        paddingTop: '15px',
        paddingRight: '10px',
        paddingBottom: '15px',
        paddingLeft: '10px',
    },
    buttonStyle: {
        margin: '10px',
        background: '#e3b3cb',
        height: '30px'
    }
}
function Contact() {
  return (
    <section style={styles.containerStyle}className="contact-section">
      <h2 style={styles.headerStyle}>Contact Me</h2>
      <p style={styles.paragraphStyle}>If you are interested in working on a project with me, or want to look at some of my other work, you may fill out the informations below, or click the links at the bottom of the page to get connected!
      </p>

      <form style={styles.contactCardStyle}className="contact-form">

        <input style={styles.contactCardStyle} type="text" placeholder="Your Name" required />
        <input style={styles.contactCardStyle} type="email" placeholder="Your Email" required />
        <textarea style={styles.messageStyle} placeholder="Your Message" required></textarea>
        <button style={styles.buttonStyle} type="submit">Send Message</button>
      </form>

      <div className="contact-info">
        <p style={styles.paragraphStyle}>Email: tatumoakley29@hotmail.com</p>

      </div>
    </section>
  );
}

export default Contact;