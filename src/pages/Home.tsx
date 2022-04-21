import React, { useEffect } from "react";
import { fetchCity } from "../store/actionCreator";
import { useAppDispatch, useAppSelector } from "../store/hooks";

export const Home = () => {
  const { cities } = useAppSelector((state) => state.citiReducers);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCity());
  }, []);

  return <div>Home</div>;
};
