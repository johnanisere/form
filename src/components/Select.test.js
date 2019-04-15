import React from "react";
import { shallow } from "enzyme";

import Select from "./Select";
import Button from "./Button";
import Content from "./Content";
import Form from "../blocks/Form";

const props = {
  id: "",
  name: "",
  value: "",
  onChange: () => {},
  multiple: false,
  required: true,
  list: []
};

it("Select component exists", () => {
  const wrapper = shallow(<Select {...props} />);
  expect(wrapper.exists()).toBe(true);
});

it("Select component renders", () => {
  const wrapper = shallow(<Select {...props} />);
  expect(wrapper).toMatchSnapshot();
});

it(`Select should contain "Select"`, () => {
  const wrapper = shallow(<Select {...props} />);

  expect(wrapper.find(Form.Select)).toHaveLength(1);
});
