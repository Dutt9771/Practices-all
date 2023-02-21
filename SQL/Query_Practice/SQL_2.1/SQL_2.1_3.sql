-- 3. Write an SQL query to swap all 'f' and 'm' values (i.e., 
-- change all 'f' values to 'm' and vice versa) with a single 
-- update statement and no intermediate temporary tables.Note 
-- that you must write a single update statement, do not write 
-- any select statement for this problem.


CREATE TABLE `sql2.1_3`.`salary` (
  `id` INT NOT NULL,
  `name` VARCHAR(256) NOT NULL,
  `sex` ENUM('M', 'F') NOT NULL,
  `salary` INT NOT NULL,
  PRIMARY KEY (`id`));

INSERT INTO `sql2.1_3`.`salary` (`id`, `name`, `sex`, `salary`) VALUES ('1', 'Dutt', 'M', '50,000'),('2', 'Ayushi', 'F', '40,000'),('3', 'Parag', 'M', '40,000'),('4', 'Ila', 'F', '30,000');

UPDATE salary
SET sex =   CASE 
                    WHEN sex = 'F' 
                        THEN 'M' 
                    ELSE 'F' 
                END;
                
                
SELECT * FROM salary;