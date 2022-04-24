import React, { useEffect } from "react";
import { Footer } from "../../components/footer/footer";
import { Heading } from "../../components/heading/heading";
import { Main } from "../../components/main/main";
import { Input } from "../../elements/input";
import { Typography } from "../../elements/typography";
import { fetchCity } from "../../store/actionCreator";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  Container,
  InputContainer,
  StyledSection,
  StyledTypography,
} from "./home.styles";

export const Home = () => {
  const { cities } = useAppSelector((state) => state.citiReducers);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCity());
  }, []);

  return (
    <Container>
      <StyledSection>
        <Heading />
        <Main>
          <InputContainer>
            <StyledTypography>Add Cities</StyledTypography>
            <StyledTypography>
              Add 5 cities whose temperature you want to track.
            </StyledTypography>
            <Input />
          </InputContainer>
        </Main>
      </StyledSection>
      <Footer />
    </Container>
  );
};
