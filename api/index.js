const axios = require('axios');

let catEndPoint = "https://api.thecatapi.com/v1/"
let randomUserEndPoint = "https://randomuser.me/api/"

let breedRoute = "breeds"
let categoryRoute = "categories"

// axios.get(randomUserEndPoint)
// .then( (response) => {
//   console.log(response.data.results)
// })
// .catch( (error) => {
//   console.error(error)
// })


// axios.get(catEndPoint + breedRoute)
// .then( (response) => {
//   console.log(response)
// })
// .catch( (error) => {
//   console.error(error)
// })

fetch(randomUserEndPoint)
.then( (response) => {
  console.log(response.json())
})
.catch( (error) => {
  console.error(error)
})