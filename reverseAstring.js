// Reverse a string  (  eg. “Sunday” should be “yadnuS”).

function printNum() {
  const text = "Today is Monday";
  let reverseText = "";

  for (let i = text.length - 1; i >= 0; i--) {
    reverseText += text[i];
  }
  //   console.log(reverseText);
  return reverseText;
}

const result = printNum();
console.log(result);
