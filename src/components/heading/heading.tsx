import React, { FC } from "react";
import { SunIcon } from "../../icons/Icon awesome-sun";
import { Title } from "./heading.styles";

export const Heading: FC<any> = () => {
  return (
    <Title>
      <SunIcon id={"Icon_awesome-sun"} viewBox="36 36" />
      WeatherStation
    </Title>
  );
};
