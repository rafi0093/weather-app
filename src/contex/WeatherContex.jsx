import { createContext, useState } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fatchWeather = async (cityName) => {
    setLoading(true);
    setError('');
    setCity(cityName);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=019c994287b0984954777b3f17d94455&units=metric`
      );
      const data = await response.json();
      console.log(data);

      if (response.ok) {
        setWeather(data);
      } else {
        setError(data.message || 'Fetching Weather Error');
      }
    } catch (error) {
      setError('Network Error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <WeatherContext.Provider
      value={{ city, weather, loading, error, fatchWeather }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
