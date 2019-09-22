###BAMAZON with Node.js & MySQL

#Overview of BAMAZON
<br>
I created an Amazon-like storefront with the MySQL skills learned in this unit. The app will take in orders from customers and deplete stock from the store's inventory. As a bonus task, the app can track product sales across your store's departments and then provide a summary of the highest-grossing departments in the store.
For data input and storage, the app requires MySQL and Inquirer npm packages in the files.
<br>
#Links and Sources:<br>
[Link to "How-to" Video for Customers](#)<br>
[Github Repository Link](https://github.com/calahhansen/bamazon)<br>

#Customer View Description

The app should then prompt users with two messages.

The first should ask them the ID of the product they would like to buy.
The second message should ask how many units of the product they would like to buy.



Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.



However, if your store does have enough of the product, you should fulfill the customer's order.

This means updating the SQL database to reflect the remaining quantity.
Once the update goes through, show the customer the total cost of their purchase.
