import React from "react";
import { shallow } from "enzyme";
import Addstore from "./addstore";

describe("Addstore", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Addstore />);
    expect(wrapper).toMatchSnapshot();
  });
});
