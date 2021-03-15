
 //without parameter

function sayHi(){
    console.log(this.name);
}
let user={name:"john"};
let admin={name:"Admin"};
sayHi.call(user);
sayHi.call(admin);


//with parameter
function say1(phrase) {
    console.log(this.name + ': ' + phrase);
  }
  
  let user1 = { name: "John" };
  let user2={name:"shon"}
  // user becomes this, and "Hello" becomes the first argument
  say1.call( user1, "Hello" ); 
  say1.call(user2,"hii")