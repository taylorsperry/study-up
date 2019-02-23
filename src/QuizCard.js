import React, { Component } from "react";

class QuizCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      correctAnswer: ''
    };
  }

  checkAnswer = (e) => {
    let guess = e.target.innerText;
    let answer = this.props.currentQuiz.correctAnswer;
    if (guess === answer) {
      this.props.displayCorrect();
    } else {
      this.props.displayIncorrect();
    }
  };

  render() {
    return (
        <section className="quiz-card">
            <h2 className="question">
              {this.props.currentQuiz.question}
            </h2>
            <article className="answer-container">
              <button className="answer" onClick={this.checkAnswer}>
                {this.props.currentQuiz.answers[0]}
              </button>
              <button className="answer" onClick={this.checkAnswer}>
                {this.props.currentQuiz.answers[1]}
              </button>
              <button className="answer" onClick={this.checkAnswer}>
                {this.props.currentQuiz.answers[2]}
              </button>
            </article>
        </section>
    );
    };
}

export default QuizCard