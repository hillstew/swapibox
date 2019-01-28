import React from "react";
import Controls from "../Controls/Controls"
import { shallow } from "enzyme"

const mockHandleChange = jest.fn;

describe("Controls", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(
      <Controls handleChange={mockHandleChange} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
