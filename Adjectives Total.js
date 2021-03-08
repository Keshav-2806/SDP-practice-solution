//Question link- https://edabit.com/challenge/NkMTBCxMkt4meHpa4
function totalAmountAdjectives(obj) {
    let count=0;
    for(let i in obj){
        count=count+1
    }
    return count;
	
}
let obj={ a: "moron" };
let obj1={a: "idiot", b: "idiot", c: "idiot"};
let obj2={a: "moron", b: "scumbag", c: "moron", d: "dirtbag"};
console.log(totalAmountAdjectives(obj));
console.log(totalAmountAdjectives(obj1));
console.log(totalAmountAdjectives(obj2));