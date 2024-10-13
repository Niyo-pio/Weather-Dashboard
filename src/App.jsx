import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ErrorMessage from "./components/ErrorMessage";

const API_KEY = "41f082ee82d5d1298bf179fc6e31dd43";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeatherData = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );

      if (!response.ok) {
        throw new Error("City not found try other name");
      }
      const data = await response.json();
      setWeatherData(data);
      console.log(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (weatherData) {
        fetchWeatherData(weatherData.name);
      }
    }, 300000);

    return () => clearInterval(interval);
  }, [weatherData]);

  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-8">
          Weather Dashboard
        </h1>
        <SearchBar onSearch={fetchWeatherData} />
        {loading && <p className="text-center">Loading...</p>}
        {error && <ErrorMessage message={error} />}
        {weatherData && <WeatherCard weatherData={weatherData} />}
      </div>
    </div>
  );
}

export default App;
