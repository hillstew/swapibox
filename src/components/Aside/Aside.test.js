import React from "react";
import { Aside } from "../Aside/Aside";
import { shallow } from "enzyme";

const filmMock = {
  openingCrawl: "It is a dark time for the",
  title: "The Empire Strikes Back",
  year: "1980-05-17"
};

describe("Aside", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<Aside film={filmMock} />);
    expect(wrapper).toMatchSnapshot();
  });
});
