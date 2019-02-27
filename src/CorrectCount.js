import React from 'react';

const CorrectCount = props => {
    return (
        <h3 className="result-correct">You've answered <span className="num-correct">{props.numCorrect}</span> of 30 questions correctly.</h3>
    );
};

export default CorrectCount;