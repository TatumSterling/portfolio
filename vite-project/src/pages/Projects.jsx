import Section from "../components/Section";

const styles = {
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
  },
  {
    name: "NOTE TAKER",
    description:
      "this is my Note Taker application. This application was designed to allows users to enter new notes and save them to a database. I created it to challenge myself by creating a simple full stack application that utilizes user input and saves notes to view later. I used javascript, Express, CSS, and HTML to bring Note Taker to life!",
    anchor: "https://afternoon-island-28333-7a21086495e7.herokuapp.com/",
  },
  {
    name: 'README GENERATOR',
    description: 'This is my README generator application. This application was designed to generates a professional README.md file for developers. I created it to give developers a reliable resource for creating professional README files with all the necessary contents. I used javascript to develop the README generator, and since this application is only able to run in the terminal, the link below is to view the github repo with more information on how to access application. ',
    anchor: 'https://github.com/TatumSterling/readme-generator'
  },
  {
    name: "JAVASCRIPT QUIZ",
    description: 'This is a quick javascript quiz that I developed by myself using javascript to manipulate HTML elements dynamically, and focused on using web APIs. While taking the javascript quiz, the user will be asked a series of questions after clicking the start button. If the user gets the answer correct, the score will increase, if the user gets the answer incorrect, time is deducted from the clock. You will have 60 seconds to complete the quiz! At the end you will have an opportunity to enter your name and score for the next user to see! You may also click on High Scores in the top left corner to see previous user score.',
    anchor: 'https://tatumsterling.github.io/javascript-quiz/'
  },
  {
    name: 'PASSWORD GENERATOR',
    description: 'This is my password generator. To build this application I used simple javascript to ask the user for their input, and based on their answers produce a password that meets their requirements. If you require a strong password, my generator can provide what you need!',
    anchor: 'https://tatumsterling.github.io/password-generator/'
  }
];



function Home() {
  return (
    <div>
      {projects.map(({ name, description, anchor }, index) => (
        <div key={index}>
          <Section name={name} description={description} />
          <a href={anchor} style={styles.linkStyle}>
            Visit {name} project
          </a>
        </div>
      ))}
    </div>
  );
}

export default Home;
