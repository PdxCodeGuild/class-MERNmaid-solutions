/*
Date: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
Math: Google
*/

const SECRET_KEY = require("./.env"); // this is the secret key from the .env file
const axios = require("axios"); // axios

const buildQueryURL = (params) => {
	let queryString = "?";
	Object.keys(params).forEach((key) => {
		queryString += `${key}=${params[key]}&`;
	});
	return queryString.slice(0, -1);
}; // build query from params

const queryParams = buildQueryURL({
	lat: 45.51,
	lon: -122.67,
	appid: SECRET_KEY.SECRET_KEY,
	units: "imperial",
}); // build the query string

function getForecast() {
	const query = `https://api.openweathermap.org/data/2.5/onecall` + queryParams;
	axios.get(query).then((response) => {
		for (let i = 0; i < 4; i++) {
			// let fTemp = Math.floor(
			// 	((response.data.hourly[i].temp - 273.15) * 9) / 5 + 32
			// ); // convert to fahrenheit; replaced by units param.
			let timeConversion = new Date(
				response.data.hourly[i].dt * 1000
			).getHours(); // convert to 24 hour time

			console.log(
				`+${i}h ${timeConversion}:00 Temp: ${response.data.hourly[i].temp}F Wind: ${response.data.hourly[i].wind_speed}mph ${response.data.hourly[i].weather[0].description}`
			); // print to console
		}
	});
}
console.log(`The Current Time is: ${new Date().toLocaleTimeString()}`);
console.log(`The Weather Forecast for the next three hours is:`);
getForecast();
