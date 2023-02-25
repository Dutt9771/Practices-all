-- Case 1
-- Assume you are given access to a database with two tables: users 
-- and orders. 

CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    name TEXT,
    email TEXT,
    password TEXT,
    created_at TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (id, name, email, password, created_at, updated_at)
VALUES
  (1, 'John Doe', 'johndoe@example.com', 'password1', '2022-01-01 10:00:00', '2022-01-01 10:00:00'),
  (2, 'Jane Doe', 'janedoe@example.com', 'password2', '2022-01-02 11:00:00', '2022-01-02 11:00:00'),
  (3, 'Bob Smith', 'bobsmith@example.com', 'password3', '2022-01-03 12:00:00', '2022-01-03 12:00:00'),
(5, 'Jack Smith', 'jacksmith@example.com', 'password4', '2022-01-04 15:00:00', '2022-01-04 15:00:00');

-- The orders table contains the following columns:
-- id (integer)
-- user_id (integer)
-- amount (float)
-- created_at (timestamp)
-- updated_at (timestamp)

CREATE TABLE orders (
    id INTEGER PRIMARY KEY,
    user_id INTEGER,
    amount FLOAT,
    created_at TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id)
        REFERENCES users (id)
);



INSERT INTO orders (id, user_id, amount, created_at, updated_at)
VALUES (3, 2, 25.99, '2022-01-03 12:00:00', '2022-01-03 12:00:00'),
 (6, 2, 65.99, '2022-01-05 14:00:00', '2022-01-05 14:00:00'),
  (7, 1, 9.99, '2022-01-06 15:00:00', '2022-01-06 15:00:00'),
  (1, 1, 30.99, '2022-01-01 10:00:00', '2022-01-01 10:00:00'),
  (2, 1, 49.99, '2022-01-02 11:00:00', '2022-01-02 11:00:00'),
  
  (4, 3, 39.99, '2022-01-04 13:00:00', '2022-01-04 13:00:00'),
  (5, 3, 59.99, '2022-01-04 13:00:00', '2022-01-04 13:00:00'),
 
  (8, 3, 39.99, '2022-01-06 15:00:00', '2022-01-06 15:00:00');


-- Please write SQL queries to accomplish the following tasks:
-- 1. Create a new user with the following information:
-- name: John Doe
-- email: john.doe@example.com
-- password: 123456
-- created_at: current timestamp
-- updated_at: current timestamp

INSERT INTO users (id,name, email, password, created_at, updated_at)
VALUES ('4','John Doe', 'john.doe@example.com', '123456', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- 2. Retrieve the names and email addresses of all users who 
-- have placed at least one order.

SELECT 
    users.id, users.name, users.email, orders.user_id
FROM
    users
        INNER JOIN
    orders ON orders.user_id = users.id;
    
-- 3. Retrieve the total amount of orders placed by each user, 
-- sorted in descending order of total amount.

SELECT 
    users.id,
    users.name,
    users.email,
    SUM(orders.amount),
    orders.user_id
FROM
    users
        INNER JOIN
    orders ON orders.user_id = users.id
GROUP BY users.name
ORDER BY SUM(orders.amount) DESC;


-- 4. Retrieve the email address of the user who has placed the 
-- most orders.

SELECT 
    users.name,
    users.email,
    orders.amount,
    COUNT(orders.user_id) AS order_by_user
FROM
    users
        INNER JOIN
    orders ON orders.user_id = users.id
GROUP BY users.email
ORDER BY order_by_user DESC;

-- 5. Retrieve the user IDs and the total amount of orders placed 
-- by users who have placed at least one order and whose total 
-- amount of orders exceeds $100.

SELECT 
    users.id,
    users.name,
    users.email,
    SUM(orders.amount),
    orders.user_id
FROM
    users
        INNER JOIN
    orders ON orders.user_id = users.id
GROUP BY users.name
HAVING SUM(orders.amount) > 100
ORDER BY SUM(orders.amount) DESC;

-- 6. Retrieve the number of users who have not placed any 
-- orders.

SELECT 
    *
FROM
    users
WHERE
    id NOT IN (SELECT 
            users.id
        FROM
            users
                RIGHT JOIN
            orders ON orders.user_id = users.id
        GROUP BY users.id);
    
-- 7. Update the user with ID 1 to change their email address to 
-- "jane.doe@example.com".

UPDATE users 
SET 
    email = 'jane.doe@example.com'
WHERE
    id = 1;

UPDATE users 
SET 
    email = 'jane.test@example.com'
WHERE
    id = 2;

-- 8. Delete all orders placed by users whose email address 
-- contains the string "test".

DELETE FROM orders 
WHERE
    user_id IN (SELECT 
        id
    FROM
        users
    
    WHERE
        email LIKE '%test%');

-- 9. Retrieve the total amount of orders placed on each day of 
-- the current week, grouped by day.

SELECT 
    users.name,
    users.email,
    orders.amount,
    (orders.user_id) AS order_by_user,
    MONTH(orders.updated_at) AS month,
    YEAR(orders.updated_at) AS year,
    DAY(orders.updated_at) AS day
FROM
    users
        INNER JOIN
    orders ON orders.user_id = users.id
GROUP BY DAY(orders.updated_at);

-- 10. Retrieve the IDs and email addresses of users who have 
-- placed an order in the current current year and whose email address is in the format "example.com".

SELECT 
    users.id,
    users.name,
    users.email,
    orders.amount,
    (orders.user_id) AS order_by_user,
    MONTH(orders.updated_at) AS month,
    YEAR(orders.updated_at) AS year,
    DAY(orders.updated_at) AS day
FROM
    users
        INNER JOIN
    orders ON orders.user_id = users.id
GROUP BY DAY(orders.updated_at)
HAVING year = '2023'
    AND email LIKE '%example.com';

