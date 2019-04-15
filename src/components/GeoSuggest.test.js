import React from "react";
import { shallow } from "enzyme";

import App from "./GeoSuggest";

it("App component exists", () => {
  const parent = shallow(<App />);
  expect(parent.exists()).toBe(true);
});

it("App component renders correctly", () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});
