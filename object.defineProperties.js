let user={};
user.name="john";
user.surname="smith"
let y=Object.defineProperties(user, {
    name: { value: "John", writable: false },
    surname: { value: "Smith", writable: false },
    // ...
  });
  let z=Object.getOwnPropertyDescriptor(user,"name");;
  let z1=Object.getOwnPropertyDescriptor(user,"surname");
  console.log(z);
  console.log(z1);
console.log(y);
console.log(user);
user.name="pete";
console.log(user.name);