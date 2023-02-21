-- Write an SQL query to create index on the email column.


CREATE TABLE `sql2.1_6`.`CreateIndex` (
  `id` INT NOT NULL,
  `email` VARCHAR(256) NULL,
  PRIMARY KEY (`id`));

INSERT INTO `sql2.1_6`.`createindex` (`id`, `email`) VALUES ('1', 'dutt@gmail.com'),('2', 'parag@gmail.com'),('3', 'priyanshu@gmail.com');


CREATE INDEX email_index ON createindex(email);
SELECT * FROM `sql2.1_6`.createindex;