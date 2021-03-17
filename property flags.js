let user = {
    name: "John"
  };
  
  let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
  console.log(descriptor);
  /* property descriptor:
  {
    "value": "John",
    "writable": true,
    "enumerable": true,
    "configurable": true
  }
  */