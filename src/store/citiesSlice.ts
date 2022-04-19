import { createSlice } from "@reduxjs/toolkit";

export const citiesSlice = createSlice({
  name: "cities",
  initialState: { cities: [], currentCity: {} },
  reducers: {
    getCities: (state, action) => {
      state.cities = action.payload;
    },
    getCity: (state, action) => {
      state.currentCity = action.payload;
    },
  },
});

export const { getCities, getCity } = citiesSlice.actions;
export default citiesSlice.reducer;
