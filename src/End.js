import React from "react"

const End = props => {
    return (
       <section className="quiz-card">
        <h2 className="correct">Great job!</h2>
        <p className="explanation">You've finished practicing JavaScript fundamentals ... for now.</p>
        <button className="keep-practicing" onClick={props.newPractice}>Review again</button>
       </section> 
    )
}
export default End