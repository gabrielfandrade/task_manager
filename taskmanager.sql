DROP DATABASE IF EXISTS taskmanager;

CREATE DATABASE taskmanager;

USE taskmanager;

CREATE TABLE tasks (
	id INT NOT NULL AUTO_INCREMENT,
	title VARCHAR(255) NOT NULL,
	description VARCHAR(255) NOT NULL,
	status VARCHAR(30) NOT NULL,
	PRIMARY KEY(id)
);

INSERT INTO tasks VALUES
	(1,'Tarefa 1', 'Descrição da Tarefa 1', 'pendente'),
    (2,'Tarefa 2', 'Descrição da Tarefa 2', 'pendente'),
    (3,'Tarefa 3', 'Descrição da Tarefa 3', 'em andamento'),
    (4,'Tarefa 4', 'Descrição da Tarefa 4', 'em andamento'),
    (5,'Tarefa 5', 'Descrição da Tarefa 5', 'concluída'),
    (6,'Tarefa 6', 'Descrição da Tarefa 6', 'concluída');
    
CREATE TABLE users (
	id INT NOT NULL AUTO_INCREMENT,
    email varchar(255) NOT NULL,
	password varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

INSERT INTO users VALUES
	(1, 'email@email.com','senha123'),
    (2, 'other.email@email.com','senha123')