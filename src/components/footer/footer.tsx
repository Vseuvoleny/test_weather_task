import React, { FC } from "react";
import { FooterContainer, Text } from "./footer.styles";
import { FooterProps } from "./types";

export const Footer: FC<FooterProps> = () => {
  return (
    <FooterContainer>
      <Text>Frontend Task | Mad Duck Code</Text>
    </FooterContainer>
  );
};
