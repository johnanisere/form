import styled, { css } from "styled-components";
import P from "../../elements/P";

const InputGroup = styled(P)`
  ${({ special }) =>
    special &&
    css`
      display: flex;
      justify-content: center;
      padding: 20px;
      input {
        font-size: 14px;
        color: rgb(255, 255, 255);
        outline: none;
        background: linear-gradient(rgb(99, 113, 199), rgb(85, 99, 193));
        cursor: pointer;
      }
    `}
`;

export default InputGroup;
