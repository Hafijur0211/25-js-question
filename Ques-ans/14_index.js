// loop an array of objects and remove all objects which don't have gender's value male

var arr = [
    { name: "hafijur", gender: "male" },
    { name: "harshita", gender: "female" },
    { name: "rohan", gender: "notspecified" },
    { name: "partima", gender: "female" },
    { name: "sneha", gender: "female" },
];

// var newarr = arr.filter(function (elem) {
//     return elem.gender === "male";
// });
// console.log(newarr);

// sbse pahle total non-male count lo

var count = 0;
arr.forEach(function (elem) {
    if (elem.gender !== "male") count++;
});
// console.log(count);

// ek non bande ko hatne ka code likho

for (var i = 1; i <= count; i++) {
    for (var j = 0; j < arr.length; j++) {
        if (arr[j].gender === "male") {
            arr.splice(j, 1);
        }
    }
}

console.log(arr)
// fir us code ko total non-male chala do
