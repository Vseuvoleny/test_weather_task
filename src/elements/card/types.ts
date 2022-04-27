import { CityWeather } from "../../store/types";

export interface CardProps {
  city: CityWeather;
  extended?: boolean;
}
