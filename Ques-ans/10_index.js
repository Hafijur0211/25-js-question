// 10. write a javascript function which accepts a arguments and returns the type

// Note: There are six possible value that typeof return: Object, function, number, string, and undefined

function typeTeller(elem) {
  return typeof elem;
}

console.log(typeTeller([]));
console.log(typeTeller(12));
console.log(typeTeller("23"));
console.log(typeTeller(true));
console.log(typeTeller(undefined));
console.log(typeTeller(function() {}));
