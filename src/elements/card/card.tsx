import React, { FC } from "react";
import {
  CardContainer,
  Country,
  Temp,
  CityLink,
  City,
  Location,
  Coordinates,
  CurrentWeatherBox,
  Icon,
  AdditionalWeatherBox,
  FeelsLike,
  Humidity,
  Pressure,
  Wind,
  UVIndex,
} from "./card.styles";
import { CardProps } from "./types";

export const Card: FC<CardProps> = ({ city, extended = false }) => {
  const { location, current } = city;
  console.log(city);

  const setUVIndexString = (uvIndex: number) => {
    if (uvIndex <= 2) {
      return "Low";
    }
    if (uvIndex <= 5) {
      return "Normal";
    }

    if (uvIndex <= 7) {
      return "High";
    }

    if (uvIndex <= 10) {
      return "Very high";
    }

    return "Critical";
  };

  const renderCardContent = (isExteneded: boolean) => {
    if (isExteneded) {
      return (
        <>
          <Location>
            <City>{location.name}</City>
            <Country>{location.country}</Country>
            <Coordinates>
              {`${location.lat}N`}
              {`${location.lon}E`}
            </Coordinates>
          </Location>
          <CurrentWeatherBox>
            <Icon
              src={current.weather_icons[0]}
              alt={current.temperature.toString()}
            ></Icon>
            <Temp>{current.temperature}&#8451;</Temp>
          </CurrentWeatherBox>
          <AdditionalWeatherBox>
            <FeelsLike>{current.feelslike}&#8451;</FeelsLike>
            <Humidity>{current.humidity}%</Humidity>
            <Pressure>{current.pressure} mbar</Pressure>
            <Wind>
              {String(current.wind_speed).split("").join(".")}m/s{" "}
              {current.wind_dir}
            </Wind>
            <UVIndex>{setUVIndexString(current.uv_index)}</UVIndex>
          </AdditionalWeatherBox>
        </>
      );
    }

    return (
      <>
        <City>{location.name}</City>
        <Country>{location.country}</Country>
        <Temp>{current.temperature}&#8451;</Temp>
        <CityLink to={`./city/${location.name}`}>View city</CityLink>
      </>
    );
  };

  return (
    <CardContainer $extended={extended}>
      {renderCardContent(extended)}
    </CardContainer>
  );
};
