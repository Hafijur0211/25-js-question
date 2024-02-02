// 8. Write a javascript function that return a passed string with letters in alphabetical order
// Example - hafijur 
// rujifah

// solution

function stringAlphaBeticalOrder(str){
    return str.split("").sort().join("")
}

console.log(stringAlphaBeticalOrder("hafijur"))