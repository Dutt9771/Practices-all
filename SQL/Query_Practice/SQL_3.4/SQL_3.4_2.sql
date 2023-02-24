-- Case 2
-- Consider you’ve one employee database system. Create table 
-- schema and add data according to the following queries.



CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Gender CHAR(1),
    DateOfBirth DATE,
    Department VARCHAR(50),
    Position VARCHAR(50),
    Salary DECIMAL(10 , 2 ),
    hiredate DATE
)


INSERT INTO Employees (EmployeeID, FirstName, LastName, Gender, DateOfBirth, Department, Position, Salary, HireDate)
VALUES 
(1, 'John', 'Doe', 'M', '1980-01-01', 'Sales', 'Manager', 75000.00, '2010-05-01'),
(2, 'Jane', 'Smith', 'F', '1985-05-12', 'Marketing', 'Associate', 45000.00, '2012-03-15'),
(3, 'Bob', 'Johnson', 'M', '1990-08-23', 'Finance', 'Analyst', 55000.00, '2014-01-10'),
(4, 'Emily', 'Davis', 'F', '1995-11-04', 'Engineering', 'Developer', 65000.00, '2018-09-01'),
(5, 'Mike', 'Williams', 'M', '1988-03-15', 'Sales', 'Associate', 40000.00, '2020-06-30');



-- 1. Write a query that returns the first and last name of all 
-- employees who have a title that contains the word 
-- "Manager".

SELECT 
    firstname, lastname, position
FROM
    Employees
WHERE
    position = 'Manager'
    
-- 2. Write a query that returns the department name and the 
-- average salary of all employees in each department.

SELECT 
    department, AVG(salary)
FROM
    Employees
GROUP BY department

-- 3. Write a query that returns the number of employees who were 
-- hired in each year, sorted by year.

select  firstname, lastname, position,year(hiredate) as hire_year from EMployees order by year(hiredate);


-- 4. Write a query that returns the first name, last name, and 
-- salary of the top 10 highest-paid employees.

SELECT 
    firstname, lastname, position, salary
FROM
    Employees
ORDER BY salary DESC
LIMIT 5


-- 5. Write a query that updates the salary of all employees in 
-- the "Sales" department to be 10% higher than their current 
-- salary.

UPDATE Employees 
SET 
    salary = salary * 1.1
WHERE
    department = 'sales'


-- 6. Write a query that deletes all employees who were hired 
-- before the year 2000.

DELETE FROM Employees 
WHERE
    hiredate < '2000-01-01'

-- 7. Write a query that creates a new table called 
-- "employee_stats" that contains the following columns: 
-- "department_name", "total_employees", and "average_salary". 
-- The table should include one row for each department.

CREATE TABLE employee_stats (
    department_name VARCHAR(255),
    total_employees INT,
    average_salary DECIMAL(10 , 2 )
);

-- 8. Write a query that returns the first and last name of all 
-- employees who have the same last name as their manager.

select FirstName, LastName from Employees 
where LastName = (
select e.LastName  from Employees e join Position p
on e.Position = p.id 
where p.Position = 'Manager');

-- 9. Write a query that returns the top 5 departments with the 
-- highest average salary.

SELECT 
    department, AVG(salary)
FROM
    Employees
GROUP BY department
ORDER BY AVG(salary) DESC
LIMIT 5;

-- 10. Write a query that returns the first and last name of 
-- all employees who have at least one dependent. Sort the 
-- results by last name

CREATE TABLE Dependents (
    id INT PRIMARY KEY,
    emp_id INT,
    First_name VARCHAR(256),
    last_name VARCHAR(256),
    relation VARCHAR(256),
    FOREIGN KEY (emp_id)
        REFERENCES Employees (EmployeeID)
        ON DELETE CASCADE
);

INSERT INTO Dependents (id, emp_id, First_name, last_name, relation)
VALUES  (1, 1, 'Jane', 'Doe', 'Spouse'),
  (2, 1, 'John', 'Doe Jr.', 'Child'),
  (3, 3, 'Emily', 'Smith', 'Spouse'),
  (4, 4, 'James', 'Lee', 'Child'),
  (5, 5, 'Olivia', 'Johnson', 'Child');
 
SELECT 
    e.FirstName, e.lastName
FROM
    Employees e
        JOIN
    Dependents d ON e.EmployeeID = d.emp_id
GROUP BY e.EmployeeID , e.FirstName , e.lastName
HAVING COUNT(d.id) >= 1
ORDER BY e.lastName;

