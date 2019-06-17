"use strict";

class Student {
	constructor(name,courses) {
		this.name = name;
		this.courses = courses;
	}
}

class Programmer extends Student {
	constructor(name, courses, os, languages, vcs) {
		super(name, courses);
		this.os = os;
		this.languages = languages;
		this.vcs = vcs;
	}

	isProgrammingIn(lang) {
		return this.languages.includes(lang);
	}
}

let stu1 = new Programmer("Noga", ["Algebra", "History"], "Windows", ["Java", "React", "HTML"], "GitHub");
let stu2 = new Student("Dvir", ["Math"]);
let stu3 = new Programmer("Hilla", ["Spanish"], "Ubuntu", ["Javascript", "Java", "Python"], "GitHub");
let stuList = [stu1,stu2,stu3];

function getProgrammerByLang(arr,lang) {
	for (let i in arr) {
		if (arr[i] instanceof Programmer && arr[i].isProgrammingIn(lang)) {
			return arr[i];
		}
	}
}

		
