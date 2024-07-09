// Replace with your API URL
const apiUrl = 'https://api.themoviedb.org/3/genre/movie/list?api_key=84f7cef1d846f177a3ebe1ef62df9959';

// Use the fetch function to get the data
fetch(apiUrl)
 .then(response => {
    // Check if the response is successful (status code in the 200-299 range)
    if (response.ok) {
      // If it is, parse the response as JSON
      return response.json();
    } else {
      // If it's not, throw an error
      throw new Error('Error in the response.');
      
    }
    
  })
 .then(data => {
    // If the data is successfully parsed as JSON, log it to the console
    console.log('Data:', data);
    console.log("hello world");
  
  })
 
 .catch(error => {
    // If there's an error, log it to the console
    console.error('Error:', error);
 });
// import axios from 'axios';

// const options = {
//   method: 'GET',
//   url: 'https://api.themoviedb.org/3/discover/movie',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer 84f7cef1d846f177a3ebe1ef62df9959'
//   }
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
  
//   .catch(function (error) {
//     console.error(error);
//   });