//  Calculate 10! ( search for factorial.)

function sumNumbers() {
  //   var num = [];
  var sum = 1;
  for (let i = 1; i <= 10; i++) {
    sum *= i;
    // num.push(sum);
  }
  return sum;
}

const result = sumNumbers();
console.log(result);
