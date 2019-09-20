DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  item_id INTEGER(8) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(50) NOT NULL,
  department_name VARCHAR(30) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INTEGER(8) NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Jenga", "Games & Accessories", 5.75, 100), 
("LEGO Harry Potter Advent Calendar", "Games & Accessories", 32.99, 100),
("Play-doh 10 pack case of colors", "Games & Accessories", 7.99, 100),
("Legend of Zelda Link's Awakening - Nintendo Switch", "Video Games", 59.99, 10),
("Educated - A Memoir", "Books", 13.99, 100),
("Just Ask!: Be Different, Be Brave, Be You", "Books", 11.15, 100),
("The Wonky Donkey Paperback", "Books", 4.99, 100),
("HD Indoor Wireless Smart Home Camera", "Electronics", 25.99, 100),
("Clump & Seal Platinum Cat Litter", "Pets", 24.99, 100),
("Earth Rated Dog Poop Bags", "Pets", 11.99, 100),
("Fire 7 Kids Edition Tablet, Blue Kid-Proof Case", "Electronics", 199.99, 100);