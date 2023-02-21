-- Case-3. Write an SQL query to report the name, population, and area of 
-- the big countries.

CREATE TABLE `sql2.2_3`.`world` (
  `name` VARCHAR(256) NOT NULL,
  `continent` VARCHAR(256) NULL,
  `area` INT NULL,
  `population` INT NULL,
  `gdp` INT NULL,
  PRIMARY KEY (`name`));


INSERT INTO `sql2.2_3`.`world` (`name`, `continent`, `area`, `population`, `gdp`) VALUES ('Afghanistan', 'Asia', '652230', '25500100', '20343000000')
,('Albania', 'Europe', '28748', '2831741', '12960000000')
,('Algeria', 'Africa', '2381741', '37100000', '188681000000')
,('Andorra', 'Europe', '468', '78115', '3712000000')
,('Angola', 'Africa', '1246700', '20609294', '100990000000');

SELECT 
    name, population, area
FROM
    world
WHERE
    area >= 3000000
        OR population >= 25000000;


			