class Movie {
	constructor(title,director) {
		this.title = title;
		this.director = director;
	}
	
	toString() {
		return `${this.title} by ${this.director}`;
	}
}

let mov1 = new Movie("Hocus Pocus", "Kenny Ortega");
let mov2 = new Movie("It's in the Water", "Kelli Herd");
mov1.toString();
mov2.toString();
