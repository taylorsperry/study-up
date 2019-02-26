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
          <button disabled={props.reviewLength <= 0} className="result-button" onClick={props.reviewQuizzes}>Review the questions you missed</button>
        <StartOver 
          reset={props.reset}
        />
      </section>
    );
}

export default Review