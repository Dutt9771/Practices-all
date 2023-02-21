-- 4. Write an SQL query to delete all the duplicate emails, keeping 
-- only one unique email with the smallest id. Return the result 
-- table in any order

CREATE TABLE `sql2.1_4`.`person` (
  `id` INT NOT NULL,
  `email` VARCHAR(256) NULL,
  PRIMARY KEY (`id`));

INSERT INTO `sql2.1_4`.`person` (`id`, `email`) VALUES ('1', 'dutt@gmail.com');,('2', 'parag@gmail.com'),('3', 'priyanshu@gmail.com'),('4', 'dutt9498@gmail.com'),('5', 'dutt@gmail.com'),('6', 'parag@gmail.com'),('7', 'dutt9498@gmail.com');

SELECT * FROM `sql2.1_4`.person;

DELETE FROM person
WHERE id NOT IN (
    SELECT MIN(id)
    FROM person
    GROUP BY email
)

