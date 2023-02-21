-- 8. Write an SQL query to report the first name, last name, city, 
-- and state of each person in the Person table. If the address 
-- of a personId is not present in the Address table, report null 
-- instead. Return the result table in any order.

CREATE TABLE `sql2.1_8`.`person` (
    `id` INT NOT NULL,
    `firstname` VARCHAR(256) NULL,
    `lastname` VARCHAR(256) NULL,
    PRIMARY KEY (`id`)
);

INSERT INTO `sql2.1_8`.`person` (`id`, `firstname`, `lastname`) VALUES ('1', 'Dutt', 'Mistry'),('2', 'Priyanshu', 'Solanki')
,('3', 'Parag', 'Parmar')
,('4', 'Zenil', 'Patel')
,('5 ', 'Kunj', 'Patel');


CREATE TABLE `sql2.1_8`.`address` (
    `id` INT NOT NULL,
    `person_id` INT NULL,
    `city` VARCHAR(256) NULL,
    `state` VARCHAR(256) NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (person_id)
        REFERENCES person (id)
);

INSERT INTO `sql2.1_8`.`address` (`id`, `person_id`, `city`, `state`) VALUES ('1', '1', 'Ahmedabad', 'Gujarat'),('2', '2', 'Bhavnagara', 'Gujarat')
,('3', '3', 'Porbandar', 'Gujarat')
,('4', '4');

SELECT 
    person.firstname,
    person.lastname,
    address.city,
    address.state
FROM
    address
        INNER JOIN
    person ON person.id = address.person_id;




  
