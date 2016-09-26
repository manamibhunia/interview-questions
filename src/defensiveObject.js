class Person {

    constructor(name) {
        this.name = name;
        Object.seal(this);
    }
}

var me = new Person("Nicholas");
console.log(me.nme);
