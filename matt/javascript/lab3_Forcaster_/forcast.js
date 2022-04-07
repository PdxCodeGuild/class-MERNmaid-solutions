const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();

const apiKey = process.env.SECRET_KEY;

const lat = '45.51'
const lon = '-122.67'
const part = ''
const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${part}&units=imperial&appid=`

const convertUnix = function (time) {
    const mili = time * 1000
    const dataTime = new Date(mili)
    return dataTime.toLocaleString()
}

const getResponse = async(url, apiKey) => {
    const response = await axios.get(url + apiKey)

    let result = ''
    let counter = 0;
    for (item of response.data.hourly){
        counter +=1

        result += "Date: " + convertUnix(item.dt) + ", Temp: "  + item.temp + ", Humidity: " + item.humidity +  "degrees, Wind: " + item.wind_speed + " mph\n"
        if (counter == 4){break}
    }
    
    console.log("4 Hour Forcast Portland Oregon\n" + result)
}

getResponse(url, apiKey)