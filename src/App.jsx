import React from 'react';
import './App.css';
import { WeatherProvider } from './contex/WeatherContex';
import SearchBar from './components/SearchBar';
import WeatherInfo from './components/WeatherInfo';

function App() {
  return (
    <WeatherProvider>
      <div className="bg-gray-100 text-gray-900 min-h-screen">
        <div className="max-w-md mx-auto pt-10 px-4 text-center">
          <h1 className="text-2xl font-bold mb-4">🌤️ Weather App</h1>

          <SearchBar />
          <WeatherInfo />

          <footer className="mt-10 mb-4 text-center text-gray-500 text-sm">
            © 2025 Tasnimul Hasan Rafi
          </footer>
        </div>
      </div>
    </WeatherProvider>
  );
}

export default App;
