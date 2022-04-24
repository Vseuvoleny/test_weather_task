import styled from "styled-components";
import mask from "./assets/Mask.png";

export const AppContainer = styled.div`
    width: 100%;
    background: transparent url('${mask}') 0% 0% no-repeat padding-box;
    opacity: 1;
    height: 100vh;
    position: relative;
`;

export const Background = styled.div`
  background: #000;
  opacity: 0.4;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
