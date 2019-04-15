import React from "react";
import { shallow } from "enzyme";

import LocationGroup from "./LocationGroup";
import Form from "../blocks/Form";
import GeoSuggest from "./GeoSuggest";

const props = {
  title: "",
  required: true,
  name: "",
  onChange: () => {},
  value: ""
};

it("LocationGroup component exists", () => {
  const wrapper = shallow(<LocationGroup {...props} />);
  expect(wrapper.exists()).toBe(true);
});

it("LocationGroup component renders", () => {
  const wrapper = shallow(<LocationGroup {...props} />);
  expect(wrapper).toMatchSnapshot();
});

it(`LocationGroup should contain "Form.Label", "Form.InputContainer","GeoSuggest" `, () => {
  const wrapper = shallow(<LocationGroup {...props} />);
  expect(wrapper.find(Form.Label)).toHaveLength(1);
  expect(wrapper.find(Form.InputContainer)).toHaveLength(1);
  expect(wrapper.find(GeoSuggest)).toHaveLength(1);
});
