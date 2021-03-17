function Rabbit(name){
    this.name=name;
    console.log(name);// White Rabbit , Black Rabbit
}
let rabbit=new Rabbit("White Rabbit");
let rabbit2=new rabbit.constructor("Black Rabbit");
console.log(rabbit);//Rabbit { name: 'White Rabbit' }
console.log(rabbit2);//Rabbit { name: 'Black Rabbit' }