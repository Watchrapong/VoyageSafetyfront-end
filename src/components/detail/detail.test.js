import React from "react";
import { shallow } from "enzyme";
import Detail from "./detail";

describe("Detail", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Detail />);
    expect(wrapper).toMatchSnapshot();
  });
});
