CREATE DATABASE bootcamp;
USE bootcamp; 
CREATE TABLE students(
	student_id INT UNIQUE NOT NULL,
    first_name VARCHAR(20),
    last_name VARCHAR(20),
    been_dismissed BOOL NOT NULL,
    cohort INT
);
CREATE TABLE grades(
	student_id INT UNIQUE NOT NULL,
    exam_id INT UNIQUE NOT NULL,
    date_taken INT NOT NULL,
    grade INT NOT NULL
);
INSERT INTO students VALUES
	(
		12,
        "Steven",
        "Universe",
        TRUE,
        32
    ),
    (
		23,
        "Alanis",
        "Morissette",
        FALSE,
        12
    ),
    (
		31,
        "Michael",
        "Berkowski",
        TRUE,
        13
    );
UPDATE students SET been_dismissed=FALSE WHERE student_id=12;
DELETE FROM students WHERE student_id=23;