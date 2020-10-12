import React from 'react';
import Header from './../header/Header';
import Project from './../project/Project';
import './App.scss';

function App() {
  return (
    <div className="App">

      <header>
        <div className="header">
          <div className="max-width-container">
            <Header />
          </div>
        </div>
      </header>

      <body>
        <div className="main">
          <div className="max-width-container">
            <Project />
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
