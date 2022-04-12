const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();

// const response = axios.get("https://google.com").then((data) => {
//   console.log(data);
// });

// console.log(response);

// const getGoogle = async () => {
//   const response = await axios.get("https://google.com");
//   console.log(response);
// };

// getGoogle();

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if ("cat" === "dog") {
//       reject("cats do not equal dogs");
//     }
//     console.log("It's been 2 seconds"); // 4
//     resolve("completed");
//   }, 2000);
// });

// console.log("Before promise"); // 1
// promise
//   .then((data) => {
//     console.log(data); // 2
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// console.log("After promise"); //3

// const getGoogle = async () => {
//   console.log("Before promise");
//   const data = await promise;
//   console.log(data);
//   console.log("After promise");
// };
// getGoogle();

const url = "http://www.omdbapi.com/?apikey=";
const apiKey = process.env.API_KEY;

const getMovie = async (url, apiKey) => {
  const response = await axios.get(url + apiKey + "&s=Harry Potter");
  return response.data.Search;
};

// IEFE

// (async function () {
//   console.log("Hello from an iefe");
// })();

(async () => {
  const movies = await getMovie(url, apiKey);

  const titles = movies.map((movie) => {
    return movie.Title;
  });

  const movies2010 = movies.filter((movie) => {
    return movie.Year === "2010";
  });

  console.table(titles);
})();
