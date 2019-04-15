import React from "react";
import { shallow } from "enzyme";

import Button from "./Button";
import Content from "./Content";
import Form from "../blocks/Form";
import Opportunity from "./Opportunity";

const props = {
  data: {},
  onSubmit: () => {},
  fetching: false,
  allSkills: [],
  allBackgrounds: [],
  onHandleChange: () => {}
};

it("Opportunity component exists", () => {
  const wrapper = shallow(<Opportunity {...props} />);
  expect(wrapper.exists()).toBe(true);
});

it(`Opportunity should contain "Form", "Button","Content","Form.Title"`, () => {
  const wrapper = shallow(<Opportunity {...props} />);

  expect(wrapper.find(Form)).toHaveLength(1);
  expect(wrapper.find(Button)).toHaveLength(1);
  expect(wrapper.find(Content)).toHaveLength(1);
  expect(wrapper.find(Form.Title)).toHaveLength(1);
});
