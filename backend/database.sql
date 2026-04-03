CREATE DATABASE car_hub;

USE car_hub;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password_hash TEXT
);
CREATE TABLE mechanics (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    specialization VARCHAR(100),
    rating FLOAT,
    experience INT,
    description TEXT,
    phone VARCHAR(20),
    email VARCHAR(100)
);
-- SAMPLE ADMIN USER
INSERT INTO users (name, email, password_hash, role)
VALUES ('Sam', 'admin@gmail.com', '$2b$12$examplehashedpassword', 'admin');

-- SAMPLE MECHANICS
INSERT INTO mechanics (name, specialization, rating, experience, description, phone, email) VALUES
('Akshat', 'Engine Specialist', 4.8, 15, 'Engine expert', '+91 1234567890', 'akshat@mail.com'),
('Naishy', 'Electrical Systems', 4.7, 10, 'Electrical expert', '+91 9876543210', 'naishy@mail.com');

