import React from "react";
import End from "../End";
import { shallow } from "enzyme"

describe("End", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<End />)
  })

  it("should match snapshot when all data is passed correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
})