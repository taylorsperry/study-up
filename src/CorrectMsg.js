import React from "react"

const CorrectMsg = props => {
    return (
       <section className="quiz-card">
        <h2 className="correct">That's right!</h2>
        <p className="explanation">{props.explanation}</p>
        <button className="keep-practicing" onClick={props.keepPracticing}>Keep Practicing</button>
       </section> 
    )
}
export default CorrectMsg