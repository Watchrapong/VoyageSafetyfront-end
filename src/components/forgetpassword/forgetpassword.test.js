import React from "react";
import { shallow } from "enzyme";
import Forgetpassword from "./forgetpassword";

describe("Forgetpassword", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Forgetpassword />);
    expect(wrapper).toMatchSnapshot();
  });
});
