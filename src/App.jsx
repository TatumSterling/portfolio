


import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';

const App = () => {
  const [activeLink, setActiveLink] = useState('home');

  const handleLinkClick = (link) => {
    setActiveLink(link);

    // Scroll logic can be handled here if the target elements are in this component
    // Otherwise, pass a callback to the Navbar component to handle scrolling
  };

  return (
    <div>
      {/* Render the Navbar component with the callback for scrolling */}
      <Navbar activeLink={activeLink} onLinkClick={handleLinkClick} />
      
      {/* Render the Home component */}
      <Home activeLink={activeLink} />
    </div>
  );
};

export default App;