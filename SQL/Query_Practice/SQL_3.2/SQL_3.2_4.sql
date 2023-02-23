-- Case 4
-- Consider a table called "orders" with the following columns: 
-- "id", "customer_id", "order_date", "total_amount". Write a SQL 
-- query to calculate the total amount of orders for each customer, 
-- sorted in descending order by total amount

CREATE TABLE `sql3.2`.`orders` (
    `id` INT NOT NULL,
    `customer_id` INT NULL,
    `order_date` DATE NULL,
    `total_amount` INT NULL,
    PRIMARY KEY (`id`)
);

INSERT INTO `sql3.2`.`orders` (`id`, `customer_id`, `order_date`, `total_amount`) VALUES ('1', '1', '2023-01-01', '2000')
,('2', '1', '2023-02-01', '1500')
,('3', '2', '2023-01-05', '1200')
,('4', '2', '2023-02-05', '1230')
,('5', '2', '2023-02-15', '2000')
,('6', '3', '2023-02-21', '5000');

SELECT 
    id, customer_id, SUM(total_amount)
FROM
    orders
GROUP BY customer_id
ORDER BY SUM(total_amount) DESC;