// Drops the bamazon_db if it exists currently //
DROP DATABASE IF EXISTS bamazon_db;
// Creates the "bamazon_db" database //
CREATE DATABASE bamazon_db;

// Makes it so all of the following code will affect bamazon_db //
USE bamazon_db;

//Creates the table "products" within bamazon_db --
CREATE TABLE products (
  // Makes an unique id for each product //
  item_id INTEGER(8) AUTO_INCREMENT NOT NULL,
  // Makes a string column called "product_name" which cannot contain null //
  product_name VARCHAR(30) NOT NULL,
  // Makes a string column called "department_name" which cannot contain null //
  department_name VARCHAR(30) NOT NULL,
  // Makes a decimal column called "price" //
  price DECIMAL(10,2) NOT NULL,
  // Makes an numeric column called "stock_quantity" //
  stock_quantity INTEGER(8) NOT NULL,
  // Makes item_id the primary key //
  PRIMARY KEY (item_id)
);

//Creates new rows containing data in all named columns --
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity, PRIMARY KEY)
VALUES ("Jenga", "Games & Accessories", 5.75, 100), 
("LEGO Harry Potter Advent Calendar", "Games & Accessories", 32.99, 100),
("Play-doh 10 pack case of colors", "Games & Accessories", 7.99, 100),
("Legend of Zelda Link's Awakening - Nintendo Switch", "Video Games", 59.99, 10),
("Educated - A Memoir", "Books", 13.99, 100),
("Just Ask!: Be Different, Be Brave, Be You Hardcover", "Books", 11.15, 100),
("The Wonky Donkey Paperback", "Books", 4.99, 100),
("HD Indoor Wireless Smart Home Camera with Night Vision, 2-Way Audio, Person Detection, Works with Alexa & the Google Assistant", "Electronics", 25.99, 100),
("Jenga", "Games & Accessories", 5.75, 100),
("Jenga", "Games & Accessories", 5.75, 100),
("Jenga", "Games & Accessories", 5.75, 100);



//Updates the row where the column name is ??
UPDATE products
//SET has_pet = true, pet_name = "Franklin", pet_age = 2
//WHERE name = "Peter";

