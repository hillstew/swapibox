import React from "react";
import CardContainer from "../CardContainer/CardContainer";
import { shallow } from "enzyme";

const mockPeople = [];
const mockPlanets = [];
const mockVehicles = [
  {
    class: "wheeled",
    model: "Digger Crawler",
    name: "Sand Crawler",
    passengers: "30"
  },
  {
    class: "repulsorcraft",
    model: "T-16 skyhopper",
    name: "T-16 skyhopper",
    passengers: "1"
  }
];
const mockView = "vehicles";

describe("CardContainer", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(
      <CardContainer
        planets={mockPlanets}
        view={mockView}
        vehicles={mockVehicles}
        people={mockPeople}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
