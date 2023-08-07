// Calculate the sum of odd numbers greater than 10 and less than 30

function sumNumbers() {
//   var num = [];
    var sum = 0;
  for (let i = 10; i <= 30; i++) {
    // num.push(sum);
    if (i % 2 != 0) {
      sum += i;
    //   num.push(i);
    }
  }
  return sum;
}

const result = sumNumbers();
console.log(result);
