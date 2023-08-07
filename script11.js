// Calculate the average of the numbers in an array of numbers.

function printNum() {
  var num = 0;
  var array = [1, 2, 3, 4];
  for (let i = 0; i < array.length; i++) {
    num += array[i];
  }
  return num / array.length;
}

const result = printNum();
console.log(result);
