// add scripts

//PROBLEM 1
function largestNumber (array) {
  var largest = array[0];

  for (var i = 0; i < array.length; i++) {
    if(array[i] > largest) {
      largest = array[i];
    }
  }
  return largest;
}

//PROBLEM 2
function oddNumber (number) {
  var odd = [];

  if(number > 100 || number < 0) {
    return "number has to be between 0 and 100";
  }
  if (number <= 40){
    return number;
  } else {
  for (var i = 40; i <= number; i++) {
    if(i%2 === 1) {
      odd.push(i);
      }
    }
  }
  return odd;
}

module.exports = {
  largestNumber: largestNumber,
  oddNumber: oddNumber
}
