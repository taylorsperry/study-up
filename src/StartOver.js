import React from 'react';

const StartOver = props => {
    return (
        <div className="button-container">
            <button className="result-button">
                x<i className="fas fa-plus-circle"></i>
            </button>
            <label className="result-label"> Start Over</label>
        </div>
    );
};

export default StartOver;