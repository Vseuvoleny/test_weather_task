import React, { useEffect } from "react";
import axios from "axios";

export const Home = () => {
  useEffect(() => {
    const params = {
      access_key: "09338e525434f84c1766f9f13074fb7b",
      query: "New York",
    };
    axios.get("http://api.weatherstack.com/current", { params }).then((res) => {
      console.log(res);
    });
  }, []);

  return <div>Home</div>;
};
