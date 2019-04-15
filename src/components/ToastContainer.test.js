import React from "react";
import { shallow } from "enzyme";

import ToastContainer from "./ToastContainer";

it("ToastContainer component exists", () => {
  const wrapper = shallow(<ToastContainer />);
  expect(wrapper.exists()).toBe(true);
});

it("ToastContainer component renders", () => {
  const wrapper = shallow(<ToastContainer />);
  expect(wrapper).toMatchSnapshot();
});
