import React, { FC } from "react";
import { Container } from "./section.styles";
import { SectionProps } from "./types";

export const Section: FC<SectionProps> = ({ children, className }) => {
  return <Container className={className}>{children}</Container>;
};
