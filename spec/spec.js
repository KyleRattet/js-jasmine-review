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


//PROBLEM 3
describe('Problem 3', function() {
  it('should take a random number from 0 to 100, returns even numbers from 0 to the random number', function() {
    expect(code.evenNumber(6)).toEqual([0,2,4,6]);
    expect(code.evenNumber(120)).toEqual("number has to be between 0 and 100");
  });
});

//PROBLEM 5
describe('Problem 5', function() {
  it('should take a random number from 0 to 100, returns odd numbers from 40 to the random number, if random number is smaller than 40 return all of the numbers from 40 down to random number', function() {
    expect(code.evenNumberAndCountDown(105)).toEqual("number has to be between 0 and 100");
    expect(code.evenNumberAndCountDown(46)).toEqual([40, 42, 44, 46]);
    expect(code.evenNumberAndCountDown(37)).toEqual([40, 39, 38, 37]);
  });
});


//PROBLEM 6
describe('Problem 6', function() {
  it('should take a random number from 0 to 10,000 and returns the sum of its digits', function() {
    expect(code.randomNumberSum(10001)).toEqual("number has to be between 0 and 10000");
    expect(code.randomNumberSum(123)).toEqual(6);
    expect(code.randomNumberSum(1049)).toEqual(14);
  });
});

//PROBLEM 7
describe('Problem 7', function() {
  it('should take a random number from 0 to 10,000 and returns the sum of its digits so long as the sum is a single digit', function() {
    expect(code.numberSumSingle(10001)).toEqual("number has to be between 0 and 10000");
    expect(code.numberSumSingle(129)).toEqual(3);
  });
});

//PROBLEM 8
describe('Problem 8', function() {
  it('should take two random numbers from 0 to 100 as arguments and returns the smaller number that is greater than one, such that both numbers are divided by it with no remainder', function() {
    expect(code.divisibleNum(105)).toEqual("number has to be between 0 and 100");
    expect(code.divisibleNum(6,9)).toEqual(3);
    expect(code.divisibleNum(20,4)).toEqual(2);
    expect(code.divisibleNum(5,3)).toEqual('sorry');
  });
});

//PROBLEM 9 -- in progress
describe('Problem 9', function() {
  it('should take two random numbers and return their least common multiple', function() {
    expect(code.leastCommonMultiple(4,6)).toEqual(1);

  });
});

//PROBLEM 10
describe('Problem 10', function() {
  it('should take two random numbers and return their average and standard deviation', function() {
    expect(code.averageStdDev(4,6)).toEqual("average 5, standard deviation 1");
    expect(code.averageStdDev(2,10)).toEqual("average 6, standard deviation 4");
  });
});















