//  Calculate 10! ( search for factorial.)

function numfactorial(factorialOf) {
  var sum = 1;
  for (let i = 1; i <= factorialOf; i++) {
    sum *= i;
  }
  return sum;
}

const result = numfactorial(10);
console.log(result);
