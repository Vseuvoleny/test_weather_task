import { SerializedError } from "@reduxjs/toolkit";

export interface InitialState {
  citiesWeather: CityWeather[];
  currentCity: CityWeather;
  error: SerializedError | null;
  isLoading: boolean;
}

export interface CityWeather {
  current: Current;
  location: Locataion;
  request: Request;
}

export interface Current {
  observation_time: string;
  temperature: number;
  weather_code: number;
  weather_icons: string[];
  weather_descriptions: string[];
  wind_speed: number;
  wind_degree: number;
  wind_dir: string;
  pressure: number;
  precip: number;
  humidity: number;
  cloudcover: number;
  feelslike: number;
  uv_index: number;
  visibility: number;
  is_day: string;
}
export interface Locataion {
  name: string;
  country: number;
  region: number;
  lat: string;
  lon: string;
  timezone_id: string;
  localtime: string;
  localtime_epoch: number;
  utc_offset: string;
}
export interface Request {
  type: string;
  query: string;
  language: string;
  unit: string;
}
