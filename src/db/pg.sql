-- Create a database for our demo.
CREATE DATABASE typeormdemo;

-- Setup the database schema.
CREATE TABLE people (
    id BIGSERIAL,
    fullname TEXT,
    gender TEXT,
    phone TEXT,
    age INTEGER,
    created_at TIMESTAMP DEFAULT NOW()
);