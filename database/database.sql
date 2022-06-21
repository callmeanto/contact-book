CREATE DATABASE contacts_db;

USE contacts_db;

CREATE TABLE contacts(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    email VARCHAR(30) NOT NULL UNIQUE,
    phone VARCHAR(30) NOT NULL UNIQUE,
    UNIQUE (first_name, last_name)
);

DESCRIBE contacts;