import React from "react";
import { shallow } from "enzyme";
import Vaccinationstatus from "./vaccinationstatus";

describe("Vaccinationstatus", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Vaccinationstatus />);
    expect(wrapper).toMatchSnapshot();
  });
});
