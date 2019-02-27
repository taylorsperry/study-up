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
  let quiz = {
    "id": 8,
    "question": "What argument does the .filter() method require?", 
    "answers": ["A current element", "None", "A callback function"],
    "correctAnswer": "A callback function",
    "explanation": "Any elements that meet the criteria of the callback function will be returned to the new array. If no elements match the criteria, .filter() will return an empty array."
  }
  let shuffledAnswers = ["A current element", "None", "A callback function"]
  let mockFunc = jest.fn();
  let mockEvent = { target: {}};
  let checkAnswer = jest.fn();
  let displayCorrect = jest.fn();
  let displayIncorrect = jest.fn();
  const keepPracticing = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
        <QuizCard 
            toggleReview={mockFunc}
            currentQuiz={currentQuiz}
            newQuiz={mockFunc}
            removeQuiz={mockFunc}
            addToReview={mockFunc}
            updateCorrectNum ={mockFunc}
            shuffledAnswers={shuffledAnswers}
            keepPracticing={keepPracticing}
        />)
  })

  it("should match snapshot when all data is passed correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should have a proper default state", () => {
    expect(wrapper.state()).toEqual({
      displayQ: true,
      correctGuess: false
    })
  })

  it.skip("should call checkAnswer when an answer button is clicked", () => {
    wrapper.find("#a1").simulate("click", mockEvent);
    expect(checkAnswer).toHaveBeenCalled()
  })

  it.skip("should call displayCorrect if the correct answer is clicked", () => {
    wrapper.find("#a1").simulate("click", mockEvent);
    let guess = "greeting.join()";
    let answer = "greeting.join()";
    wrapper.find("#a1").simulate("click", mockEvent);
    expect(checkAnswer).toHaveBeenCalled();
    expect(displayCorrect).toHaveBeenCalled();
  })

  it.skip("should call displayIncorrect if an incorrect answer is clicked", () => {
    wrapper.find("#a1").simulate("click", mockEvent);
    let guess = "greeting.join()";
    let answer = "none";
    wrapper.find("#a1").simulate("click", mockEvent);
    expect(displayIncorrect).toHaveBeenCalled();
    expect(displayCorrect).toHaveBeenCalled();
  })

  it("should update state when keepPracticing is called", () => {
    expect(wrapper.state("displayQ")).toEqual(true);
    expect(wrapper.state("correctGuess")).toEqual(false);
    wrapper.instance().displayCorrect()
    wrapper.instance().keepPracticing()
    expect(wrapper.state("displayQ")).toEqual(true);
    expect(wrapper.state("correctGuess")).toEqual(false);
  })
})