import React from "react";
import { shallow } from "enzyme";
import Header from "./addstore";
import addStore from ".";

describe("Addstore", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<addStore />);
    expect(wrapper).toMatchSnapshot();
  });
});
