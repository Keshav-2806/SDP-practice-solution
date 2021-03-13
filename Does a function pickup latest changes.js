/*The function sayHi uses an external variable name. When the function runs, which value is it going to use?*/

let name = "John";

function sayHi() {
  console.log("Hi, " + name);
}
name= "pete"


sayHi(); 
/*A function gets outer variables as they are now, it uses the most recent values.

Old variable values are not saved anywhere. When a function wants a variable, it takes the current value from its own Lexical Environment or the outer one.*/
