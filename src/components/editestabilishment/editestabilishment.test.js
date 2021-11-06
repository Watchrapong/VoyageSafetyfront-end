import React from "react";
import { shallow } from "enzyme";
import Editestabilishment from "./editestabilishment";

describe("Editestabilishment", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Editestabilishment />);
    expect(wrapper).toMatchSnapshot();
  });
});
