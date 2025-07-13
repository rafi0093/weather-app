import { useContext } from 'react';
import { WeatherContext } from '../contex/WeatherContex';

const WeatherInfo = () => {
  const { weather, loading, error } = useContext(WeatherContext);

  if (loading) return <p className="text-blue-500 font-medium animate-pulse">Loading weather...</p>;
  if (error) return <p className="text-red-600 font-semibold">{error}</p>;
  if (!weather) return null;

  const {
    name,
    main: { temp, humidity },
    weather: weatherDetails,
    wind: { speed },
    rain,
  } = weather;

  const iconCode = weatherDetails[0].icon;
  const description = weatherDetails[0].description;

  // Rain volume in mm for last 1 hour, fallback to 0
  const rainVolume = rain?.["1h"] || 0;

  return (
    <div className="bg-gradient-to-br from-blue-100 to-blue-300 rounded-2xl shadow-xl p-6 mt-6 text-gray-800">
      <h2 className="text-2xl font-bold mb-3">📍 {name}</h2>

      <div className="flex flex-col items-center">
        <img
          src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`}
          alt="Weather Icon"
          className="w-20 h-20 mb-2"
        />
        <p className="text-4xl font-bold text-blue-700 mb-1">🌡️ {temp}°C</p>
        <p className="capitalize text-lg text-gray-700">☁️ {description}</p>
      </div>

      <div className="mt-4 space-y-1 text-sm">
        <p>💧 Humidity: {humidity}%</p>
        <p>🌬️ Wind: {speed} km/h</p>
        <p>🌧️ Rain: {rainVolume > 0 ? `${rainVolume} mm` : "No rain expected"}</p>
      </div>
    </div>
  );
};

export default WeatherInfo;
