//----------------------PACKAGES---------------------------------------------------------------------------------
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

//-------------------------CONNECTION----------------------------------------------------------------------------
//Use the connect method on the object "connection".  The method argument is a callback function that will result in an error or console log that the database is connected.
connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  askUser();
});

//-------------------------------ASK CUSTOMER QUESTIONS ------------------------------------------------------
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

        case "exit":
          connection.end();
          break;
      }
    });
}
// ------------------------------DISPLAY PRODUCT-------------------------------------------------------------
// Display/Read all of the product items for sale and include ids, product names, depts, prices and quantity of product
function displayProduct() {
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    console.log(res);
    askUser();
  });
}
// ----------------------------SEARCH PRODUCT--------------------------------------------------------------------
//When the user selects "Search for product by ID and view quantity available", write a function to query display/read
function searchProduct() {
  //The user should be asked for the product ID before displaying the quanitity available.
  inquirer.prompt([{
    name: "id",
    type: "input",
    message: "what is the product ID?"
  }])  //Need to do something about the user input...parse or something to make sure that it's a number
    .then(function (answer) {
      console.log(answer); //it works! 
      connection.query("SELECT * FROM products WHERE id=" + answer.id, function (err, res) {
        if (err) throw err;
        if (res) {
          // console.log(res); // res works but struggling to dig down and grab just the stock_quantity result
          console.log("Quantity Available for purchase: " + res[0].stock_quantity);
          askUser(); // need to ask User again to see if they would like to go back and display all products to look for something else or go back and Order product.
        }
      })
    })

}
//----------------------------------ORDER PRODUCT----------------------------------------------------------
//When the user selects "Place Order", write a function to prompt user with two messages 
function orderProduct() {
  //The first should ask them the ID of the product they would like to buy.
  inquirer.prompt([{
    name: "id",
    type: "input",
    message: "What is the product ID?"
  }  //Need to do something about the user input...parse or something to make sure that it's a number or maybe make this a list type with an array of choices?  too many choices...need to narrow down first.
    , {
    //The second message should ask how many units of the product they would like to buy.
    name: "amount",
    type: "input",
    message: "How many items would you like to purchase?"
  }])  //Need to do something about the user input...parse or parse int or something to make sure that it's a number
    .then(function (answer) { //or do I need to parse the answer...
      console.log(answer);  //it works!
      connection.query("SELECT * FROM products WHERE id=" + answer.id, function (err, res) {
        console.log(res);
        if (err) throw err; //appears to not be a MySQL error but more like an error on the next line?? ASK FOR HELP
        if (parseInt(answer.amount) > res[0].stock_quantity) { //throwing error - cannot read property of 'stock_quantity' of undefined
          console.log("Insufficient quantity!");
          askUser();
        }
        else {
          // console.log("hello");
          connection.query("UPDATE products SET ? WHERE ?", [{
            stock_quantity: res[0].stock_quantity - parseInt(answer.amount)
          }, {
            id: answer.id
          }],
            function (err, res2) {
              if (err) throw err;
              // console.log(res2);
              console.log("Thanks for your order! Your purchase total is: $" + (answer.amount * res[0].price))
              askUser();
            });
        }
      }
      )
    });
  //----------------------------------------------END of the connection-------------------------------------------------------
  // connection.end();
}
