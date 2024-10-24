const needle = require('needle');

const cat = process.argv[2];


needle.get(`https://api.thecatapi.com/v1/breeds/search?q=${cat}`, (error, response, body) => {
  if (error) {
    console.log(error.message);
  }
  if (!cat) {
    console.log(`Sorry, no kitty found.`)
  } else if (!body[0]) {
    console.log(`${cat} is not a cat`)
  } else {
  console.log('Description: ', body[0].description);
  }
});







