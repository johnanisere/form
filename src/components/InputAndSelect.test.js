import React from "react";
import { shallow } from "enzyme";

import Select from "./Select";
import Form from "../blocks/Form";
import InputAndSelect from "./InputAndSelect";

const props = {
  id: "",
  name: "",
  type: "text",
  title: "",
  value: "",
  onChange: () => {},
  required: true
};

it("InputAndSelect component exists", () => {
  const wrapper = shallow(<InputAndSelect {...props} />);
  expect(wrapper.exists()).toBe(true);
});

it("InputAndSelect component renders", () => {
  const wrapper = shallow(<InputAndSelect {...props} />);
  expect(wrapper).toMatchSnapshot();
});

it(`InputAndSelect should contain "Select", "Form.Input"`, () => {
  const wrapperText = shallow(<InputAndSelect {...props} type="text" />);
  const wrapperSelect = shallow(<InputAndSelect {...props} type="select" />);

  expect(wrapperSelect.find(Select)).toHaveLength(1);
  expect(wrapperText.find(Form.Input)).toHaveLength(1);
});
