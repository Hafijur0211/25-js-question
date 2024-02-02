// 7. Write a javascript function that check whether a passed string is palindrome or not

// function stringPalChecker(str) {
//   var reversed = str.split("").reverse().join("");
//   if(reversed === str) return true
//   else return false
// }

// ternary operator

function stringPalChecker(str) {
  var reversed = str.split("").reverse().join("");
  return reversed === str;
}

console.log(stringPalChecker("poop"));
console.log(stringPalChecker("loop"));
