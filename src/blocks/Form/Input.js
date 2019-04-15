import styled from "styled-components";
import MyInput from "../../elements/Input";

const Input = styled(MyInput)`
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
`;

export default Input;
