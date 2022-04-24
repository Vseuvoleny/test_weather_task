import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 7px 20px 20px;
  background: #fff;
  border-radius: 10px;
  width: 100%;
  margin-top: 50px;
`;
export const InputContainer = styled.div`
  position: relative;
  margin-left: 20px;
`;
export const InputText = styled.input`
  outline: none;
  border: none;
  margin-left: 10px;
  height: 55px;
  font-size: 20px;
`;

export const PlusIcon = styled.div`
  width: 40px;
  height: 40px;
  background: #04353c;
  border-radius: 50%;
  color: #fff;
  position: relative;
  cursor: pointer;
`;

export const Span = styled.span`
  position: absolute;
  text-align: center;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const Button = styled.button`
  padding: 18px 45px;
  background: #04353c;
  color: #ffffff;
  opacity: 1;
  outline: none;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-left: auto;
`;
