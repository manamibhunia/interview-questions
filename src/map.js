var myMap = new Map();

var keyString = "a string",
    keyObj = {},
    keyFunc = function () {};

// setting the values
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, "value associated with keyObj");
myMap.set(keyFunc, "value associated with keyFunc");

console.log(myMap.size); // 3

// getting the values
console.log(myMap.get(keyString));    // "value associated with 'a string'"
console.log(myMap.get(keyObj));       // "value associated with keyObj"
console.log(myMap.get(keyFunc));      // "value associated with keyFunc"

console.log(myMap.get("a string"));   // "value associated with 'a string'"
                         // because keyString === 'a string'
console.log(myMap.get({}));           // undefined, because keyObj !== {}
console.log(myMap.get(function() {})) // undefined, because keyFunc !== function () {}


var myMap = new Map();
myMap.set(0, "zero");
myMap.set(1, "one");
for (var [key, value] of myMap) {
  console.log(key + " = " + value);
}
// Will show 2 logs; first with "0 = zero" and second with "1 = one"

for (var key of myMap.keys()) {
  console.log(key);
}
// Will show 2 logs; first with "0" and second with "1"

for (var value of myMap.values()) {
  console.log(value);
}
// Will show 2 logs; first with "zero" and second with "one"

for (var [key, value] of myMap.entries()) {
  console.log(key + " = " + value);
}
// Will show 2 logs; first with "0 = zero" and second with "1 = one"
