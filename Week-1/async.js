const fs = require ("fs"); //Requring an external library called fs, called file System. It is a node.js library. 

fs. readFile("Week-1\a.txt", "utf-8", function(err, data) {      //utf-8 is the encoding in which you want to read this file. function is an anonymous function arguments are err, means first error is passed and then the data
console.log (data);

})    




 