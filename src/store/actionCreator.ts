import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { citiesSlice } from "./citiesSlice";
import { AppDispatch } from "./store";
import { mock } from "../mock/mock";

// export const fetchCity = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(citiesSlice.actions.cityFetching());
//         // const params = {
//         //     access_key: "b2a81f08db4fe6b03b0c1c835600c795",
//         //     query: city,
//         // };
//         const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')

//         dispatch(citiesSlice.actions.cityFullfiled(response.data));
//     } catch (error) {
//         dispatch(citiesSlice.actions.cityRejected(error));
//     }
// }

export const fetchCity = createAsyncThunk("cities/fetchCity", async () => {
  // const response = await axios.get('../')
  // return response.data;

  return mock;
});
