import React from 'react';
import ReactDOM from 'react-dom';
import './Forecast.css'
import Day from './Day';
import { parseForecastData } from './utils/utils';

// import PropTypes
import PropTypes from 'prop-types';


const Forecast = ({forecastData}) => {
    // wait for API call to complete
    if (!forecastData) {
        return <p>Loading weather data...</p>;
    } else {
        // create an array of objects containing only the data we need
        const preparedData = parseForecastData(forecastData);
        console.log(preparedData);
        // map method to make a day component for each object in prepared data
        // iterate through prepared data and apply a function to each
        let date = null;
        return (
            <div className="forecast-container">
                <p>📍 Location: {forecastData.city.name ? forecastData.city.name : ""}</p>
                <div className="forecast-cards">
                {
                    preparedData.map(day => {
                        // check if date from prepared data is
                        if (day.date !== date) {
                            date = day.date;
                            return (
                                <Day key={day.date} date={day.date} temperature={day.temperature} weather={day.weather} icon={day.icon}/>
                            );
                        }
                    })
                }
                </div>
            </div>
        );
    }
};

// Forecast.propTypes = {
//     forecastData: PropTypes.object.isRequired;
// }

// <Day date="Mon" temperature="72" weather="Sunny"/>
// <Day date="Tue" temperature="59" weather="Cloudy"/>
// <Day date="Wed" temperature="75" weather="Rainy"/>
// <Day date="Thu" temperature="64" weather="Windy"/>
// <Day date="Fri" temperature="70" weather="Sunny"/>

export default Forecast;