function printName(b) {
    console.log(arguments.length);
    for(var i = 0, length = arguments.length; i < length; i++) {
        console.log(arguments[i]);
    }
    // console.log('inside outer add- ', this.name);

}


// printName(2,4,5,6,12,'asd', {name: 'Manami'});

printName.apply(null, [1,2,3]);
//
printName.call(null, 1,2,3);

// var Student = function() {
//     this.name = 'Manami';
//     this.printName = function() {
//         console.log( this.name);
//     }
// }
//
// var s1 = new Student();
// s1.printName();
//
// printName.call(s1, null);
//
// var Teacher = function() {
//
//     this.name = 'Paban Bhunia';
// }
// var t1 = new Teacher();
// s1.printName.apply(t1,null);
