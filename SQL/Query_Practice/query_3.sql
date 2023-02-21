CREATE TABLE Countries (
  country_id INT PRIMARY KEY,
  name VARCHAR(256) NOT NULL
);

CREATE TABLE Players (
  player_id INT PRIMARY KEY,
  name VARCHAR(256) NOT NULL,
  country_id INT NOT NULL,
  expertise VARCHAR(256) NOT NULL,
  FOREIGN KEY (country_id) REFERENCES Countries(country_id)
);

