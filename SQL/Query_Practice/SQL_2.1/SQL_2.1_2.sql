-- 2. Write an SQL query to report the movies with an odd-numbered 
-- ID and a description that is not "boring". Return the result 
-- table ordered by rating in descending order.

CREATE TABLE `sql2.1_2`.`cinema` (
  `id` INT NOT NULL,
  `movie` VARCHAR(256) NULL,
  `description` VARCHAR(256) NULL,
  `rating` FLOAT NULL,
  PRIMARY KEY (`id`));

INSERT INTO `sql2.1_2`.`cinema` (`id`, `movie`, `description`, `rating`) VALUES ('1', 'War', 'Action', '6.5'),('2', 'Avtar', '3D', '9.2'),('3', 'Sahejada', 'Drama', '8.9'),('4', 'Drishiyam-2', 'Suspense', '9.0'),('5', 'Pushpa', 'Action,Crime', '8.9');

SELECT * FROM cinema WHERE (MOD (id, 2) <> 0) AND (rating BETWEEN 8.0 AND 10.0);