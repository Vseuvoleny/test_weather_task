import React, { FC } from "react";
import { SunIcon } from "../../icons/Icon awesome-sun";
import { Title, Span } from "./heading.styles";

export const Heading: FC<any> = () => {
  return (
    <Title>
      <SunIcon id={"Icon_awesome-sun"} viewBox="75 75" />
      <Span>WeatherStation</Span>
    </Title>
  );
};
