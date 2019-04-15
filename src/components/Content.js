import React from "react";

import Form from "../blocks/Form";
import InputGroup from "./InputGroup";
import { getTimeFrame, onStripByKey } from "../helpers/utils";

const Content = ({
  city,
  title,
  skills,
  salary,
  allSkills,
  description,
  backgrounds,
  allBackgrounds,
  onHandleChange,
  latest_end_date,
  required = true,
  selection_process,
  earliest_start_date,
  applications_close_date
}) => (
  <Form.Group>
    <InputGroup
      id="title"
      name="title"
      type="text"
      title="Title"
      value={title}
      maxLength={100}
      required={required}
      onChange={onHandleChange}
    />
    <InputGroup
      id="skills"
      name="skills"
      type="select"
      title="Skills"
      value={skills}
      multiple={true}
      required={required}
      onChange={onHandleChange}
      list={onStripByKey(allSkills)}
    />
    <InputGroup
      id="salary"
      name="salary"
      type="number"
      title="Salary"
      value={salary}
      required={required}
      onChange={onHandleChange}
    />
    <InputGroup
      type="text"
      id="description"
      name="description"
      title="Description"
      value={description}
      required={required}
      onChange={onHandleChange}
    />
    <InputGroup
      multiple={true}
      type="select"
      id="backgrounds"
      name="backgrounds"
      title="Backgrounds"
      value={backgrounds}
      required={required}
      onChange={onHandleChange}
      list={onStripByKey(allBackgrounds)}
    />
    <InputGroup
      type="text"
      required={required}
      id="selection_process"
      name="selection_process"
      title="Selection process"
      onChange={onHandleChange}
      value={selection_process}
    />
    <InputGroup
      id="city"
      name="city"
      type="location"
      title="City"
      value={city}
      required={required}
      onChange={onHandleChange}
    />
    <InputGroup
      required={required}
      id="latest_end_date"
      type="datetime-local"
      name="latest_end_date"
      title="Latest end date"
      value={latest_end_date}
      onChange={onHandleChange}
    />
    <InputGroup
      required={required}
      type="datetime-local"
      id="earliest_start_date"
      onChange={onHandleChange}
      name="earliest_start_date"
      title="Earliest start date"
      value={earliest_start_date}
    />
    <InputGroup
      required={required}
      type="datetime-local"
      onChange={onHandleChange}
      id="applications_close_date"
      min={getTimeFrame(30, 90).min}
      max={getTimeFrame(30, 90).max}
      name="applications_close_date"
      title="Applications close date"
      value={applications_close_date}
    />
  </Form.Group>
);

Content.defaultProps = {
  title: "qwertyui",
  skills: [""],
  salary: "",
  required: true,
  city: "albenia",
  description: "",
  backgrounds: [""],
  onChange: () => {},
  latest_end_date: "2018-06-12T19:30",
  selection_process: "",
  earliest_start_date: "2018-06-12T19:30",
  applications_close_date: new Date().toISOString().slice(0, -1)
};
export default Content;
