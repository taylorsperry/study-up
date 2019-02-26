import React, { Component } from 'react';
import './scss/_App.scss';
import Begin from './Begin.js';
import Header from './Header.js';
import QuizCard from './QuizCard.js';
import Review from './Review.js';
import End from './End.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      allQuizzes: [],
      availableQuizzes: [],
      currentQuiz: {},
      reviewQuizzes: [],
      numCorrect: 0,
      begin: true,
      reviewEnabled: true,
      endPractice: false
    }
  };

  componentDidMount() {
    fetch("http://memoize-datasets.herokuapp.com/api/v1/TSquizzes")
      .then(response => response.json())
      .then(quizzes => {
        this.setState({
          allQuizzes: quizzes.TSquizzes,
          availableQuizzes: quizzes.TSquizzes,
          currentQuiz: quizzes.TSquizzes[7]
        })
        if (localStorage.hasOwnProperty("available-storage")) {
          let availableQuizzes = JSON.parse(localStorage.getItem("available-storage"));
          this.setState({
            availableQuizzes: availableQuizzes
          })
        } 
        if (localStorage.hasOwnProperty("review-storage")) {
          let reviewQuizzes = JSON.parse(localStorage.getItem("review-storage"));
          this.setState({
            reviewQuizzes: reviewQuizzes
          })
        } 
        if (localStorage.hasOwnProperty("correct-count")) {
          let numCorrect = JSON.parse(localStorage.getItem("correct-count"));
          this.setState({
            numCorrect: numCorrect
          })
        }
      })
      .catch(error => {
        throw new Error(error);
      })
    
  }

  toggleDisplay = () => {
    this.setState({
      begin: false,
    }, () => {
      this.newQuiz();
    })
  }

  toggleReview = () => {
    let reviewEnabled = !this.state.reviewEnabled;
    this.setState({
      reviewEnabled: reviewEnabled
    })
  }

  updateCorrectNum = () => {
    this.setState({
      numCorrect: this.state.numCorrect + 1
    })
    localStorage.setItem("correct-count", JSON.stringify(this.state.numCorrect))
  }

  addToReview = (quiz) => {
    let foundQuiz = this.state.availableQuizzes.find(function(el) {
      return el.id === quiz.id;
    })
    let reviewQuizzes = this.state.reviewQuizzes;
    reviewQuizzes.push(foundQuiz)
    this.setState({
      reviewQuizzes: reviewQuizzes,
    })
    localStorage.setItem("review-storage", JSON.stringify(this.state.reviewQuizzes))
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
    localStorage.setItem("available-storage", JSON.stringify(this.state.availableQuizzes))
  }

  getIndex = () => {
    let max = this.state.availableQuizzes.length;
    return Math.floor(Math.random() * Math.floor(max))
  }

  newQuiz = () => {
    if(this.state.availableQuizzes.length <= 0) {
      this.endPractice();
    } else {
    let randomIndex = this.getIndex()
    this.setState({
      currentQuiz: this.state.availableQuizzes[randomIndex]
    })
  }
  }

  reviewQuizzes = () => {
    if(this.state.reviewEnabled === true) {
    let reviewQuizzes = this.state.reviewQuizzes
    this.setState({
      availableQuizzes: reviewQuizzes
    }, () => {
      this.newQuiz();
    });
  }}

  endPractice = () => {
    this.setState({
      endPractice: true
    })
  }

  reset = () => {
    this.setState({
      begin: true
    })
    localStorage.clear();
    this.componentDidMount();
  }

  render() {
    if(this.state.begin === true) {
      return (
        <div className="App">
          <Header />
          <div className="content-container">
          <section className="quiz-container">
            <Begin 
              toggleDisplay = {this.toggleDisplay}
            />
          </section>
          </div>
        </div>
      )
    } 
    if(this.state.endPractice === true) {
      return (
        <div className="App">
          <Header />
          <div className="content-container">
          <section className="quiz-container">
            <End 
              reset={this.reset}
            />
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
                toggleReview={this.toggleReview}
                currentQuiz={this.state.currentQuiz}
                newQuiz = {this.newQuiz}
                removeQuiz = {this.removeQuiz}
                addToReview={this.addToReview}
                updateCorrectNum={this.updateCorrectNum}
              />
            </article>
          </section>
          <section>
              <Review 
                reviewQuizzes = {this.reviewQuizzes}
                numCorrect = {this.state.numCorrect}
                reviewLength = {this.state.reviewQuizzes.length}
                reset = {this.reset}
              />
          </section>
        </div>
      </div>
    );
  }
}
}

export default App;
