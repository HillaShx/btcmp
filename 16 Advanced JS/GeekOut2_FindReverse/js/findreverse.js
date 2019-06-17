function findReverse(arr) {
	for (let i=0; i<arr.length; i++) {
		let reversedItem = arr[i].split("").reverse().join("");
		if (arr.slice(i+1).includes(reversedItem)) {
			return arr[i];
		}
	}
	return null;
}
