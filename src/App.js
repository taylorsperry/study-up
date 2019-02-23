import React, { Component } from 'react';
import './scss/_App.scss';
import Header from './Header.js';
import QuizCard from './QuizCard.js';
import CorrectCount from './CorrectCount.js';
import Review from './Review.js';
import StartOver from './StartOver.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="content-container">
          <section className = "quiz-container">
            <article className = "quiz-card">
              <QuizCard />
            </article>
          </section>
          <section className="results-container">
              <CorrectCount />
              <Review />
              <StartOver />
          </section>
        </div>
      </div>
    );
  }
}

export default App;
