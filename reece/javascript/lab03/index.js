const axios = require('axios');
const dotenv = require("dotenv");

dotenv.config();

const apiKey = process.env.SECRET_KEY
const lat = '45.51'
const lon = '-122.67'
const units = 'imperial'
const part = 'minutely'
const weather4 = []

const unixConversion = function (time) {
    const milliseconds = time * 1000
    const dateTime = new Date(milliseconds)
    return dateTime.toLocaleString()
}

const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${apiKey}&units=${units}`

const data = axios.get(url).then((info) => {
    weather4.push(info.data.current);
    const hourly = info.data.hourly;
    for (let i = 0; i < 3; i++){
        weather4.push(info.data.hourly[i])
    };
    for (let i = 0; i < weather4.length; i++){
        const currentDateTime = unixConversion(hourly[i].dt)
        const temp = hourly[i].temp
        const feelsLike = hourly[i].feels_like
        const humidity = hourly[i].humidity
        const windSpeed = hourly[i].wind_speed
        const weatherDesc = hourly[i].weather[0].main
        // const weatherDesc = hourly[i].weather.main
        console.log(currentDateTime)
        console.log(`   The weather will have ${weatherDesc} and be ${temp} degrees fahrenheit, but feel like ${feelsLike} degrees fahrenheit.`)
        console.log('-------------------------------')
    };
})