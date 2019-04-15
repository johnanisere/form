import styled, { css } from "styled-components";
import Article from "../../elements/Article";

const InputContainer = styled(Article)`
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
        &:hover ,&:focus{
          box-shadow: 2px 4px 11px 1px rgba(0,0,0,.2)
          transform: translateY(-1);
        }
      }
    `}
`;

export default InputContainer;
