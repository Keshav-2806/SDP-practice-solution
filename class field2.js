class User{
    name="John";
}
let user=new User();
console.log(user.name);
console.log(User.prototype.name);//undefined  class fields is that they are set on individual objects, not User.prototype: