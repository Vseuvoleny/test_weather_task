import styled from "styled-components";
import { Input } from "../../elements/input";
import { Section } from "../../elements/section/section";
import { Typography } from "../../elements/typography";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const StyledSection = styled(Section)`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
`;

export const InputContainer = styled.div`
  padding: 80px 160px 0;
  align-self: center;
`;

export const StyledTypography = styled(Typography)`
  padding-bottom: 20px;
`;

export const StyledInput = styled(Input)`
  padding-top: 50px;
`;
