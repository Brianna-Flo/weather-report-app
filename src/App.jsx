import React from "react";
import ReactDOM from "react-dom";
import './App.css'
import SearchForm from './SearchForm';
import Forecast from './Forecast';
import data from './data/data.js';
// import use state hook from react library
import { useState, useEffect } from 'react';


function App() {
  // Logic and state hooks will be placed here
  // set initial values for city
  // takes in original state as argument and returns array
  // arr[0]: current state value
  // arr[1]: function to update value
  const[city, setCity] = useState('Manhatten');
  const[weatherData, setWeatherData] = useState(data);

  // handle search when city changes
  const handleCityChange = (newCity) => {
    setCity(newCity);
  }

// fetching data
// asynch (something that doesnt finish immediately) allows you to use await within function (ex load data from server, wait for user input, etc)
  const fetchData = async () => {
    try {
      const apiKey = import.meta.env.VITE_APP_API_KEY;
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`);
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }
      const newData = await response.json();
      setWeatherData(newData);
    } catch (error) {
      console.error(error);
    }
  };
  // fetch data when city state changes
  useEffect(() => {
    if (city) {
      fetchData();
    }
  }, [city]);

  return (
    <div className="App">
      <header>
        <h1 className="title">Weather Report</h1>
        <SearchForm onCityChange={handleCityChange} />
      </header>
        <Forecast forecastData={weatherData}/>
    </div>
  );
}

export default App;




// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more!
//       </p>
//     </>
//   )
// }

// export default App