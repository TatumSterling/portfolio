
import React, { useState } from 'react';



const styles = {


  card: {
    minHeight: '300px',
    background: 'rgba(255, 255, 255, 0.2)', /* Adjust the transparency by changing the alpha value */
    borderRadius: '10px',
    padding: '0px',
    backdropFilter: 'blur(10px)', /* Adjust the blur effect as needed */
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '300px',
    textAlign: 'center',
    color: 'black',
    margin: 20,
    fontSize: 18,
    justifyContent: 'space-between',
    fontFamily: 'Akshar, sans-serif',


  },
  heading: {
    background: '#2d303b',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: 15,
    color: 'white',
    padding: '0 20px',
    fontWeight: 'bold',

  },
  content: {
    padding: 20,
  },
  button: {
    padding: '5px',
    background: '#2d303b',
    color: 'white',
    display: 'flex',
    margin: '5px',
    maxWidth: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

function Card(props) {
  const [isHovered, setHovered] = useState(false);

  return (

      <div
        style={{
        ...styles.card,
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}>

          <div style={styles.heading}>{props.name}</div>
          <div style={styles.content}>{props.description}</div>
          <a style={styles.button} href={`${props.anchor}`}>visit {props.name}</a>
          <a style={styles.button} href={`${props.repo}`}>visit repo</a>

      </div>

  );
}


export default Card;
