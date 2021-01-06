DROP DATABASE IF EXISTS appdb; 
CREATE DATABASE appdb;
USE appdb;

DROP USER IF EXISTS 'app'@'localhost'; 
CREATE USER 'app'@'localhost' IDENTIFIED BY 'p4ssw0rd';
GRANT ALL PRIVILEGES ON appdb.* TO 'app'@'localhost';
FLUSH PRIVILEGES;