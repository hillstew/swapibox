import React from "react";
import Main from "../Main/Main";
import { shallow } from "enzyme";

describe("Main", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<Main />);
    expect(wrapper).toMatchSnapshot();
  });
});
