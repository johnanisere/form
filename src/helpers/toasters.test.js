import React from "react";
import { shallow } from "enzyme";

import * as toasters from "./toasters";

it("Toaster success component renders", () => {
  const wrapper = shallow(<toasters.toastSuccess />);
  expect(wrapper).toMatchSnapshot();
});

it("Toaster error component renders", () => {
  const wrapper = shallow(<toasters.toastError />);
  expect(wrapper).toMatchSnapshot();
});

it("Toaster warning component renders", () => {
  const wrapper = shallow(<toasters.toastWarning />);
  expect(wrapper).toMatchSnapshot();
});
