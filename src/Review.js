import React from "react";
import CorrectCount from './CorrectCount.js'
import StartOver from './StartOver.js'

const Review = props => {
    return (
      <section className="results-container">
        <article>
          <CorrectCount 
            numCorrect={props.numCorrect}/>
        </article>
        <div className="button-container">
          <button className="result-button">x<i className="fas fa-plus-circle"></i></button>
          <label className="result-label"> Review the questions you missed</label>
        </div>
        <StartOver />
      </section>
    );
}

export default Review