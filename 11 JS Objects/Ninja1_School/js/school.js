var school = {
  teachers: [
    {
      name: "Orna Apple",
      subjects: ["Japanese","French"],
      maxStudents: 3,
      students: []
    },
    {
      name: "Orna Banana",
      subjects: ["Italian", "Spanish"],
      maxStudents: 3,
      students: []
    },
    {
      name: "Orna Cantalope",
      subjects: ["French","Arabic"],
      maxStudents: 4,
      students: []
    }
  ],
  students: [
    {
      id: 1,
      name: "Noga Apple",
      subject: "Italian",
    },
    {
      id: 2,
      name: "Noga Banana",
      subject: "Japanese"
    },
    {
      id: 3,
      name: "Dvir Cantalope",
      subject: "French"
    },
    {
      id: 4,
      name: "Noga Date",
      subject: "French"
    },
    {
      id: 5,
      name: "Noga Elderberry",
      subject: "Arabic"
    },
    {
      id: 6,
      name: "Noga Fruit",
      subject: "Spanish"
    },
    {
      id: 7,
      name: "Noga Guava",
      subject: "French"
    },
    {
      id: 8,
      name: "Noga Honeydew",
      subject: "Japanese"
    },
    {
      id: 9,
      name: "Noga Imbe",
      subject: "Italian"
    }
  ]

}

function assignStudent(school, student_id) {
  var studentIndex;
  for (var i=0; i<school.students.length; i++) {
    if (school.students[i].id === student_id) {
      studentIndex = i;
    }
  }
  for (var i=0; i<school.teachers.length; i++) {
    if (school.teachers[i].subjects.includes(school.students[studentIndex].subject) && school.teachers[i].students.length < school.teachers[i].maxStudents) {
      school.teachers[i].students.push(school.students[studentIndex]);
      break;
    }
  } 
}