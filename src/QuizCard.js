import React, { Component } from "react";
import CorrectMsg from './CorrectMsg'; 
import IncorrectMsg from './IncorrectMsg';

class QuizCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayQ: true,
      correctGuess: false,
    };
  }

  checkAnswer = (e) => {
    let guess = e.target.innerText;
    let answer = this.props.currentQuiz.correctAnswer;
    if (guess === answer) {
      this.displayCorrect();
    } else {
      this.displayIncorrect();
    }
  };

  displayCorrect = () => {
    this.setState({
      displayQ: false,
      correctGuess: true,
    })
    this.props.updateCorrectNum();
    this.props.toggleReview();
  }

  displayIncorrect = () => {
    this.setState({
      displayQ: false
    })
    this.props.addToReview(this.props.currentQuiz);
    this.props.toggleReview();
  }

  keepPracticing = (e) => {
    this.setState({
      displayQ: true,
      correctGuess: false
    })
    this.props.removeQuiz(this.props.currentQuiz);
    this.props.toggleReview();
    this.props.newQuiz();
  }
  
  render() {

    if (this.state.displayQ === false && this.state.correctGuess === true) {
      return (
        <article className = "quiz-card">
          <CorrectMsg
            explanation={this.props.currentQuiz.explanation} 
            keepPracticing={this.keepPracticing}
          />
        </article>
      )
    } 
    if (this.state.displayQ === false && this.state.correctGuess === false) {
      return (
        <article className = "quiz-card">
          <IncorrectMsg
            correctAnswer={this.props.currentQuiz.correctAnswer}
            keepPracticing={this.keepPracticing}
            removeQuiz={this.props.removeQuiz}
          />
        </article>
      )
    } else {
    return (
        <section className="quiz-card">
            <h2 className="question">
              {this.props.currentQuiz.question}
            </h2>
            <article className="answer-container">
              <button className="answer" id="a1" onClick={this.checkAnswer}>
                {this.props.shuffledAnswers[0]}
              </button>
              <button className="answer" id="a2" onClick={this.checkAnswer}>
                {this.props.shuffledAnswers[1]}
              </button>
              <button className="answer" id="a3" onClick={this.checkAnswer}>
                {this.props.shuffledAnswers[2]}
              </button>
            </article>
        </section>
      );
    };
  }
}
export default QuizCard