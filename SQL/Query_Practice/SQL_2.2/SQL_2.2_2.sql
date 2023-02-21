-- Write an SQL query to report all the classes that have at least 
-- five students. Return the result table in any order.


CREATE TABLE `sql2.2_2`.`courses` (
  `student` VARCHAR(256) NOT NULL,
  `class` VARCHAR(256) NOT NULL);



INSERT INTO `sql2.2_2`.`courses` (`student`, `class`) VALUES ('A','Math'),
('B','ENGLISH'),
('C','Math'),
('D','BIOLOGY'),
('E','Math'),
('F','COMPUTER'),
('G','Math'),
('H','Math'),
('I','Math')

SELECT
    class
FROM
    (SELECT
        class, COUNT(student) AS num
    FROM
        courses
    GROUP BY class) AS temp_table
WHERE
    num >= 5
;

