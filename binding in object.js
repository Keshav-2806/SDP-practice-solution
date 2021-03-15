//without  arguments
/*
let user = {
    firstName: "John",
    sayHi() {
      console.log(`Hello, ${this.firstName}!`);
    }
  };
  
  let sayHi = user.sayHi.bind(user); // (*)
  
  // can run it without an object
  sayHi(); // Hello, John!
  
  setTimeout(sayHi, 1000); // Hello, John!
  
  // even if the value of user changes within 1 second
  // sayHi uses the pre-bound value which is reference to the old user object
  user = {
    sayHi() { console.log("Another user in setTimeout!"); }
  };
  */

  let user = {
    firstName: "John",
    say(phrase) {
      console.log(`${phrase}, ${this.firstName}!`);
    }
  };
  
  let say = user.say.bind(user);
  
  say("Hello"); // Hello, John ("Hello" argument is passed to say)
  say("Bye"); 
