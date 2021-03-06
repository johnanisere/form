import React from "react";
import ReactDOM from "react-dom";

import { shallow } from "enzyme";

import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("App component exists", () => {
  const parent = shallow(<App />);
  expect(parent.exists()).toBe(true);
});

it("App component renders correctly", () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});
