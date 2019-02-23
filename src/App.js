import React, { Component } from 'react';
import './scss/_App.scss';
import Header from './Header.js';
import QuizCard from './QuizCard.js';
import CorrectMsg from './CorrectMsg';
import CorrectCount from './CorrectCount.js';
import Review from './Review.js';
import StartOver from './StartOver.js';

import mockData from './mockData.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      allQuizzes: mockData.quizzes,
      currQuiz: mockData.quizzes[7],
      displayQ: true,
      correctGuess: true
    }
  };

  displayCorrect = () => {
    this.setState({
      displayQ: false,
      correctGuess: true
    });
    console.log(true)
  }

  displayIncorrect = () => {
    this.setState({
      displayQ: false
    });
    console.log(false)
  }

  keepPracticing = () => {
    this.setState({
      displayQ: true,
      correctGuess: false
    })
  }

  render() {
    if (this.state.displayQ === false && this.state.correctGuess === true) {
      console.log('displayQ is false')
      return (
        <div className="App">
        <Header />
        <div className="content-container">
          <section className = "quiz-container">
            <article className = "quiz-card">
              <CorrectMsg
                explanation={this.state.currQuiz.explanation} 
                keepPracticing={this.keepPracticing}
              />
            </article>
          </section>
          <section className="results-container">
              <CorrectCount />
              <Review />
              <StartOver />
          </section>
        </div>
      </div>
      )
    } else {
    return (
      <div className="App">
        <Header />
        <div className="content-container">
          <section className = "quiz-container">
            <article className = "quiz-card">
              <QuizCard 
                currentQuiz={this.state.currQuiz}
                displayCorrect={this.displayCorrect}
                displayIncorrect={this.displayIncorrect}
              />
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
}

export default App;
