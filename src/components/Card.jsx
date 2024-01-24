

import React, { useState } from 'react';


const styles = {
  card: {
    margin: 20,
    background: '#f5e9f1',
    transition: 'transform 0.3s ease-in-out',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
  },
  heading: {
    background: '#e3b3cb',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
    padding: '0 20px',
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