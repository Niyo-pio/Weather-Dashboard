import React from "react";

function WeatherCard({ weatherData }) {
  const { name, main, wind, weather, sys } = weatherData;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div>
        <h2 className="text-2xl text-center font-bold mb-4">
          {name}{" "}
          <span className="inline-block text-xs font-normal">
            /{sys.country}
          </span>
        </h2>
      </div>
      <div className="flex flex-col sm:flex-row items-center content-center gap-8 bg-blue-200 rounded-md mb-4 p-6 ">
        <div>
          <img
            src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
            alt={weather[0].description}
            className="w-16 h-16 mr-4 text-base"
          />
          <p className=" text-gray-600">{weather[0].description}</p>
        </div>

        <p className="text-4xl font-bold">{Math.round(main.temp)}°C</p>

        <div>
          <p className="text-xl font-semibold">Feels like</p>
          <p className="text-gray-600">{main.feels_like}°C</p>
        </div>
      </div>
      <div className="flex flex-col md:grid grid-cols-2 text-center items-center content-center gap-8">
        <div>
          <p className="text-gray-600">Humidity</p>
          <p className="text-xl font-semibold">{main.humidity}%</p>
        </div>
        <div>
          <p className="text-gray-600">Wind Speed</p>
          <p className="text-xl font-semibold">{wind.speed} m/s</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
