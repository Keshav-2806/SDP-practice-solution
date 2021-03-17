let x={};
x.name="john";
x.age=23;
let y=Object.defineProperty(x,"name",
{
    enumerable:false,  
});
let z=Object.getOwnPropertyDescriptor(x,"name");
console.log(z);
console.log(y);
for (let i in x){
    console.log(i);
}