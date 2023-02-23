-- Case 2
-- Consider the following table structure for a store's inventory:

CREATE TABLE inventory (
    id INT PRIMARY KEY,
    name VARCHAR(255),
    quantity INT,
    price DECIMAL(10 , 2 ),
    category VARCHAR(50)
)

INSERT INTO `sql3.1_2`.`inventory` (`id`, `name`, `quantity`, `price`, `category`) VALUES ('1', 'Laptop', '4', '50000', 'electronics')
,('2', 'Mobile', '10', '20000', 'electronics')
,('3', 'Shirt', '6', '500', 'clothes')
,('4', 't-shirt', '7', '400', 'clothes');



-- Write a query to retrieve the name and price of all items in the 
-- inventory where the quantity is greater than 0 and the category 
-- is 'electronics', sorted in descending order by price.

SELECT 
    name, price
FROM
    inventory
WHERE
    (quantity > 0)
        AND (category = 'electronics')
ORDER BY price DESC;