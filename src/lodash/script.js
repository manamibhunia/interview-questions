// _.times(5, function(i){
//     console.log(i);
// });
//
// console.log(_.times(3, String));
// console.log(_.times(4, _.constant(0)));


// Fetch the name of the first pet from each owner
var ownerArr = [{
    "owner": "Colin",
    "pets": [{"name":"dog1"}, {"name": "dog2"}]
}, {
    "owner": "John",
    "pets": [{"name":"dog3"}, {"name": "dog4"}]
}];

// Array's map method.
ownerArr.map(function(owner){
   return owner.pets[0].name;
});

// Lodash
// console.log(_.map(ownerArr, 'pets[0].name'));


// Create an array of length 6 and populate them with unique values. The value must be prefix with "ball_".
// eg. [ball_0, ball_1, ball_2, ball_3, ball_4, ball_5]

// Array's map method.
Array.apply(null, Array(6)).map(function(item, index){
    return "ball_" + index;
});


// Lodash
_.times(6, _.uniqueId.bind(null, 'ball_'));

// console.log(_.times(6, _.partial(_.uniqueId, 'ball_')));

//Deep-cloning Javascript object
var objA = {
    "name": "colin"
}
var objB = objA;
// console.log(objA === objB);
var objC = _.cloneDeep(objA);
// console.log(objA === objC);




// Get a random number between 15 and 20.

// Naive utility method
function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// console.log(getRandomNumber(15, 20));

// Lodash
// console.log(_.random(15, 20, true));


//implement object extend
Object.prototype.extend = function(obj) {
    for ( var key in obj) {
        if(obj.hasOwnProperty(key)) {
            this[key] = obj[key]
        }
    }
}

var objA = {"name": "colin", "car": "suzuki"};
var objB = {"name": "james", "age": 17};
var objC = {"pet": "dog"};

objA.extend(objB);
// console.log(objA);
//
// console.log(_.extend(objA, objB, objC));


// Naive method: Remove an array of keys from object
// Object.prototype.remove = function(arr) {
//     var that = this;
//     arr.forEach(function(key){
//         delete(that[key]);
//     });
// };
//
// var objA = {"name": "colin", "car": "suzuki", "age": 17};
//
// objA.remove(['car', 'age']);
// objA; // {"name": "colin"}
//
// // Lodash
// objA = _.omit(objA, ['car', 'age']); // {"name": "colin"}
// console.log(objA);


// remove keys

var objA2 = {"name": "colin", "car": "suzuki", "age": 17};

// objA2 = _.omit(objA2, ['car', 'age']);

// objA2 = _.omit(objA2, 'car');
// console.log(objA2);

var add = function() {

}

// console.log(_.isObject(add));
// console.log(_.isFunction(add));


// Naive method: Returning a new object with selected properties
Object.prototype.pick = function(arr) {
    var _this = this;
    var obj = {};
    arr.forEach(function(key){
        obj[key] = _this[key];
    });

    return obj;
};

var objA = {"name": "colin", "car": "suzuki", "age": 17};

// var objB = objA.pick(['car', 'age']);
// {"car": "suzuki", "age": 17}

// Lodash
var objB = _.pick(objA, ['car', 'age']);
// {"car": "suzuki", "age": 17}

// console.log(objB);



// Using try-catch to handle the JSON.parse error
function parse(str){
    try {
        return JSON.parse(str);
    }

    catch(e) {
        return false;
    }
}

// With Lodash
function parseLodash(str){
    return _.attempt(JSON.parse.bind(null, str));
}

console.log(parse('a')); // false
console.log(parseLodash('a')); // Return an error object

console.log(parse('{"name": "colin"}')); // Return {"name": "colin"}
console.log(parseLodash('{"name": "colin"}')); // Return {"name": "colin"}
