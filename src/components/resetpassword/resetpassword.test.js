import React from "react";
import { shallow } from "enzyme";
import Resetpassword from "./resetpassword";

describe("Resetpassword", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Resetpassword />);
    expect(wrapper).toMatchSnapshot();
  });
});
