const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();


const apiKey = process.env.SECRET_KEY;
const url = "https://api.openweathermap.org/data/2.5/onecall?lat=45.52&lon=-122.67&exclude=daily,minutely&units=imperial&appid=";

const weather = async (url, apiKey) => {
  const response = await axios.get(url + apiKey);
  console.log(response.data.hourly[0].dt)
  for (hour of response.data.hourly) {
    console.log(hour.temp)
  }
}

console.log(weather(url, apiKey))






