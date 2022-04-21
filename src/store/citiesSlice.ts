import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCity } from "./actionCreator";

export const citiesSlice = createSlice({
  name: "cities",
  initialState: { cities: [], currentCity: {}, error: null, isLoading: false },
  reducers: {
    // cityFetching(state) {
    //   state.isLoading = true;
    // },
    // cityFullfiled(state, action: PayloadAction<any>) {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.cities = action.payload;
    // },
    // cityRejected(state, action: PayloadAction<any>) {
    //   state.isLoading = false;
    //   state.error = action.payload
    // },
    sliceCitiesArray(state) {
      state.cities = state.cities.slice(1)
    }
  },
  extraReducers: {
    [fetchCity.pending.type]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchCity.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.cities = action.payload;

    },
    [fetchCity.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.cities = action.payload;
    }
  }

});


export default citiesSlice.reducer;
