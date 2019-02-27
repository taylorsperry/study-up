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

  it("should call checkAnswer when an answer button is clicked", () => {
    let spy = jest.spyOn(wrapper.instance(), 'checkAnswer');
    wrapper.find("#a1").simulate("click");
    expect(spy).toHaveBeenCalled()
  })

  it.skip("should call displayCorrect if the correct answer is clicked", () => {
    
  })

  it.skip("should call displayIncorrect if an incorrect answer is clicked", () => {

  })
})