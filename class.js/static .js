class Animal{
    static planet="Earth";
    constructor(name,speed){
        this.speed=speed;
        this.name=name;
    }
    run(speed=0){
        this.speed+=speed;
        console.log(this.name+"  run with speed  "+ this.speed);
    }
    static compare(animal1,animal2){
        return animal1.speed-animal2.speed;
    }
}
class Rabbit extends Animal{
    hide(){
        console.log(this.name+" hides!");
    }
}
let rabbits=[
    new Rabbit("White Rabbit",10),
    new Rabbit("Black rabbit",5)
];
rabbits.sort(Rabbit.compare);
rabbits[0].run();
console.log(Rabbit.planet)