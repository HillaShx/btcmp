class Card {
	constructor(type, number) {
		this.type = type;
		this.number = number;
	}
	
	toString() {
		return `${this.number} of ${this.type}`;
	}

	getNext() {
		if (this.number === 13) {
			let cardIndex = cardTypes.indexOf(this.type);
			if (cardIndex !== cardTypes.length) {
				return new Card(cardTypes[0], 1);
			}
		}
		else {
			return new Card(this.type, this.number+1);
		}
	}
}

let cardTypes = ["hearts", "spades", "diamonds", "clubs"];
function getDeck(card) {
	let cardDeck = [card];
	for (let i=0; i<52; i++) {
		card = card.getNext()
		cardDeck.push(card);
	}
	return cardDeck;
}
	
