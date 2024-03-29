// import Section from '../components/Section';
import Navbar from "../components/Navbar";
import Projects from "./Projects";
import Contact from "./Contact";

const styles = {

  image1Style: {
    backgroundImage: "url(/whimsical-flowers.jpg)",
    height: '100vh',
    backgroundRepeat: 'no-repeat',
    position: 'relation',
    opacity: '0.65',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundSize: 'cover'

  },
  image2Style: {
    backgroundImage: "url(/books.jpg)",
    height: '100vh',
    backgroundRepeat: 'no-repeat',
    position: 'relation',
    opacity: '0.75',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundSize: 'cover'

  },
  image3Style: {
    backgroundImage: "url(/crown.jpg)",
    height: '100vh',
    backgroundRepeat: 'no-repeat',
    position: 'relation',
    opacity: '0.55',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundSize: 'cover'

  },
  avatarStyle: {
    maxHeight: "250px",
    maxWidth: "100%",
    borderRadius: "50%", 
    position: 'relative'
  },
  sectionStyle: {
    background: '#2d303b',
    color: '#f5f0d5',
    lineHeight: 2,
    opacity: '1',
    padding: '40px',
    display: 'block',
    fontFamily: 'Akshar, sans-serif',
  },
  insideStyle: {
    position: 'absolute',
    top: '250px',
    background: '#060708',
    color: '#f5f0d5',
    padding: '30px',
    textAlign: 'center',
    width: '100vw',
    fontFamily: 'Akshar, sans-serif',
    fontSize: 30,
  },


};

const info = [
  {
    name: "About Me",
    description: `Hello! My name is Tatum Sterling, and I am 25 years old. I live in San Antonio, Texas,
        and I am an aspiring full stack developer. In my free time, I enjoy reading, and 
        excercising. I decided to pursue web development because 
        I am passionate about software and problem solving. In addition, web development is a rapidly growing field, 
        and I believe that there are many opportunities for career growth. I am confident that I have the skills 
        and commitment to succeed in this field, 
        and I am excited to see what the future holds. Thank you for taking the time to get to know me!`,
  },
  {
    name: "Technologies Known",
    description: `I have experience working with the following technologies: 
        React, 
        Node.js, 
        HTML, 
        CSS, 
        Javascript, 
        JQUERY, 
        express, 
        bulma, 
        bootstrap, 
        MongoDB, 
        MYSQL`,
  },
  {
    name: "Experience",
    description: `
        As a junior web developer with six months of hands-on experience, 
        I have successfully crafted dynamic and responsive full-stack applications that showcase my proficiency 
        in a diverse range of technologies. Leveraging my skills in React, HTML, JavaScript, and CSS, I have created visually
         appealing and user-friendly front-end interfaces. My expertise extends to utilizing jQuery for enhanced client-side interactivity.
        
        On the server side, I have seamlessly integrated MongoDB and MySQL databases, demonstrating a solid grasp of database
         management and design. The incorporation of Node.js has empowered me to build scalable and efficient server-side logic,
          ensuring optimal performance across my applications. Additionally, I have honed my styling capabilities by employing Bootstrap
           and Bulma frameworks, enabling me to design sleek and modern user interfaces.
        
        Throughout this journey, I have consistently delivered high-quality projects, showcasing my ability to tackle challenges
         and meet deadlines. My experience has not only strengthened my technical skills but also instilled in me
          a proactive and collaborative approach to problem-solving. I am enthusiastic about contributing my expertise to innovative
           projects and continuing to evolve as a proficient full-stack developer.`,
  },
];



function Home() {
    return (
      <div className="container">

        <div id="Home" style={styles.image1Style} className="flowers-img">
          <div style={styles.insideStyle}>
            <h1>Tatum Sterling</h1>
            <h2>Junior Web Developer</h2>
          </div>
        </div>
        <div id="about-me" style={styles.sectionStyle} className="about-me">
          <img style={styles.avatarStyle} src="/linkedIn-picture.jpg" alt="avatar" />
            <p>
                Hello! My name is Tatum Sterling, and I am 25 years old. I live in San
                Antonio, Texas, and I am an aspiring full stack developer. In my free
                time, I enjoy reading, and excercising. I decided to pursue web
                development because I am passionate about software and problem
                solving. In addition, web development is a rapidly growing field, and
                I believe that there are many opportunities for career growth. I am
                confident that I have the skills and commitment to succeed in this
                field, and I am excited to see what the future holds. Thank you for
                taking the time to get to know me!
            </p>
        </div>
        
        <div  style={styles.image2Style} className="books-img">
            <div id="portfolio">
                <h2>Projects</h2>
                <Projects />
            </div>
        </div>
        <div id="Resume" style={styles.sectionStyle} className="resume">
          <h2>Resume</h2>
          <a href="/">here</a>
        </div>
        <div id="Contact" style={styles.image3Style} className="crown-img">
          <div >
            <Contact />
          </div>
        </div>
      </div>
    );
  }

export default Home;
