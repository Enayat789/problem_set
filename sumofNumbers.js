// Calculate the sum of numbers from 1 to 10

function sumNumbers() {
//   var num = [];
  var sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += i;
    // num.push(sum);
  }
  
  return sum;
}

const result = sumNumbers();
console.log(result);
