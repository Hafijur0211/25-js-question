// 9. Write a Javascript function that accepts a string as a parameter and converts the first letter of each word of the string to in upper case

// hafijur kaise ho
// Hafijur Kaise Ho

// solution

function capitalFirstLetter(str) {
 var allwords = str.split(" ").map(function (word) {
    return word.charAt(0).toUpperCase() + word.substring(1);
  });
 
  return allwords.join(" ")
}


console.log(capitalFirstLetter("hafijur kaise ho"))