import React from 'react';
import { Header } from './components/header';
import { LandingAboutMe } from './components/landing-about';
import { LandingContact } from './components/landing-contact';
import Collection from './components/collection';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Collection />
      <LandingAboutMe />
      <LandingContact />
    </div>
  );
}

export default App;
