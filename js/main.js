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

//PROBLEM 6

test = 123;
function randomNumberSum (number) {
  if (number > 10000 || number < 0) {
    return "number has to be between 0 and 10000";
  }

  var numArray = number.toString().split('');
  var sumArray = 0;

  for (var i = 0; i < numArray.length; i++) {
    sumArray += parseInt(numArray[i]);
  }

  return sumArray;
}

//PROBLEM 7
function numberSumSingle (number) {
  if (number > 10000 || number < 0) {
    return "number has to be between 0 and 10000";
  }

  var numArray = number.toString().split('');
  var sumArray = 0;

    for (var i = 0; i < numArray.length; i++) {
        sumArray += parseInt(numArray[i]);
        if (sumArray >= 10) {
          sumArray -= parseInt(numArray[i]);
        }
    }
  return(sumArray);

}

//PROBLEM 8
function divisibleNum (num1, num2) {

  if ((num1 || num2) > 100 || (num1 || num2) < 0) {
    return "number has to be between 0 and 100";
  }

  var smaller;

  if (num1 < num2) {
    smaller = num1;
  } else {
    smaller = num2;
  }

  for (var i = 2; i <= smaller; i++) {
      if (num1 % i === 0 && num2 % i === 0) {
        return i;
      }
      else if (num1 % i !== 0 && num2 % i !== 0) {
        return "sorry";
      }
  }
}

//PROBLEM 9 -- in progress
function leastCommonMultiple (num1, num2) {

  function gcd (num1, num2) {

  if ((num1 || num2) > 100 || (num1 || num2) < 0) {
    return "number has to be between 0 and 100";
  }

  var smaller;

  if (num1 < num2) {
    smaller = num1;
  } else {
    smaller = num2;
  }

  for (var i = 2; i <= smaller; i++) {
      if (num1 % i === 0 && num2 % i === 0) {
        return i;
      }
      else if (num1 % i !== 0 && num2 % i !== 0) {
        return "sorry";
      }
  }
}
  return num1*num2/gcd(num1,num2);

}

//PROBLEM 10
function averageStdDev (num1, num2) {

  var average = (num1 + num2)/2;
  var diffNum1 = num1 - average;
  var diffNum2= num2 - average;

  var stdDev = Math.sqrt(((diffNum1*diffNum1) + (diffNum2*diffNum2))/2);

  var results = "average " +average + ", standard deviation " + stdDev;

  return results;
}


module.exports = {
  largestNumber: largestNumber,
  oddNumber: oddNumber,
  evenNumber: evenNumber,
  evenNumberAndCountDown: evenNumberAndCountDown,
  randomNumberSum: randomNumberSum,
  numberSumSingle: numberSumSingle,
  divisibleNum: divisibleNum,
  leastCommonMultiple: leastCommonMultiple,
  averageStdDev: averageStdDev
}
