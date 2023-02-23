-- Case 2
-- Create a table called "employees" with the following columns: 
-- "id" (integer, primary key), "name" (text), "age" (integer), and 
-- "salary" (integer).


CREATE TABLE `sql3.3`.`employees` (
    `id` INT NOT NULL,
    `name` TEXT NULL,
    `age` INT NULL,
    `salary` INT NULL,
    PRIMARY KEY (`id`)
);
INSERT INTO `sql3.3`.`employees` (`id`, `name`, `age`, `salary`) VALUES ('1', 'John ', '35', '60000')
,('2', 'Mary', '27', '50000')
,('3', 'Peter', '42', '75000')
,('4', 'Olivia', '29', '55000'
,('5', 'Michael', '38', '80000');





-- 1. Write a SQL query to select all employees from the 
-- "employees" table.

SELECT 
    *
FROM
    employees

-- 2. Write a SQL query to select the name and salary of all 
-- employees with a salary greater than 60000.

SELECT 
    name, salary
FROM
    employees
WHERE
    salary > 60000

-- 3. Write a SQL query to update Peter's age to 43.

UPDATE employees
SET age = '43'
WHERE id = 5;

-- 4. Write a SQL query to delete the employee with the id of 4.

DELETE from employees where id=4

-- 5. Write a SQL query to calculate the average salary of all 
-- employees.

select AVG(salary) from employees

-- 6. Write a SQL query to select the name and age of the oldest 
-- employee.

SELECT name, salary,age as oldest_employee 
FROM employees
WHERE age = (
    SELECT MAX(age)
    FROM employees
);

-- 7. Write a SQL query to select the name and age of the 
-- youngest employee.

SELECT 
    name, salary, age AS youngest_employee
FROM
    employees
WHERE
    age = (SELECT 
            MIN(age)
        FROM
            employees);
            
-- 8. Write a SQL query to select the name of the employee with 
-- the highest salary.

SELECT 
    name, salary
FROM
    employees
WHERE
    salary = (SELECT 
            MAX(salary)
        FROM
            employees);