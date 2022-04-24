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

export const Input: FC<InputProps> = ({ className, onChange }) => {
  return (
    <Box className={className}>
      <PlusIcon>
        <Span>+</Span>
      </PlusIcon>
      <InputContainer>
        <InputText type="text" placeholder="Add a city…" onChange={onChange} />
      </InputContainer>
      <Button type="submit">Add</Button>
    </Box>
  );
};
