// in an array of numbers and strings, only add those members which are not strings

var arr = ["har", 23, "jah", 67, "haj", "shdh", 87];
var sum = 0;

arr.forEach(function (elem) {
    if (typeof elem === "number") {
        sum = sum + elem;
    }
});

console.log(sum);
