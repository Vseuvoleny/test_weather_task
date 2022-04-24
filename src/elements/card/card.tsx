import React, { FC } from "react";
import { CardContainer, Country, Temp, CityLink, City } from "./card.styles";
import { CardProps } from "./types";

export const Card: FC<CardProps> = ({ city }) => {
  const { location, current } = city;
  return (
    <CardContainer>
      <City>{location.name}</City>
      <Country>{location.country}</Country>
      <Temp>{current.temperature}&#8451;</Temp>
      <CityLink to={""}></CityLink>
    </CardContainer>
  );
};
