import Card from "../components/Card";

const styles = {
  containerStyle: {
    minHeight: '300px',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '10px',
    opacity: '1'

  },
  linkStyle: {
    display: 'block',
    background: '#f5e9f1',
    textAlign: 'center',
    fontSize: 20,
    padding: '5%'
  }
}


const projects = [
  {
    name: "JINGLE JUDGE",
    description: `Jingle Judge: Naughty or Nice Edition is a full-stack web application designed for managing Santa's list of who's naughty and nice. It allows users to create and manage accounts, categorize actions, and assign actions to children. Built using the MVC paradigm, it includes user authentication and a database connection for data persistence.`,
    anchor: "https://jingle-judge-61334167825d.herokuapp.com/",
    repo: 'https://github.com/wileland/Jingle-Judge'
  },
  {
    name: "WEATHER APP",
    description: `This application is a Weather Dashboard. It was created using javascipt, HTML, and CSS while pulling data from an OpenWeather API. The dashboard will take the user city search, convert city name to latitude and longitude coordinates to then use in the api call. This will return weather for the current day, and the next 5 days with information including:

        temperature
        wind speed
        humidity
        description
        icon
        date`,
    anchor: "https://tatumsterling.github.io/weather-dashboard/",
    repo: 'https://github.com/TatumSterling/weather-dashboard'
  },
  {
    name: "NOTE TAKER",
    description:
      "this is my Note Taker application. This application was designed to allows users to enter new notes and save them to a database. I created it to challenge myself by creating a simple full stack application that utilizes user input and saves notes to view later. I used javascript, Express, CSS, and HTML to bring Note Taker to life!",
    anchor: "https://afternoon-island-28333-7a21086495e7.herokuapp.com/",
    repo: 'https://github.com/TatumSterling/note-taker-app'
  },
  {
    name: 'README GENERATOR',
    description: 'This is my README generator application. This application was designed to generates a professional README.md file for developers. I created it to give developers a reliable resource for creating professional README files with all the necessary contents. I used javascript to develop the README generator, and since this application is only able to run in the terminal, the link below is to view the github repo with more information on how to access application. ',
    anchor: 'https://github.com/TatumSterling/readme-generator',
    repo: 'https://github.com/TatumSterling/readme-generator'
  },
  {
    name: "JAVASCRIPT QUIZ",
    description: 'This is a quick javascript quiz that I developed myself using javascript to manipulate HTML elements dynamically while focusing on using web APIs.' ,
    anchor: 'https://tatumsterling.github.io/javascript-quiz/',
    repo: 'https://github.com/TatumSterling/javascript-quiz'
  },
  {
    name: 'PASSWORD GENERATOR',
    description: 'This is my password generator. To build this application I used simple javascript to ask the user for their input, and based on their answers produce a password that meets their requirements. If you require a strong password, my generator can provide what you need!',
    anchor: 'https://tatumsterling.github.io/password-generator/',
    repo: 'https://github.com/TatumSterling/password-generator'
  }
];



function Projects() {
  return (
    <div style={styles.containerStyle}>
      {projects.map(({ name, description, anchor, repo}, index) => (
        <div  key={index}>
          <Card  name={name} description={description} anchor={anchor} repo={repo}/>
        </div>
      ))}
    </div>
  );
}

export default Projects;
