import { SerializedError } from "@reduxjs/toolkit";

export interface InitialState {
    cities: any[];
    currentCity: any;
    error: SerializedError | null;
    isLoading: boolean
}