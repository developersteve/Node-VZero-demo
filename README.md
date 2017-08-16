# Using the Braintree API in Express to process a credit card payment

This is an example of the Braintree API using the official Node SDK in Express to set up a credit card payment.

## Technology

This demo uses

* Node 0.10.26 or higher
* The [Express](http://expressjs.com/) web framework
* The [Braintree Node SDK](http://www.braintreepayments.com/docs/node/)

## Running the demo

* Run `npm install` to install all dependencies
* Run `npm start` to start the app
* Visit `http://127.0.0.1:3000/` in your browser
* Fill in the following credentials:
  * Amount: `100.00`
  * Number: `4111 1111 1111 1111`
  * CVV: `123`
  * Expiration date: `11/2020`
* Click submit
* You will receive a message that says __"Payment Success"__

## Running the test

* Requirement: [Mocha](http://mochajs.org/)
* Run `npm install -g mocha` to install all dependencies
* Run `mocha` to test the app

## Useful links

* [The Braintree Node SDK](http://www.braintreepayments.com/docs/node/)
* [The Braintree Sandbox with Node](http://www.braintreepayments.com/docs/node/reference/sandbox)
