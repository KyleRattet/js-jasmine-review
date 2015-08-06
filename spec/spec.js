var code = require('../js/main.js');


//Problem 1
describe('Problem 1', function() {
  it('should return the largest number', function() {
    expect(code.largestNumber([10, 20, 30])).toBe(30);
    expect(code.largestNumber([10, 20, 40])).toBe(40);
  });
});
