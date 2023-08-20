DROP DATABASE if EXISTS petpalacehub;

CREATE DATABASE petpalacehub;

\c petpalacehub 

CREATE TABLE
    Owners (
        id SERIAL PRIMARY KEY,
        name VARCHAR(150) NOT NULL,
        contact_email VARCHAR(100),
        phone_number VARCHAR(20),
        address TEXT,
        CONSTRAINT uq_owner_name UNIQUE (name)
    );

CREATE TABLE
    Pets (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        type VARCHAR(50) NOT NULL,
        age INTEGER,
        weight DECIMAL(5, 2),
        entry_date DATE DEFAULT CURRENT_DATE,
        description TEXT,
        breed VARCHAR(100),
        owner_id INTEGER NOT NULL,
        image_url TEXT,
        CONSTRAINT ck_age CHECK (age >= 0),
        CONSTRAINT fk_owner FOREIGN KEY (owner_id) REFERENCES Owners (id)
    );