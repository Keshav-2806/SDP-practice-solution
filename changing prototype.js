/*In the code below we create new Rabbit, and then try to modify its prototype.

In the start, we have this code:

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

alert( rabbit.eats ); // true
*/


function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype = {};

console.log( rabbit.eats );//true
/*The assignment to Rabbit.prototype sets up [[Prototype]] for new objects,
 but it does not affect the existing ones.*/