import React from "react";
import CorrectCount from "../CorrectCount";
import { shallow } from "enzyme"

describe("CorrectCount", () => {
  let wrapper;
  let numCorrect = 7;

  beforeEach(() => {
    wrapper = shallow(<CorrectCount 
        numCorrect={numCorrect} 
    />)
  })

  it("should match snapshot when all data is passed correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
})