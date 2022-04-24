import React, { FC } from "react";
import {
  Box,
  InputText,
  InputContainer,
  PlusIcon,
  Button,
  Span,
} from "./input.styles";
import { InputProps } from "./types";

export const Input: FC<InputProps> = ({ className }) => {
  return (
    <Box className={className}>
      <PlusIcon>
        <Span>+</Span>
      </PlusIcon>
      <InputContainer>
        <InputText type="text" placeholder="Add a city…" />
      </InputContainer>
      <Button type="submit">Add</Button>
    </Box>
  );
};
