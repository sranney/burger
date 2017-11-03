create database burgers_db;

use burgers_db;

create table burgers(
	id integer(10) auto_increment not null,
	burger_name nvarchar(500) unique not null,
	devoured boolean default false,
	date timestamp,
	primary key (id)
);

