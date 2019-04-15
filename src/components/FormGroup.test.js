import React from "react";
import { shallow } from "enzyme";

import Form from "../blocks/Form";
import FormGroup from "./FormGroup";
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

it("FormGroup component exists", () => {
  const wrapper = shallow(<FormGroup {...props} />);
  expect(wrapper.exists()).toBe(true);
});

it("FormGroup component renders", () => {
  const wrapper = shallow(<FormGroup {...props} />);
  expect(wrapper).toMatchSnapshot();
});

it(`FormGroup should contain "Form.Group", "InputGroup", "InputAndSelect`, () => {
  const wrapper = shallow(<FormGroup {...props} />);
  expect(wrapper.find(Form.Label)).toHaveLength(1);
  expect(wrapper.find(Form.InputGroup)).toHaveLength(1);
  expect(wrapper.find(InputAndSelect)).toHaveLength(1);
});
