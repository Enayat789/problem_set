//   Print numbers from 1 to 10.

function printNum(lengthofArray) {
  var num = [];
  for (let i = 1; i <= lengthofArray; i++) {
    num.push(i)
  }
  return num;
}

const result = printNum(50);
console.log(result);
