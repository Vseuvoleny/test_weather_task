import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardContainer = styled.div`
  padding: 40px 77px 45px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
`;
export const Country = styled.span`
  color: #04353c;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`;
export const City = styled.span`
  margin-bottom: 30px;
  font-size: 24px;
`;
export const Temp = styled.span`
  font-size: 48px;
  margin-bottom: 40px;
`;

export const CityLink = styled(Link)`
  background: #04353c;
  padding: 11px 53px;
  color: #fff;
  text-decoration: none;
  text-align: center;
  border-radius: 10px;
`;
