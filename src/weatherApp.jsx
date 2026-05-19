import axios from "axios";
import { useState } from "react";
import "./weatherApp.css"

export default function WeatherApp() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");

  const key = "df5bd428bee6d15c4c7d1bdd9b979583";

  async function getWeather() {
    const result = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`,
    );

    setWeather(result.data);
  }

  return (
    <>
      <h1>WEATHER APP</h1>
      <h3>Easily Generate Weather of any City </h3>
      Search City :{" "}
      <input className="input"
        type="text"
        placeholder="Enter the city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button id="btn" onClick={getWeather}>Get Weather</button>

      {weather && (
        <section id="section">
          <h2>City name : {weather.name}</h2>
          <h3>Description : {weather.weather?.[0]?.description}</h3>
          <h3>Temperature : {weather.main?.temp}</h3>
          <h3>Humidity : {weather.main?.humidity}</h3>
          <h3>Wind Speed : {weather.wind?.speed}</h3>
            <h3>Max Temperature : {weather.main?.temp_max}</h3>
              <h3>Min Temperature : {weather.main?.temp_min}</h3>
         
        </section>
      )}
    </>
  );
}
