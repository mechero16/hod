// src/App.js
import React from 'react';
import Header from './Header';
import About from './About';
import Education from './Education';
import WorkExperience from './WorkExperience';
import Research from './Research';
import Publications from './Publications';
import Contact from './Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Education />
      <WorkExperience />
      <Research />
      <Publications />
      <Contact />
    </div>
  );
}

export default App;
