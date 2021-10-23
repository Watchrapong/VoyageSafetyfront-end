import React from "react";
import { shallow } from "enzyme";
import Viewstaff from "./viewstaff";

describe("Viewstaff", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Viewstaff />);
    expect(wrapper).toMatchSnapshot();
  });
});
