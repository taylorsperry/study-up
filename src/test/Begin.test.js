import React from "react";
import Begin from "../Begin";
import { shallow } from "enzyme"

describe("Begin", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Begin />)
  })

  it("should match snapshot when all data is passed correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
})