import React from "react";

const Review = props => {
    return (
      <button className="result-button" onClick={props.reviewQuizzes}>
        Review the questions you missed
      </button>
    );
}

export default Review