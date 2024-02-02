// Write a javascript function to clone an array

// Method one

// function cloneArr(arr) {
//   return [...arr];
// }

// var newArr = cloneArr([1, 2, 3, 4]);
// console.log(newArr);

// Method two
/*

function cloneArr(arr) {
    var newArr = [];
    arr.forEach(function (e) {
        newArr.push(e);
    });
    return newArr;
}

var clone = [1, 2, 3];
console.log(clone);
var newArr = cloneArr(clone);
newArr.pop();
console.log(newArr);

*/

// Method three

function cloneArr(arr) {
    return arr.map(function (e) {
        return e;
    });
}

var newArr = cloneArr([1, 2, 3, 4]);
console.log(newArr);
