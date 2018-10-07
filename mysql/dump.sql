CREATE DATABASE bookskeep;
USE bookskeep;

DROP TABLE IF EXISTS subscription;
CREATE TABLE subscription (
    id varchar(1024) NOT NULL,
    subscription varchar(1024) NOT NULL,
    PRIMARY KEY (id)
);
