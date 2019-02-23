import React, { Component } from "react";

class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <button className="result-button">
        Review the questions you missed
      </button>
    );
    };
}

export default Review