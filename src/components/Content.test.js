import React from "react";
import { shallow } from "enzyme";

import Content from "./Content";
import Form from "../blocks/Form";
import InputGroup from "./InputGroup";

const props = {
  title: "qwertyui",
  skills: [""],
  salary: "",
  required: true,
  city: "albenia",
  description: "",
  backgrounds: [""],
  onChange: () => {},
  latest_end_date: "2018-06-12T19:30",
  selection_process: "",
  earliest_start_date: "2018-06-12T19:30",
  applications_close_date: new Date().toISOString().slice(0, -1),
  allSkills: [],
  allBackgrounds: []
};

it("Content component exists", () => {
  const wrapper = shallow(<Content {...props} />);
  expect(wrapper.exists()).toBe(true);
});

it(`Content should contain "Form.Group", "InputGroup"`, () => {
  const wrapper = shallow(<Content {...props} />);
  expect(wrapper.find(Form.Group)).toHaveLength(1);
  expect(wrapper.find(InputGroup)).toHaveLength(10);
});
