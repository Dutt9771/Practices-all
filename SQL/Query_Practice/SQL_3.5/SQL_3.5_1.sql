-- Case 1
-- Create a database called "sales" with three tables: "customers", 
-- "orders", and "products".

-- The "customers" table should have the following columns: 
-- "customer_id", "first_name", "last_name", "email", and "phone".

CREATE TABLE customers (
  customer_id INT PRIMARY KEY,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  email VARCHAR(100),
  phone VARCHAR(20)
);

INSERT INTO customers (customer_id, first_name, last_name, email, phone)
VALUES
  (1, 'John', 'Doe', 'johndoe@example.com', '555-1234'),
  (2, 'Jane', 'Smith', 'janesmith@example.com', '555-5678'),
  (3, 'Bob', 'Johnson', 'bobjohnson@example.com', '555-9012');


-- The "orders" table should have the following columns: 
-- "order_id", "order_date", "customer_id", and "product_id".

CREATE TABLE orders (
  order_id INT PRIMARY KEY,
  order_date DATE,
  customer_id INT,
  product_id INT,
  FOREIGN KEY (customer_id) REFERENCES customers(customer_id),
  FOREIGN KEY (product_id) REFERENCES products(product_id)
);

INSERT INTO orders (order_id, order_date, customer_id, product_id)
VALUES
  (1, '2023-02-21', 1, 1),
  (2, '2023-02-22', 2, 3),
  (3, '2023-02-22', 3, 2);




The "products" table should have the following columns: 
"product_id", "product_name", "unit_price", and "description".


1. Insert at least five customers, five products, and ten 
orders into the respective tables. Make sure that at least 
two customers have multiple orders, and at least two 
products are included in multiple orders.



2. Write a query that retrieves the customer's first name, 
last name, email, and the number of orders they have 
placed. The results should be ordered by the number of 
orders in descending order.


3. Write a query that retrieves the product name, the total 
number of orders for each product, and the total revenue 
generated by each product. The results should be ordered by 
the total revenue in descending order.


4. Write a query that retrieves the first name, last name, 
email, and product name for each order. The results should 
only include orders where the customer has placed multiple 
orders.


5. Write a query that retrieves the first name, last name, and 
email for each customer who has placed at least one order 
for a product with a unit price greater than $50.


6. Write a query that retrieves the product name and the 
number of times it has been ordered, but only includes 
products that have been ordered more than once