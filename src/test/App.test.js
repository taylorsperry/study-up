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

  it.skip("should save reviewQuizzes to local storage", () => {

  })

  it.skip("should update the state of availableQuizzes when removeQuiz is called", () => {
    let availableQuizzes = [{
      "id": 6,
      "question": "On which of the following prototypes can .includes() be called?",
      "answers": [ "Arrays", "Strings", "Arrays and Strings"],
      "correctAnswer": "Arrays and Strings",
      "explanation": "Whether .includes() is called on an array or a string, it takes an argument and will return a boolean."
    }];
    expect(wrapper.state("availableQuizzes")).toHaveLength(1);
    wrapper.instance().removeQuiz(quiz)
    expect(wrapper.state("availableQuizzes")).toHaveLength(0);
  })

  it("should generate a random index number when getIndex is called", () => {
    let max = 10;
    let num = wrapper.instance().getIndex();
    expect(num).toBeLessThanOrEqual(10)
  })

  it.skip("should update the state of currentQuiz when newQuiz is called", () => {
    expect(wrapper.state("currentQuiz")).toEqual({})
  })

  it.skip("should update the state of availableQuizzes when reviewQuizzes is called", () => {

  })

  it("should update the state of endPractice when endPratice is called", () => {
    expect(wrapper.state("endPractice")).toEqual(false);
    wrapper.instance().endPractice();
    expect(wrapper.state("endPractice")).toEqual(true)
  })

  it("should update the state of begin when reset is called", () => {
    // expect(wrapper.state("begin")).toEqual(false);
    wrapper.instance().reset();
    expect(wrapper.state("begin")).toEqual(true)
  })

  it.skip("should update the state of begin and endPractice when newPratice is called", () => {
    wrapper.instance().endPractice();
    expect(wrapper.state("endPractice")).toEqual(false);
    expect(wrapper.state("begin")).toEqual(true)
  })

})