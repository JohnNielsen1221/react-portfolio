import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
// import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
// import Footer from './components/Footer';

function App() {
  const [navSelected, setNavSelected] = useState("home");

  const renderPage = () => {

    switch (navSelected) {
      case 'about':
        return <About />;
      case 'resume':
        return <Resume />;
      case 'contact':
        return <ContactForm />;
      default:
        return <About />;
    }
  }

  return (
    <div className="back-dark">
      <Nav
        navSelected={navSelected}
        setNavSelected={setNavSelected}
      />
      <main>
        {renderPage()}
      </main>

    </div>
  );
}

export default App;
