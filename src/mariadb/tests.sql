-- Dropando se a tabela existe, para multiplos testes
DROP DATABASE IF EXISTS test;

-- CREATE DATABASE
CREATE DATABASE test;
USE test;

-- CREATE TABLE
CREATE TABLE address(
	id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
	name varchar(25) NOT NULL
);

-- INSERT
INSERT INTO address(name)
VALUES
("Bairro 1"),
("Bairro 2");

-- SELECT
SELECT * FROM address;

-- SELECT com WHERE
SELECT name FROM address WHERE id = 2;

-- DELETE
DELETE FROM address WHERE id = 2;

-- ALTER
ALTER TABLE address ADD COLUMN description varchar(40);

-- DROP
-- DROP TABLE address;

-- LIKE
SELECT name FROM address WHERE name LIKE "%1";

-- IS
SELECT * FROM address WHERE description IS NULL;

-- NOT
SELECT * FROM address WHERE description IS NOT NULL;

-- AS
SELECT name AS "Nome do endereço" FROM address;

-- Criando outra tabela para agrupamentos
CREATE TABLE employees(
	id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	name varchar(30) NOT NULL,
	salary float NOT NULL,
	address int NOT NULL,
	FOREIGN KEY (address) REFERENCES address(id)
);

INSERT INTO employees (name, salary, address)
VALUES
("Mark", 2334.35, 1),
("Bianca", 5983.32, 1),
("Viniccius", 3445.21, 1),
("Luiz", 1239.50, 1);

-- GROUP BY
SELECT AVG(salary), address FROM employees
GROUP BY 2;

-- ORDER BY
SELECT name FROM employees
ORDER BY name DESC;

-- ALIAS
SELECT a.name, e.name FROM employees e
INNER JOIN address a ON e.address = a.id;

-- INNER JOIN
SELECT a.name, e.name FROM employees e
INNER JOIN address a ON e.address = a.id;

-- COUNT
SELECT count(description) FROM address;
SELECT count(*) FROM employees;

-- SUM
SELECT sum(salary) FROM employees;

-- AVG
SELECT avg(salary) FROM employees;

-- MIN
SELECT min(salary) FROM employees;

-- MAX
SELECT max(salary) FROM employees;

-- HAVING
SELECT sum(salary) FROM employees
GROUP BY address
HAVING sum(salary) > 3000;