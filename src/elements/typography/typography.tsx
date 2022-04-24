import React, { FC } from "react";
import { TypographyProps } from "./types";
import { Box } from "./typography.styles";

export const Typography: FC<TypographyProps> = ({ children, className }) => {
  return <Box className={className}>{children}</Box>;
};
