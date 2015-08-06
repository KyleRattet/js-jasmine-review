// add scripts

function largestNumber (array) {
  var largest = array[0];

  for (var i = 0; i < array.length; i++) {
    if(array[i] > largest) {
      largest = array[i];
    }
  }
  return largest;
}


module.exports = {
  largestNumber: largestNumber
}
