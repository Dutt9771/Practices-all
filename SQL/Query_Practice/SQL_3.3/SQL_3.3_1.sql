-- Case 1
-- Consider a table called "books" with the following columns: 
-- "id", "title", "author", "publication_year". Write a SQL query 
-- to retrieve the title and author of the oldest book in the 
-- table.

CREATE TABLE `books` (
    `id` INT NOT NULL,
    `title` VARCHAR(256) NULL,
    `author` VARCHAR(256) NULL,
    `publication_year` YEAR(4) NULL,
    PRIMARY KEY (`id`)
);

INSERT INTO `sql3.3`.`books` (`id`, `title`, `author`, `publication_year`) VALUES ('1', 'Tomb of Sand', 'Geetanjali Shree', 2022)
,('2', 'Adam ', 'S. Hareesh', 2022)
,('3', 'Whereabouts', 'Jhumpa Lahiri', 2018)
,('4', 'Economy and', 'Max Weber', 1922)
,('5', 'The Wealth of Nations', 'Adam Smith (Father of Economics)', 1920);

SELECT 
    title, author, publication_year
FROM
    books
WHERE
    publication_year = (SELECT 
            MIN(publication_year)
        FROM
            books);

