import React from "react";
import { shallow } from "enzyme";
import Establishdetail from "./establishdetail";

describe("Establishdetail", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Establishdetail />);
    expect(wrapper).toMatchSnapshot();
  });
});
