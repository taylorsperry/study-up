import React, { Component } from "react";

class QuizCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
        <section>
            <h2 className="question">
              Which of the following array prototype methods does not modify the original array?
            </h2>
            <article className="answer-container">
              <button className="answer">
                .splice()
              </button>
              <button className="answer">
                .sort()
              </button>
              <button className="answer">
                .filter()
              </button>
            </article>
        </section>
    );
    };
}

export default QuizCard