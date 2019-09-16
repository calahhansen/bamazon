//running this application will first display all of the items available for sale.
//Include the ids, names, and prices of products for sale.

//Require mysql and inquirer npm packages (Remember to install!)
const mysql = require("mysql");
const inquirer = require("inquirer");

//Set up the connection information required as an object
const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "products_db"
});

//Use the connect method on the object "connection".  The method argument is a callback function that will result in an error or console log that the database is connected.
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  displayProduct();
});
// Display/Read all of the product items for sale and include ids, product names, depts, prices and quantity of product
function displayProduct() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.log(res);

    // logs the actual query being run
    console.log(query.sql);

    //prompt user with two messages

    //The first should ask them the ID of the product they would like to buy.

    //The second message should ask how many units of the product they would like to buy.

    //END of the connection.
    connection.end();
  });
}
