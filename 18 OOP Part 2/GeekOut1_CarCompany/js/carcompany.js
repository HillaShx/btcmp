class CarCompany {
	constructor(country,models) {
		this.country = country;
		this.models = models;
	};

	printModels() {
		for (let i=0; i<this.models.length; i++) {
			console.log(this.models[i]);
		}
	};

	mergeCompanies(otherCompany) {
		this.models = this.models.concat(otherCompany.models);
	};
}

let Suzuki = new CarCompany("Japan", ["Alto","Baleno","Swift"]);
let Toyota = new CarCompany("Japan", ["Century","Crown","Camry"]);
