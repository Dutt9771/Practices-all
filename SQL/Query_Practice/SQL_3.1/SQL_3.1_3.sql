-- Case 3
-- Consider the following table structure for a sales database:


CREATE TABLE sales (
 id INT PRIMARY KEY,
 date DATE,
 customer_id INT,
 product_id INT,
 quantity INT,
 total_price DECIMAL(10,2)
);

INSERT INTO `sql3.1_3`.`sales` (`id`, `date`, `customer_id`, `product_id`, `quantity`, `total_price`) VALUES ('1', '2021-01-02', '1', '1', '5', '5000')
,('2', '2021-05-06', '2', '2', '9', '10000')
,('3', '2021-08-09', '3', '3', '10', '12000')
,('4', '2022-05-06', '4', '4', '5', '5000')
,('5', '2022-08-06', '5', '5', '9', '12000');

-- Write a query to retrieve the total sales for each month in the 
-- year 2021, sorted in ascending order by month.

select *,month(date) as months
     from sales
     WHERE year(date)='2021' AND month(date)
     ORDER BY month(date);