import React from "react";

import FormGroup from "./FormGroup";
import LocationGroup from "./LocationGroup";

const Group = ({
  id,
  min,
  max,
  name,
  type,
  title,
  value,
  onChange,
  required,
  selected,
  list = [],
  maxLength,
  multiple = false
}) =>
  type === "location" ? (
    <LocationGroup
      name={name}
      value={value}
      title={title}
      required={required}
      onChange={onChange}
    />
  ) : (
    <FormGroup
      id={id}
      min={min}
      max={max}
      name={name}
      type={type}
      list={list}
      value={value}
      title={title}
      selected={selected}
      required={required}
      onChange={onChange}
      multiple={multiple}
      maxLength={maxLength}
    />
  );

export default Group;
