import React from "react";
import Review from "../Review";
import { shallow } from "enzyme"

describe("Review", () => {
  let wrapper;
  let currentQuiz = {
    "id": 3,
    "question": "If the array 'greeting' has a value of ['Hello', 'World'], and you wanted to return the string 'Hello World', which of the following would you call?",
    "answers": ["greeting.join()", "greeting.concat()", "greeting.join(' ')"],
    "correctAnswer": "greeting.join(' ')",
    "explanation": "Without a separator argument, .join() will return a string with the array’s elements separated by commas; .concat() joins the prototype on which its called with the arguments its passed."
  };
  let reviewQuizzes = [{
    "id": 4,
    "question": "Which of the following array prototype methods does not modify the original array?",
    "answers": [".splice()", ".sort()", ".filter()"],
    "correctAnswer": ".filter()",
    "explanation": ".sort() rearranges the order of the array. .filter() returns a new array based on the criteria it’s passed."
  },
  {
    "id": 5,
    "question": "What happens if you don’t pass two elements for comparison through the .sort() method?",
    "answers": [".sort() will return a copy of the original array", ".sort() will return undefined", ".sort() will rearrange the elements according to their unicode code point values"],
    "correctAnswer": ".sort() will rearrange the elements according to their unicode code point values",
    "explanation": ".sort() can take a compare function, which itself takes two elements to compare."
  }];
  let numCorrect = 7;
  let mockFunc = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
    <Review 
        reviewQuizzes={reviewQuizzes}
        numCorrect={numCorrect}
        reviewLength={reviewQuizzes.length}
        reset={mockFunc}
    />
    )
  });
  
  it("should match snapshot when all data is passed correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
})
