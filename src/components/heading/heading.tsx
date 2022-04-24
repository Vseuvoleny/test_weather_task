import React, { FC } from "react";
import { Typography } from "../../elements/typography";
import { SunIcon } from "../../icons/Icon awesome-sun";

export const Heading: FC<any> = () => {
  return (
    <Typography>
      <SunIcon id={"Icon_awesome-sun"} />
      WeatherStation
    </Typography>
  );
};
