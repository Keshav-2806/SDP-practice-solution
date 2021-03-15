//Functions provide a built-in method bind that allows to fix this
//without argument binding
let user = {
    firstName: "John"
  };
  
  function func() {
    console.log(this.firstName);
  }
  
  let funcUser = func.bind(user);
  funcUser(); 

