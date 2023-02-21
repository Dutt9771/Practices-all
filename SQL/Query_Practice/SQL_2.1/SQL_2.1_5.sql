-- 5. Write an SQL query to report all customers who never order 
-- anything. Return the result table in any order.

CREATE TABLE `sql2.1_5`.`customer` (
  `id` INT NOT NULL,
  `name` VARCHAR(256) NULL,
  PRIMARY KEY (`id`));

SELECT * FROM `sql2.1_5`.customer;

INSERT INTO `sql2.1_5`.`customer` (`id`, `name`) VALUES ('1', 'Dutt'),('2', 'Parag'),('3', 'Priyanshu'),('4', 'Zenil');

CREATE TABLE `sql2.1_5`.`orders` (
  `id` INT NOT NULL,
  `customer_id` INT NULL,
  PRIMARY KEY (`id`),
	FOREIGN KEY(customer_id) REFERENCES customer(id)
);

SELECT * FROM `sql2.1_5`.orders;

INSERT INTO `sql2.1_5`.`orders` (`id`, `name`) VALUES ('1','3'),('2','4'),('3','1');

SELECT 
    name AS Customers
FROM
    customer
WHERE
    id NOT IN (SELECT 
            customer_id
        FROM
            orders);
