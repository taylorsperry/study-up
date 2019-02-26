import React from "react";
import StartOver from "../StartOver";
import { shallow } from "enzyme"

describe("StartOver", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<StartOver />)
  })

  it("should match snapshot when all data is passed correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
})