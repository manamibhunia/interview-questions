var theArray = {};
theArray["a"] = "hello, world!";

// console.log(theArray.length);
// console.log(theArray);

var x = {};
x['this.is'] = 'sparta';
// x.this.is = 'sparta';  //error
console.log(x);
// console.log(x.this); //error
// console.log(x.this.is); //error
console.log(x['this.is']);
