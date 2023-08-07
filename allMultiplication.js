//Print all the multiplication tables with numbers from 1 to 10.

function printNum() {
  var num = [];
  for (let i = 1; i <= 10; i++) {
    num.push(" 1 " + " x " + i + " = " + i * 1);
    num.push(" 2 " + " x " + i + " = " + i * 2);
  }
  return num;
}

const result = printNum();
console.log(result);

// num.push(" 2 " + " x " + i + " = " + i * 2);
// num.push(" 3 " + " x " + i + " = " + i * 3);
// num.push(" 4 " + " x " + i + " = " + i * 4);
// num.push(" 5 " + " x " + i + " = " + i * 5);
// num.push(" 6 " + " x " + i + " = " + i * 6);
// num.push(" 7 " + " x " + i + " = " + i * 7);
// num.push(" 8 " + " x " + i + " = " + i * 8);
