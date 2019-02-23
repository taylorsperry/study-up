import React from 'react';

const CorrectCount = props => {
    return (
        <article className="result-correct">
            <p>You've answered <span className="num-correct"> X </span> of 30 questions correctly.</p>
        </article>
    );
};

export default CorrectCount;