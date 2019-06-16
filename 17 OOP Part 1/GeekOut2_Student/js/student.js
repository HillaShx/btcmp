class Student {
	constructor() {
		this.week = 0;
		this.startDate = '';
	}
};

function startBootcamp(student,startdate) {
	student.week = 1;
	student.startDate = startdate;
};

function incrementWeek(student) {
	student.week++;
};

let today = new Date();
let dd = String(today.getDate()).padStart(2,'0');
let mm = String(today.getMonth() + 1).padStart(2,'0');
let yyyy = today.getFullYear();
today = `${dd}/${mm}/${yyyy}`;
let st1 = new Student();
startBootcamp(st1, today);
for (let i=0; i<5; i++) {
	incrementWeek(st1);
}
console.log(st1);
