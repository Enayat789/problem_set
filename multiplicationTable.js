// Print the multiplication table with 7
function printNum() {
  var num = [];
  for (let i = 1; i <= 10; i++) {
    num.push(" 7 " + " x " + i + " = " + i * 7);
  }
  return num;
}

const result = printNum();
console.log(result);
