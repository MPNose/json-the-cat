const needle = require('needle');






const fetchBreedDescription = function(breedName, callback) {
  needle.get(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error, null);
    }
    if (!breedName) {
      callback('Sorry, no kitty found.', null);
    } else if (!body[0]) {
      callback(`${breedName} is not a cat.`, null);
    } else {
      callback(null, body[0].description);
    }
    
  });
};


module.exports = {fetchBreedDescription};

// fetchBreedDescription('siberian', callback);


// if (!breedName) {
//   console.log(`Sorry, no kitty found.`)
// } else if (!body[0]) {
//   console.log(`${breedName} is not a cat`)
// } else {
// console.log('Description: ', body[0].description);
// }




