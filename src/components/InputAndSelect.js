import React from "react";

import Select from "./Select";
import Form from "../blocks/Form";

const InputAndSelect = ({
  id,
  min,
  max,
  name,
  type,
  list,
  value,
  selected,
  required,
  onChange,
  multiple,
  maxLength
}) =>
  type === "select" ? (
    <Select
      id={id}
      name={name}
      list={list}
      value={value}
      required={required}
      onChange={onChange}
      multiple={multiple}
    />
  ) : (
    <Form.Input
      id={id}
      min={min}
      max={max}
      name={name}
      type={type}
      value={value}
      selected={selected}
      required={required}
      onChange={onChange}
      maxLength={maxLength}
    />
  );

export default InputAndSelect;
