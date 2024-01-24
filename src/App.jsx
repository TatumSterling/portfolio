import { useState } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from '../components/Footer';

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
      <Footer />
    </div>
  );
}

export default App;