import { combineReducers, configureStore } from "@reduxjs/toolkit";
import citiReducers from './citiesSlice'

const rootReducer = combineReducers({
  citiReducers
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

