import Section from '../../components/Section';

const styles = {

}


const info = [
    {
        name: 'About Me',
        description: `Hello! My name is Tatum Sterling, and I am 25 years old. I live in San Antonio, Texas,
        and I am an aspiring full stack developer. In my free time, I enjoy reading, and 
        excercising. I decided to pursue web development because 
        I am passionate about software and problem solving. In addition, web development is a rapidly growing field, 
        and I believe that there are many opportunities for career growth. I am confident that I have the skills 
        and commitment to succeed in this field, 
        and I am excited to see what the future holds. Thank you for taking the time to get to know me!`,
    },
    {
        name: 'Technologies Known',
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
        name: 'Experience',
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
        <div>
            {info.map(({ name, description }, index) => (
                <Section key={index} name={name} description={description} />
            ))}
        </div>
    );
}

export default Home;



