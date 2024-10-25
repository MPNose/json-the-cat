const {fetchBreedDescription} = require('../breedFetcher');
const {assert} = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      assert.equal(err, null);
      
      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";
      
      assert.equal(expectedDesc, desc.trim());
      
      done();
    });
  });
  it('returns returns \'Sorry, no kitty found\' when no breed is entered', (done) => {
    fetchBreedDescription('', (err, desc) => {
      assert.equal(err, "Sorry, no kitty found.");
      const expectedDesc = null;
      assert.equal(expectedDesc, null);
      done();
    });
  })
  it('returns \'breedname is not a cat\' when unavailable breed is entered', (done) => {
    fetchBreedDescription("jjjj", (err, desc) => {
      assert.equal(err, `jjjj is not a cat.`);
      const expectedDesc = null;
      assert.equal(expectedDesc, null);
      done();
    });
  });
});