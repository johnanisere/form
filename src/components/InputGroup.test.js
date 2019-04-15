import React from "react";
import { shallow } from "enzyme";

import FormGroup from "./FormGroup";
import InputGroup from "./InputGroup";
import LocationGroup from "./LocationGroup";

const props = {
  id: "",
  name: "",
  type: "text",
  title: "",
  value: "",
  onChange: () => {},
  required: true
};

it("InputGroup component exists", () => {
  const wrapper = shallow(<InputGroup {...props} />);
  expect(wrapper.exists()).toBe(true);
});

it("InputGroup component renders", () => {
  const wrapper = shallow(<InputGroup {...props} />);
  expect(wrapper).toMatchSnapshot();
});

it(`InputGroup should contain "FormGroup", "LocationGroup"`, () => {
  const wrapperInput = shallow(<InputGroup {...props} />);
  const wrapperLocation = shallow(<InputGroup {...props} type="location" />);

  expect(wrapperInput.find(FormGroup)).toHaveLength(1);
  expect(wrapperLocation.find(LocationGroup)).toHaveLength(1);
});
