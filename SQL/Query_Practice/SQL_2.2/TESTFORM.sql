-- Create User table
CREATE TABLE User (
  UserID INT NOT NULL PRIMARY KEY,
  Name VARCHAR(50) NOT NULL,
  Email VARCHAR(50) NOT NULL,
  Password VARCHAR(50) NOT NULL
);

-- Create QuestionBank table
CREATE TABLE QuestionBank (
  QuestionBankID INT NOT NULL PRIMARY KEY,
  Name VARCHAR(50) NOT NULL,
  UserID INT NOT NULL,
  FOREIGN KEY (UserID) REFERENCES User(UserID)
);

-- Create Question table
CREATE TABLE Question (
  QuestionID INT NOT NULL PRIMARY KEY,
  Text VARCHAR(100) NOT NULL,
  QuestionBankID INT NOT NULL,
  FOREIGN KEY (QuestionBankID) REFERENCES QuestionBank(QuestionBankID)
);

-- Create Option table
CREATE TABLE Option (
  OptionID INT NOT NULL PRIMARY KEY,
  Text VARCHAR(50) NOT NULL,
  QuestionID INT NOT NULL,
  FOREIGN KEY (QuestionID) REFERENCES Question(QuestionID)
);
