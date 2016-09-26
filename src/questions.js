// (function(){
//   var a = b = 3;
// })();

// (function(){
//   var a = b = 3;
// })();

// var add = function() {
//     var a = b = 3;
//     console.log(a);
//     return a;
// }();

// console.log("a defined? " + (typeof a !== 'undefined'));
// console.log("b defined? " + (typeof b !== 'undefined'));
// console.log(add);

/*
// var bar = null;
// var bar = function() {};

var bar = [];

console.log(typeof bar === "object");
console.log((bar !== null) && (typeof bar === "object"));
console.log((bar !== null) && ((typeof bar === "object") || (typeof bar === "function")));
console.log(toString.call(bar));
console.log(typeof bar);
console.log(bar instanceof Array);
console.log(bar instanceof Object);
console.log((bar instanceof Object));
console.log(bar !== null && (bar instanceof Object) && !(bar instanceof Array));
*/

// var myObject = {
//     foo: "bar",
//     func: function() {
//         var self = this;
//         console.log("outer func:  this.foo = " + this.foo);
//         console.log("outer func:  this = " + this);
//         console.log("outer func:  self.foo = " + self.foo);
//         (function() {
//             console.log("inner func:  this.foo = " + this.foo);
//             console.log("inner func:  this = " + this);
//             console.log("inner func:  self.foo = " + self.foo);
//         }());
//     }
// };
// myObject.func();

/*
var jQuery = {
    add: function(a, b) {
        return a + b;
    }
};
(function($) {
    var a = 10;
    var b = 20;
    console.log($.add(a, b));
} )(jQuery);

// jQuery.add();
*/

/*
var ob = {a:1, b:2};

ob.c = 3;
Object.defineProperty(ob, 'd', {
  value: 4,
  enumerable: false
});

ob.d; // => 4

for( var key in ob ) console.log( ob[key] );
// Console will print out
// 1
// 2
// 3

console.log(Object.keys( ob ));  // => ["a", "b", "c"]

console.log(JSON.stringify( ob )); // => "{a:1,b:2,c:3}"

console.log(ob.d); // => 4
console.log(Object.getOwnPropertyNames(ob));
*/

/*
var arr1 = "john".split('');
var arr2 = arr1.reverse();
var arr3 = "jones".split('');
arr2.push(arr3);
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));
*/

/*
var globalVar = "xyz";

(function outerFunc(outerArg) {
  var outerVar = 'a';

  (function innerFunc(innerArg) {
    var innerVar = 'b';

    console.log(
      "outerArg = " + outerArg + "\n" +
      "innerArg = " + innerArg + "\n" +
      "outerVar = " + outerVar + "\n" +
      "innerVar = " + innerVar + "\n" +
      "globalVar = " + globalVar);

  })(456);
})(123);
*/
/*
var outer = function(a) {

    return (function(b){
        console.log(a + b);
    });
}

var closure = outer(5);

closure(10);

*/
/*
console.log("0 || 1 = "+(0 || 1));
console.log("0 || 2 = "+(0 || 2));
console.log("1 || 2 = "+(1 || 2));
console.log("0 && 1 = "+(0 && 1));
console.log("1 && 2 = "+(1 && 2));
console.log("2 && 1 = "+(2 && 1));

*/
/*
console.log(
    (
        function f(n){
            return ((n > 1) ? n * f(n-1) : n)
        }
    )(10)
);
*/


function sum() {
  var i, l, result = 0;
  for (i = 0, l = arguments.length; i < l; i++) {
    result += arguments[i];
  }
  return result;
}
console.log(sum(1,2,3));

var data = [1,2,3];
console.log(sum.apply(null, data));
console.log(sum.call(0,1,2,3,4));


// sum () { return [].slice.call(arguments).reduce(function (a, b) { return a + b; }, 0); }
// console.log(sum(1,2,3));
