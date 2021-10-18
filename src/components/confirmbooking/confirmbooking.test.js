import React from "react";
import { shallow } from "enzyme";
import Confirmbooking from "./confirmbooking";

describe("Confirmbooking", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Confirmbooking />);
    expect(wrapper).toMatchSnapshot();
  });
});
