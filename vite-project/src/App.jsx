import React, { useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [activeLink, setActiveLink] = useState('home');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const renderComponent = () => {
    switch (activeLink) {
      case 'home':
        return <Home />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Header />
      <Navbar activeLink={activeLink} onLinkClick={handleLinkClick} />
      {renderComponent()}
    </div>
  );
}

export default App;