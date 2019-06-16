class Book {
	constructor(title,author) {
		this.title = title;
		this.author = author;
	};
}

function nouveau(cls, ...clsarguments) {
	return new cls(clsarguments[0],clsarguments[1]);
};

