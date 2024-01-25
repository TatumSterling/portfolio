

// import React, { useState } from 'react';


// const styles = {
//   card: {
//     margin: 30,
//     background: '#f5e9f1',
//     transition: 'transform 0.3s ease-in-out',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     border: '1px solid #4a1e39'
//   },
//   heading: {
//     background: '#e3b3cb',
//     minHeight: 50,
//     lineHeight: 3.5,
//     fontSize: 25,
//     color: 'black',
//     padding: '0 20px',
//     fontWeight: 'bold'
//   },
//   content: {
//     padding: 20,
//   },
// };

// function Card(props) {
//   const [isHovered, setHovered] = useState(false);

//   return (
//     <div
//       style={{
//         ...styles.card,
//         transform: isHovered ? 'scale(1.05)' : 'scale(1)', // Scale the card on hover
//       }}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       <div style={styles.heading}>{props.name}</div>
//       <div style={styles.content}>{props.description}</div>
//       <a href={`"${props.anchor}"`}>visit {props.name}</a>
//       <a href={`"${props.repo}"`}>check out my {props.name} repo!</a>
//     </div>
//   );
// }

// export default Card;

import React, { useState } from 'react';

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-around', // Adjust this as needed
};

const styles = {
  card: {
    flex: '0 1 300px', // Adjust the width of the cards as needed
    margin: 30,
    background: '#f5e9f1',
    transition: 'transform 0.3s ease-in-out',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    border: '1px solid #4a1e39',
  },
  heading: {
    background: '#e3b3cb',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: 25,
    color: 'black',
    padding: '0 20px',
    fontWeight: 'bold',
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
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={styles.containerStyle}>
        <div style={styles.heading}>{props.name}</div>
        <div style={styles.content}>{props.description}</div>
        <a href={`"${props.anchor}"`}>visit {props.name}</a>
        <a href={`"${props.repo}"`}>check out my {props.name} repo!</a>
      </div>
    </div>
  );
}

// function CardContainer(props) {
//   return <div style={containerStyle}>{props.children}</div>;
// }

export default Card;
//   return (
//     <CardContainer>
//       <Card name="Card 1" description="Description for Card 1" anchor="#" repo="#" />
//       <Card name="Card 2" description="Description for Card 2" anchor="#" repo="#" />
//       {/* Add more cards as needed */}
//     </CardContainer>
//   );
// }