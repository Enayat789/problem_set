//    Print the odd numbers less than 100.

function oddNumbers() {
  var num = [];
  for (let i = 0; i < 100; i++) {
    if (i % 2 != 0) {
      num.push(i);
    }
  }
  return num;
}

const result = oddNumbers();
console.log(result);
