// 11. Write a javascript function to get the number of occurrences of each letter in specified string

// apple
// a = 1
// p = 2
// l = 1
// e = 1

function occ(str) {
    var occurrences = {};
    str.split("").forEach(function (elem) {
        if (occurrences.hasOwnProperty(elem) === false) {
            occurrences[elem] = 1;
        } else {
            occurrences[elem]++;
        }
    });

    return occurrences;
}

console.log(occ("apple"));
