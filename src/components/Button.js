import React from "react";

import Form from "../blocks/Form";

const Button = ({ fetching }) => {
  const value = fetching ? "Processing..." : "Submit";
  return (
    <Form.InputGroup special={true}>
      <Form.Input type="submit" disabled={fetching} value={value} />
    </Form.InputGroup>
  );
};

export default Button;
