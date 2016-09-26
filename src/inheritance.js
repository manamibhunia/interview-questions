var ClassA = function() {
    this.name = "class A";
}

var a = new ClassA();
ClassA.prototype.print = function() {
    console.log(this.name);
}

a.print();
