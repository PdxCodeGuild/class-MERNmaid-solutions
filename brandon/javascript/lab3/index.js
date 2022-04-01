const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();
const apiKey = process.env.API_KEY;


const getWeather = async (apiKey) => {

  try {
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=27.1975&lon=80.2528&appid=${apiKey}`);

    const hrly = res.data.hourly

    const hrlyTemps = hrly.map((hr) => {
      return hr.temp;
    })

    console.log(hrlyTemps.slice(0,4));

  } catch(e) {
    console.log(e);
  }

};

getWeather(apiKey);
