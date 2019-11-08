import React from "react";
import { Header } from "./components/header/header";
import Collection from "./components/collection/collection";
import { LandingAboutMe } from "./components/landing-aboutme/landing-aboutme";
import { LandingContact } from "./components/landing-contact/landing-contact";

import "./App.css";

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
