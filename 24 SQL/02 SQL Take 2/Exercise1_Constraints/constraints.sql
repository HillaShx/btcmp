create table Participants(
	id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(20),
    last_name VARCHAR(20),
    country VARCHAR(20),
    gender ENUM("W","M", "O") DEFAULT "O", -- one-based
    level_of_english INT,
    israeli_citizenship BOOL
);
create table Payments(
	id INT PRIMARY KEY auto_increment,
    participant_id INT NOT NULL,
    total INT,
    date_of_payment VARCHAR(10),
    payment_method ENUM("cash","paypal") NOT NULL, -- zero-based
    authorization_code VARCHAR(15),
    FOREIGN KEY (participant_id)
		REFERENCES Participants(id)
			ON UPDATE CASCADE
            ON DELETE RESTRICT
);
insert into Participants values(NULL,"yoo","too","wonderland",2,3,TRUE);
insert into Participants values(NULL,"boo","hoo","wunderland",2,5,FALSE);
insert into Participants values(NULL,"yoo","loo","popishmopi",3,1,TRUE);
select * from Payments;
insert into Payments values(NULL,1,100,'1990-03-21',"paypal","authoricode");
insert into Payments values(NULL,2,12,'1990-03-21',"cash","authoricode");
insert into Payments values(NULL,76,12,'1990-03-21',"cash","authoricode");
