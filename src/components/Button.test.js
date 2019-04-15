import React from "react";
import { shallow } from "enzyme";

import Button from "./Button";
import Form from "../blocks/Form";

it("Button component exists", () => {
  const wrapper = shallow(<Button />);
  expect(wrapper.exists()).toBe(true);
});

it("Button component renders", () => {
  const wrapper = shallow(<Button />);
  expect(wrapper).toMatchSnapshot();
});

it(`Button should contain "Form.Input"`, () => {
  const props = {
    fetching: false
  };
  const wrapper = shallow(<Button {...props} />);
  expect(wrapper.find(Form.Input)).toHaveLength(1);
});
