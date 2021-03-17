//constructor with no argument
class User{
    constructor(){
        this.name="keshav";
    }
    sayHi(){
        return this.name;
    }
}
let user= new User();
console.log(user.sayHi());
console.log(typeof User);
console.log(User===User.prototype.constructor);
console.log(User.prototype.sayHi);

