var code = require('../js/main.js');


//PROBLEM 1
describe('Problem 1', function() {
  it('should return the largest number', function() {
    expect(code.largestNumber([10, 20, 30])).toBe(30);
    expect(code.largestNumber([10, 20, 40])).toBe(40);
  });
});

//PROBLEM 2
describe('Problem 2', function() {
  it('should take a random number from 0 to 100, returns odd numbers from 40 to the random number', function() {
    expect(code.oddNumber(48)).toEqual([41,43,45,47]);
    expect(code.oddNumber(105)).toEqual("number has to be between 0 and 100");
    expect(code.oddNumber(30)).toEqual(30);
  });
});
