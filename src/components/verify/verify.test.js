import React from "react";
import { shallow } from "enzyme";
import Verify from "./verify";

describe("Verify", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Verify />);
    expect(wrapper).toMatchSnapshot();
  });
});
