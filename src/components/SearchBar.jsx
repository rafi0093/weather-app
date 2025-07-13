import { useContext, useState } from 'react';
import { WeatherContext } from '../contex/WeatherContex';

const SearchBar = () => {
  const [input, setInput] = useState('');
  const { fatchWeather, loading } = useContext(WeatherContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      fatchWeather(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center gap-2 mb-6">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter city name"
        className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-400 w-64"
      />
      <button
        type="submit"
        disabled={loading}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-400"
      >
        {loading ? 'Loading...' : 'Search'}
      </button>
    </form>
  );
};

export default SearchBar;
