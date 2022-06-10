CREATE DATABASE ng_contacts_db;

USE ng_contacts_db;

CREATE TABLE contacts(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(9),
    last_name VARCHAR(12),
    email VARCHAR(20),
    phone INT(12)
);

DESCRIBE contacts;