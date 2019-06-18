function isPalindrome(str) {
	let palindrome = true;
	let j = str.length-1;
	for (let i=0; i<j+1; i++) {
		if (str.charAt(i) !== str.charAt(j)) {
			palindrome = false;
		}
		j--;
	}
	return palindrome;
}

let expect = require('chai').expect;

describe('typical cases', ()=> {
	it('should return true', ()=> {
		expect(isPalindrome('aba')).to.be.true;
	});
	it('should return false', ()=> {
		expect(isPalindrome('abc')).to.be.false;
	});
	it('should return false', ()=> {
		expect(isPalindrome('abga')).to.be.false;
	})
});
