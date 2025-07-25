// display temperature as a string in Fahrenheit
function kelvinToFahrenheit (kelvinTemp) {
    let result = 1.8 * (kelvinTemp - 273) + 32;
    // console.log(result.toFixed(2));
    // round result to 2 decimals and convert to string
    return result.toFixed(2);
}

// javascript has Date class that takes in a string in ISO format
function formatDate (inputDate) {
    // create a date object
    const myDateObj = new Date(inputDate);
    // convert to a specific format
    const formatOptions = {
        weekday: "short",
        month: "short",
        day: "numeric"
    };
    return myDateObj.toLocaleDateString(undefined, formatOptions);
}

// we only need dt_txt, temp, main, description, icon
// function parseForecastData (data) {
//     // array to hold objects objects containing necessary data
//     const parsedData = [];
//     // iterate through each object in the sample data
//     for(const entry of data) {
//         // create a javascript object with info for each date
//         const newEntry = {
//             date: formatDate(entry.dt_txt),  // formated string of date
//             temperature: kelvinToFarenheit(entry.main.temp), // temp as a string rounded to 2 decimals
//             weather: entry.weather[0].main,
//             description: entry.weather[0].description,
//             icon: entry.weather[0].icon
//         };
//         parsedData.push(newEntry);
//     }
//     // return array of objects
//     return parsedData;
// }

const parseForecastData = (forecastData) => {
  return forecastData.list.map(data => ({
    date: formatDate(data.dt_txt),
    temperature: kelvinToFahrenheit(data.main.temp),
    weather: data.weather[0].main,
    description: data.weather[0].description,
    icon: data.weather[0].icon, // Added the weather icon
  }));
};


export { parseForecastData };