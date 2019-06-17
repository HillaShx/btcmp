class Beverage {
	constructor(title, isHot) {
		this.title = title;
		this.isHot = isHot;
	}
}

class Coffee extends Beverage {
	constructor(title, isHot, numOfShots, hasMilk) {
		super(title, isHot);
		this.numOfShots = numOfShots;
		this.hasMilk = hasMilk;
	}

	printInstructions() {
		let milk = "";
		if (!this.hasMilk) {
			milk = "don't ";
		}
		console.log(`To make ${this.title} add ${this.numOfShots} coffee shots and ${milk}add milk`);
		if (this.isHot) {
			console.log("Be careful, it is hot!");
		}
	}
}

let esp = new Coffee("espresso", true, 1, true);
