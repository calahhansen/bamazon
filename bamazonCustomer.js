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
  database: "bamazon_db"
});

//Use the connect method on the object "connection".  The method argument is a callback function that will result in an error or console log that the database is connected.
connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  askUser();
});

function askUser() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View all products",
        "Search for product by ID and view quantity available",
        "Place Order",
        "exit"
      ]
    })
    .then(function (answer) {
      switch (answer.action) {
        case "View all products":
          displayProduct();
          break;

        case "Search for product by ID and view quantity available":
          searchProduct();
          break;

        case "Place Order":
          orderProduct();
          break;

        // case "Find data within a specific range":
        //   rangeSearch();
        //   break;

        // case "Search for a specific song":
        //   songSearch();
        //   break;

        case "exit":
          connection.end();
          break;
      }
    });
}

// Display/Read all of the product items for sale and include ids, product names, depts, prices and quantity of product
function displayProduct() {
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    console.log(res);
    askUser();
    // logs the actual query being run
    // console.log(query.sql);
    //prompt user with two messages

    //The first should ask them the ID of the product they would like to buy.

    //The second message should ask how many units of the product they would like to buy.


  });
}

function orderProduct() {
  inquirer.prompt([{
    name: "id",
    type: "input",
    message: "What is the product ID?"
  }
    , {
    name: "amount",
    type: "input",
    message: "How many items would you like to purchase?"
  }
  ]
  )
    .then(function (answer) {
      console.log(answer);
      connection.query("SELECT * FROM products WHERE id='" + answer.id + "'"), function (err, res) {
        if (err) throw err;
        console.log(res);

        // switch (answer.id) {
        //   case "View all products":
        //     displayProduct();
        //     break;

        //   case "Search for product by ID and view quantity available":
        //     searchProduct();
        //     break;
      };
    });
//END of the connection.
// connection.end();
  }
