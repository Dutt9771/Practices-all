-- Case 2
-- Consider the following table structure for a social media 
-- platform:


CREATE TABLE users (
    id INT PRIMARY KEY,
    name VARCHAR(255),
    created_at TIMESTAMP
);
INSERT INTO `sql3.2`.`users` (`id`, `name`, `created_at`) VALUES ('1', 'Dutt Mistry', '2022-07-08 10:00:00')
,('2', 'Priyanshu', '2022-05-06 10:00:00')



CREATE TABLE posts (
 id INT PRIMARY KEY,
 user_id INT,
 body TEXT,
 created_at TIMESTAMP
);
INSERT INTO `sql3.2`.`posts` (`id`, `user_id`, `body`, `created_at`) VALUES ('1', '1', 'Intern in Cybercom', '2022-07-08 19:00:00'),('2', '2', 'At College', '2022-05-07 10:00:00'),('3', '1', 'Get Job', '2022-09-07 10:00:00'),('4', '2', 'Get Job', '2022-07-08 19:00:00');


CREATE TABLE likes (
    id INT PRIMARY KEY,
    user_id INT,
    post_id INT,
    created_at TIMESTAMP,
    likes INT
);


INSERT INTO `sql3.2`.`likes` (`id`, `user_id`, `post_id`, `created_at`) VALUES ('1', '1', '1', '2022-07-08 19:00:00','10')
,('2', '1', '3', '2022-07-08 19:00:00','20')
,('3', '2', '2', '2022-07-08 19:00:00','15')
,('4', '2', '4', '2022-07-08 19:00:00','30');

-- Write a query to retrieve the name and number of posts for each 
-- user who joined the platform in the year 2022, along with the 
-- total number of likes received for each user's posts.


SELECT 
    users.name,
    COUNT(posts.id) AS num_posts,
    SUM(likes.likes) AS total_likes
FROM
    users
        JOIN
    posts ON users.id = posts.user_id
        JOIN
    likes ON posts.id = likes.post_id
WHERE
    YEAR(users.created_at) = 2022
GROUP BY users.id
