import React from "react";

import Button from "./Button";
import Content from "./Content";
import Form from "../blocks/Form";

const Opportunity = ({
  data,
  onSubmit,
  fetching,
  allSkills,
  allBackgrounds,
  onHandleChange
}) => (
  <Form onSubmit={onSubmit}>
    <Form.Title>Opportunity</Form.Title>
    <Content
      {...data}
      allSkills={allSkills}
      allBackgrounds={allBackgrounds}
      onHandleChange={onHandleChange}
    />
    <Button fetching={fetching} />
  </Form>
);

export default Opportunity;
