import React from "react";
import App from "../App";
import { shallow } from "enzyme"

describe("App", () => {
  let wrapper;
  let quiz = {
    "id": 6,
    "question": "On which of the following prototypes can .includes() be called?",
    "answers": [ "Arrays", "Strings", "Arrays and Strings"],
    "correctAnswer": "Arrays and Strings",
    "explanation": "Whether .includes() is called on an array or a string, it takes an argument and will return a boolean."
  }

  let shuffleAnswers = jest.fn();
  let newQuiz = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it("should match snapshot when all data is passed correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should have a proper default state", () => {
    expect(wrapper.state()).toEqual({
      allQuizzes: [],
      availableQuizzes: [],
      currentQuiz: {},
      shuffledAnswers: [],
      reviewQuizzes: [],
      numCorrect: 0,
      begin: true,
      reviewEnabled: true,
      endPractice: false
    })
  })

  it("should change the state of begin when toggleDisplay is called", () => {
    expect(wrapper.state("begin")).toEqual(true);
    wrapper.instance().toggleDisplay();
    expect(wrapper.state("begin")).toEqual(false);
  })

  it("should toggle the state of renewEnabled when toggleReview is called", () => {
    expect(wrapper.state("reviewEnabled")).toEqual(true);
    wrapper.instance().toggleReview();
    expect(wrapper.state("reviewEnabled")).toEqual(false)
  })

  it("should update the state of numCorrect when updateCorrectNum is called", () => {
    expect(wrapper.state("numCorrect")).toEqual(0);
    wrapper.instance().updateCorrectNum();
    expect(wrapper.state("numCorrect")).toEqual(1);
  })

  it("should update the state of reviewQuizzes when addToReview is called", () => {
    expect(wrapper.state("reviewQuizzes")).toHaveLength(0);
    wrapper.instance().addToReview(quiz);
    expect(wrapper.state("reviewQuizzes")).toHaveLength(1);
  })

  it("should update the state of availableQuizzes when removeQuiz is called", () => {
    wrapper.setState({
      availableQuizzes: [{
      "id": 6,
      "question": "On which of the following prototypes can .includes() be called?",
      "answers": [ "Arrays", "Strings", "Arrays and Strings"],
      "correctAnswer": "Arrays and Strings",
      "explanation": "Whether .includes() is called on an array or a string, it takes an argument and will return a boolean."
      }]
    });
    expect(wrapper.state("availableQuizzes")).toHaveLength(1);
    wrapper.instance().removeQuiz(quiz)
    expect(wrapper.state("availableQuizzes")).toHaveLength(0);
  })

  it("should generate a random index number when getIndex is called", () => {
    let num = wrapper.instance().getIndex("answers");
    expect(num).toBeLessThanOrEqual(3)
  })

  it("should update the state of currentQuiz when newQuiz is called", () => {
    wrapper.setState({
        "id": 6,
        "question": "On which of the following prototypes can .includes() be called?",
        "answers": [ "Arrays", "Strings", "Arrays and Strings"],
        "correctAnswer": "Arrays and Strings",
        "explanation": "Whether .includes() is called on an array or a string, it takes an argument and will return a boolean."
    });
    wrapper.instance().newQuiz()
    expect(wrapper.state("currentQuiz.id")).not.toEqual(6)
  })

  it("should update the state of availableQuizzes when beginReview is called", () => {
    wrapper.setState({
      availableQuizzes: [{
      "id": 6,
      "question": "On which of the following prototypes can .includes() be called?",
      "answers": [ "Arrays", "Strings", "Arrays and Strings"],
      "correctAnswer": "Arrays and Strings",
      "explanation": "Whether .includes() is called on an array or a string, it takes an argument and will return a boolean."
      }],
      reviewQuizzes: [ {
        "id": 3,
        "question": "If the array 'greeting' has a value of ['Hello', 'World'], and you wanted to return the string 'Hello World', which of the following would you call?",
        "answers": ["greeting.join()", "greeting.concat()", "greeting.join(' ')"],
        "correctAnswer": "greeting.join(' ')",
        "explanation": "Without a separator argument, .join() will return a string with the array’s elements separated by commas; .concat() joins the prototype on which its called with the arguments its passed."
      }]
    });
    wrapper.instance().beginReview();
    expect(wrapper.state("availableQuizzes")).toEqual(wrapper.state("reviewQuizzes"))
  })

  it("should update the state of endPractice when endPratice is called", () => {
    expect(wrapper.state("endPractice")).toEqual(false);
    wrapper.instance().endPractice();
    expect(wrapper.state("endPractice")).toEqual(true)
  })

  it("should update the state of begin when reset is called", () => {
    expect(wrapper.state("begin")).toEqual(true);
    wrapper.instance().toggleDisplay()
    wrapper.instance().reset();
    expect(wrapper.state("begin")).toEqual(true)
  })

  it("should update the state of begin and endPractice when newPratice is called", () => {
    wrapper.instance().newPractice();
    expect(wrapper.state("endPractice")).toEqual(false);
    expect(wrapper.state("begin")).toEqual(true)
  })
})