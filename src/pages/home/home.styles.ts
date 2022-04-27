import styled from "styled-components";
import { Input } from "../../elements/input";
import { Section } from "../../elements/section/section";
import { Typography } from "../../elements/typography";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  z-index: 2;
  position: relative;
`;

export const StyledSection = styled(Section)`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
`;

export const InputContainer = styled.div`
  padding: 80px 60px 0;
  align-self: center;
  max-width: 1000px;
  width: 100%;
`;

export const StyledTypography = styled(Typography)`
  padding-bottom: 20px;
  color: #fff;
  font-size: 24px;
  &:first-of-type {
    font-weight: 400;
  }
  &:last-of-type {
    font-weight: 300;
  }
`;

export const StyledInput = styled(Input)`
  padding-top: 50px;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 150px;
  margin-bottom: 145px;
  background: transparent;
  column-gap: 55px;
`;
