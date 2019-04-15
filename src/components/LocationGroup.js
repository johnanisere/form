import React from "react";

import Form from "../blocks/Form";
import GeoSuggest from "./GeoSuggest";

const LocationGroup = ({ title, required, name, onChange, value }) => (
  <Form.InputContainer>
    <Form.Label>
      <span>{title}</span>
      {required && (
        <strong>
          <abbr title="required">*</abbr>
        </strong>
      )}
    </Form.Label>
    <GeoSuggest name={name} onChange={onChange} initialValue={value} />
  </Form.InputContainer>
);

export default LocationGroup;
