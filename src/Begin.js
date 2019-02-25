import React from "react"

const Begin = props => {
    return (
       <section className="quiz-card">
        <h2 className="correct">Welcome!</h2>
        <p className="explanation">StudyUp is a tool for practicing JavaScript fundamentals.</p>
        <button className="keep-practicing" onClick={props.toggleDisplay}>Let's get started</button>
       </section> 
    )
}
export default Begin