class Student {

	constructor() {
		// this.name = name;
	}

	sayHi() {
		console.log('Default Student ');
	}
}

class Student1 extends Student {

	constructor(name) {
		super();
		this.name = name;
	}

	sayHi() {
		console.log('Student1 ' + this.name + ' says hi');
	}
}

class Student2 {

	constructor(name) {
		this.name = name;
	}

	sayHi() {
		console.log('Student2 ' + this.name + ' says hi');
	}
}



// export  { Student };

export { Student2 as default, Student1, Student} ;