import React, { Component } from 'react';
import './scss/_App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            StudyUp
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
