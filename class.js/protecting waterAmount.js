class CofeeMachine{
    waterAmount=0;
    constructor(power){
        this.power=power;
        console.log("Created a coffee-machine,power: "+ this.power);
    }
}
let cofeeMachine=new CofeeMachine(100);
cofeeMachine.waterAmount=200; 