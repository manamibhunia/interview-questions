function Human(name) {

	this.name = name;
	this.sayName = function() {
		return 'Hi! My name is ' + this.name;
	};
}

function Student(name, section) {
	this.section = section;
	Human.call(this, name);
	this.sayClass = function() {
		return ('Hi1 I study in ' + this.section);
	}
}

var student = new Student('Manami', 'two');

console.log(student.sayName());
console.log(student.sayClass());

function Human1(name) {

	this.name = name;
	this.sayName = function() {
		return 'Hi! My name is ' + this.name;
	};
}

function Student1(name, section) {
	this.section = section;
	Human1.apply(this, [name]);
	this.sayClass = function() {
		return ('Hi1 I study in ' + this.section);
	}
}

var student1 = new Student1('Manami', 'two');

console.log(student1.sayName());
console.log(student1.sayClass());