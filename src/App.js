import React from 'react';
import './App.css';
import MinorNav from './minorNav.js';
import MajorNav from './MajorNav.js';
import FontCard from './FontCards.js';

function App() {
  return (
    <div className="App">
      <MinorNav />
      <MajorNav />
      <FontCard />
      <footer className="footer">
        <p> coded by Jinyoung Park | 2019 | Chingu Pre-Work Project</p>
      </footer>
    </div>
  );
}

export default App;
