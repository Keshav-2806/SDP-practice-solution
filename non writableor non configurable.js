let user = {
    name: "John"
  };
  
  Object.defineProperty(user, "name", {
    writable: false,
    configurable: false
  });
  let x=Object.getOwnPropertyDescriptor(user,"name");
  console.log(x);
  // won't be able to change user.name or its flags
  // all this won't work:
  user.name = "Pete";
  console.log(user.name);
  console.log(delete user.name);

  Object.defineProperty(user, "name", { value: "Pete" });//cannot reedefined property