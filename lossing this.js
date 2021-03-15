//losing this
let user = {
    firstName: "John",
    sayHi() {
      console.log(`Hello, ${this.firstName}!`);
    }
  };
  
  setTimeout(user.sayHi, 1000); 


  //to fix this problem use a wrapper
  
  let user1 = {
    firstName: "John",
    sayHi() {
      console.log(`Hello, ${this.firstName}!`);
    }
  };
  
  setTimeout(function() {
    user1.sayHi(); // Hello, John!
  }, 1000);
  