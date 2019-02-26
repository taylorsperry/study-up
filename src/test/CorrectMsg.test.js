import React from "react";
import CorrectMsg from "../CorrectMsg";
import { shallow } from "enzyme"

describe("CorrectMsg", () => {
  let wrapper;
  let currentQuiz = {
    "id": 3,
    "question": "If the array 'greeting' has a value of ['Hello', 'World'], and you wanted to return the string 'Hello World', which of the following would you call?",
    "answers": ["greeting.join()", "greeting.concat()", "greeting.join(' ')"],
    "correctAnswer": "greeting.join(' ')",
    "explanation": "Without a separator argument, .join() will return a string with the array’s elements separated by commas; .concat() joins the prototype on which its called with the arguments its passed."
  }

  beforeEach(() => {
    wrapper = shallow(
    <CorrectMsg 
        explanation={currentQuiz.explanation}
    />
    );
  })

  it("should match snapshot when all data is passed correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
})