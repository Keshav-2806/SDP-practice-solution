//Question link- https://edabit.com/challenge/9KEKJG5PZTFmG3Zau
function addName(obj, name, value) {
    let z=obj;
    let y={};
    y[name]=value
    let x=Object.assign(z,y);
    return x;
	
}

let obj={ piano: 500 };
let name="Brutus";
let value=400;
console.log(addName(obj,name,value));
let obj1={};
let name1="Brutus";
let value1=300;
console.log(addName(obj1,name1,value1));
let obj2={ piano: 500, stereo: 300 };
let name2="Caligula";
let value2=440;
console.log(addName(obj2,name2,value2));

