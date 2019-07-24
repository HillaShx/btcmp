create database bootcamp;
use bootcamp;

create table Cohorts(
	cohort_id VARCHAR(4) PRIMARY KEY,
    instructor_id INT,
    ta_id INT
);

create table Students(
	stu_id INT PRIMARY KEY AUTO_INCREMENT,
    stu_name VARCHAR(30) NOT NULL,
	cohort VARCHAR(4),
    FOREIGN KEY (cohort)
		REFERENCES Cohorts(cohort_id)
        ON UPDATE CASCADE
        ON DELETE RESTRICT
);

INSERT INTO Cohorts VALUES
('2017',9008,9007),
('2018',9007,9008),
('2019',9008,9006);

INSERT INTO Students (stu_name, cohort) VALUES
	('Lidia Wilkerson', '2017'),
    ('Alexander Hudson', '2017'),
    ('Awais Parker', '2017'),
    ('Leonidas Burns', '2018'),
    ('Joshua Hobbs', '2018'),
    ('Ameera Allen', '2018'),
    ('Nyah French', '2019'),
    ('Aissia Reader', '2019'),
    ('Kalvin Nichols', '2019'),
    ('Archibald Ramsay', '2019')
;