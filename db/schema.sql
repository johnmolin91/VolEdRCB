DROP DATABASE IF EXISTS voled_test;

CREATE DATABASE voled_test;
USE voled_test;

CREATE TABLE teachers (
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(100) NOT NULL,
	email VARCHAR(100) NOT NULL,
	category VARCHAR (100) NOT NULL,
	subject VARCHAR (100) NOT NULL,
	location VARCHAR (100) NOT NULL,
	timeOf VARCHAR (100) NOT NULL,
	dateOf VARCHAR (100) NOT NULL,
	numStudents INT DEFAULT 0,
	description VARCHAR (500) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE students (
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(100) NOT NULL,
	teacher_id INT NOT NULL,
	FOREIGN KEY (teacher_id) REFERENCES teachers(id),
	PRIMARY KEY (id)
);