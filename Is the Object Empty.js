//Question link- https://edabit.com/challenge/nGybgqB9agSqvBszF
function isEmpty(obj) {
    for(let i in obj){
        if(obj.hasOwnProperty(i)){
            return false
        }
    }
    return true;
	
}
let obj={};
console.log(isEmpty(obj));
let obj1={ a: 1 };
console.log(isEmpty(obj1));

