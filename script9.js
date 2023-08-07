// Calculate the sum of numbers in an array of numbers.
// array=[10,22,322,452,766]

function printNum() {
  var num = 0;
  var array = [10, 22, 322, 452, 766];
  for (let i = 0; i < array.length; i++) {
    num += array[i];
    // num.push(i);
  }
  return num;
}

const result = printNum();
console.log(result);
