# 301-practice-1
----

**Q1:What library do we use in Node on the server side to allow us to create and run an HTTP server that obeys the HTTP protocol?**
1. express
2. npm

**Q2:Explain this snippet of code from a server-side application:**
response.status(200).send('Hello World!');
The HTTP 200 : success status response code indicates that the request has succeeded, so if it succeeded return ('Hello World!');

  **Q3:Write a function that takes an array of numbers as an argument and outputs the square of each number in that array.**
   Your code goes here
let arr=[1,2,3]
arr.map( function (element, index) {
    return element*element;
});