class Car {
	constructor(color, brand) {
		this.color = color;
		this.brand = brand;
	};
}

let carTools = {
	getCarColor: function(car) {
		return car.color;
	},
	getCarBrand: function(car) {
		return car.brand;
	},
	isIdentical: function(car1, car2) {
		return car1.color === car2.color && car1.brand === car2.brand;
	}
};

let cara = new Car("pink", "binba");
let carb = new Car("pink", "binba");
let carc = new Car("purple", "binbu");
