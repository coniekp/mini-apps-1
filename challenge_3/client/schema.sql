DROP DATABASE store;
CREATE DATABASE store;

USE store;

CREATE TABLE user (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  email VARCHAR(50),
  username VARCHAR(20),
  password VARCHAR(255),
  UNIQUE (username),
  PRIMARY KEY (id)
);

CREATE TABLE shipping_address (
  id INT NOT NULL AUTO_INCREMENT,
  address_line_1 VARCHAR(255),
  address_line_2 VARCHAR(255),
  city VARCHAR(50),
  state VARCHAR(2),
  zipcode INT,
  PRIMARY KEY (id)
)

CREATE TABLE credit_card (
  id INT NOT NULL AUTO_INCREMENT,
  card_number INT,
  expiry_date INT,
  cvv INT,
  zipcode INT,
  PRIMARY KEY (id)  
)

CREATE TABLE order (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT,
  shipping_id INT,
  credit_card_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES user (id),
  FOREIGN KEY (shipping_id) REFERENCES shipping_address (id),
  FOREIGN KEY (credit_card_id) REFERENCES credit_card (id)
)

CREATE TABLE inventory (
  id INT NOT NULL AUTO_INCREMENT,
  item_name VARCHAR (255),
  price INT,
  quantity INT,
  PRIMARY KEY (id)
)

CREATE TABLE inventory_order (
  id INT NOT NULL AUTO_INCREMENT, 
  item_id INT,
  order_id INT,
  quantity INT,
  PRIMARY KEY (id),
  FOREIGN KEY (item_id) REFERENCES inventory (id),
  FOREIGN KEY (order_id) REFERENCES order (id)
)