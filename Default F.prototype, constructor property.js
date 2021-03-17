function Rabbit() {}
// by default:
// Rabbit.prototype = { constructor: Rabbit }

console.log( Rabbit.prototype.constructor == Rabbit);//true

function Rabbit1() {}
// by default:
// Rabbit.prototype = { constructor: Rabbit }

let rabbit = new Rabbit1(); // inherits from {constructor: Rabbit}

console.log(rabbit.constructor == Rabbit1); // true (from prototype)