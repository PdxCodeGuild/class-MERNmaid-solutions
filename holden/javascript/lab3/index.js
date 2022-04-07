const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();

const apiKey = process.env.API_KEY;
const lat=45.51;
const lon=-122.67;

axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,daily,alerts&appid=${apiKey}`).then((response)=>{
  const resp = response.data;
  const sliced = [resp.current, ...resp.hourly.slice(0,4)]
  const legible = sliced.map(legify)
  
  console.table(legible);
  // if resp.
})

function legify(object) {
  const time = new Date(object.dt*1000)
  return {'time': timeconvert(time),'Degrees F': Math.round(((object.temp-273.15)*9/5+32)*100)/100, "feels like": Math.round(((object.feels_like-273.15)*9/5+32)*100)/100, "weather": object.weather[0].description};
}
function timeconvert(dateObj) {
  const time = dateObj.getHours() + ':' + dateObj.getMinutes()
  if (time.length == 4){
    return time + "0"
  }
  return time
}