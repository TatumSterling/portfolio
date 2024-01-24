

import React, { useState } from 'react';


const styles = {
  card: {
    margin: 30,
    background: '#f5e9f1',
    transition: 'transform 0.3s ease-in-out',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    border: '1px solid #4a1e39'
  },
  heading: {
    background: '#e3b3cb',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: 25,
    color: 'black',
    padding: '0 20px',
    fontWeight: 'bold'
  },
  content: {
    padding: 20,
  },
};

function Card(props) {
  const [isHovered, setHovered] = useState(false);

  return (
    <div
      style={{
        ...styles.card,
        transform: isHovered ? 'scale(1.05)' : 'scale(1)', // Scale the card on hover
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={styles.heading}>{props.name}</div>
      <div style={styles.content}>{props.description}</div>
      <a href={`"${props.anchor}"`}>visit {props.name}</a>
      <a href={`"${props.repo}"`}>check out my {props.name} repo!</a>
    </div>
  );
}

export default Card;