import React from "react";
import { shallow } from "enzyme";
import Thanksforbooking from "./thanksforbooking";

describe("Thanksforbooking", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Thanksforbooking />);
    expect(wrapper).toMatchSnapshot();
  });
});
