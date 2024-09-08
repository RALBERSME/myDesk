import React, { useEffect, useState } from "react";
import "./Weather.css";
import sunny from "../assets/sunny.png";
import cloudy from "../assets/cloudy.png";
import rainy from "../assets/rainy.png";
import snowy from "../assets/snowy.png";
import WeatherItemUser from "./WeatherItemUser";

const WeatherItem = () => {
  const [data, setData] = useState({});
  const [data2, setData2] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const api_key = "";

  useEffect(() => {
    const fetchWeatherNY = async () => {
      let location = "New York";
      setIsLoading(true);
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=Metric&appid=${api_key}`;
      const res = await fetch(url);
      const nyData = await res.json();
      setData(nyData);
      setIsLoading(false);
    };

    fetchWeatherNY();

    const fetchWeatherBerlin = async () => {
      let location1 = "Berlin";
      setIsLoading(true);
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location1}&units=Metric&appid=${api_key}`;
      const res = await fetch(url);
      const berlinData = await res.json();
      setData2(berlinData);
      setIsLoading(false);
    };

    fetchWeatherBerlin();
  });

  const weatherImages = {
    Clear: sunny,
    Clouds: cloudy,
    Rain: rainy,
    Snow: snowy,
    Haze: cloudy,
    Mist: cloudy,
  };
  const weatherImage = data.weather
    ? weatherImages[data.weather[0].main]
    : null;

  const weatherImage2 = data2.weather
    ? weatherImages[data2.weather[0].main]
    : null;
  return (
    <div className="weatherModule">
      <div className="display">
        <div className="output">
          <img width="350px" height="350px" src={weatherImage}></img>
          <h2>{data.name}</h2>
          <h2>{data.weather ? data.weather[0].main : null}</h2>
          <h2>{data.main ? `${Math.floor(data.main.temp)}°` : null}</h2>
          <h2>{data.main ? data.main.humidity : null}% humidity</h2>
          <h2>{data.wind ? data.wind.speed : null} km/h</h2>
        </div>
      </div>
      <div className="display">
        <div className="output">
          <img width="350px" height="350px" src={weatherImage2}></img>
          <h2>{data2.name}</h2>
          <h2>{data2.weather ? data2.weather[0].main : null}</h2>
          <h2>{data2.main ? `${Math.floor(data2.main.temp)}°` : null}</h2>
          <h2>{data2.main ? data2.main.humidity : null}% humidity</h2>
          <h2>{data2.wind ? data2.wind.speed : null} km/h</h2>
        </div>
      </div>

      <WeatherItemUser />
    </div>
  );
};

export default WeatherItem;
