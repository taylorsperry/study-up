import React from "react"

const IncorrectMsg = props => {
    return (
       <section className="quiz-card">
        <h2 className="correct">That's incorrect</h2>
        <p className="explanation">The correct answer was {props.correctAnswer}</p>
        <button className="keep-practicing" onClick={props.keepPracticing}>Keep Practicing</button>
       </section> 
    )
}
export default IncorrectMsg