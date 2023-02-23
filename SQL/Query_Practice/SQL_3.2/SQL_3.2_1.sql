-- Case 1
-- Consider the following table structure for a blog:


CREATE TABLE blog_posts (
 id INT PRIMARY KEY,
 title VARCHAR(255),
 body TEXT,
 author_id INT,
 created_at TIMESTAMP,
 updated_at TIMESTAMP
);

INSERT INTO `sql3.2`.`blog_posts` (`id`, `title`, `body`, `author_id`, `created_at`, `updated_at`) VALUES ('1', 'Rich Dad Poor Dad', 'Book by Robert Kiyosaki and Sharon Lechter', '1', '1997-05-05 07:00:00', '2020-07-08 10:00:00')
,('2', 'Attitude Is Everything', 'Book by Jeff Keller', '2', '1999-08-09 05:00:00', '2019-05-07 08:00:00')
,('3', 'The 7 Habits of Highly Effective People', 'Book by Stephen Covey', '3', '1989-08-15 04:00:00', '2021-08-15 05:10:00');


CREATE TABLE blog_comments (
 id INT PRIMARY KEY,
 post_id INT,
 body TEXT,
 author_id INT,
 created_at TIMESTAMP
);

INSERT INTO `sql3.2`.`blog_comments` (`id`, `post_id`, `body`, `author_id`, `created_at`) VALUES ('1', '1', 'Great', '1', '2020-05-05 07:00:00')
,('2', '2', 'Awesome', '2', '2020-07-05 07:00:00')
,('3', '3', 'Excellent', '3', '2020-08-07 07:00:00')
,('4', '4', 'Some times its Boring', '1', '2023-01-12 14:31:01')
,('5', '5', 'Average', '2', '2023-12-22 14:31:01');



-- Write a query to retrieve the title and body of the five most 
-- recent blog posts, along with the number of comments each post 
-- has.

SELECT 
    blog_posts.id,
    blog_posts.author_id,
    blog_posts.title,
    blog_posts.body,
    blog_posts.created_at,
    blog_comments.created_at AS commented_at,
    blog_comments.body AS comment
FROM
    blog_posts
        INNER JOIN
    blog_comments ON blog_posts.author_id = blog_comments.author_id
    ORDER BY author_id;
