function User(name,age,city){
    this.name=name,    //creating constructor
    this.age=age,
    this.city=city;
}
User.prototype.sayHi=function(){
    console.log(this.name);
    console.log(this.age);
    console.log(this.city);
};
let user=new User("John",23,"patna");
user.sayHi();
console.log(user);
console.log(User("jack",24,"Patna"));//undefined
