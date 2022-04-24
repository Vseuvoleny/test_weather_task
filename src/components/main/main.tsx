import React, { FC } from "react";
import { Container } from "./main.styles";
import { MainProps } from "./types";

export const Main: FC<MainProps> = ({ children }) => {
  return <Container>{children}</Container>;
};
