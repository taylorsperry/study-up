import React from "react";
import QuizCard from "../QuizCard";
import { shallow } from "enzyme"

describe("QuizCard", () => {
  let wrapper;
  let currentQuiz = {
    "id": 3,
    "question": "If the array 'greeting' has a value of ['Hello', 'World'], and you wanted to return the string 'Hello World', which of the following would you call?",
    "answers": ["greeting.join()", "greeting.concat()", "greeting.join(' ')"],
    "correctAnswer": "greeting.join(' ')",
    "explanation": "Without a separator argument, .join() will return a string with the array’s elements separated by commas; .concat() joins the prototype on which its called with the arguments its passed."
  };

  let mockFunc = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
        <QuizCard 
            toggleReview={mockFunc}
            currentQuiz={currentQuiz}
            newQuiz={mockFunc}
            removeQuiz={mockFunc}
            addToReview={mockFunc}
            updateCorrectNum ={mockFunc}
        />)
  })

  it("should match snapshot when all data is passed correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
})