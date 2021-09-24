import React from "react";
import { shallow } from "enzyme";
import Resetpass from "./resetpass";

describe("Resetpass", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Resetpass />);
    expect(wrapper).toMatchSnapshot();
  });
});
