CREATE TABLE Users(
	id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(32) UNIQUE NOT NULL,
    password VARCHAR(32) NOT NULL,
    session_id VARCHAR(8)
);

select * from Users;

INSERT INTO Users (username, password) VALUES ('lani','6d42fc12fca0160cd8601c0333ed48fe');
select * FROM Users;