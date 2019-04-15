import styled, { keyframes } from "styled-components";
import Section from "../elements/Section";

const fadeIn = keyframes`
  from {
    opacity:0
  }

  to {
    opacity:1
  }
`;
const Container = styled(Section)`
  align-items: center;
  flex-direction: column;
  animation: ${fadeIn} 0.5s linear;
  background-color: rgb(244, 246, 248);
`;

export default Container;
