import React from "react";
import Card from "../Card/Card";
import { shallow } from "enzyme";

const mockSubject = {
  name: "T-16 skyhopper",
  model: "T-16 skyhopper",
  class: "repulsorcraft",
  passengers: "1"
};

const mockView = "vehicles";
const mockKey = mockSubject.name;

describe("Card", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(
      <Card subject={mockSubject} view={mockView} key={mockKey} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
