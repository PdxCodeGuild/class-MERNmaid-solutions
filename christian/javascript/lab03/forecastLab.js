const axios = require("axios");  // import axios and dotenv
const dotenv = require("dotenv");

dotenv.config();


const apiKey = process.env.SECRET_KEY; //hide key in env file
const url = "https://api.openweathermap.org/data/2.5/onecall?lat=45.52&lon=-122.67&exclude=daily,minutely&units=imperial&appid=";

//async format logic 
const weather = async (url, apiKey) => {
  const response = await axios.get(url + apiKey); // response from API in variable
  let message = '' // empty message to put api data and response in
  let time = 0 // counter  to stop loop at 4

  // console.log(response.data.hourly[0].dt) 
  for (hour of response.data.hourly) {
    time += 1 // increase counter
    message += "Temperature: " + hour.temp + " degrees," + " Feels like: " + hour.feels_like + " degrees, " + "Wind speed: " + hour.wind_speed + "mph" + " Humidity: " + hour.humidity + " percent\n"// concantinate data from api with readable message
    if (time === 4) 
    {break}  // stop counter at 4 displays
    // console.log(message)
  }
  console.log("Four hour weather for Portland is...\n" + message)

}
weather(url, apiKey)






