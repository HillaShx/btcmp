class TempTracker {
	constructor() {
		this.temps = [];
	};

	insert(temp) {
		this.temps.push(temp);
	};

	getMax() {
		let max = this.temps.reduce(function(a,b) {
			return Math.max(a,b);
		})
		return max;
	};

	getMin() {
		let min = this.temps.reduce(function(a,b) {
			return Math.min(a,b);
		})
		return min;
	};

	getMean() {
		let total = 0;
		for (let i=0; i<this.temps.length; i++) {
			total+=this.temps[i];
		}
		return total/this.temps.length;
	};

	getMode() {
		let occurCount = _.countBy(this.temps);
		let mode = this.temps[0];
		for (let prop in occurCount) {
			if (occurCount[prop] > occurCount[mode]) {
				mode = prop;
			}
		}
		return parseInt(mode);
	};
};
