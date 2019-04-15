import React from "react";

import InputAndSelect from "./InputAndSelect";
import Form from "../blocks/Form";

const FormGroup = ({
  id,
  min,
  max,
  name,
  type,
  list,
  title,
  value,
  onChange,
  required,
  selected,
  multiple,
  maxLength = 1000000
}) => (
  <Form.InputGroup>
    <Form.Label htmlFor={id}>
      <span>{title}</span>
      {required && (
        <strong>
          <abbr title="required">*</abbr>
        </strong>
      )}
    </Form.Label>
    <InputAndSelect
      id={id}
      min={min}
      max={max}
      name={name}
      type={type}
      list={list}
      value={value}
      selected={selected}
      required={required}
      onChange={onChange}
      multiple={multiple}
      maxLength={maxLength}
    />
  </Form.InputGroup>
);

export default FormGroup;
