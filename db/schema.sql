DROP DATABASE if EXISTS petpalacehub;

CREATE DATABASE petpalacehub;

\c petpalacehub 

CREATE TABLE
    PetStores (
        id SERIAL PRIMARY KEY,
        name VARCHAR(150) NOT NULL,
        contact_email VARCHAR(100),
        phone_number VARCHAR(20),
        address TEXT,
        CONSTRAINT uq_store_name UNIQUE (name)
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
        price DECIMAL(10, 2) NOT NULL,
        store_id INTEGER NOT NULL,
        image_url TEXT,
        CONSTRAINT ck_age CHECK (age >= 0),
        CONSTRAINT fk_store FOREIGN KEY (store_id) REFERENCES PetStores (id)
    );
