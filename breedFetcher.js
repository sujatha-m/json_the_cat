const request = require('request');
const breedName = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
request(url, (error, response, body) => {
  if (error) {
    console.log("error :", error);
  }
  //console.log('response:', response);
  //console.log('body:', body);
  //console.log(typeof body);
  const data = JSON.parse(body);
  const breed = data[0];
  //console.log(breed);
  if (breed) {
    console.log(breed.description);
  } else {
    console.log(`failed to find breed ${breedName}`);
  }
  //console.log(data);
  //console.log(typeof data);
  //console.log('error:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML fo
});
