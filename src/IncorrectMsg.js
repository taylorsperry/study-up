import React from "react"

const IncorrectMsg = props => {
    return (
       <section className="quiz-card">
        <h2 className="incorrect">That's incorrect</h2>
        <p className="explanation">The correct answer was <span className="correct-answer">{props.correctAnswer}
        </span></p>
        <button className="keep-practicing" onClick={props.keepPracticing}>Keep Practicing</button>
       </section> 
    )
}
export default IncorrectMsg