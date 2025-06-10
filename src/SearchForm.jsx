import React from "react";
import ReactDOM from "react-dom";
import './SearchForm.css'

const SearchForm = ({ onCityChange }) => {
    // event handler
    const handleSubmit = (event) => {
        event.preventDefault();
        // extract the value given from the input element
        const newCity = event.target.elements.searchInput.value;
        // call function from App.jsx passing in city submitted
        onCityChange (newCity);
    }

    return (
        <>
            {/* when a city is submitted, lifts the state passed down from app */}
            {/* Which is then passed into the forecast component to render data based on input*/}
            <form onSubmit={handleSubmit} className="search-form">
                {/* <input for="search" type="search"></input> */}
                <input className="search" name="searchInput" type="text" defaultValue="Enter city name" />
                <button className="search-btn" type="submit">Search</button>
            </form>
        </>
    );
};

export default SearchForm;