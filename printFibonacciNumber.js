// Print the first 10 Fibonacci numbers.

function printNum() {
  let num1 = 0,
    num2 = 1,
    nxTerm;

  for (let i = 0; i < 10; i++) {
    console.log(num1);
    nxTerm = num1 + num2;
    num1 = num2;
    num2 = nxTerm;
  }
  return;
}

const result = printNum();
console.log(result);
