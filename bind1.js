//with arguments binding
let user = {
    firstName: "John"
  };
  
  function func(phrase) {
    console.log(phrase + ', ' + this.firstName);
  }
  
  // bind this to user
  let funcUser = func.bind(user);
funcUser("hello");