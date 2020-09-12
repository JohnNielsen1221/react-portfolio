import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
// import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
// import Resume from './components/Resume';


function App() {
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
        <About></About>
        ) : (
        <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
