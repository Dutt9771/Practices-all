
CREATE TABLE `practice` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `Age` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
)
INSERT INTO `sqlpractices`.`practice` (`id`, `name`, `location`, `Age`) VALUES ('1', 'Dutt', 'Ahemedabad', '25');
INSERT INTO `sqlpractices`.`practice` (`id`, `name`, `location`, `Age`) VALUES ('2', 'Param', 'Valsad', '30');
INSERT INTO `sqlpractices`.`practice` (`id`, `name`, `location`, `Age`) VALUES ('3', 'Parag', 'Porbandar', '21');
INSERT INTO `sqlpractices`.`practice` (`id`, `name`, `location`, `Age`) VALUES ('4', 'Priyanshu', 'Bhavnagar', '22');
INSERT INTO `sqlpractices`.`practice` (`id`, `name`, `location`, `Age`) VALUES ('5', 'Zenil', 'Surat', '17');


SELECT name,Age FROM sqlpractices.practice WHERE 25 AND 30;
SELECT name,Age FROM sqlpractices.practice WHERE 25 AND 30;
SELECT * FROM sqlpractices.practice WHERE Age BETWEEN 25 AND 30;
