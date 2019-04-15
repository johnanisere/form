import React from "react";
import { shallow } from "enzyme";

import Loader from "./Loader";

it("Loader component exists", () => {
  const wrapper = shallow(<Loader />);
  expect(wrapper.exists()).toBe(true);
});

it("Loader component renders", () => {
  const wrapper = shallow(<Loader />);
  expect(wrapper).toMatchSnapshot();
});
