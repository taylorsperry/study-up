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
          <button className="result-button">Review the questions you missed</button>
        <StartOver />
      </section>
    );
}

export default Review