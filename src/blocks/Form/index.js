import styled from "styled-components";

import Input from "./Input";
import Group from "./Group";
import Title from "./Title";
import Select from "./Select";
import InputGroup from "./InputGroup";
import InputLabel from "./InputLabel";
import MyForm from "../../elements/Form";
import InputContainer from "./InputContainer";

const Form = styled(MyForm)`
  width: 100%;
  max-width: 580px;
  box-shadow: rgba(63, 63, 68, 0.05) 0px 0px 0px 1px,
    rgba(63, 63, 68, 0.15) 0px 1px 3px 0px;
  border-radius: 3px;
  margin: 50px 0;

  .geosuggest__input {
    width: 100%;
    display: block;
    box-sizing: border-box;
    padding: 4px 18px;
    border: 1px solid #e3e5e7;
    height: 40px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
    &:focus {
      border-width: 2px !important;
      border-style: solid !important;
      border-color: rgb(92, 106, 196) !important;
      border-image: initial !important;
      outline: white;
    }
  }
  .geosuggest__suggests {
    list-style: none;
    padding: 0;
    background: #ffff;
    margin: 0;
    box-shadow: rgba(63, 63, 68, 0.05) 0px 0px 0px 1px,
      rgba(63, 63, 68, 0.15) 0px 1px 3px 0px;
    border-radius: 3px;
    li {
      padding: 0.5em 20px;
      cursor: pointer;
      &:hover {
        background: #f5f5f5;
      }
    }
  }
  .geosuggest__suggests--hidden {
    display: none;
  }
`;

Form.Title = Title;
Form.Input = Input;
Form.Group = Group;
Form.Select = Select;
Form.Label = InputLabel;
Form.InputGroup = InputGroup;
Form.InputContainer = InputContainer;

export default Form;
