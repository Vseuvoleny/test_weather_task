import styled from "styled-components";
import mask from "./assets/Mask.png";

export const AppContainer = styled.div`
    width: 100%;
    position: relative;
    background: transparent url('${mask}') center no-repeat;
    background-size: cover;
    opacity: 1;
`;

export const Background = styled.div`
  background: #000;
  opacity: 0.4;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
