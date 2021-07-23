import React from "react";
import { shallow } from "enzyme";
import Header2 from "./header2";

describe("Header2", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Header2 />);
    expect(wrapper).toMatchSnapshot();
  });
});
