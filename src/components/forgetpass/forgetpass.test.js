import React from "react";
import { shallow } from "enzyme";
import Forgetpass from "./forgetpass";

describe("Forgetpass", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Forgetpass />);
    expect(wrapper).toMatchSnapshot();
  });
});
