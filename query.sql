-- Active: 1666808777335@@127.0.0.1@5432@toko@public
CREATE Table user(
    id VARCHAR PRIMARY KEY,
    email VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    fullname VARCHAR,
    role VARCHAR
);

CREATE Table users(
    id VARCHAR PRIMARY KEY,
    email VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    fullname VARCHAR,
    role VARCHAR
);

INSERT INTO users (id,email,password,fullname,role) VALUES ('1','rizky@pijar.id','123465','riizky s','toko');