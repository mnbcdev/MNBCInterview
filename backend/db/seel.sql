CREATE DATABASE demo_db;

USE demo_db;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(50),
    age INT
);

INSERT INTO users (name, email, age) VALUES 
('Alice', 'alice@example.com', 28),
('Bob', 'bob@example.com', 35),
('Charlie', 'charlie@example.com', 40);
