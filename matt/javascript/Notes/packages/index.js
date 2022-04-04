const axios = require("axios");

//     console.log("Promise resolved")
// const response = axios.get("https://google.com").then(() => {
// })

// // Get resposne awaiting for the response, NOT async 
// const getGoogle = async () => {
//     const response = await axios.get("https://google.com")
//     console.log(response)
// }

// getGoogle()


// const promise = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//         console.log("It's been 2 seconds")
//         // resolve("Completed")
//         reject("Failed to run 2 seconds")
//     }, 2000);
// });

// console.log("Before promise")
// promise.then((data) =>{
//     console.log(data)
// })
// console.log("After Promise")




// const getGoogle = async () => {
//     console.log("Before promise")
//     const data = await promise
//     console.log(data)
//     console.log("After promise")
// };

// getGoogle()


const url = "http://www.omdbapi.com/?apikey="
const apiKey = "96c4bce"


const getMovie = async (url, apiKey) => {
    const response = await axios.get(url + apiKey + "&s=Harry Potter")
    console.log(response.data);

}


getMovie(url, apiKey)



