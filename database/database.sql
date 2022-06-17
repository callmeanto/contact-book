CREATE DATABASE contacts_db;

USE contacts_db;

CREATE TABLE contacts(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    email VARCHAR(30),
    phone VARCHAR(30)
);

DESCRIBE contacts;