import React, { Component } from 'react';
import './scss/_App.scss';
import Header from './Header.js';
import QuizCard from './QuizCard.js';
import CorrectCount from './CorrectCount.js';
import Review from './Review.js';
import StartOver from './StartOver.js';

import mockData from './mockData.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      allQuizzes: mockData.quizzes,
      availableQuizzes: mockData.quizzes,
      currentQuiz: mockData.quizzes[7],
      reviewQuizzes: [],
      numCorrect: 0,
    }
  };

  updateCorrectNum = () => {
    this.setState({
      numCorrect: this.state.numCorrect + 1
    })
  }

  addToReview = (quiz) => {
    let foundQuiz = this.state.availableQuizzes.find(function(el) {
      return el.id === quiz.id;
    })
    let reviewQuizzes = this.state.reviewQuizzes;
    reviewQuizzes.push(foundQuiz)
    this.setState({
      reviewQuizzes: reviewQuizzes
    })
    console.log(this.state.reviewQuizzes.length)
  }

  removeQuiz = (quiz) => {
    let foundIndex = this.state.availableQuizzes.findIndex(function(el) {
      return el.id === quiz.id;
    })
    let availableQuizzes = this.state.availableQuizzes;
    availableQuizzes.splice(foundIndex, 1)
    this.setState({
      availableQuizzes: availableQuizzes
    })
  }

  getIndex = () => {
    let max = this.state.availableQuizzes.length;
    return Math.floor(Math.random() * Math.floor(max))
  }

  newQuiz = () => {
    console.log(this.state.availableQuizzes)
    let randomIndex = this.getIndex()
    this.setState({
      currentQuiz: this.state.availableQuizzes[randomIndex]
    })
  }

  // reviewQuizzes = () => {
    // console.log(this.state.reviewQuizzes)
    // let reviewQuizzes = this.state.reviewQuizzes;
  //   this.setState({
  //     availableQuizzes: this.state.reviewQuizzes
  //   });
  //   this.newQuiz();
  // }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="content-container">
          <section className = "quiz-container">
            <article className = "quiz-card">
              <QuizCard 
                currentQuiz={this.state.currentQuiz}
                newQuiz = {this.newQuiz}
                removeQuiz = {this.removeQuiz}
                addToReview={this.addToReview}
                updateCorrectNum={this.updateCorrectNum}
              />
            </article>
          </section>
          <section className="results-container">
              <CorrectCount 
                numCorrect = {this.state.numCorrect}
              />
              <Review 
                reviewQuizzes = {this.reviewQuizzes}
              />
              <StartOver />
          </section>
        </div>
      </div>
    );
  }
}

export default App;
