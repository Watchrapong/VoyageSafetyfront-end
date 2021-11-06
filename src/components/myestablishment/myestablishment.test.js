import React from "react";
import { shallow } from "enzyme";
import Myestablishment from "./myestablishment";

describe("Myestablishment", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Myestablishment />);
    expect(wrapper).toMatchSnapshot();
  });
});
