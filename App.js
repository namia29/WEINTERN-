

// // src/App.js
// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import './App.css';

// // const API_KEY = 'bc77ac238146e579e1d171b9b89880d7';
// // const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

// // function App() {
// //   const [city, setCity] = useState('New York');
// //   const [weather, setWeather] = useState(null);
// //   const [loading, setLoading] = useState(false);

// //   useEffect(() => {
// //     fetchWeather(city);
// //   }, []);

// //   const fetchWeather = async (city) => {
// //     setLoading(true);
// //     const cachedData = localStorage.getItem(city);
// //     if (cachedData) {
// //       setWeather(JSON.parse(cachedData));
// //       setLoading(false);
// //       return;
// //     }

// //     try {
// //       const response = await axios.get(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
// //       setWeather(response.data);
// //       localStorage.setItem(city, JSON.stringify(response.data));
// //     } catch (error) {
// //       console.error('Error fetching weather:', error);
// //     }
// //     setLoading(false);
// //   };

// //   return (
// //     <div className="app">
// //       <h1>Weather App</h1>
// //       <input
// //         type="text"
// //         value={city}
// //         onChange={(e) => setCity(e.target.value)}
// //         placeholder="Enter city name"
// //       />
// //       <button onClick= {() => fetchWeather(city)}>Get Weather</button>
// //       {loading && <p>Loading...</p>}
// //       {weather && (
// //         <div className="weather-info">
// //           <h2>{weather.name}, {weather.sys.country}</h2>
// //           <p>{weather.weather[0].description}</p>
// //           <p>Temperature: {weather.main.temp}°C</p>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default App;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './App.css';

// const API_KEY = 'bc77ac238146e579e1d171b9b89880d7';
// const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

// function App() {
//   const [city, setCity] = useState('New York');
//   const [weather, setWeather] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     fetchWeather(city);
//   }, []);

//   const fetchWeather = async (city) => {
//     setLoading(true);
//     const cachedData = localStorage.getItem(city);
//     if (cachedData) {
//       setWeather(JSON.parse(cachedData));
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await axios.get(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
//       setWeather(response.data);
//       localStorage.setItem(city, JSON.stringify(response.data));
//     } catch (error) {
//       console.error('Error fetching weather:', error);
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="app">
//       <h1>Weather App</h1>
//       <input
//         type="text"
//         value={city}
//         onChange={(e) => setCity(e.target.value)}
//         placeholder="Enter city name"
//         className="city-input"
//       />
//       <button 
//         onClick={() => fetchWeather(city)} 
//         className="fetch-button"
//       >
//         {loading ? 'Loading...' : 'Get Weather'}
//       </button>
//       {weather && (
//         <div className="weather-info">
//           <h2 className="city-name">{weather.name}, {weather.sys.country}</h2>
//           <p className="weather-description">{weather.weather[0].description}</p>
//           <p className="temperature">Temperature: {weather.main.temp}°C</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const API_KEY = 'bc77ac238146e579e1d171b9b89880d7';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

function App() {
  const [city, setCity] = useState('New York');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchWeather(city);
  }, []);

  const fetchWeather = async (city) => {
    setLoading(true);
    const cachedData = localStorage.getItem(city);
    if (cachedData) {
      setWeather(JSON.parse(cachedData));
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      setWeather(response.data);
      localStorage.setItem(city, JSON.stringify(response.data));
    } catch (error) {
      console.error('Error fetching weather:', error);
    }
    setLoading(false);
  };

  return (
    <div className="app">
      <h1>Weather App</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        className="city-input"
      />
      <button 
        onClick={() => fetchWeather(city)} 
        className="fetch-button"
      >
        {loading ? 'Loading...' : 'Get Weather'}
      </button>
      {weather && (
        <div className="weather-info">
          <h2 className="city-name">{weather.name}, {weather.sys.country}</h2>
          <p className="weather-description">{weather.weather[0].description}</p>
          <p className="temperature">Temperature: {weather.main.temp}°C</p>
        </div>
      )}
    </div>
  );
}

export default App;

