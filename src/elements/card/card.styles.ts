import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const CardContainer = styled.div<{ $extended: boolean }>`
  ${({ $extended: extended }) =>
    css`
      padding: ${extended ? "38px 50px" : "40px 77px 45px"};
      flex-direction: ${extended ? "row" : "column"};
    `}

  border-radius: 10px;
  display: flex;
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

export const Location = styled.div``;
export const Coordinates = styled.div``;
export const CurrentWeatherBox = styled.div``;
export const Icon = styled.img``;
export const AdditionalWeatherBox = styled.div``;
export const FeelsLike = styled.div``;
export const Humidity = styled.div``;
export const Pressure = styled.div``;
export const Wind = styled.div``;
export const UVIndex = styled.div``;
