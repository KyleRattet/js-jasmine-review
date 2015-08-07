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

//PROBLEM 3
function evenNumber (number) {

  if(number > 100 || number < 0) {
    return "number has to be between 0 and 100";
  }

  var even = [];

  for (var i = 0; i <= number; i++) {
    if(i%2 === 0) {
      even.push(i);
    }
  }
  return even;
}

//PROBLEM 5
function evenNumberAndCountDown (number) {

  if(number > 100 || number < 0) {
    return "number has to be between 0 and 100";
  }

  var even = [];
  var countDown = [];

  if (number > 40) {
    for (var i = 40; i <= number; i++) {
      if (i%2 === 0) {
        even.push(i);
      }
    }
    return even;
  } else {
    for (var i = 40; i >= number; i--) {
      countDown.push(i);
    }
    return countDown;
  }
}

module.exports = {
  largestNumber: largestNumber,
  oddNumber: oddNumber,
  evenNumber: evenNumber,
  evenNumberAndCountDown: evenNumberAndCountDown
}
