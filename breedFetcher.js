const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, function (error, response, body) {
    if (error) {
      callback(error.code, null);
    } else {
      const data = JSON.parse(body);
      if (typeof data[0] !== 'undefined') {
        callback(null, data[0].description);
      } else {
        callback(null, 'Breed not found! Try another one.');
      }
    }
  });
};

module.exports = fetchBreedDescription;