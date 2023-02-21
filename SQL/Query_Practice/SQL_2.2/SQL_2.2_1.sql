-- SQL 2.2 CASE 1 
SELECT * FROM `sql2.2_1`.activity;
CREATE TABLE `sql2.2_1`.`activity` (
  `player_id` INT NOT NULL,
  `device_id` INT NULL,
  `event_date` DATE NULL,
  `games_played` INT NULL,
  PRIMARY KEY (`player_id`),
  PRIMARY KEY (`event_date`));
  
INSERT INTO `sql2.2_1`.`activity` (`player_id`, `device_id`, `event_date`, `games_played`) VALUES ('1', '2', '2016-03-01', '5')
,('1', '2', '2016-05-02', '6')
,('2', '3', '2017-06-25', '1')
,('3', '1', '2016-03-02', '0')
,('3', '4', '2018-07-03', '5');

-- Question 1: Write an SQL query to report the first login date 
-- for each player. Return the result table in any order.

SELECT 
    player_id, MIN(event_date) AS first_login
FROM
    activity
GROUP BY player_id


-- Question 2: Write an SQL query to report the device that is 
-- first logged in for each player. Return the result table in any 
-- order.

SELECT 
    player_id, MIN(device_id)
FROM
    activity
GROUP BY player_id

-- Question 3: Write an SQL query to report for each player and 
-- date, how many games played so far by the player. That is, the 
-- total number of games played by the player until that date. 
-- Check the example for clarity. Return the result table in any 
-- order.

SELECT * FROM `sql2.2_1`.activity;

SELECT
player_id,
event_date,
sum(games_played) OVER (partition by player_id order by event_date) as games_played_so_far
FROM
activity
