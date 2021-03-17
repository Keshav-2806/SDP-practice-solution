let user = {
    name: "John"
  };
  
  Object.defineProperty(user, "name", {
    writable: false,
    enumerable:true,
    configurable:true
  });
  let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
  console.log(descriptor);
  user.name = "Pete"; //Cannot assign to read only property 'name'
  console.log(user.name);