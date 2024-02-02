// 1. Give a string, reverse each word in the sentence
//    hafijur
//    rujifah

// solution 1

var str = "Hafijur Rahman";

var savedStrArray = str.split(" ").map(function (word) {
  return word.split("").reverse().join("");
});

console.log(savedStrArray.join(" "));
