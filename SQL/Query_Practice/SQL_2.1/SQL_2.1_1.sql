-- 1. Create a database structure for employee leave application. It should include all the employee's information as well as their leave information

CREATE TABLE `Employee` (
  `id` int(11) NOT NULL,
  `name` varchar(256) ,
  `Joinig Date` date ,
	`leaving_id` int(11),
  PRIMARY KEY (`id`),
  FOREIGN KEY(leaving_id) REFERENCES Leaves(id)
);

INSERT INTO `sql2.1`.`employee` (`id`, `name`, `Joinig Date`, `leaving_id`) VALUES ('1', 'Kalpesh Patel', '2016-02-02', '1'),('2', 'Ramesh Panchal', '2018-12-10', '2'),('3', 'Harish Vaghela', '2018-03-18', '3'),('4', 'Jenish Shah ', '2020-12-19', '4');



CREATE TABLE `Leaves` (
  `id` int(11) NOT NULL,
  `Leaving Date` date DEFAULT NULL,
  PRIMARY KEY (`id`)
)
SELECT * FROM `sql2.1`.`Employee`;

