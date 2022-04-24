import { createSlice } from "@reduxjs/toolkit";
import { fetchCity } from "./actionCreator";
import { InitialState } from "./types";

export const citiesSlice = createSlice({
  name: "cities",
  initialState: {
    cities: [],
    currentCity: {},
    error: null,
    isLoading: false,
  } as InitialState,
  reducers: {
    sliceCitiesArray(state) {
      state.cities = state.cities.slice(1);
    },
  },
  extraReducers: {
    [fetchCity.pending.type]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchCity.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.cities = [...state.cities, action.payload];
    },
    [fetchCity.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.cities = action.payload;
    },
  },
});

export default citiesSlice.reducer;
