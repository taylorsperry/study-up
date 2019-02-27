import React from 'react';

const StartOver = props => {
    return (
        <button className="result-button" onClick={props.reset}>
            Start Over
        </button>
        
    );
};

export default StartOver;