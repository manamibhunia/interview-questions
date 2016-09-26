function curry(a) {
    return function(b) {
        return function(c) {
            return (a + b + c);
        }
    }
}

var c1 = curry(5);
console.log(c1);
// var c2 = curry(5)(10);  //// c1(10)
// var c3 = curry(5)(10)(15);  /// c1(10)(15)  === c2(15)

var c2 = c1(10);
console.log(c2);
console.log(c2(15));
// console.log(c2);
// console.log(c3);
curry(5)(10)(15);


function add(b) {
    var a = 5;
    var c = a + b;
}

console.log(add());
