import React from "react";

import Form from "../blocks/Form";

const Select = ({
  id,
  name,
  value,
  onChange,
  multiple,
  selected,
  required,
  list = []
}) => (
  <Form.Select
    id={id}
    name={name}
    value={value}
    onChange={onChange}
    multiple={multiple}
    required={required}
  >
    {multiple || <option value="">Select</option>}
    {list.map((value, key) => (
      <option value={value} key={key} selected={selected}>
        {value}
      </option>
    ))}
  </Form.Select>
);

export default Select;
