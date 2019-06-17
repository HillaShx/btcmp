class Animal {
	constructor(name, type) {
		this.name = name;
		this.type = type;
	}
}

class Cat extends Animal {
	constructor(name, isFriendly) {
		super(name, "cat");
		this.isFriendly = isFriendly;
	}

	describe() {
		let friendlyBool = "am";
		if (!this.isFriendly) {
			friendlyBool+=" not";
		}
		console.log(`I am ${this.name} and I ${friendlyBool} a friendly ${this.type}`);
	}
}

let cat1 = new Cat("Cathulu",true);

