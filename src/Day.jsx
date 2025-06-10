import React from "react";
import ReactDOM from "react-dom";
import './Day.css'

import PropTypes from 'prop-types';

function Day ({date, temperature, weather, icon}) {
// function Day(props) {
  // conditional if hot, red
  const temperatureClass = Number(temperature) < 60 ? "cold" : "hot";
  return (  
    <div className="day">
        <p className="date">{date}</p>
        <p className={`temperature ${temperatureClass}`}>{temperature}°</p>
        <p className="weather">{weather}</p>
        <img className="weather-icon" src={`http://openweathermap.org/img/wn/${icon}.png`} alt={weather} />
    </div>
  );
}

// Prop validation ensure parameters correct or expected type
// assign an object: key = name of prop
// value = type
Day.propTypes = {
    date: PropTypes.string.isRequired, // must be a string; props must be provided
    temperature: PropTypes.string.isRequired,
    weather: PropTypes.string.isRequired
};
// if props provided incorrectly, react will generate a warning

export default Day;