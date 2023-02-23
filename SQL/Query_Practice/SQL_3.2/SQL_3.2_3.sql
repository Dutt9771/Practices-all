-- Case 3
-- Consider a table called "	" with the following columns: 
-- "id", "name", "department", "salary". Write a SQL query to 
-- retrieve the names and salaries of all employees in the "sales" 
-- department who earn more than $50,000 per year.

CREATE TABLE `employees` (
    `id` INT NOT NULL,
    `name` VARCHAR(256) NULL,
    `department` VARCHAR(256) NULL,
    `salary` INT NULL,
    PRIMARY KEY (`id`)
);

INSERT INTO `sql3.2`.`employees` (`id`, `name`, `department`, `salary`) VALUES ('1', 'Dutt', 'IT', '6000')
,('2', 'Priyanshu', 'IT', '6000')
,('3', 'Zenil ', 'sales', '4000')
,('4', 'Kunj', 'sales', '5000')
,('5', 'parag', 'sales', '5000');

SELECT 
    name, salary
FROM
    employees
WHERE
    department = 'sales'
        AND salary * 12 >= 50000

