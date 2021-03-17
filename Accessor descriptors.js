let user={
    name:"john",
    surname:"smith"
};
Object.defineProperty(user,"fullName",{
    get(){
        return this.name+" " +this.surname;
    },
    set(value){
        [this.name,this.surname]=value.split(" ");
    }
});
console.log(user.fullName);//john smith
for(let i in user){
    console.log(i);//name,surname
}