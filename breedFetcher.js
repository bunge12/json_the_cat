const request = require('request');

const q = process.argv.slice(2, 3).toString();

request('https://api.thecatapi.com/v1/breeds/search?q=' + q, function (error, response, body) {
  if (error) {
    console.log('There was an error! Error code: ' + error.code);
  } else {
    const data = JSON.parse(body);
    if (typeof data[0] !== 'undefined') {
      console.log(data[0].description);
    } else {
      console.log('Breed not found! Try another one.');
    }
  }
});