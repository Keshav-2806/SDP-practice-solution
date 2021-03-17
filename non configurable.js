let user = {
    name: "John"
  };
  
  Object.defineProperty(user, "name", {
    configurable: false
  });
  let y=Object.getOwnPropertyDescriptor(user,"name");
  console.log(y);
  user.name = "Pete"; // works fine
  console.log(user.name);
  let z=delete user.name;
console.log(z);