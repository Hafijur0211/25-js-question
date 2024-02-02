// 6. Write a javascript function that reverse a number

// Method 1

// function reverseNumber(num) {
//     return Number(num.toString().split("").reverse().join(""));
// }

// console.log(reverseNumber(12));

// Method 2

function reverseNumber(num) {
  var rev = 0;
  while (num > 0) {
    var rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
  }
  return rev
}

console.log(reverseNumber(1234))
