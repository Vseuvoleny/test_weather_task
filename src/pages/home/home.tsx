import React from "react";
import { Footer } from "../../components/footer/footer";
import { Heading } from "../../components/heading/heading";
import { Main } from "../../components/main/main";
import { Card } from "../../elements/card/card";
import { Input } from "../../elements/input";
import { fetchCity } from "../../store/actionCreator";
import { citiesSlice } from "../../store/citiesSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  CardsContainer,
  Container,
  InputContainer,
  StyledSection,
  StyledTypography,
} from "./home.styles";

export const Home = () => {
  const { citiesWeather } = useAppSelector((state) => state.citiReducers);
  const dispatch = useAppDispatch();

  const handleCity = () => {
    if (citiesWeather.length === 5) {
      console.log("slice");

      dispatch(citiesSlice.actions.sliceCitiesArray());
    }

    dispatch(fetchCity());
  };
  return (
    <Container>
      <StyledSection>
        <Main>
          <InputContainer>
            <StyledTypography>Add Cities</StyledTypography>
            <StyledTypography>
              Add 5 cities whose temperature you want to track.
            </StyledTypography>
            <Input onClick={handleCity} />
          </InputContainer>
          <CardsContainer>
            {citiesWeather.length > 0 &&
              citiesWeather.map((city) => <Card city={city} />)}
          </CardsContainer>
        </Main>
      </StyledSection>
      <Footer />
    </Container>
  );
};
