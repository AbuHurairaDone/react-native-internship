import { useState } from 'react'
import './App.css'

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setCity(e.target.value);
  }

  const fetchWeatherData = async () => {
    if (!city.trim()) {
      setError("Please enter a city name");
      return;
    }
    setLoading(true);
    setError("");
    setWeather(null);
    try {
      const geoRes = await fetch(`https://nominatim.openstreetmap.org/search?city=${city}&format=json`);
      const geoData = await geoRes.json();
      
      if (geoData.length === 0) {
        throw new Error("City not found. Please check the spelling.");
      }
      console.log(geoData);
      
      const { lat, lon } = geoData[0];
      const cityName = geoData[0].display_name;

      const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m`);
      const weatherData = await weatherRes.json();
      
      console.log(weatherData);
      const current = weatherData.current;
      setWeather({
        city: cityName,
        temperature: current.temperature_2m,
        humidity: current.relative_humidity_2m,
        windSpeed: current.wind_speed_10m,
        weatherCode: current.weather_code
      });
    } catch (e) {
      setError(e.message);
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  const getWeatherDescription = (code) => {
    const weatherCodes = {
      0: "Clear sky",
      1: "Mainly clear",
      2: "Partly cloudy",
      3: "Overcast",
      45: "Foggy",
      48: "Foggy",
      51: "Light drizzle",
      53: "Moderate drizzle",
      55: "Heavy drizzle",
      61: "Slight rain",
      63: "Moderate rain",
      65: "Heavy rain",
      71: "Slight snow",
      73: "Moderate snow",
      75: "Heavy snow",
      80: "Slight rain showers",
      81: "Moderate rain showers",
      82: "Heavy rain showers",
      85: "Slight snow showers",
      86: "Heavy snow showers"
    };
    return weatherCodes[code] || "Unknown";
  }

  return (
    <div style={{ padding: '20px', display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
      <h1>Weather App</h1>
      <input 
        type="text" 
        value={city} 
        onChange={handleChange} 
        placeholder="Enter city name"
        style={{ padding: '10px', marginRight: '10px', width: '300px', borderRadius:"10px" }}
      />
      <button 
        onClick={fetchWeatherData}
        style={{ padding: '10px 20px', margin:'10px', cursor: 'pointer', borderRadius:"10px" }}
      >
        Fetch Weather
      </button>
      
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {weather && (
        <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '15px', borderRadius: '5px' }}>
          <h2>{weather.city}</h2>
          <p><strong>Temperature:</strong> {weather.temperature}°C</p>
          <p><strong>Condition:</strong> {getWeatherDescription(weather.weatherCode)}</p>
          <p><strong>Humidity:</strong> {weather.humidity}%</p>
          <p><strong>Wind Speed:</strong> {weather.windSpeed} km/h</p>
        </div>
      )}
    </div>
  )
}

export default App
