/*
You just returned home to find your mansion has been robbed! Given an object of the stolen items, return the total amount of the burglary (number). If nothing was robbed, return the string "Lucky you!".

Examples
const stolenItems = {
  tv: 30,
  skate: 20,
  stereo: 50,
} ➞ 100

const stolenItems = {
  painting: 20000,
} ➞ 20000

const stolenItems =
*/
function cal(obj){
    for(let i in obj)
    if(obj.hasOwnProperty(i)){
        let x=Object.values(obj);
        let sum=x.reduce(function(a,b){
            return a+b
        },0)
        return sum;
    }
    return "lucky you"

}
let obj={
    tv: 30,
    skate: 20,
    stereo: 50,
  };
console.log(cal(obj));
let obj1={
    painting: 20000,
  };
  console.log(cal(obj1));
let obj2={};
console.log(cal(obj2)); 
